import React from 'react';
import { Cpu, Zap, MessageSquare, Sliders, LifeBuoy, TrendingUp, Sparkles } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const points = [
    {
      title: 'Modern Technology',
      description: 'Built with contemporary frameworks, responsive design standards, and high-performance execution.',
      icon: Cpu,
    },
    {
      title: 'AI-Powered Solutions',
      description: 'Harness machine intelligence for conversational WhatsApp chatbots, video reels, and automated workflows.',
      icon: Zap,
    },
    {
      title: 'Fast Communication',
      description: 'Direct WhatsApp channels with rapid response times. No ticketing queues or communication roadblocks.',
      icon: MessageSquare,
    },
    {
      title: 'Custom Solutions',
      description: 'Every deliverable is crafted specifically around your commercial model, customer profile, and business niche.',
      icon: Sliders,
    },
    {
      title: 'Professional Support',
      description: 'Dedicated post-launch assistance and technical guidance to ensure your systems run smoothly.',
      icon: LifeBuoy,
    },
    {
      title: 'Business-Focused Approach',
      description: 'Prioritizing customer leads, audience engagement, and tangible business growth over vanity metrics.',
      icon: TrendingUp,
    },
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Ayesha Agency</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Built for Modern Brands
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            A cohesive agency framework combining cutting-edge AI technologies, commercial clarity, and direct communication.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-6 sm:p-7 rounded-2xl dark-white-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 text-red-400 flex items-center justify-center mb-5 group-hover:bg-red-500/10 group-hover:border-red-500/30 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
