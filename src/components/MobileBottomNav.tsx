import React from 'react';
import { Home, Layers, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface MobileBottomNavProps {
  darkMode: boolean;
  onOpenQuote: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ darkMode, onOpenQuote }) => {
  return (
    <div
      className={`xl:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg px-3 py-2 transition-all ${
        darkMode
          ? 'bg-neutral-950/90 border-neutral-800 text-neutral-400'
          : 'bg-white/95 border-neutral-200 text-neutral-600'
      }`}
      style={{ maxHeight: '65px' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center gap-1 text-center">
        {/* Home */}
        <a
          href="#home"
          className="flex flex-col items-center justify-center py-1 hover:text-emerald-400 transition-colors"
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Home</span>
        </a>

        {/* Services */}
        <a
          href="#services"
          className="flex flex-col items-center justify-center py-1 hover:text-emerald-400 transition-colors"
        >
          <Layers className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Services</span>
        </a>

        {/* Packages */}
        <a
          href="#packages"
          className="flex flex-col items-center justify-center py-1 hover:text-emerald-400 transition-colors"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Packages</span>
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-1 hover:text-emerald-400 transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-medium">Contact</span>
        </a>

        {/* WhatsApp Direct Action */}
        <a
          href={AGENCY_CONFIG.whatsappDirect}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mb-0.5">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px]">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
