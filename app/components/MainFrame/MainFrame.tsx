import { forwardRef } from 'react';
import Image from 'next/image';
import { IMAGES } from '../../constants/images';

interface MainFrameProps {}

const MainFrame = forwardRef<HTMLDivElement, MainFrameProps>((props, ref) => {
  return (
    <div 
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 top-0 w-[1641px] max-w-[calc(100%-40px)] z-0 h-screen"
    >
      <div className="relative backdrop-blur-[21px] backdrop-filter h-full w-full rounded-[50px] overflow-hidden">
        <Image
          src={IMAGES.hero.group127}
          alt=""
          width={1641}
          height={1054}
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
          priority
        />
      </div>
    </div>
  );
});

MainFrame.displayName = 'MainFrame';

export default MainFrame;

