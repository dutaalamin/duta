import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ currentView, setView }) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-center"
    >
      <button
        onClick={() => {
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`font-display text-xs sm:text-sm tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
          currentView === 'home' ? 'text-white' : 'text-white/80 hover:text-white'
        }`}
      >
        © Code by Duta
      </button>

      <nav className="flex gap-8 md:gap-10">
        {[
          { id: 'work', label: 'Work' },
          { id: 'about', label: 'About' },
          { id: 'contact', label: 'Contact' },
        ].map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`font-sans text-xs sm:text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer ${
                isActive
                  ? 'text-[#1839db] font-bold'
                  : 'text-white hover:text-[#1839db] font-medium'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </motion.header>
  );
}
