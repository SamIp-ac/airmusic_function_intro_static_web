import React from 'react';
import {
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import MainPage from './MainPage';
import RealtimeBabyLearningMode from './RealtimeBabyLearningMode';
import AirMusicFunctionIntro from './AirMusicFunctionIntro';

function Topbar() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab><Link to="/airmusic_function_intro_static_web">AirMusic Intro</Link></Tab>
          <Tab><Link to="/images_intro">Images Intro</Link></Tab>
          <Tab><Link to="/realtime_baby_learning_mode">Realtime Learning</Link></Tab>
        </TabList>
      </Tabs>
      
      <Routes>
        <Route path="/airmusic_function_intro_static_web" element={<AirMusicFunctionIntro />} />
        <Route path="/images_intro" element={<MainPage />} />
        <Route path="/realtime_baby_learning_mode" element={<RealtimeBabyLearningMode />} />
        <Route path="*" element={<Navigate to="/airmusic_function_intro_static_web" replace />} />
      </Routes>
    </div>
  );
}

export default Topbar;