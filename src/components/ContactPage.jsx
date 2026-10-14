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
    w-full bg-ink-2 border px-4 py-3 text-paper text-sm font-light
    placeholder-paper/20 mt-3 transition-all duration-300 outline-none
    ${focused === fieldName
      ? 'border-signal'
      : 'border-rule hover:border-mute'}
  `;

  return (
    <div id="contact-form" className="relative bg-ink pt-28 md:pt-36 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Header */}
      <div className="pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 font-display font-extrabold text-paper leading-[0.95] tracking-[-0.03em] text-[clamp(2.4rem,7vw,5rem)]"
        >
          Let&rsquo;s start a
          <br />
          project <span className="text-signal">together</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:col-span-4 hidden sm:block lg:pl-12"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden bg-ink-3 grayscale-[30%]">
            <img src="/images/duta.png" alt="Duta Alamin" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-8 flex flex-col gap-8"
        >
          {[
            { name: 'name', label: "What's your name?", ph: 'John Doe *', type: 'text', req: true },
            { name: 'email', label: "What's your email?", ph: 'john@doe.com *', type: 'email', req: true },
            { name: 'org', label: "What's the name of your organization?", ph: 'John & Doe', type: 'text', req: false },
            { name: 'services', label: 'What services are you looking for?', ph: 'Web Design, Web Development ...', type: 'text', req: false },
          ].map((f) => (
            <div key={f.name} className="flex flex-col">
              <label className="text-sm text-paper/80 font-light mb-2">{f.label}</label>
              <input
                type={f.type}
                name={f.name}
                value={formData[f.name]}
                onChange={handleChange}
                onFocus={() => setFocused(f.name)}
                onBlur={() => setFocused(null)}
                placeholder={f.ph}
                required={f.req}
                className={inputClass(f.name)}
              />
            </div>
          ))}

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-sm text-paper/80 font-light mb-2">Your message</label>
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

          {/* Honeypot */}
          <input
            type="text"
            name="subject_api_validate"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            autoComplete="off"
          />

          {status === 'success' && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-signal">
              ✓ Thank you! Your message has been sent successfully.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-400">
              ✗ Something went wrong. Email directly at dutaalamin23@gmail.com
            </motion.p>
          )}

          <div className="mt-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="group px-10 py-4 bg-signal text-ink text-sm font-medium tracking-widest uppercase cursor-pointer hover:bg-paper disabled:bg-mute transition-colors duration-300 flex items-center gap-3"
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send it'}
              {status !== 'sending' && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              )}
            </button>
          </div>
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-4 flex flex-col gap-8 lg:pl-12"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-mute">Email</span>
            <a href="mailto:dutaalamin23@gmail.com" className="text-sm text-paper hover:text-signal transition-colors duration-300">
              dutaalamin23@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-mute">Location</span>
            <span className="text-sm text-paper/70">Indonesia — GMT+7</span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] tracking-widest uppercase text-mute">Socials</span>
            <div className="flex flex-col gap-1.5">
              <a href="https://linkedin.com/in/dutaalamin" target="_blank" rel="noopener noreferrer" className="text-sm text-paper/70 hover:text-signal transition-colors duration-300">
                LinkedIn ↗
              </a>
              <a href="https://instagram.com/2duta" target="_blank" rel="noopener noreferrer" className="text-sm text-paper/70 hover:text-signal transition-colors duration-300">
                Instagram ↗
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
