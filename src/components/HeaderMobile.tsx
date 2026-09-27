import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeaderMobileProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  onOpenResume,
  onOpenContact,
}) => {
  return (
    <header className="sticky top-0 w-full z-40 bg-[#0a0e16]/85 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
      <div className="h-16 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline-variant/30">
            <span className="font-headline font-bold text-primary text-sm tracking-tight">AK</span>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <span className="font-headline font-bold text-xs text-on-surface tracking-tight uppercase">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
            </div>
            <span className="font-mono text-on-surface-variant text-[10px] tracking-wider uppercase">
              AVAILABLE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenResume}
            aria-label="Resume"
            className="h-9 px-3 rounded-full bg-surface-container-high hover:bg-surface-bright flex items-center gap-1 text-on-surface transition-colors border border-outline-variant/30 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">download</span>
            <span className="font-mono text-xs text-on-surface">CV</span>
          </button>
          <button
            onClick={onOpenContact}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-fixed transition-colors cursor-pointer"
            aria-label="Profile Contact"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
