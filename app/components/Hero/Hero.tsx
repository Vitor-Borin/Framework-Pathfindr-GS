import { forwardRef } from 'react';

interface HeroProps {}

const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  return (
    <div ref={ref} className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[1122px] max-w-[calc(100%-40px)] z-30">
      <p
        className="font-bold leading-tight text-[#393939] text-[60px] md:text-[52px] text-center mb-3"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
      >
        Um caminho leve para quem<br />
        quer evoluir sem sobrecarregar
      </p>
      <p
        className="font-normal text-[#393939] text-[26px] md:text-[22px] text-center tracking-[1.2px] w-[831px] max-w-full mx-auto mb-3"
      >
        Ferramentas e trilhas criadas para cuidar da sua<br />
        mente, carreira e energia.
      </p>
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;

