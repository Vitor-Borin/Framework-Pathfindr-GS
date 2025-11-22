'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import MainFrame from './components/MainFrame/MainFrame';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DownloadButtons from './components/DownloadButtons/DownloadButtons';
import DecorativeCharacters from './components/DecorativeCharacters/DecorativeCharacters';
import { useHeroAnimations } from './hooks/useHeroAnimations';

const SobreSection = dynamic(() => import('./components/Sobre/SobreSection'), { ssr: false, loading: () => null });
const PlanosSection = dynamic(() => import('./components/Planos/PlanosSection'), { ssr: false, loading: () => null });
const FeedbacksSection = dynamic(() => import('./components/Feedbacks/FeedbacksSection'), { ssr: false, loading: () => null });
const Footer = dynamic(() => import('./components/Footer/Footer'), { ssr: false, loading: () => null });

export default function HomeClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const mainFrameRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const ellipsesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useHeroAnimations({
    navRef: navRef.current,
    titleRef: heroRef.current?.querySelector('p:first-child') as HTMLParagraphElement | null,
    subtitleRef: heroRef.current?.querySelector('p:last-child') as HTMLParagraphElement | null,
    buttonsRef: buttonsRef.current,
    ellipsesRefs: ellipsesRefs.current,
    containerRef: containerRef.current,
    heroSectionRef: heroSectionRef.current,
    mainFrameRef: mainFrameRef.current,
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
      
      <SobreSection />
      <PlanosSection />
      <FeedbacksSection />
      <Footer />
    </div>
  );
}
