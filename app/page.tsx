'use client';

import { useRef, useEffect, Suspense, lazy } from 'react';
import MainFrame from './components/MainFrame/MainFrame';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DownloadButtons from './components/DownloadButtons/DownloadButtons';
import DecorativeCharacters from './components/DecorativeCharacters/DecorativeCharacters';
import { useHeroAnimations } from './hooks/useHeroAnimations';

const SobreSection = lazy(() => import('./components/Sobre/SobreSection'));
const PlanosSection = lazy(() => import('./components/Planos/PlanosSection'));
const FeedbacksSection = lazy(() => import('./components/Feedbacks/FeedbacksSection'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const mainFrameRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const ellipsesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useHeroAnimations({
    navRef,
    heroRef,
    buttonsRef,
    ellipsesRefs,
    containerRef,
    heroSectionRef,
    mainFrameRef,
  });

  useEffect(() => {
    ellipsesRefs.current = [];
  }, []);

  const createCharacterRef = (index: number) => (el: HTMLDivElement | null) => {
    ellipsesRefs.current[index] = el;
  };

  return (
    <div
      ref={containerRef}  
      className="relative w-full bg-[#F9F4F1] overflow-x-hidden"
    >
      <div 
        id="hero"
        ref={heroSectionRef}
        className="relative w-full h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(to top, rgba(249, 244, 241, 1) 13%, rgba(247, 216, 195, 0.8) 43%, rgba(255, 168, 184, 0.65) 64%, rgba(249, 244, 241, 1) 87%, rgba(249, 244, 241, 1) 100%)',
        }}
      >
        <MainFrame ref={mainFrameRef} />
        <Navbar ref={navRef} />
        <Hero ref={heroRef} />
        <DownloadButtons ref={buttonsRef} />
        <DecorativeCharacters characterRefs={Array.from({ length: 6 }, (_, i) => createCharacterRef(i))} />
      </div>
      
      <Suspense fallback={null}>
        <SobreSection />
      </Suspense>

      <Suspense fallback={null}>
        <PlanosSection />
      </Suspense>

      <Suspense fallback={null}>
        <FeedbacksSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
