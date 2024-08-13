import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import './Navbar.css';
import Logo from '/logo.png'

const Navbar = ({ toggleSidebar }) => (
  <div className="navbar">
    <button className="navbar-toggle" onClick={toggleSidebar}>
      ☰
    </button>
    <div className="logo"><img src={Logo} alt="" /></div>
    <div className="icons-container">
      <FaSearch className="navbar-icon" />
      <FaBell className="navbar-icon" />
      <FaUser className="navbar-icon" />
      <span className="user-name">Dr. John Doe</span>
    </div>
  </div>
);

export default Navbar;
