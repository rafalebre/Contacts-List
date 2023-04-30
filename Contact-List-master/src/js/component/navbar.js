import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <Link to="/add">Add Contact</Link>
    </nav>
  );
};

export default Navbar;