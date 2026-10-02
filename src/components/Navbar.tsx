import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AGENCY_CONFIG } from '../config/agencyConfig';

interface NavbarProps {
  theme: 'dark' | 'white';
  setTheme: (theme: 'dark' | 'white') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWhite = theme === 'white';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isWhite
              ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50'
              : 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-xl shadow-black/30'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl"
          >
            <Logo theme={theme} />
          </a>

          {/* Navigation Links */}
          <nav className={`hidden md:flex items-center gap-7 text-sm font-medium ${
            isWhite ? 'text-slate-700' : 'text-neutral-300'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-red-500 transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Dark/White Switcher + WhatsApp Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / White Theme Toggle Button */}
            <button
              onClick={() => setTheme(isWhite ? 'dark' : 'white')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isWhite
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-800'
              }`}
              title={isWhite ? 'Switch to Dark Mode' : 'Switch to White Mode'}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
              <span>{isWhite ? 'Dark' : 'White'}</span>
            </button>

            <WhatsAppButton
              variant="navbar"
              size="md"
              message="Hello Ayesha Agency, I would like to inquire about your digital and AI services."
              className="rounded-xl px-3.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm"
            >
              <span>Chat on WhatsApp</span>
            </WhatsAppButton>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border ${
                isWhite
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`fixed inset-0 z-50 md:hidden backdrop-blur-xl p-6 flex flex-col justify-between ${
          isWhite ? 'bg-white/98 text-slate-900' : 'bg-neutral-950/95 text-white'
        }`}>
          <div>
            <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
              isWhite ? 'border-slate-200' : 'border-neutral-800/80'
            }`}>
              <Logo theme={theme} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 rounded-xl border ${
                  isWhite ? 'bg-slate-100 border-slate-200 text-slate-700' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
                }`}
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                    isWhite
                      ? 'text-slate-800 hover:bg-slate-100 hover:text-red-600'
                      : 'text-neutral-200 hover:bg-neutral-900 hover:text-red-400'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </nav>
          </div>

          <div className={`pt-6 border-t flex flex-col gap-3 ${
            isWhite ? 'border-slate-200' : 'border-neutral-800/80'
          }`}>
            <button
              onClick={() => setTheme(isWhite ? 'dark' : 'white')}
              className={`w-full py-2.5 px-4 text-xs font-semibold rounded-xl border text-center flex items-center justify-center gap-2 ${
                isWhite
                  ? 'bg-slate-100 border-slate-300 text-slate-800'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-200'
              }`}
            >
              <span>Switch to {isWhite ? 'Dark Theme' : 'White Theme'}</span>
            </button>
            <WhatsAppButton
              variant="primary"
              size="lg"
              message="Hello Ayesha Agency, I would like to inquire about your digital and AI services."
              className="w-full text-center"
            >
              <span>Chat on WhatsApp ({AGENCY_CONFIG.whatsappDisplayNumber})</span>
            </WhatsAppButton>
            <div className={`text-center text-xs ${isWhite ? 'text-slate-500' : 'text-neutral-400'}`}>
              {AGENCY_CONFIG.tagline}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
