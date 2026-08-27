import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ currentView, setView }) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference"
    >
      <button
        onClick={() => setView('home')}
        className="font-display text-sm tracking-[0.25em] text-white hover:text-white/70 transition-colors duration-300 uppercase cursor-pointer"
      >
        © Code by Duta
      </button>

      <div className="flex gap-8 md:gap-12">
        <button
          onClick={() => setView('home')}
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
      </div>
    </motion.header>
  );
}
