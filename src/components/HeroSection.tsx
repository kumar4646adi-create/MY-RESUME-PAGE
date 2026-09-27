import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  layoutStyle = 'desktop',
  onNavigate,
  onOpenResume,
  onOpenContact,
}) => {
  const isMobileLayout = layoutStyle === 'mobile';

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-5 relative z-10 pt-2" id="overview">
        {/* Recruiter Live Status Chip */}
        <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-surface-container-high/90 border border-emerald-500/30 backdrop-blur-md shadow-xs transition-transform hover:scale-[1.02]">
          <span className="font-mono text-xs text-emerald-400 font-semibold tracking-tight flex items-center gap-1.5">
            {PORTFOLIO_DATA.profile.statusBadge}
          </span>
        </div>

        {/* Eyebrow & Main Headline */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
              WEB DEVELOPER
            </span>
            <span className="text-outline-variant">•</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold">
              BCA FINAL YEAR
            </span>
            <span className="text-outline-variant">•</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-tertiary font-semibold">
              LEARNING AI
            </span>
          </div>

          {/* Main Role Headline */}
          <h1 className="font-headline text-[30px] sm:text-[34px] text-on-surface font-extrabold tracking-tight leading-[1.18]">
            Full-Stack Web Developer &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
              AI Solutions Enthusiast
            </span>
          </h1>

          <p className="font-mono text-xs text-primary/90 font-medium">
            {PORTFOLIO_DATA.profile.subHeadline}
          </p>

          <p className="font-body text-sm text-on-surface-variant mt-1.5 leading-relaxed">
            Hi, I'm <strong className="text-on-surface font-semibold">{PORTFOLIO_DATA.profile.name}</strong> — a{' '}
            <span className="text-primary font-medium">{PORTFOLIO_DATA.profile.fresherTag}</span> focused on responsive full-stack architecture, ASP.NET backend systems, and AI-powered workflows.
          </p>
        </div>

        {/* Hero Portrait Card with Verified Uploaded Image */}
        <div className="relative w-full rounded-2xl p-1 bg-gradient-to-b from-primary/30 via-outline-variant/20 to-surface-container-low shadow-xl">
          <div className="relative w-full rounded-[14px] bg-surface-container-lowest overflow-hidden flex flex-col">
            <div className="relative w-full aspect-square bg-surface-container max-h-[380px] overflow-hidden group">
              <img
                alt="Aditya Kumar - Full-Stack Web Developer & AI Solutions Enthusiast"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                loading="eager"
                src={PORTFOLIO_DATA.profile.images.portraitSquare}
              />
              {/* Radial Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/25"></div>

              {/* Floating Badges Overlay */}
              <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-surface-container-lowest/90 text-primary border border-primary/40 backdrop-blur-md shadow-md font-semibold">
                  ASP.NET & C#
                </span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-surface-container-lowest/90 text-secondary border border-secondary/40 backdrop-blur-md shadow-md font-semibold">
                  Prompt Eng
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-xl bg-surface-container-lowest/95 border border-outline-variant/40 backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <span className="material-symbols-outlined text-[16px] text-tertiary">verified</span>
                  <span className="font-headline font-bold text-xs text-on-surface">
                    Aditya Kumar • Web & AI
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-surface-container-high/90 text-on-surface-variant border border-outline-variant/30 font-semibold">
                  BCA 2024–Pres
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Action CTAs */}
        <div className="flex flex-col gap-2.5 pt-1">
          <button
            onClick={() => onNavigate('projects')}
            className="w-full h-12 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-headline text-[15px] font-bold flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(128,131,255,0.35)] active:scale-[0.98] hover:brightness-110 transition-all cursor-pointer"
          >
            <span>View Featured Projects</span>
            <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
          </button>

          {/* Functional Download Resume link with href="/resume.pdf" */}
          <a
            href={PORTFOLIO_DATA.profile.resumeUrl}
            download="Aditya_Kumar_Resume.pdf"
            onClick={(e) => {
              // Also allow preview if user prefers
              if (e.metaKey || e.ctrlKey) return;
            }}
            className="w-full h-12 rounded-full bg-surface-container-high/80 hover:bg-surface-bright text-on-surface border border-outline-variant/30 backdrop-blur-md font-headline text-[15px] font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer hover:border-primary/40 shadow-xs"
          >
            <span className="material-symbols-outlined text-primary text-[20px]">download</span>
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Social Links */}
        <div className="flex items-center justify-between pt-2 px-1 border-t border-outline-variant/20">
          <span className="font-mono text-xs text-on-surface-variant">CONNECT DIRECTLY:</span>
          <div className="flex items-center gap-2">
            <a
              aria-label="GitHub"
              className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all border border-outline-variant/20"
              href={PORTFOLIO_DATA.profile.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
              </svg>
            </a>
            <a
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all border border-outline-variant/20"
              href={PORTFOLIO_DATA.profile.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <button
              aria-label="Email"
              onClick={onOpenContact}
              className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:border-primary/50 transition-all border border-outline-variant/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">alternate_email</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Standard Hero Layout
  return (
    <section className="w-full pt-8 pb-16 relative overflow-hidden" id="overview">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-4 z-10">
            {/* Top Status Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/90 backdrop-blur-md shadow-xs border border-emerald-500/30 transition-transform hover:scale-[1.02]">
                <span className="font-mono text-xs text-emerald-400 font-semibold tracking-tight">
                  {PORTFOLIO_DATA.profile.statusBadge}
                </span>
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-low font-mono text-xs text-on-surface-variant border border-outline-variant/25">
                {PORTFOLIO_DATA.profile.fresherTag}
              </div>
            </div>

            {/* Main Role Headline */}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-on-surface tracking-tight leading-[1.14]">
              Full-Stack Web Developer & <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                AI Solutions Enthusiast
              </span>
            </h1>

            {/* Creative Tagline & Subheading */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm text-primary font-semibold tracking-wide uppercase">
                Building for the Web • Learning What's Next
              </p>
              <p className="font-body text-base lg:text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Hi, I'm <strong className="text-on-surface font-semibold">{PORTFOLIO_DATA.profile.name}</strong> — a BCA Final Year student and aspiring web developer exploring responsive full-stack architecture, ASP.NET, and AI-powered creative workflows.
              </p>
            </div>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-headline font-bold text-sm text-on-primary bg-gradient-to-r from-primary-container to-secondary hover:brightness-110 shadow-lg shadow-primary-container/20 transition-all hover:scale-105 cursor-pointer"
              >
                <span>View Featured Projects</span>
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </button>

              {/* Functional placeholder link with href="/resume.pdf" */}
              <a
                href={PORTFOLIO_DATA.profile.resumeUrl}
                download="Aditya_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-headline font-semibold text-sm text-on-surface bg-surface-container-high/70 hover:bg-surface-bright backdrop-blur-md border border-outline-variant/30 shadow-xs transition-all hover:scale-105 hover:border-primary/40 cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-lg">download</span>
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-primary hover:text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">visibility</span>
                <span>Preview CV</span>
              </button>
            </div>

            {/* Micro Utility Social Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="font-mono text-xs text-outline uppercase tracking-wider">Connect:</span>
              <a
                className="w-9 h-9 rounded-lg bg-surface-container-high/80 hover:bg-surface-bright hover:text-primary flex items-center justify-center text-on-surface-variant transition-colors border border-outline-variant/20 hover:border-primary/40"
                href={PORTFOLIO_DATA.profile.github}
                rel="noopener noreferrer"
                target="_blank"
                title="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </a>
              <a
                className="w-9 h-9 rounded-lg bg-surface-container-high/80 hover:bg-surface-bright hover:text-primary flex items-center justify-center text-on-surface-variant transition-colors border border-outline-variant/20 hover:border-primary/40"
                href={PORTFOLIO_DATA.profile.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <button
                onClick={onOpenContact}
                className="w-9 h-9 rounded-lg bg-surface-container-high/80 hover:bg-surface-bright hover:text-primary flex items-center justify-center text-on-surface-variant transition-colors border border-outline-variant/20 hover:border-primary/40 cursor-pointer"
                title="Email Aditya"
              >
                <span className="material-symbols-outlined text-base">mail</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Photo Display with Circular Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Outer Ambient Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-container/20 to-tertiary-container/20 rounded-full blur-2xl -z-10"></div>

            {/* Circular Frame Container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full aspect-square p-2 bg-gradient-to-b from-primary/30 via-surface-container-high to-surface-container-lowest shadow-2xl shadow-primary-container/15 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-highest">
                <img
                  alt="Aditya Kumar"
                  className="w-full h-full object-cover object-top rounded-full"
                  src={PORTFOLIO_DATA.profile.images.portraitCircular}
                />
              </div>

              {/* Surrounding Floating Micro-Badge Top-Right */}
              <div className="absolute -top-2 right-4 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-outline-variant/30 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-headline font-bold text-xs text-on-surface tracking-wide">
                  BCA Final Year
                </span>
              </div>

              {/* Surrounding Floating Micro-Badge Bottom-Left */}
              <div className="absolute -bottom-3 left-4 bg-surface-container-high/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-outline-variant/30 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary text-sm">terminal</span>
                <span className="font-headline font-bold text-xs text-on-surface tracking-wide">
                  Full-Stack & AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
