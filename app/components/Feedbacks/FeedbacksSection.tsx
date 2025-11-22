'use client';

import { useEffect, useRef, useState, memo } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../../constants/images';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ASSETS = {
  envelopeBack: "/feedbacks/verso.png",
  envelopeFront: "/feedbacks/frente.png",
  userAnne: "/feedbacks/anne.png",
  userBeatriz: "/feedbacks/beatriz.png",
  userPaulo: "/feedbacks/paulo.png",
  userVitor: "/feedbacks/vitor.png",
  userJenifer: "/feedbacks/jenifer.png",
  stars: "/feedbacks/Group-117.png",
};

const FEEDBACKS = [
  {
    id: 1,
    name: "Beatriz Amaral",
    role: "Web Designer",
    image: ASSETS.userBeatriz,
    stars: 5,
    text: "O PathFindr virou parte da minha rotina. Eu nunca tinha encontrado um app que unisse bem-estar, autoconhecimento e evolução profissional de um jeito tão leve. As dinâmicas são gostosas de fazer e realmente me ajudaram a entender meus pontos fortes no trabalho.",
  },
  {
    id: 2,
    name: "Anne Franco",
    role: "Analista de dados do Itaú",
    image: ASSETS.userAnne,
    stars: 5,
    text: "Eu entrei buscando organização emocional e saí com muito mais: clareza, equilíbrio e propósito. O app me ajudou a lidar com ansiedade no ambiente corporativo e melhorou meu foco no dia a dia. Recomendo para qualquer pessoa que quer evoluir sem se sobrecarregar.",
  },
  {
    id: 3,
    name: "Paulo Blanco",
    role: "Engenheiro de Software",
    image: ASSETS.userPaulo,
    stars: 5,
    text: "Acompanhar minha energia ao longo da semana mudou tudo. As auras e desafios me mantêm motivado e consciente do meu ritmo. O app é bonito, intuitivo e realmente funcional. Me surpreendeu pela profundidade e simplicidade ao mesmo tempo.",
  },
  {
    id: 4,
    name: "Vitor Borin",
    role: "Engenheiro de Software do Nubank",
    image: ASSETS.userVitor,  
    stars: 5,   
    text: "O PathFindr transformou minha forma de gerenciar energia e produtividade. As trilhas personalizadas me ajudaram a encontrar um equilíbrio entre trabalho e bem-estar. O app é intuitivo e as dinâmicas realmente fazem diferença no dia a dia.",
  },
  {
    id: 5,
    name: "Jenifer",
    role: "Engenheira de Software",
    image: ASSETS.userJenifer,
    stars: 5,
    text: "O PathFindr revolucionou minha rotina de trabalho. Acompanhar minha energia e identificar meus padrões me deu clareza sobre quando estou mais produtiva. As dinâmicas são envolventes e me ajudaram a criar uma rotina mais equilibrada e eficiente.",
  },
];

type FeedbackType = typeof FEEDBACKS[0];

const ENVELOPE_WIDTH = 420;
const ENVELOPE_FRONT_HEIGHT = Math.round(ENVELOPE_WIDTH * (526 / 716));
const ENVELOPE_BACK_HEIGHT = Math.round(ENVELOPE_WIDTH * (885 / 716));
const ENVELOPE_BACK_OFFSET_Y = 14;
const CARD_HEIGHT = 420;
const CARD_EMERGE_START = CARD_HEIGHT * 0.5;
const CARD_EMERGE_END = -80;

const FeedbackCard = memo(({
  data,
  isActive = false,
  avatarTilt = 0,
}: {
  data: FeedbackType;
  isActive?: boolean;
  avatarTilt?: number;
}) => {
  return (
    <div
      className={`relative w-[340px] md:w-[380px] h-[500px] bg-white rounded-[30px] shadow-xl flex flex-col items-center p-8 text-center transition-all duration-500 overflow-hidden hover:shadow-2xl ${isActive ? 'scale-105 z-20' : 'scale-100'}`}
    >
      <div className="relative z-10 flex flex-col items-center h-full">
        <div
          className="w-20 h-20 rounded-[20px] overflow-hidden mb-4 flex-shrink-0 relative"
          style={{ transform: `rotate(${avatarTilt}deg)` }}
        >
          <Image
            src={data.image}
            alt={data.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="font-bold text-[#393939] text-[22px] leading-tight mb-1">{data.name}</h3>
        <span className="text-[#999] text-[14px] mb-4">{data.role}</span>

        <div className="flex gap-1 mb-4 text-yellow-400">
          {[...Array(data.stars)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          ))}
        </div>

        <p className="text-[#666] text-[14px] leading-relaxed flex-1 overflow-y-auto">
          &ldquo;{data.text}&rdquo;
        </p>
      </div>
    </div>
  );
});

FeedbackCard.displayName = 'FeedbackCard';

export default function FeedbacksSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeBackRef = useRef<HTMLDivElement>(null);
  const envelopeFrontRef = useRef<HTMLDivElement>(null);
  const cardInsideRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [animationComplete, setAnimationComplete] = useState(false);

  const getVisibleCards = () => {
    const cards: Array<FeedbackType & { position: number }> = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + FEEDBACKS.length) % FEEDBACKS.length;
      cards.push({ ...FEEDBACKS[index], position: i });
    }
    return cards;
  };

  const getCardStyle = (position: number) => {
    if (position === -1) return { transform: 'translate(-140px, -10px) rotate(-6deg) scale(0.94)', opacity: 0.9, transformOrigin: 'center' };
    if (position === 1) return { transform: 'translate(140px, -10px) rotate(6deg) scale(0.94)', opacity: 0.9, transformOrigin: 'center' };
    return { transform: 'translateY(8px) scale(1.07)', opacity: 1, transformOrigin: 'center' };
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % FEEDBACKS.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + FEEDBACKS.length) % FEEDBACKS.length);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };

  const handlePointerEnd = () => {
    if (dragStartX.current === null) return;
    const delta = dragDelta.current;
    dragStartX.current = null;
    dragDelta.current = 0;
    const threshold = 50;
    if (delta > threshold) {
      prevCard();
    } else if (delta < -threshold) {
      nextCard();
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(carouselRef.current, { 
        opacity: 0,
        y: 50
      });

      gsap.set(cardInsideRef.current, {
        y: CARD_EMERGE_START,
        scale: 0.9,
        opacity: 1,
        zIndex: 20
      });

      gsap.set(envelopeFrontRef.current, {
        y: 0,
        rotation: 0,
        x: 0
      });

      gsap.set(envelopeBackRef.current, {
        y: 0,
        rotation: 0,
        x: 0,
        scale: 1
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%", 
          scrub: 1,
          pin: true,
        }
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=200%",
        onUpdate: (self) => {
          if (self.progress > 0.75) {
            setAnimationComplete(true);
          } else {
            setAnimationComplete(false);
          }
        }
      });

      tl.to(cardInsideRef.current, { 
        y: CARD_EMERGE_END,
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power1.out"
      }, 0)
      .to(envelopeFrontRef.current, {
        y: 30,
        rotation: 0,
        duration: 0.8,
        ease: "power1.out"
      }, 0)
      .to(cardInsideRef.current, {
        y: -20,
        x: 0,
        scale: 1,
        duration: 0.8,
        ease: "power1.out"
      }, 0.9)
      .to([envelopeBackRef.current, envelopeFrontRef.current], {
        y: 600,
        opacity: 0,
        duration: 1.1,
        ease: "power1.inOut"
      }, 1.0)
      .to(cardInsideRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.in"
      }, 1.4)
      .to(carouselRef.current, { 
        opacity: 1,
        y: 0,
        duration: 1.3, 
        ease: "back.out(1.2)"
      }, 2.0);

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current) return;
    
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(refreshTimeout);
    };
  }, []);

  const visibleCards = getVisibleCards();

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[110vh] overflow-hidden flex flex-col items-center justify-start pt-24 pb-24"
      style={{
        background: 'linear-gradient(to bottom, rgba(249, 244, 241, 1) 13%, rgba(247, 216, 195, 0.8) 43%, rgba(255, 168, 184, 0.65) 64%, rgba(249, 244, 241, 1) 87%, rgba(249, 244, 241, 1) 100%)'
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 15%, rgba(255, 201, 74, 0.95) 2px, transparent 3px),
            radial-gradient(circle at 70% 25%, rgba(255, 201, 74, 0.95) 2.2px, transparent 3.2px),
            radial-gradient(circle at 40% 60%, rgba(255, 201, 74, 0.95) 1.8px, transparent 3px),
            radial-gradient(circle at 85% 70%, rgba(255, 201, 74, 0.95) 2px, transparent 3px),
            radial-gradient(circle at 15% 75%, rgba(255, 201, 74, 0.95) 2.1px, transparent 3.2px),
            radial-gradient(circle at 55% 85%, rgba(255, 201, 74, 0.95) 1.8px, transparent 2.8px),
            radial-gradient(circle at 32% 35%, rgba(255, 255, 255, 0.45) 6px, transparent 10px),
            radial-gradient(circle at 78% 55%, rgba(255, 255, 255, 0.35) 7px, transparent 12px)
          `,
          backgroundSize: '160px 160px',
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 6px rgba(255, 200, 80, 0.45))'
        }}
      />
      <div className="absolute top-20 text-center z-50 pointer-events-none">
        <h2 
          className="font-bold text-[#393939] text-[60px] md:text-[52px] mb-6"
          style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          Apreciamos Cada Passo da<br />
          <span className="relative inline-block">
            Sua Evolução
          </span>
        </h2>
        <p className="font-regular text-[#393939] text-[24px] md:text-[20px] max-w-3xl mx-auto">
          Veja como o PathFindr ajudou profissionais a transformarem rotina, foco e bem-estar no trabalho.
        </p>
      </div>

      <div 
        ref={carouselRef}
        className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[96vw] flex justify-center items-center gap-10 z-10 opacity-0 cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
      >
        {visibleCards.map((card) => {
          const position = card.position;
          const isCenter = position === 0;
          const avatarTilt = 0;

          return (
            <div
              key={card.id}
              className="transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] will-change-transform will-change-opacity"
              style={getCardStyle(position)}
            >
              <FeedbackCard data={card} isActive={isCenter} avatarTilt={avatarTilt} />
            </div>
          );
        })}
      </div>

      {animationComplete && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
          <button
            onClick={prevCard}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#393939]" />
          </button>
          <button
            onClick={nextCard}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 text-[#393939]" />
          </button>
        </div>
      )}

      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[620px] h-[620px] flex justify-center items-end pointer-events-none overflow-visible">

        <div
          className="relative pointer-events-none"
          style={{ width: `${ENVELOPE_WIDTH}px`, height: `${ENVELOPE_BACK_HEIGHT}px` }}
        >

          <div
            ref={envelopeBackRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            style={{ width: `${ENVELOPE_WIDTH}px`, height: `${ENVELOPE_BACK_HEIGHT}px`, bottom: `-${ENVELOPE_BACK_OFFSET_Y}px` }}
          >
            <Image
              src={ASSETS.envelopeBack}
              alt="Envelope Back"
              fill
              className="object-contain"
              sizes={`${ENVELOPE_WIDTH}px`}
            />
          </div>

          {!animationComplete && (
            <div
              ref={cardInsideRef}
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
              style={{ bottom: ENVELOPE_FRONT_HEIGHT - (CARD_HEIGHT * 0.5) }}
            >
              <FeedbackCard data={FEEDBACKS[1]} />
            </div>
          )}

          <div
            ref={envelopeFrontRef}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
            style={{ width: `${ENVELOPE_WIDTH}px`, height: `${ENVELOPE_FRONT_HEIGHT}px` }}
          >
            <Image
              src={ASSETS.envelopeFront}
              alt="Envelope Front"
              fill
              className="object-contain"
              sizes={`${ENVELOPE_WIDTH}px`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

