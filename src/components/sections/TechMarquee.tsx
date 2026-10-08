import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface TechItemDef {
  name: string;
  category: string;
  color: string;
  svg: React.ReactNode;
}

export const TECH_ITEMS: TechItemDef[] = [
  {
    name: 'Rust',
    category: 'Systems',
    color: '#DEA584',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.834 11.966a11.966 11.966 0 1 1-23.932 0 11.966 11.966 0 0 1 23.932 0Zm-6.526 3.018a1.69 1.69 0 0 0-.256-.057c-.106 0-.213.023-.32.068l-.852.364a6.83 6.83 0 0 1-2.046.523v-1.16a1.42 1.42 0 0 0 .546-.352c.16-.182.239-.42.239-.716 0-.466-.17-.807-.512-1.023a2.33 2.33 0 0 0-1.295-.318h-1.66v3.58a6.386 6.386 0 0 1-2.045-.512l-.841-.364a.897.897 0 0 0-.33-.068 1.42 1.42 0 0 0-.261.057l-.375.148.602 1.432c.5.25 1.057.443 1.67.58a8.966 8.966 0 0 0 1.955.204c.83 0 1.58-.09 2.25-.273a7.864 7.864 0 0 0 2.057-.841l.739 1.761.375-.148-.545-1.307c.5-.238.966-.51 1.4-.818l.84.364c.103.045.21.068.32.068.09 0 .17-.02.25-.057l.375-.148-.716-1.705Zm-4.887-3.66a.807.807 0 0 1 .42.17c.103.08.16.194.16.342 0 .284-.193.42-.58.42h-1.09v-.932h1.09Z" />
      </svg>
    ),
  },
  {
    name: 'Go',
    category: 'Backend',
    color: '#00ADD8',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.811 10.231c-.047-.171-.055-.35-.023-.524.032-.175.105-.337.214-.474l1.62-2.023a.987.987 0 0 1 .424-.316c.167-.06.348-.068.52-.022l4.896 1.312c.17.046.324.137.444.264.12.126.202.284.237.455l.386 1.884a.987.987 0 0 1-.02.522c-.066.166-.174.309-.313.414l-2.04 1.53c-.14.105-.306.17-.481.187a.985.985 0 0 1-.502-.102L1.81 10.231Zm17.142-3.82c-.89.004-1.754.28-2.482.793a4.57 4.57 0 0 0-1.573 2.152 4.67 4.67 0 0 0-.056 2.66c.21.782.653 1.48 1.272 2a4.485 4.485 0 0 0 2.296.963 4.417 4.417 0 0 0 2.502-.454 4.532 4.532 0 0 0 1.8-1.786 4.707 4.707 0 0 0 .546-2.527 4.582 4.582 0 0 0-1.125-2.532 4.444 4.444 0 0 0-3.18-1.269Zm-3.14 9.873a.856.856 0 0 1 .012-.452.84.84 0 0 1 .238-.387l1.764-1.763a.85.85 0 0 1 .411-.231.86.86 0 0 1 .452.012l4.898 1.311a.846.846 0 0 1 .387.237c.102.118.17.26.196.412l.386 1.885c.035.152.02.31-.044.453a.84.84 0 0 1-.274.359l-2.038 1.53a.857.857 0 0 1-.482.186.867.867 0 0 1-.5-.101l-5.408-3.452Z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Full-Stack',
    color: '#3178C6',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0Zm10.05 13.92h-2.73V20H6.54v-6.08H3.8V11.6h7.75v2.32Zm6.42 1.45c.78.29 1.43.73 1.83 1.25.4.52.56 1.13.56 1.83 0 .84-.33 1.57-.96 2.06-.63.49-1.52.74-2.67.74-.96 0-1.85-.18-2.65-.54v-2.3c.78.53 1.63.82 2.45.82.52 0 .93-.11 1.18-.32.25-.22.37-.5.37-.83 0-.3-.1-.53-.3-.72-.2-.19-.58-.37-1.12-.55-1.04-.36-1.78-.8-2.2-1.3-.43-.51-.64-1.13-.64-1.88 0-.84.32-1.53.94-2.02.63-.48 1.49-.73 2.58-.73.86 0 1.67.16 2.41.48l-.75 2.08a4.2 4.2 0 0 0-1.84-.45c-.47 0-.82.1-.1.05.28-.23.19-.34.42-.34.7 0 .28.1.5.3.69.2.19.55.36 1.05.53Z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Backend & Data',
    color: '#3776AB',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.8v.825H3.914S0 5.79 0 11.905c0 6.114 3.42 5.9 3.42 5.9h2.04v-2.875s-.11-3.42 3.36-3.42h5.77s3.25.053 3.25-3.15V3.15S18.3 0 11.914 0Zm-3.23 1.842a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.75h-5.8v-.825h8.092S24 18.21 24 12.095c0-6.114-3.42-5.9-3.42-5.9h-2.04v2.875s.11 3.42-3.36 3.42H9.41s-3.25-.053-3.25 3.15v5.21S5.7 24 12.086 24Zm3.23-1.842a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1Z" />
      </svg>
    ),
  },
  {
    name: 'Java',
    category: 'Enterprise',
    color: '#EA2D2E',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.85 16.34s-.54.34-.14.47c1.65.51 3.16.42 5.09.23 0 0 .57.06.67-.18.1-.23-.42-.39-.42-.39s-1.87.16-3.7-.02c-1.43-.15-1.5-.11-1.5-.11Zm-.22 2.05s-.47.45.16.55c1.84.3 4.25.32 6.84-.21 0 0 .42.02.5-.22.07-.22-.36-.35-.36-.35s-2.1.28-4.52.2c-2.07-.07-2.62.03-2.62.03Zm5.78-7.38c.67 1.34-1.2 2.45-1.2 2.45s1.77-.96 1.1-2.17c-.64-1.15-2.06-1.74-3.05-3.32-.82-1.32-.3-2.48-.3-2.48s.16.71 1.14 1.54c1.17 1 1.76 2.87 2.31 3.98Zm-6.57 7.75s-.42.34.23.47c1.78.36 4.34.33 6.94-.13 0 0 .57.04.64-.2-.03-.23-.4-.36-.4-.36s-2.1.27-4.63.22c-2.33-.05-2.78 0-2.78 0ZM20.7 18.5s.45.72-2.11 1.34c-3.15.76-8.8.84-12.78.04-1.34-.27-2.61-.7-1.81-1.51.7-.71 2.36-.67 3.75-.54.54.05 1.07.12 1.57.19-2.19-.68-5.32.2-5.74 1.19-.53 1.25 1.83 2.05 3.32 2.34 4.09.8 9.53.64 12.98-.36 2.33-.67 2.33-1.63 2.33-1.63l-1.51-1.03v-.04Zm-2.79-4.88c-.68-.21-1.42.06-2.06.31-1.28.49-2.52 1.08-3.9 1.24-.3.03-.61.05-.91.05-1.28 0-2.51-.34-3.7-.82-.24-.1-.53-.19-.77-.1-.28.11-.3.44-.06.63.85.67 1.95 1.09 3.02 1.3 1.15.23 2.33.22 3.49.03 1.51-.25 2.93-.89 4.39-1.36.42-.14.93-.24 1.2-.6.23-.33-.3-.55-.7-.68Zm-4.9-7.25c.34.8-.46 1.76-.46 1.76s.93-.81.63-1.66c-.3-1.04-1.61-1.68-1.44-3.05 0 0-.5 1.14.36 2.1.66.72.67 1.14.91.85Z" />
      </svg>
    ),
  },
  {
    name: 'React',
    category: 'Frontend',
    color: '#61DAFB',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.06a2.94 2.94 0 1 0 0 5.88 2.94 2.94 0 0 0 0-5.88Zm0-7.06C5.37 2 0 5.58 0 10c0 3.39 3.2 6.27 7.74 7.37L6.5 21.5a.75.75 0 0 0 1.2.68l4.47-3.41c6.51.57 11.83-2.9 11.83-7.27 0-4.42-5.37-8-12-8Zm0 14.5c-5.8 0-10.5-3.13-10.5-7s4.7-7 10.5-7 10.5 3.13 10.5 7-4.7 7-10.5 7Z" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    category: 'Frontend & Edge',
    color: '#FFFFFF',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.4 17.76-6.12-8.04V17h-1.8V7h1.8l6.12 8.04V7h1.8v10.76h-1.8Z" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: '#38BDF8',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8Zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12Z" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    color: '#4169E1',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm3.712 17.524c-.456.24-1.02.39-1.674.45-.636.06-1.32.06-2.028-.012a6.38 6.38 0 0 1-2.052-.564 4.14 4.14 0 0 1-1.56-1.392c-.396-.6-.588-1.368-.576-2.28.024-.924.276-1.788.756-2.58a7.84 7.84 0 0 1 1.944-2.148 10.99 10.99 0 0 1 2.808-1.536c1.032-.384 2.1-.576 3.192-.576.468 0 .888.036 1.26.108.372.072.696.18.972.324l-.828 1.908c-.204-.12-.468-.216-.792-.288a4.92 4.92 0 0 0-.972-.108c-.804 0-1.572.144-2.304.432a7.6 7.6 0 0 0-2.04 1.164c-.588.468-1.044 1.056-1.368 1.764-.324.708-.456 1.488-.396 2.34.036.564.18 1.044.432 1.44.252.396.6.708 1.044.936.444.228.984.36 1.62.396.636.036 1.344-.012 2.124-.144v-3.708h-2.16V11.22h4.356v6.304Z" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    category: 'In-Memory Cache',
    color: '#FF4438',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.575 14.15 12.44 9.176a.91.91 0 0 0-.88 0l-9.136 4.974a.89.89 0 0 0 0 1.572l9.135 4.974a.91.91 0 0 0 .88 0l9.136-4.974a.89.89 0 0 0 0-1.572ZM12 11.23l7.025 3.824L12 18.878l-7.025-3.824L12 11.23Z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'Containerization',
    color: '#2496ED',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.714h2.12a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185M23.73 9.77a.64.64 0 0 0-.58-.33h-3.41a.63.63 0 0 0-.61.47c-.28 1.08-.88 2.06-1.74 2.82-.24.21-.49.39-.77.54h-13.8a.63.63 0 0 0-.63.63c0 3.92 3.18 7.1 7.1 7.1 5.3 0 9.74-3.46 11.23-8.31.75-.41 1.44-.99 2.01-1.7.35-.44.42-.9.2-1.22" />
      </svg>
    ),
  },
  {
    name: 'Nginx',
    category: 'Edge Gateway',
    color: '#009639',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0 1.5 6v12L12 24l10.5-6V6L12 0ZM7.5 16.5V7.5l9 9V7.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'Ubuntu Linux',
    category: 'Self-Hosted Server',
    color: '#E95420',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0 21.6A9.6 9.6 0 1 1 21.6 12 9.6 9.6 0 0 1 12 21.6Zm-1.8-6.12a2.28 2.28 0 1 1-2.28-2.28 2.28 2.28 0 0 1 2.28 2.28Zm7.56-4.56a2.28 2.28 0 1 1-2.28-2.28 2.28 2.28 0 0 1 2.28 2.28Zm-7.56-4.56A2.28 2.28 0 1 1 7.92 4.08a2.28 2.28 0 0 1 2.28 2.28Z" />
      </svg>
    ),
  },
];

export const TechMarquee: React.FC = () => {
  const { language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const title = language === 'TH' ? 'เทคโนโลยีและเครื่องมือที่เคยใช้งาน' : 'Technologies & Tools Used';
  const subtitle = language === 'TH'
    ? 'เฟรมเวิร์ก ระบบฐานข้อมูล และเครื่องมือที่ผ่านการใช้งานจริงในการพัฒนาระบบ'
    : 'Battle-tested technologies and toolchains leveraged across high-throughput production environments.';

  // 3D Perspective Scaling Listener (requestAnimationFrame measuring distance from viewport center)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;

    const updatePerspective = () => {
      const cards = track.querySelectorAll<HTMLElement>('.tech-perspective-card');
      const screenWidth = window.innerWidth;
      const screenCenterX = screenWidth / 2;
      // Normalization distance: distance from center to screen edge
      const maxDist = screenCenterX * 0.95;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // Skip cards far out of view
        if (rect.right < -60 || rect.left > screenWidth + 60) return;

        const cardCenterX = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenterX - screenCenterX);
        const normDist = Math.min(1, Math.max(0, dist / maxDist));

        // Balanced scaling: Center: scale(1.18), edges: scale(0.85) to prevent collision
        const scale = 1.18 - 0.33 * Math.pow(normDist, 1.2);
        // Center: opacity 1.0, edges: opacity 0.45
        const opacity = 1.0 - 0.55 * Math.pow(normDist, 1.2);
        // Subtle 3D perspective translation Z depth
        const tz = (1 - normDist) * 25;

        card.style.transform = `perspective(800px) translateZ(${tz.toFixed(1)}px) scale(${scale.toFixed(3)})`;
        card.style.opacity = opacity.toFixed(3);
        // Elevate center card z-index above neighboring cards
        card.style.zIndex = normDist < 0.25 ? '20' : '10';
      });

      animId = requestAnimationFrame(updatePerspective);
    };

    animId = requestAnimationFrame(updatePerspective);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Quadruple items for perfectly seamless infinite looping marquee
  const marqueeItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section
      id="technologies"
      aria-label="Technologies and Tools Used"
      className="relative w-full py-24 bg-black overflow-hidden border-y border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-3 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-sans font-medium text-neutral-300 uppercase tracking-wide">
            {language === 'TH' ? 'ทักษะ & เครื่องมือ' : 'Core Technologies'}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 font-sans">
          {title}
        </h2>
        <p className="text-sm font-normal text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track with generous vertical padding & Apple 3D depth fade masks */}
      <div
        ref={trackRef}
        className="relative w-full overflow-hidden py-14 sm:py-16 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      >
        <div className="flex gap-8 sm:gap-14 py-4 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              className="tech-perspective-card group relative flex items-center gap-3.5 px-5 py-3.5 mx-1 rounded-2xl bg-neutral-950/80 border border-white/[0.08] hover:border-white/25 backdrop-blur-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)] cursor-default select-none will-change-transform"
              style={{
                transformOrigin: 'center center',
              }}
            >
              <div
                className="transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                style={{ color: tech.color }}
              >
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-sans font-semibold text-white tracking-normal group-hover:text-cyan-200 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] font-sans font-medium text-neutral-400">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
