import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCalendarAlt, FaHistory, FaHome } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <NavLink to="/" exact className="sidebar-link" onClick={toggleSidebar}>
      <FaHome className="sidebar-icon" />
      <span>Home</span>
    </NavLink>
    <NavLink to="/appointments" className="sidebar-link" onClick={toggleSidebar}>
      <FaCalendarAlt className="sidebar-icon" />
      <span>Appointments</span>
    </NavLink>
    <NavLink to="/history" className="sidebar-link" onClick={toggleSidebar}>
      <FaHistory className="sidebar-icon" />
      <span>History</span>
    </NavLink>
  </div>
);

export default Sidebar;
