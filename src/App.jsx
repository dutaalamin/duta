import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import ProjectsList from './components/ProjectsList';
import WorkPage from './components/WorkPage';
import Contact from './components/Contact';
import CaseStudy from './components/CaseStudy';
import { getCaseStudy } from './data/caseStudies';

export default function App() {
  const [view, setView] = useState('home'); // 'home' | 'work' | 'case'
  const [activeStudy, setActiveStudy] = useState(null);

  // Scroll ke atas tiap ganti halaman
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view]);

  const openProject = (project) => {
    const study = getCaseStudy(project.title);
    if (study) {
      setActiveStudy(study);
      setView('case');
    } else {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="relative min-h-screen bg-ink text-paper font-sans selection:bg-signal selection:text-ink">
      <Analytics />

      {view === 'home' && (
        <>
          <Hero onMoreWork={() => setView('work')} />
          <ProjectsList limit={4} onMoreWork={() => setView('work')} onOpen={openProject} />
          <Contact />
        </>
      )}

      {view === 'work' && (
        <>
          <div className="fixed top-0 left-0 w-full z-40 px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center bg-ink/70 backdrop-blur-md">
            <button
              onClick={() => setView('home')}
              className="group flex items-center gap-2 cursor-pointer"
            >
              <span className="text-signal transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span className="font-display font-medium text-base sm:text-lg text-paper group-hover:text-signal transition-colors duration-300">
                Back
              </span>
            </button>
          </div>
          <WorkPage onOpen={openProject} />
          <Contact />
        </>
      )}

      {view === 'case' && activeStudy && (
        <CaseStudy study={activeStudy} onBack={() => setView('work')} />
      )}
    </div>
  );
}
