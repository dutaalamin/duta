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
      <div className="absolute bottom-[1.5vh] w-full overflow-hidden whitespace-nowrap flex z-0 pointer-events-none">
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

      {/* Floating Location Pill Left */}
      <div className="absolute left-0 top-[22%] sm:top-[28%] md:top-[38%] flex items-center gap-3 sm:gap-4 bg-[#111111]/90 backdrop-blur-md border-y border-r border-white/10 rounded-r-full pr-4 sm:pr-5 pl-4 sm:pl-8 py-2.5 sm:py-3 z-20 pointer-events-none select-none shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-start leading-none">
          <span className="text-[8px] tracking-[0.2em] uppercase text-white mb-0.5 sm:mb-1 font-display">Located in</span>
          <span className="text-[11px] sm:text-sm text-white font-light">Indonesia</span>
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" className="animate-spin-slow opacity-60">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
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
