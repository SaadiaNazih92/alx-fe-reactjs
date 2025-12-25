import React from 'react';
import { Navigate } from 'react-router-dom';

// isAuthenticated viene passato come prop per simulare il login
const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Se non è loggato, reindirizza alla home ("/")
    return <Navigate to="/" replace />;
  }

  // Se è loggato, mostra il componente figlio (es. Profile)
  return children;
};

export default ProtectedRoute;
