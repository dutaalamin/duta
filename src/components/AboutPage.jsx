import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const services = [
    {
      title: 'Web Engineering & Development',
      description: 'Developing fast, responsive, and interactive web platforms from scratch. Focused on clean code, smooth animations, and creating intuitive user experiences that perform seamlessly on all devices.',
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend & Database Systems',
      description: 'Designing scalable database architectures, optimizing database query performance, and building secure, high-performance API integrations to support complex business operations.',
      skills: ['Node.js', 'RESTful APIs', 'Database Optimization', 'System Architecture']
    },
    {
      title: 'Enterprise Automation & Logic',
      description: 'Developing custom automation scripts, integrating enterprise system modules, and writing reliable process logic to automate manual tasks and improve overall system efficiency.',
      skills: ['ERP Customization', 'Workflow Automation', 'Process Logic', 'System Reliability']
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Intro Header */}
      <div className="border-b border-white/15 pb-12 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-none uppercase tracking-wide"
        >
          Duta Alamin
        </motion.h1>
      </div>

      {/* Main Grid: Bio on left, Services & Capabilities on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Bio & Profile Text */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center overflow-hidden bg-[#111]">
              <img src="/images/duta.png" alt="Duta Alamin" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-xl font-light text-white">Software Engineer</h2>
              <p className="text-xs text-white/30 tracking-widest uppercase">Indonesia</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-white/70 leading-relaxed font-light"
          >
            I build fast, reliable, and intelligent digital systems that solve real-world problems. By blending clean code, database optimization, and high-performance system logic, I help businesses scale their digital infrastructure and streamline complex operations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm text-white/40 leading-relaxed font-light"
          >
            I hold a Bachelor of Informatics from UPN Veteran Yogyakarta. During my studies, I researched deep learning architectures, building a CNN model for real-time Mount Merapi volcanic activity classification. I’m deeply passionate about solving complex engineering problems and leveraging modern technology to improve system reliability.
          </motion.p>
        </div>

        {/* Right Column: Services & Capabilities */}
        <div className="lg:col-span-6 flex flex-col gap-16">
          
          {/* Services Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8 font-display block"
            >
              Services &amp; Capabilities
            </motion.h3>

            <div className="flex flex-col gap-10">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group relative pb-8 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <h4 className="text-md text-white font-medium group-hover:text-white/70 transition-colors duration-300 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-white/35 leading-relaxed font-light mt-3 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-[9px] tracking-wider uppercase bg-white/5 text-white/60 px-3 py-1 rounded-full border border-white/5 font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Values / Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/5 pt-10"
          >
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-display block">
              My Philosophy
            </h3>
            <p className="text-xs text-white/40 leading-relaxed font-light">
              I believe in writing code that is clean, maintainable, and optimized for performance. I approach software development not just as writing syntax, but as designing robust architectures that directly drive business efficiency and user satisfaction.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
