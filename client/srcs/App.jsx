import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Editor from './Editor';
import AlternativeEditor from './AlternativeEditor';
import DocumentSettings from './DocumentSettings';
import ApiReferenceEditor from './ApiReferenceEditor';
import AnalyticsDashboard from './AnalyticsDashboard';
import TeamManagement from './TeamManagement';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/documents/:id" element={<Editor />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/alternative-editor" element={<AlternativeEditor />} />
      <Route path="/document-settings" element={<DocumentSettings />} />
      <Route path="/api-reference-editor" element={<ApiReferenceEditor />} />
      <Route path="/analytics" element={<AnalyticsDashboard />} />
      <Route path="/team" element={<TeamManagement />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
