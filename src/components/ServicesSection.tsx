import React, { useState, useMemo } from 'react';
import {
  SERVICE_CATEGORIES,
  AGENCY_CONFIG,
  getWhatsAppUrl,
} from '../data/agencyData';
import { ServiceItem } from '../types';
import { DynamicIcon } from './DynamicIcon';
import { Search, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  darkMode: boolean;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  darkMode,
  onSelectService,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect all services
  const allServices = useMemo(() => {
    return SERVICE_CATEGORIES.flatMap((cat) => cat.services);
  }, []);

  // Filtered services
  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        activeCategoryId === 'all' || service.categoryId === activeCategoryId;
      const matchesQuery =
        searchQuery.trim() === '' ||
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesQuery;
    });
  }, [allServices, activeCategoryId, searchQuery]);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>9 Specialized Categories</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
              darkMode ? 'text-white' : 'text-neutral-900'
            }`}
          >
            Our Complete Services
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>
            Full-spectrum digital marketing, social media, creative design, paid advertising, and web solutions built to drive measurable business outcomes.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. TikTok, SEO, Facebook Ads, Logo, Video Editing)..."
              className={`w-full pl-11 pr-4 py-3 text-sm rounded-xl border transition-all outline-none ${
                darkMode
                  ? 'bg-neutral-900/90 border-neutral-800 text-white placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
                  : 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 shadow-sm'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center px-1">
            <button
              onClick={() => setActiveCategoryId('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                activeCategoryId === 'all'
                  ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                  : darkMode
                  ? 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                  : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              All Services ({allServices.length})
            </button>

            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  activeCategoryId === cat.id
                    ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                    : darkMode
                    ? 'bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800/80'
                    : 'bg-neutral-100 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 border border-neutral-200'
                }`}
              >
                {cat.name} ({cat.services.length})
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between text-xs text-neutral-500 mb-6 px-1">
          <span>
            Showing <strong className="text-emerald-400 font-semibold">{filteredServices.length}</strong> services
          </span>
          {activeCategoryId !== 'all' && (
            <span className="text-neutral-400">
              Category: {SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId)?.name}
            </span>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const waText = `Hi Ayesha Digital Agency, I am interested in your "${service.title}" service under ${service.categoryName}. Could you share more details and a quote?`;
            const waHref = getWhatsAppUrl(waText);

            return (
              <div
                key={service.id}
                className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between glass-card-hover group ${
                  darkMode
                    ? 'bg-neutral-900/70 border-neutral-800/90 hover:border-emerald-500/50 hover:bg-neutral-900'
                    : 'bg-white border-neutral-200/90 hover:border-emerald-500/60 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Row: Category & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-semibold text-emerald-500 uppercase tracking-wider">
                      {service.categoryName}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:scale-105 ${
                        darkMode
                          ? 'bg-neutral-800 border border-neutral-700 text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10'
                          : 'bg-neutral-100 border border-neutral-200 text-emerald-600 group-hover:border-emerald-400 group-hover:bg-emerald-50'
                      }`}
                    >
                      <DynamicIcon name={service.icon} className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors ${
                      darkMode ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Tags */}
                  {service.tags && service.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-5 text-[11px] text-neutral-500">
                      {service.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="inline-flex items-center gap-1">
                          {tIdx > 0 && <span className="opacity-40">/</span>}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions: Get Started & WhatsApp CTA */}
                <div className="pt-4 border-t border-neutral-800/40 flex items-center gap-2 mt-auto">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-neutral-950 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-1.5"
                    title={`Chat on WhatsApp about ${service.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
