'use client';

import dynamic from 'next/dynamic';

// Dynamically import the full Portfolio client application with ssr: false to prevent any SSR hydration bugs with Three.js WebGL & Canvas
const PortfolioClient = dynamic(() => import('../App'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white font-mono text-xs">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin shadow-[0_0_15px_#22d3ee]" />
        <div className="flex items-center gap-2 text-neutral-400 uppercase tracking-widest text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Mounting Silicon & WebGL Systems...</span>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return <PortfolioClient />;
}
