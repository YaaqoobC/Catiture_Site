// Header.js
import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling
import logoImage from './Pictures/logo.png'; // Adjust the path to match your image location

const Navbar = () => {
  return (
    <header className="Navbar">
    <div className="logo">
        <img src={logoImage} alt="Logo" className="logo-image" /> {/* Add the image logo */}
        <div className="logo-text">
            <span className="logo-title">Catiture</span>
            <span className="subheading">Cat Trees, Scratching Posts, & More</span>
        </div>
    </div>
    <nav className="Navbar">
        <ul>
          <li><Link to="/" className="nav-button">Home</Link></li>
          <li><Link to="/shop" className="nav-button">Shop</Link></li>
          <li><Link to="/contact" className="nav-button">Contact</Link></li>
          <li><Link to="/cart" className="nav-button">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;