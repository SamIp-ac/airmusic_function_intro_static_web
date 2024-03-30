import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import MainPage from './components/MainPage';
import RealtimeBabyLearningMode from './components/RealtimeBabyLearningMode';
import Login from './components/Login';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authenticated ? <MainPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/1_realtime_baby_learning_mode">
          {authenticated ? <RealtimeBabyLearningMode /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;