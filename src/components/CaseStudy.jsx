import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function CaseStudy({ study, onBack }) {
  return (
    <div className="min-h-screen bg-ink text-paper font-sans">
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-20 pt-8 pb-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <span className="text-signal transition-transform duration-300 group-hover:-translate-x-1">←</span>
          <span className="font-display font-medium text-base sm:text-lg group-hover:text-signal transition-colors duration-300">
            Back
          </span>
        </button>
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto pb-28">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="font-display font-extrabold leading-[0.95] tracking-[-0.03em] text-[clamp(2.2rem,6vw,4.5rem)]">
            {study.title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-paper/70 max-w-2xl leading-relaxed">
            {study.tagline}
          </p>
        </motion.div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={study.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-signal text-ink px-5 py-3 font-mono text-xs uppercase tracking-widest hover:bg-paper transition-colors"
          >
            Live site ↗
          </a>
        </div>

        {/* Stack */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mute mb-4">Stack</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {study.stack.map((item) => (
              <span key={item} className="font-mono text-sm text-paper/90">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Problem */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mute mb-4">The problem</h2>
          <p className="text-base md:text-lg text-paper/80 leading-relaxed max-w-2xl">
            {study.problem}
          </p>
        </div>

        {/* Approach */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mute mb-5">What I built</h2>
          <ol className="flex flex-col gap-5 max-w-2xl">
            {study.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-signal pt-0.5 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-base text-paper/80 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Results */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mute mb-6">Result</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {study.results.map((r) => (
              <div key={r.label}>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-signal leading-none">
                  {r.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-mute mt-2">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-mute mb-5">Notes</h2>
          <ul className="flex flex-col gap-3 max-w-2xl">
            {study.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-base text-paper/75 leading-relaxed">
                <span className="text-signal">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom back */}
        <div className="mt-20 pt-8 border-t border-rule">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 cursor-pointer font-mono text-sm text-mute hover:text-paper transition-colors"
          >
            <span className="text-signal transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Back to all work
          </button>
        </div>
      </div>
    </div>
  );
}
