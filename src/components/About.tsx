import React from 'react';
import { Cpu, Share2, Palette, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Digital Solutions',
      description: 'End-to-end web experiences, campaign funnels, and digital tools tailored to commercial goals.',
      icon: Globe,
      accent: 'text-red-400',
    },
    {
      title: 'AI Automation',
      description: 'Intelligent WhatsApp chatbots, business workflow agents, and repetitive task automation.',
      icon: Cpu,
      accent: 'text-rose-400',
    },
    {
      title: 'Social Media',
      description: 'Targeted Instagram, TikTok, and cross-channel content strategies that capture audience attention.',
      icon: Share2,
      accent: 'text-red-400',
    },
    {
      title: 'Creative Services',
      description: 'AI-assisted video reels, professional branding, social media graphics, and promotional design.',
      icon: Palette,
      accent: 'text-rose-400',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Studio / Agency Preview */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-rose-600/10 rounded-2xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                <img
                  src="/src/assets/images/agency_creative_studio_1790958017199.jpg"
                  alt="Ayesha Agency Workspace"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-5 bg-neutral-900/90 border-t border-neutral-800">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-red-400 font-bold uppercase tracking-wider">
                      Ayesha Agency Focus
                    </span>
                    <span className="text-neutral-400 font-mono text-[11px]">SaaS & Creative</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Dedicated digital and AI engineering workspace crafting high-converting social feeds, automated messaging systems, and web flagships.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Description & Focus Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
              <span>Agency Overview</span>
            </div>

            <h2
              style={{ textWrap: 'balance' }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            >
              About Ayesha Agency
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
              Ayesha Agency is a modern digital agency providing AI, social media, automation, content and digital growth solutions for businesses, creators and brands.
            </p>

            {/* Focus Statistics / Core Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-red-500/40 transition-all agency-card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <WhatsAppButton
                variant="primary"
                size="md"
                message="Hello Ayesha Agency, I would like to learn more about your services."
              >
                <span>Connect With Our Team</span>
              </WhatsAppButton>

              <a
                href="#services"
                className="text-xs sm:text-sm font-semibold text-neutral-300 hover:text-red-400 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Browse All 14 Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
