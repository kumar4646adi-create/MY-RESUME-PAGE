import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ADITYA KUMAR
Full-Stack Web Developer & AI Solutions Enthusiast
Email: ${PORTFOLIO_DATA.profile.email}
GitHub: ${PORTFOLIO_DATA.profile.github}
LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}
Status: Available for Internships & Junior Roles

PROFILE SUMMARY
${PORTFOLIO_DATA.profile.aboutFull}

EDUCATION
• Bachelor of Computer Applications (BCA) | 2024 - Present (Final Year)
  Swami Vivekananda Govt. College, Ghumarwin
• Class 12 (+2): 85.60% | 2024 (High Distinction)
• Class 10 (Matric): 82.14% | 2022 (Completed)

TECHNICAL SKILLS
1. Web & Backend: HTML5, CSS3, JavaScript, C#, ASP.NET, SQL/MySQL
2. AI & Innovation: Generative AI (Image & Video), Prompt Engineering, GRAPH Prompt Generators, AI-Powered Research

FEATURED PROJECTS & AI WORKFLOWS
1. ASP.NET & C# Web Application: Clean MVC backend, relational MySQL schemas, asynchronous CRUD APIs.
2. Interactive JavaScript Web Tool: Reactive DOM manipulation, client-side algorithms, instant state persistence.
3. AI Prompt Generator & Workflow Showcase: 5-dimensional GRAPH prompt synthesis for deterministic reasoning and code.
4. AI Visuals & Video Creation Showcase: Generative latent diffusion, video motion pipelines, and asset engineering.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-low border border-outline-variant/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-on-surface"
        role="dialog"
        aria-modal="true"
        aria-label="Aditya Kumar Resume"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-high/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">description</span>
            <h3 className="font-headline font-bold text-lg text-on-surface">Curriculum Vitae — Aditya Kumar</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface border border-outline-variant/30 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy Resume Plaintext"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>
            <a
              href={PORTFOLIO_DATA.profile.resumeUrl}
              download="Aditya_Kumar_Resume.pdf"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-on-primary hover:bg-primary-fixed transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-sm bg-surface-container-lowest/80 font-body">
          {/* Top Contact Info */}
          <div className="border-b border-outline-variant/30 pb-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold font-headline text-on-surface tracking-tight uppercase">
                  {PORTFOLIO_DATA.profile.name}
                </h1>
                <p className="text-primary font-mono text-xs mt-0.5 font-semibold">
                  {PORTFOLIO_DATA.profile.roleHeadline}
                </p>
                <p className="text-emerald-400 font-mono text-[11px] mt-1">
                  {PORTFOLIO_DATA.profile.statusBadge}
                </p>
              </div>
              <div className="text-xs text-on-surface-variant space-y-0.5 font-mono">
                <div>Email: <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-primary hover:underline">{PORTFOLIO_DATA.profile.email}</a></div>
                <div>GitHub: <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="text-tertiary hover:underline">{PORTFOLIO_DATA.profile.githubHandle}</a></div>
                <div>LinkedIn: <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:underline">{PORTFOLIO_DATA.profile.linkedinHandle}</a></div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">Professional Summary</h4>
            <p className="text-on-surface-variant leading-relaxed">
              BCA Final Year student and aspiring web developer focused on crafting responsive, clean-code web applications. Experienced with HTML5, CSS3, JavaScript, C#, ASP.NET, and MySQL, complemented by active research in structured prompt engineering and AI-driven creative pipelines.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-3">Academic Track Record</h4>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h5 className="font-bold text-on-surface text-sm">{edu.degree}</h5>
                    <span className="font-mono text-xs text-primary font-semibold">{edu.period}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-outline mt-0.5">
                    <span>{edu.institution}</span>
                    {edu.score && (
                      <span className="font-mono text-xs text-tertiary font-bold px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/20">
                        {edu.score}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Categorized Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-3">Technical Competencies (2 Groups)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PORTFOLIO_DATA.skillGroups.map((group) => (
                <div key={group.id} className="p-4 rounded-xl bg-surface-container-low/70 border border-outline-variant/25 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-on-surface">{group.title}</h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container-high text-primary font-semibold">
                      {group.badge}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-2 py-0.5 rounded bg-surface-container text-xs font-mono text-on-surface border border-outline-variant/20"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-3">Featured Projects & AI Workflows</h4>
            <div className="space-y-3">
              {PORTFOLIO_DATA.featuredProjects.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-surface-container-low/70 border border-outline-variant/20">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm text-on-surface">{proj.title}</h5>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold">
                      {proj.badge}
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">{proj.description}</p>
                  <ul className="mt-2 space-y-1">
                    {proj.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="text-xs text-outline flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-primary shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-outline-variant/30 bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant font-mono">
          <span>Aditya Kumar • Curriculum Vitae</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors cursor-pointer"
            >
              Print
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-semibold hover:bg-primary-fixed transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
