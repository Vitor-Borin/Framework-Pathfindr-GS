import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseSobreAnimationsProps {
  sectionRef: HTMLElement | null;
  titleRef: HTMLElement | null;
  subtitleRef: HTMLElement | null;
  cardsRefs: (HTMLElement | null)[];
  titleRef2?: HTMLElement | null;
  subtitleRef2?: HTMLElement | null;
  cardsRefs2?: (HTMLElement | null)[];
  phoneRef?: HTMLElement | null;
  phoneBgRef?: HTMLElement | null;
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
    if (!sectionRef) return;

    let ctx: gsap.Context | null = null;

    const initAnimations = () => {
      if (!sectionRef) return;

      ctx = gsap.context(() => {
      gsap.set([titleRef, subtitleRef].filter(Boolean), {
        opacity: 0,
        y: 50,
      });

      cardsRefs.forEach((card, index) => {
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

      if (subtitleRef) {
        gsap.to(subtitleRef, {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subtitleRef,
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

      if (titleRef2 || subtitleRef2 || (cardsRefs2 && cardsRefs2.length > 0) || phoneRef || phoneBgRef) {
        if (titleRef2) {
          gsap.set(titleRef2, {
            opacity: 0,
            y: 50,
          });
        }
        if (subtitleRef2) {
          gsap.set(subtitleRef2, {
            opacity: 0,
            y: 50,
          });
        }

        if (cardsRefs2) {
          cardsRefs2.forEach((card, index) => {
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

        if (phoneRef) {
          gsap.set(phoneRef, {
            opacity: 0,
            y: 100,
            scale: 0.7,
          });
        }
        if (phoneBgRef) {
          gsap.set(phoneBgRef, {
            opacity: 0,
            scale: 0.7,
          });
        }

        if (titleRef2) {
          gsap.to(titleRef2, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef2,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
              immediateRender: false,
            },
          });
        }

        if (subtitleRef2) {
          gsap.to(subtitleRef2, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: subtitleRef2,
              start: "top 85%",
              end: "top 60%",
              scrub: true,
              immediateRender: false,
            },
          });
        }

        if (phoneRef || phoneBgRef) {
          const triggerElement = phoneRef || phoneBgRef;
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

            if (phoneBgRef) {
              phoneTimeline.to(phoneBgRef, {
                opacity: 1,
                scale: 1,
                ease: "back.out(1.2)",
                duration: 0.6,
              }, 0);
            }

            if (phoneRef) {
              phoneTimeline.to(phoneRef, {
                opacity: 1,
                y: 0,
                scale: 1,
                ease: "back.out(1.4)",
                duration: 0.8,
              }, 0.1);
            }
          }
        }

        if (cardsRefs2 && cardsRefs2.length > 0) {
          const validCards2 = cardsRefs2.filter(Boolean);
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

  }, [sectionRef, titleRef, subtitleRef, cardsRefs, titleRef2, subtitleRef2, cardsRefs2, phoneRef, phoneBgRef]);
}
