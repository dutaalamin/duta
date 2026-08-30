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
        className="absolute left-[48.5%] z-0 w-auto max-w-none object-contain object-bottom pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-95"
        style={{
          height: '90vh',
          bottom: '0',
          transform: 'translateX(-50%) rotate(-2deg)',
          transformOrigin: 'bottom center'
        }}
      />

      {/* Continuous Auto-Scrolling Huge Text Slider (Moves Right in front of Sasuke) */}
      <div className="absolute bottom-[1.5vh] w-full overflow-hidden whitespace-nowrap flex z-10 pointer-events-none">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          className="flex items-center whitespace-nowrap shrink-0"
        >
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-medium text-white leading-none tracking-tight pr-8 sm:pr-12">
            - Duta Alamin
          </h1>
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-medium text-white leading-none tracking-tight pr-8 sm:pr-12">
            - Duta Alamin
          </h1>
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
          className="flex items-center whitespace-nowrap shrink-0"
        >
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-medium text-white leading-none tracking-tight pr-8 sm:pr-12">
            - Duta Alamin
          </h1>
          <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] font-medium text-white leading-none tracking-tight pr-8 sm:pr-12">
            - Duta Alamin
          </h1>
        </motion.div>
      </div>

      {/* Floating Location Pill Left (Sticking to the left edge like Dennis, but custom monochrome style) */}
      <div className="absolute left-0 top-[22%] sm:top-[28%] md:top-[38%] flex items-center gap-3 sm:gap-4 bg-[#111111]/90 backdrop-blur-md border-y border-r border-white/10 rounded-r-full pr-4 sm:pr-5 pl-4 sm:pl-8 py-2.5 sm:py-3 z-20 pointer-events-none select-none shadow-[20px_0_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-start leading-none">
          <span className="text-[8px] tracking-[0.2em] uppercase text-white mb-0.5 sm:mb-1 font-display">Located in</span>
          <span className="text-[11px] sm:text-sm text-white font-light">Indonesia</span>
        </div>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden shrink-0">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" className="animate-spin-slow opacity-60">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
          </svg>
        </div>
      </div>

      {/* Floating Info Right (Positioned for optimal visual balance on all devices) */}
      <div className="absolute top-[22%] sm:top-[28%] md:top-[38%] right-4 sm:right-8 md:right-16 lg:right-28 flex flex-col items-start gap-2 sm:gap-4 md:gap-5 z-20 pointer-events-none">
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-wide font-normal sm:font-medium">
          Software<br />
          Engineer & Developer
        </h2>
      </div>
    </section>
  );
}
