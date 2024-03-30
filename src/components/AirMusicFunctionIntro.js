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
        {/* Content for the introduction page */}
      </div>
    </div>
  );
};

export default AirMusicFunctionIntro;