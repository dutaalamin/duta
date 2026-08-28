import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Section 1: Editorial Headline Title (Dennis Style) */}
      <div className="pt-8 md:pt-16 pb-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-light text-white leading-[1.15] uppercase tracking-wide max-w-[90%]"
        >
          Helping businesses scale and automate in the digital world
        </motion.h1>
      </div>

      {/* Horizontal Divider Line with Rotating Globe Button (Dennis Style) */}
      <div className="relative w-full my-12 md:my-20">
        <div className="w-full h-[1px] bg-white/15" />
        <div className="absolute right-4 sm:right-16 top-1/2 -translate-y-1/2 z-20">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden select-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="animate-spin-slow opacity-60">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              <path d="M2 12h20"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Intro Block: Arrow + Text on Left, Wide Landscape Image on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left column: Arrow & Paragraph */}
        <div className="lg:col-span-4 flex gap-4 md:gap-6 items-start">
          <span className="text-xl sm:text-2xl text-white/50 pt-1 shrink-0 select-none">→</span>
          <div className="flex flex-col gap-6">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              I help companies and startups build high-performance software systems. By merging clean code with system automation, I ensure that each application is optimized for scalability, speed, and real-world reliability.
            </p>
            <span className="text-xs tracking-wider uppercase text-white/30 font-display">Always engineering...</span>
          </div>
        </div>

        {/* Right column: Wide Grayscale Photo */}
        <div className="lg:col-span-8 w-full">
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#161616] border border-white/10 relative group shadow-2xl">
            {/* Using projects/draken.png as a wide editorial workspace header since it represents software dev */}
            <img 
              src="/images/projects/draken.png" 
              alt="Duta Alamin Workspace" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out" 
            />
          </div>
        </div>

      </div>

      {/* Section 2: "I can help you with .." (Dennis Style 3-Column Services) */}
      <div className="mt-32 md:mt-44">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-light text-white mb-16 tracking-wide"
        >
          I can help you with ..
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 01: Design */}
          <div className="border-t border-white/15 pt-8 flex flex-col gap-6">
            <span className="text-[11px] tracking-widest text-white/20 font-mono">01</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium">Design</h3>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
              Designing clean, modern, and interactive digital interfaces. I craft user-focused designs that align seamlessly with technology to ensure your digital product stands out.
            </p>
          </div>

          {/* Column 02: Development */}
          <div className="border-t border-white/15 pt-8 flex flex-col gap-6">
            <span className="text-[11px] tracking-widest text-white/20 font-mono">02</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium">Development</h3>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
              Building fast, reliable, and scalable web applications from scratch. Specialized in clean React code, secure backend integration, database optimization, and system logic.
            </p>
          </div>

          {/* Column 03: The Full Package */}
          <div className="border-t border-white/15 pt-8 flex flex-col gap-6">
            <span className="text-[11px] tracking-widest text-white/20 font-mono">03</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium flex items-center gap-2">
              <span className="text-white">✦</span> The full package
            </h3>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
              A complete application from initial database concept to interactive frontend deployment. Handling both engineering and design enables me to build seamless digital solutions.
            </p>
          </div>

        </div>
      </div>

      {/* Section 3: AI & System Engineering Highlights (Dennis Awwwards Judge Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-36 md:mt-48 items-center border-t border-white/5 pt-20">
        
        {/* Left Side: Portrait Image Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="w-64 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-[#161616] border border-white/10 shadow-2xl relative group">
            <img 
              src="/images/duta.png" 
              alt="Duta Alamin Portrait" 
              className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
            />
          </div>
        </div>

        {/* Right Side: Rotating Badge & Editorial Text */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Rotating Text Badge */}
          <div className="relative w-28 h-28 flex items-center justify-center select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite] absolute">
              <path id="textPath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[6px] fill-white/30 tracking-[0.15em] uppercase font-mono font-medium">
                <textPath href="#textPath" startOffset="0%">
                  • software engineer • automation • intelligent systems
                </textPath>
              </text>
            </svg>
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-xs text-white/50 font-display font-light">DA</span>
            </div>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl text-white font-medium tracking-wide">
            AI Research &amp; System Engineering
          </h3>

          <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-light">
            I specialize in bridging the gap between deep learning model architecture, database systems, and modern web applications. From researching deep learning architectures (CNN) for volcanic activity classification to developing high-performance enterprise systems, I leverage technology to drive efficiency and system reliability.
          </p>
        </div>

      </div>

    </div>
  );
}
