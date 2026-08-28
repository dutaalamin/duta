import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    services: '',
    message: ''
  });

  const [focused, setFocused] = useState(null);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Honeypot check (silently filter bots)
    if (honeypot) {
      setStatus('success');
      setFormData({ name: '', email: '', org: '', services: '', message: '' });
      return;
    }

    // 2. Cooldown check (prevent spam submissions)
    const lastSubmit = localStorage.getItem('duta_contact_last_submit');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      alert("Please wait a minute before sending another message.");
      return;
    }

    // 3. Send using EmailJS or mailto fallback
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback if environment variables are not set
    if (!serviceId || serviceId === 'your_service_id_here') {
      const subject = `Project Inquiry from ${formData.name || 'Client'}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AOrganization: ${formData.org}%0D%0AServices: ${formData.services}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = `mailto:dutaalamin23@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus('success');
      localStorage.setItem('duta_contact_last_submit', now.toString());
      setFormData({ name: '', email: '', org: '', services: '', message: '' });
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      organization: formData.org,
      services: formData.services,
      message: formData.message,
      to_email: 'dutaalamin23@gmail.com'
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        localStorage.setItem('duta_contact_last_submit', now.toString());
        setFormData({ name: '', email: '', org: '', services: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      });
  };

  const inputClass = (fieldName) => `
    w-full bg-[#141414] border rounded-lg px-4 py-3 text-white text-sm font-light
    placeholder-white/25 mt-3 transition-all duration-300 outline-none
    ${focused === fieldName 
      ? 'border-white/40 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]' 
      : 'border-white/8 hover:border-white/20'}
  `;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Header with avatar — same grid as below so avatar aligns above Contact Details */}
      <div className="pt-8 md:pt-16 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-end">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-tight"
        >
          Let's start a<br />project together
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 hidden sm:block lg:pl-12"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 bg-[#111]">
            <img src="/images/duta.png" alt="Duta Alamin" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Form Left, Contact Info Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Side: Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-8"
        >
          
          {/* Input 1: Name */}
          <div className="flex flex-col">
            <label className="text-base sm:text-lg text-white font-light">What's your name?</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              placeholder="John Doe *" 
              required
              className={inputClass('name')}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5" />

          {/* Input 2: Email */}
          <div className="flex flex-col">
            <label className="text-base sm:text-lg text-white font-light">What's your email?</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              placeholder="john@doe.com *" 
              required
              className={inputClass('email')}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5" />

          {/* Input 3: Organization */}
          <div className="flex flex-col">
            <label className="text-base sm:text-lg text-white font-light">What's the name of your organization?</label>
            <input 
              type="text" 
              name="org"
              value={formData.org}
              onChange={handleChange}
              onFocus={() => setFocused('org')}
              onBlur={() => setFocused(null)}
              placeholder="John & Doe ®" 
              className={inputClass('org')}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5" />

          {/* Input 4: Services */}
          <div className="flex flex-col">
            <label className="text-base sm:text-lg text-white font-light">What services are you looking for?</label>
            <input 
              type="text" 
              name="services"
              value={formData.services}
              onChange={handleChange}
              onFocus={() => setFocused('services')}
              onBlur={() => setFocused(null)}
              placeholder="Web Design, Web Development ..." 
              className={inputClass('services')}
            />
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5" />

          {/* Input 5: Message */}
          <div className="flex flex-col">
            <label className="text-base sm:text-lg text-white font-light">Your message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused(null)}
              placeholder="Hello Duta, can you help me with ... *" 
              required
              rows="4"
              className={`${inputClass('message')} resize-none`}
            />
          </div>

          {/* Honeypot field - anti-spam bot trap */}
          <input 
            type="text" 
            name="subject_api_validate" 
            value={honeypot} 
            onChange={(e) => setHoneypot(e.target.value)} 
            className="hidden" 
            autoComplete="off" 
          />

          {/* Status Message Display */}
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-400 font-light"
            >
              Thank you! Your message has been sent successfully.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-red-400 font-light"
            >
              Oops! Something went wrong. Please try again or email directly at dutaalamin23@gmail.com
            </motion.p>
          )}

          {/* Send Button */}
          <div className="mt-4">
            <button 
              type="submit"
              disabled={status === 'sending'}
              className="group px-10 py-4 rounded-full bg-white text-black text-sm font-medium tracking-widest uppercase cursor-pointer hover:bg-white/90 disabled:bg-white/40 disabled:text-black/60 transition-all duration-300 flex items-center gap-3"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send it'}
              {status !== 'sending' && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
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

          {/* Location */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 font-display">Location</span>
            <span className="text-sm text-white/70 font-light">Indonesia</span>
          </div>

          {/* Socials */}
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
