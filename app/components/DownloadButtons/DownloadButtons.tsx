import { forwardRef } from 'react';
import Image from 'next/image';
import { IMAGES } from '../../constants/images';

interface DownloadButtonsProps {}

const DownloadButtons = forwardRef<HTMLDivElement, DownloadButtonsProps>((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 top-[42%] flex gap-8 items-center justify-center z-30"
    >
      <div className="relative">
        <div className="bg-[#ff8cd1] border-2 border-solid border-white h-[60px] rounded-[50px] w-[220px] flex items-center justify-start pl-4 pr-6 cursor-pointer hover:opacity-75 transition-opacity relative">
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3">
            <Image src={IMAGES.navbar.apple} alt="App Store" width={28} height={28} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-normal h-[16px] leading-[100.03%] text-[14px] text-left text-white tracking-[0.68px]">
              Adquira no
            </p>
            <p className="font-normal h-[20px] leading-[100.03%] text-[18px] text-left text-white tracking-[0.88px]">
              App Store
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-[#ff8cd1] border-2 border-solid border-white h-[60px] rounded-[50px] w-[220px] flex items-center justify-start pl-4 pr-6 cursor-pointer hover:opacity-75 transition-opacity relative">
          <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 mr-3">
            <Image src={IMAGES.navbar.googlePlay} alt="Google Play" width={28} height={28} className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-normal h-[16px] leading-[100.03%] text-[14px] text-left text-white tracking-[0.68px]">
              Baixe no
            </p>
            <p className="font-normal h-[20px] leading-[100.03%] text-[18px] text-left text-white tracking-[0.88px]">
              Google Play
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

DownloadButtons.displayName = 'DownloadButtons';

export default DownloadButtons;

