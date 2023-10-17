import React, { useState } from 'react';
import {Route, Routes, Navigate } from "react-router-dom"
import { SessionInfo } from './components/context/context';

import Dashboard from './components/dashboard/dashboard';
import HealthInfo from './components/healthinfo/healthinfo';
import Workout from './components/workout/workout';
import Progress from './components/trackprogress/progress';
import Social from './components/social/social';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import OneRepMax from './components/onerepmax/onerepmax';

function App() {
  const [sessionInfo, setSessionInfo] = useState({
    "id" : 1,
    "username" : ""
  });

  return (
    <SessionInfo.Provider value={{sessionInfo, setSessionInfo}}>
        <Routes>
          <Route path="/" element={sessionInfo["id"] <= 0 ? <Login /> : <Navigate to="/dashboard" replace />} />
          <Route path="/login" element={sessionInfo["id"] <= 0 ? <Login /> : <Navigate to="/dashboard" replace />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <Dashboard />} />
          <Route path="/healthinfo" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <HealthInfo />} />
          <Route path="/workout" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <Workout />} />
          <Route path="/progress" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <Progress />} /> 
          <Route path="/social" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <Social />} />
          <Route path="/onerepmax" element={sessionInfo["id"] <= 0 ? <Navigate to="/" replace /> : <OneRepMax />} />
        </Routes>
    </SessionInfo.Provider>
  );
}

export default App;
