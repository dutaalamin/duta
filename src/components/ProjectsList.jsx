import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';

export const projects = [
  { title: 'Quran', category: 'Design & Development', role: 'Al-Quran Digital Platform', year: '2026', url: 'https://dquran.vercel.app/', image: '/images/projects/dquran.png' },
  { title: 'Wave', category: 'Design & Development', role: 'Digital Platform', year: '2024', url: 'https://wavewave.vercel.app/', image: '/images/projects/wave.png' },
  { title: 'Rubic', category: 'Design & Development', role: 'Digital Platform', year: '2024', url: 'https://rubicduta.vercel.app/', image: '/images/projects/rubic.png' },
  { title: 'Duta', category: 'Design & Development', role: 'Personal Portfolio v1', year: '2024', url: 'https://duta23.vercel.app/', image: '/images/projects/duta1.png' },
  { title: 'Bravo', category: 'Interaction & Development', role: 'AI-powered marketing platform', year: '2024', url: 'https://dutabravo.vercel.app/', image: '/images/projects/bravo.png' },
  { title: 'Draken', category: 'Design & Development', role: 'Software and tools service platform', year: '2024', url: 'https://dutadraken.vercel.app/', image: '/images/projects/draken.png' },
  { title: 'Bunga Cerita', category: 'Design & Development', role: 'Storytelling Platform', year: '2024', url: 'https://bungacerita.vercel.app/', image: '/images/projects/bungacerita.png' },
  { title: 'Stinger', category: 'Design & Development', role: 'Web hosting service platform', year: '2024', url: 'https://dutastinger.vercel.app/', image: '/images/projects/stinger.png' },
  { title: 'Bprotraining', category: 'Development & Integration', role: 'Soccer training platform', year: '2026', url: 'https://gtech.gaisar.id/', image: '/images/projects/bprotraining.png' },
  { title: 'Casava', category: 'Design & Development', role: 'E-commerce platform', year: '2024', url: 'https://casavastore.vercel.app/', image: '/images/projects/casava.png' },
  { title: '67Sports', category: 'Design & Development', role: 'Sneakers E-commerce', year: '2024', url: 'https://67sports.vercel.app/', image: '/images/projects/67sports.png' },
  { title: 'ScreenV', category: 'Interaction & Development', role: 'Movie discovery platform', year: '2023', url: 'https://screenv.vercel.app/', image: '/images/projects/screenv.png' },
  { title: 'Colorway', category: 'Design & Development', role: 'Color palette generator', year: '2024', url: 'https://colorways.vercel.app/', image: '/images/projects/colorway.png' },
  { title: 'Savory', category: 'Design & Development', role: 'Food ordering website', year: '2024', url: 'https://savoryz.vercel.app/', image: '/images/projects/savory.png' },
  { title: 'Fishytype', category: 'Interaction & Development', role: 'Interactive typing speed test', year: '2023', url: 'https://fishytype.vercel.app/', image: '/images/projects/fishytype.png' },
];

export default function ProjectsList({ limit, onMoreWork }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: galleryRef, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-15%', '0%']);

  const galleryNames = ['Quran', 'Rubic', 'Wave', 'Duta', 'Bravo', 'Stinger', 'Bprotraining', 'Casava'];
  const galleryProjects = projects.filter((p) => galleryNames.includes(p.title));
  const row1 = galleryProjects.slice(0, 4);
  const row2 = galleryProjects.slice(4, 8);

  return (
    <>
      <section
        id="work"
        onMouseMove={handleMouseMove}
        className="relative pt-16 pb-16 px-6 md:px-12 lg:px-20 w-full max-w-7xl mx-auto"
      >
        <h2 className="font-display font-semibold text-sm uppercase tracking-widest text-mute mb-4">Recent Work</h2>

        {/* Desktop: daftar bersih */}
        <div className="hidden lg:block relative">
          {visibleProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex items-center justify-between py-7 cursor-pointer"
            >
              <h3 className="font-display font-semibold text-3xl xl:text-4xl text-paper/90 group-hover:text-paper group-hover:translate-x-3 transition-all duration-500 tracking-[-0.02em]">
                {project.title}
              </h3>
              <span className="font-display text-sm text-mute group-hover:text-paper/80 transition-colors duration-300">
                {project.category}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile: kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {visibleProjects.map((project) => (
            <a
              key={`m-${project.title}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-rule bg-ink-2/60 overflow-hidden flex flex-col active:scale-[0.98] transition-all duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-ink-3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-85"
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h3 className="font-display font-semibold text-lg text-paper">{project.title}</h3>
                <p className="font-display text-xs text-mute">{project.role || project.category}</p>
              </div>
            </a>
          ))}
        </div>


        {limit && (
          <div className="mt-12">
            <button
              onClick={onMoreWork}
              className="group inline-flex items-center gap-3 text-lg text-paper cursor-pointer"
            >
              <span>More work</span>
              <span className="text-signal transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        )}

        {/* Preview mengambang */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'fixed', left: cursorX, top: cursorY, x: '-50%', y: '-50%', pointerEvents: 'none' }}
              className="hidden lg:block w-[380px] h-[270px] z-50 overflow-hidden bg-ink shadow-2xl"
            >
              <motion.div
                animate={{ y: -hoveredIndex * 270 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex flex-col"
              >
                {projects.map((project) => (
                  <div key={`h-${project.title}`} className="w-full h-[270px] shrink-0 relative bg-ink-3 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top opacity-80" />
                    <div className="absolute bottom-3 left-3 bg-signal text-ink font-display text-[11px] tracking-widest uppercase font-semibold px-3 py-1.5">
                      Open ↗
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Galeri parallax */}
      <section ref={galleryRef} className="w-full pb-20 overflow-hidden flex flex-col gap-4 md:gap-6">
        {[
          { row: row1, x: x1 },
          { row: row2, x: x2 },
        ].map(({ row, x }, ri) => (
          <motion.div
            key={ri}
            style={{ x }}
            className="flex gap-4 md:gap-6 w-[200vw] sm:w-[150vw] md:w-[125vw] lg:w-[115vw] -ml-[25vw] sm:-ml-[10vw] md:-ml-[5vw]"
          >
            {row.map((project) => (
              <a
                key={`g-${project.title}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/4 aspect-[4/3] bg-ink-3 relative group/card cursor-pointer block overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center opacity-100 transition-transform duration-700 group-hover/card:scale-105"
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-display font-semibold text-sm tracking-widest uppercase text-paper">{project.title}</span>
                </div>
              </a>
            ))}
          </motion.div>
        ))}
      </section>
    </>
  );
}
