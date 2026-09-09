import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-end justify-center border-b border-white/5"
    >
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

      {/* Continuous Auto-Scrolling Huge Outline Text Slider (100% Synchronized Screen-Edge Wrap) */}
      <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap flex z-0 pointer-events-none">
        <motion.div
          animate={{ x: ["-100vw", "0vw"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex items-center whitespace-nowrap shrink-0"
        >
          <div className="w-[100vw] flex justify-center items-center shrink-0">
            <h1 className="text-[11vw] sm:text-[12vw] md:text-[10vw] font-extrabold font-chakra uppercase tracking-wider select-none text-transparent [-webkit-text-stroke:1.5px_rgba(56,189,248,0.35)] animate-chidori">
              DUTA ALAMIN
            </h1>
          </div>
          <div className="w-[100vw] flex justify-center items-center shrink-0">
            <h1 className="text-[11vw] sm:text-[12vw] md:text-[10vw] font-extrabold font-chakra uppercase tracking-wider select-none text-transparent [-webkit-text-stroke:1.5px_rgba(56,189,248,0.35)] animate-chidori">
              DUTA ALAMIN
            </h1>
          </div>
        </motion.div>
      </div>

      {/* Floating Available Status Pill Left */}
      <div className="absolute left-0 top-[22%] sm:top-[28%] md:top-[38%] flex items-center gap-2.5 sm:gap-3 bg-[#111111]/90 backdrop-blur-md border-y border-r border-white/10 rounded-r-full pr-4 sm:pr-5 pl-4 sm:pl-7 py-2 sm:py-2.5 z-20 pointer-events-none select-none shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] sm:text-xs text-slate-200 font-medium tracking-wide uppercase font-display">
          Available for work
        </span>
      </div>

      {/* Floating Info Right (Positioned for optimal visual balance on all devices) */}
      <div className="absolute top-[22%] sm:top-[28%] md:top-[38%] right-5 sm:right-12 md:right-24 lg:right-40 flex flex-col items-start z-20 pointer-events-none">
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-wide font-normal sm:font-medium whitespace-nowrap">
          Software Engineer
        </h2>
      </div>
    </section>
  );
}
