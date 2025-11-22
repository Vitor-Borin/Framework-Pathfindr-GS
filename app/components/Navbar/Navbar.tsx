import { forwardRef } from 'react';

interface NavbarProps {}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>((props, ref) => {
  return (
    <div 
      ref={ref} 
      className="absolute left-1/2 -translate-x-1/2 top-[60px] z-50 flex items-center justify-between px-8 bg-white/30 backdrop-blur-xl border border-[#bebebe] border-solid h-[70px] rounded-[200px] max-w-[900px] w-[calc(100%-100px)] shadow-lg shadow-pink-100/50"
    >
      <a 
        href="#hero"
        className="font-bold h-[24px] leading-[normal] text-[22px] text-black cursor-pointer hover:opacity-80 transition-all duration-300 whitespace-nowrap hover:scale-105"
      >
        PathFindr
      </a>

      <div className="flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        <a 
          href="#hero"
          className="font-normal h-[22px] leading-[normal] text-[18px] text-black cursor-pointer whitespace-nowrap relative group transition-all duration-300 hover:text-[#ff8fc6]"
        >
          Home
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff8fc6] transition-all duration-300 group-hover:w-3/4"></span>
        </a>
        <a 
          href="#sobre"
          className="font-normal h-[22px] leading-[normal] text-[18px] text-black cursor-pointer whitespace-nowrap relative group transition-all duration-300 hover:text-[#ff8fc6]"
        >
          Sobre
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff8fc6] transition-all duration-300 group-hover:w-3/4"></span>
        </a>
        <a 
          href="#planos"
          className="font-normal h-[22px] leading-[normal] text-[18px] text-black cursor-pointer whitespace-nowrap relative group transition-all duration-300 hover:text-[#ff8fc6]"
        >
          Planos
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff8fc6] transition-all duration-300 group-hover:w-3/4"></span>
        </a>
        <a 
          href="#feedbacks"
          className="font-normal h-[22px] leading-[normal] text-[18px] text-black cursor-pointer whitespace-nowrap relative group transition-all duration-300 hover:text-[#ff8fc6]"
        >
          Feedbacks
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff8fc6] transition-all duration-300 group-hover:w-3/4"></span>
        </a>
      </div>
      
      <div className="bg-[#ff8fc6] border-[#ff8fc6] border-[2px] border-solid h-[38px] rounded-[50px] px-5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#ff7ab8] hover:border-[#ff7ab8] hover:shadow-md hover:shadow-pink-300/50 hover:scale-105">
        <p className="font-normal h-[22px] leading-[normal] text-[18px] text-white whitespace-nowrap">
          Contato
        </p>
      </div>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

