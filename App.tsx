import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { PowerStatement } from './components/PowerStatement.tsx';
import { WhoWeAre } from './components/WhoWeAre.tsx';
import { OurValues } from './components/OurValues.tsx';
import { WhatWeSupply } from './components/WhatWeSupply.tsx';
import { GlobalOperations } from './components/GlobalOperations.tsx';
import { ValuableClients } from './components/ValuableClients.tsx';
import { NewsCenter } from './components/NewsCenter.tsx';
import { WhyADGP } from './components/WhyADGP.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Navigation } from './components/Navigation.tsx';
import { WhatsAppFAB } from './components/WhatsAppFAB.tsx';

const AppContent: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash changes for smooth scrolling
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashScroll);
    handleHashScroll(); // Check on mount
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  /**
   * Calculates progress for a specific scroll range (scene).
   * Renamed from getRangeProgress to account for scene-based cinematic transitions.
   */
  const getSceneProgress = (start: number, end: number) => {
    return Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
  };

  return (
    <div className="relative bg-[#050505] text-white">
      <Navigation />
      
      {/* Unified Industrial Background Base */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 transition-transform duration-700 ease-out"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000')`,
            transform: `scale(${1 + scrollProgress * 0.1})`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <main className="relative z-10">
        <div id="home" className="scene-transition">
          <PowerStatement progress={getSceneProgress(0, 0.2)} />
        </div>
        
        <div id="company" className="scene-transition">
          <WhoWeAre progress={getSceneProgress(0.15, 0.35)} />
        </div>
        
        <div className="scene-transition">
          <OurValues progress={getSceneProgress(0.3, 0.5)} />
        </div>
        
        <div id="assets" className="scene-transition">
          <WhatWeSupply progress={getSceneProgress(0.45, 0.65)} />
        </div>
        
        <div id="global-log" className="scene-transition">
          <GlobalOperations progress={getSceneProgress(0.6, 0.8)} />
        </div>
        
        <div id="partners" className="scene-transition">
          <ValuableClients progress={getSceneProgress(0.75, 0.9)} />
        </div>
        
        <div id="news" className="scene-transition">
          <NewsCenter progress={getSceneProgress(0.8, 0.9)} />
        </div>
        
        <div className="scene-transition">
          <WhyADGP progress={getSceneProgress(0.85, 0.95)} />
        </div>
        
        <div id="inquiry" className="scene-transition">
          <CallToAction progress={getSceneProgress(0.9, 1)} />
        </div>
      </main>

      <WhatsAppFAB />
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <AppContent />
  </HashRouter>
);

export default App;