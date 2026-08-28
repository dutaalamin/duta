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
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-screen h-screen bg-[#111111] z-50 flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Subtle liquid curve SVG on top/bottom boundary for organic look */}
          <div className="flex items-center gap-4">
            <span className="w-2.5 h-2.5 rounded-full bg-white/80 animate-ping" />
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="text-white text-3xl sm:text-4xl font-display font-light uppercase tracking-[0.25em] pl-1"
            >
              {label}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
