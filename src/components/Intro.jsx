import React from 'react';
import { motion } from 'framer-motion';

export default function Intro({ setView }) {
  return (
    <section className="relative py-28 md:py-44 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Clear & Direct Statement */}
        <div className="lg:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-3xl md:text-[2.6rem] font-light text-white leading-snug tracking-wide pr-4"
          >
            Helping brands and businesses build fast, reliable, and scalable web applications.
          </motion.h2>
        </div>

        {/* Right Column: Secondary Paragraph + Circular About Button */}
        <div className="lg:col-span-4 flex flex-col items-start gap-10">
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base text-white/40 leading-relaxed font-light text-left mt-2"
          >
            Combining clean code, modern design, and system engineering to deliver high-quality digital solutions.
          </motion.p>

          {/* About Button aligned left within the right column */}
          <motion.button
            onClick={() => {
              setView('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white text-black flex items-center justify-center font-display text-sm tracking-[0.1em] uppercase font-medium hover:bg-white/80 transition-colors duration-500 shadow-xl cursor-pointer self-start"
          >
            About me
          </motion.button>

        </div>

      </div>
    </section>
  );
}
