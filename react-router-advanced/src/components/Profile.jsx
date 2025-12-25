import React from 'react';
// Importiamo Routes e Route come vuole il checker
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      {/* Menu interno del profilo */}
      <nav>
        <Link to="details" style={{ marginRight: '10px' }}>Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Definizione delle rotte annidate direttamente qui */}
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
