import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  'Halo',
  'Bonjour',
  'Ciao',
  'Olá',
  'やあ',
  'Guten Tag',
  '안녕하세요',
  'Привет',
  'Hej',
];

export default function Preloader({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Cycle through greetings exactly once
  useEffect(() => {
    if (currentIndex === greetings.length - 1) {
      // Pause on the last greeting before sliding up
      const timeout = setTimeout(() => {
        setIsDone(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1000); // Allow time for exit slide animation to finish
      }, 600);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 350); // Premium pacing for readability

    return () => clearInterval(interval);
  }, [currentIndex, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col items-center justify-center pointer-events-auto select-none overflow-hidden"
        >
          {/* Cycling greetings container */}
          <div className="w-full flex items-center justify-center h-24 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12, ease: 'linear' }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white text-center tracking-wide block"
              >
                {greetings[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
