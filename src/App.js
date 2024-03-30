// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import MainPage from './components/MainPage';
import RealtimeBabyLearningMode from './components/RealtimeBabyLearningMode';
import Login from './components/Login';
import AirMusicFunctionIntro from './components/AirMusicFunctionIntro';
// Add imports for any new components here

function App() {
  // Removed the useState hook since we no longer need the authenticated state

  return (
    <Router>
      <Routes>
      <Route path="/airmusic_function_intro_static_web" element={<AirMusicFunctionIntro />} />
        <Route path="/images_intro" element={<MainPage />} />
        <Route path="/realtime_baby_learning_mode" element={<RealtimeBabyLearningMode />} />
        {/* Add more routes as needed */}
        {/* Example: <Route path="/some_path" element={<SomeComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;