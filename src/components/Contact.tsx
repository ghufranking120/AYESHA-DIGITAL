import React, { useState } from 'react';
import { AGENCY_CONFIG, getWhatsAppLink } from '../config/agencyConfig';
import { SERVICES_LIST } from '../data/servicesData';
import { WhatsAppButton } from './WhatsAppButton';
import {
  MessageCircle,
  Mail,
  Instagram,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface ContactProps {
  initialSelectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSelectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    service: initialSelectedService || 'AI WhatsApp Chatbot',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form properly
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.whatsappNumber.trim()) {
      errs.whatsappNumber = 'Please provide your WhatsApp number';
    } else if (formData.whatsappNumber.replace(/\D/g, '').length < 8) {
      errs.whatsappNumber = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please describe what you are looking to build or achieve';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save in browser session
    try {
      const stored = JSON.parse(localStorage.getItem('ayesha_inquiries') || '[]');
      stored.unshift({
        id: `inq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('ayesha_inquiries', JSON.stringify(stored));
    } catch {
      // Storage unavailable or disabled
    }

    setSubmitted(true);
  };

  const handleForwardToWhatsApp = () => {
    const msg = `*New Project Inquiry — Ayesha Agency*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* ${formData.whatsappNumber}\n*Requested Service:* ${formData.service}\n*Message:* ${formData.message}`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            Tell us what you need and our team will help you find the right digital solution.
          </p>
        </div>

        {/* 3 Dedicated WhatsApp Channels: Direct, Channel, Group */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {/* WhatsApp Direct */}
          <a
            href={AGENCY_CONFIG.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 hover:bg-neutral-900 transition-all agency-card group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">WhatsApp Direct</h3>
              <p className="text-xs text-red-400 font-mono font-medium mb-1">
                {AGENCY_CONFIG.whatsappDisplayNumber}
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Direct 1-on-1 discussion for project requirements and quotes.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-red-400">
              <span>Open Chat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp Channel */}
          <a
            href={AGENCY_CONFIG.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 hover:bg-neutral-900 transition-all agency-card group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">WhatsApp Channel</h3>
              <p className="text-xs text-red-400 font-medium mb-1">
                Official Updates
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Follow our official channel for service announcements & tips.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-red-400">
              <span>Join Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* WhatsApp Group */}
          <a
            href={AGENCY_CONFIG.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-red-500/50 hover:bg-neutral-900 transition-all agency-card group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="text-sm font-bold text-white mb-1">WhatsApp Group</h3>
              <p className="text-xs text-red-400 font-medium mb-1">
                Community & Networking
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Join our community group to connect and discuss digital growth.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-red-400">
              <span>Join Group</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="p-7 sm:p-10 rounded-3xl border border-neutral-800 bg-neutral-900/90 shadow-2xl shadow-black/60">
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Inquiry Prepared!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Your message is ready. Click below to send this directly to our WhatsApp representative.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleForwardToWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold rounded-xl text-white bg-red-600 hover:bg-red-500 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        whatsappNumber: '',
                        service: 'AI WhatsApp Chatbot',
                        message: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold rounded-xl border border-neutral-800 text-neutral-300 hover:text-white cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Send a Project Inquiry
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Direct handoff with instant WhatsApp routing.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Khan"
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-neutral-950 text-white placeholder-neutral-500 outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email and WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-neutral-950 text-white placeholder-neutral-500 outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="e.g. 0313 7442624"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-neutral-950 text-white placeholder-neutral-500 outline-none transition-colors ${
                        errors.whatsappNumber
                          ? 'border-red-500'
                          : 'border-neutral-800 focus:border-red-500'
                      }`}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-red-400 text-xs mt-1">{errors.whatsappNumber}</p>
                    )}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Select Digital Solution
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm border border-neutral-800 bg-neutral-950 text-white outline-none focus:border-red-500 cursor-pointer"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.number}. {srv.title} ({srv.categoryBadge})
                      </option>
                    ))}
                    <option value="Custom Multi-Service Scope">
                      Custom Multi-Service Scope / Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Project Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly tell us about your goals, current challenges, or ideas..."
                    className={`w-full px-4 py-3 rounded-xl text-sm border bg-neutral-950 text-white placeholder-neutral-500 outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-neutral-800 focus:border-red-500'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-neutral-500 mt-2">
                    Direct validation with immediate WhatsApp routing. No fake backend claims.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
