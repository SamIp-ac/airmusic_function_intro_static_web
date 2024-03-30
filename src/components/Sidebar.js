// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Sidebar.css'; // You'll create this CSS file to style the sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/images_intro" activeClassName="active">Main Page</NavLink>
      <NavLink to="/realtime_baby_learning_mode" activeClassName="active">Realtime Baby Learning Mode</NavLink>
      <NavLink to="/airmusic_function_intro_static_web" activeClassName="active">AirMusic Function Intro</NavLink>
      {/* Add more navigation links as needed */}
    </div>
  );
};

export default Sidebar;