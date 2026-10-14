import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function AboutPage() {
  return (
    <div id="about" className="relative bg-ink pt-28 md:pt-36 pb-24">
      {/* Headline */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-8 md:pt-16 pb-14 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="font-display font-extrabold text-paper leading-[0.98] tracking-[-0.03em] text-[clamp(2.4rem,7vw,5.5rem)]"
        >
          Helping businesses
          <br className="hidden sm:block" />
          thrive in the
          <br className="hidden sm:block" />
          <span className="text-signal">digital world</span>
        </motion.h1>
      </div>

      {/* Bio + portrait */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-16 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-6"
          >
            <p className="text-[15px] sm:text-base text-paper/60 leading-[1.85] font-light">
              I help companies from all over the world with tailor-made software solutions.
              Combining clean code, system engineering, and modern design to build digital
              products that truly perform.
            </p>
            <p className="text-[15px] sm:text-base text-paper/60 leading-[1.85] font-light">
              With each project, I push my work to new horizons, always putting quality first.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="w-full"
          >
            <div className="w-full aspect-[4/5] overflow-hidden bg-ink-3">
              <img
                src="/images/duta2.webp"
                alt="Duta Alamin"
                className="w-full h-full object-cover object-center grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mt-28 md:mt-40">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-paper mb-14 tracking-[-0.02em]"
        >
          I can help you with
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {[
            {
              title: 'Design',
              body: 'With a solid track record in designing interfaces, I deliver strong and user-friendly digital designs that align with brand identity and business goals.',
            },
            {
              title: 'Development',
              body: 'I build scalable web applications from scratch that fit seamlessly with design. My focus is on performance, clean architecture, database optimization, and reliable system logic.',
            },
            {
              title: 'The full package',
              body: 'A complete digital product from concept to deployment. My engineering background and design sensibility enable me to create kick-ass experiences.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease }}
              className="border-t border-rule pt-8 pb-12 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-paper mb-5 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[13px] text-paper/40 leading-[1.85] font-light">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
