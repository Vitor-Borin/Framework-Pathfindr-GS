import Image from 'next/image';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { IMAGES } from '../../constants/images';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Feedbacks', href: '#feedbacks' },
];

const CONTACT_ITEMS = [
  { label: 'Fale conosco', href: 'mailto:sac@pathfindr.com.br' },
  { label: 'sac@pathfindr.com.br', href: 'mailto:sac@pathfindr.com.br' },
  { label: 'Av. Paulista, 1106 – São Paulo - SP, 01311-000', href: 'https://maps.google.com/?q=Av.+Paulista,+1106+São+Paulo' },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-[#f9f4f1] text-[#3c3c3c] overflow-hidden rounded-t-[28px] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] min-h-[63vh]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f4f1] via-[#f9f4f1]/60 to-transparent" />
        
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[100vw] h-[350px] md:h-[450px]">
          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 80%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0) 80%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(1px)' }}
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 90%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,0) 90%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(10px)' }}
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0.6) 90%, rgba(0,0,0,0) 100%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(8px)' }}
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0.5) 90%, rgba(0,0,0,0) 100%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(15px)' }}
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.6) 92%, rgba(0,0,0,0.4) 97%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.15) 80%, rgba(0,0,0,0.6) 92%, rgba(0,0,0,0.4) 97%, rgba(0,0,0,0) 100%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(25px)' }}
              loading="lazy"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.5) 97%, rgba(0,0,0,1) 100%)',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 85%, rgba(0,0,0,0.1) 92%, rgba(0,0,0,0.5) 97%, rgba(0,0,0,1) 100%)',
            }}
          >
            <Image
              src={IMAGES.footer.logo}
              alt="PathFindr"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              style={{ filter: 'blur(40px)' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          <div className="max-w-xs text-[18px] leading-relaxed">
            <p>PathFindr é a plataforma que une bem-estar emocional e evolução de carreira em um só lugar.</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-[#f24fa0] text-lg">Mapa do site</h4>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] hover:text-[#f24fa0] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-[#f24fa0] text-lg">Dúvidas</h4>
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[16px] hover:text-[#f24fa0] transition-colors"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-[#f24fa0] text-lg">Siga-nos</h4>
            <div className="flex items-center gap-4 text-[#3c3c3c]">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-[#d8d4cf] bg-white/80 shadow-sm flex items-center justify-center hover:border-[#f24fa0] hover:text-[#f24fa0] transition-colors"
                  aria-label="Rede social"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
