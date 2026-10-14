import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Contact() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const utc = date.getTime() + date.getTimezoneOffset() * 60000;
      const gmt7Date = new Date(utc + 3600000 * 7);
      let hours = gmt7Date.getHours();
      const minutes = String(gmt7Date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      setTime(`${String(hours).padStart(2, '0')}:${minutes} ${ampm} GMT+7`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dutaalamin' },
    { label: 'Instagram', href: 'https://instagram.com/2duta' },
  ];

  return (
    <section id="contact" className="relative bg-ink pt-24 md:pt-32 pb-12 overflow-hidden grain">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Judul + CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-extrabold text-paper leading-[0.9] tracking-[-0.03em] text-[clamp(2.6rem,9vw,7rem)]"
          >
            Let&rsquo;s work
            <br />
            <span className="text-signal">together</span>
          </motion.h2>

          <motion.a
            href="mailto:dutaalamin23@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="group inline-flex items-center gap-3 text-lg text-paper cursor-pointer"
          >
            <span>Get in touch</span>
            <span className="text-signal transition-transform duration-500 group-hover:translate-x-1">→</span>
          </motion.a>
        </div>

        {/* Email */}
        <div className="mb-20">
          <a
            href="mailto:dutaalamin23@gmail.com"
            className="group font-mono text-lg sm:text-2xl text-paper hover:text-signal transition-colors duration-300 inline-block"
          >
            dutaalamin23@gmail.com
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-16">
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-mute block mb-2">Local Time</span>
              <span className="font-mono text-xs text-paper/60 tabular-nums">{time}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-mute block mb-2">Socials</span>
              <div className="flex gap-5">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-paper/60 hover:text-signal transition-colors duration-300"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <span className="font-mono text-[10px] tracking-widest uppercase text-mute">
            2026 © Duta Alamin
          </span>
        </div>
      </div>
    </section>
  );
}
