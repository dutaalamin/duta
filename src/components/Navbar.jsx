import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Navbar({ currentView, setView }) {
  const items = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease }}
      className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 lg:px-20 py-7 flex justify-between items-center"
    >
      <button
        onClick={() => {
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="group cursor-pointer"
      >
        <span className="text-base sm:text-lg uppercase text-paper/90 group-hover:text-signal transition-colors duration-300">
          Duta
        </span>
      </button>

      <nav className="flex gap-8 md:gap-12">
        {items.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`text-base sm:text-lg uppercase tracking-wide transition-colors duration-300 cursor-pointer ${
                isActive ? 'text-signal' : 'text-paper/60 hover:text-paper'
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
