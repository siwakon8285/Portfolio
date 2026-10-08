import { Language } from '../context/LanguageContext';

export interface LocalizedTechItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  tagline: string;
  description: string;
  specs: string[];
  color: string;
  accentGlow: string;
}

export interface LocalizedArchitectureNode {
  id: string;
  name: string;
  role: string;
  tech: string;
  specs: string;
  status: string;
  highlight: string;
}

export interface LocalizedProjectItem {
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

export interface LocalizedPrinciple {
  number: string;
  title: string;
  description: string;
}

export const TRANSLATIONS = {
  EN: {
    nav: {
      orbit: 'Orbit',
      blueprint: 'Blueprint',
      projects: 'Projects',
      principles: 'Principles',
      github: 'GitHub',
    },
    hero: {
      statusPill: 'Production Edge • siwakondev.win',
      role: 'Systems & Full-Stack Platform Engineer',
      name: 'Siwakorn Bunde',
      subtitle: 'Engineering Resilient Systems & High-Performance Architectures.',
      badges: {
        rust: 'Rust Systems',
        postgres: 'PostgreSQL 18',
        edge: 'Self-Hosted Edge',
      },
      ctaExplore: 'Explore Architecture',
      ctaGithub: 'GitHub Profile',
      metrics: [
        { label: 'PostgreSQL Engine', value: 'v18 Core' },
        { label: 'Memory Safety', value: '0 unwrap()' },
        { label: 'p95 Latency', value: '< 4.8ms' },
        { label: 'Edge Gateway', value: 'Cloudflare + Nginx' },
      ],
    },
    orbit: {
      badge: 'Cylindrical Architecture Orbit',
      title: 'Engineered Core Stack',
      subtitle: 'Scroll to scrub the 3D cylinder. Built upon memory-safe runtimes, strict ACID engines, and zero-trust edge tunnels.',
      categories: ['All', 'Systems', 'Data', 'Infra', 'Web', 'Verification'],
      statusBar: {
        activePrefix: 'Orbit Active',
        scrollHint: 'Scroll to Rotate Ring',
        invariantsTitle: 'Performance Invariants',
      },
      items: [
        {
          id: 'rust',
          name: 'Rust',
          category: 'Systems',
          icon: 'ShieldAlert',
          tagline: 'Axum • Tokio • SQLx',
          description: 'Zero-cost abstractions with fearless concurrency. Compile-time thread safety, non-blocking I/O event loops, and zero memory leaks under peak saturation.',
          specs: ['0 unwrap() in Prod', 'Tokio Multi-threaded Runtime', 'SQLx Compile-time Checked Queries'],
          color: '#f97316',
          accentGlow: 'rgba(249, 115, 22, 0.4)',
        },
        {
          id: 'postgres',
          name: 'PostgreSQL 18',
          category: 'Data',
          icon: 'Database',
          tagline: 'ACID • Sub-ms Queries',
          description: 'Engineered for uncompromising ACID compliance, custom GiST/BRIN indexing, transparent partition pruning, and resilient connection pooling with pgbouncer.',
          specs: ['Optimized Indexing & VACUUM', 'Zero-downtime Schema Migrations', 'Strict Relational Integrity'],
          color: '#38bdf8',
          accentGlow: 'rgba(56, 189, 248, 0.4)',
        },
        {
          id: 'nginx-cloudflare',
          name: 'Nginx & Cloudflare',
          category: 'Infra',
          icon: 'Globe',
          tagline: 'Edge TLS & Named Tunnels',
          description: 'Global edge ingress secured through Cloudflare Named Tunnels, terminated with hardened Nginx reverse proxy configurations, strict HTTP/2 & HTTP/3 ALPN.',
          specs: ['Zero Inbound Open Ports', 'A+ SSL Labs / TLS 1.3 Strict', 'DDoS Ingress Shield'],
          color: '#10b981',
          accentGlow: 'rgba(16, 185, 129, 0.4)',
        },
        {
          id: 'docker-linux',
          name: 'Docker & Linux',
          category: 'Infra',
          icon: 'Container',
          tagline: 'Ubuntu Server Hardening',
          description: 'Self-hosted bare-metal and virtualized Ubuntu Server with rootless Docker Compose orchestrations, automated health-checks, and minimal attack surface.',
          specs: ['Rootless Container Runtimes', 'UFW & Fail2ban SSH Bastion', 'Reproducible Multi-stage Builds'],
          color: '#60a5fa',
          accentGlow: 'rgba(96, 165, 250, 0.4)',
        },
        {
          id: 'typescript-react',
          name: 'TypeScript & React',
          category: 'Web',
          icon: 'Code2',
          tagline: 'Strict Mode • Next.js Client',
          description: 'Interactive Apple-tier frontend experiences powered by React 18+, TypeScript strict compilation, high-frequency WebGL rendering, and responsive typography.',
          specs: ['100% Strict Type Coverage', 'Zero-layout Shift Performance', 'WebGL Shader Interactivity'],
          color: '#818cf8',
          accentGlow: 'rgba(129, 140, 248, 0.4)',
        },
        {
          id: 'redis',
          name: 'Redis',
          category: 'Data',
          icon: 'Zap',
          tagline: 'Distributed Cache & Outbox',
          description: 'Sub-millisecond memory tier for idempotency locks, token-bucket rate limiting, transactional outbox patterns, and distributed Pub/Sub event distribution.',
          specs: ['Distributed Lock Leases', 'Atomic Lua Scripts', 'High-throughput Pub/Sub'],
          color: '#ef4444',
          accentGlow: 'rgba(239, 68, 68, 0.4)',
        },
        {
          id: 'go-spring',
          name: 'Go & Spring Boot',
          category: 'Systems',
          icon: 'Cpu',
          tagline: 'Concurrent & Enterprise APIs',
          description: 'Scalable backend microservices utilizing Go\'s lightweight goroutines and channels alongside Java Spring Boot enterprise integrations and distributed pipelines.',
          specs: ['High-concurrency Goroutines', 'Clean Hexagonal Architecture', 'Enterprise DI & Resilience'],
          color: '#22d3ee',
          accentGlow: 'rgba(34, 211, 238, 0.4)',
        },
        {
          id: 'verification',
          name: 'k6 & Bruno Verification',
          category: 'Verification',
          icon: 'CheckCircle2',
          tagline: 'Load Stress & OWASP 2025',
          description: 'Automated regression validation with Bruno API git-synced suites and rigorous k6 concurrency load tests ensuring sub-5ms p95 latency under simulated spikes.',
          specs: ['OWASP Top 10:2025 Hardened', 'k6 High Concurrency Scenarios', 'Automated CI/CD Validation'],
          color: '#a855f7',
          accentGlow: 'rgba(168, 85, 247, 0.4)',
        },
      ],
    },
    macro: {
      badge: 'Macro Zoom Blueprint',
      title: 'Every curve. Considered.',
      subtitle: 'Pulling back from raw silicon execution to global edge ingress. Engineered with zero single points of failure.',
      stages: [
        {
          title: 'Macro Silicon Die: Core Platform',
          subtitle: 'Zero-cost memory safety with Tokio async execution.',
        },
        {
          title: 'Phase 2: Origin Gateway & TLS Ingress',
          subtitle: 'Hardened Nginx termination with Cloudflare Named Tunnels.',
        },
        {
          title: 'Phase 3: High-Throughput Service Layer',
          subtitle: 'Axum 0.7 async engine with Tower middleware and compile-time SQLx.',
        },
        {
          title: 'Phase 4: State & Persistence Engine',
          subtitle: 'PostgreSQL 18 relational storage & Redis distributed cache mesh.',
        },
      ],
      nodes: [
        {
          id: 'edge',
          name: '1. Global Ingress Layer',
          role: 'Cloudflare Named Tunnel',
          tech: 'Edge Anycast • Zero-Trust Connector',
          specs: 'Zero public IPv4 exposure. Cloudflare Warp Tunnel establishes encrypted outbound daemon to global points of presence, scrubbing L3/L4/L7 volumetric threats before hitting origin.',
          status: 'Active (Encrypted)',
          highlight: 'Zero Inbound Ports',
        },
        {
          id: 'gateway',
          name: '2. Origin Gateway & Proxy',
          role: 'Hardened Nginx Reverse Proxy',
          tech: 'Ubuntu Server • TLS 1.3 • Brotli',
          specs: 'Origin termination with customized buffer pools, HSTS Preload (2yr), strict Content-Security-Policy, rate-limiting leaky bucket algorithm, and upstream Unix socket multiplexing.',
          status: 'Sub-millisecond routing',
          highlight: 'TLS 1.3 Fast-Handshake',
        },
        {
          id: 'services',
          name: '3. High-Throughput Core Service',
          role: 'Rust Axum Async Engine',
          tech: 'Tokio Runtime • Tower Middlewares',
          specs: 'Asynchronous zero-copy JSON parsing with tower layers, non-blocking connection pool worker tasks, memory-safe request life-cycles, strictly 0 runtime panics.',
          status: '120k+ req/sec capability',
          highlight: '< 4.8ms p95 Latency',
        },
        {
          id: 'persistence',
          name: '4. State & Persistence Engine',
          role: 'PostgreSQL 18 + Redis Tier',
          tech: 'ACID Storage • Distributed In-Memory Cache',
          specs: 'PostgreSQL 18 configured with tuned shared_buffers, work_mem and write-ahead log flush policies, paired with Redis Sentinel for session caching and atomic sequence coordination.',
          status: 'Strict Serializability',
          highlight: 'High Availability & ACID',
        },
      ],
      hud: {
        stepOf: 'Step',
        of: 'of',
        pipelineTitle: 'Ingress to Persistence Pipeline',
        inspectPrompt: 'Open source platform blueprints',
        inspectButton: 'Inspect on GitHub',
      },
    },
    galaxy: {
      badge: 'Vision Pro Spatial Perspectives',
      title: 'Floating Perspectives Galaxy',
      subtitle: 'Architected for resilient enterprise workloads, high concurrency pipelines, and verifiable zero-trust edge deployment.',
      filterAll: 'All',
      categories: ['All', 'Systems & High Performance', 'Edge & Infrastructure', 'Data & Storage Engineering', 'Web & Verified APIs'],
      foundationLabel: 'Core Technical Foundation',
      viewRepo: 'View Repository',
      edgeGateway: 'Edge Gateway',
      bannerTitle: 'Explore All Codebases on GitHub',
      bannerDesc: 'Complete source trees, CI/CD pipelines, k6 benchmarks, and Docker Compose configurations.',
      bannerButton: 'siwakon8285 / All Repositories',
      projects: [
        {
          id: 'core-gateway',
          title: 'Rust High-Throughput Core Platform',
          subtitle: 'Axum • Tokio • SQLx • Type-Safe IPC',
          category: 'Systems & High Performance',
          description: 'Ultra-low-latency microservice architecture built with Rust. Designed with zero runtime unwrap calls, compile-time verified SQL queries, asynchronous worker pools, and automated Prometheus instrumentation.',
          architecture: ['Axum 0.7', 'Tokio Async Engine', 'PostgreSQL 18 Pool', 'Tower Middleware'],
          metrics: [
            { label: 'p95 Latency', value: '3.2 ms' },
            { label: 'Memory Footprint', value: '18.4 MB' },
            { label: 'Safety Invariants', value: '100% Safe Rust' },
          ],
          tags: ['Rust', 'Axum', 'Tokio', 'PostgreSQL 18', 'Docker'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
          accentColor: '#f97316',
        },
        {
          id: 'edge-infra',
          title: 'Self-Hosted Edge & Ingress Pipeline',
          subtitle: 'Cloudflare Named Tunnel • Nginx • Ubuntu Hardening',
          category: 'Edge & Infrastructure',
          description: 'Production self-hosted server cluster on Ubuntu Server. Implements Cloudflare Named Tunnels for private zero-inbound ingress, Nginx reverse proxy with automated TLS certificates, fail2ban SSH defense, and rootless Docker orchestrations.',
          architecture: ['Cloudflare Tunnel', 'Nginx Gateway', 'Ubuntu 24.04 LTS', 'Docker Compose'],
          metrics: [
            { label: 'Open Inbound Ports', value: '0' },
            { label: 'SSL Labs Rating', value: 'A+ Verified' },
            { label: 'DDoS Mitigation', value: 'Layer 7 Shield' },
          ],
          tags: ['Ubuntu', 'Nginx', 'Cloudflare', 'Docker', 'Security'],
          githubUrl: 'https://github.com/siwakon8285',
          liveUrl: 'https://siwakondev.win',
          gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
          accentColor: '#10b981',
        },
        {
          id: 'persistence-engine',
          title: 'Enterprise Data & Distributed Cache Mesh',
          subtitle: 'PostgreSQL 18 • Redis Distributed Coordination • Automated Backups',
          category: 'Data & Storage Engineering',
          description: 'Resilient persistence pipeline featuring PostgreSQL 18 with tuned indexing strategies, query execution plan optimizations, and a low-latency Redis caching tier for distributed locking and idempotent message deduplication.',
          architecture: ['PostgreSQL 18', 'Redis 7.2', 'WAL Archiving', 'Connection Pooling'],
          metrics: [
            { label: 'Cache Hit Rate', value: '98.7%' },
            { label: 'Query Execution', value: 'Sub-1ms Indexed' },
            { label: 'Recovery Point', value: '< 60s RPO' },
          ],
          tags: ['PostgreSQL 18', 'Redis', 'SQLx', 'Database Tuning'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
          accentColor: '#38bdf8',
        },
        {
          id: 'interactive-platform',
          title: 'Full-Stack Enterprise & Client Ecosystem',
          subtitle: 'TypeScript • NestJS • Next.js • Tailwind CSS • k6',
          category: 'Web & Verified APIs',
          description: 'Complete full-stack system pairing modular NestJS/Fastify services with reactive Next.js client frontends. Hardened against OWASP Top 10:2025 and stress-tested with automated Bruno and k6 scenarios.',
          architecture: ['NestJS / Fastify', 'Next.js App Router', 'k6 Stress Engine', 'Bruno API Spec'],
          metrics: [
            { label: 'Concurrent Virtual Users', value: '5,000+ k6' },
            { label: 'Type Soundness', value: 'Strict TS 5.x' },
            { label: 'Security Audit', value: 'OWASP 2025 Clean' },
          ],
          tags: ['TypeScript', 'NestJS', 'Next.js', 'k6', 'Bruno'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
          accentColor: '#a855f7',
        },
      ],
    },
    philosophy: {
      badge: 'Architectural Invariants',
      title: 'Engineering Principles',
      subtitle: 'The mathematical and operational guarantees underpinning every line of code deployed to production.',
      verifiedBadge: 'Verified Standard',
      principles: [
        {
          number: '01',
          title: 'Zero-Cost Guarantees',
          description: 'We don\'t defer runtime correctness to hope. Memory safety, thread boundary validation, and algebraic data types guarantee failure modes are handled at compile time.',
        },
        {
          number: '02',
          title: 'Sub-Millisecond Baseline',
          description: 'Every allocation matters. From Linux epoll event notification to pgbouncer connection pooling and SIMD-accelerated serialization, latency is treated as a core constraint.',
        },
        {
          number: '03',
          title: 'Air-Tight Defense in Depth',
          description: 'No public ports, strict mutual authentication, hardened SSH bastions, and automated OWASP 2025 regression suites form an impenetrable operational shield.',
        },
        {
          number: '04',
          title: 'Craftsmanship & Ergonomics',
          description: 'Systems must not only run at peak mechanical sympathy—they must be maintainable, observable, and documented with the meticulous finish of iconic industrial engineering.',
        },
      ],
    },
    dock: {
      hero: 'Home',
      techOrbit: 'Tech Orbit',
      macroDeepDive: 'Architecture',
      projectsGalaxy: 'Projects',
      philosophy: 'Principles',
      edgeStatus: 'Edge Status',
      github: 'GitHub',
    },
    footer: {
      statement: 'Engineered with precision by Siwakorn Bunde.',
      role: 'Systems & Full-Stack Platform Engineer • Bangkok / Edge Distributed',
      domainActive: 'Domain active:',
      infraOnline: '• Infrastructure Online',
      reposSection: 'Source Repositories',
      edgeSection: 'Edge Infrastructure',
      qaSection: 'Quality Assurance',
      backToTop: 'Back to Top',
      copyright: 'Designed with Apple-tier aesthetics.',
      techNote: 'WebGL 3D Engine • Three.js • GSAP ScrollTrigger • Lenis Inertia',
    },
  },
  TH: {
    nav: {
      orbit: 'เทคโนโลยี',
      blueprint: 'สถาปัตยกรรม',
      projects: 'ผลงาน',
      principles: 'หลักการทำงาน',
      github: 'GitHub',
    },
    hero: {
      statusPill: 'ระบบพร้อมทำงานบน Edge • siwakondev.win',
      role: 'วิศวกรระบบและแพลตฟอร์มฟูลสแต็ก',
      name: 'Siwakorn Bunde',
      subtitle: 'ออกแบบและพัฒนาสถาปัตยกรรมระบบความเร็วสูง ปลอดภัย และมีความเสถียรสูงสุด',
      badges: {
        rust: 'ระบบด้วย Rust',
        postgres: 'ฐานข้อมูล PostgreSQL 18',
        edge: 'Edge & เซิร์ฟเวอร์ส่วนตัว',
      },
      ctaExplore: 'สำรวจสถาปัตยกรรม',
      ctaGithub: 'ดูโปรไฟล์ GitHub',
      metrics: [
        { label: 'ระบบฐานข้อมูล', value: 'PostgreSQL 18' },
        { label: 'ความปลอดภัยหน่วยความจำ', value: 'ปลอดภัย 100%' },
        { label: 'ความหน่วง p95', value: 'ต่ำกว่า 4.8ms' },
        { label: 'เกตเวย์ Ingress', value: 'Cloudflare + Nginx' },
      ],
    },
    orbit: {
      badge: 'วงโคจรสถาปัตยกรรม 3 มิติ',
      title: 'ระบบและเทคโนโลยีหลัก',
      subtitle: 'หมุนสำรวจเทคโนโลยีที่เลือกใช้ ออกแบบบนพื้นฐานความปลอดภัยระดับหน่วยความจำ ความถูกต้องของข้อมูล และระบบโครงสร้างพื้นฐานที่มั่นคง',
      categories: ['ทั้งหมด', 'ระบบหลัก', 'ฐานข้อมูล', 'โครงสร้างพื้นฐาน', 'เว็บแอป', 'การทดสอบ'],
      statusBar: {
        activePrefix: 'เทคโนโลยีที่เลือก',
        scrollHint: 'เลื่อนหน้าจอเพื่อหมุนวงแหวน',
        invariantsTitle: 'คุณสมบัติความปลอดภัยสำคัญ',
      },
      items: [
        {
          id: 'rust',
          name: 'Rust',
          category: 'ระบบหลัก',
          icon: 'ShieldAlert',
          tagline: 'Axum • Tokio • SQLx',
          description: 'โครงสร้างแบบ Zero-cost Abstraction รองรับการทำงานคู่ขนานระดับสูง ปลอดภัยจาก Data Race ตั้งแต่ขั้นตอนคอมไพล์ ทำงานแบบ Non-blocking I/O และไร้ปัญหาหน่วยความจำรั่วไหล',
          specs: ['ไร้คำสั่ง unwrap() บน Production', 'รันไทม์ Tokio มัลติเธรด', 'SQLx ตรวจสอบ Query ตั้งแต่คอมไพล์'],
          color: '#f97316',
          accentGlow: 'rgba(249, 115, 22, 0.4)',
        },
        {
          id: 'postgres',
          name: 'PostgreSQL 18',
          category: 'ฐานข้อมูล',
          icon: 'Database',
          tagline: 'ACID • Sub-ms Queries',
          description: 'ออกแบบเพื่อความถูกต้องตามมาตรฐาน ACID อย่างแท้จริง ปรับแต่ง Custom Indexing แบบ GiST/BRIN ตัด Partition อย่างมีประสิทธิภาพ และบริหารจัดการ Connection Pool ด้วย pgbouncer',
          specs: ['ปรับแต่ง Indexing & VACUUM ละเอียด', 'ไมเกรตฐานข้อมูลแบบ Zero-downtime', 'ความถูกต้องของข้อมูลระดับสูงสุด'],
          color: '#38bdf8',
          accentGlow: 'rgba(56, 189, 248, 0.4)',
        },
        {
          id: 'nginx-cloudflare',
          name: 'Nginx & Cloudflare',
          category: 'โครงสร้างพื้นฐาน',
          icon: 'Globe',
          tagline: 'Edge TLS & Named Tunnels',
          description: 'ความปลอดภัยหน้าด่านระดับโลกผ่าน Cloudflare Named Tunnels เข้าสู่ Nginx Reverse Proxy ที่ปรับแต่งอย่างรัดกุม พร้อมรองรับโปรโตคอล TLS 1.3, HTTP/2 และ HTTP/3 ALPN',
          specs: ['ไม่เปิด Inbound Port สู่สาธารณะ', 'การันตีเกรด A+ บน SSL Labs', 'ป้องกันการโจมตี DDoS ที่หน้าขอบเครือข่าย'],
          color: '#10b981',
          accentGlow: 'rgba(16, 185, 129, 0.4)',
        },
        {
          id: 'docker-linux',
          name: 'Docker & Linux',
          category: 'โครงสร้างพื้นฐาน',
          icon: 'Container',
          tagline: 'Ubuntu Server Hardening',
          description: 'คลัสเตอร์ Ubuntu Server ส่วนตัวที่มีระบบจัดการตู้คอนเทนเนอร์แบบ Rootless Docker Compose มี Health-check อัตโนมัติ และจำกัดช่องทางการโจมตีให้เหลือน้อยที่สุด',
          specs: ['รันคอนเทนเนอร์แบบ Rootless', 'ป้องกัน SSH ด้วย UFW & Fail2ban', 'บิลด์อิมเมจแบบ Multi-stage ผลลัพธ์แม่นยำ'],
          color: '#60a5fa',
          accentGlow: 'rgba(96, 165, 250, 0.4)',
        },
        {
          id: 'typescript-react',
          name: 'TypeScript & React',
          category: 'เว็บแอป',
          icon: 'Code2',
          tagline: 'Strict Mode • Next.js Client',
          description: 'ประสบการณ์ฝั่งหน้าบ้านระดับพรีเมียม สไตล์ Apple รองรับ TypeScript Strict Mode การเรนเดอร์กราฟิก WebGL 3 มิติความเร็วสูง และเลย์เอาต์ที่ลื่นไหลทุกอุปกรณ์',
          specs: ['Strict Type ครอบคลุม 100%', 'ไร้ปัญหา Layout Shift', 'Shader 3 มิติแบบอินเทอร์แอคทีฟ'],
          color: '#818cf8',
          accentGlow: 'rgba(129, 140, 248, 0.4)',
        },
        {
          id: 'redis',
          name: 'Redis',
          category: 'ฐานข้อมูล',
          icon: 'Zap',
          tagline: 'Distributed Cache & Outbox',
          description: 'หน่วยความจำแคชความเร็วต่ำกว่ามิลลิวินาทีสำหรับระบบ Idempotency Lock, การจำกัดอัตราเรียกใช้งานแบบ Token-bucket, รูปแบบ Transactional Outbox และระบบกระจาย Event ผ่าน Pub/Sub',
          specs: ['ระบบ Lock เช่าสิทธิ์แบบกระจาย', 'สคริปต์ Lua ดำเนินการแบบ Atomic', 'ระบบกระจายข้อความ Pub/Sub ความเร็วสูง'],
          color: '#ef4444',
          accentGlow: 'rgba(239, 68, 68, 0.4)',
        },
        {
          id: 'go-spring',
          name: 'Go & Spring Boot',
          category: 'ระบบหลัก',
          icon: 'Cpu',
          tagline: 'Concurrent & Enterprise APIs',
          description: 'ไมโครเซอร์วิสที่สเกลได้ง่ายด้วย Goroutines และ Channels ใน Go ควบคู่กับสถาปัตยกรรมระดับองค์กรด้วย Java Spring Boot และไปป์ไลน์กระจายข้อมูลความเร็วสูง',
          specs: ['Goroutines รองรับ Concurrency สูง', 'สถาปัตยกรรม Clean Hexagonal', 'ระบบจัดการ Dependency ระดับองค์กร'],
          color: '#22d3ee',
          accentGlow: 'rgba(34, 211, 238, 0.4)',
        },
        {
          id: 'verification',
          name: 'k6 & Bruno Verification',
          category: 'การทดสอบ',
          icon: 'CheckCircle2',
          tagline: 'Load Stress & OWASP 2025',
          description: 'ทดสอบความถูกต้องของ API อัตโนมัติด้วย Bruno API Suite และจำลองโหลดเสมือนจริงด้วย k6 เพื่อการันตีว่าค่าความหน่วง p95 ต่ำกว่า 5ms ภายใต้สภาวะโหลดสูงสุด',
          specs: ['ป้องกันตามเกณฑ์ OWASP Top 10:2025', 'จำลองโหลด Concurrency สูงด้วย k6', 'ตรวจสอบอัตโนมัติบน CI/CD'],
          color: '#a855f7',
          accentGlow: 'rgba(168, 85, 247, 0.4)',
        },
      ],
    },
    macro: {
      badge: 'ส่องลึกระดับสถาปัตยกรรม',
      title: 'ใส่ใจทุกดีเทล. ทุกชั้นระบบ.',
      subtitle: 'ซูมดูสถาปัตยกรรมตั้งแต่ระดับแกนประมวลผลจนถึง Edge Ingress ออกแบบเพื่อความเสถียรสูงสุดและไร้จุดล้มเหลวเดี่ยว',
      stages: [
        {
          title: 'แกนซิลิคอนประมวลผล: แพลตฟอร์มหลัก',
          subtitle: 'ความปลอดภัยหน่วยความจำระดับ Zero-Cost พร้อม Tokio Async Engine',
        },
        {
          title: 'ขั้นที่ 2: เกตเวย์ Origin และระบบรักษาความปลอดภัย TLS',
          subtitle: 'Nginx Reverse Proxy และ Cloudflare Named Tunnels ไร้พอร์ตสาธารณะ',
        },
        {
          title: 'ขั้นที่ 3: เลเยอร์บริการประมวลผลความเร็วสูง',
          subtitle: 'Axum 0.7 พร้อม Tower Middleware และ SQLx ตรวจสอบประเภทที่คอมไพล์ไทม์',
        },
        {
          title: 'ขั้นที่ 4: กลไกจัดเก็บสถานะและฐานข้อมูล',
          subtitle: 'PostgreSQL 18 จัดเก็บข้อมูล ACID และ Redis ทำงานประสาน Distributed Cache',
        },
      ],
      nodes: [
        {
          id: 'edge',
          name: '1. เลเยอร์ทางเข้า Global Ingress',
          role: 'Cloudflare Named Tunnel',
          tech: 'Edge Anycast • Zero-Trust Connector',
          specs: 'ไม่มีการเปิด IPv4 สาธารณะ Cloudflare Warp Tunnel เชื่อมต่อด้วยอุโมงค์ส่งออกที่เข้ารหัสไปยัง Edge ทั่วโลก เพื่อกรองภัยคุกคาม L3/L4/L7 ก่อนเข้าสู่ระบบหลัก',
          status: 'ทำงานปกติ (เข้ารหัส)',
          highlight: 'ไร้ Inbound Port สาธารณะ',
        },
        {
          id: 'gateway',
          name: '2. เกตเวย์ Origin & พร็อกซี',
          role: 'Hardened Nginx Reverse Proxy',
          tech: 'Ubuntu Server • TLS 1.3 • Brotli',
          specs: 'จุดสิ้นสุดการเชื่อมต่อ Origin พร้อมจัดการ Buffer Pool, HSTS Preload (2 ปี), Content-Security-Policy ที่เข้มงวด และส่งต่อไปยัง Unix Socket อย่างรวดเร็ว',
          status: 'ความเร็วต่ำกว่ามิลลิวินาที',
          highlight: 'TLS 1.3 แฮนด์เชคความเร็วสูง',
        },
        {
          id: 'services',
          name: '3. เซอร์วิสหลักความเร็วสูง',
          role: 'Rust Axum Async Engine',
          tech: 'Tokio Runtime • Tower Middlewares',
          specs: 'แปลง JSON แบบ Zero-copy ผ่านเลเยอร์ Tower Worker จัดการ Connection Pool แบบ Non-blocking วงจรการทำงานปลอดภัย ไร้การ Panic',
          status: 'รองรับ 120,000+ req/sec',
          highlight: 'ความหน่วง p95 ต่ำกว่า 4.8ms',
        },
        {
          id: 'persistence',
          name: '4. จัดเก็บสถานะและฐานข้อมูล',
          role: 'PostgreSQL 18 + Redis Tier',
          tech: 'ACID Storage • Distributed In-Memory Cache',
          specs: 'PostgreSQL 18 ปรับแต่ง shared_buffers และ WAL Archiving ทำงานร่วมกับ Redis เพื่อบริหารจัดการเซสชันและลำดับข้อมูลแบบ Atomic',
          status: 'รับประกันความถูกต้องสูงสุด',
          highlight: 'ความพร้อมใช้งานสูง & ACID',
        },
      ],
      hud: {
        stepOf: 'ขั้นตอนที่',
        of: 'จาก',
        pipelineTitle: 'ไปป์ไลน์สถาปัตยกรรมตั้งแต่ Ingress ถึง ฐานข้อมูล',
        inspectPrompt: 'แบบแปลนสถาปัตยกรรมแบบเปิด',
        inspectButton: 'ดูโค้ดบน GitHub',
      },
    },
    galaxy: {
      badge: 'มุมมองโปรเจกต์มิติใหม่',
      title: 'ผลงานและสถาปัตยกรรมเด่น',
      subtitle: 'สร้างขึ้นสำหรับระบบระดับองค์กร รองรับการทำงานพร้อมกันสูง และปลอดภัยด้วยแนวคิด Zero-Trust',
      filterAll: 'ทั้งหมด',
      categories: ['ทั้งหมด', 'ระบบประสิทธิภาพสูง', 'โครงสร้าง Edge & เซิร์ฟเวอร์', 'วิศวกรรมข้อมูล & จัดเก็บ', 'เว็บแอป & API คุณภาพสูง'],
      foundationLabel: 'เทคโนโลยีและเฟรมเวิร์กหลัก',
      viewRepo: 'ดูคลังโค้ด',
      edgeGateway: 'ระบบ Edge',
      bannerTitle: 'สำรวจซอร์สโค้ดทั้งหมดบน GitHub',
      bannerDesc: 'ครบทั้งโค้ดเต็ม ไปป์ไลน์ CI/CD รายงานผลทดสอบ k6 และคอนฟิก Docker Compose',
      bannerButton: 'siwakon8285 / คลังโค้ดทั้งหมด',
      projects: [
        {
          id: 'core-gateway',
          title: 'แพลตฟอร์มแกนหลัก Rust ความเร็วสูง',
          subtitle: 'Axum • Tokio • SQLx • Type-Safe IPC',
          category: 'ระบบประสิทธิภาพสูง',
          description: 'สถาปัตยกรรมไมโครเซอร์วิสความหน่วงต่ำพิเศษ พัฒนาด้วย Rust ปราศจากการเรียก unwrap ในโปรดักชัน ตรวจสอบ SQL ตั้งแต่คอมไพล์ไทม์ และเก็บ Metrics ผ่าน Prometheus',
          architecture: ['Axum 0.7', 'Tokio Async Engine', 'PostgreSQL 18 Pool', 'Tower Middleware'],
          metrics: [
            { label: 'ความหน่วง p95', value: '3.2 ms' },
            { label: 'หน่วยความจำที่ใช้', value: '18.4 MB' },
            { label: 'มาตรฐานความปลอดภัย', value: 'Safe Rust 100%' },
          ],
          tags: ['Rust', 'Axum', 'Tokio', 'PostgreSQL 18', 'Docker'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-orange-500/10 via-amber-500/5 to-transparent',
          accentColor: '#f97316',
        },
        {
          id: 'edge-infra',
          title: 'โครงสร้างพื้นฐาน Edge & ไปป์ไลน์ Ingress',
          subtitle: 'Cloudflare Named Tunnel • Nginx • Ubuntu Hardening',
          category: 'โครงสร้าง Edge & เซิร์ฟเวอร์',
          description: 'คลัสเตอร์เซิร์ฟเวอร์ส่วนตัวบน Ubuntu Server ใช้ Cloudflare Named Tunnel เพื่อปิดพอร์ตสาธารณะ ป้องกันการบุกรุกด้วย Fail2ban และติดตั้งบริการผ่าน Rootless Docker Compose',
          architecture: ['Cloudflare Tunnel', 'Nginx Gateway', 'Ubuntu 24.04 LTS', 'Docker Compose'],
          metrics: [
            { label: 'พอร์ต Inbound สาธารณะ', value: '0 พอร์ต' },
            { label: 'เกรดความปลอดภัย SSL', value: 'A+ ตรวจสอบแล้ว' },
            { label: 'ระบบป้องกัน DDoS', value: 'Layer 7 Shield' },
          ],
          tags: ['Ubuntu', 'Nginx', 'Cloudflare', 'Docker', 'Security'],
          githubUrl: 'https://github.com/siwakon8285',
          liveUrl: 'https://siwakondev.win',
          gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
          accentColor: '#10b981',
        },
        {
          id: 'persistence-engine',
          title: 'ระบบจัดเก็บข้อมูลองค์กรและ Distributed Cache',
          subtitle: 'PostgreSQL 18 • Redis Distributed Coordination • สำรองข้อมูลอัตโนมัติ',
          category: 'วิศวกรรมข้อมูล & จัดเก็บ',
          description: 'ระบบจัดเก็บข้อมูลที่มีความทนทานสูงด้วย PostgreSQL 18 ปรับแต่งแผนการ Query ให้ต่ำกว่า 1ms ทำงานคู่กับ Redis เพื่อเป็นหน่วยความจำแคชและระบบป้องกันคำขอซ้ำซ้อน',
          architecture: ['PostgreSQL 18', 'Redis 7.2', 'WAL Archiving', 'Connection Pooling'],
          metrics: [
            { label: 'อัตรา Cache Hit', value: '98.7%' },
            { label: 'ความเร็ว Query', value: 'ต่ำกว่า 1ms (Indexed)' },
            { label: 'เป้าหมายกู้คืน RPO', value: '< 60 วินาที' },
          ],
          tags: ['PostgreSQL 18', 'Redis', 'SQLx', 'Database Tuning'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent',
          accentColor: '#38bdf8',
        },
        {
          id: 'interactive-platform',
          title: 'ระบบฟูลสแต็กระดับองค์กรและไคลเอนต์สมัยใหม่',
          subtitle: 'TypeScript • NestJS • Next.js • Tailwind CSS • k6',
          category: 'เว็บแอป & API คุณภาพสูง',
          description: 'ระบบฟูลสแต็กครบวงจร ผสานสถาปัตยกรรม NestJS/Fastify เข้ากับหน้าบ้าน Next.js App Router ป้องกันความปลอดภัยตามมาตรฐาน OWASP Top 10:2025 และทดสอบโหลดด้วย k6',
          architecture: ['NestJS / Fastify', 'Next.js App Router', 'k6 Stress Engine', 'Bruno API Spec'],
          metrics: [
            { label: 'ผู้ใช้เสมือนพร้อมกัน (k6)', value: '5,000+ ผู้ใช้' },
            { label: 'ความถูกต้องของ Type', value: 'Strict TS 5.x' },
            { label: 'การตรวจสอบความปลอดภัย', value: 'OWASP 2025 ผ่านฉลุย' },
          ],
          tags: ['TypeScript', 'NestJS', 'Next.js', 'k6', 'Bruno'],
          githubUrl: 'https://github.com/siwakon8285',
          gradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
          accentColor: '#a855f7',
        },
      ],
    },
    philosophy: {
      badge: 'หลักการและมาตรฐานวิศวกรรม',
      title: 'หลักการทำงาน',
      subtitle: 'มาตรฐานและความปลอดภัยเชิงสถาปัตยกรรมที่ยึดถือในทุกโค้ดที่ขึ้นระบบจริง',
      verifiedBadge: 'ผ่านการทดสอบจริง',
      principles: [
        {
          number: '01',
          title: 'ความปลอดภัยตั้งแต่คอมไพล์',
          description: 'เราไม่พึ่งพาโชคช่วยในการทำงานของระบบ การตรวจสอบความเป็นเจ้าของหน่วยความจำ ขอบเขตเธรด และ Algebraic Data Types การันตีว่าข้อผิดพลาดทั้งหมดจะถูกจัดการตั้งแต่ตอนคอมไพล์',
        },
        {
          number: '02',
          title: 'มาตรฐานความเร็วต่ำกว่า 1 มิลลิวินาที',
          description: 'ทุกการจัดสรรหน่วยความจำมีความหมาย ตั้งแต่การรับ Event ผ่าน Linux epoll, Connection Pool ใน pgbouncer จนถึงการแปลงข้อมูลระดับ SIMD ความหน่วงคือข้อจำกัดสำคัญที่สุดที่เราคำนึงถึง',
        },
        {
          number: '03',
          title: 'ระบบป้องกันหลายชั้นที่ไร้ช่องโหว่',
          description: 'ไม่มีการเปิดพอร์ตสาธารณะ ใช้การยืนยันตัวตนสองทางที่เข้มงวด ป้องกันการเข้าถึง SSH และรันชุดทดสอบความปลอดภัย OWASP 2025 ในทุกเวอร์ชันเพื่อสร้างเกราะป้องกันที่มั่นคง',
        },
        {
          number: '04',
          title: 'ความประณีตและออกแบบเพื่อการใช้งานจริง',
          description: 'ระบบไม่เพียงต้องทำงานประสานกับฮาร์ดแวร์ได้อย่างมีประสิทธิภาพสูงสุด แต่ยังต้องดูแลง่าย มีระบบมอนิเตอร์ที่ชัดเจน และมีเอกสารประกอบที่ประณีตเฉกเช่นผลงานการออกแบบชั้นเลิศ',
        },
      ],
    },
    dock: {
      hero: 'หน้าแรก',
      techOrbit: 'เทคโนโลยี',
      macroDeepDive: 'สถาปัตยกรรม',
      projectsGalaxy: 'ผลงาน',
      philosophy: 'หลักการ',
      edgeStatus: 'สถานะระบบ',
      github: 'GitHub',
    },
    footer: {
      statement: 'ออกแบบและพัฒนาอย่างประณีตโดย ศิวกร บุณเดช',
      role: 'วิศวกรระบบและแพลตฟอร์มฟูลสแต็ก • กรุงเทพฯ / เครือข่าย Edge',
      domainActive: 'โดเมนทำงาน:',
      infraOnline: '• ระบบออนไลน์ปกติ',
      reposSection: 'คลังโค้ดบน GitHub',
      edgeSection: 'โครงสร้างพื้นฐาน Edge',
      qaSection: 'การรับประกันคุณภาพ',
      backToTop: 'กลับด้านบน',
      copyright: 'ออกแบบตามมาตรฐานสุนทรียศาสตร์ของ Apple',
      techNote: 'WebGL 3D Engine • Three.js • GSAP ScrollTrigger • Lenis Inertia',
    },
  },
};

export const getTranslations = (lang: Language) => TRANSLATIONS[lang] || TRANSLATIONS.EN;
