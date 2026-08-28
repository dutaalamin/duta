import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { projects } from './ProjectsList';

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'design', 'development'
  const [layoutMode, setLayoutMode] = useState('list'); // 'list', 'grid'
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Motion values for smooth cursor tracking in List View
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Filter projects dynamically
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'design') {
      return project.category.toLowerCase().includes('design');
    }
    if (activeFilter === 'development') {
      return (
        project.category.toLowerCase().includes('development') ||
        project.category.toLowerCase().includes('integration')
      );
    }
    return true;
  });

  // Calculate counts dynamically for the pills
  const totalCount = projects.length;
  const designCount = projects.filter((p) => p.category.toLowerCase().includes('design')).length;
  const devCount = projects.filter(
    (p) => p.category.toLowerCase().includes('development') || p.category.toLowerCase().includes('integration')
  ).length;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Editorial Header */}
      <div className="pt-8 md:pt-16 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-light text-white leading-[1.1] tracking-tight"
        >
          Creating next level<br />digital products
        </motion.h1>
      </div>

      {/* Control Bar: Filter Pills Left, View Mode Toggles Right */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-12 border-b border-white/5">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3">
          {/* ALL */}
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-light tracking-wider transition-all duration-300 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-white text-black font-normal'
                : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            All
          </button>
          
          {/* DESIGN */}
          <button
            onClick={() => setActiveFilter('design')}
            className={`px-5 py-2.5 rounded-full text-xs font-light tracking-wider transition-all duration-300 cursor-pointer flex items-center ${
              activeFilter === 'design'
                ? 'bg-white text-black font-normal'
                : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            Design
            <sup className="text-[9px] pl-1 font-mono opacity-60">{designCount}</sup>
          </button>
          
          {/* DEVELOPMENT */}
          <button
            onClick={() => setActiveFilter('development')}
            className={`px-5 py-2.5 rounded-full text-xs font-light tracking-wider transition-all duration-300 cursor-pointer flex items-center ${
              activeFilter === 'development'
                ? 'bg-white text-black font-normal'
                : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            Development
            <sup className="text-[9px] pl-1 font-mono opacity-60">{devCount}</sup>
          </button>
        </div>

        {/* View Mode Toggles */}
        <div className="flex gap-3">
          {/* LIST Toggle */}
          <button
            onClick={() => setLayoutMode('list')}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              layoutMode === 'list'
                ? 'bg-white text-black'
                : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 1H13M1 5H13M1 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* GRID Toggle */}
          <button
            onClick={() => setLayoutMode('grid')}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              layoutMode === 'grid'
                ? 'bg-white text-black'
                : 'border border-white/10 text-white/60 hover:border-white/30 hover:text-white'
            }`}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="1" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="7" y="1" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="1" y="7" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
              <rect x="7" y="7" width="4" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>

      </div>

      {/* Projects Display Wrapper */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {layoutMode === 'list' ? (
            
            /* --- LIST VIEW --- */
            <motion.div
              key="list-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseMove={handleMouseMove}
              className="relative"
            >
              {/* Header Titles */}
              <div className="hidden md:grid grid-cols-12 py-4 text-[10px] tracking-[0.2em] uppercase text-white/30 font-display border-b border-white/5 mb-2">
                <span className="col-span-6">Client</span>
                <span className="col-span-4">Services</span>
                <span className="col-span-2 text-right">Year</span>
              </div>

              {/* Rows */}
              <div className="flex flex-col">
                {filteredProjects.map((project, index) => (
                  <a
                    key={`list-${project.title}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group relative grid grid-cols-1 md:grid-cols-12 items-center py-8 md:py-10 border-b border-white/5 px-0 hover:bg-white/[0.01] transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Left: Client name */}
                    <div className="col-span-12 md:col-span-6 flex items-center z-10">
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/95 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                        {project.title}
                      </h3>
                    </div>

                    {/* Middle: Services */}
                    <div className="col-span-12 md:col-span-4 mt-2 md:mt-0 z-10">
                      <span className="text-sm font-light text-white/40 group-hover:text-white/80 transition-colors duration-500">
                        {project.category}
                      </span>
                    </div>

                    {/* Right: Year */}
                    <div className="col-span-12 md:col-span-2 mt-1 md:mt-0 text-left md:text-right z-10">
                      <span className="text-sm font-light text-white/30 group-hover:text-white/70 transition-colors duration-500">
                        {project.year}
                      </span>
                    </div>

                    {/* Bottom border indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
                  </a>
                ))}
              </div>

              {/* Mockup Hover Card */}
              <AnimatePresence>
                {hoveredIndex !== null && (
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'fixed',
                      left: cursorX,
                      top: cursorY,
                      x: '-50%',
                      y: '-50%',
                      pointerEvents: 'none',
                    }}
                    className="hidden lg:block w-[400px] h-[300px] z-50 overflow-hidden rounded-xl shadow-2xl bg-[#050505] border border-white/10"
                  >
                    <motion.div
                      animate={{ y: -hoveredIndex * 300 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full flex flex-col"
                    >
                      {filteredProjects.map((project) => (
                        <div
                          key={`hover-list-${project.title}`}
                          className="w-full h-[300px] shrink-0 relative flex items-center justify-center bg-[#050505] overflow-hidden"
                        >
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-85" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-[#1839db] text-white flex items-center justify-center font-display text-[10px] tracking-[0.25em] uppercase font-semibold shadow-md">
                              View
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ) : (
            
            /* --- GRID VIEW --- */
            <motion.div
              key="grid-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
            >
              {filteredProjects.map((project) => (
                <a
                  key={`grid-${project.title}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-5 cursor-pointer"
                >
                  {/* Card mockup image */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#111] border border-white/5 relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
                    />
                    
                    {/* View Button Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#1839db] text-white font-display text-[9px] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 rounded-full shadow-lg">
                        Visit Site
                      </span>
                    </div>
                  </div>

                  {/* Description beneath */}
                  <div className="flex flex-col gap-1.5 px-1 pb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-display text-xl sm:text-2xl text-white font-light group-hover:text-white/80 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-white/30 font-light">{project.year}</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/5 my-1" />
                    <span className="text-xs font-light text-white/40 tracking-wider">
                      {project.role} | {project.category}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>

          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
