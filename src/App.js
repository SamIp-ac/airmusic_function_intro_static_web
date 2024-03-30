import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import MainPage from './components/MainPage';
import RealtimeBabyLearningMode from './components/RealtimeBabyLearningMode';
import Login from './components/Login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/">
          {authenticated ? <MainPage /> : <Navigate to="/login" />}
        </Route>
        <Route path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/1_realtime_baby_learning_mode">
          {authenticated ? <RealtimeBabyLearningMode /> : <Navigate to="/login" />}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;