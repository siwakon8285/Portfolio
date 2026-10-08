import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechStackOrbit } from '../canvas/TechStackOrbit';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations, LocalizedTechItem } from '../../data/translations';
import { RotateCw, ShieldCheck, Cpu } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const TechOrbitSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const [rotationProgress, setRotationProgress] = useState(0);
  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const { language } = useLanguage();
  const t = getTranslations(language).orbit;
  const currentTech: LocalizedTechItem = t.items[activeTechIndex] || t.items[0];

  useEffect(() => {
    if (!containerRef.current || !pinTargetRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinTargetRef.current,
        scrub: 1,
        onUpdate: (self) => {
          setRotationProgress(self.progress);
          const total = t.items.length;
          const rawIndex = Math.round(self.progress * total) % total;
          setActiveTechIndex(rawIndex);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [t.items.length]);

  const handleCardClick = (item: LocalizedTechItem) => {
    const itemIndex = t.items.findIndex((x) => x.id === item.id);
    if (itemIndex !== -1) {
      setActiveTechIndex(itemIndex);
      setRotationProgress(itemIndex / t.items.length);
    }
  };

  const handleCategoryClick = (idx: number) => {
    setActiveCategoryIndex(idx);
    if (idx === 0) return; // All
    // Find first item matching category
    const catName = t.categories[idx];
    const matchIndex = t.items.findIndex((item) => item.category === catName);
    if (matchIndex !== -1) {
      setActiveTechIndex(matchIndex);
      setRotationProgress(matchIndex / t.items.length);
    }
  };

  return (
    <section
      id="tech-orbit"
      ref={containerRef}
      aria-label="3D Tech Cylinder Orbit"
      className="relative w-full h-[350vh] bg-black"
    >
      {/* Pinned Sticky Viewport */}
      <div
        ref={pinTargetRef}
        className="w-full h-screen sticky top-0 flex flex-col justify-between overflow-hidden px-4 md:px-8 py-8"
      >
        {/* Background ambient diffuse lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-sky-950/20 blur-[170px] rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-[450px] h-[350px] bg-violet-950/20 blur-[150px] rounded-full" />
        </div>

        {/* Section Header */}
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3 shadow-sm">
            <Cpu size={13} className="text-cyan-400" />
            <span className="text-xs font-sans font-medium text-neutral-300">
              {t.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-sans">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm font-normal text-neutral-300/80 max-w-xl mx-auto font-sans leading-relaxed">
            {t.subtitle}
          </p>

          {/* Rounded Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {t.categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(idx)}
                className={`px-3.5 py-1 rounded-full text-xs font-sans font-medium transition-all duration-200 border ${
                  activeCategoryIndex === idx
                    ? 'bg-white text-black border-white shadow-[0_2px_12px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.035] text-neutral-400 border-white/[0.06] hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3D WebGL Canvas Layer */}
        <div className="relative z-0 flex-1 w-full my-auto">
          <TechStackOrbit
            rotationProgress={rotationProgress}
            items={t.items}
            invariantsLabel={t.statusBar.invariantsTitle}
            onSelectCard={handleCardClick}
          />
        </div>

        {/* Bottom Orbit Status Bar */}
        <div className="relative z-10 w-full max-w-3xl mx-auto flex items-center justify-between px-5 py-2.5 rounded-2xl bg-neutral-950/75 border border-white/[0.09] backdrop-blur-2xl mb-14 text-xs font-sans font-medium text-neutral-400 shadow-glass">
          <div className="flex items-center gap-2">
            <RotateCw size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>{t.statusBar.activePrefix}: <strong className="text-white font-semibold">{currentTech.name}</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-neutral-400 font-normal">
              {t.statusBar.scrollHint}
            </span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-neutral-200">{currentTech.specs[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
