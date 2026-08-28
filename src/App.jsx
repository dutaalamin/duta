import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ProjectsList from './components/ProjectsList';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import ContactPage from './components/ContactPage';
import PageTransition from './components/PageTransition';
import WorkPage from './components/WorkPage';

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [view, setView] = useState('home'); // 'home', 'work', 'about', or 'contact'
  const [transition, setTransition] = useState({ isActive: false, label: '' });

  const handleNavigate = (targetView) => {
    if (targetView === view) return;

    let label = 'Home';
    if (targetView === 'work') label = 'Work';
    if (targetView === 'about') label = 'About';
    if (targetView === 'contact') label = 'Contact';

    // 1. Activate transition overlay (slides in)
    setTransition({ isActive: true, label });

    // 2. Switch view under the hood while covered
    setTimeout(() => {
      setView(targetView);
      window.scrollTo({ top: 0 });
    }, 400);

    // 3. Deactivate overlay (slides out)
    setTimeout(() => {
      setTransition({ isActive: false, label: '' });
    }, 800);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-[#5ce1e6] selection:text-dark">
      <Analytics />
      <PageTransition isActive={transition.isActive} label={transition.label} />
      
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
          <Navbar currentView={view} setView={handleNavigate} />

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
                <Intro setView={handleNavigate} />
                <ProjectsList limit={4} setView={handleNavigate} />
                <Contact setView={handleNavigate} />
              </motion.div>
            ) : view === 'work' ? (
              <motion.div
                key="work-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <WorkPage setView={handleNavigate} />
                <Contact setView={handleNavigate} />
              </motion.div>
            ) : view === 'about' ? (
              <motion.div
                key="about-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <AboutPage />
                <Contact setView={handleNavigate} />
              </motion.div>
            ) : (
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ContactPage />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
