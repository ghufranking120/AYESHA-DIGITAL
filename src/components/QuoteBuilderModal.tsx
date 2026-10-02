import React, { useState } from 'react';
import { SERVICE_CATEGORIES, getWhatsAppUrl } from '../data/agencyData';
import { ServiceItem } from '../types';
import { X, Check, MessageCircle, Sparkles, Send } from 'lucide-react';

interface QuoteBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  preselectedService?: ServiceItem | null;
  initialTier?: string;
}

export const QuoteBuilderModal: React.FC<QuoteBuilderModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  preselectedService,
  initialTier,
}) => {
  if (!isOpen) return null;

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(() => {
    if (preselectedService) return [preselectedService.id];
    return ['fb-marketing', 'content-creation'];
  });

  const [timeline, setTimeline] = useState('Monthly Retainer');
  const [businessName, setBusinessName] = useState('');
  const [notes, setNotes] = useState('');

  const allServices = SERVICE_CATEGORIES.flatMap((c) => c.services);

  const toggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const selectedServices = allServices.filter((s) => selectedServiceIds.includes(s.id));

  const handleSendToWhatsApp = () => {
    const list = selectedServices.map((s) => `• ${s.title} (${s.categoryName})`).join('\n');
    const msg = `*Custom Project Scope Inquiry — Ayesha Digital Agency*\n\n*Business / Client Name:* ${businessName || 'Not specified'}\n*Project Timeline:* ${timeline}\n${initialTier ? `*Base Tier Reference:* ${initialTier.toUpperCase()}\n` : ''}\n*Selected Services (${selectedServices.length}):*\n${list}\n\n*Additional Notes:* ${notes || 'None'}\n\nPlease provide custom package pricing and timeline estimation.`;

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`max-w-2xl w-full rounded-3xl border p-6 sm:p-8 relative my-8 shadow-2xl transition-all ${
          darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Scope Builder"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Scope Builder</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Customize Your Project Scope
          </h3>
          <p className={`text-xs sm:text-sm mt-1.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Pick any combination of digital marketing services. Generate a clean scope summary to review with us on WhatsApp.
          </p>
        </div>

        {/* Services Selector */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Select Desired Services ({selectedServices.length} chosen)
            </label>
            <span className="text-[11px] text-emerald-400 font-medium">Click to toggle</span>
          </div>

          <div
            className={`max-h-60 overflow-y-auto p-3 rounded-2xl border space-y-4 ${
              darkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
            }`}
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  {cat.name}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.services.map((srv) => {
                    const isSelected = selectedServiceIds.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-semibold'
                            : darkMode
                            ? 'bg-neutral-900 border-neutral-800/80 text-neutral-400 hover:text-white'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:text-black'
                        }`}
                      >
                        <span className="truncate pr-2">{srv.title}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            isSelected
                              ? 'bg-emerald-500 border-emerald-500 text-neutral-950'
                              : 'border-neutral-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Business / Brand Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="e.g. Modern Retail Co."
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
              }`}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
              Target Timeline
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none cursor-pointer ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
              }`}
            >
              <option value="Immediate Launch (1-2 weeks)">Immediate Launch (1-2 weeks)</option>
              <option value="Standard Rollout (3-4 weeks)">Standard Rollout (3-4 weeks)</option>
              <option value="Monthly Retainer (Ongoing Growth)">Monthly Retainer (Ongoing Growth)</option>
              <option value="Just Inquiring for Future Planning">Just Inquiring for Future</option>
            </select>
          </div>
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1.5">
            Key Objectives or Specific Requirements
          </label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Focusing on Instagram reels and lead generation in Pakistan..."
            className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none ${
              darkMode
                ? 'bg-neutral-950 border-neutral-800 text-white focus:border-emerald-500'
                : 'bg-neutral-50 border-neutral-300 text-neutral-900 focus:border-emerald-600'
            }`}
          />
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 text-center sm:text-left">
            <span className="font-semibold text-emerald-400">{selectedServices.length}</span> services selected
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleSendToWhatsApp}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold rounded-xl text-neutral-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Scope to WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
