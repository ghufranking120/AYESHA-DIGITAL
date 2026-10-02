import React, { useState, useEffect } from 'react';
import { ContactMessage } from '../types';
import {
  X,
  ShieldAlert,
  ShieldCheck,
  Database,
  KeyRound,
  Layers,
  Sparkles,
  Inbox,
  Settings,
  ExternalLink,
  Code2,
  Trash2,
} from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'auth' | 'architecture'>('inbox');
  const [inquiries, setInquiries] = useState<ContactMessage[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = JSON.parse(localStorage.getItem('ayesha_inquiries') || '[]');
        setInquiries(stored);
      } catch {
        setInquiries([]);
      }
    }
  }, [isOpen]);

  const clearInquiries = () => {
    localStorage.removeItem('ayesha_inquiries');
    setInquiries([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className={`max-w-3xl w-full rounded-3xl border p-6 sm:p-8 relative my-8 shadow-2xl ${
          darkMode ? 'bg-neutral-900 border-neutral-800 text-white' : 'bg-white border-neutral-200 text-neutral-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Agency Architecture & Management</span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Portal Architecture & Inquiries
          </h3>
          <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Manage client inquiries, inspect backend connection status, and review the decoupled administrative structure.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-neutral-800/60 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
              activeTab === 'inbox'
                ? 'bg-emerald-500 text-neutral-950 font-bold'
                : darkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Inquiries Inbox ({inquiries.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('auth')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
              activeTab === 'auth'
                ? 'bg-emerald-500 text-neutral-950 font-bold'
                : darkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Authentication Gateway</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all ${
              activeTab === 'architecture'
                ? 'bg-emerald-500 text-neutral-950 font-bold'
                : darkMode
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-black'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Admin Data Schema</span>
          </button>
        </div>

        {/* Tab 1: Inquiries Inbox */}
        {activeTab === 'inbox' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Recent Session Inquiries
              </span>
              {inquiries.length > 0 && (
                <button
                  onClick={clearInquiries}
                  className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear Local Inquiries</span>
                </button>
              )}
            </div>

            {inquiries.length === 0 ? (
              <div className={`p-8 rounded-2xl border text-center ${darkMode ? 'bg-neutral-950/50 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
                <Inbox className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
                <p className={`text-sm font-semibold mb-1 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                  No inquiries received yet in this browser session
                </p>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Submit the Contact form or Scope Builder on the website to see incoming customer inquiries captured here.
                </p>
              </div>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className={`p-4 rounded-xl border text-xs ${
                      darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-emerald-400">{inq.name}</span>
                      <span className="text-[10px] text-neutral-500">
                        {new Date(inq.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-neutral-400 mb-2">
                      <div>
                        Email: <strong className={darkMode ? 'text-neutral-200' : 'text-neutral-800'}>{inq.email}</strong>
                      </div>
                      <div>
                        WhatsApp: <strong className={darkMode ? 'text-neutral-200' : 'text-neutral-800'}>{inq.whatsappNumber}</strong>
                      </div>
                    </div>
                    <div className="text-neutral-400 mb-2">
                      Service: <span className="text-cyan-400 font-medium">{inq.service}</span>
                    </div>
                    <div className={`p-2.5 rounded-lg border ${darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700'}`}>
                      "{inq.message}"
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Authentication Gateway */}
        {activeTab === 'auth' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${darkMode ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
              <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Authentication Backend Not Bound</strong>
                In compliance with strict security guidelines, no simulated or fake logins are presented. To enable production Google Single Sign-On (SSO) or administrative email logins, connect a production Firebase Auth or OAuth 2.0 backend.
              </div>
            </div>

            {/* Google Login Interface (Transparent Placeholder) */}
            <div className={`p-6 rounded-2xl border text-center ${darkMode ? 'bg-neutral-950/60 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
              <h4 className={`text-base font-bold mb-2 ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Sign In to Ayesha Admin Suite
              </h4>
              <p className="text-xs text-neutral-400 max-w-md mx-auto mb-6">
                Administrative access requires authenticated credentials with server-side authorization checks.
              </p>

              {/* Disabled Google SSO Button with clear explanation */}
              <button
                type="button"
                disabled
                className="w-full max-w-sm mx-auto py-3 px-4 rounded-xl border border-neutral-700 bg-neutral-800/50 text-neutral-400 flex items-center justify-center gap-3 text-xs font-semibold cursor-not-allowed opacity-80"
                title="Connect Firebase Auth to activate Google Sign-In"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google (Backend Setup Required)</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: Admin Architecture & Schema */}
        {activeTab === 'architecture' && (
          <div className="space-y-4">
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${darkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
              <div className="font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                <span>Admin State Architecture Blueprint</span>
              </div>
              <p className="text-neutral-400 mb-3">
                All business content is decoupled in modular data stores ready to be bound to a headless CMS or database:
              </p>
              <div className="space-y-2 font-mono text-[11px]">
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  📁 <strong className="text-emerald-300">src/data/agencyData.ts</strong> → Manages Services, Packages, Portfolio items, Testimonials, FAQ items, and Contact numbers.
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  🔒 <strong className="text-emerald-300">Security Rule</strong> → No admin passwords, tokens, or private secrets are exposed on the client bundle.
                </div>
                <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  💬 <strong className="text-emerald-300">WhatsApp Integration</strong> → Instant fallback enables 100% lead capture without waiting for database provisioning.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs">
          <span className="text-neutral-400">
            Ayesha Digital Agency · Production Architecture
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-neutral-950 transition-colors"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
