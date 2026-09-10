import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

export const projects = [
  {
    title: 'Quran',
    category: 'Design & Development',
    role: 'Al-Quran Digital Platform',
    year: '2026',
    url: 'https://dquran.vercel.app/',
    image: '/images/projects/dquran.png',
  },
  {
    title: 'Wave',
    category: 'Design & Development',
    role: 'Digital Platform',
    year: '2024',
    url: 'https://wavewave.vercel.app/',
    image: '/images/projects/wave.png',
  },
  {
    title: 'Rubic',
    category: 'Design & Development',
    role: 'Digital Platform',
    year: '2024',
    url: 'https://rubicduta.vercel.app/',
    image: '/images/projects/rubic.png',
  },
  {
    title: 'Duta',
    category: 'Design & Development',
    role: 'Personal Portfolio v1',
    year: '2024',
    url: 'https://duta23.vercel.app/',
    image: '/images/projects/duta1.png',
  },
  {
    title: 'Bravo',
    category: 'Interaction & Development',
    role: 'AI-powered marketing platform',
    year: '2024',
    url: 'https://dutabravo.vercel.app/',
    image: '/images/projects/bravo.png',
  },
  {
    title: 'Draken',
    category: 'Design & Development',
    role: 'Software and tools service platform',
    year: '2024',
    url: 'https://dutadraken.vercel.app/',
    image: '/images/projects/draken.png',
  },
  {
    title: 'Bunga Cerita',
    category: 'Design & Development',
    role: 'Storytelling Platform',
    year: '2024',
    url: 'https://bungacerita.vercel.app/',
    image: '/images/projects/bungacerita.png',
  },
  {
    title: 'Stinger',
    category: 'Design & Development',
    role: 'Web hosting service platform',
    year: '2024',
    url: 'https://dutastinger.vercel.app/',
    image: '/images/projects/stinger.png',
  },
  {
    title: 'Bprotraining',
    category: 'Development & Integration',
    role: 'Soccer training platform',
    year: '2026',
    url: 'https://gtech.gaisar.id/',
    image: '/images/projects/bprotraining.png',
  },
  {
    title: 'Casava',
    category: 'Design & Development',
    role: 'E-commerce platform',
    year: '2024',
    url: 'https://casavastore.vercel.app/',
    image: '/images/projects/casava.png',
  },
  {
    title: '67Sports',
    category: 'Design & Development',
    role: 'Sneakers E-commerce',
    year: '2024',
    url: 'https://67sports.vercel.app/',
    image: '/images/projects/67sports.png',
  },
  {
    title: 'ScreenV',
    category: 'Interaction & Development',
    role: 'Movie discovery platform',
    year: '2023',
    url: 'https://screenv.vercel.app/',
    image: '/images/projects/screenv.png',
  },
  {
    title: 'Colorway',
    category: 'Design & Development',
    role: 'Color palette generator',
    year: '2024',
    url: 'https://colorways.vercel.app/',
    image: '/images/projects/colorway.png',
  },
  {
    title: 'Savory',
    category: 'Design & Development',
    role: 'Food ordering website',
    year: '2024',
    url: 'https://savoryz.vercel.app/',
    image: '/images/projects/savory.png',
  },
  {
    title: 'Fishytype',
    category: 'Interaction & Development',
    role: 'Interactive typing speed test',
    year: '2023',
    url: 'https://fishytype.vercel.app/',
    image: '/images/projects/fishytype.png',
  }
];

export default function ProjectsList({ limit, setView }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to avoid lagging motion
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Parallax Gallery Scroll
  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  // Select top 8 projects for the gallery
  const galleryProjectNames = ['Quran', 'Rubic', 'Wave', 'Duta', 'Bravo', 'Stinger', 'Bprotraining', 'Casava'];
  const galleryProjects = projects.filter(p => galleryProjectNames.includes(p.title));
  const row1 = galleryProjects.slice(0, 4);
  const row2 = galleryProjects.slice(4, 8);

  return (
    <>
    <section 
      onMouseMove={handleMouseMove}
      className="relative pb-20 px-6 md:px-12 lg:px-20 w-full max-w-7xl mx-auto"
    >
      <div className="mb-4">
        <h2 className="font-display text-[10px] tracking-[0.3em] font-light text-white/40 uppercase">Recent Work</h2>
      </div>

      {/* Desktop: Table-like Project List (hidden on mobile, visible on lg) */}
      <div className="hidden lg:block relative border-t border-white/20">
        {visibleProjects.map((project, index) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-14 border-b border-white/10 px-0 hover:bg-white/[0.01] transition-all duration-300 cursor-pointer block overflow-hidden"
          >
            {/* Left: Title */}
            <div className="flex items-center z-10">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white/95 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">
                {project.title}
              </h3>
            </div>

            {/* Right: Category only */}
            <div className="flex items-center z-10 mt-2 md:mt-0">
              <span className="text-sm font-light text-white/40 group-hover:text-white/80 transition-colors duration-500">
                {project.category}
              </span>
            </div>

            {/* Bottom Accent line glow */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-500" />
          </a>
        ))}
      </div>

      {/* Mobile & Tablet: Visual Card Grid with Direct Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden pt-2">
        {visibleProjects.map((project) => (
          <a
            key={`mobile-${project.title}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#111111]/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col active:scale-[0.98] transition-all duration-300 shadow-xl"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90 group-active:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/70 font-mono">
                {project.year}
              </div>
            </div>
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-display text-lg sm:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-xs text-white/50 leading-relaxed">{project.role || project.category}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {limit && setView && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setView('work')}
            className="group px-8 py-3.5 rounded-full border border-white/20 text-xs font-display tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 cursor-pointer flex items-center gap-2"
          >
            More work
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Floating Mockup Slider Panel (Dennis Snellenberg Style) */}
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
            {/* Slide Container carrying all mockups stacked vertically */}
            <motion.div
              animate={{ y: -hoveredIndex * 300 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col"
            >
              {projects.map((project) => (
                <div
                  key={`hover-${project.title}`}
                  className="w-full h-[300px] shrink-0 relative flex items-center justify-center bg-[#050505] overflow-hidden"
                >
                  {/* Real Image Background */}
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80" />

                  {/* Blue/Cyan magnetic-looking hover circle badge in the center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#1839db] text-white flex items-center justify-center font-display text-[10px] tracking-[0.25em] uppercase font-semibold shadow-md transform scale-95 transition-all duration-300">
                      View
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    {/* Parallax Gallery Grid (Dennis Snellenberg Style) */}
    <section ref={galleryRef} className="w-full mt-10 md:mt-16 pb-20 overflow-hidden flex flex-col gap-4 md:gap-8">
      {/* Row 1 - Moves Left */}
      <motion.div style={{ x: x1 }} className="flex gap-4 md:gap-8 w-[200vw] sm:w-[150vw] md:w-[125vw] lg:w-[115vw] -ml-[25vw] sm:-ml-[10vw] md:-ml-[5vw]">
        {row1.map((project) => (
          <a
            key={`gallery-${project.title}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/4 aspect-[4/3] bg-[#050505] relative group/card cursor-pointer block overflow-hidden shadow-sm"
          >
            <div className="w-full h-full overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center opacity-90 transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-100" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="bg-[#1839db] text-white font-display text-[9px] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 rounded-full shadow-lg">Visit Site</span>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Row 2 - Moves Right */}
      <motion.div style={{ x: x2 }} className="flex gap-4 md:gap-8 w-[200vw] sm:w-[150vw] md:w-[125vw] lg:w-[115vw] -ml-[25vw] sm:-ml-[10vw] md:-ml-[5vw]">
        {row2.map((project) => (
          <a
            key={`gallery-${project.title}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/4 aspect-[4/3] bg-[#050505] relative group/card cursor-pointer block overflow-hidden shadow-sm"
          >
            <div className="w-full h-full overflow-hidden">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center opacity-90 transition-all duration-700 group-hover/card:scale-105 group-hover/card:opacity-100" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <span className="bg-[#1839db] text-white font-display text-[9px] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 rounded-full shadow-lg">Visit Site</span>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
    </>
  );
}
