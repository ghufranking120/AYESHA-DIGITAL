import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { AGENCY_CONFIG } from '../config/agencyConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="max-w-2xl w-full rounded-3xl border border-neutral-800 bg-neutral-900 text-white p-6 sm:p-8 relative my-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-neutral-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-red-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Ayesha Agency Governance</span>
        </div>

        <h3 className="text-2xl font-bold mb-4">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed max-h-96 overflow-y-auto pr-2">
          {type === 'privacy' ? (
            <>
              <p>
                At <strong>Ayesha Agency</strong>, we respect your privacy. This policy outlines how we handle communications, project briefs, and client data.
              </p>
              <h4 className="font-bold text-white text-sm">1. Information Collection</h4>
              <p>
                We only collect information voluntarily provided via direct WhatsApp conversations, contact forms, or email discussions. This typically includes your name, business details, phone number, and project briefs.
              </p>
              <h4 className="font-bold text-white text-sm">2. Use of Information</h4>
              <p>
                Information is strictly used to evaluate project feasibility, provide tailored recommendations, produce creative deliverables, and coordinate service rollouts.
              </p>
              <h4 className="font-bold text-white text-sm">3. No Third-Party Reselling</h4>
              <p>
                We do not sell, rent, or trade client phone numbers, email addresses, or business data to third-party brokers.
              </p>
              <h4 className="font-bold text-white text-sm">4. Direct Contact</h4>
              <p>
                For privacy inquiries or data removal, please contact us directly on WhatsApp at {AGENCY_CONFIG.whatsappDisplayNumber} or via email at {AGENCY_CONFIG.email}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Ayesha Agency</strong>. By engaging with our digital services or consulting with our team, you agree to these transparent terms.
              </p>
              <h4 className="font-bold text-white text-sm">1. Service Scope</h4>
              <p>
                Each project scope, deliverable schedule, and automation configuration is mutually confirmed via direct communication prior to execution.
              </p>
              <h4 className="font-bold text-white text-sm">2. Commercial Clarity</h4>
              <p>
                We provide custom digital strategies tailored to your exact business size. Deliverable iterations and milestones are documented openly without hidden charges.
              </p>
              <h4 className="font-bold text-white text-sm">3. Content & Intellectual Property</h4>
              <p>
                Clients retain full ownership of their brand materials, media, and credentials upon project signoff and completion of terms.
              </p>
              <h4 className="font-bold text-white text-sm">4. Communication Channels</h4>
              <p>
                Our official channel of rapid coordination is WhatsApp ({AGENCY_CONFIG.whatsappDisplayNumber}) to maintain responsiveness.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
