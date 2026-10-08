import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MacroArchitectureScene } from '../canvas/MacroArchitectureScene';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../data/translations';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Github, Shield, Gauge, CheckCircle2, Server, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const MacroDeepDiveSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { language } = useLanguage();
  const t = getTranslations(language).macro;

  useEffect(() => {
    if (!containerRef.current || !pinTargetRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinTargetRef.current,
        scrub: 1.2,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Determine stage based on scroll progress
  let activeNodeIndex = 0;
  if (scrollProgress > 0.75) {
    activeNodeIndex = 3;
  } else if (scrollProgress > 0.5) {
    activeNodeIndex = 2;
  } else if (scrollProgress > 0.25) {
    activeNodeIndex = 1;
  }

  const currentStage = t.stages[activeNodeIndex];
  const currentNode = t.nodes[activeNodeIndex];

  return (
    <section
      id="macro-deep-dive"
      ref={containerRef}
      aria-label="Macro Architecture Deep Dive"
      className="relative w-full h-[300vh] bg-black"
    >
      {/* Pinned Viewport */}
      <div
        ref={pinTargetRef}
        className="w-full h-screen sticky top-0 flex flex-col justify-between overflow-hidden px-4 md:px-8 py-8"
      >
        {/* Ambient atmospheric backlight */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-cyan-900/15 blur-[160px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[400px] bg-orange-950/15 blur-[150px] rounded-full" />
        </div>

        {/* Top Cinematic Apple Subtitle */}
        <div className="relative z-10 max-w-4xl mx-auto text-center pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-2 shadow-sm">
            <Server size={13} className="text-orange-400" />
            <span className="text-xs font-sans font-medium text-neutral-300">
              {t.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 font-sans">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300/80 font-sans max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3D WebGL Canvas Layer */}
        <div className="absolute inset-0 z-0">
          <MacroArchitectureScene
            scrollProgress={scrollProgress}
            nodeLabels={{
              edge: t.nodes[0].highlight,
              gateway: t.nodes[1].highlight,
              services: t.nodes[2].highlight,
              persistence: t.nodes[3].highlight,
            }}
          />
        </div>

        {/* Architecture Dynamic HUD Cards (Left & Right) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 items-end mb-16 pointer-events-none">
          {/* Left HUD: Current Node Details */}
          <div className="md:col-span-7 pointer-events-auto">
            <GlassCard
              className="p-5 md:p-6 border-white/15 rounded-3xl"
              spotlightColor="rgba(56, 189, 248, 0.15)"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {currentNode.highlight}
                </span>
                <span className="text-xs font-sans font-medium text-neutral-400">
                  {t.hud.stepOf} {activeNodeIndex + 1} {t.hud.of} 4
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 font-sans">
                {currentStage.title}
              </h3>
              <p className="text-xs md:text-sm text-cyan-200/90 font-sans font-medium mb-3">
                {currentStage.subtitle}
              </p>

              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-4 font-sans">
                {currentNode.specs}
              </p>

              {/* Architectural Metrics Badges */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-300">
                  <Shield size={14} className="text-emerald-400 flex-shrink-0" />
                  <span className="truncate">0 unwrap()</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-300">
                  <Gauge size={14} className="text-cyan-400 flex-shrink-0" />
                  <span className="truncate">&lt; 5ms p95</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-sans font-medium text-neutral-300">
                  <CheckCircle2 size={14} className="text-violet-400 flex-shrink-0" />
                  <span className="truncate">OWASP 2025</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right HUD: End-to-End Pipeline Quick Map & Direct GitHub Inspect */}
          <div className="md:col-span-5 flex flex-col gap-3 pointer-events-auto">
            <GlassCard className="p-4 md:p-5 border-white/15 rounded-3xl">
              <div className="text-xs font-sans font-medium text-neutral-400 mb-2.5">
                {t.hud.pipelineTitle}
              </div>
              <div className="space-y-2">
                {t.nodes.map((flow, fIdx) => (
                  <div
                    key={flow.id}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-sans font-medium transition-colors ${
                      fIdx === activeNodeIndex
                        ? 'bg-white/15 text-white border border-white/20 shadow-sm'
                        : 'bg-white/[0.02] text-neutral-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="font-semibold text-white">{flow.name.split('. ')[1]}</span>
                    </div>
                    <span className="text-xs text-neutral-400 font-normal">{flow.role.split(' ')[0]}</span>
                  </div>
                ))}
              </div>

              {/* Direct Inspect on GitHub CTA */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-300 font-sans font-medium">
                  {t.hud.inspectPrompt}
                </span>
                <MagneticButton
                  variant="primary"
                  as="a"
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  strength={0.25}
                  className="px-4 py-2 text-xs font-sans font-semibold rounded-full"
                >
                  <Github size={13} />
                  <span>{t.hud.inspectButton}</span>
                  <ArrowRight size={13} />
                </MagneticButton>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
