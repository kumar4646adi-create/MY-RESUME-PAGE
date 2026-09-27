import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface TimelineSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ layoutStyle = 'desktop' }) => {
  const isMobileLayout = layoutStyle === 'mobile';

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-4 relative z-10" id="education">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">school</span>
            <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">
              Academic Background
            </h2>
          </div>
          <span className="font-mono text-[11px] text-tertiary uppercase tracking-wider font-semibold">
            EDUCATION
          </span>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 flex flex-col gap-5 before:content-[''] before:absolute before:left-[11px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-secondary/40 before:to-outline-variant/30">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div key={edu.id} className="relative flex flex-col gap-1.5">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-surface-container-lowest border-2 flex items-center justify-center shadow-md ${
                  idx === 0
                    ? 'border-primary'
                    : idx === 1
                    ? 'border-secondary'
                    : 'border-outline'
                }`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-secondary' : 'bg-outline'
                  }`}
                ></div>
              </div>

              {/* Tag row */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`font-mono text-[11px] px-2 py-0.5 rounded font-semibold ${
                    idx === 0
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : idx === 1
                      ? 'bg-secondary/10 text-secondary border border-secondary/20'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {edu.period}
                </span>
                <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wide">
                  {edu.yearBadge}
                </span>
              </div>

              {/* Card */}
              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/25">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-[15px] text-on-surface font-bold">{edu.degree}</h3>
                  {edu.score && (
                    <span className="font-mono text-xs font-extrabold text-tertiary bg-tertiary-container/20 px-2 py-0.5 rounded border border-tertiary/30">
                      {edu.score}
                    </span>
                  )}
                </div>
                <p className="font-body text-xs text-primary/90 mt-0.5 font-medium">{edu.institution}</p>
                <p className="font-body text-xs text-on-surface-variant mt-1.5 leading-relaxed">{edu.details}</p>
                {edu.isCurrent && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-primary text-xs font-mono">
                    <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                    <span>Focus: Web Development & Software Systems</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Standard Timeline Layout
  return (
    <section className="w-full py-16 bg-surface-container-lowest/50 relative border-t border-outline-variant/20" id="education">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">// 03</span>
              <span className="font-mono text-xs text-outline uppercase tracking-wider font-semibold">
                Academics & Credentials
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
              Education & Academic Track Record
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/30 text-xs font-mono text-tertiary">
            <span>High Distinction Foundation</span>
          </div>
        </div>

        {/* 3 Highlight Cards Grid for Quick Clear Read */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div
              key={edu.id}
              className={`p-5 rounded-xl border backdrop-blur-md transition-all hover:-translate-y-1 ${
                idx === 0
                  ? 'bg-gradient-to-b from-primary/10 via-surface-container-high/60 to-surface-container-low border-primary/30 shadow-md'
                  : idx === 1
                  ? 'bg-gradient-to-b from-secondary/10 via-surface-container-high/60 to-surface-container-low border-secondary/30 shadow-md'
                  : 'bg-surface-container-high/50 border-outline-variant/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface">
                  {edu.period}
                </span>
                {edu.score ? (
                  <span className="font-mono text-sm font-extrabold text-tertiary px-2.5 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/40">
                    {edu.score}
                  </span>
                ) : (
                  <span className="font-mono text-[11px] text-primary font-bold px-2 py-0.5 rounded bg-primary/15">
                    FINAL YEAR
                  </span>
                )}
              </div>
              <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{edu.degree}</h3>
              <p className="font-body text-xs text-primary/80 font-medium mb-2">{edu.institution}</p>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>

        {/* Vertical Timeline Rail for Context */}
        <div className="relative pl-6 md:pl-10 space-y-8 before:absolute before:left-2 md:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant/40">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Node Ring */}
              <div className="absolute -left-[30px] md:-left-[34px] top-1.5 w-5 h-5 rounded-full bg-surface flex items-center justify-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full ring-4 transition-transform group-hover:scale-125 ${
                    idx === 0
                      ? 'bg-primary ring-primary-container/20'
                      : idx === 1
                      ? 'bg-secondary ring-secondary-container/20'
                      : 'bg-outline ring-outline-variant/20'
                  }`}
                ></div>
              </div>

              <div className="bg-surface-container-high/60 backdrop-blur-md p-5 rounded-xl border border-outline-variant/25 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary">{edu.period}</span>
                    <span className="text-outline">•</span>
                    <span className="font-mono text-xs text-outline">{edu.yearBadge}</span>
                  </div>
                  <h4 className="font-headline font-bold text-base text-on-surface">{edu.degree}</h4>
                  <p className="font-body text-xs text-on-surface-variant">{edu.institution} — {edu.details}</p>
                </div>
                {edu.score && (
                  <div className="shrink-0 font-mono text-sm font-bold text-tertiary bg-tertiary-container/15 px-3 py-1 rounded-lg border border-tertiary/30 self-start md:self-auto">
                    Score: {edu.score}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
