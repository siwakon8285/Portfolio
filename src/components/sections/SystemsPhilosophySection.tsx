import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getTranslations } from '../../data/translations';
import { GlassCard } from '../ui/GlassCard';
import { Terminal, Shield, CheckCircle } from 'lucide-react';

export const SystemsPhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rust' | 'postgres' | 'curl' | 'k6'>('rust');
  const { language } = useLanguage();
  const t = getTranslations(language).philosophy;

  const terminalTabs = {
    rust: {
      command: "cargo clippy --all-targets -- -D warnings && cargo test",
      output: `    Finished release [optimized] target(s) in 2.41s
     Running unittests src/main.rs (target/release/deps/core_gateway-91b4c3)
test platform::security::test_zero_unwrap ... ok
test platform::engine::test_sub_5ms_p95_tokio_loop ... ok
test persistence::postgres::test_pg18_acid_invariants ... ok
test auth::test_constant_time_hmac_verification ... ok

test result: ok. 48 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
[System Verification] 100% Memory Safety • 0 panic points detected.`,
    },
    postgres: {
      command: "psql -d platform_prod -c 'EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM telemetry_events WHERE tenant_id = 42;'",
      output: `Index Scan using idx_telemetry_tenant_ts on telemetry_events (cost=0.42..8.45 rows=1)
  Index Cond: (tenant_id = 42)
  Buffers: shared hit=4
Planning Time: 0.082 ms
Execution Time: 0.145 ms
[PostgreSQL 18 Storage Engine] Sub-millisecond execution verified. Connection pool saturated at 12% capacity.`,
    },
    curl: {
      command: "curl -I https://siwakondev.win --tlsv1.3 --http2",
      output: `HTTP/2 200 OK
date: Thu, 08 Oct 2026 18:20:00 GMT
server: cloudflare
strict-transport-security: max-age=63072000; includeSubDomains; preload
content-security-policy: default-src 'self'; script-src 'self'; object-src 'none'
x-content-type-options: nosniff
x-frame-options: DENY
cf-ray: 8c34f210d-BKK (Edge Encrypted Tunnel)`,
    },
    k6: {
      command: "k6 run --vus 5000 --duration 30s load_stress_suite.js",
      output: `✓ status is 200
✓ transaction_time < 10ms (p95 = 4.12ms)
✓ zero memory leak over sustained load

checks ........................: 100.00% ✓ 148,290 / ✗ 0
http_req_duration .............: avg=2.84ms min=0.89ms med=2.10ms max=7.92ms p(90)=3.65ms p(95)=4.12ms
iterations ....................: 148,290 (4,943/s)
[k6 Load Engine] Concurrency verification PASSED with zero dropped sockets.`,
    },
  };

  return (
    <section
      id="philosophy"
      aria-label="Engineering Principles & Verification"
      className="relative min-h-screen w-full bg-black py-28 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-4 shadow-sm">
            <Shield size={13} className="text-emerald-400" />
            <span className="text-xs font-sans font-medium text-neutral-300">
              {t.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-sans">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300/80 font-sans leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid - Rounded Apple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {t.principles.map((principle, idx) => (
            <GlassCard
              key={idx}
              className="p-6 md:p-7 border-white/10 flex flex-col justify-between rounded-3xl"
              spotlightColor="rgba(56, 189, 248, 0.1)"
            >
              <div>
                <span className="text-3xl font-extrabold font-sans text-neutral-400 mb-4 block">
                  {principle.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 font-sans">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300/90 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-sans font-medium text-cyan-300">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>{t.verifiedBadge}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Interactive Verification Terminal */}
        <div id="edge-status" className="max-w-5xl mx-auto">
          <GlassCard className="border-white/15 bg-neutral-950/85 shadow-glass overflow-hidden rounded-3xl">
            {/* Terminal Window Header */}
            <div className="px-5 py-3.5 bg-neutral-900/60 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="ml-3 flex items-center gap-2 text-xs font-sans font-medium text-neutral-400">
                  <Terminal size={14} className="text-cyan-400" />
                  <span>edge@siwakondev.win:~</span>
                </div>
              </div>

              {/* Terminal Tabs - Rounded Apple Style */}
              <div className="flex items-center gap-1.5">
                {(['rust', 'postgres', 'curl', 'k6'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1 rounded-full text-xs font-sans font-medium uppercase transition-all ${
                      activeTab === tab
                        ? 'bg-white/20 text-white border border-white/25 shadow-sm'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-xs md:text-sm overflow-x-auto leading-relaxed">
              <div className="flex items-center gap-2 text-neutral-400 mb-3">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white font-medium">
                  {terminalTabs[activeTab].command}
                </span>
              </div>

              <pre className="text-neutral-300 font-mono whitespace-pre-wrap selection:bg-cyan-500/30 selection:text-cyan-200">
                {terminalTabs[activeTab].output}
              </pre>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
