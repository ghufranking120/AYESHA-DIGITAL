import React, { useState, useMemo } from 'react';
import { SERVICES_LIST, ServiceItem } from '../data/servicesData';
import { WhatsAppButton } from './WhatsAppButton';
import { DynamicIcon } from './DynamicIcon';
import { Search, Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForContact?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI & Automation', 'Social Growth', 'Creative & Video', 'Web & Tech'];

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((srv) => {
      const matchesCategory =
        activeCategory === 'All' ||
        (activeCategory === 'AI & Automation' &&
          (srv.categoryBadge.includes('AI') || srv.categoryBadge.includes('Automation'))) ||
        (activeCategory === 'Social Growth' &&
          (srv.categoryBadge.includes('Social') ||
            srv.categoryBadge.includes('Brand') ||
            srv.categoryBadge.includes('Campaign'))) ||
        (activeCategory === 'Creative & Video' &&
          (srv.categoryBadge.includes('Creative') ||
            srv.categoryBadge.includes('Video') ||
            srv.categoryBadge.includes('Visual'))) ||
        (activeCategory === 'Web & Tech' &&
          (srv.categoryBadge.includes('Web') ||
            srv.categoryBadge.includes('Full-Funnel') ||
            srv.categoryBadge.includes('Inbound')));

      const matchesSearch =
        searchQuery.trim() === '' ||
        srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        srv.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Digital Solutions & AI Architecture</span>
          </div>
          <h2
            style={{ textWrap: 'balance' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            Our Complete Services
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            Tailored AI assistants, automated messaging, viral content creation, and conversion-focused digital systems for modern brands.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-10 space-y-4">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 14 services (e.g. Chatbot, TikTok, Video, Automation)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (All 14 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl dark-white-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Service Unique Visual Mockup / Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Top Number & Category Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-400 px-2 py-0.5 rounded-md bg-neutral-950/80 border border-neutral-800">
                    {service.number}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-300 px-2.5 py-0.5 rounded-md bg-neutral-900/80 border border-neutral-700 backdrop-blur-md">
                    {service.categoryBadge}
                  </span>
                </div>
              </div>

              {/* Service Content Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <DynamicIcon name={service.icon} className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-1.5 mb-6">
                    {service.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400">
                        <Check className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions: "Get Started" and "Discuss This Service" WhatsApp CTA */}
                <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mt-auto">
                  {/* Get Started -> Triggers contact form / scroll */}
                  <a
                    href="#contact"
                    onClick={() => {
                      if (onSelectServiceForContact) {
                        onSelectServiceForContact(service.title);
                      }
                    }}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  {/* WhatsApp CTA: "Discuss This Service" with pre-filled message */}
                  <WhatsAppButton
                    variant="primary"
                    size="sm"
                    message={service.whatsappMessage}
                    className="flex-1 py-2.5 text-xs text-center"
                  >
                    <span>Discuss This Service</span>
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
