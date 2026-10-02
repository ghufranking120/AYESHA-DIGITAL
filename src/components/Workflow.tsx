import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const Workflow: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Contact Us',
      desc: 'Reach out through our direct WhatsApp channel or inquiry form with your ideas.',
    },
    {
      step: '02',
      title: 'Discuss Your Requirement',
      desc: 'We clarify your brand objectives, target audience, and required digital capabilities.',
    },
    {
      step: '03',
      title: 'Choose The Solution',
      desc: 'Select the optimal mix of AI chatbots, video content, SMM, or web development.',
    },
    {
      step: '04',
      title: 'We Build / Configure',
      desc: 'Our team crafts your custom assets, configures automation, and produces media.',
    },
    {
      step: '05',
      title: 'Launch & Support',
      desc: 'Go live with full confidence, backed by our continuous guidance and technical tuning.',
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Execution</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            A transparent five-stage journey turning your vision into an active digital growth engine.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl dark-white-card flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-red-500">
                    {item.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    Stage {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-neutral-700 pointer-events-none">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 text-center">
          <WhatsAppButton
            variant="outline"
            size="md"
            message="Hello Ayesha Agency, I would like to discuss step 1 of my project requirement."
          >
            <span>Start Step 01 On WhatsApp</span>
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
};
