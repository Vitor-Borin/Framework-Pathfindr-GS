'use client';

import { useRef, memo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../../constants/images';
import { useSobreAnimations } from '../../hooks/useSobreAnimations';
import Modal from './Modal';

interface CardProps {
  icon: string;
  text: string;
  iconAlt: string;
  index?: number;
  cardRef?: (el: HTMLDivElement | null) => void;
  onClick?: () => void;
}

const Card = memo(({ icon, text, iconAlt, index, cardRef, onClick }: CardProps) => {
  const isCapacitacaoCard = index === 2;
  const isIACard = index === 1;
  
  return (
    <div 
      ref={cardRef}
      onClick={onClick}
      className="relative rounded-[20px] border border-[#ff8fc6] border-solid pt-8 px-8 pb-0 hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[220px] flex flex-col overflow-hidden"
    >
      <div 
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
        className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
        style={{
          boxShadow: 'inset 10px 7px 34px 1px rgba(213, 92, 173, 0.35)'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 11L11 1M11 1H1M11 1V11" stroke="#393939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {isIACard ? (
        <div className="flex-1 flex items-start justify-between gap-6 pt-16">
          <div className="w-55 h-55 flex items-start justify-start flex-shrink-0">
            <Image src={icon} alt={iconAlt} width={144} height={144} className="w-full h-full object-contain" />
          </div>
          
          <div className="font-semibold text-[#393939] text-[33px] leading-[1.4] text-right flex-1">
            <div>Mais informações</div>
            <div>sobre inteligência</div>
            <div>artificial</div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-end justify-between gap-6 mt-auto">
          <div className="w-55 h-55 flex items-end justify-start flex-shrink-0">
            <Image src={icon} alt={iconAlt} width={144} height={144} className="w-full h-full object-contain" />
          </div>
          
          {isCapacitacaoCard ? (
            <div className="font-semibold text-[#393939] text-[33px] leading-[1.4] text-right flex-1">
              <div>Maior</div>
              <div>capacitação</div>
              <div>profissional</div>
            </div>
          ) : (
            <p className="font-semibold text-[#393939] text-[33px] leading-[1.4] text-right flex-1">
              {text}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

interface SobreSectionProps {}

export default function SobreSection({}: SobreSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const subtitleRef2 = useRef<HTMLParagraphElement>(null);
  const cardsRefs2 = useRef<(HTMLDivElement | null)[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneBgRef = useRef<HTMLDivElement>(null);

  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const modalData = [
    {
      title: "Equilíbrio de capacitação e bem estar no trabalho",
      subtitle: "Aprenda com a gente a equilibrar seu trabalho com sua saúde mental.",
      logo: "/modal-sobre/logo-findr.png",
      backgroundColor: "#FFB84D",
      features: [
        {
          icon: "/modal-sobre/acesso-facil.png",
          title: "Acesso Fácil e rápido",
          description: "Materiais curtos, micro-aula que cabem entre uma reunião e outra, para você colocar em prática imediatamente, sem criar mais carga."
        },
        {
          icon: "/modal-sobre/rotinas.png",
          title: "Rotinas que sustentam",
          description: "Pequenos hábitos diários para reduzir estresse e melhorar foco. São práticas pensadas para se adaptar à sua rotina, não para substituí-la"
        },
        {
          icon: "/modal-sobre/autoconhecimento.png",
          title: "Autoconhecimento prático",
          description: "Ferramentas para entender padrões de energia, gatilhos de ansiedade e momentos de maior produtividade"
        },
        {
          icon: "/modal-sobre/apoio-na-carreira.png",
          title: "Apoio na carreira e performance",
          description: "Conteúdos que conectam bem-estar com desempenhos concretos."
        }
      ],
      buttonText: "Iniciar trilha"
    },
    {
      title: "Mais informações sobre inteligência artificial",
      subtitle: "Aprenda a usar IA de um jeito simples, seguro e que realmente ajude no seu dia a dia.",
      logo: "/modal-sobre/logo-azul.png",
      backgroundColor: "#93BEFD",
      features: [
        {
          icon: "/modal-sobre/conceitos.png",
          title: "Conceitos essenciais",
          description: "Explicações rápidas para você entender como a IA funciona."
        },
        {
          icon: "/modal-sobre/ia-no-trabalho.png",
          title: "IA no trabalho",
          description: "Dicas para aproveitar a tecnologia sem perder o olhar humano."
        },
        {
          icon: "/modal-sobre/aplicacoes.png",
          title: "Aplicações práticas",
          description: "Como usar IA para organizar tarefas, estudo e produtividade."
        },
        {
          icon: "/modal-sobre/uso-responsavel.png",
          title: "Uso responsável",
          description: "Boas práticas para ter segurança e ética no uso da IA."
        }
      ],
      buttonText: "Explorar conteúdo"
    },
    {
      title: "Maior capacitação profissional",
      subtitle: "Conteúdos criados para acelerar seu crescimento profissional com equilíbrio.",
      logo: "/modal-sobre/logo-roxo.png",
      backgroundColor: "#5431A5",
      features: [
        {
          icon: "/modal-sobre/aprendizado.png",
          title: "Aprendizado rápido",
          description: "Materiais objetivos, fáceis de consumir e aplicar."
        },
        {
          icon: "/modal-sobre/planos.png",
          title: "Planos de evolução",
          description: "Passos concretos para desenvolver sua carreira com mais clareza."
        },
        {
          icon: "/modal-sobre/soft-e-hard.png",
          title: "Soft e hard skills",
          description: "Habilidades essenciais para o mercado atual."
        },
        {
          icon: "/modal-sobre/pratica.png",
          title: "Prática contínua",
          description: "Atividades curtas para manter consistência sem sobrecarregar."
        }
      ],
      buttonText: "Começar agora"
    },
    {
      title: "Guia e estratégia na mudança de carreira",
      subtitle: "Descubra o caminho certo para fazer a transição profissional que você busca.",
      logo: "/modal-sobre/logo-laranja.png",
      backgroundColor: "#FF8FC6",
      features: [
        {
          icon: "/modal-sobre/entenda-seu-perfil.png",
          title: "Entenda seu perfil",
          description: "Ferramentas para descobrir seus pontos fortes e interesses."
        },
        {
          icon: "/modal-sobre/caminho.png",
          title: "Caminho estruturado",
          description: "Etapas práticas para mudar de área sem perder tempo."
        },
        {
          icon: "/modal-sobre/habilidade-chave.png",
          title: "Habilidades-chave",
          description: "O que desenvolver para entrar na nova área com confiança."
        },
        {
          icon: "/modal-sobre/suporte.png",
          title: "Suporte na transição",
          description: "Dicas para navegar desafios emocionais e profissionais da mudança."
        }
      ],
      buttonText: "Ver guia"
    }
  ];

  const cards = [
    {
      icon: IMAGES.sobre.equilibrio,
      text: "Equilíbrio de capacitação e bem estar no trabalho",
      iconAlt: "Equilíbrio"
    },
    {
      icon: IMAGES.sobre.ia,
      text: "Mais informações sobre inteligência artificial",
      iconAlt: "Inteligência Artificial"
    },
    {
      icon: IMAGES.sobre.capacitacao,
      text: "Maior capacitação profissional",
      iconAlt: "Capacitação"
    },
    {
      icon: IMAGES.sobre.carreira,
      text: "Guia e estratégia na mudança de carreira",
      iconAlt: "Carreira"
    },
  ];

  const features = [
    {
      icon: IMAGES.sobre.carreiraIcon,
      title: "Carreira",
      description: "Orientações práticas para desenvolver habilidades e avançar profissionalmente de forma sustentável.",
      iconAlt: "Carreira"
    },
    {
      icon: IMAGES.sobre.bemestarIcon,
      title: "Bem-estar",
      description: "Conteúdos que fortalecem o emocional, reduzem estresse e promovem saúde mental no trabalho.",
      iconAlt: "Bem-estar"
    },
    {
      icon: IMAGES.sobre.iaIcon,
      title: "IA na sua carreira",
      description: "Aprenda como usar inteligência artificial para potencializar suas entregas e acelerar resultados.",
      iconAlt: "IA na sua carreira"
    },
    {
      icon: IMAGES.sobre.gamificacaoIcon,
      title: "Gamificação",
      description: "Metas, pontos e recompensas que tornam sua jornada mais divertida, motivadora e ainda educacional.",
      iconAlt: "Gamificação"
    },
    {
      icon: IMAGES.sobre.trilhaIcon,
      title: "Trilha Personalizada",
      description: "Um percurso exclusivo criado a partir do seu perfil, objetivos e ritmo de aprendizado.",
      iconAlt: "Trilha Personalizada"
    },
  ];

  const createCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRefs.current[index] = el;
  };

  const createCardRef2 = (index: number) => (el: HTMLDivElement | null) => {
    cardsRefs2.current[index] = el;
  };

  useSobreAnimations({
    sectionRef: sectionRef.current,
    titleRef: titleRef.current,
    subtitleRef: subtitleRef.current,
    cardsRefs: cardsRefs.current,
    titleRef2: titleRef2.current,
    subtitleRef2: subtitleRef2.current,
    cardsRefs2: cardsRefs2.current,
    phoneRef: phoneRef.current,
    phoneBgRef: phoneBgRef.current,
  });

  return (
    <section ref={sectionRef} className="relative w-full overflow-visible bg-[#F9F4F1]">
      <div className="relative w-full pt-20 pb-20 px-4">
        <div className="absolute top-0 left-0 pointer-events-none z-0" style={{ transform: 'translate(0%, -35%)' }}>
          <Image 
            src={IMAGES.sobre.pinkCircle1} 
            alt="" 
            width={2000} 
            height={2000} 
            className="w-auto h-auto opacity-100"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none z-0" style={{ transform: 'translate(0%, 40%)' }}>
          <Image 
            src={IMAGES.sobre.pinkCircle2} 
            alt="" 
            width={2000} 
            height={2000} 
            className="w-auto h-auto opacity-100"
            loading="lazy"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 
              ref={titleRef}
              className="font-bold text-[#393939] text-[60px] md:text-[52px] mb-6"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Encontre o caminho que faz sentido pra você
            </h2>
            <p 
              ref={subtitleRef}
              className="font-regular text-[#393939] text-[24px] md:text-[20px] max-w-3xl mx-auto"
            >
              Recursos criados para apoiar seu desenvolvimento pessoal e profissional, do seu jeito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                text={card.text}
                iconAlt={card.iconAlt}
                index={index}
                cardRef={createCardRef(index)}
                onClick={() => setOpenModalIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {openModalIndex !== null && modalData[openModalIndex] && (
        <Modal
          isOpen={openModalIndex !== null}
          onClose={() => setOpenModalIndex(null)}
          title={modalData[openModalIndex].title}
          subtitle={modalData[openModalIndex].subtitle}
          logo={modalData[openModalIndex].logo}
          features={modalData[openModalIndex].features}
          buttonText={modalData[openModalIndex].buttonText}
          backgroundColor={modalData[openModalIndex].backgroundColor}
        />
      )}

      <div className="relative w-full pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef2}
              className="font-bold text-[#393939] text-[60px] md:text-[52px] mb-3"
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Você no centro da sua evolução
            </h2>
            <p 
              ref={subtitleRef2}
              className="font-regular text-[#393939] text-[24px] md:text-[20px] max-w-3xl mx-auto"
            >
              Descubra recursos pensados para apoiar seu desenvolvimento em todas as áreas.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="self-start">
                <FeatureCard
                  icon={features[0].icon}
                  title={features[0].title}
                  description={features[0].description}
                  iconAlt={features[0].iconAlt}
                  cardRef={createCardRef2(0)}
                />
              </div>
              
              <div ref={phoneRef} className="relative flex items-end justify-center self-center overflow-visible">
                <div 
                  ref={phoneBgRef}
                  className="absolute bg-[#ff8fc6] rounded-[20px]" 
                  style={{ width: '362px', height: '400px', bottom: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
                ></div>
                <Image
                  src={IMAGES.sobre.celular}
                  alt="Celular PathFindr"
                  width={320}
                  height={640}
                  className="w-auto h-auto object-contain relative"
                  style={{ maxWidth: '320px', maxHeight: '640px', zIndex: 10 }}
                  loading="lazy"
                />
              </div>
              
              <div className="self-start">
                <FeatureCard
                  icon={features[1].icon}
                  title={features[1].title}
                  description={features[1].description}
                  iconAlt={features[1].iconAlt}
                  cardRef={createCardRef2(1)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <FeatureCard
                icon={features[2].icon}
                title={features[2].title}
                description={features[2].description}
                iconAlt={features[2].iconAlt}
                cardRef={createCardRef2(2)}
              />
              
              <div className="mt-7 ">
                <FeatureCard
                  icon={features[4].icon}
                  title={features[4].title}
                  description={features[4].description}
                  iconAlt={features[4].iconAlt}
                  cardRef={createCardRef2(4)}
                />
              </div>
              
              <FeatureCard
                icon={features[3].icon}
                title={features[3].title}
                description={features[3].description}
                iconAlt={features[3].iconAlt}
                cardRef={createCardRef2(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
  cardRef?: (el: HTMLDivElement | null) => void;
}

const FeatureCard = memo(({ icon, title, description, iconAlt, cardRef }: FeatureCardProps) => {
  return (
    <div 
      ref={cardRef}
      className="relative rounded-[20px] border border-[#ff8fc6] border-solid p-6 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col bg-transparent w-full min-h-[280px]"
    >
      <div 
        className="w-16 h-16 rounded-full bg-[#ff8fc6]/20 flex items-center justify-center mb-4 flex-shrink-0"
        style={{
          boxShadow: 'inset 10px 7px 34px 1px rgba(213, 92, 173, 0.35)'
        }}
      >
        <Image 
          src={icon} 
          alt={iconAlt} 
          width={32} 
          height={32} 
          className="w-8 h-8 object-contain" 
        />
      </div>
      
      <h3 className="font-bold text-[#393939] text-[24px] mb-3">
        {title}
      </h3>
      
      <p className="font-regular text-[#393939] text-[16px] leading-relaxed mb-6 flex-1">
        {description}
      </p>
      
      <span 
        className="text-[#ff8fc6] font-medium text-[16px] inline-flex items-center gap-1 self-start group"
      >
        Ver Mais <ArrowRight size={16} className="arrow-animate" />
      </span>
    </div>
  );
});
