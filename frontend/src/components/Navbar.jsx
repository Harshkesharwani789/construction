import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assests/Logo1.png';
import '../css/Navbar.css';
import logo from './../assests/WhatsApp_Image_2024-12-10_at_2.21.55_PM-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbarx">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/capability">Capabilities</Link></li>
        <li><Link to="/equipment">Event Gallery</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-button">
        <Link to="/appointment" className="appointment-btn">Make Appointment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
