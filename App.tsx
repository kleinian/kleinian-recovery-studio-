import React, { useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Problem from './components/Problem';
import Process from './components/Process';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-stone-50 overflow-hidden">
       {/* Global Background - Seamless across sections */}
       <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Base */}
          <div className="absolute inset-0 bg-stone-50" />
          
          {/* Dynamic Blobs */}
          <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             x: [-50, 50, -50],
             y: [-50, 50, -50],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-sage-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-80"
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2],
             x: [50, -50, 50],
             y: [50, -50, 50],
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-80"
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.3, 1],
             x: [-30, 30, -30],
             y: [30, -30, 30],
           }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] bg-orange-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-80"
         />
       </div>

      {/* Scroll Snap Container */}
      <main className="relative z-10 h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Problem />
        <Philosophy />
        <Process />
        <Footer />
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;