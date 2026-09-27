import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeaderDesktopProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  onOpenContact,
}) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-40 bg-[#0f131c]/85 backdrop-blur-xl border-b border-outline-variant/20 shadow-[0_1px_8px_rgba(0,0,0,0.15)]">
      <div className="h-20 max-w-[1140px] mx-auto px-6 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('overview');
            }}
            className="font-headline font-bold text-lg tracking-tight uppercase text-on-surface hover:text-primary transition-colors"
          >
            ADITYA KUMAR
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-emerald-400 font-mono text-xs border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            BCA FINAL YEAR
          </span>
        </div>

        {/* Center Nav Pill */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-container-lowest/70 p-1.5 rounded-full border border-outline-variant/20 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                  isActive
                    ? 'bg-surface-container-high text-primary font-semibold shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            download="Aditya_Kumar_Resume.pdf"
            className="hidden md:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-on-surface bg-surface-container-high hover:bg-surface-bright transition-all border border-outline-variant/30 hover:border-primary/40 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm text-primary">download</span>
            <span>Download Resume</span>
          </a>
          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold text-on-primary bg-primary hover:bg-primary-fixed hover:text-on-primary-fixed transition-all shadow-md shadow-primary/20 hover:scale-105 cursor-pointer"
          >
            Contact Me
          </button>
          <img
            src={PORTFOLIO_DATA.profile.images.avatarHeader}
            alt="Aditya Kumar Profile"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/30"
          />
        </div>
      </div>
    </header>
  );
};
