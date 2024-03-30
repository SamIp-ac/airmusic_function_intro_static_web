// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>☰</button>
      <NavLink to="/airmusic_function_intro_static_web" activeClassName="active">AirMusic Function Frontend Intro</NavLink>
      <NavLink to="/images_intro" activeClassName="active">Image Intro Demo</NavLink>
      <NavLink to="/realtime_baby_learning_mode" activeClassName="active">Realtime Baby Learning Mode</NavLink>
    
      {/* Add more navigation links as needed */}
    </div>
  );
};

export default Sidebar;