import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [time, setTime] = useState('');

  // Dynamically calculate GMT+7 (WIB) time for the hero clock
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const utc = date.getTime() + date.getTimezoneOffset() * 60000;
      const gmt7Date = new Date(utc + 3600000 * 7);
      
      let hours = gmt7Date.getHours();
      const minutes = String(gmt7Date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const formattedHours = String(hours).padStart(2, '0');
      
      setTime(`${formattedHours}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Floating Location & Time Left (Balancing the layout beautifully) */}
      <div className="absolute top-[18%] sm:top-[26%] md:top-[38%] left-4 sm:left-8 md:left-16 lg:left-28 flex flex-col items-start gap-1 sm:gap-2 z-20 pointer-events-none">
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-white/40 font-display">Based In</span>
        <span className="text-xs sm:text-base text-white/80 font-light">Indonesia</span>
        <div className="flex items-center gap-2 mt-1">
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs text-white/60 font-mono tracking-wide">{time} GMT+7</span>
        </div>
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
