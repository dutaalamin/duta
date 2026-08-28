import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    services: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's email client pre-filled with form details as fallback,
    // or log for now. Very clean client-side solution!
    const subject = `Project Inquiry from ${formData.name || 'Client'}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AOrganization: ${formData.org}%0D%0AServices: ${formData.services}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:dutaalamin23@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Upper header section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8 md:pt-16 pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-tight">
            Let's start a<br />project together
          </h1>
        </motion.div>

        {/* Small Avatar on Right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex lg:justify-end"
        >
          <div className="w-20 h-20 rounded-full border border-white/10 overflow-hidden bg-[#111] shrink-0">
            <img src="/images/duta2.webp" alt="Duta Alamin" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Form Left, Contact Info Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mt-12 items-start">
        
        {/* Left Side: Interactive Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-12"
        >
          
          {/* Input 1: Name */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-widest text-white/20 font-mono pt-1">01</span>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg sm:text-xl text-white font-light">What's your name?</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe *" 
                  required
                  className="bg-transparent border-0 p-0 text-white placeholder-white/20 text-sm focus:ring-0 focus:outline-none w-full pb-2 mt-2 font-light"
                />
              </div>
            </div>
          </div>

          {/* Input 2: Email */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-widest text-white/20 font-mono pt-1">02</span>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg sm:text-xl text-white font-light">What's your email?</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@doe.com *" 
                  required
                  className="bg-transparent border-0 p-0 text-white placeholder-white/20 text-sm focus:ring-0 focus:outline-none w-full pb-2 mt-2 font-light"
                />
              </div>
            </div>
          </div>

          {/* Input 3: Organization */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-widest text-white/20 font-mono pt-1">03</span>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg sm:text-xl text-white font-light">What's the name of your organization?</label>
                <input 
                  type="text" 
                  name="org"
                  value={formData.org}
                  onChange={handleChange}
                  placeholder="John &amp; Doe ®" 
                  className="bg-transparent border-0 p-0 text-white placeholder-white/20 text-sm focus:ring-0 focus:outline-none w-full pb-2 mt-2 font-light"
                />
              </div>
            </div>
          </div>

          {/* Input 4: Services */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-widest text-white/20 font-mono pt-1">04</span>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg sm:text-xl text-white font-light">What services are you looking for?</label>
                <input 
                  type="text" 
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  placeholder="Web Design, Web Development ..." 
                  className="bg-transparent border-0 p-0 text-white placeholder-white/20 text-sm focus:ring-0 focus:outline-none w-full pb-2 mt-2 font-light"
                />
              </div>
            </div>
          </div>

          {/* Input 5: Message */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 border-b pb-8 group">
            <div className="flex items-start gap-4">
              <span className="text-[10px] tracking-widest text-white/20 font-mono pt-1">05</span>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg sm:text-xl text-white font-light">Your message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Duta, can you help me with ... *" 
                  required
                  rows="3"
                  className="bg-transparent border-0 p-0 text-white placeholder-white/20 text-sm focus:ring-0 focus:outline-none w-full pb-2 mt-2 font-light resize-none"
                />
              </div>
            </div>
          </div>

          {/* Circular Magnetic Submit Button */}
          <div className="mt-8 flex justify-start">
            <button 
              type="submit"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#111111] border border-white/10 text-xs text-white/80 hover:text-white hover:bg-white hover:text-black transition-all duration-500 font-light tracking-widest uppercase cursor-pointer flex items-center justify-center shadow-lg"
            >
              Send
            </button>
          </div>

        </motion.form>

        {/* Right Side: Contact Info & Details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-10 lg:pl-12"
        >
          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-display">Contact Details</span>
            <a href="mailto:dutaalamin23@gmail.com" className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-light">
              dutaalamin23@gmail.com
            </a>
          </div>

          {/* Location details */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-display">Location</span>
            <span className="text-sm text-white/70 font-light">
              Indonesia
            </span>
          </div>

          {/* Socials details */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-display">Socials</span>
            <div className="flex flex-col gap-2">
              <a href="https://linkedin.com/in/dutaalamin" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-light">
                LinkedIn
              </a>
              <a href="https://instagram.com/2duta" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-light">
                Instagram
              </a>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  );
}
