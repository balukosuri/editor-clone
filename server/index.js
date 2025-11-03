require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const { createUserTable, createDocumentTable } = require('./queries');
const app = express();
const port = 3001;

app.use(express.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { rows } = await db.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
      [email, hashedPassword]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { rows } = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (rows.length === 0) {
      return res.status(400).send('Invalid email or password');
    }
    const user = rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid email or password');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in');
  }
});

app.post('/documents', authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await db.query(
      'INSERT INTO documents (title, content, owner_id) VALUES ($1, $2, $3) RETURNING *',
      [title, content, req.user.userId]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating document');
  }
});

app.get('/documents', authenticateToken, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM documents WHERE owner_id = $1', [req.user.userId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error getting documents');
  }
});

app.get('/documents/:id', authenticateToken, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM documents WHERE id = $1 AND owner_id = $2', [
      req.params.id,
      req.user.userId,
    ]);
    if (rows.length === 0) {
      return res.status(404).send('Document not found');
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error getting document');
  }
});

app.put('/documents/:id', authenticateToken, async (req, res) => {
  const { title, content } = req.body;
  try {
    const { rows } = await db.query(
      'UPDATE documents SET title = $1, content = $2, updated_at = NOW() WHERE id = $3 AND owner_id = $4 RETURNING *',
      [title, content, req.params.id, req.user.userId]
    );
    if (rows.length === 0) {
      return res.status(404).send('Document not found');
    }
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating document');
  }
});

app.delete('/documents/:id', authenticateToken, async (req, res) => {
  try {
    const { rowCount } = await db.query('DELETE FROM documents WHERE id = $1 AND owner_id = $2', [
      req.params.id,
      req.user.userId,
    ]);
    if (rowCount === 0) {
      return res.status(404).send('Document not found');
    }
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting document');
  }
});


app.get('/', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.send(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to database');
  }
});

const createTables = async () => {
  try {
    await db.query(createUserTable);
    await db.query(createDocumentTable);
    console.log('Tables created successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  }
};

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  createTables();
});
