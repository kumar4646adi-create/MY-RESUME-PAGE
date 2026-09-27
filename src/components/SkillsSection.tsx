import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';

interface SkillsSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ layoutStyle = 'desktop' }) => {
  const isMobileLayout = layoutStyle === 'mobile';
  const [activeTab, setActiveTab] = useState<'all' | 'web-backend' | 'ai-innovation'>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const webGroup = PORTFOLIO_DATA.skillGroups.find((g) => g.id === 'web-backend')!;
  const aiGroup = PORTFOLIO_DATA.skillGroups.find((g) => g.id === 'ai-innovation')!;

  const displayGroups =
    activeTab === 'all'
      ? PORTFOLIO_DATA.skillGroups
      : PORTFOLIO_DATA.skillGroups.filter((g) => g.id === activeTab);

  if (isMobileLayout) {
    return (
      <section className="flex flex-col gap-4 relative z-10" id="skills">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">terminal</span>
            <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">Skills & Tech Stack</h2>
          </div>
          <span className="font-mono text-[11px] text-primary uppercase tracking-wider font-semibold">
            2 CORE GROUPS
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-surface-container-high/80 rounded-xl border border-outline-variant/30 text-xs font-mono">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setActiveTab('web-backend')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === 'web-backend'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Web & Backend
          </button>
          <button
            onClick={() => setActiveTab('ai-innovation')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all cursor-pointer ${
              activeTab === 'ai-innovation'
                ? 'bg-secondary text-on-secondary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            AI & Innovation
          </button>
        </div>

        {/* Render Category Groups */}
        <div className="flex flex-col gap-6">
          {displayGroups.map((group) => {
            const isAi = group.id === 'ai-innovation';
            return (
              <div key={group.id} className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isAi ? 'bg-secondary' : 'bg-primary'
                      }`}
                    ></span>
                    <h3 className="font-headline font-bold text-base text-on-surface">
                      {group.title}
                    </h3>
                  </div>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-semibold ${
                      isAi
                        ? 'bg-secondary-container/30 text-secondary'
                        : 'bg-primary-container/20 text-primary'
                    }`}
                  >
                    {group.badge}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.id}
                      onClick={() => setActiveSkill(skill)}
                      className="p-3 rounded-xl bg-surface-container-low/80 border border-outline-variant/20 flex flex-col gap-2 transition-all hover:bg-surface-container-high/60 cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isAi ? 'bg-secondary/15 text-secondary' : 'bg-primary/15 text-primary'
                            }`}
                          >
                            <span className="material-symbols-outlined text-[18px]">
                              {skill.iconName}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-headline text-[14px] text-on-surface font-bold">
                              {skill.name}
                            </h4>
                            <p className="font-body text-[11px] text-on-surface-variant line-clamp-1">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        <span className="font-mono text-[11px] text-tertiary bg-surface-container-highest px-2 py-0.5 rounded font-bold shrink-0 ml-1">
                          {skill.proficiency}%
                        </span>
                      </div>

                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isAi
                              ? 'bg-gradient-to-r from-secondary to-primary'
                              : 'bg-gradient-to-r from-primary to-tertiary'
                          }`}
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Detail Drawer */}
        {activeSkill && (
          <div className="p-3.5 rounded-xl bg-surface-container-high border border-primary/40 text-xs space-y-1.5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between font-bold text-on-surface">
              <span className="text-primary font-mono text-sm">{activeSkill.name}</span>
              <button
                onClick={() => setActiveSkill(null)}
                className="text-on-surface-variant hover:text-on-surface cursor-pointer text-base"
              >
                ✕
              </button>
            </div>
            <p className="text-on-surface-variant leading-relaxed">{activeSkill.description}</p>
            <div className="flex flex-wrap gap-1 pt-1">
              {activeSkill.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-surface-container-lowest text-outline font-mono text-[10px] border border-outline-variant/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  // Desktop Standard Categorized Skills Layout
  return (
    <section className="w-full py-16 relative" id="skills">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">// 02</span>
              <span className="font-mono text-xs text-outline uppercase tracking-wider font-semibold">
                Technical Stack & Specializations
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
              Categorized Skills & Capabilities
            </h2>
          </div>
          <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
            Cleanly divided into foundational Web & Backend engineering and forward-looking AI & Innovation workflows.
          </p>
        </div>

        {/* Group Tab Switcher */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1 text-xs font-mono">
          <span className="text-outline uppercase text-[11px] mr-1">View Focus:</span>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer uppercase ${
              activeTab === 'all'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            All Competencies (10)
          </button>
          <button
            onClick={() => setActiveTab('web-backend')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer uppercase flex items-center gap-1.5 ${
              activeTab === 'web-backend'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Web & Backend (6)</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-innovation')}
            className={`px-4 py-1.5 rounded-full transition-all cursor-pointer uppercase flex items-center gap-1.5 ${
              activeTab === 'ai-innovation'
                ? 'bg-secondary text-on-secondary font-bold shadow-xs'
                : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>AI & Innovation (4)</span>
          </button>
        </div>

        {/* Side-by-side or stacked 2 Group Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* GROUP 1: Web & Backend */}
          {(activeTab === 'all' || activeTab === 'web-backend') && (
            <div className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors p-6 sm:p-7 rounded-2xl border border-primary/25 shadow-lg flex flex-col gap-5">
              <div className="flex items-start justify-between gap-2 border-b border-outline-variant/20 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-primary text-2xl">code_blocks</span>
                    <h3 className="font-headline font-bold text-xl text-on-surface">
                      {webGroup.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {webGroup.description}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 uppercase font-semibold shrink-0">
                  {webGroup.badge}
                </span>
              </div>

              {/* Skills List in Group 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {webGroup.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/20 hover:border-primary/40 transition-all flex flex-col justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[20px]">
                            {skill.iconName}
                          </span>
                          <h4 className="font-headline font-bold text-sm text-on-surface">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="font-mono text-xs text-tertiary font-bold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary to-tertiary h-full rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-surface-container text-[10px] font-mono text-outline"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GROUP 2: AI & Innovation */}
          {(activeTab === 'all' || activeTab === 'ai-innovation') && (
            <div className="bg-surface-container-high/40 hover:bg-surface-container-high/60 transition-colors p-6 sm:p-7 rounded-2xl border border-secondary/25 shadow-lg flex flex-col gap-5">
              <div className="flex items-start justify-between gap-2 border-b border-outline-variant/20 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-secondary text-2xl">auto_awesome</span>
                    <h3 className="font-headline font-bold text-xl text-on-surface">
                      {aiGroup.title}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    {aiGroup.description}
                  </p>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/30 uppercase font-semibold shrink-0">
                  {aiGroup.badge}
                </span>
              </div>

              {/* Skills List in Group 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aiGroup.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-xl bg-surface-container-low/90 border border-outline-variant/20 hover:border-secondary/40 transition-all flex flex-col justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[20px]">
                            {skill.iconName}
                          </span>
                          <h4 className="font-headline font-bold text-sm text-on-surface">
                            {skill.name}
                          </h4>
                        </div>
                        <span className="font-mono text-xs text-secondary font-bold">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-secondary to-primary h-full rounded-full"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {skill.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-1.5 py-0.5 rounded bg-surface-container text-[10px] font-mono text-outline"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
