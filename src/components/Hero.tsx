import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { AGENCY_CONFIG } from '../config/agencyConfig';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden subtle-grid">
      {/* Background Radial Glow in Accent Red */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-red-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/30 text-red-400 mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-red-400" />
              <span>{AGENCY_CONFIG.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{ textWrap: 'balance' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6"
            >
              Grow Your Digital Presence With{' '}
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-red-400 bg-clip-text text-transparent">
                Ayesha Agency
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl font-normal text-neutral-300 leading-relaxed mb-8 max-w-2xl">
              AI-powered solutions, social media services and digital tools designed to help businesses grow faster.
            </p>

            {/* Hero Buttons: 1. Get Started 2. Chat on WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-red-600 hover:bg-red-500 active:bg-red-700 rounded-xl shadow-xl shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <WhatsAppButton
                variant="subtle"
                size="lg"
                message="Hello Ayesha Agency, I would like to chat about getting started with your digital and AI services."
                className="px-6 py-3.5 text-sm sm:text-base hover:text-white hover:border-red-500"
              >
                <span>Chat on WhatsApp</span>
              </WhatsAppButton>
            </div>

            {/* Quick Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-800/60 w-full">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                <span>AI Chatbots & Automation</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                <span>Social Media Growth</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <Zap className="w-4 h-4 text-red-400 shrink-0" />
                <span>Direct WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium SaaS Interface Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Red Ambient Backlight */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-red-600/30 to-rose-500/10 blur-xl opacity-75" />

              {/* Main SaaS Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/90 shadow-2xl shadow-black/80">
                {/* Visual Header bar */}
                <div className="px-4 py-3 bg-neutral-950 border-b border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                    <span className="text-[11px] text-neutral-400 font-mono ml-2">ayesha-agency.app/dashboard</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-red-500/20 text-red-400 border border-red-500/30 font-semibold">
                    Live
                  </span>
                </div>

                {/* Hero Feature Visual Asset */}
                <div className="relative aspect-video sm:aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  <img
                    src="/src/assets/images/service_ai_chatbot_1790960006210.jpg"
                    alt="Ayesha Agency AI & Digital Interface"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  {/* Floating Metric Card inside visual */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-700/60 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white">AI Automation Active</div>
                      <div className="text-[10px] text-neutral-400">WhatsApp Chatbots & Smart Workflows</div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                </div>

                {/* Card Bottom Grid */}
                <div className="p-4 sm:p-5 bg-neutral-900 grid grid-cols-2 gap-3 border-t border-neutral-800/60">
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/70">
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">Fast Setup</span>
                    <span className="text-xs font-bold text-red-400">Direct WhatsApp</span>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800/70">
                    <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">Capabilities</span>
                    <span className="text-xs font-bold text-white">14 Digital Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
