import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Schedule from './components/Schedule';
import DriversAndTeams from './components/DriversAndTeams';
import PitwallIntegration from './components/PitwallIntegration';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Schedule />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/drivers-and-teams" element={<DriversAndTeams />} />
        <Route path="/pitwall-integration" element={<PitwallIntegration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

