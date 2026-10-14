import React from 'react';
import { motion } from 'framer-motion';
import ThreeHero from './ThreeHero';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-ink overflow-hidden grain"
    >
      {/* Nav kecil — nyatu di hero, tengah atas */}
      <nav className="absolute top-8 left-0 right-0 z-30 flex justify-center gap-8 sm:gap-10">
        {[
          { id: 'work', label: 'Work' },
          { id: 'contact', label: 'Contact' },
        ].map((link) => (
          <button
            key={link.id}
            onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
            className="font-display font-medium text-base sm:text-lg text-paper hover:text-signal transition-colors duration-300 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <ThreeHero />
      </div>

      {/* Nama (kiri) & peran (kanan) — sejajar rata bawah */}
      <div className="absolute left-0 right-0 top-[44%] -translate-y-1/2 z-20 flex items-end justify-between px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pointer-events-none select-none">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-display font-extrabold text-paper leading-[0.86] tracking-[-0.03em] text-[clamp(2.4rem,7vw,5.5rem)]"
        >
          Duta
          <br />
          Alamin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease }}
          className="font-display font-extrabold text-signal leading-[0.86] tracking-[-0.03em] text-right text-[clamp(2.4rem,7vw,5.5rem)]"
        >
          Software
          <br />
          Engineer
        </motion.p>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-mono text-[10px] tracking-widest text-mute uppercase">Scroll</span>
        <span className="w-[1px] h-8 bg-gradient-to-b from-rule to-transparent" />
      </motion.div>
    </section>
  );
}
