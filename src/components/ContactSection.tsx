import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  layoutStyle = 'desktop',
  onOpenContactModal,
}) => {
  const isMobileLayout = layoutStyle === 'mobile';
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-4 pt-4 relative z-10" id="contact">
        <div className="rounded-3xl p-5 bg-gradient-to-b from-surface-container-high/90 via-surface-container-low to-surface-container-lowest border border-primary/20 backdrop-blur-xl flex flex-col gap-4 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col gap-1 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-mono w-max mb-1 border border-primary/20 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              GET IN TOUCH
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">
              Let's Build Something.
            </h2>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed">
              Open to junior developer roles, internships, and collaborative web & AI projects. I respond promptly!
            </p>
          </div>

          {/* Action Contact Buttons */}
          <div className="flex flex-col gap-2.5 relative z-10">
            {/* Email Action */}
            <div className="p-3.5 rounded-2xl bg-surface-container hover:bg-surface-bright border border-outline-variant/30 flex items-center justify-between transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] text-on-surface-variant">DIRECT EMAIL</span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    className="font-mono text-xs text-on-surface font-semibold truncate hover:text-primary transition-colors"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-surface-container-high text-on-surface font-mono text-[10px] border border-outline-variant/30 hover:border-primary/40 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? 'Copied!' : 'Copy'}
                </button>
                <button
                  onClick={onOpenContactModal}
                  className="px-3 py-1 rounded-lg bg-primary text-on-primary font-headline text-[11px] font-bold hover:bg-primary-fixed transition-colors cursor-pointer"
                >
                  Email Me
                </button>
              </div>
            </div>

            {/* LinkedIn Action */}
            <a
              className="p-3.5 rounded-2xl bg-surface-container hover:bg-surface-bright border border-outline-variant/30 hover:border-secondary/40 flex items-center justify-between transition-all"
              href={PORTFOLIO_DATA.profile.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] text-on-surface-variant">LINKEDIN PROFILE</span>
                  <span className="font-mono text-xs text-on-surface font-semibold truncate">
                    {PORTFOLIO_DATA.profile.linkedinHandle}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-secondary text-on-secondary font-headline text-[11px] shrink-0 font-bold ml-2">
                Connect
              </span>
            </a>

            {/* GitHub Action */}
            <a
              className="p-3.5 rounded-2xl bg-surface-container hover:bg-surface-bright border border-outline-variant/30 hover:border-tertiary/40 flex items-center justify-between transition-all"
              href={PORTFOLIO_DATA.profile.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-tertiary/15 flex items-center justify-center text-tertiary shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[10px] text-on-surface-variant">CODE REPOSITORIES</span>
                  <span className="font-mono text-xs text-on-surface font-semibold truncate">
                    github.com/kumar4646adi-create
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-tertiary text-on-tertiary font-headline text-[11px] shrink-0 font-bold ml-2">
                GitHub
              </span>
            </a>
          </div>

          {/* Footer Micro Copy */}
          <div className="pt-3 border-t border-outline-variant/20 flex flex-col items-center justify-center text-center gap-1 relative z-10">
            <p className="font-mono text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold">
              DESIGNED & BUILT FOR ADITYA KUMAR
            </p>
            <p className="font-mono text-[11px] text-primary/90 font-medium">
              Full-Stack Web Developer & AI Solutions Enthusiast
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Standard Contact Layout
  return (
    <section className="w-full py-16 relative" id="contact">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Contact Hero Panel */}
        <div className="bg-gradient-to-b from-surface-container-high/80 to-surface-container-lowest/90 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-outline-variant/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-2xl flex flex-col gap-2 mb-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">// 05</span>
              <span className="font-mono text-xs text-outline uppercase tracking-wider font-semibold">Get In Touch</span>
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
              Let's Build Something.
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              I am currently open for junior web developer opportunities, web projects, and software internships. Feel free to reach out via direct email or connect on LinkedIn and GitHub.
            </p>
          </div>

          {/* Interactive Contact Method Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact 1: Email */}
            <div className="bg-surface-container/60 hover:bg-surface-container-highest/80 p-6 rounded-xl border border-outline-variant/25 flex flex-col justify-between gap-4 transition-all hover:border-primary/40">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">alternate_email</span>
                </div>
                <div className="font-headline font-bold text-lg text-on-surface">Email</div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors truncate"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-outline-variant/15">
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-primary hover:text-primary-fixed transition-colors cursor-pointer"
                >
                  <span>Email Me</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[11px] text-outline hover:text-on-surface cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Contact 2: GitHub */}
            <div className="bg-surface-container/60 hover:bg-surface-container-highest/80 p-6 rounded-xl border border-outline-variant/25 flex flex-col justify-between gap-4 transition-all hover:border-tertiary/40">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-surface-bright/40 text-on-surface flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                </div>
                <div className="font-headline font-bold text-lg text-on-surface">GitHub</div>
                <div className="font-mono text-xs text-on-surface-variant truncate">
                  {PORTFOLIO_DATA.profile.githubHandle}
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-tertiary hover:text-tertiary-fixed transition-colors pt-2 border-t border-outline-variant/15"
                href={PORTFOLIO_DATA.profile.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View GitHub Profile</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>

            {/* Contact 3: LinkedIn */}
            <div className="bg-surface-container/60 hover:bg-surface-container-highest/80 p-6 rounded-xl border border-outline-variant/25 flex flex-col justify-between gap-4 transition-all hover:border-secondary/40">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-lg bg-secondary-container/30 text-secondary flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
                <div className="font-headline font-bold text-lg text-on-surface">LinkedIn</div>
                <div className="font-mono text-xs text-on-surface-variant truncate">
                  {PORTFOLIO_DATA.profile.name}
                </div>
              </div>
              <a
                className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-secondary hover:text-secondary-fixed transition-colors pt-2 border-t border-outline-variant/15"
                href={PORTFOLIO_DATA.profile.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Connect on LinkedIn</span>
                <span className="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
