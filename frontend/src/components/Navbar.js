
import React from 'react';

const Navbar = ({ onProfileClick }) => {
  return (
    <nav style={{ backgroundColor: '#84ab79', padding: '10px' }}>
      <h1 style={{ float: 'left', fontWeight: 'bold' }}>Welcome, User!</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li
          style={{ float: 'right', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
          onClick={onProfileClick}
        >
          Profile
        </li>
      </ul>
      <div style={{ clear: 'both' }}></div>
    </nav>
  );
};

export default Navbar;