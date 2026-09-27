import React from 'react';

export type ViewMode = 'auto' | 'desktop' | 'mobile';

interface ViewModeBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onOpenResume: () => void;
  onOpenGraphStudio: () => void;
}

export const ViewModeBar: React.FC<ViewModeBarProps> = ({
  viewMode,
  onViewModeChange,
  onOpenResume,
  onOpenGraphStudio,
}) => {
  return (
    <div className="sticky top-0 z-[60] w-full bg-[#0a0e16]/95 border-b border-outline-variant/30 backdrop-blur-xl px-4 py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="text-on-surface-variant font-semibold">VIEWPORT LAYOUT:</span>
        <div className="inline-flex rounded-lg bg-surface-container-high p-0.5 border border-outline-variant/30">
          <button
            onClick={() => onViewModeChange('auto')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'auto'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            title="Fluidly responsive to screen width"
          >
            <span className="material-symbols-outlined text-[14px]">devices</span>
            <span className="hidden sm:inline">Auto Responsive</span>
          </button>
          <button
            onClick={() => onViewModeChange('desktop')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'desktop'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            title="Desktop Standard View"
          >
            <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
            <span className="hidden sm:inline">Desktop Screen</span>
          </button>
          <button
            onClick={() => onViewModeChange('mobile')}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              viewMode === 'mobile'
                ? 'bg-primary text-on-primary font-bold shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            title="Mobile Screen (Tabbed Nav)"
          >
            <span className="material-symbols-outlined text-[14px]">smartphone</span>
            <span className="hidden sm:inline">Mobile Screen</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={onOpenGraphStudio}
          className="px-2.5 py-1 rounded-md bg-secondary-container/40 hover:bg-secondary-container/70 text-secondary border border-secondary/30 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[14px]">hub</span>
          <span className="hidden md:inline">Try GRAPH Tool</span>
        </button>
        <button
          onClick={onOpenResume}
          className="px-2.5 py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-primary border border-outline-variant/30 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[14px]">download</span>
          <span>CV / Resume</span>
        </button>
      </div>
    </div>
  );
};
