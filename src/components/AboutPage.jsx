import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'PT POSCO DX INDONESIA',
    position: 'Software Engineer',
    date: 'Jan 2026 - Present',
    details: 'Developing and maintaining real-time applications, process logic, and production-grade source code for mission-critical automation platforms. Performing debugging, root cause analysis, and performance optimization in 24/7 time-sensitive environments.'
  },
  {
    company: 'PT KARUNIA BERCA INDONESIA',
    position: 'Software Engineer',
    date: 'Jan 2025 - Oct 2025',
    details: 'Developed and customized ERP modules. Integrated ERP business modules, optimized database performance, resolved software, hardware, and database system issues, and supported accurate business reporting.'
  },
  {
    company: 'Appen',
    position: 'AI Engineer',
    date: 'Sep 2024 - Dec 2024',
    details: 'Contributed to the improvement of multilingual AI systems by annotating and translating text-to-speech datasets used for training and fine-tuning speech models.'
  },
  {
    company: 'BPPTKG Geologi',
    position: 'Bachelor Thesis Researcher',
    date: 'Oct 2023 - Mar 2024',
    details: 'Developed a Convolutional Neural Network (CNN) deep learning model to classify images of Mount Merapi for early warning detection accuracy.'
  },
  {
    company: 'PT Indorama Polypet Indonesia',
    position: 'IT Intern',
    date: 'Aug 2022 - Sep 2022',
    details: 'Assisted in maintaining corporate IT infrastructure and developing internal tools to support factory operations and reporting.'
  }
];

export default function AboutPage() {
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

      {/* Main Grid: Bio on left, Education & Exp on right */}
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
            I’m a Software Engineer specializing in building scalable enterprise architectures, high-performance web applications, and intelligent, AI-powered systems that solve complex engineering challenges.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm text-white/40 leading-relaxed font-light"
          >
            I hold a Bachelor of Informatics from UPN Veteran Yogyakarta. During my studies, I researched deep learning architectures, building a CNN model for real-time Mount Merapi volcanic activity classification. I’m deeply passionate about solving complex problems, database optimization, and high-performance system design.
          </motion.p>
        </div>

        {/* Right Column: Work Experience Timeline & Education */}
        <div className="lg:col-span-6 flex flex-col gap-16">
          
          {/* Work Experience Section */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-8 font-display block"
            >
              Work Experience
            </motion.h3>

            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="group relative pb-8 border-b border-white/5 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-md text-white font-medium group-hover:text-[#5ce1e6] transition-colors duration-300">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-white/40">{exp.position}</p>
                    </div>
                    <span className="text-[10px] tracking-wider text-white/20 font-display">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-xs text-white/35 leading-relaxed font-light mt-3">
                    {exp.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/5 pt-10"
          >
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-display block">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-md text-white font-medium">UPN Veteran Yogyakarta</h4>
                <p className="text-xs text-white/40">Bachelor of Informatics</p>
              </div>
              <span className="text-[10px] tracking-wider text-white/20 font-display">2019 - 2023</span>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
