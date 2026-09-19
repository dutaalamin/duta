import React from 'react';
import { motion } from 'framer-motion';
import ThreeHero from './ThreeHero';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-center"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))]" />

      {/* 3D Scene Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <ThreeHero />
      </div>

      {/* Hero Typography: Duta Alamin (Left-center, shifted slightly upward for optimal visual balance) */}
      <div className="absolute left-8 sm:left-14 md:left-20 lg:left-32 xl:left-40 top-[45%] -translate-y-1/2 z-20 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative inline-block"
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-[0.9] select-none font-urbanist">
            Duta<br />Alamin
          </h1>

          {/* Duta3D Blue Angled Sticker Banner positioned just under Alamin */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: -5 }}
            transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 260, damping: 15 }}
            className="absolute bottom-0 right-[-10px] sm:right-[-20px] md:right-[-28px] translate-y-[88%] bg-[#263c70] text-white font-mono font-bold text-xs sm:text-sm md:text-base lg:text-lg tracking-wider px-3.5 sm:px-5 md:px-6 py-1.5 sm:py-2 border-2 border-white/30 shadow-[0_10px_30px_rgba(38,60,112,0.8)] uppercase select-none pointer-events-none"
          >
            SOFTWARE ENGINEER
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
