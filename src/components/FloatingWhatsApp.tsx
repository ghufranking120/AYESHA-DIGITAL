import React, { useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Optional Dismissible Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs shadow-xl shadow-black/50 backdrop-blur-md animate-fade-in">
          <span>Need help? Chat with <strong>Ayesha Agency</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-500 hover:text-white p-0.5 rounded"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with Pulse Ring */}
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-red-600/30 blur-sm group-hover:blur-md transition-all animate-pulse" />
        <WhatsAppButton
          variant="floating"
          message="Hello Ayesha Agency, I am visiting your website and would like to chat."
          showIcon={true}
          className="relative z-10"
        />
      </div>
    </div>
  );
};
