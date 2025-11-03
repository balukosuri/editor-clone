# Documentation Editor

This is a full-stack documentation editor built with React, Node.js, and PostgreSQL. It features a real-time Markdown editor, user authentication, and a dashboard for managing documents.

## Project Structure

The project is a monorepo with the following structure:

- `/client`: Contains the React frontend application.
- `/server`: Contains the Node.js backend application.

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - `marked` for Markdown to HTML conversion
  - `axios` for HTTP requests

- **Backend:**
  - Node.js
  - Express
  - PostgreSQL
  - `pg` for database connectivity
  - `bcrypt` for password hashing
  - `jsonwebtoken` for session management

## Setup and Installation

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Backend Setup

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**
   - Create a new database named `api`.
   - Update the database credentials in `server/db.js`.

4. **Start the server:**
   ```bash
   node index.js
   ```
   The server will be running at `http://localhost:3001`.

### Frontend Setup

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Start the client:**
   ```bash
   npm run dev
   ```
   The client will be running at `http://localhost:5173`.

## Running the Application

Once both the client and server are running, you can access the application by navigating to `http://localhost:5173` in your browser.
