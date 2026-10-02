import React from 'react';
import { Target, Users, Sparkles, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface AboutSectionProps {
  darkMode: boolean;
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onExploreServices }) => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Studio Image Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/10 rounded-2xl blur-xl" />
              <div
                className={`relative rounded-2xl overflow-hidden border ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                } shadow-2xl`}
              >
                <img
                  src="/src/assets/images/agency_creative_studio_1790958017199.jpg"
                  alt="Ayesha Digital Agency Creative Studio"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/10] object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-emerald-400 font-semibold tracking-wider uppercase">
                      Agency Studio
                    </span>
                    <span className="text-neutral-400">Digital Execution</span>
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    Collaborative digital marketing workspace dedicated to producing high-caliber visual media, technical SEO, and direct-response campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
              <span>About Us</span>
            </div>

            <h2
              style={{ textWrap: 'balance' }}
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 ${
                darkMode ? 'text-white' : 'text-neutral-900'
              }`}
            >
              About Ayesha
            </h2>

            <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              <p>
                Ayesha Digital Agency provides professional digital marketing and creative solutions engineered to help businesses establish, strengthen, and grow their online presence.
              </p>
              <p>
                We believe sustainable online growth is not built on gimmicks or fleeting trends, but on disciplined digital strategy, persuasive creative assets, and clear communication. From high-converting social media feeds to targeted paid ads, local SEO, and modern web design, we partner directly with business owners to translate commercial goals into measurable digital execution.
              </p>
              <p>
                Our team takes pride in honesty and direct accessibility. With direct WhatsApp collaboration, we eliminate unnecessary bureaucratic delays so your business moves quickly, tests effectively, and reaches target customers where they spend their attention.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 w-full">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className={`text-xs font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Customized, goal-oriented roadmaps
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className={`text-xs font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Fast & responsive WhatsApp support
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className={`text-xs font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Creative visual design & video editing
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className={`text-xs font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  Commercial focus on real customer leads
                </span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>View Full Service Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
