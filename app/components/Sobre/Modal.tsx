'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  logo: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  buttonText: string;
  backgroundColor?: string;
}

export default function Modal({ isOpen, onClose, title, subtitle, logo, features, buttonText, backgroundColor = '#FFB84D' }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        const bodyTop = document.body.style.top;
        document.body.style.overflow = 'unset';
        document.body.style.position = 'unset';
        document.body.style.width = 'unset';
        document.body.style.top = 'unset';
        if (bodyTop) {
          window.scrollTo(0, parseInt(bodyTop || '0') * -1);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative flex flex-col items-center z-10 w-full">
        <div 
          className="relative rounded-[30px] max-w-6xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl"
          style={{ backgroundColor }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-8 md:p-12">
            <div className="flex justify-center mb-6 -mt-8">
              <div className="relative w-28 h-28 rounded-full flex items-center justify-center ">
                <Image
                  src={logo}
                  alt="Logo"
                  width={120}
                  height={120}
                  quality={100}
                  className="object-contain"
                  style={{ width: '120px', height: '120px' }}
                />
              </div>
            </div>
            <button
              onClick={onClose}
              className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors z-10`}
              aria-label="Fechar"
            >
              <X className={`w-6 h-6 ${backgroundColor === '#5431A5' ? 'text-white' : 'text-[#393939]'}`} />
            </button>

          <div className="text-center mb-8">
            <h2 className={`font-bold text-[32px] md:text-[36px] mb-4 leading-tight ${backgroundColor === '#5431A5' ? 'text-white' : 'text-[#393939]'}`}>
              {title}
            </h2>
            <p className={`font-regular text-[18px] md:text-[20px] max-w-2xl mx-auto ${backgroundColor === '#5431A5' ? 'text-white' : 'text-[#393939]'}`}>
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, index) => (
              <div key={index} className={`rounded-[20px] p-6 backdrop-blur-sm ${backgroundColor === '#5431A5' ? 'bg-white/20' : 'bg-white/30'}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center ${backgroundColor === '#5431A5' ? 'bg-white/30' : 'bg-white/50'}`}>
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      quality={100}
                      className="object-contain"
                      style={{ width: '80px', height: '80px' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-[20px] mb-2 ${backgroundColor === '#5431A5' ? 'text-white' : 'text-[#393939]'}`}>
                      {feature.title}
                    </h3>
                    <p className={`font-regular text-[14px] leading-relaxed ${backgroundColor === '#5431A5' ? 'text-white/90' : 'text-[#393939]'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

            <div className="flex justify-center">
              <button
                onClick={onClose}
                className={`font-semibold px-8 py-4 rounded-full text-[18px] transition-colors shadow-lg ${backgroundColor === '#5431A5' ? 'bg-white/30 text-white hover:bg-white/40' : 'bg-[#F9F4F1] text-[#393939] hover:bg-[#F0E8E0]'}`}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

