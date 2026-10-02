/**
 * Central Configuration for Ayesha Agency
 * Only official WhatsApp channels are enabled per user specifications.
 */

export interface AgencyConfig {
  brandName: string;
  tagline: string;
  category: string;
  whatsappNumber: string; // digits only for wa.me URL
  whatsappDisplayNumber: string; // readable format (03137442624)
  whatsappDirect: string;
  whatsappChannel: string;
  whatsappGroup: string;
  email: string;
  businessAddress: string;
  footerPoweredBy: string;
  copyrightText: string;
}

export const AGENCY_CONFIG: AgencyConfig = {
  brandName: 'Ayesha Agency',
  tagline: 'Digital Solutions. AI. Social Growth.',
  category: 'Digital Agency',
  
  // WhatsApp Settings (Exclusively Official Channels)
  whatsappNumber: '923137442624',
  whatsappDisplayNumber: '03137442624',
  whatsappDirect: 'https://wa.me/923137442624',
  whatsappChannel: 'https://whatsapp.com/channel/0029Vb6vPRj3QxSAXAzqBE29',
  whatsappGroup: 'https://chat.whatsapp.com/IDMfYeMkXexGKUUC8QWWU1',
  
  email: 'contact@ayeshaagency.com',
  businessAddress: 'Digital Commerce Plaza, Tech Corridor',
  
  // Attributions
  footerPoweredBy: 'Powered by GHUFRAN KING DIGITAL',
  copyrightText: '© 2026 Ayesha Agency. All rights reserved.',
};

/**
 * Universal WhatsApp Link Helper
 * @param message Optional pre-filled text message
 * @returns Fully constructed https://wa.me link with encoded text
 */
export const getWhatsAppLink = (message?: string): string => {
  const cleanNumber = AGENCY_CONFIG.whatsappNumber.replace(/\D/g, '');
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
