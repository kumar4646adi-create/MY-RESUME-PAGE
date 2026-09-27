import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ layoutStyle = 'desktop' }) => {
  const isMobileLayout = layoutStyle === 'mobile';

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-4 relative z-10" id="about">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[22px]">fingerprint</span>
          <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">About Me</h2>
        </div>
        <div className="rounded-2xl p-5 bg-surface-container-low/80 border border-outline-variant/25 backdrop-blur-md flex flex-col gap-4 shadow-md">
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            I'm a <strong className="text-on-surface">{PORTFOLIO_DATA.profile.fresherTag}</strong> focused on building responsive, user-friendly web experiences. Alongside web development, I'm actively <span className="text-primary font-medium">Learning AI</span> — exploring generative image and video creation, prompt engineering, and structured AI research workflows.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body text-xs border border-outline-variant/30">
              <span className="material-symbols-outlined text-tertiary text-[16px]">school</span>
              <span>{PORTFOLIO_DATA.profile.college}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body text-xs border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-[16px]">code_blocks</span>
              <span>Clean Code Advocate</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-body text-xs border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[16px]">bolt</span>
              <span>Fast Learner</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 bg-surface-container-lowest/50 relative border-y border-outline-variant/20" id="about">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Editorial Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// 01</span>
          <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Narrative Paragraph */}
          <div className="lg:col-span-8 space-y-4">
            <p className="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
              I'm a <strong className="text-on-surface font-semibold">{PORTFOLIO_DATA.profile.fresherTag}</strong> focused on building responsive, user-friendly web experiences. Alongside web development, I am actively <strong className="text-primary font-semibold">Learning AI</strong> — exploring generative image and video creation, prompt engineering, and structured AI research workflows to create software that stays ahead of technical curves.
            </p>
            <p className="font-body text-sm text-outline leading-relaxed">
              {PORTFOLIO_DATA.profile.aboutSubtext}
            </p>
          </div>

          {/* Academic & Professional Credential Badges */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="bg-surface-container-high/60 hover:bg-surface-container-high/80 transition-all backdrop-blur-md p-4 rounded-xl border border-primary/25 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
                <div>
                  <div className="font-headline font-bold text-base text-on-surface">BCA Final Year</div>
                  <div className="font-body text-xs text-primary font-mono">2024 – Present (Enrolled)</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high/60 hover:bg-surface-container-high/80 transition-all backdrop-blur-md p-4 rounded-xl border border-tertiary/25 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary text-2xl">grade</span>
                <div>
                  <div className="font-headline font-bold text-base text-on-surface">Class 12 (+2): 85.60%</div>
                  <div className="font-body text-xs text-on-surface-variant font-mono">2024 • High Distinction</div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high/60 hover:bg-surface-container-high/80 transition-all backdrop-blur-md p-4 rounded-xl border border-secondary/25 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
                <div>
                  <div className="font-headline font-bold text-base text-on-surface">Class 10 (Matric): 82.14%</div>
                  <div className="font-body text-xs text-on-surface-variant font-mono">2022 • Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
