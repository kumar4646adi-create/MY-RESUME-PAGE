/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ViewModeBar, ViewMode } from './components/ViewModeBar';
import { HeaderDesktop } from './components/HeaderDesktop';
import { HeaderMobile } from './components/HeaderMobile';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { AiExplorationSection } from './components/AiExplorationSection';
import { FeaturedWorkSection } from './components/FeaturedWorkSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ResumeModal } from './components/ResumeModal';
import { GraphPromptGeneratorModal } from './components/GraphPromptGeneratorModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { JsToolModal } from './components/JsToolModal';
import { ContactModal } from './components/ContactModal';
import { ProjectShowcaseItem } from './data/portfolioData';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('auto');
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isGraphStudioOpen, setIsGraphStudioOpen] = useState<boolean>(false);
  const [isJsModalOpen, setIsJsModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectShowcaseItem | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scrollspy active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'about', 'skills', 'ai', 'projects', 'education', 'contact'];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sections[i] === 'overview' ? 'about' : sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f131c] text-[#dfe2ee] font-body selection:bg-primary/30 selection:text-primary flex flex-col">
      {/* Top Preview Controls Bar */}
      <ViewModeBar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
      />

      {/* Render Mobile Screen View Mode */}
      {viewMode === 'mobile' ? (
        <div className="w-full flex-1 flex flex-col items-center py-6 bg-[#070a10]">
          {/* Simulated Mobile Device Frame */}
          <div className="w-full max-w-[430px] min-h-[920px] bg-[#0f131c] border border-outline-variant/30 rounded-[36px] shadow-2xl overflow-hidden flex flex-col relative pb-20">
            {/* Mobile Header */}
            <HeaderMobile
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
            />

            {/* Mobile Content Column */}
            <main className="flex-1 px-4 py-4 space-y-10 overflow-y-auto">
              <HeroSection
                layoutStyle="mobile"
                onNavigate={scrollToSection}
                onOpenResume={() => setIsResumeOpen(true)}
                onOpenContact={() => setIsContactOpen(true)}
              />
              <AboutSection layoutStyle="mobile" />
              <SkillsSection layoutStyle="mobile" />
              <AiExplorationSection
                layoutStyle="mobile"
                onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
              />
              <FeaturedWorkSection
                layoutStyle="mobile"
                onOpenProjectDetail={(p) => setSelectedProject(p)}
                onOpenJsDemo={() => setIsJsModalOpen(true)}
                onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
              />
              <TimelineSection layoutStyle="mobile" />
              <ContactSection
                layoutStyle="mobile"
                onOpenContactModal={() => setIsContactOpen(true)}
              />
            </main>

            {/* Mobile Bottom Tab Bar */}
            <MobileBottomNav
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          </div>
        </div>
      ) : viewMode === 'desktop' ? (
        /* Render Explicit Desktop Screen Mode */
        <div className="w-full flex-1 flex flex-col">
          <HeaderDesktop
            activeSection={activeSection}
            onNavigate={scrollToSection}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />

          <main className="flex-1 w-full bg-[#0f131c]">
            <HeroSection
              layoutStyle="desktop"
              onNavigate={scrollToSection}
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
            />
            <AboutSection layoutStyle="desktop" />
            <SkillsSection layoutStyle="desktop" />
            <AiExplorationSection
              layoutStyle="desktop"
              onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
            />
            <FeaturedWorkSection
              layoutStyle="desktop"
              onOpenProjectDetail={(p) => setSelectedProject(p)}
              onOpenJsDemo={() => setIsJsModalOpen(true)}
              onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
            />
            <TimelineSection layoutStyle="desktop" />
            <ContactSection
              layoutStyle="desktop"
              onOpenContactModal={() => setIsContactOpen(true)}
            />
          </main>

          <Footer onNavigate={scrollToSection} />
        </div>
      ) : (
        /* Render Auto Responsive Mode (Adapts to viewport) */
        <div className="w-full flex-1 flex flex-col">
          {/* Desktop header on md+, mobile header on <md */}
          <div className="hidden md:block">
            <HeaderDesktop
              activeSection={activeSection}
              onNavigate={scrollToSection}
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>
          <div className="block md:hidden">
            <HeaderMobile
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
            />
          </div>

          <main className="flex-1 w-full bg-[#0f131c] pb-20 md:pb-0">
            {/* Ambient Background Glows */}
            <div className="relative w-full max-w-[1140px] mx-auto pointer-events-none">
              <div className="absolute -top-16 left-1/4 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute top-96 right-10 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl -z-10"></div>
            </div>

            <HeroSection
              layoutStyle="desktop"
              onNavigate={scrollToSection}
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenContact={() => setIsContactOpen(true)}
            />
            <AboutSection layoutStyle="desktop" />
            <SkillsSection layoutStyle="desktop" />
            <AiExplorationSection
              layoutStyle="desktop"
              onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
            />
            <FeaturedWorkSection
              layoutStyle="desktop"
              onOpenProjectDetail={(p) => setSelectedProject(p)}
              onOpenJsDemo={() => setIsJsModalOpen(true)}
              onOpenGraphStudio={() => setIsGraphStudioOpen(true)}
            />
            <TimelineSection layoutStyle="desktop" />
            <ContactSection
              layoutStyle="desktop"
              onOpenContactModal={() => setIsContactOpen(true)}
            />
          </main>

          {/* Desktop Footer on md+ */}
          <div className="hidden md:block">
            <Footer onNavigate={scrollToSection} />
          </div>

          {/* Mobile bottom nav on <md */}
          <div className="block md:hidden">
            <MobileBottomNav
              activeSection={activeSection}
              onNavigate={scrollToSection}
            />
          </div>
        </div>
      )}

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <GraphPromptGeneratorModal
        isOpen={isGraphStudioOpen}
        onClose={() => setIsGraphStudioOpen(false)}
      />

      <JsToolModal
        isOpen={isJsModalOpen}
        onClose={() => setIsJsModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenGraphStudio={() => {
          setSelectedProject(null);
          setIsGraphStudioOpen(true);
        }}
        onOpenJsDemo={() => {
          setSelectedProject(null);
          setIsJsModalOpen(true);
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
