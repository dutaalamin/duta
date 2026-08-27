import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ currentView, setView }) {
  const handleContactClick = () => {
    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 550);
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <button
        onClick={() => {
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="font-display text-sm tracking-[0.25em] text-white hover:text-white/70 transition-colors duration-300 uppercase cursor-pointer"
      >
        © Code by Duta
      </button>

      <div className="flex gap-8 md:gap-12">
        <button
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
            currentView === 'home' ? 'text-white font-medium' : 'text-white/40 hover:text-white'
          }`}
        >
          Work
        </button>
        <button
          onClick={() => setView('about')}
          className={`font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
            currentView === 'about' ? 'text-white font-medium' : 'text-white/40 hover:text-white'
          }`}
        >
          About
        </button>
        <button
          onClick={handleContactClick}
          className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          Contact
        </button>
      </div>
    </motion.header>
  );
}
