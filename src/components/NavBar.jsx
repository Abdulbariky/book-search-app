import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/contact Us">Contact Us</Link></li> {/* Add Contact Us link */}
      </ul>
    </nav>
  );
};

export default Navbar;
