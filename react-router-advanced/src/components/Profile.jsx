import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px' }}>
      <h2>Profilo Utente</h2>
      {/* Navigazione interna al profilo */}
      <nav>
        <Link to="details" style={{ marginRight: '10px' }}>Dettagli</Link>
        <Link to="settings">Impostazioni</Link>
      </nav>
      
      {/* Qui verranno renderizzati ProfileDetails o ProfileSettings */}
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
