import React, { useState } from 'react';
import {
  AGENCY_CONFIG,
  getWhatsAppUrl,
  SERVICE_CATEGORIES,
} from '../data/agencyData';
import { ContactMessage } from '../types';
import {
  MessageCircle,
  Users,
  Radio,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  PhoneCall,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  darkMode: boolean;
  onInquirySubmitted?: (msg: ContactMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  darkMode,
  onInquirySubmitted,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    service: 'Social Media Marketing',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedMsg, setLastSubmittedMsg] = useState<ContactMessage | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Please provide your WhatsApp number';
    } else if (formData.whatsappNumber.replace(/\D/g, '').length < 9) {
      newErrors.whatsappNumber = 'Please enter a complete phone number';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us briefly about your project or inquiry';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newInquiry: ContactMessage = {
      id: `inq-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      whatsappNumber: formData.whatsappNumber.trim(),
      service: formData.service,
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Store in local storage for the Admin Portal demonstration
    try {
      const existing = JSON.parse(localStorage.getItem('ayesha_inquiries') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('ayesha_inquiries', JSON.stringify(existing));
    } catch {
      // Local storage disabled or full
    }

    if (onInquirySubmitted) {
      onInquirySubmitted(newInquiry);
    }

    setLastSubmittedMsg(newInquiry);
    setIsSubmitted(true);
  };

  const handleLaunchWhatsApp = () => {
    if (!lastSubmittedMsg) return;
    const text = `*New Website Inquiry*\n*Name:* ${lastSubmittedMsg.name}\n*Email:* ${lastSubmittedMsg.email}\n*WhatsApp:* ${lastSubmittedMsg.whatsappNumber}\n*Service:* ${lastSubmittedMsg.service}\n*Message:* ${lastSubmittedMsg.message}`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Let's Grow Your Business
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Reach out through our verified WhatsApp channels or submit the project inquiry form below. We respond promptly.
          </p>
        </div>

        {/* Quick Connection Cards: 3 Verified WhatsApp Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {/* Card 1: Direct WhatsApp */}
          <a
            href={AGENCY_CONFIG.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
              darkMode
                ? 'bg-neutral-900/80 border-emerald-500/40 hover:bg-neutral-900 hover:border-emerald-400 shadow-lg shadow-emerald-950/20'
                : 'bg-emerald-50/50 border-emerald-300 hover:bg-emerald-50 shadow-sm'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                WhatsApp Direct
              </h3>
              <p className="text-xs text-emerald-500 font-medium mb-3">
                03137442624 (+92 313 7442624)
              </p>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Start an immediate 1-on-1 consultation for project pricing, scopes, and customized packages.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Open Chat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: WhatsApp Channel */}
          <a
            href={AGENCY_CONFIG.whatsappChannel}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
              darkMode
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                WhatsApp Channel
              </h3>
              <p className="text-xs text-cyan-400 font-medium mb-3">
                Official Updates & Strategy Tips
              </p>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Follow our official channel for latest digital marketing algorithms, reel tactics, and agency news.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-800/40 flex items-center justify-between text-xs font-bold text-cyan-400">
              <span>Follow Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: WhatsApp Group */}
          <a
            href={AGENCY_CONFIG.whatsappGroup}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
              darkMode
                ? 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                WhatsApp Group
              </h3>
              <p className="text-xs text-teal-400 font-medium mb-3">
                Community Discussion & Support
              </p>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                Join our business growth community to exchange insights, questions, and networking discussions.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-neutral-800/40 flex items-center justify-between text-xs font-bold text-teal-400">
              <span>Join Group</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Contact Form Container */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`p-8 sm:p-10 rounded-3xl border ${
              darkMode
                ? 'bg-neutral-900/80 border-neutral-800 shadow-2xl shadow-black/40'
                : 'bg-white border-neutral-200 shadow-xl'
            }`}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  Inquiry Received!
                </h3>
                <p className={`text-sm max-w-md mx-auto mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been registered in the agency system. For the quickest response, you can forward this exact message directly to our WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold rounded-xl text-neutral-950 bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send to WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        whatsappNumber: '',
                        service: 'Social Media Marketing',
                        message: '',
                      });
                    }}
                    className={`w-full sm:w-auto px-5 py-3 text-xs font-semibold rounded-xl border ${
                      darkMode ? 'border-neutral-800 text-neutral-300 hover:text-white' : 'border-neutral-300 text-neutral-700 hover:text-black'
                    }`}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                    Send a Project Inquiry
                  </h3>
                  <p className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    Fill out the fields below. A WhatsApp copy option will be provided upon submission.
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Khan"
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                      errors.name
                        ? 'border-red-500 bg-red-500/5'
                        : darkMode
                        ? 'bg-neutral-950/70 border-neutral-800 text-white focus:border-emerald-500'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email and WhatsApp grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@example.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 bg-red-500/5'
                          : darkMode
                          ? 'bg-neutral-950/70 border-neutral-800 text-white focus:border-emerald-500'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      WhatsApp Number *
                    </label>
                    <input
                      type="text"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="e.g. 0313 7442624"
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all ${
                        errors.whatsappNumber
                          ? 'border-red-500 bg-red-500/5'
                          : darkMode
                          ? 'bg-neutral-950/70 border-neutral-800 text-white focus:border-emerald-500'
                          : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
                      }`}
                    />
                    {errors.whatsappNumber && (
                      <p className="text-red-400 text-xs mt-1.5">{errors.whatsappNumber}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all cursor-pointer ${
                      darkMode
                        ? 'bg-neutral-950/70 border-neutral-800 text-white focus:border-emerald-500'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
                    }`}
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <optgroup key={cat.id} label={cat.name}>
                        {cat.services.map((srv) => (
                          <option key={srv.id} value={`${cat.name} — ${srv.title}`}>
                            {srv.title} ({cat.name})
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Complete Custom Digital Marketing Package">
                      Custom Multi-Service Solution / Not Sure
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Project Brief or Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand, current challenges, and target milestones..."
                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-500/5'
                        : darkMode
                        ? 'bg-neutral-950/70 border-neutral-800 text-white focus:border-emerald-500'
                        : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                  <p className="text-[11px] text-center text-neutral-500 mt-2">
                    Inquiries are stored for agency review with instant WhatsApp fallback.
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
