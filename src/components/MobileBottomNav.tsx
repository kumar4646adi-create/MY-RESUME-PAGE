import React from 'react';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onNavigate,
}) => {
  const tabs = [
    { id: 'about', label: 'About', icon: 'home' },
    { id: 'work', label: 'Work', icon: 'code_blocks' },
    { id: 'skills', label: 'Skills', icon: 'terminal' },
    { id: 'timeline', label: 'Timeline', icon: 'school' },
    { id: 'contact', label: 'Contact', icon: 'send' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 pb-safe bg-[#0a0e16]/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-1px_12px_rgba(0,0,0,0.5)]">
      <div className="flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive =
            activeSection === tab.id ||
            (tab.id === 'work' && activeSection === 'projects') ||
            (tab.id === 'timeline' && activeSection === 'education');
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id === 'timeline' ? 'education' : tab.id === 'work' ? 'projects' : tab.id)}
              className={`flex flex-col items-center justify-center min-w-[50px] min-h-[44px] px-1 transition-colors cursor-pointer ${
                isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{tab.icon}</span>
              <span className="font-headline font-semibold text-[10px] mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
