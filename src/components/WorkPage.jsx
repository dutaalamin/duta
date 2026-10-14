import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { projects } from './ProjectsList';

const ease = [0.16, 1, 0.3, 1];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [layoutMode, setLayoutMode] = useState('list');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'design') return project.category.toLowerCase().includes('design');
    if (activeFilter === 'development')
      return (
        project.category.toLowerCase().includes('development') ||
        project.category.toLowerCase().includes('integration')
      );
    return true;
  });

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
  ];

  return (
    <div className="relative min-h-screen bg-ink pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="pt-8 md:pt-12 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-display font-extrabold text-paper leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,7vw,5.5rem)]"
        >
          Creating next level
          <br />
          <span className="text-signal">digital products</span>
        </motion.h1>
      </div>

      {/* Control bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-10 border-b border-rule">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`text-sm transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-signal' : 'text-paper/50 hover:text-paper'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* View toggles */}
        <div className="hidden lg:flex gap-5">
          {['list', 'grid'].map((mode) => (
            <button
              key={mode}
              onClick={() => setLayoutMode(mode)}
              className={`transition-colors duration-300 cursor-pointer ${
                layoutMode === mode ? 'text-signal' : 'text-paper/40 hover:text-paper'
              }`}
              aria-label={mode}
            >
              {mode === 'list' ? (
                <svg width="16" height="12" viewBox="0 0 14 10" fill="none">
                  <path d="M1 1H13M1 5H13M1 9H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <rect x="1" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="7" y="1" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="1" y="7" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="7" y="7" width="4" height="4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Display */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {layoutMode === 'list' ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onMouseMove={handleMouseMove}
            >
              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="flex flex-col">
                  {filteredProjects.map((project, index) => (
                    <a
                      key={`list-${project.title}`}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="group relative flex items-center justify-between py-8 border-b border-rule/70 cursor-pointer"
                    >
                      <h3 className="font-display font-semibold text-3xl xl:text-4xl text-paper/90 group-hover:text-paper group-hover:translate-x-3 transition-all duration-500 tracking-[-0.02em]">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-8">
                        <span className="font-mono text-xs text-mute group-hover:text-paper/80 transition-colors duration-300">
                          {project.category}
                        </span>
                        <span className="font-mono text-xs text-mute/70">{project.year}</span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-signal group-hover:w-full transition-all duration-500" />
                    </a>
                  ))}
                </div>

                {/* Floating preview */}
                <AnimatePresence>
                  {hoveredIndex !== null && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                      style={{ position: 'fixed', left: cursorX, top: cursorY, x: '-50%', y: '-50%', pointerEvents: 'none' }}
                      className="w-[380px] h-[270px] z-50 overflow-hidden bg-ink shadow-2xl"
                    >
                      <motion.div
                        animate={{ y: -hoveredIndex * 270 }}
                        transition={{ duration: 0.4, ease }}
                        className="w-full h-full flex flex-col"
                      >
                        {filteredProjects.map((project) => (
                          <div key={`h-${project.title}`} className="w-full h-[270px] shrink-0 relative bg-ink-3 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80" />
                            <div className="absolute bottom-3 left-3 bg-signal text-ink font-mono text-[10px] tracking-widest uppercase font-semibold px-3 py-1.5">
                              Open ↗
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
                {filteredProjects.map((project) => (
                  <a
                    key={`mw-${project.title}`}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border border-rule bg-ink-2/60 overflow-hidden flex flex-col active:scale-[0.98] transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-ink-3">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-85" />
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                      <h3 className="font-display font-semibold text-lg text-paper">{project.title}</h3>
                      <p className="font-mono text-[10px] text-mute">{project.role || project.category}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {filteredProjects.map((project) => (
                <a
                  key={`grid-${project.title}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 cursor-pointer"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden bg-ink-3 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 pb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-display font-semibold text-xl text-paper">{project.title}</h3>
                      <span className="font-mono text-xs text-mute">{project.year}</span>
                    </div>
                    <span className="font-mono text-[10px] text-mute tracking-wider">
                      {project.role}
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
