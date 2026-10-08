export interface TechItem {
  id: string;
  name: string;
  category: 'Systems' | 'Web' | 'Data' | 'Infra' | 'Verification';
  icon: string;
  tagline: string;
  description: string;
  specs: string[];
  color: string;
  accentGlow: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  accentColor: string;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  specs: string;
  status: string;
  tech: string;
  highlight: string;
}

export const DEVELOPER_INFO = {
  name: "Siwakorn Bunde",
  role: "Systems & Full-Stack Platform Engineer",
  tagline: "Engineering Resilient Systems & High-Performance Architectures",
  domain: "siwakondev.win",
  github: "https://github.com/siwakon8285",
  location: "Bangkok / Edge Distributed",
  status: "ONLINE • PRODUCTION HARDENED",
  metricsSummary: [
    { label: "PostgreSQL Engine", value: "v18 Core" },
    { label: "Memory Safety", value: "0 unwrap()" },
    { label: "p95 Latency", value: "< 4.8ms" },
    { label: "Edge Gateway", value: "Cloudflare + Nginx" },
  ]
};

export const TECH_ORBIT_ITEMS: TechItem[] = [
  {
    id: "rust",
    name: "Rust",
    category: "Systems",
    icon: "ShieldAlert",
    tagline: "Axum • Tokio • SQLx",
    description: "Zero-cost abstractions with fearless concurrency. Compile-time thread safety, non-blocking I/O event loops, and zero memory leaks under peak saturation.",
    specs: ["0 unwrap() in Prod", "Tokio Multi-threaded Runtime", "SQLx Compile-time Checked Queries"],
    color: "#f97316",
    accentGlow: "rgba(249, 115, 22, 0.4)",
  },
  {
    id: "postgres",
    name: "PostgreSQL 18",
    category: "Data",
    icon: "Database",
    tagline: "ACID • Sub-ms Queries",
    description: "Engineered for uncompromising ACID compliance, custom GiST/BRIN indexing, transparent partition pruning, and resilient connection pooling with pgbouncer.",
    specs: ["Optimized Indexing & VACUUM", "Zero-downtime Schema Migrations", "Strict Relational Integrity"],
    color: "#38bdf8",
    accentGlow: "rgba(56, 189, 248, 0.4)",
  },
  {
    id: "nginx-cloudflare",
    name: "Nginx & Cloudflare",
    category: "Infra",
    icon: "Globe",
    tagline: "Edge TLS & Named Tunnels",
    description: "Global edge ingress secured through Cloudflare Named Tunnels, terminated with hardened Nginx reverse proxy configurations, strict HTTP/2 & HTTP/3 ALPN.",
    specs: ["Zero Inbound Open Ports", "A+ SSL Labs / TLS 1.3 Strict", "DDoS Ingress Shield"],
    color: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.4)",
  },
  {
    id: "docker-linux",
    name: "Docker & Linux",
    category: "Infra",
    icon: "Container",
    tagline: "Ubuntu Server Hardening",
    description: "Self-hosted bare-metal and virtualized Ubuntu Server with rootless Docker Compose orchestrations, automated health-checks, and minimal attack surface.",
    specs: ["Rootless Container Runtimes", "UFW & Fail2ban SSH Bastion", "Reproducible Multi-stage Builds"],
    color: "#60a5fa",
    accentGlow: "rgba(96, 165, 250, 0.4)",
  },
  {
    id: "typescript-react",
    name: "TypeScript & React",
    category: "Web",
    icon: "Code2",
    tagline: "Strict Mode • Next.js Client",
    description: "Interactive Apple-tier frontend experiences powered by React 18+, TypeScript strict compilation, high-frequency WebGL rendering, and responsive typography.",
    specs: ["100% Strict Type Coverage", "Zero-layout Shift Performance", "WebGL Shader Interactivity"],
    color: "#818cf8",
    accentGlow: "rgba(129, 140, 248, 0.4)",
  },
  {
    id: "redis",
    name: "Redis",
    category: "Data",
    icon: "Zap",
    tagline: "Distributed Cache & Outbox",
    description: "Sub-millisecond memory tier for idempotency locks, token-bucket rate limiting, transactional outbox patterns, and distributed Pub/Sub event distribution.",
    specs: ["Distributed Lock Leases", "Atomic Lua Scripts", "High-throughput Pub/Sub"],
    color: "#ef4444",
    accentGlow: "rgba(239, 68, 68, 0.4)",
  },
  {
    id: "go-spring",
    name: "Go & Spring Boot",
    category: "Systems",
    icon: "Cpu",
    tagline: "Concurrent & Enterprise APIs",
    description: "Scalable backend microservices utilizing Go's lightweight goroutines and channels alongside Java Spring Boot enterprise integrations and distributed pipelines.",
    specs: ["High-concurrency Goroutines", "Clean Hexagonal Architecture", "Enterprise DI & Resilience"],
    color: "#22d3ee",
    accentGlow: "rgba(34, 211, 238, 0.4)",
  },
  {
    id: "verification",
    name: "k6 & Bruno Verification",
    category: "Verification",
    icon: "CheckCircle2",
    tagline: "Load Stress & OWASP 2025",
    description: "Automated regression validation with Bruno API git-synced suites and rigorous k6 concurrency load tests ensuring sub-5ms p95 latency under simulated spikes.",
    specs: ["OWASP Top 10:2025 Hardened", "k6 High Concurrency Scenarios", "Automated CI/CD Validation"],
    color: "#a855f7",
    accentGlow: "rgba(168, 85, 247, 0.4)",
  }
];

export const ARCHITECTURE_FLOW: ArchitectureNode[] = [
  {
    id: "edge",
    name: "1. Global Ingress Layer",
    role: "Cloudflare Named Tunnel",
    tech: "Edge Anycast • Zero-Trust Connector",
    specs: "Zero public IPv4 exposure. Cloudflare Warp Tunnel establishes encrypted outbound daemon to global points of presence, scrubbing L3/L4/L7 volumetric threats before hitting origin.",
    status: "Active (Encrypted)",
    highlight: "Zero Inbound Ports"
  },
  {
    id: "gateway",
    name: "2. Origin Gateway & Proxy",
    role: "Hardened Nginx Reverse Proxy",
    tech: "Ubuntu Server • TLS 1.3 • Brotli",
    specs: "Origin termination with customized buffer pools, HSTS Preload (2yr), strict Content-Security-Policy, rate-limiting leaky bucket algorithm, and upstream Unix socket multiplexing.",
    status: "Sub-millisecond routing",
    highlight: "TLS 1.3 Fast-Handshake"
  },
  {
    id: "services",
    name: "3. High-Throughput Core Service",
    role: "Rust Axum Async Engine",
    tech: "Tokio Runtime • Tower Middlewares",
    specs: "Asynchronous zero-copy JSON parsing with tower layers, non-blocking connection pool worker tasks, memory-safe request life-cycles, strictly 0 runtime panics.",
    status: "120k+ req/sec capability",
    highlight: "< 4.8ms p95 Latency"
  },
  {
    id: "persistence",
    name: "4. State & Persistence Engine",
    role: "PostgreSQL 18 + Redis Tier",
    tech: "ACID Storage • Distributed In-Memory Cache",
    specs: "PostgreSQL 18 configured with tuned shared_buffers, work_mem and write-ahead log flush policies, paired with Redis Sentinel for session caching and atomic sequence coordination.",
    status: "Strict Serializability",
    highlight: "High Availability & ACID"
  }
];

export const PROJECTS_SHOWCASE: ProjectItem[] = [
  {
    id: "core-gateway",
    title: "Rust High-Throughput Core Platform",
    subtitle: "Axum • Tokio • SQLx • Type-Safe IPC",
    category: "Systems & High Performance",
    description: "Ultra-low-latency microservice architecture built with Rust. Designed with zero runtime unwrap calls, compile-time verified SQL queries, asynchronous worker pools, and automated Prometheus instrumentation.",
    architecture: ["Axum 0.7", "Tokio Async Engine", "PostgreSQL 18 Pool", "Tower Middleware"],
    metrics: [
      { label: "p95 Latency", value: "3.2 ms" },
      { label: "Memory Footprint", value: "18.4 MB" },
      { label: "Safety Invariants", value: "100% Safe Rust" }
    ],
    tags: ["Rust", "Axum", "Tokio", "PostgreSQL 18", "Docker"],
    githubUrl: "https://github.com/siwakon8285",
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    accentColor: "#f97316"
  },
  {
    id: "edge-infra",
    title: "Self-Hosted Edge & Ingress Pipeline",
    subtitle: "Cloudflare Named Tunnel • Nginx • Ubuntu Hardening",
    category: "Edge & Infrastructure",
    description: "Production self-hosted server cluster on Ubuntu Server. Implements Cloudflare Named Tunnels for private zero-inbound ingress, Nginx reverse proxy with automated TLS certificates, fail2ban SSH defense, and rootless Docker orchestrations.",
    architecture: ["Cloudflare Tunnel", "Nginx Gateway", "Ubuntu 24.04 LTS", "Docker Compose"],
    metrics: [
      { label: "Open Inbound Ports", value: "0" },
      { label: "SSL Labs Rating", value: "A+ Verified" },
      { label: "DDoS Mitigation", value: "Layer 7 Shield" }
    ],
    tags: ["Ubuntu", "Nginx", "Cloudflare", "Docker", "Security"],
    githubUrl: "https://github.com/siwakon8285",
    liveUrl: "https://siwakondev.win",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    accentColor: "#10b981"
  },
  {
    id: "persistence-engine",
    title: "Enterprise Data & Distributed Cache Mesh",
    subtitle: "PostgreSQL 18 • Redis Distributed Coordination • Automated Backups",
    category: "Data & Storage Engineering",
    description: "Resilient persistence pipeline featuring PostgreSQL 18 with tuned indexing strategies, query execution plan optimizations, and a low-latency Redis caching tier for distributed locking and idempotent message deduplication.",
    architecture: ["PostgreSQL 18", "Redis 7.2", "WAL Archiving", "Connection Pooling"],
    metrics: [
      { label: "Cache Hit Rate", value: "98.7%" },
      { label: "Query Execution", value: "Sub-1ms Indexed" },
      { label: "Recovery Point", value: "< 60s RPO" }
    ],
    tags: ["PostgreSQL 18", "Redis", "SQLx", "Database Tuning"],
    githubUrl: "https://github.com/siwakon8285",
    gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
    accentColor: "#38bdf8"
  },
  {
    id: "interactive-platform",
    title: "Full-Stack Enterprise & Client Ecosystem",
    subtitle: "TypeScript • NestJS • Next.js • Tailwind CSS • k6",
    category: "Web & Verified APIs",
    description: "Complete full-stack system pairing modular NestJS/Fastify services with reactive Next.js client frontends. Hardened against OWASP Top 10:2025 and stress-tested with automated Bruno and k6 scenarios.",
    architecture: ["NestJS / Fastify", "Next.js App Router", "k6 Stress Engine", "Bruno API Spec"],
    metrics: [
      { label: "Concurrent Virtual Users", value: "5,000+ k6" },
      { label: "Type Soundness", value: "Strict TS 5.x" },
      { label: "Security Audit", value: "OWASP 2025 Clean" }
    ],
    tags: ["TypeScript", "NestJS", "Next.js", "k6", "Bruno"],
    githubUrl: "https://github.com/siwakon8285",
    gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
    accentColor: "#a855f7"
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: "01",
    title: "Zero-Cost Guarantees",
    description: "We don't defer runtime correctness to hope. Memory safety, thread boundary validation, and algebraic data types guarantee failure modes are handled at compile time."
  },
  {
    number: "02",
    title: "Sub-Millisecond Baseline",
    description: "Every allocation matters. From Linux epoll event notification to pgbouncer connection pooling and SIMD-accelerated serialization, latency is treated as a core constraint."
  },
  {
    number: "03",
    title: "Air-Tight Defense in Depth",
    description: "No public ports, strict mutual authentication, hardened SSH bastions, and automated OWASP 2025 regression suites form an impenetrable operational shield."
  },
  {
    number: "04",
    title: "Craftsmanship & Ergonomics",
    description: "Systems must not only run at peak mechanical sympathy—they must be maintainable, observable, and documented with the meticulous finish of iconic industrial engineering."
  }
];
