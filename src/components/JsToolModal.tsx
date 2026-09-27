import React, { useState } from 'react';

interface JsToolModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JsToolModal: React.FC<JsToolModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'formatter' | 'calculator' | 'palette'>('formatter');
  
  // Tab 1: SQL / JSON Query Formatter
  const [rawInput, setRawInput] = useState(`SELECT u.UserId, u.FullName, p.ProjectTitle, COUNT(t.TaskId) as TaskCount
FROM Users u
INNER JOIN Projects p ON u.UserId = p.OwnerId
LEFT JOIN Tasks t ON p.ProjectId = t.ProjectId
WHERE u.IsActive = 1
GROUP BY u.UserId, u.FullName, p.ProjectTitle
ORDER BY TaskCount DESC;`);
  const [formattedOutput, setFormattedOutput] = useState('');
  const [copied, setCopied] = useState(false);

  // Tab 2: Responsive Breakpoint & Fluid Typography Calculator
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [baseSize, setBaseSize] = useState(16);

  if (!isOpen) return null;

  const handleFormat = () => {
    try {
      if (rawInput.trim().startsWith('{') || rawInput.trim().startsWith('[')) {
        const parsed = JSON.parse(rawInput);
        setFormattedOutput(JSON.stringify(parsed, null, 2));
      } else {
        // SQL keyword uppercase formatting
        const keywords = ['SELECT', 'FROM', 'WHERE', 'INNER JOIN', 'LEFT JOIN', 'GROUP BY', 'ORDER BY', 'DESC', 'ASC', 'AS', 'AND', 'OR', 'COUNT', 'LIMIT'];
        let res = rawInput;
        keywords.forEach((kw) => {
          const regex = new RegExp(`\\b${kw}\\b`, 'gi');
          res = res.replace(regex, kw.toUpperCase());
        });
        setFormattedOutput(`-- Optimized SQL Query Syntax\n` + res);
      }
    } catch {
      setFormattedOutput(rawInput);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput || rawInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Fluid clamp calculation
  const computedClamp = `clamp(${baseSize * 0.875}px, ${(baseSize / 16) * 1.5}vw + 0.5rem, ${baseSize * 1.5}px)`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] bg-surface-container-low border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-on-surface"
        role="dialog"
        aria-modal="true"
        aria-label="Interactive JavaScript Web Tool"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-high/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">javascript</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-base text-on-surface">Interactive JavaScript Web Tool</h3>
              <p className="text-xs font-mono text-tertiary">Real-time Client-Side State & Logic Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pt-3 pb-2 flex gap-2 border-b border-outline-variant/20 bg-surface-container/50 text-xs font-mono">
          <button
            onClick={() => setActiveTab('formatter')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'formatter' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            SQL / JSON Live Formatter
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'calculator' ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Fluid Clamp() Calculator
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 space-y-4 text-sm font-body">
          {activeTab === 'formatter' ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-primary font-semibold uppercase">
                  Input Code (SQL or JSON)
                </label>
                <button
                  onClick={handleFormat}
                  className="px-3 py-1 rounded-md bg-primary text-on-primary text-xs font-mono font-bold hover:bg-primary-fixed transition-colors cursor-pointer"
                >
                  Run Formatting Logic
                </button>
              </div>

              <textarea
                rows={5}
                value={rawInput}
                onChange={(e) => setRawInput(e.target.value)}
                className="w-full p-3 rounded-xl bg-surface-container border border-outline-variant/30 text-xs font-mono text-on-surface focus:outline-none focus:border-primary resize-y"
              />

              {formattedOutput && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-tertiary font-bold uppercase">
                      Formatted Output (Processed in-browser)
                    </span>
                    <button
                      onClick={handleCopy}
                      className="px-2.5 py-1 rounded bg-surface-container-high hover:bg-surface-bright text-xs font-mono text-on-surface border border-outline-variant/30 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {copied ? 'check' : 'content_copy'}
                      </span>
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-surface-container-lowest border border-tertiary/30 text-xs font-mono text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                    {formattedOutput}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/20 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span>Simulated Viewport Width:</span>
                  <span className="font-bold text-primary">{viewportWidth}px</span>
                </div>
                <input
                  type="range"
                  min="320"
                  max="1920"
                  step="10"
                  value={viewportWidth}
                  onChange={(e) => setViewportWidth(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />

                <div className="flex justify-between items-center text-xs font-mono pt-2">
                  <span>Root Base Font Size:</span>
                  <span className="font-bold text-secondary">{baseSize}px</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="1"
                  value={baseSize}
                  onChange={(e) => setBaseSize(Number(e.target.value))}
                  className="w-full accent-secondary cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-2">
                <span className="text-xs font-mono text-outline uppercase">Computed CSS Clamp Output:</span>
                <div className="font-mono text-sm text-primary p-2.5 rounded-lg bg-surface-container border border-primary/20">
                  font-size: {computedClamp};
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Generated in real-time by Aditya's client-side JavaScript calculation algorithm, ensuring accessible scaling from mobile viewports to ultra-wide displays.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-outline-variant/30 bg-surface-container-high/60 flex items-center justify-between text-xs text-on-surface-variant font-mono">
          <span>JavaScript ES6+ Reactive Engine</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-bright text-on-surface transition-colors cursor-pointer"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};
