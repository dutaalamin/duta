import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransition({ isActive, label }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-screen h-screen bg-ink z-50 flex items-center justify-center pointer-events-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ delay: 0.08, duration: 0.22 }}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-paper tracking-[-0.02em]"
          >
            {label}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
