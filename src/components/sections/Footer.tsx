import React from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { Github, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const { language } = useLanguage();
  const isTh = language === 'TH';

  return (
    <footer
      aria-label="Apple Minimalist Footer"
      className="relative w-full bg-black border-t border-white/[0.08] pt-16 pb-16 px-4 sm:px-6 md:px-12 text-neutral-400 font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-10">
        {/* Top Tier: Clean Identity & Vercel Edge Deployed Status Badge */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 font-sans">
              Siwakorn Bunde
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-sans font-medium">
              {isTh ? 'นักพัฒนาฟูลสแต็กและสถาปัตยกรรมระบบ' : 'Full-Stack & Systems Developer'}
            </p>
          </div>

          {/* Vercel Edge Deployed Status Badge */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="text-xs font-sans font-medium text-neutral-300">
              <span className="text-white font-semibold">Vercel Edge Deployed</span>
              <span className="text-neutral-400"> • {DEVELOPER_INFO.domain}</span>
            </div>
          </div>
        </div>

        {/* Middle Tier: Clean Apple-Style Social & Contact Pills */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1C3pDvjZLb/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white text-xs font-sans font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sei1co_?stkn=NWJiMGlrenI1OWRt&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white text-xs font-sans font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-95"
            >
              <svg className="w-3.5 h-3.5 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram (@sei1co_)</span>
            </a>

            {/* GitHub */}
            <a
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white text-xs font-sans font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-95"
            >
              <Github size={14} className="text-neutral-200" />
              <span>GitHub (siwakon8285)</span>
            </a>

            {/* Personal Edge Domain */}
            <a
              href={`https://${DEVELOPER_INFO.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Edge Domain"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-neutral-200 hover:text-white text-xs font-sans font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <Globe size={13} className="text-neutral-400" />
              <span>{DEVELOPER_INFO.domain}</span>
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={onScrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white transition-all text-xs font-sans font-medium active:scale-95"
          >
            <span>{isTh ? 'กลับด้านบน' : 'Back to Top'}</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Tier: Minimalist Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.06] text-xs font-sans text-neutral-400 font-normal">
          <p>
            © {new Date().getFullYear()} Siwakorn Bunde. {isTh ? 'สงวนลิขสิทธิ์ทั้งหมด' : 'All rights reserved.'}
          </p>
          <p className="text-neutral-400">
            Apple-Tier Minimalist Portfolio • React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
};
