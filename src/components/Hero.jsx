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

      {/* Floating Info Right (Primary Hero Branding) */}
      <div className="absolute top-[22%] sm:top-[28%] md:top-[38%] right-5 sm:right-12 md:right-24 lg:right-40 flex flex-col items-start gap-1.5 sm:gap-3 z-20 pointer-events-none select-none">
        <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-wide font-normal sm:font-medium whitespace-nowrap">
          Duta Alamin
        </h1>
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-wide font-normal sm:font-medium whitespace-nowrap">
          Software Engineer
        </h2>
      </div>
    </section>
  );
}
