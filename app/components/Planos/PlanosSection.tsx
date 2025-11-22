'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '../../constants/images';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { usePlanosAnimations } from '../../hooks/usePlanosAnimations';

interface PlanosSectionProps {}

export default function PlanosSection({}: PlanosSectionProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  usePlanosAnimations({
    sectionRef: sectionRef.current,
    titleRef: titleRef.current,
    toggleRef: toggleRef.current,
    cardsRefs: [card1Ref.current, card2Ref.current, card3Ref.current],
  });

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden h-screen"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={IMAGES.planos.background}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 
            ref={titleRef}
            className="font-bold text-[#393939] text-[60px] md:text-[52px] mb-6" 
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            Planos
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div ref={toggleRef} className="relative flex items-center rounded-full border border-white/30 bg-white/20 backdrop-blur-md p-2">
              <div
                className={`absolute h-[calc(100%-16px)] rounded-full bg-[#ff8fc6] shadow-lg transition-all duration-500 ease-in-out ${
                  isMonthly 
                    ? 'left-2 w-[calc(50%-4px)]' 
                    : 'left-[calc(50%+2px)] w-[calc(50%-4px)]'
                }`}
              />
              
              <button
                onClick={() => setIsMonthly(true)}
                className="relative z-10 px-6 py-3 rounded-full font-medium text-lg transition-all duration-500 flex items-center justify-center gap-2 flex-1 text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  Mensal
                  {isMonthly && (
                    <ArrowUpRight className="w-6 h-6 transition-opacity duration-300" />
                  )}
                </span>
              </button>
              <button
                onClick={() => setIsMonthly(false)}
                className="relative z-10 px-6 py-3 rounded-full font-medium text-lg transition-all duration-500 flex items-center justify-center gap-2 flex-1 text-white"
              >
                <span className="flex items-center justify-center gap-2">
                  Anual
                  {!isMonthly && (
                    <ArrowUpRight className="w-6 h-6 transition-opacity duration-300" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center justify-center">
          
          <div ref={card1Ref} className="relative shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={IMAGES.planos.cardStart}
              alt="PathFindr Start"
              width={400}
              height={600}
              className="w-full h-auto object-contain"
            />
            
            <div className="absolute inset-0 flex flex-col p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-[#393939] text-[24px] leading-tight">
                  PathFindr Start
                </h3>
                <span className="bg-[#ff8fc6] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap absolute top-2 right-7">
                  Ativo
                </span>
              </div>

              <div className="mb-6">
                <div className="font-bold text-[#393939] text-[42px] leading-none flex items-baseline gap-2 flex-wrap">
                  <span className="whitespace-nowrap">R$ 0</span>
                  <span className="text-[#393939] text-[14px] opacity-70 font-normal whitespace-nowrap">
                    / totalmente gratuito
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    1 check-in por semana
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    3 trilhas básicas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Relatório limitado
                  </span>
                </div>
                
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Check-ins ilimitados
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Todas as trilhas liberadas
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    IA com recomendações externas
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Relatórios completos + desafios de XP
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Apoio a bolsas de requalificação
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#ff8fc6] text-[#393939] font-semibold py-4 rounded-full hover:bg-[#ff7ab8] transition-colors duration-300">
                Cancelar
              </button>
            </div>
          </div>

          <div ref={card2Ref} className="relative md:scale-105 shadow-2xl z-10 transition-all duration-300 hover:shadow-xl">
            <Image
              src={IMAGES.planos.cardPlus}
              alt="PathFindr+"
              width={400}
              height={600}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
            
            <div className="absolute inset-0 flex flex-col p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-[#393939] text-[24px] leading-tight">
                  PathFindr+
                </h3>
                <span className="text-[#393939] text-xs font-semibold py-1 rounded-full whitespace-nowrap absolute top-4 right-1">
                  Recomendado
                </span>
              </div>

              <div className="mb-6">
                <div className="font-bold text-[#393939] text-[42px] leading-none flex items-baseline gap-2 flex-wrap">
                  <span className="whitespace-nowrap">{isMonthly ? 'R$ 29,90' : 'R$ 299,00'}</span>
                  <span className="text-[#393939] text-[14px] opacity-70 font-normal whitespace-nowrap">
                    {isMonthly ? '/ por mês' : '/ por ano'}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Check-ins ilimitados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Todas as trilhas liberadas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    IA com recomendações externas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Relatórios completos + desafios de XP
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Apoio a bolsas de requalificação
                  </span>
                </div>
                
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Dashboard corporativo de bem-estar e performance
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Parceria com impacto social (ODS 10)
                  </span>
                </div>
                <div className="flex items-start gap-3 opacity-50">
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed line-through">
                    Trilhas personalizadas por equipe
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#ff8fc6] text-[#393939] font-semibold py-4 rounded-full hover:bg-[#ff7ab8] transition-colors duration-300 shadow-lg">
                Experimentar 7 dias grátis
              </button>

              <p className="text-center text-[#393939] text-[12px] mt-3 opacity-70">
                Cancele quando quiser, sem taxas.
              </p>
            </div>
          </div>

          <div ref={card3Ref} className="relative shadow-lg transition-all duration-300 hover:shadow-xl">
            <Image
              src={IMAGES.planos.cardTeams}
              alt="PathFindr Teams"
              width={400}
              height={600}
              className="w-full h-auto object-contain"
            />
            
            <div className="absolute inset-0 flex flex-col p-8">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-[#393939] text-[24px] leading-tight">
                  PathFindr Teams
                </h3>
                <span className="bg-[#ff8fc6] text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap absolute top-2 right-1">
                  Enterprise
                </span>
              </div>

              <div className="mb-6">
                <div className="font-bold text-[#393939] text-[40px] leading-none flex items-baseline gap-2 flex-wrap">
                  <span className="whitespace-nowrap">R$ Sob consulta</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Check-ins ilimitados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Todas as trilhas liberadas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    IA com recomendações externas
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Relatórios completos + desafios de XP
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Apoio a bolsas de requalificação
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Dashboard corporativo de bem-estar e performance
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Parceria com impacto social (ODS 10)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ff8fc6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[#393939] text-[14px] leading-relaxed">
                    Trilhas personalizadas por equipe
                  </span>
                </div>
              </div>

              <button className="w-full bg-[#ff8fc6] text-[#393939] font-semibold py-4 rounded-full hover:bg-[#ff7ab8] transition-colors duration-300">
                Falar com a equipe de vendas
              </button>

              <p className="text-center text-[#393939] text-[12px] mt-3 opacity-70">
                Cancele quando quiser, sem taxas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
