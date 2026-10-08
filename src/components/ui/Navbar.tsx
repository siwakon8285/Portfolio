import React, { useState, useEffect } from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Github } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  const isTh = language === 'TH';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      aria-label="Navigation Header"
      className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 md:px-8 py-4 pointer-events-none transition-all duration-300"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-neutral-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
            : 'bg-white/[0.02] backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Brand Identity */}
        <button
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2.5 focus:outline-none group text-left"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white font-sans font-bold text-xs group-hover:scale-105 transition-transform shadow-sm">
            SB
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              {DEVELOPER_INFO.name}
            </div>
            <div className="text-[11px] font-sans text-neutral-400 font-medium hidden sm:block">
              {isTh ? 'แฟ้มสะสมผลงาน' : 'Developer Portfolio'}
            </div>
          </div>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-sans font-medium text-neutral-400">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-white transition-colors focus:outline-none tracking-normal"
          >
            {isTh ? 'เกี่ยวกับ' : 'About'}
          </button>
          <button
            onClick={() => onNavigate('technologies')}
            className="hover:text-white transition-colors focus:outline-none tracking-normal"
          >
            {isTh ? 'เทคโนโลยี' : 'Technologies'}
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-white transition-colors focus:outline-none tracking-normal"
          >
            {isTh ? 'ผลงาน' : 'Projects'}
          </button>
        </nav>

        {/* Right Controls: Language Switcher, Domain, GitHub */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Apple-Style Sliding Language Switcher Pill */}
          <div className="relative flex items-center p-0.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-inner">
            <button
              onClick={() => setLanguage('EN')}
              aria-label="Switch to English"
              className={`relative px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold transition-all duration-300 ${
                language === 'EN'
                  ? 'bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.25)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('TH')}
              aria-label="เปลี่ยนเป็นภาษาไทย"
              className={`relative px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold transition-all duration-300 ${
                language === 'TH'
                  ? 'bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.25)]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              TH
            </button>
          </div>

          {/* GitHub CTA button */}
          <a
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold bg-white text-black hover:bg-neutral-200 transition-all shadow-[0_4px_16px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95"
          >
            <Github size={13} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
