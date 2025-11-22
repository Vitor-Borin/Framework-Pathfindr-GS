import { useEffect } from 'react';
import type React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseSobreAnimationsProps {
  sectionRef: React.RefObject<HTMLElement>;
  titleRef: React.RefObject<HTMLElement>;
  subtitleRef: React.RefObject<HTMLElement>;
  cardsRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  titleRef2?: React.RefObject<HTMLElement>;
  subtitleRef2?: React.RefObject<HTMLElement>;
  cardsRefs2?: React.MutableRefObject<(HTMLElement | null)[]>;
  phoneRef?: React.RefObject<HTMLElement>;
  phoneBgRef?: React.RefObject<HTMLElement>;
}

export function useSobreAnimations({ 
  sectionRef, 
  titleRef, 
  subtitleRef, 
  cardsRefs,
  titleRef2,
  subtitleRef2,
  cardsRefs2,
  phoneRef,
  phoneBgRef
}: UseSobreAnimationsProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Acessa os valores atuais dos refs dentro do effect
    const sectionRefEl = sectionRef.current;
    const titleRefEl = titleRef.current;
    const subtitleRefEl = subtitleRef.current;
    const cardsRefsEl = cardsRefs.current;
    const titleRef2El = titleRef2?.current;
    const subtitleRef2El = subtitleRef2?.current;
    const cardsRefs2El = cardsRefs2?.current;
    const phoneRefEl = phoneRef?.current;
    const phoneBgRefEl = phoneBgRef?.current;
    
    if (!sectionRefEl) return;

    let ctx: gsap.Context | null = null;
    let checkInterval: NodeJS.Timeout | null = null;

    const initAnimations = (): boolean => {
      if (!sectionRefEl) return false;
      
      // Verifica se os elementos principais existem
      if (!titleRefEl || !subtitleRefEl) return false;

      // Se já foi inicializado, não inicializa novamente
      if (ctx) return true;

      ctx = gsap.context(() => {
      gsap.set([titleRefEl, subtitleRefEl].filter(Boolean), {
        opacity: 0,
        y: 50,
      });

      cardsRefsEl.forEach((card, index) => {
        if (card) {
          const isEven = index % 2 === 0;
          gsap.set(card, {
            opacity: 0,
            x: isEven ? -150 : 150,
            y: 50,
            rotation: isEven ? -15 : 15,
            scale: 0.8,
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

      if (subtitleRefEl) {
        gsap.to(subtitleRefEl, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRefEl,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
            immediateRender: false,
          },
        });
      }

      const validCards = cardsRefsEl.filter(Boolean);
      if (validCards.length > 0) {
        const firstCard = validCards[0];
        
        const cardsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: firstCard,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
            immediateRender: false,
          },
        });

        validCards.forEach((card, index) => {
          if (card) {
            const isEven = index % 2 === 0;
            
            cardsTimeline.to(card, {
              opacity: 1,
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              ease: "back.out(1.4)",
              duration: 0.8,
            }, index * 0.15);
          }
        });
      }

      if (titleRef2El || subtitleRef2El || (cardsRefs2El && cardsRefs2El.length > 0) || phoneRefEl || phoneBgRefEl) {
        if (titleRef2El) {
          gsap.set(titleRef2El, {
            opacity: 0,
            y: 50,
          });
        }
        if (subtitleRef2El) {
          gsap.set(subtitleRef2El, {
            opacity: 0,
            y: 50,
          });
        }

        if (cardsRefs2El) {
          cardsRefs2El.forEach((card, index) => {
            if (card) {
              const fromX = index === 0 ? -100 : index === 1 ? 100 : index === 2 ? -100 : index === 3 ? 0 : index === 4 ? 0 : 100;
              const fromRotate = index % 2 === 0 ? -10 : 10;
              
              gsap.set(card, {
                opacity: 0,
                x: fromX,
                y: 80,
                rotation: fromRotate,
                scale: 0.8,
              });
            }
          });
        }

        if (phoneRefEl) {
          gsap.set(phoneRefEl, {
            opacity: 0,
            y: 100,
            scale: 0.7,
          });
        }
        if (phoneBgRefEl) {
          gsap.set(phoneBgRefEl, {
            opacity: 0,
            scale: 0.7,
          });
        }

        if (titleRef2El) {
          gsap.to(titleRef2El, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef2El,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
              immediateRender: false,
            },
          });
        }

        if (subtitleRef2El) {
          gsap.to(subtitleRef2El, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitleRef2El,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
              immediateRender: false,
            },
          });
        }

        if (phoneRefEl || phoneBgRefEl) {
          const triggerElement = phoneRefEl || phoneBgRefEl;
          if (triggerElement) {
            const phoneTimeline = gsap.timeline({
              scrollTrigger: {
                trigger: triggerElement,
                start: "top 80%",
                end: "top 40%",
                scrub: true,
                immediateRender: false,
              },
            });

            if (phoneBgRefEl) {
              phoneTimeline.to(phoneBgRefEl, {
                opacity: 1,
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.6,
              }, 0);
            }

            if (phoneRefEl) {
              phoneTimeline.to(phoneRefEl, {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.4)",
                duration: 0.8,
              }, 0.1);
            }
          }
        }

        if (cardsRefs2El && cardsRefs2El.length > 0) {
          const validCards2 = cardsRefs2El.filter(Boolean);
          if (validCards2.length > 0) {
            const firstCard2 = validCards2[0];
            
            const cardsTimeline2 = gsap.timeline({
              scrollTrigger: {
                trigger: firstCard2,
                start: "top 75%",
                end: "top 35%",
                scrub: true,
                immediateRender: false,
              },
            });

            validCards2.forEach((card, index) => {
              if (card) {
                cardsTimeline2.to(card, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  ease: "back.out(1.3)",
                  duration: 0.7,
                }, index * 0.12);
              }
            });
          }
        }
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

  }, [sectionRef, titleRef, subtitleRef, cardsRefs, titleRef2, subtitleRef2, cardsRefs2, phoneRef, phoneBgRef]);
}
