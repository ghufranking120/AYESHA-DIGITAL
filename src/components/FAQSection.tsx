import React, { useState } from 'react';
import { FAQ_ITEMS, AGENCY_CONFIG } from '../data/agencyData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  darkMode: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ darkMode }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Clear answers about our services, collaboration workflow, and pricing structure.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-neutral-900/90 border-emerald-500/40 shadow-lg'
                      : 'bg-white border-emerald-500/50 shadow-md'
                    : darkMode
                    ? 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold ${
                      isOpen
                        ? 'text-emerald-400'
                        : darkMode
                        ? 'text-white'
                        : 'text-neutral-900'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-emerald-500/20 text-emerald-400'
                        : darkMode
                        ? 'bg-neutral-800 text-neutral-400'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-neutral-800/30">
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt for more questions */}
        <div className="mt-12 text-center p-6 rounded-2xl border border-neutral-800/60 bg-neutral-950/40">
          <p className={`text-sm mb-3 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Have a specific question not covered here?
          </p>
          <a
            href={AGENCY_CONFIG.whatsappDirect}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask us directly on WhatsApp (+92 313 7442624)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
