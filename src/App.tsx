import React, { useState, useEffect } from 'react';
import { useLenisScroll } from './hooks/useLenisScroll';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { TechMarquee } from './components/sections/TechMarquee';
import { MacOsProjectWindow } from './components/sections/MacOsProjectWindow';
import { Footer } from './components/sections/Footer';

export const AppContent: React.FC = () => {
  const { scrollTo } = useLenisScroll();
  const [, setActiveSection] = useState<string>('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      scrollTo('#hero', { offset: 0, duration: 1.2 });
    } else {
      scrollTo(`#${sectionId}`, { offset: -20, duration: 1.4 });
    }
  };

  useEffect(() => {
    const sections = ['hero', 'technologies', 'projects'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      {/* Top Floating Glass Island Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Clean Apple-Style Portfolio Structure */}
      <main>
        <Hero onExploreClick={() => handleNavigate('projects')} />
        <TechMarquee />
        <MacOsProjectWindow />
      </main>

      {/* Apple Minimalist Footer (Dock removed) */}
      <Footer onScrollToTop={() => handleNavigate('hero')} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
