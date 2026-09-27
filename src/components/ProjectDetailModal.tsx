import React, { useState } from 'react';
import { ProjectShowcaseItem } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: ProjectShowcaseItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenGraphStudio?: () => void;
  onOpenJsDemo?: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenGraphStudio,
  onOpenJsDemo,
}) => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<number>(0);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-surface-container-low border border-outline-variant/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-on-surface"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Banner with image */}
        <div className="relative w-full h-60 bg-surface-container overflow-hidden">
          <img
            src={
              project.galleryItems
                ? project.galleryItems[selectedGalleryItem]?.imageUrl
                : project.imageUrl
            }
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/40 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-surface-container-lowest/90 text-primary border border-primary/30 uppercase tracking-wider font-semibold">
              {project.badge}
            </span>
            <h3 className="font-headline font-bold text-2xl text-on-surface mt-1.5">{project.title}</h3>
            <p className="font-mono text-xs text-primary/90 mt-0.5">{project.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-5 text-sm font-body">
          {/* Gallery Switcher if available */}
          {project.galleryItems && (
            <div className="p-3 rounded-xl bg-surface-container/70 border border-outline-variant/20 space-y-2">
              <span className="text-xs font-mono text-secondary font-bold uppercase">
                Interactive Multimodal Gallery Previews
              </span>
              <div className="grid grid-cols-3 gap-2">
                {project.galleryItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedGalleryItem(idx)}
                    className={`p-2 rounded-lg text-left border transition-all cursor-pointer ${
                      selectedGalleryItem === idx
                        ? 'bg-secondary/15 border-secondary text-on-surface ring-1 ring-secondary'
                        : 'bg-surface-container hover:bg-surface-bright border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    <p className="font-headline font-bold text-[11px] truncate">{item.title}</p>
                    <p className="font-mono text-[9px] text-outline truncate">{item.category}</p>
                  </button>
                ))}
              </div>
              <p className="text-xs font-mono text-on-surface-variant italic pt-1">
                Prompt seed: "{project.galleryItems[selectedGalleryItem]?.promptPreview}"
              </p>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-1.5">Overview & Architecture</h4>
            <p className="text-on-surface-variant leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-secondary font-bold mb-2">Key Engineering Highlights</h4>
            <div className="space-y-2">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-tertiary font-bold mb-2">Technologies & Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface font-mono text-xs border border-outline-variant/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="pt-2 flex flex-wrap gap-3">
            {project.actionType === 'demo-js' && onOpenJsDemo && (
              <button
                onClick={() => {
                  onClose();
                  onOpenJsDemo();
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-tertiary-container to-tertiary text-on-tertiary-container font-headline font-bold text-xs flex items-center gap-2 hover:scale-102 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">play_arrow</span>
                <span>Open Live JavaScript Tool</span>
              </button>
            )}

            {project.actionType === 'prompts-graph' && onOpenGraphStudio && (
              <button
                onClick={() => {
                  onClose();
                  onOpenGraphStudio();
                }}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-container to-secondary text-on-primary-container font-headline font-bold text-xs flex items-center gap-2 hover:scale-102 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>Open GRAPH Studio & Prompts</span>
              </button>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface border border-outline-variant/30 font-headline font-semibold text-xs flex items-center gap-2 transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-primary" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
              </svg>
              <span>View GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-outline-variant/30 bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant font-mono">
          <span>{project.title}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
