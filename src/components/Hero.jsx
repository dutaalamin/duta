import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
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

      {/* Floating Available Status Pill Left */}
      <div className="absolute left-0 top-[22%] sm:top-[28%] md:top-[36%] flex items-center gap-2.5 sm:gap-3 bg-[#111111]/90 backdrop-blur-md border-y border-r border-white/10 rounded-r-full pr-4 sm:pr-5 pl-4 sm:pl-7 py-2 sm:py-2.5 z-20 pointer-events-none select-none shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] sm:text-xs text-slate-200 font-medium tracking-wide uppercase font-display">
          Available for work
        </span>
      </div>

      {/* Floating Info Right (Primary Hero Branding with Staggered Alignment) */}
      <div className="absolute top-[22%] sm:top-[28%] md:top-[38%] right-6 sm:right-16 md:right-32 lg:right-56 flex flex-col items-start z-20 pointer-events-none select-none">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Duta Alamin
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-slate-400 font-light tracking-wide mt-1 sm:mt-2 pl-6 sm:pl-12 md:pl-16">
          Software Engineer
        </p>
      </div>
    </section>
  );
}
