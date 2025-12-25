import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

// Componente Home semplice
const Home = () => <h2>Home Page - Benvenuto!</h2>;

function App() {
  // Stato per simulare il login/logout
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="App" style={{ padding: '20px' }}>
        {/* Menu di navigazione globale */}
        <nav style={{ marginBottom: '20px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '10px' }}>Profile (Protetta)</Link>
          <Link to="/blog/1" style={{ marginRight: '10px' }}>Blog Post 1</Link>
          <Link to="/blog/2">Blog Post 2</Link>
        </nav>

        {/* Simulazione Login */}
        <div style={{ marginBottom: '20px' }}>
          <label>
            Status Utente: {isAuthenticated ? <span style={{color:'green'}}>Loggato</span> : <span style={{color:'red'}}>Non Loggato</span>}
          </label>
          <button 
            onClick={() => setIsAuthenticated(!isAuthenticated)} 
            style={{ marginLeft: '10px' }}
          >
            {isAuthenticated ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Configurazione delle Rotte */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Rotta Protetta + Rotte Annidate */}
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Sotto-rotte: verranno renderizzate dentro <Outlet /> di Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Rotta Dinamica */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
