import React, { useState, useEffect } from 'react';
import { Moon, Sun, MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenPortal: () => void;
  onOpenQuoteBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenPortal,
  onOpenQuoteBuilder,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Why Ayesha', href: '#why-ayesha' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20'
              : 'bg-white/90 backdrop-blur-md border-b border-neutral-200/90 shadow-sm'
            : darkMode
            ? 'bg-transparent border-b border-transparent'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold group-hover:border-emerald-400 group-hover:scale-105 transition-all">
              A
            </div>
            <div className="flex flex-col">
              <span className={`text-base font-bold tracking-tight uppercase ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                {AGENCY_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-500 font-medium">
                Digital Growth Partner
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors py-1 ${
                  darkMode
                    ? 'text-neutral-300 hover:text-emerald-400'
                    : 'text-neutral-600 hover:text-emerald-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-800" />}
            </button>

            {/* Admin / Portal Trigger */}
            <button
              onClick={onOpenPortal}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                darkMode
                  ? 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40'
                  : 'bg-neutral-50 border-neutral-300 text-neutral-700 hover:text-emerald-700'
              }`}
              title="Admin Architecture & Inquiries"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Portal</span>
            </button>

            {/* Custom Quote Button */}
            <button
              onClick={onOpenQuoteBuilder}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors whitespace-nowrap"
            >
              <span>Build Scope</span>
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href={AGENCY_CONFIG.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-sm transition-all whitespace-nowrap hover:shadow-emerald-500/20 hover:shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xs:inline">Chat on WhatsApp</span>
              <span className="xs:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg border transition-all ${
                darkMode
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-300'
                  : 'bg-neutral-100 border-neutral-300 text-neutral-700'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 xl:hidden transition-all ${
            darkMode ? 'bg-neutral-950/95 text-white' : 'bg-white/95 text-neutral-900'
          } backdrop-blur-xl p-6 flex flex-col justify-between`}
        >
          <div>
            <div className="flex items-center justify-between border-b pb-4 mb-6 border-neutral-800/40">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  A
                </div>
                <span className="font-bold tracking-tight text-sm uppercase">
                  {AGENCY_CONFIG.brandName}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg border border-neutral-800/40 text-neutral-400 hover:text-white"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                    darkMode
                      ? 'text-neutral-200 hover:bg-neutral-900 hover:text-emerald-400'
                      : 'text-neutral-800 hover:bg-neutral-100 hover:text-emerald-600'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-neutral-800/40 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteBuilder();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-center"
            >
              Build Custom Package Scope
            </button>
            <a
              href={AGENCY_CONFIG.whatsappDirect}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-sm font-semibold rounded-lg bg-emerald-600 text-white text-center flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+92 313 7442624)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal();
              }}
              className={`w-full py-2 text-xs text-center ${
                darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
              }`}
            >
              Agency Architecture & Admin Portal
            </button>
          </div>
        </div>
      )}
    </>
  );
};
