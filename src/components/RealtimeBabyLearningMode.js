import React from 'react';

function RealtimeBabyLearningMode() {
  return (
    <div>
      <h2>Showcase</h2>
      <h3>Video Demonstrations</h3>
      {/* List of videos to display */}
      <video width="960" height="480" controls>
        <source src="/assets/mp4/realtime_baby_learning_mode.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default RealtimeBabyLearningMode;