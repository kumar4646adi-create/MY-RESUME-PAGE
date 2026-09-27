import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#0a0e16] border-t border-outline-variant/20 py-12">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start gap-1.5 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-headline font-bold text-lg tracking-tight uppercase text-on-surface">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Available
              </span>
            </div>
            <p className="font-body text-xs text-on-surface-variant max-w-sm">
              {PORTFOLIO_DATA.profile.roleHeadline} — building responsive, accessible, and high-performance digital products.
            </p>
          </div>

          {/* Direct Social & Contact Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base text-primary">mail</span>
              <span>{PORTFOLIO_DATA.profile.email}</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-tertiary transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Navigation row and copyright */}
        <div className="pt-6 border-t border-outline-variant/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
          <div className="flex items-center gap-5">
            <button
              onClick={() => onNavigate('overview')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('education')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div>
            © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
