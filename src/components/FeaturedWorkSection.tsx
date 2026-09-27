import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectShowcaseItem } from '../data/portfolioData';

interface FeaturedWorkSectionProps {
  layoutStyle?: 'desktop' | 'mobile';
  onOpenGraphStudio: () => void;
  onOpenJsDemo: () => void;
  onOpenProjectDetail: (project: ProjectShowcaseItem) => void;
}

export const FeaturedWorkSection: React.FC<FeaturedWorkSectionProps> = ({
  layoutStyle = 'desktop',
  onOpenGraphStudio,
  onOpenJsDemo,
  onOpenProjectDetail,
}) => {
  const isMobileLayout = layoutStyle === 'mobile';
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);

  const projects = PORTFOLIO_DATA.featuredProjects;
  const card1 = projects.find((p) => p.id === 'card-1-aspnet')!;
  const card2 = projects.find((p) => p.id === 'card-2-js-tool')!;
  const card3 = projects.find((p) => p.id === 'card-3-prompt-generator')!;
  const card4 = projects.find((p) => p.id === 'card-4-creative-ai')!;

  return (
    <section className="w-full py-16 relative" id="projects">
      <div className="max-w-[1140px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-primary uppercase tracking-widest">// 04</span>
              <span className="font-mono text-xs text-outline uppercase tracking-wider font-semibold">
                Core Portfolio
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface tracking-tight">
              Featured Projects & AI Workflows
            </h2>
          </div>
          <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
            Curated 2×2 showcase covering production full-stack systems, dynamic web tools, and multimodal generative pipelines.
          </p>
        </div>

        {/* 2x2 Grid Layout on Desktop / 1 column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* CARD 1: ASP.NET & C# Web Application */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-high/50 hover:bg-surface-container-high/85 border border-primary/25 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="p-6 flex flex-col gap-4">
              {/* Image Preview Container */}
              <div className="w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative border border-outline-variant/20">
                <img
                  src={card1.imageUrl}
                  alt={card1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-primary border border-primary/30 uppercase font-semibold">
                  {card1.badge}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-on-surface border border-outline-variant/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>ASP.NET Core</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                  {card1.title}
                </h3>
                <p className="font-mono text-xs text-primary/80 font-medium">
                  {card1.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
                  {card1.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card1.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-lowest font-mono text-[11px] text-outline border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <a
                href={card1.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-fixed hover:text-on-primary-fixed font-headline font-bold text-xs shadow-md shadow-primary/20 transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                <span>View Code</span>
              </a>
              <button
                onClick={() => onOpenProjectDetail(card1)}
                className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/30 text-xs font-mono transition-colors cursor-pointer"
                title="View Technical Details"
              >
                Specs
              </button>
            </div>
          </div>

          {/* CARD 2: Interactive JavaScript Web Tool */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-high/50 hover:bg-surface-container-high/85 border border-tertiary/25 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="p-6 flex flex-col gap-4">
              {/* Image Preview Container */}
              <div className="w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative border border-outline-variant/20">
                <img
                  src={card2.imageUrl}
                  alt={card2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-tertiary border border-tertiary/30 uppercase font-semibold">
                  {card2.badge}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Client-Side Engine</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-tertiary transition-colors">
                  {card2.title}
                </h3>
                <p className="font-mono text-xs text-tertiary/80 font-medium">
                  {card2.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
                  {card2.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card2.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-lowest font-mono text-[11px] text-outline border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions with "Live Demo" button */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <button
                onClick={onOpenJsDemo}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-tertiary-container/80 to-tertiary text-on-tertiary-container hover:brightness-110 font-headline font-bold text-xs shadow-md shadow-tertiary/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">play_arrow</span>
                <span>Live Demo</span>
              </button>
              <a
                href={card2.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/30 text-xs font-mono transition-colors cursor-pointer"
              >
                Code
              </a>
            </div>
          </div>

          {/* CARD 3: AI Prompt Generator & Workflow Showcase */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-high/50 hover:bg-surface-container-high/85 border border-secondary/25 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="p-6 flex flex-col gap-4">
              {/* Image Preview Container */}
              <div className="w-full h-48 rounded-xl bg-surface-container-highest overflow-hidden relative border border-outline-variant/20">
                <img
                  src={card3.imageUrl}
                  alt={card3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-secondary border border-secondary/30 uppercase font-semibold">
                  {card3.badge}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-secondary border border-secondary/30 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">hub</span>
                  <span>GRAPH Methodology</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-secondary transition-colors">
                  {card3.title}
                </h3>
                <p className="font-mono text-xs text-secondary/80 font-medium">
                  {card3.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed pt-1">
                  {card3.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card3.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-lowest font-mono text-[11px] text-outline border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions with "View Prompts" button */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <button
                onClick={onOpenGraphStudio}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed font-headline font-bold text-xs shadow-md shadow-secondary/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">psychology</span>
                <span>View Prompts</span>
              </button>
              <button
                onClick={() => onOpenProjectDetail(card3)}
                className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/30 text-xs font-mono transition-colors cursor-pointer"
              >
                Framework
              </button>
            </div>
          </div>

          {/* CARD 4: AI Visuals & Video Creation Showcase (With short preview/gallery layout) */}
          <div className="flex flex-col justify-between rounded-2xl bg-surface-container-high/50 hover:bg-surface-container-high/85 border border-primary/25 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group">
            <div className="p-6 flex flex-col gap-4">
              {/* Short Preview / Gallery Layout inside the card */}
              <div className="flex flex-col gap-2">
                {/* Active Selected Gallery Preview */}
                <div className="w-full h-44 rounded-xl bg-surface-container-highest overflow-hidden relative border border-outline-variant/25">
                  <img
                    src={card4.galleryItems?.[selectedGalleryIdx]?.imageUrl || card4.imageUrl}
                    alt={card4.galleryItems?.[selectedGalleryIdx]?.title || card4.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#0a0e16]/85 backdrop-blur-md font-mono text-[10px] text-tertiary border border-tertiary/30">
                    {card4.galleryItems?.[selectedGalleryIdx]?.category || 'Generative Gallery'}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-[#0a0e16]/85 backdrop-blur-md border border-outline-variant/30">
                    <p className="font-headline font-semibold text-xs text-on-surface truncate">
                      {card4.galleryItems?.[selectedGalleryIdx]?.title}
                    </p>
                    <p className="font-mono text-[10px] text-on-surface-variant truncate">
                      "{card4.galleryItems?.[selectedGalleryIdx]?.promptPreview}"
                    </p>
                  </div>
                </div>

                {/* 3 Gallery Thumbnails / Tabs for Instant Preview Switch */}
                <div className="grid grid-cols-3 gap-2">
                  {card4.galleryItems?.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedGalleryIdx(idx)}
                      className={`relative h-14 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                        selectedGalleryIdx === idx
                          ? 'border-primary ring-2 ring-primary/40'
                          : 'border-outline-variant/30 opacity-70 hover:opacity-100'
                      }`}
                      title={item.title}
                    >
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="absolute bottom-0.5 left-1 text-[9px] font-mono text-white font-bold drop-shadow">
                        0{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
                    {card4.title}
                  </h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-container text-outline">
                    Gallery Layout
                  </span>
                </div>
                <p className="font-mono text-xs text-tertiary/90 font-medium">
                  {card4.subtitle}
                </p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {card4.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card4.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-lowest font-mono text-[11px] text-outline border border-outline-variant/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <button
                onClick={() => onOpenProjectDetail(card4)}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-container/80 to-secondary text-on-primary-container hover:brightness-110 font-headline font-bold text-xs shadow-md shadow-primary/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">gallery_thumbnail</span>
                <span>Explore Full Showcase</span>
              </button>
              <a
                href={card4.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/30 text-xs font-mono transition-colors cursor-pointer"
              >
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
