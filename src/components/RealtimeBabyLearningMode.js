import React from 'react';
import realtime_baby_learning_mode_video from '../mp4/realtime_baby_learning_mode.mp4';
import '../style/GeneralStyle.css';
import '../style/GeneralStyle.css';
import Sidebar from './Sidebar'; // Import the Sidebar component

function RealtimeBabyLearningMode() {
  return (
    <div className="main-container">
        <Sidebar />
        <div className="content-container">
        <h2 className="titleStyle">Showcase</h2>
        <h3 className="titleStyle">Video Demonstrations</h3>
        {/* List of videos to display */}
        <video width="960" height="480" controls className="videoSize">
          <source src={realtime_baby_learning_mode_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default RealtimeBabyLearningMode;