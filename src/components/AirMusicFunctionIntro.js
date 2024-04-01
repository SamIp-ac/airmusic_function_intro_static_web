// File: components/AirMusicFunctionIntro.js
import React, { useState } from 'react';
import '../style/GeneralStyle.css';
import Sidebar from './Sidebar'; // Import the Sidebar component
import Topbar from './Topbar';
const AirMusicFunctionIntro = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
        {/* <Topbar/> */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className={`content-container ${isSidebarOpen ? 'shifted' : ''}`}>
          <button className="menu-button" onClick={toggleSidebar}>☰</button>
          <h1>AirMusic Function Introduction</h1>
          <h6 className="titleStyle">Updated at 30 March 2024 at 11:13:30 PM</h6>
          <h6 className="titleStyle">"Some Text"</h6>
          <h1>AirMusic App frontend Intro</h1>
          <h6 className="titleStyle">"Some Text"</h6>
          {/* Content for the introduction page */}
        </div>
    </div>
  );
};

export default AirMusicFunctionIntro;