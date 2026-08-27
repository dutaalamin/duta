import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [time, setTime] = useState('');

  // Dynamically calculate GMT+7 (WIB) time
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      // Adjust to GMT+7 timezone
      const utc = date.getTime() + date.getTimezoneOffset() * 60000;
      const gmt7Date = new Date(utc + 3600000 * 7);
      
      let hours = gmt7Date.getHours();
      const minutes = String(gmt7Date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedHours = String(hours).padStart(2, '0');
      
      setTime(`${formattedHours}:${minutes} ${ampm} GMT+7`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dutaalamin' },
    { label: 'Instagram', href: 'https://instagram.com/dutaalamin' }
  ];

  return (
    <section id="contact" className="relative bg-[#0e0e0e] pt-32 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden">
      
      {/* Container matching Dennis Snellenberg style */}
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header Block with Avatar and Heading */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-16 relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#161616] border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
            <img src="/images/duta.png" alt="Duta Alamin" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex items-end justify-between w-full">
            <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl font-light text-white leading-none tracking-wide uppercase">
              Let's work
              <br />
              together
            </h2>
            
            {/* Minimal Arrow indicator */}
            <div className="hidden sm:block text-white mb-3 hover:text-white/80 transition-colors duration-300">
              <svg width="32" height="32" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Divider line and Circular Magnetic CTA Button */}
        <div className="relative w-full py-8 mb-16 z-20">
          <div className="w-full h-[1px] bg-white/10" />
          
          {/* Circular Get In Touch Button crossing the line */}
          <div className="absolute right-0 md:right-16 top-1/2 -translate-y-1/2 z-30">
            <motion.a
              href="mailto:dutaalamin23@gmail.com"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white text-black flex items-center justify-center font-display text-xs sm:text-sm tracking-[0.1em] uppercase font-semibold hover:bg-white/80 transition-all duration-500 shadow-2xl cursor-pointer pointer-events-auto"
            >
              Get in touch
            </motion.a>
          </div>
        </div>

        {/* Action pills (Email and Phone buttons) */}
        <div className="flex flex-col sm:flex-row gap-4 mb-28 relative z-10">
          <a 
            href="mailto:dutaalamin23@gmail.com"
            className="px-8 py-5 border border-white/15 rounded-full text-xs text-white/80 hover:text-white hover:border-white transition-all duration-300 font-light tracking-wide text-center sm:text-left cursor-pointer"
          >
            dutaalamin23@gmail.com
          </a>
          <a 
            href="https://linkedin.com/in/dutaalamin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-5 border border-white/15 rounded-full text-xs text-white/80 hover:text-white hover:border-white transition-all duration-300 font-light tracking-wide text-center sm:text-left cursor-pointer"
          >
            Connect on LinkedIn
          </a>
        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          {/* Left info: Version and Local Time */}
          <div className="flex gap-16">
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/20 block mb-2 font-display">Version</span>
              <span className="text-xs text-white/60 font-light">2025 © Edition</span>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/20 block mb-2 font-display">Local Time</span>
              <span className="text-xs text-white/60 font-light tabular-nums">{time}</span>
            </div>
          </div>

          {/* Right info: Social Links */}
          <div>
            <span className="text-[9px] tracking-[0.2em] uppercase text-white/20 block mb-2 font-display md:text-right">Socials</span>
            <div className="flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/50 hover:text-white transition-colors duration-300 font-light"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
