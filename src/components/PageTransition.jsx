import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ isActive, label }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen bg-[#0a0a0a] z-50 flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="text-white text-3xl sm:text-4xl font-display font-light uppercase tracking-[0.25em]"
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
