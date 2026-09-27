import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendDraft = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${senderName || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Hi Aditya,\n\n${message}\n\nBest regards,\n${senderName}\n${senderEmail}`
    )}`;
    window.location.href = mailtoUrl;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-surface-container-low border border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-on-surface"
        role="dialog"
        aria-modal="true"
        aria-label="Contact Aditya Kumar"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-high/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">send</span>
            <h3 className="font-headline font-bold text-lg text-on-surface">Get in Touch with Aditya</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-bright flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 font-body text-sm">
          <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </div>
              <div>
                <p className="text-[10px] font-mono text-on-surface-variant">DIRECT EMAIL</p>
                <p className="font-mono text-xs font-semibold text-on-surface">{PORTFOLIO_DATA.profile.email}</p>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary font-mono text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <form onSubmit={handleSendDraft} className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-mono text-outline mb-1">Your Name / Organization</label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-outline mb-1">Your Email</label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-outline mb-1">Message</label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Aditya, we saw your portfolio and would like to talk about an internship/junior web developer role..."
                className="w-full px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface text-xs focus:outline-none focus:border-primary"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-outline font-mono">
                {sentSuccess ? 'Opening email client...' : 'Opens your default email client'}
              </span>
              <button
                type="submit"
                className="px-5 py-2 rounded-full bg-primary text-on-primary font-headline font-semibold text-xs flex items-center gap-1.5 shadow-md hover:bg-primary-fixed transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">mail</span>
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
