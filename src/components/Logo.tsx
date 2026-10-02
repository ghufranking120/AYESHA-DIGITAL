import React from 'react';
import { AGENCY_CONFIG } from '../config/agencyConfig';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  theme?: 'dark' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showTagline = false, theme = 'dark' }) => {
  const isWhite = theme === 'white';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Premium Minimal "A" + AI Neural Node Symbol */}
      <div className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-md overflow-hidden group border ${
        isWhite ? 'bg-neutral-950 border-neutral-900' : 'bg-neutral-900 border-neutral-800'
      }`}>
        {/* Subtle red background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
        
        <svg
          viewBox="0 0 40 40"
          className="w-6 h-6 relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Modern Geometric Letter 'A' */}
          <path
            d="M20 7L30 30H24.5L20 18.5L15.5 30H10L20 7Z"
            fill="white"
          />
          {/* Red Horizontal Crossbar / Modern AI Node Line */}
          <path
            d="M14.5 24H25.5"
            stroke="#EF4444"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Modern Digital AI Neural Spark */}
          <circle cx="20" cy="14" r="2.2" fill="#EF4444" />
          <circle cx="20" cy="14" r="3.5" stroke="#EF4444" strokeWidth="0.8" strokeOpacity="0.6" />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className={`font-extrabold tracking-tight text-base sm:text-lg leading-none ${
          isWhite ? 'text-neutral-900' : 'text-white'
        }`}>
          Ayesha <span className="text-red-600">Agency</span>
        </span>
        {showTagline ? (
          <span className={`text-[10px] tracking-wider uppercase mt-1 font-medium ${
            isWhite ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            {AGENCY_CONFIG.tagline}
          </span>
        ) : (
          <span className={`text-[10px] tracking-widest uppercase mt-0.5 font-medium ${
            isWhite ? 'text-neutral-500' : 'text-neutral-400'
          }`}>
            Digital Agency
          </span>
        )}
      </div>
    </div>
  );
};
