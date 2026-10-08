import React, { useRef, useState } from 'react';
import {
  Home,
  Cpu,
  FolderGit2,
  Github,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

interface DockProps {
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

interface DockItemDef {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  isExternal?: boolean;
}

export const Dock: React.FC<DockProps> = ({ onNavigate, activeSection = 'hero' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dockRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  const isTh = language === 'TH';

  const items: DockItemDef[] = [
    { id: 'hero', label: isTh ? 'หน้าแรก' : 'Home', icon: Home },
    { id: 'technologies', label: isTh ? 'เทคโนโลยี' : 'Tech Stack', icon: Cpu },
    { id: 'projects', label: isTh ? 'ผลงาน' : 'Projects', icon: FolderGit2 },
    {
      id: 'domain',
      label: DEVELOPER_INFO.domain,
      icon: Globe,
      href: `https://${DEVELOPER_INFO.domain}`,
      isExternal: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      href: DEVELOPER_INFO.github,
      isExternal: true,
    },
  ];

  return (
    <aside
      aria-label="macOS Navigation Dock"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div
        ref={dockRef}
        onMouseLeave={() => setHoveredIndex(null)}
        className="flex items-end gap-2 px-3.5 py-2.5 rounded-full bg-neutral-900/70 backdrop-blur-3xl border border-white/10 shadow-[0_24px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] transition-all duration-300"
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          // macOS Magnification curve calculation
          let scale = 1;
          if (hoveredIndex !== null) {
            const distance = Math.abs(hoveredIndex - index);
            if (distance === 0) scale = 1.35;
            else if (distance === 1) scale = 1.18;
            else if (distance === 2) scale = 1.05;
          }

          const buttonContent = (
            <div
              className="relative flex flex-col items-center group"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              {/* Apple-style Tooltip */}
              <div className="absolute -top-11 px-3 py-1 rounded-xl bg-neutral-900/90 backdrop-blur-xl border border-white/10 text-xs font-sans font-medium text-white/95 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none shadow-glass -translate-y-1 group-hover:translate-y-0">
                {item.label}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900/90" />
              </div>

              {/* Icon Container with Parabolic Magnification */}
              <div
                style={{
                  transform: `scale(${scale}) translateY(${scale > 1 ? -(scale - 1) * 14 : 0}px)`,
                  transition: 'transform 0.18s cubic-bezier(0.2, 0, 0.2, 1)',
                }}
                className={`w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                  isActive
                    ? 'bg-white/15 text-white border border-white/25 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.1] border border-white/[0.06]'
                }`}
              >
                <Icon size={20} className="transition-transform group-hover:scale-105" />
              </div>

              {/* Indicator Dot */}
              <div
                className={`w-1 h-1 rounded-full mt-1.5 transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 shadow-[0_0_6px_#22d3ee]'
                    : 'bg-transparent'
                }`}
              />
            </div>
          );

          if (item.isExternal && item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="focus:outline-none"
              >
                {buttonContent}
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              className="focus:outline-none"
            >
              {buttonContent}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
