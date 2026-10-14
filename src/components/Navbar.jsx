import React, { useState, useEffect } from 'react';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'work' && onNavigate) {
      // Sedang di halaman Work → balik ke home
      onNavigate('home');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 flex justify-center py-5 transition-colors duration-500 ${
        scrolled ? 'bg-ink/70 backdrop-blur-md' : ''
      }`}
    >
      <nav className="flex items-center gap-8 sm:gap-10">
        {LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => go(link.id)}
            className="text-sm sm:text-base uppercase tracking-widest text-paper/70 hover:text-signal transition-colors duration-300 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
