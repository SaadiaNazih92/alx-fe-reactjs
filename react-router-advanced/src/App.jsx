import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';

const Home = () => <h2>Home Page</h2>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
          <Link to="/blog/1">Blog Post</Link>
        </nav>

        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* NOTA L'ASTERISCO QUI SOTTO: /profile/* */}
          <Route 
            path="/profile/*" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            } 
          />

          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
