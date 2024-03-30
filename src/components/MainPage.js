// MainPage.js
import React, { useState } from 'react';
import main_function_intro_img from '../images/main_function_intro.png';
import drawing_record from '../images/drawing_record.png';
import '../style/GeneralStyle.css';
import Sidebar from './Sidebar'; // Import the Sidebar component

function MainPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="main-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`content-container ${isSidebarOpen ? 'shifted' : ''}`}>
        <button className="menu-button" onClick={toggleSidebar}>☰</button>
        <h2 className="titleStyle">Web Image Showcase</h2>
        <div>
          <h3 className="titleStyle">Different Showcase</h3>
          <div>
            <h3 className="titleStyle">Image Demonstrations</h3>
            {/* List of images to display */}
            <img className="imgSize" src={main_function_intro_img} alt="Main Function Intro" />
            <img className="imgSize" src={drawing_record} alt="Drawing Record" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;