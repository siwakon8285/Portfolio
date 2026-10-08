import React, { useState } from 'react';
import { DEVELOPER_INFO } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations, LocalizedProjectItem } from '../../data/translations';
import { GlassCard } from '../ui/GlassCard';
import { MagneticButton } from '../ui/MagneticButton';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

export const ProjectsGalaxySection: React.FC = () => {
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const { language } = useLanguage();
  const t = getTranslations(language).galaxy;

  const isTh = language === 'TH';

  const badgeText = isTh ? 'ผลงานเด่น' : 'FEATURED WORK';
  const sectionTitle = isTh ? 'ผลงานและโปรเจกต์' : 'Featured Projects';
  const sectionSubtitle = isTh
    ? 'ระบบแบ็กเอนด์ประสิทธิภาพสูง สถาปัตยกรรมคลาวด์ และเว็บแอปพลิเคชันที่พัฒนาขึ้นจริง'
    : 'A collection of high-throughput backend systems, cloud architectures, and modern web platforms.';

  const filteredProjects = filterIndex === 0
    ? t.projects
    : t.projects.filter(p => p.category === t.categories[filterIndex]);

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative min-h-screen w-full bg-black py-28 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-violet-900/[0.07] blur-[170px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[500px] bg-cyan-900/[0.07] blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-sm">
            <FolderGit2 size={13} className="text-cyan-400" />
            <span className="text-xs font-sans font-semibold text-neutral-200 tracking-wider uppercase">
              {badgeText}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            {sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300/80 font-sans leading-relaxed">
            {sectionSubtitle}
          </p>

          {/* Category Filter Pills - Rounded Apple Style */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {t.categories.map((cat, idx) => (
              <button
                key={cat}
                onClick={() => setFilterIndex(idx)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-200 border ${
                  filterIndex === idx
                    ? 'bg-white text-black border-white shadow-[0_2px_12px_rgba(255,255,255,0.25)]'
                    : 'bg-white/[0.035] text-neutral-400 border-white/[0.08] hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: LocalizedProjectItem) => (
            <GlassCard
              key={project.id}
              enableTilt={false}
              spotlightColor="rgba(255, 255, 255, 0.08)"
              className="p-7 md:p-8 flex flex-col justify-between border-white/10 hover:border-white/25 rounded-3xl transition-all duration-300 group hover:shadow-2xl"
            >
              <div>
                {/* Header Badge & Live tag */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-sans font-medium border"
                    style={{
                      color: project.accentColor,
                      borderColor: `${project.accentColor}40`,
                      backgroundColor: `${project.accentColor}15`,
                    }}
                  >
                    {project.category}
                  </span>

                  {project.liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs font-sans font-medium text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Edge
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-cyan-200 transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-xs font-sans font-normal text-neutral-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.map((arch, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-3 py-1 rounded-full text-xs font-sans font-medium bg-white/[0.04] border border-white/[0.08] text-neutral-300"
                      >
                        {arch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Metrics & Actions */}
              <div>
                {/* Key Metrics Summary */}
                <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-neutral-950/60 border border-white/[0.06] mb-6 shadow-inner">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="text-[11px] font-sans font-medium text-neutral-400">
                        {m.label}
                      </span>
                      <span className="text-xs font-sans font-semibold text-white tracking-normal mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                  <MagneticButton
                    variant="primary"
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    strength={0.2}
                    className="px-5 py-2.5 text-xs font-sans font-semibold rounded-full flex-1"
                  >
                    <Github size={14} />
                    <span>{t.viewRepo}</span>
                  </MagneticButton>

                  {project.liveUrl && (
                    <MagneticButton
                      variant="secondary"
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      strength={0.2}
                      className="px-5 py-2.5 text-xs font-sans font-medium rounded-full"
                    >
                      <span>{t.edgeGateway}</span>
                      <ExternalLink size={14} />
                    </MagneticButton>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Global GitHub Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-950/70 border border-white/10 backdrop-blur-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glass">
          <div className="text-left">
            <h4 className="text-lg font-bold text-white mb-1 font-sans">
              {t.bannerTitle}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300/80 font-sans">
              {t.bannerDesc}
            </p>
          </div>

          <MagneticButton
            variant="glow"
            as="a"
            href={DEVELOPER_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            strength={0.3}
            className="px-6 py-3 text-xs font-sans font-semibold rounded-full whitespace-nowrap"
          >
            <Github size={15} />
            <span>{t.bannerButton}</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
};
