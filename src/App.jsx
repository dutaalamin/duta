import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import ProjectsList from './components/ProjectsList';
import WorkPage from './components/WorkPage';
import Contact from './components/Contact';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'work'

  // Scroll ke atas tiap ganti halaman
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  return (
    <div className="relative min-h-screen bg-ink text-paper font-sans selection:bg-signal selection:text-ink">
      <Analytics />

      {view === 'home' ? (
        <>
          <Hero />
          <ProjectsList limit={4} onMoreWork={() => setView('work')} />
          <Contact />
        </>
      ) : (
        <>
          {/* Tombol kembali (pengganti navbar) */}
          <div className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 lg:px-20 py-7 flex justify-between items-center">
            <button
              onClick={() => setView('home')}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <span className="text-signal transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="text-base sm:text-lg uppercase tracking-wide text-paper/80 group-hover:text-paper transition-colors duration-300">
                Back
              </span>
            </button>
            <span className="text-base sm:text-lg uppercase tracking-wide text-paper/80">Work</span>
          </div>
          <WorkPage />
          <Contact />
        </>
      )}
    </div>
  );
}
