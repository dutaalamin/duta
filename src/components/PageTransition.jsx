import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ isActive, label }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-screen h-screen bg-[#0a0a0a] z-50 flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="text-white text-2xl sm:text-3xl font-display font-light uppercase tracking-[0.25em]"
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
