import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ProcessSectionProps {
  darkMode: boolean;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ darkMode }) => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span>Framework</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Our 4-Step Process
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            A clear, predictable roadmap from initial discovery to active digital expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                darkMode
                  ? 'bg-neutral-900/60 border-neutral-800/80 hover:border-emerald-500/40'
                  : 'bg-white border-neutral-200/80 hover:border-emerald-500/40 shadow-sm'
              }`}
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black tracking-tight text-emerald-400">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    Phase {index + 1}
                  </span>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs font-medium text-emerald-500 mb-4`}>
                  {item.summary}
                </p>

                <ul className="space-y-2 mt-4 pt-4 border-t border-neutral-800/40">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs leading-relaxed">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span className={darkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
