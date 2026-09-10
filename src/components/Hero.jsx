import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const titles = ["Duta Alamin", "Software Engineer"];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-end justify-center border-b border-white/5"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))]" />

      {/* Sasuke Center Cutout */}
      <motion.img
        src="/images/sasuke.webp"
        alt="Sasuke Uchiha"
        className="absolute left-[48.5%] z-10 w-auto max-w-none object-contain object-bottom pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-95"
        style={{
          height: '90vh',
          bottom: '0',
          transform: 'translateX(-50%) rotate(-2deg)',
          transformOrigin: 'bottom center'
        }}
      />

      {/* Floating Available Status Pill Left (Appears periodically with sliding animation, compact on mobile) */}
      <motion.div
        initial={{ x: '-105%', opacity: 0 }}
        animate={{
          x: ['-105%', '0%', '0%', '-105%', '-105%'],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.1, 0.5, 0.6, 1],
        }}
        className="absolute left-0 top-[22%] sm:top-[28%] md:top-[38%] h-7 sm:h-12 flex items-center gap-2 sm:gap-3 bg-[#111111]/90 backdrop-blur-md border-y border-r border-white/10 rounded-r-full pr-3 sm:pr-5 pl-3 sm:pl-6 z-20 pointer-events-none select-none shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
      >
        <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[9px] sm:text-xs text-slate-200 font-medium tracking-wider uppercase font-display whitespace-nowrap">
          Available for work
        </span>
      </motion.div>

      {/* Floating Rotating Title Right (Positioned for optimal desktop and mobile visual balance) */}
      <div className="absolute top-[22%] sm:top-[28%] md:top-[38%] left-[60%] sm:left-[64%] md:left-[68%] lg:left-[71%] h-11 sm:h-14 flex items-center justify-start z-20 pointer-events-none select-none overflow-hidden py-1">
        <AnimatePresence mode="wait">
          <motion.h2
            key={titleIndex}
            initial={{ y: 22, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -22, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-2xl md:text-3xl lg:text-5xl text-white leading-normal tracking-tight font-medium whitespace-nowrap drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] pb-1"
          >
            {titles[titleIndex]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </section>
  );
}
