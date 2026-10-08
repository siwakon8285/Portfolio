# Siwakorn Bunde — Full-Stack & Systems Developer Portfolio

> Clean, human-centric, high-end Apple-style developer portfolio website with portrait visual, infinite auto-scrolling tech marquee, and featured project cards. Optimized for instant Vercel deployment with Next.js 14 & Vite dual-engine support.

---

## ✦ Developer Identity & Edge Infrastructure

- **Developer:** Siwakorn Bunde
- **Role:** Full-Stack & Systems Developer
- **Edge Domain:** [siwakondev.win](https://siwakondev.win)
- **Primary GitHub:** [github.com/siwakon8285](https://github.com/siwakon8285)
- **Deployment:** Vercel Edge Deployed • Global Anycast Routing

---

## ✦ Apple-Tier Portfolio Choreography

| Section | Feature | Visual Presentation |
|---|---|---|
| **01. Navbar** | Apple Frosted Island | Brand initials `SB`, quick section links (`About`, `Technologies`, `Projects`), domain status pill, GitHub button, and smooth `[ EN \| TH ]` language toggle. |
| **02. Hero** | Human Portrait & Identity | Generous Apple-style rounded portrait (`profile.png`), badge `PORTFOLIO 2026`, monumental display typography, personal summary, and direct action CTAs (`View Projects`, `GitHub Profile`). |
| **03. Tech Marquee** | Infinite Auto-Scrolling Ticker | Continuous horizontal marquee banner showcasing official tech logos in authentic brand colors (Rust, Go, TypeScript, Python, C#, Java, React, Next.js, Tailwind CSS, PostgreSQL, Redis, Docker, Nginx, Ubuntu). |
| **04. Projects** | Clean Featured Work Cards | Elegant frosted glass cards highlighting real software projects, tech stack tags, and direct clickable links to GitHub (`siwakon8285`). |
| **05. macOS Dock** | Frosted Glass Floating Dock | Fixed bottom macOS dock with parabolic magnification and tooltips for smooth jump navigation. |
| **06. Footer** | Minimalist Apple Footer | Clean copyright, Vercel edge status badge, social links, and smooth back-to-top trigger. |

---

## ✦ Getting Started & Vercel Deployment

### Prerequisites
- Node.js 18+ or Node.js 20+
- npm 9+

### Local Development (Next.js App Router)
```bash
# Clone the repository
git clone https://github.com/siwakon8285/portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start Next.js development server
npm run dev

# Build production bundle (Next.js)
npm run build

# Start production server
npm run start
```

### Dual-Engine Vite Build (Optional)
```bash
# Start Vite development server
npm run vite:dev

# Build Vite static bundle
npm run vite:build

# Preview Vite static bundle
npm run vite:preview
```

---

## ✦ Deploying to Vercel

### Option 1: Vercel Git Integration (Recommended)
1. Push this repository to GitHub: `git push origin main`
2. Go to [vercel.com/new](https://vercel.com/new) and import `portfolio`.
3. Vercel automatically detects **Next.js** framework preset.
4. Click **Deploy**.
5. Add your custom domain **`siwakondev.win`** under **Settings > Domains**.
6. Set DNS records (A Record: `76.76.21.21` or CNAME: `cname.vercel-dns.com`).

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy directly from terminal
vercel --prod
```

---

## ✦ Production Architecture & Build Summary

- **Framework:** Next.js 14 App Router + React 18 + TypeScript (Strict mode enabled)
- **Vercel Edge Ready:** Zero-config automatic deployment with `vercel.json` HTTP security & caching headers
- **Client Dynamic Import:** Dynamic component loading with `ssr: false` preventing WebGL Three.js canvas hydration mismatches
- **Styling:** Tailwind CSS with custom OLED pure black (`#000000`), frosted glassmorphism, and Apple specular glows
- **Smooth Inertia:** Lenis synced directly to GSAP ticker (`gsap.ticker.add`)
- **WebGL:** Three.js via `@react-three/fiber` & `@react-three/drei` with `dpr={[1, 1.5]}`
- **Icons:** `lucide-react`
