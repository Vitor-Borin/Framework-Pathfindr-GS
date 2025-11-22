import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseFeedbacksAnimationsProps {
  sectionRef: HTMLElement | null;
  envelopeRef: HTMLElement | null;
  envelopeClosedRef: HTMLElement | null;
  envelopeOpenRef: HTMLElement | null;
  firstTestimonialRef: HTMLElement | null;
  testimonialsContainerRef: HTMLElement | null;
  starsRef: HTMLElement | null;
}

export function useFeedbacksAnimations({
  sectionRef,
  envelopeRef,
  envelopeClosedRef,
  envelopeOpenRef,
  firstTestimonialRef,
  testimonialsContainerRef,
  starsRef,
}: UseFeedbacksAnimationsProps) {
  useEffect(() => {
    if (!sectionRef) return;

    const ctx = gsap.context(() => {
      if (envelopeClosedRef) {
        gsap.set(envelopeClosedRef, {
          opacity: 1,
          scale: 1,
          rotation: 0,
        });
      }

      if (envelopeOpenRef) {
        gsap.set(envelopeOpenRef, {
          opacity: 0,
          scale: 1,
          rotation: 0,
        });
      }

      if (firstTestimonialRef) {
        gsap.set(firstTestimonialRef, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          x: 0,
        });
      }

      if (testimonialsContainerRef) {
        gsap.set(testimonialsContainerRef, {
          opacity: 0,
          y: 50,
        });
      }

      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1, // Smooth scrubbing
          immediateRender: false,
        },
      });

      if (envelopeClosedRef && envelopeOpenRef) {
        masterTimeline
          .to(envelopeClosedRef, {
            rotationY: 90,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: 'power2.in',
          })
          .set(envelopeClosedRef, { display: 'none' })
          .set(envelopeOpenRef, { display: 'block' })
          .fromTo(
            envelopeOpenRef,
            {
              rotationY: -90,
              opacity: 0,
              scale: 0.95,
            },
            {
              rotationY: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: 'power2.out',
            },
            '-=0.6'
          );
      }

      if (firstTestimonialRef && envelopeOpenRef) {
        masterTimeline.to(
          firstTestimonialRef,
          {
            opacity: 1,
            y: -200, // Moves up and out
            scale: 1,
            x: 0,
            duration: 1.2,
            ease: 'back.out(1.4)',
            pointerEvents: 'auto',
          },
          '-=0.4' // Start slightly before envelope fully opens
        );
      }

      if (envelopeOpenRef && testimonialsContainerRef && firstTestimonialRef) {
        masterTimeline
          .to(
            envelopeOpenRef,
            {
              opacity: 0,
              scale: 0.7,
              y: -100,
              rotation: -10,
              duration: 0.8,
              ease: 'power2.in',
            },
            '-=0.3'
          )
          .to(
            firstTestimonialRef,
            {
              opacity: 0,
              scale: 0.8,
              y: -300,
              x: -50,
              rotation: -5,
              duration: 0.6,
              ease: 'power2.in',
              pointerEvents: 'none',
            },
            '-=0.8'
          )
          .to(
            testimonialsContainerRef,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              pointerEvents: 'auto',
            },
            '-=0.4'
          );
      }

      if (starsRef) {
        gsap.to(starsRef, {
          y: '+=20',
          duration: 10,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [
    sectionRef,
    envelopeRef,
    envelopeClosedRef,
    envelopeOpenRef,
    firstTestimonialRef,
    testimonialsContainerRef,
    starsRef,
  ]);
}

