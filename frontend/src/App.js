import React from 'react';
import { Route, Routes } from "react-router-dom"

import Dashboard from './components/dashboard/dashboard';
import HealthInfo from './components/healthinfo/healthinfo';
import Workout from './components/workout/workout';
import Progress from './components/trackprogress/progress';
import Social from './components/social/social';
import Login from './components/login/login';
import Signup from './components/signup/signup';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/healthinfo" element={<HealthInfo />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/social" element={<Social />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
