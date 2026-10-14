import React from 'react';
import { motion } from 'framer-motion';
import ThreeHero from './ThreeHero';

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-ink overflow-hidden flex items-center grain"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0 z-10">
        <ThreeHero />
      </div>

      {/* Judul */}
      <div className="absolute left-6 sm:left-12 md:left-16 lg:left-24 xl:left-32 top-[44%] -translate-y-1/2 z-20 pointer-events-none select-none w-[min(88vw,600px)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <h1 className="font-display font-extrabold text-paper leading-[0.86] tracking-[-0.03em] text-[clamp(3.2rem,11vw,8.5rem)]">
            Duta
            <br />
            Alamin
          </h1>

          <p className="mt-6 font-mono text-sm tracking-[0.3em] uppercase text-signal">
            Software Engineer
          </p>
        </motion.div>
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
