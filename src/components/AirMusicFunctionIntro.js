// File: components/AirMusicFunctionIntro.js

import React from 'react';
import '../style/GeneralStyle.css';
import Sidebar from './Sidebar'; // Import the Sidebar component

const AirMusicFunctionIntro = () => {
  return (
    <div className="main-container">
        <Sidebar />
          <div className="content-container">
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