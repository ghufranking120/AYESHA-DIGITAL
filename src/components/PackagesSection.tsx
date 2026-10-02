import React from 'react';
import { PACKAGE_TIERS, getWhatsAppUrl } from '../data/agencyData';
import { Check, MessageCircle, Sliders, ArrowRight, Sparkles } from 'lucide-react';

interface PackagesSectionProps {
  darkMode: boolean;
  onOpenQuoteBuilder: (initialTier?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  darkMode,
  onOpenQuoteBuilder,
}) => {
  return (
    <section id="packages" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Investment Plans</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Packages & Solutions
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Every package is calibrated to your business size, commercial objectives, and target platforms. No rigid markups, only results-oriented partnerships.
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PACKAGE_TIERS.map((tier) => {
            const waQuoteHref = getWhatsAppUrl(
              `Hi Ayesha Digital Agency, I am interested in getting a custom quote for the ${tier.name} Package for my business. Target audience: ${tier.targetAudience}.`
            );

            return (
              <div
                key={tier.id}
                className={`rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.isPopular
                    ? darkMode
                      ? 'bg-neutral-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-950/40 ring-1 ring-emerald-500/40'
                      : 'bg-white border-emerald-500/60 shadow-xl ring-1 ring-emerald-500/50'
                    : darkMode
                    ? 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
                    : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-sm'
                }`}
              >
                {/* Popular Pill badge if present */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/30">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className={`text-2xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      {tier.name}
                    </h3>
                  </div>

                  <p className={`text-xs font-semibold text-emerald-400 mb-4`}>
                    {tier.targetAudience}
                  </p>

                  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {tier.tagline}
                  </p>

                  {/* Pricing Box - strictly Custom Pricing, no fake hardcoded numbers */}
                  <div className={`p-4 rounded-2xl mb-6 ${darkMode ? 'bg-neutral-950/60 border border-neutral-800/80' : 'bg-neutral-50 border border-neutral-200'}`}>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                        {tier.pricingDisplay}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1.5 leading-snug">
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Included Deliverables:
                    </div>
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={darkMode ? 'text-neutral-300' : 'text-neutral-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTAs */}
                <div className="pt-6 border-t border-neutral-800/40 flex flex-col gap-3">
                  <a
                    href={waQuoteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 text-xs font-bold rounded-xl text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Get a Quote via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => onOpenQuoteBuilder(tier.id)}
                    className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl border transition-all text-center flex items-center justify-center gap-1.5 ${
                      darkMode
                        ? 'border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 bg-neutral-900/40'
                        : 'border-neutral-300 text-neutral-700 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200'
                    }`}
                  >
                    <Sliders className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Customize Scope</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Scope Interactive Banner */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border-neutral-800'
              : 'bg-gradient-to-r from-neutral-50 via-white to-neutral-50 border-neutral-200'
          }`}
        >
          <div>
            <h4 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
              Need a bespoke mix of services?
            </h4>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
              Select exactly what your brand requires — from TikTok reels to full-stack SEO and Google ads.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteBuilder()}
            className="px-5 py-3 text-xs font-bold rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-neutral-950 transition-all whitespace-nowrap flex items-center gap-2"
          >
            <span>Launch Scope Builder</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
