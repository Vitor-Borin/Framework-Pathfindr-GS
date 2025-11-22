import Image from 'next/image';
import { IMAGES } from '../../constants/images';

interface DecorativeCharactersProps {
  characterRefs?: ((el: HTMLDivElement | null) => void)[];
}

const CHARACTERS = [
  { src: IMAGES.decorative.ellipse250, className: "absolute left-[64%] top-[62%] w-[65px] h-[65px]" },
  { src: IMAGES.decorative.ellipse251, className: "absolute right-[78%] top-[39%] w-[65px] h-[65px]" },
  { src: IMAGES.decorative.ellipse252, className: "absolute left-[33%] top-[63%] w-[65px] h-[65px]" },
  { src: IMAGES.decorative.ellipse253, className: "absolute right-[74%] top-[82%] w-[65px] h-[65px]" },
  { src: IMAGES.decorative.ellipse254, className: "absolute left-[73%] bottom-[09%] w-[65px] h-[65px]" },
  { src: IMAGES.decorative.ellipse255, className: "absolute right-[12%] bottom-[65%] w-[65px] h-[65px]" },
];

export default function DecorativeCharacters({ characterRefs }: DecorativeCharactersProps) {
  return (
    <>
      {CHARACTERS.map((character, index) => (
        <div
          key={index}
          ref={characterRefs?.[index]}
          className={`${character.className} hidden xl:block pointer-events-none z-40`}
        >
          <Image alt="" src={character.src} width={65} height={65} className="w-full h-full" />
        </div>
      ))}
    </>
  );
}

