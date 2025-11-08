
import React from 'react';

import { Link } from 'react-router-dom';



function Navbar() {



  const navStyle = {

    backgroundColor: '#333',

    padding: '15px',

    textAlign: 'center'

  };



  // Stile per i link

  const linkStyle = {

    color: 'white',

    margin: '0 15px',

    textDecoration: 'none', 

    fontWeight: 'bold'

  };



  return (

    <nav style={navStyle}>

      <Link to="/" style={linkStyle}>Home</Link>

      <Link to="/about" style={linkStyle}>About</Link>

      <Link to="/services" style={linkStyle}>Services</Link>

      <Link to="/contact" style={linkStyle}>Contact</Link>

    </nav>

  );

}



export default Navbar;
