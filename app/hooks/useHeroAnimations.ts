import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimationRefs {
  navRef: HTMLDivElement | null;
  titleRef: HTMLParagraphElement | null;
  subtitleRef: HTMLParagraphElement | null;
  buttonsRef: HTMLDivElement | null;
  ellipsesRefs: (HTMLDivElement | null)[];
  containerRef: HTMLDivElement | null;
  heroSectionRef: HTMLDivElement | null;
  mainFrameRef: HTMLDivElement | null;
}

export function useHeroAnimations(refs: AnimationRefs) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const { navRef, titleRef, subtitleRef, buttonsRef, ellipsesRefs, containerRef, heroSectionRef, mainFrameRef } = refs;

    if (!containerRef) return;

    const ctx = gsap.context(() => {
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

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      ScrollTrigger.clearScrollMemory?.();
    };
  }, [refs]);
}
