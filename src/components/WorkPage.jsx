import React from 'react';
import { motion } from 'framer-motion';
import ProjectsList from './ProjectsList';

export default function WorkPage({ setView }) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-8 md:pt-20 pb-16 md:pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white leading-[1.1] tracking-tight"
        >
          Creating next-level<br className="hidden sm:block" /> digital products
        </motion.h1>
      </div>

      {/* Full Projects List (No limit) */}
      <ProjectsList setView={setView} />

    </div>
  );
}
