import React from 'react';
import { HeroBackgroundParticles } from '../canvas/HeroBackgroundParticles';
import { MagneticButton } from '../ui/MagneticButton';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowDown, Github, MapPin, Globe, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const { language } = useLanguage();

  const isTh = language === 'TH';

  const badgeText = isTh ? 'แฟ้มสะสมผลงาน 2026' : 'PORTFOLIO 2026';
  const roleText = isTh ? 'นักพัฒนาฟูลสแต็กและสถาปัตยกรรมระบบ' : 'Full-Stack & Systems Developer';
  const bioText = isTh
    ? 'มุ่งมั่นพัฒนาเว็บแอปพลิเคชันและระบบที่มีประสิทธิภาพสูง ปลอดภัย และมอบประสบการณ์การใช้งานที่ประณีต'
    : 'Crafting resilient backend services, high-throughput systems, and polished digital experiences with meticulous attention to detail.';
  const ctaProjects = isTh ? 'ดูผลงานทั้งหมด' : 'View Projects';
  const ctaGithub = isTh ? 'ดูโปรไฟล์ GitHub' : 'GitHub Profile';
  const locationText = isTh ? 'กรุงเทพมหานคร' : 'Bangkok, Thailand';
  const statusText = isTh ? 'พร้อมรับโปรเจกต์ใหม่' : 'Available for opportunities';

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative min-h-[92vh] w-full flex items-center justify-center px-4 sm:px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-black"
    >
      {/* Subtle 3D WebGL Ambient Dust */}
      <HeroBackgroundParticles />

      {/* Atmospheric Soft Diffused VisionOS Ambient Backlight */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-sky-500/[0.06] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[450px] bg-violet-500/[0.05] blur-[170px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Human-Centric Biography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Sleek Apple Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-xs font-sans font-semibold tracking-wider text-neutral-200 uppercase">
              {badgeText}
            </span>
            <span className="text-neutral-400 text-xs">•</span>
            <span className="text-xs font-sans font-medium text-neutral-300">
              {DEVELOPER_INFO.domain}
            </span>
          </div>

          {/* Monumental Personal Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 select-none font-sans leading-[1.08]">
            <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              {DEVELOPER_INFO.name}
            </span>
          </h1>

          {/* Clean Rounded Subhead */}
          <p className="text-lg sm:text-2xl font-medium text-cyan-300/90 mb-5 font-sans tracking-tight">
            {roleText}
          </p>

          {/* Warm Personal Summary */}
          <p className="text-sm sm:text-base text-neutral-300/80 max-w-xl mb-8 font-sans leading-relaxed">
            {bioText}
          </p>

          {/* Prominent Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-10">
            <MagneticButton
              variant="primary"
              strength={0.3}
              onClick={onExploreClick}
              className="px-7 py-3.5 text-sm font-semibold rounded-full shadow-[0_4px_24px_rgba(255,255,255,0.18)]"
            >
              <span>{ctaProjects}</span>
              <ArrowDown size={15} />
            </MagneticButton>

            <MagneticButton
              variant="secondary"
              as="a"
              href={DEVELOPER_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              strength={0.3}
              className="px-7 py-3.5 text-sm font-medium rounded-full"
            >
              <Github size={15} />
              <span>{ctaGithub}</span>
            </MagneticButton>
          </div>

          {/* Quick Meta Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-6 border-t border-white/[0.08] text-xs font-sans text-neutral-400">
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-neutral-400" />
              <span>{locationText}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe size={13} className="text-emerald-400" />
              <span>{statusText}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Apple-Style Rounded Portrait Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">
            {/* Ambient Diffuse Portrait Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 to-violet-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Frosted Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-neutral-950/70 border border-white/15 p-2 backdrop-blur-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.015]">
              <div className="relative w-[280px] sm:w-[320px] md:w-[350px] aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
                <img
                  src="/profile.png"
                  alt="Siwakorn Bunde"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle Apple gradient bottom shadow */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

                {/* Floating pill badge on photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                    <span className="text-[11px] font-sans font-semibold text-white tracking-normal">
                      Siwakorn Bunde
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-sans text-neutral-300">
                    <Sparkles size={11} className="text-cyan-400" />
                    <span>Systems & Web</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
