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
          <Hero onMoreWork={() => setView('work')} />
          <ProjectsList limit={4} onMoreWork={() => setView('work')} />
          <Contact />
        </>
      ) : (
        <>
          <WorkPage />
          <Contact />
        </>
      )}
    </div>
  );
}
