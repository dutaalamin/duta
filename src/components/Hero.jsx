import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex items-end justify-center border-b border-white/5"
    >
      {/* Sasuke Avatar Character (Positioned Behind Text & Enlarged Taller) */}
      <motion.img 
        src="/images/sasuke.png" 
        alt="Sasuke Uchiha" 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-auto h-[72vh] sm:h-[82vh] md:h-[92vh] object-contain object-bottom pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-95"
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

      {/* Floating Info Right (Positioned for optimal visual balance on all devices) */}
      <div className="absolute top-[18%] sm:top-[26%] md:top-[38%] right-4 sm:right-8 md:right-16 lg:right-28 flex flex-col items-start gap-2 sm:gap-4 md:gap-5 z-20 pointer-events-none">
        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl text-white leading-tight tracking-wide font-normal sm:font-medium">
          Software<br/>
          Engineer & Developer
        </h2>
      </div>
    </section>
  );
}
