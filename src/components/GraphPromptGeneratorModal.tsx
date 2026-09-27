import React, { useState } from 'react';

interface GraphPromptGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GraphPromptGeneratorModal: React.FC<GraphPromptGeneratorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [goal, setGoal] = useState('Create a responsive ASP.NET MVC dashboard connecting to a MySQL database');
  const [role, setRole] = useState('Senior Full-Stack Web Architect specializing in clean C# code and responsive CSS');
  const [audience, setAudience] = useState('Technical interviewers and engineering teams assessing code quality');
  const [parameters, setParameters] = useState('Use semantic HTML5, async controller methods, parameterized SQL queries, and zero external runtime bloat');
  const [hierarchy, setHierarchy] = useState('1. Database schema & SQL queries -> 2. C# Models & Controller endpoints -> 3. Responsive Razor/HTML UI with flexbox');
  
  const [synthesizedPrompt, setSynthesizedPrompt] = useState<string>('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSynthesize = () => {
    const prompt = `[GRAPH DIRECTIVE: STRUCTURED PROMPT SYNTHESIS]

# 1. GOAL (Objective & Deliverable)
${goal}

# 2. ROLE (Persona & System Constraints)
Act as: ${role}. Enforce industry best practices, deterministic execution, and modern clean architecture.

# 3. AUDIENCE (Context & Depth)
Target Audience: ${audience}. Tone should be technically rigorous, structured, and free of fluff.

# 4. PARAMETERS (Technical Bounds & Rules)
Strict Requirements:
${parameters.split(',').map((p) => `- ${p.trim()}`).join('\n')}

# 5. HIERARCHY (Execution Sequence)
Proceed sequentially according to this order of operations:
${hierarchy}

[VERIFICATION CRITERIA]
- Validate all code syntax before outputting.
- Include comments explaining architectural decisions.
- Ensure cross-platform accessibility and error handling.`;

    setSynthesizedPrompt(prompt);
  };

  const handleCopy = () => {
    if (!synthesizedPrompt) return;
    navigator.clipboard.writeText(synthesizedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-surface-container-low border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-on-surface"
        role="dialog"
        aria-modal="true"
        aria-label="GRAPH Prompt Generator Studio"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-high/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl">hub</span>
            <div>
              <h3 className="font-headline font-bold text-lg text-on-surface">GRAPH Prompt Generator Studio</h3>
              <p className="text-xs font-mono text-tertiary">Goal • Role • Audience • Parameters • Hierarchy</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Studio Body */}
        <div className="overflow-y-auto p-6 space-y-5 text-sm font-body">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs text-on-surface-variant">
            <span className="font-bold text-primary">Methodology: </span>
            GRAPH decomposes complex reasoning or code queries into 5 structural dimensions to reduce LLM hallucinations and produce reliable execution code.
          </div>

          {/* Form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-semibold text-primary uppercase mb-1">
                G — Goal (What is the ultimate target outcome?)
              </label>
              <input
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-secondary uppercase mb-1">
                R — Role (What persona & expertise must the model adopt?)
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-tertiary uppercase mb-1">
                A — Audience (Who is the consumption target?)
              </label>
              <input
                type="text"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-tertiary"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-primary uppercase mb-1">
                P — Parameters (Technical constraints, syntax, edge cases)
              </label>
              <textarea
                rows={2}
                value={parameters}
                onChange={(e) => setParameters(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold text-secondary uppercase mb-1">
                H — Hierarchy (Execution phases & step-by-step roadmap)
              </label>
              <input
                type="text"
                value={hierarchy}
                onChange={(e) => setHierarchy(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-secondary"
              />
            </div>
          </div>

          {/* Action Generate */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleSynthesize}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-headline font-bold text-xs flex items-center gap-2 shadow-lg shadow-primary-container/20 hover:scale-102 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              <span>Synthesize GRAPH Prompt</span>
            </button>
          </div>

          {/* Synthesized Output Preview */}
          {synthesizedPrompt && (
            <div className="p-4 rounded-xl bg-surface-container-lowest border border-primary/30 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-tertiary uppercase">Synthesized Prompt Output</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-surface-container-high hover:bg-surface-bright text-on-surface border border-outline-variant/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px] text-primary">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Prompt'}</span>
                </button>
              </div>
              <pre className="text-xs font-mono text-on-surface-variant bg-surface-container p-3 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border border-outline-variant/20">
                {synthesizedPrompt}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-outline-variant/30 bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant font-mono">
          <span>GRAPH Framework © Aditya Kumar</span>
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
