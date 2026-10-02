/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'white'>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('ayesha_theme_mode');
      if (stored === 'white' || stored === 'dark') return stored;
    }
    return 'dark'; // Dark theme default
  });

  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('AI WhatsApp Chatbot');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    localStorage.setItem('ayesha_theme_mode', theme);
    if (theme === 'white') {
      document.documentElement.classList.add('theme-white');
      document.documentElement.classList.remove('theme-dark');
    } else {
      document.documentElement.classList.add('theme-dark');
      document.documentElement.classList.remove('theme-white');
    }
  }, [theme]);

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isWhite = theme === 'white';

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isWhite
          ? 'bg-slate-50 text-slate-900 selection:bg-red-500/20 selection:text-red-700'
          : 'bg-neutral-950 text-neutral-100 selection:bg-red-500/30 selection:text-red-200'
      }`}
    >
      {/* Top Navbar with Dark / White Switcher */}
      <Navbar theme={theme} setTheme={setTheme} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* 14 Services Section */}
        <Services onSelectServiceForContact={handleSelectService} />

        {/* Why Choose Us */}
        <WhyUs />

        {/* 5-Step Workflow */}
        <Workflow />

        {/* Contact Section */}
        <Contact initialSelectedService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModalType(type)} />

      {/* Reusable Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
