import React from 'react';
import { Logo } from './Logo';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { MessageCircle, Instagram, ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1 & 2: Brand Lockup & Tagline */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <Logo showTagline={false} />
            </a>
            <p className="text-xs font-semibold text-red-500 mb-3">
              "{AGENCY_CONFIG.tagline}"
            </p>
            <p className="text-xs leading-relaxed max-w-sm mb-6 text-neutral-400">
              Modern digital agency providing AI WhatsApp chatbots, automation agents, video reels, and social media marketing systems.
            </p>

            {/* Direct Line Badge */}
            <div className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/70 text-xs max-w-sm">
              <div className="font-semibold text-red-400 mb-0.5">Direct WhatsApp Channel</div>
              <div className="text-white font-mono">{AGENCY_CONFIG.whatsappDisplayNumber}</div>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-red-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-400 transition-colors">About Agency</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">All 14 Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-red-400 transition-colors">Why Us</a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-red-400 transition-colors">How We Work</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Key AI & Digital Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">AI WhatsApp Chatbot</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">AI Agents & Workflows</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">WhatsApp Automation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">AI Video Creation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">Social Media Management</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">Website Development</a>
              </li>
            </ul>
          </div>

          {/* Column 5: WhatsApp Channels & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Official WhatsApp
            </h4>
            <div className="space-y-3 text-xs mb-6">
              {/* WhatsApp Direct */}
              <a
                href={AGENCY_CONFIG.whatsappDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Direct ({AGENCY_CONFIG.whatsappDisplayNumber})</span>
              </a>

              {/* WhatsApp Channel */}
              <a
                href={AGENCY_CONFIG.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors group"
              >
                <svg className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/>
                  <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/>
                  <circle cx="12" cy="12" r="2"/>
                  <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/>
                  <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                </svg>
                <span>WhatsApp Channel</span>
              </a>

              {/* WhatsApp Group */}
              <a
                href={AGENCY_CONFIG.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-400 transition-colors group"
              >
                <svg className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span>WhatsApp Group</span>
              </a>
            </div>

            {/* Legal Links */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-3 text-xs">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-neutral-700">·</span>
              <button
                onClick={() => onOpenLegal('terms')}
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Terms
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{AGENCY_CONFIG.copyrightText}</span>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <span className="font-semibold text-red-500 tracking-wide">
              {AGENCY_CONFIG.footerPoweredBy}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-red-500 transition-all cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
