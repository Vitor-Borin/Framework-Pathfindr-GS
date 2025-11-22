import { useEffect } from 'react';
import type React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  navRef: React.RefObject<HTMLDivElement>;
  heroRef: React.RefObject<HTMLDivElement>;
  buttonsRef: React.RefObject<HTMLDivElement>;
  ellipsesRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  containerRef: React.RefObject<HTMLDivElement>;
  heroSectionRef: React.RefObject<HTMLDivElement>;
  mainFrameRef: React.RefObject<HTMLDivElement>;
}

export function useHeroAnimations(refs: AnimationRefs) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Acessa os valores atuais dos refs dentro do effect
    const navRef = refs.navRef.current;
    const heroRef = refs.heroRef.current;
    const titleRef = heroRef?.querySelector('p:first-child') as HTMLParagraphElement | null;
    const subtitleRef = heroRef?.querySelector('p:last-child') as HTMLParagraphElement | null;
    const buttonsRef = refs.buttonsRef.current;
    const ellipsesRefs = refs.ellipsesRefs.current;
    const containerRef = refs.containerRef.current;
    const heroSectionRef = refs.heroSectionRef.current;
    const mainFrameRef = refs.mainFrameRef.current;

    // Aguarda a hidratação completa e verifica se os elementos existem
    let ctx: gsap.Context | null = null;
    let checkInterval: NodeJS.Timeout | null = null;
    
    const initAnimations = (): boolean => {
      // Verifica se todos os elementos necessários estão presentes
      if (!containerRef || !heroSectionRef) return false;
      
      // Verifica se os elementos principais existem no DOM
      if (!titleRef || !subtitleRef || !buttonsRef || !navRef) {
        return false;
      }

      // Se já foi inicializado, não inicializa novamente
      if (ctx) return true;

      ctx = gsap.context(() => {
      gsap.set([titleRef, subtitleRef, buttonsRef].filter(Boolean), {
        opacity: 0,
        y: 30,
      });

      gsap.set(ellipsesRefs.filter(Boolean), {
        opacity: 0,
        scale: 0,
      });

      gsap.set(navRef, {
        opacity: 0,
        y: -20,
      });

      const tl = gsap.timeline();

      if (navRef) {
        tl.to(navRef, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      if (titleRef) {
        tl.to(titleRef, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }, "-=0.5");
      }

      if (subtitleRef) {
        tl.to(subtitleRef, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.7");
      }

      if (buttonsRef) {
        tl.to(buttonsRef, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.5");
      }

      const validEllipses = ellipsesRefs.filter(Boolean);
      if (validEllipses.length > 0) {
        tl.to(validEllipses, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        }, "-=0.8");
      }

      ellipsesRefs.forEach((el) => {
        if (el) {
          gsap.to(el, {
            y: "+=20",
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2,
          });
        }
      });

      if (heroSectionRef) {
        const movingElements = [
          mainFrameRef,
          navRef,
          titleRef,
          subtitleRef,
          buttonsRef,
        ].filter(Boolean);

        const characterElements = ellipsesRefs.filter(Boolean);

        tl.call(() => {
          movingElements.forEach((el) => {
            if (el) {
              gsap.to(el, {
                y: "+=200",
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: heroSectionRef,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  immediateRender: false,
                },
              });
            }
          });

          characterElements.forEach((el) => {
            if (el) {
              gsap.fromTo(el, {
                opacity: gsap.getProperty(el, "opacity") || 1,
              }, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: heroSectionRef,
                  start: "top top",
                  end: "bottom top",
                  scrub: true,
                  immediateRender: false,
                },
              });
            }
          });
        });
      }
      }, containerRef);

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
      ScrollTrigger.clearScrollMemory?.();
    };
  }, [refs.navRef, refs.heroRef, refs.buttonsRef, refs.containerRef, refs.heroSectionRef, refs.mainFrameRef, refs.ellipsesRefs]);
}
