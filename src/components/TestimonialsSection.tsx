import React from 'react';
import { TESTIMONIAL_ITEMS } from '../data/agencyData';
import { MessageSquare, Quote, Info } from 'lucide-react';

interface TestimonialsSectionProps {
  darkMode: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ darkMode }) => {
  return (
    <section id="testimonials" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span>Feedback Structures</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Client Perspectives & Feedback
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            How we structure client communication, strategic alignments, and operational reviews.
          </p>
        </div>

        {/* Clear Notice */}
        <div
          className={`max-w-2xl mx-auto mb-12 p-3.5 rounded-xl border flex items-center gap-3 text-xs ${
            darkMode
              ? 'bg-neutral-900/40 border-neutral-800 text-neutral-400'
              : 'bg-neutral-50 border-neutral-200 text-neutral-600'
          }`}
        >
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <p>
            <strong className="text-emerald-400">Notice:</strong> The cards below represent editable placeholder feedback structures illustrating our communication benchmarks. Live verified client reviews will be documented here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIAL_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                darkMode
                  ? 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
                  : 'bg-white border-neutral-200/80 shadow-sm'
              }`}
            >
              <div>
                <Quote className="w-8 h-8 text-emerald-500/30 mb-4" />
                <p className={`text-sm leading-relaxed mb-6 italic ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/40">
                <div className="text-xs font-bold text-emerald-400 mb-0.5">
                  {item.highlight}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {item.clientRole} · {item.businessType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
