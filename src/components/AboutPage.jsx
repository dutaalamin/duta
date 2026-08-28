import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-32">
      
      {/* Section 1: Large Editorial Headline */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-8 md:pt-20 pb-16 md:pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white leading-[1.1] tracking-tight"
        >
          Helping businesses<br className="hidden sm:block" /> thrive in the<br className="hidden sm:block" /> digital world
        </motion.h1>
      </div>

      {/* Section 2: Divider + Globe */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="relative w-full">
          <div className="w-full h-[1px] bg-white/10" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute right-8 sm:right-20 top-1/2 -translate-y-1/2"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="animate-spin-slow opacity-50">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3: Arrow + Bio Text Left, Portrait Photo Right */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-20 md:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Arrow + Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex gap-5 items-start"
          >
            <span className="text-lg text-white/40 pt-1 shrink-0 select-none">→</span>
            <div className="flex flex-col gap-6">
              <p className="text-sm sm:text-[15px] text-white/60 leading-[1.8] font-light">
                I help companies from all over the world with tailor-made software solutions. Combining clean code, system engineering, and modern design to build digital products that truly perform.
              </p>
              <p className="text-sm sm:text-[15px] text-white/60 leading-[1.8] font-light">
                With each project, I push my work to new horizons, always putting quality first.
              </p>
              <span className="text-[11px] tracking-[0.2em] uppercase text-white/25 font-display mt-2">Always exploring.</span>
            </div>
          </motion.div>

          {/* Right: Portrait Photo */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full"
          >
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#111] relative group">
              <img 
                src="/images/duta.png" 
                alt="Duta Alamin" 
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out" 
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Section 4: "I can help you with .." - 3 Column Grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-36 md:mt-52">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white mb-16 md:mb-20 tracking-tight"
        >
          I can help you with ..
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          
          {/* 01 Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="border-t border-white/10 pt-8 pb-12 md:pr-8"
          >
            <span className="text-[11px] tracking-widest text-white/20 font-mono block mb-8">01</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-5 tracking-tight">Design</h3>
            <p className="text-[13px] text-white/35 leading-[1.8] font-light">
              With a solid track record in designing interfaces, I deliver strong and user-friendly digital designs that align with brand identity and business goals.
            </p>
          </motion.div>

          {/* 02 Development */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border-t border-white/10 pt-8 pb-12 md:px-8"
          >
            <span className="text-[11px] tracking-widest text-white/20 font-mono block mb-8">02</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-5 tracking-tight">Development</h3>
            <p className="text-[13px] text-white/35 leading-[1.8] font-light">
              I build scalable web applications from scratch that fit seamlessly with design. My focus is on performance, clean architecture, database optimization, and reliable system logic.
            </p>
          </motion.div>

          {/* 03 The Full Package */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-white/10 pt-8 pb-12 md:pl-8"
          >
            <span className="text-[11px] tracking-widest text-white/20 font-mono block mb-8">03</span>
            <h3 className="text-xl sm:text-2xl text-white font-medium mb-5 tracking-tight flex items-center gap-2">
              <span>✦</span> The full package
            </h3>
            <p className="text-[13px] text-white/35 leading-[1.8] font-light">
              A complete digital product from concept to deployment. My engineering background and design sensibility enable me to create kick-ass projects that perform at every level.
            </p>
          </motion.div>

        </div>
      </div>

    </div>
  );
}
