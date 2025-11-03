import React from 'react';
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
  const [route, setRoute] = React.useState(window.location.pathname);

  const renderRoute = () => {
    const documentMatch = route.match(/^\/documents\/(.+)$/);
    if (documentMatch) {
      return <Editor documentId={documentMatch[1]} />;
    }
    switch (route) {
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/editor':
        return <Editor />;
      case '/alternative-editor':
        return <AlternativeEditor />;
      case '/document-settings':
        return <DocumentSettings />;
      case '/api-reference-editor':
        return <ApiReferenceEditor />;
      case '/analytics':
        return <AnalyticsDashboard />;
      case '/team':
        return <TeamManagement />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <a href="/" onClick={(e) => { e.preventDefault(); setRoute('/'); }} className="text-white">Dashboard</a>
          </div>
          <div>
            <a href="/login" onClick={(e) => { e.preventDefault(); setRoute('/login'); }} className="text-white mr-4">Login</a>
            <a href="/register" onClick={(e) => { e.preventDefault(); setRoute('/register'); }} className="text-white">Register</a>
          </div>
        </div>
      </nav>
      {renderRoute()}
    </div>
  );
}

export default App;
