import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../config/agencyConfig';

export interface WhatsAppButtonProps {
  message?: string;
  variant?: 'primary' | 'outline' | 'subtle' | 'navbar' | 'floating' | 'service';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  showIcon = true,
}) => {
  const url = getWhatsAppLink(message);

  // Variant styles with red accent & dark/white theme
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles =
        'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-lg shadow-red-600/20 font-semibold';
      break;
    case 'outline':
      variantStyles =
        'border border-red-500/40 hover:border-red-500 bg-red-500/5 hover:bg-red-500/10 text-red-400 font-semibold';
      break;
    case 'subtle':
      variantStyles =
        'bg-neutral-900 border border-neutral-800 hover:border-red-500/50 hover:bg-neutral-800 text-neutral-200 font-medium';
      break;
    case 'navbar':
      variantStyles =
        'bg-red-600 hover:bg-red-500 text-white font-semibold shadow-sm hover:shadow-red-600/30';
      break;
    case 'service':
      variantStyles =
        'bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 hover:border-red-600 font-semibold transition-all';
      break;
    case 'floating':
      variantStyles =
        'bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-2xl shadow-red-600/40 rounded-full p-3.5 sm:p-4 hover:scale-105 active:scale-95 transition-all';
      break;
  }

  // Size styles
  let sizeStyles = '';
  if (variant !== 'floating') {
    switch (size) {
      case 'sm':
        sizeStyles = 'px-3 py-1.5 text-xs rounded-lg gap-1.5';
        break;
      case 'md':
        sizeStyles = 'px-4 py-2.5 text-xs sm:text-sm rounded-xl gap-2';
        break;
      case 'lg':
        sizeStyles = 'px-6 py-3.5 text-sm sm:text-base rounded-xl gap-2.5';
        break;
    }
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center transition-all cursor-pointer whitespace-nowrap ${variantStyles} ${sizeStyles} ${className}`}
    >
      {showIcon && (
        <MessageCircle
          className={
            variant === 'floating'
              ? 'w-6 h-6'
              : size === 'sm'
              ? 'w-3.5 h-3.5'
              : size === 'lg'
              ? 'w-5 h-5'
              : 'w-4 h-4'
          }
        />
      )}
      {children}
    </a>
  );
};
