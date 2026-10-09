import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Files,
  Search,
  GitBranch,
  Play,
  Package,
  Settings,
  ChevronDown,
  ChevronRight,
  FileCode2,
  X,
  Plane,
  Clock,
  Sparkles
} from 'lucide-react';

export const MacOsProjectWindow: React.FC = () => {
  const { language } = useLanguage();
  const isTh = language === 'TH';

  // 4-state self-looping state machine
  // State 1: 'code' (0s - 3.5s)
  // State 2: 'terminal' (3.5s - 5.5s)
  // State 3: 'preview' (5.5s - 10.5s, exactly 5s hold)
  // State 4: reset & loop
  const [loopCount, setLoopCount] = useState<number>(0);
  const [activeView, setActiveView] = useState<'editor' | 'preview'>('editor');
  const [typedCode, setTypedCode] = useState<string>('');
  const [terminalPhase, setTerminalPhase] = useState<'idle' | 'typing' | 'running' | 'ready'>('idle');

  const line1 = 'const transit = await xfly.dispatch({ origin: "BKK", destination: "CNX" });';
  const line2 = 'return <XFlyDashboard data={transit} latency="2.8ms" status="active" />;';
  const targetCode = `${line1}\n    ${line2}`;

  useEffect(() => {
    // Reset state for new cycle
    setActiveView('editor');
    setTypedCode('');
    setTerminalPhase('idle');

    // --- State 1: Code Typing (0s - 3.5s) ---
    let charIdx = 0;
    const typeSpeed = 22; // ~3.1s total typing duration
    const typeInterval = setInterval(() => {
      charIdx++;
      setTypedCode(targetCode.slice(0, charIdx));
      if (charIdx >= targetCode.length) {
        clearInterval(typeInterval);
      }
    }, typeSpeed);

    // --- State 2: Terminal Run (3.5s - 5.5s) ---
    const tTerminalStart = setTimeout(() => {
      setTerminalPhase('typing');
    }, 3500);

    const tTerminalRun = setTimeout(() => {
      setTerminalPhase('running');
    }, 4100);

    const tTerminalReady = setTimeout(() => {
      setTerminalPhase('ready');
    }, 4700);

    // --- State 3: Live Web Preview (5.5s - 10.5s, 5000ms hold) ---
    const tPreview = setTimeout(() => {
      setActiveView('preview');
    }, 5500);

    // --- State 4: Seamless Restart Loop (10.5s) ---
    const tLoop = setTimeout(() => {
      setLoopCount((prev) => prev + 1);
    }, 10500);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(tTerminalStart);
      clearTimeout(tTerminalRun);
      clearTimeout(tTerminalReady);
      clearTimeout(tPreview);
      clearTimeout(tLoop);
    };
  }, [loopCount, targetCode]);

  return (
    <section
      id="projects"
      aria-label="Architecture & Projects Showcase"
      className="relative min-h-screen w-full bg-black py-28 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[550px] bg-violet-900/[0.06] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[550px] bg-sky-900/[0.06] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-sm">
            <Sparkles size={13} className="text-cyan-400" />
            <span className="text-xs font-sans font-semibold text-neutral-200 tracking-wider uppercase">
              {isTh ? 'กระบวนการพัฒนาระบบจริง' : 'DEVELOPER WORKFLOW SIMULATION'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 font-sans">
            {isTh ? 'สถาปัตยกรรมและผลงาน' : 'Architecture & Projects'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300/80 font-sans leading-relaxed">
            {isTh
              ? 'จำลองขั้นตอนการพัฒนาจริง ผ่านสภาพแวดล้อม VS Code พร้อมเทอร์มินัลและพรีวิวหน้าเว็บแอปพลิเคชัน'
              : 'A complete developer workflow simulation inside a production VS Code environment with live terminal & web preview.'}
          </p>
        </div>

        {/* VS Code Studio Window: Strict Fixed Dimensions (Zero Layout Shifts) */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0c0c12] shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden h-[580px] select-none">
          {/* Top macOS Window Titlebar */}
          <div className="flex items-center justify-between px-4 h-9 border-b border-white/[0.08] bg-[#14141c]/90">
            {/* macOS Window Controls 🔴 🟡 🟢 */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/70 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/70 shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/70 shadow-sm" />
            </div>

            {/* Title */}
            <div className="text-xs font-sans text-neutral-300 font-medium tracking-tight">
              x-fly-transit — Visual Studio Code
            </div>

            {/* Spacer for symmetrical balance (No duplicate GitHub button) */}
            <div className="w-12" />
          </div>

          {/* Main Container Area: Fixed Height with Smooth Cross-Fade Layers */}
          <div className="relative h-[541px] w-full overflow-hidden">
            {/* =========================================================================
                LAYER 1: VS CODE IDE (Activity Bar + Explorer Sidebar + Editor + Terminal)
                ========================================================================= */}
            <div
              className={`absolute inset-0 flex transition-opacity duration-700 ease-in-out ${
                activeView === 'editor' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Activity Bar (Thin 44px Column) */}
              <div className="w-11 bg-[#101017] border-r border-white/[0.06] flex flex-col items-center justify-between py-3 flex-shrink-0">
                <div className="flex flex-col items-center gap-5 text-neutral-500">
                  <div className="relative cursor-pointer text-white">
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-r" />
                    <Files size={18} />
                  </div>
                  <Search size={18} className="hover:text-neutral-300 transition-colors cursor-pointer" />
                  <GitBranch size={18} className="hover:text-neutral-300 transition-colors cursor-pointer" />
                  <Play size={18} className="hover:text-neutral-300 transition-colors cursor-pointer" />
                  <Package size={18} className="hover:text-neutral-300 transition-colors cursor-pointer" />
                </div>
                <div className="text-neutral-500">
                  <Settings size={18} className="hover:text-neutral-300 transition-colors cursor-pointer" />
                </div>
              </div>

              {/* Explorer Sidebar (~180px Width, hidden on mobile) */}
              <div className="w-48 bg-[#13131b] border-r border-white/[0.06] hidden md:flex flex-col text-xs font-sans flex-shrink-0">
                <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold px-4 py-2.5 border-b border-white/[0.04]">
                  Explorer: X-Fly-Transit
                </div>
                <div className="p-2 space-y-0.5 text-neutral-400">
                  {/* Folder: src */}
                  <div className="flex items-center gap-1.5 px-2 py-1 text-neutral-300 cursor-pointer">
                    <ChevronDown size={13} className="text-neutral-500" />
                    <span className="font-medium">src</span>
                  </div>
                  {/* Folder: components */}
                  <div className="flex items-center gap-1.5 pl-6 py-1 text-neutral-400 cursor-pointer">
                    <ChevronRight size={13} className="text-neutral-600" />
                    <span>components</span>
                  </div>
                  {/* Active File: x-fly-app.tsx */}
                  <div className="flex items-center gap-2 pl-7 py-1 rounded bg-white/[0.08] text-cyan-300 font-medium cursor-pointer">
                    <FileCode2 size={13} className="text-cyan-400" />
                    <span>x-fly-app.tsx</span>
                  </div>
                  {/* Other Files */}
                  <div className="flex items-center gap-2 px-2 py-1 text-neutral-400 pt-2 cursor-pointer hover:text-white">
                    <span className="w-3 text-center text-[11px] text-amber-400">JS</span>
                    <span>package.json</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-neutral-400 cursor-pointer hover:text-white">
                    <span className="w-3 text-center text-[11px] text-violet-400">⚡</span>
                    <span>vite.config.ts</span>
                  </div>
                </div>
              </div>

              {/* Main Code Editor & Integrated Terminal Split Pane */}
              <div className="flex-1 flex flex-col h-full bg-[#0a0a0f] overflow-hidden">
                {/* Editor Section (~65% Height) */}
                <div className="h-[62%] flex flex-col border-b border-white/[0.08]">
                  {/* Tab Bar */}
                  <div className="h-8 bg-[#111118] flex items-center px-2 border-b border-white/[0.04] text-xs">
                    <div className="bg-[#0a0a0f] text-neutral-200 px-3 py-1.5 text-xs rounded-t flex items-center gap-2 border-t-2 border-cyan-400 font-mono">
                      <FileCode2 size={12} className="text-cyan-400" />
                      <span>x-fly-app.tsx</span>
                      <X size={11} className="text-neutral-500 hover:text-white cursor-pointer ml-1" />
                    </div>
                  </div>

                  {/* Breadcrumb Bar */}
                  <div className="h-6 px-4 flex items-center text-[11px] text-neutral-500 font-mono border-b border-white/[0.03] bg-[#0c0c13]/40">
                    <span>src</span>
                    <span className="mx-1.5 text-neutral-600">&gt;</span>
                    <span>components</span>
                    <span className="mx-1.5 text-neutral-600">&gt;</span>
                    <span className="text-neutral-300">x-fly-app.tsx</span>
                  </div>

                  {/* Code Editor Body */}
                  <div className="flex-1 p-4 font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-300 overflow-hidden space-y-1">
                    <div>
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">1</span>
                      <span className="text-pink-400">import</span> &#123; xfly &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">'@xfly/transit-core'</span>;
                    </div>
                    <div>
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">2</span>
                      <span className="text-pink-400">import</span> &#123; XFlyDashboard &#125; <span className="text-pink-400">from</span> <span className="text-emerald-300">'@/components/XFlyDashboard'</span>;
                    </div>
                    <div className="text-neutral-600 select-none">
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">3</span>
                    </div>
                    <div>
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">4</span>
                      <span className="text-pink-400">export default async function</span> <span className="text-amber-300">TransitRoute</span>() &#123;
                    </div>
                    <div>
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">5</span>
                      <span className="text-neutral-500 italic">{'  // Compile-time verified dispatch pipeline (0 unwrap)'}</span>
                    </div>

                    {/* Active Typing Lines */}
                    <div className="bg-cyan-500/[0.04] rounded px-1 -mx-1 py-0.5">
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">6</span>
                      <span className="text-white">
                        {typedCode.includes('\n') ? typedCode.split('\n')[0] : typedCode}
                      </span>
                      {!typedCode.includes('\n') && (
                        <span className="inline-block w-2 h-3.5 bg-cyan-400 align-middle ml-1 animate-pulse" />
                      )}
                    </div>

                    {typedCode.includes('\n') && (
                      <div className="bg-cyan-500/[0.04] rounded px-1 -mx-1 py-0.5">
                        <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">7</span>
                        <span className="text-white">{typedCode.split('\n')[1]}</span>
                        <span className="inline-block w-2 h-3.5 bg-cyan-400 align-middle ml-1 animate-pulse" />
                      </div>
                    )}

                    <div>
                      <span className="text-neutral-600 select-none mr-4 text-xs w-4 inline-block text-right">8</span>
                      <span className="text-pink-400">&#125;</span>
                    </div>
                  </div>
                </div>

                {/* Integrated Bottom Terminal (~38% Height) */}
                <div className="h-[38%] flex flex-col bg-[#07070c] overflow-hidden">
                  {/* Terminal Tab Bar */}
                  <div className="h-7 bg-[#101016] px-3 flex items-center justify-between text-[11px] font-sans border-b border-white/[0.06]">
                    <div className="flex items-center gap-4 text-neutral-400">
                      <span className="hover:text-white cursor-pointer">PROBLEMS 0</span>
                      <span className="hover:text-white cursor-pointer">OUTPUT</span>
                      <span className="hover:text-white cursor-pointer">DEBUG CONSOLE</span>
                      <span className="text-white font-medium border-b-2 border-cyan-400 pb-0.5 flex items-center gap-1.5 cursor-pointer">
                        TERMINAL
                        <span className="text-[10px] text-neutral-400">1: zsh</span>
                      </span>
                    </div>
                  </div>

                  {/* Terminal Execution Output */}
                  <div className="flex-1 p-3 font-mono text-xs leading-relaxed text-neutral-300 overflow-hidden space-y-1">
                    {/* Prompt */}
                    <div className="flex items-center gap-1.5 text-neutral-300">
                      <span className="text-cyan-400 font-semibold">siwakorn@macbook</span>
                      <span className="text-neutral-500">x-fly-transit %</span>
                      {terminalPhase === 'idle' && (
                        <span className="inline-block w-2 h-3.5 bg-neutral-400 align-middle animate-pulse" />
                      )}
                      {terminalPhase !== 'idle' && (
                        <span className="text-white font-semibold">npm run dev</span>
                      )}
                    </div>

                    {/* Build logs */}
                    {(terminalPhase === 'running' || terminalPhase === 'ready') && (
                      <div className="text-neutral-400 text-[11px] leading-tight space-y-0.5">
                        <div>&gt; x-fly-transit@1.0.0 dev</div>
                        <div>&gt; vite --host</div>
                      </div>
                    )}

                    {terminalPhase === 'ready' && (
                      <div className="text-neutral-300 text-[11px] leading-tight pt-1 pl-3 border-l-2 border-emerald-500/60 my-1 space-y-0.5">
                        <div className="text-emerald-400 font-semibold flex items-center gap-2">
                          <span>➜</span>
                          <span>Local:</span>
                          <span className="text-white underline underline-offset-2 decoration-emerald-400">
                            http://localhost:5173/
                          </span>
                        </div>
                        <div className="text-neutral-400">
                          <span>➜</span> Network: use --host to expose
                        </div>
                        <div className="text-emerald-400 font-medium">
                          ✔ ready in 142ms
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                LAYER 2: LIVE WEB PREVIEW (Embedded Browser Mockup - 5s Hold)
                ========================================================================= */}
            <div
              className={`absolute inset-0 flex flex-col transition-opacity duration-700 ease-in-out bg-[#06060a] ${
                activeView === 'preview' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              {/* Browser Address Bar */}
              <div className="h-9 bg-[#111118] border-b border-white/[0.08] px-4 flex items-center justify-between text-xs flex-shrink-0">
                <div className="flex items-center gap-2 max-w-sm w-full px-3 py-1 rounded-full bg-black/60 border border-white/10 text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  <span className="text-[11px] font-mono text-neutral-300 truncate">
                    https://localhost:5173/transit/bkk-cnx
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-sans text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-mono font-medium">p95: 2.8ms</span>
                </div>
              </div>

              {/* Browser Viewport: X-Fly Live UI */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#090910] via-black to-[#090910]">
                {/* Brand Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shadow-sm">
                      <Plane size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight text-white font-sans">
                        X-FLY TRANSIT NETWORK
                      </div>
                      <div className="text-[11px] font-sans text-neutral-400">
                        {isTh ? 'โครงข่ายกระจายเส้นทางความเร็วสูง' : 'High-Speed Urban Transit Dispatcher'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-sans font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{isTh ? 'พร้อมให้บริการ • 200 OK' : 'Active Service • 200 OK'}</span>
                  </div>
                </div>

                {/* Main Route Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#11111a]/80 border border-white/10 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Origin */}
                    <div className="md:col-span-4 text-left">
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-cyan-400 uppercase">
                        {isTh ? 'ต้นทาง' : 'ORIGIN'}
                      </span>
                      <div className="text-3xl font-extrabold text-white font-sans mt-0.5">
                        BKK
                      </div>
                      <div className="text-xs text-neutral-400 font-sans mt-0.5">
                        Bangkok Suvarnabhumi
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-2 font-mono">
                        <Clock size={12} className="text-neutral-500" />
                        <span>08:30 AM (UTC+7)</span>
                      </div>
                    </div>

                    {/* Route Vector Line */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center text-center">
                      <div className="text-[11px] font-mono text-neutral-400 mb-1.5">
                        1h 10m • Non-stop
                      </div>
                      <div className="relative w-full flex items-center justify-center">
                        <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/40 via-white/40 to-violet-500/40" />
                        <div className="absolute w-6 h-6 rounded-full bg-[#161622] border border-white/20 flex items-center justify-center text-white shadow-md">
                          <Plane size={11} className="rotate-90 text-cyan-300" />
                        </div>
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400 mt-1.5">
                        Verified Dispatch Path
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="md:col-span-4 text-left md:text-right">
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-violet-400 uppercase">
                        {isTh ? 'ปลายทาง' : 'DESTINATION'}
                      </span>
                      <div className="text-3xl font-extrabold text-white font-sans mt-0.5">
                        CNX
                      </div>
                      <div className="text-xs text-neutral-400 font-sans mt-0.5">
                        Chiang Mai International
                      </div>
                      <div className="flex items-center md:justify-end gap-1.5 text-xs text-neutral-400 mt-2 font-mono">
                        <Clock size={12} className="text-neutral-500" />
                        <span>09:40 AM (UTC+7)</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Invariants */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 mt-4 border-t border-white/[0.06] text-xs font-sans">
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <span className="text-[10px] text-neutral-400 block">p95 Latency</span>
                      <span className="font-semibold text-white">2.8 ms</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <span className="text-[10px] text-neutral-400 block">Runtime Core</span>
                      <span className="font-semibold text-white">Rust Axum</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <span className="text-[10px] text-neutral-400 block">Database</span>
                      <span className="font-semibold text-white">PostgreSQL 18</span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                      <span className="text-[10px] text-neutral-400 block">Edge Shield</span>
                      <span className="font-semibold text-emerald-400">Cloudflare Warp</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Status Bar */}
                <div className="flex items-center justify-between text-xs text-neutral-400 font-sans pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>WebSocket Telemetry Active • Tokio Runtime 16 Threads</span>
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Auto-looping workflow...
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
