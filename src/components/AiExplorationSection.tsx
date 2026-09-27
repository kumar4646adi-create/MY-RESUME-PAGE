import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface AiExplorationSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
  onOpenGraphStudio: () => void;
}

export const AiExplorationSection: React.FC<AiExplorationSectionProps> = ({
  layoutStyle = 'desktop',
  onOpenGraphStudio,
}) => {
  const isMobileLayout = layoutStyle === 'mobile';

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-4 relative z-10" id="ai">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]">smart_toy</span>
            <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">
              AI Exploration & Projects
            </h2>
          </div>
          <p className="font-body text-xs text-on-surface-variant mt-1">
            Applied workflows & generative synthesis experiments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {PORTFOLIO_DATA.aiExplorations.map((item) => {
            const isGraph = item.id === 'graph-prompt';
            return (
              <div
                key={item.id}
                onClick={isGraph ? onOpenGraphStudio : undefined}
                className={`p-4 rounded-xl border flex items-start gap-3 transition-all ${
                  isGraph
                    ? 'bg-gradient-to-r from-surface-container-high/70 to-surface-container-low/80 border-secondary/30 hover:border-secondary cursor-pointer shadow-md'
                    : 'bg-surface-container-low/80 border-outline-variant/20 hover:bg-surface-container-high/60'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isGraph
                      ? 'bg-secondary/20 text-secondary'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{item.iconName}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline font-semibold text-[15px] text-on-surface">
                      {item.title}
                    </span>
                    {isGraph && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-secondary-container/40 text-secondary font-bold">
                        Interactive
                      </span>
                    )}
                  </div>
                  <span className="font-body text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                    {item.tagline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  // Desktop Standard AI Exploration Layout
  return (
    <section className="w-full py-20 bg-surface-container-lowest/60 relative border-t border-outline-variant/20" id="ai">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-secondary uppercase tracking-widest">// 03</span>
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-secondary font-mono text-xs uppercase tracking-wider font-semibold">
                Independent Exploration & Projects
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
              AI & Creative Technology
            </h2>
          </div>
          <p className="font-body text-sm text-on-surface-variant max-w-md leading-relaxed">
            Self-directed research into generative frameworks, multimodal synthetic media, and analytical prompt architectures.
          </p>
        </div>

        {/* 5 Bento Exploration Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.aiExplorations.map((item) => {
            const isWide = item.featured;
            return (
              <div
                key={item.id}
                onClick={isWide ? onOpenGraphStudio : undefined}
                className={`bg-surface-container-high/40 hover:bg-surface-container-high/80 p-6 rounded-xl border border-outline-variant/25 shadow-xs transition-all duration-300 hover:-translate-y-1 ${
                  isWide
                    ? 'md:col-span-2 lg:col-span-2 border-secondary/40 bg-gradient-to-br from-surface-container-high/50 to-surface-container-low/70 cursor-pointer'
                    : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`material-symbols-outlined text-3xl ${isWide ? 'text-secondary' : 'text-primary'}`}>
                    {item.iconName}
                  </span>
                  {isWide ? (
                    <span className="px-2.5 py-0.5 rounded bg-secondary-container/30 text-secondary font-mono text-xs font-semibold flex items-center gap-1">
                      <span>{item.category}</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-outline">{item.category}</span>
                  )}
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{item.title}</h3>
                <p className="font-body text-xs lg:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
                {isWide && (
                  <div className="mt-4 pt-3 border-t border-secondary/20 flex items-center justify-between text-xs font-mono text-secondary">
                    <span>Click to open interactive prompt synthesizer</span>
                    <span className="underline">Launch Studio ↗</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
