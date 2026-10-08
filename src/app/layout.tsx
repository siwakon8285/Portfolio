import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Prompt, JetBrains_Mono } from 'next/font/google';
import '../index.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const promptFont = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-thai',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Siwakorn Bunde — Systems & Platform Architecture',
  description:
    'Siwakorn Bunde - Systems & Full-Stack Platform Engineer. Specialized in Rust, PostgreSQL 18, high-throughput edge systems, and ultra-resilient distributed architectures.',
  keywords: [
    'Siwakorn Bunde',
    'Systems Engineer',
    'Rust',
    'Axum',
    'PostgreSQL 18',
    'Next.js',
    'Docker',
    'Cloudflare Tunnels',
    'siwakondev.win',
  ],
  authors: [{ name: 'Siwakorn Bunde', url: 'https://github.com/siwakon8285' }],
  metadataBase: new URL('https://siwakondev.win'),
  openGraph: {
    title: 'Siwakorn Bunde | Systems & Full-Stack Platform Engineer',
    description: 'Architecting resilient systems, sub-millisecond data pipelines, and self-hosted edge infrastructure.',
    url: 'https://siwakondev.win',
    siteName: 'Siwakorn Bunde Portfolio',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='24' fill='%23000000'/><path d='M30 65 L50 35 L70 65' stroke='%2338bdf8' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'/><circle cx='50' cy='35' r='5' fill='%23f97316'/></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable} ${promptFont.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-neutral-100 antialiased overflow-x-hidden min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
