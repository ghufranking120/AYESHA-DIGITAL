import React from 'react';
import { Target, Sparkles, MessageCircle, Layers, TrendingUp, ShieldCheck } from 'lucide-react';
import { WHY_AYESHA_CARDS } from '../data/agencyData';

interface WhyAyeshaSectionProps {
  darkMode: boolean;
}

export const WhyAyeshaSection: React.FC<WhyAyeshaSectionProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-teal-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      default:
        return <Target className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="why-ayesha" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span>Our Principles</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Why Ayesha
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Built on transparency, commercial clarity, and dedicated craftsmanship to accelerate your brand's digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_AYESHA_CARDS.map((card) => (
            <div
              key={card.id}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 glass-card-hover ${
                darkMode
                  ? 'bg-neutral-900/60 border-neutral-800/80 hover:border-emerald-500/40 hover:bg-neutral-900/90'
                  : 'bg-white border-neutral-200/80 hover:border-emerald-500/50 shadow-sm'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  darkMode ? 'bg-neutral-800/80 border border-neutral-700/60' : 'bg-neutral-100 border border-neutral-200'
                }`}
              >
                {getIcon(card.icon)}
              </div>
              <h3 className={`text-lg font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
