import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ProjectsList from './components/ProjectsList';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [view, setView] = useState('home'); // 'home' or 'about'

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-[#5ce1e6] selection:text-dark">
      
      {/* Preloader */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showPreloader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Navigation */}
          <Navbar currentView={view} setView={setView} />

          {/* Conditional Views with Framer Motion transitions */}
          <AnimatePresence mode="wait">
            {view === 'home' ? (
              <motion.div
                key="home-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Hero />
                <Intro setView={setView} />
                <ProjectsList />
                <Contact />
              </motion.div>
            ) : (
              <motion.div
                key="about-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <AboutPage />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
