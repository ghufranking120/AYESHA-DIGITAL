import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, getWhatsAppUrl } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ExternalLink, Info, Check, MessageCircle, X } from 'lucide-react';

interface PortfolioSectionProps {
  darkMode: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ darkMode }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <span>Creative Showcase</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Portfolio & Sample Work
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Explore our creative design concepts, brand identities, and digital marketing campaign frameworks.
          </p>
        </div>

        {/* Clear Mandatory Sample Notice */}
        <div
          className={`max-w-3xl mx-auto mb-12 p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
            darkMode
              ? 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
          }`}
        >
          <Info className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-emerald-400">Sample Showcase Notice:</strong> The projects shown below represent sample agency design frameworks and architectural concepts created to demonstrate our deliverables and aesthetic direction. Real client project case studies will be published as verified client engagements conclude.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 glass-card-hover ${
                darkMode ? 'bg-neutral-900/70 border-neutral-800/90' : 'bg-white border-neutral-200 shadow-sm'
              }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

                {/* Sample Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-neutral-950/80 border border-neutral-700 text-amber-400 backdrop-blur-md">
                  <span>Sample / Concept</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className={`text-xs font-semibold text-neutral-400 mb-3`}>
                    Domain: {item.clientType}
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {item.description}
                  </p>

                  {/* Deliverables list */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                          darkMode
                            ? 'bg-neutral-800/60 border-neutral-700/60 text-neutral-300'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                        }`}
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect and discuss buttons */}
                <div className="pt-4 border-t border-neutral-800/40 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Concept Scope</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      `Hi Ayesha Digital Agency, I saw your portfolio sample "${item.title}" and would like to build something similar for my business.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Inquire Scope</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className={`max-w-xl w-full rounded-2xl border p-6 sm:p-8 relative shadow-2xl ${
              darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
            }`}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <span>Sample Design Concept</span>
            </div>

            <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
            <p className="text-xs text-emerald-500 font-semibold mb-4">{selectedItem.category}</p>

            <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {selectedItem.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Included Deliverable Specifications:
              </h4>
              <div className="space-y-2">
                {selectedItem.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={getWhatsAppUrl(
                  `Hi Ayesha Digital Agency, I would like to create a project similar to "${selectedItem.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold rounded-lg bg-emerald-500 text-neutral-950 hover:bg-emerald-400 flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
