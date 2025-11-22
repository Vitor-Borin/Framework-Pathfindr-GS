import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UsePlanosAnimationsProps {
  sectionRef: HTMLElement | null;
  titleRef: HTMLElement | null;
  toggleRef: HTMLElement | null;
  cardsRefs: (HTMLElement | null)[];
}

export function usePlanosAnimations({ 
  sectionRef, 
  titleRef, 
  toggleRef,
  cardsRefs
}: UsePlanosAnimationsProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sectionRef) return;

    let ctx: gsap.Context | null = null;

    const initAnimations = () => {
      if (!sectionRef) return;

      ctx = gsap.context(() => {
      if (titleRef) {
        gsap.set(titleRef, {
          opacity: 0,
          y: 50,
        });
      }

      if (toggleRef) {
        gsap.set(toggleRef, {
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

      if (titleRef) {
        gsap.to(titleRef, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            immediateRender: false,
          },
        });
      }

      if (toggleRef) {
        gsap.to(toggleRef, {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: toggleRef,
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
      }, sectionRef);

      // Força recalcular posições após a renderização/hidratação
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      // Refresh adicional após um pequeno delay para garantir que tudo está renderizado
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Aguarda um frame para garantir que o DOM está pronto
    const timeoutId = setTimeout(() => {
      initAnimations();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) {
        ctx.revert();
      }
    };

  }, [sectionRef, titleRef, toggleRef, cardsRefs]);
}
