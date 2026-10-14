import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Intro() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Pernyataan besar */}
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-semibold text-paper leading-[1.08] tracking-[-0.02em] text-[clamp(1.9rem,4.6vw,3.6rem)]"
          >
            Helping brands and businesses build{' '}
            <em className="font-serif font-normal italic text-signal">fast, reliable</em>, and
            scalable web applications.
          </motion.h2>
        </div>

        {/* Catatan + tombol */}
        <div className="lg:col-span-4 flex flex-col items-start gap-10">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-base text-paper/55 leading-relaxed font-light"
          >
            Combining clean code, modern design, and system engineering to deliver
            high-quality digital solutions.
          </motion.p>

          <motion.button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="group inline-flex items-center gap-3 text-lg text-paper cursor-pointer"
          >
            <span className="">
              About me
            </span>
            <span className="text-signal transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
