import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/add-contact" className="add-contact-btn">
        Add New Contact
      </Link>
    </nav>
  );
};

export default Navbar;