import { useEffect } from 'react';
import type React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UsePlanosAnimationsProps {
  sectionRef: React.RefObject<HTMLElement>;
  titleRef: React.RefObject<HTMLElement>;
  toggleRef: React.RefObject<HTMLElement>;
  card1Ref: React.RefObject<HTMLElement>;
  card2Ref: React.RefObject<HTMLElement>;
  card3Ref: React.RefObject<HTMLElement>;
}

export function usePlanosAnimations({ 
  sectionRef, 
  titleRef, 
  toggleRef,
  card1Ref,
  card2Ref,
  card3Ref
}: UsePlanosAnimationsProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Acessa os valores atuais dos refs dentro do effect
    const sectionRefEl = sectionRef.current;
    const titleRefEl = titleRef.current;
    const toggleRefEl = toggleRef.current;
    const cardsRefs = [card1Ref.current, card2Ref.current, card3Ref.current];
    
    if (!sectionRefEl) return;

    let ctx: gsap.Context | null = null;
    let checkInterval: NodeJS.Timeout | null = null;

    const initAnimations = (): boolean => {
      if (!sectionRefEl) return false;
      
      // Verifica se os elementos principais existem
      if (!titleRefEl || !toggleRefEl) return false;

      // Se já foi inicializado, não inicializa novamente
      if (ctx) return true;

      ctx = gsap.context(() => {
      if (titleRefEl) {
        gsap.set(titleRefEl, {
          opacity: 0,
          y: 50,
        });
      }

      if (toggleRefEl) {
        gsap.set(toggleRefEl, {
          opacity: 0,
          scale: 0.8,
        });
      }

      cardsRefs.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            opacity: 0,
            y: 100,
            rotation: index % 2 === 0 ? -5 : 5,
            scale: 0.9,
          });
        }
      });

      if (titleRefEl) {
        gsap.to(titleRefEl, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRefEl,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            immediateRender: false,
          },
        });
      }

      if (toggleRefEl) {
        gsap.to(toggleRefEl, {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: toggleRefEl,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            immediateRender: false,
          },
        });
      }

      const validCards = cardsRefs.filter(Boolean);
      if (validCards.length > 0) {
        const firstCard = validCards[0];
        
        const cardsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: firstCard,
            start: "top 75%",
            end: "top 35%",
            scrub: true,
            immediateRender: false,
          },
        });

        validCards.forEach((card, index) => {
          if (card) {
            cardsTimeline.to(card, {
              opacity: 1,
              y: 0,
              rotation: 0,
              scale: 1,
              ease: "back.out(1.3)",
              duration: 0.7,
            }, index * 0.15);
          }
        });
      }
      }, sectionRefEl);

      // Força recalcular posições após a renderização/hidratação
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      // Refresh adicional após um pequeno delay para garantir que tudo está renderizado
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return true;
    };

    // Verifica periodicamente se os elementos estão prontos
    const tryInit = () => {
      if (initAnimations()) {
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
      }
    };

    // Tenta inicializar imediatamente
    tryInit();

    // Se não funcionou, tenta a cada 50ms até 2 segundos
    checkInterval = setInterval(() => {
      tryInit();
    }, 50);

    const maxWaitTimeout = setTimeout(() => {
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
    }, 2000);

    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      clearTimeout(maxWaitTimeout);
      if (ctx) {
        ctx.revert();
      }
    };

  }, [sectionRef, titleRef, toggleRef, card1Ref, card2Ref, card3Ref]);
}
