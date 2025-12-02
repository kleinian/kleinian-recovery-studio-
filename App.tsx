import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Results from './components/Results';
import Process from './components/Process';
import LeadMagnets from './components/LeadMagnets';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import PhilosophyPage from './pages/PhilosophyPage';

const LandingPage: React.FC = () => {
  return (
    <main className="w-full relative">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Philosophy />
      <Problem />
      <Solution />
      <Results />
      <Process />
      <LeadMagnets />
      <Footer />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
      </Routes>
    </Router>
  );
};

export default App;