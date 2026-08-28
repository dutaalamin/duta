import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const capabilities = [
    {
      num: '01',
      title: 'Web Engineering & Development',
      description: 'Developing fast, responsive, and interactive web platforms from scratch. Focused on clean code, smooth animations, and creating intuitive user experiences that perform seamlessly on all devices.'
    },
    {
      num: '02',
      title: 'Backend & Database Systems',
      description: 'Designing scalable database architectures, optimizing query performance, and building secure, high-performance API integrations to support complex business operations.'
    },
    {
      num: '03',
      title: 'Enterprise Automation & Logic',
      description: 'Developing custom automation scripts, integrating enterprise system modules, and writing reliable process logic to automate manual tasks and improve overall system efficiency.'
    },
    {
      num: '04',
      title: 'AI & Data-Driven Logic',
      description: 'Leveraging computer science fundamentals to integrate intelligent workflows and data classification systems, helping businesses utilize automation to make smarter choices.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Editorial Headline Title (Dennis Style) */}
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

      {/* Intro Block: Arrow + Text on Left, Large Grayscale Image on Right */}
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
            <img 
              src="/images/duta.png" 
              alt="Duta Alamin" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out" 
            />
          </div>
        </div>

      </div>

      {/* Capabilities Section (Dennis Style Grid Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-32 md:mt-44 border-t border-white/10 pt-16">
        
        {/* Section title left */}
        <div className="lg:col-span-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-display block">Capabilities</span>
        </div>

        {/* Capabilities list right */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {capabilities.map((cap) => (
            <div key={cap.title} className="flex flex-col gap-4 border-b border-white/5 pb-8">
              <span className="text-[10px] tracking-widest text-white/20 font-mono font-light">{cap.num}</span>
              <h3 className="text-lg text-white font-medium">{cap.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Philosophy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-28 border-t border-white/5 pt-16">
        <div className="lg:col-span-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-display block">My Philosophy</span>
        </div>
        <div className="lg:col-span-8">
          <p className="text-sm sm:text-base text-white/40 leading-relaxed font-light max-w-2xl">
            I believe in writing code that is clean, maintainable, and optimized for performance. I approach software development not just as writing syntax, but as designing robust architectures that directly drive business efficiency and user satisfaction.
          </p>
        </div>
      </div>

    </div>
  );
}
