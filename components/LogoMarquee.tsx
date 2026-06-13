'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const logos = [
  { name: 'Mobil', src: '/logos/mobil.svg' },
  { name: 'Sephora', src: '/logos/sephora.svg' },
  { name: 'Bianchi', src: '/logos/bianchi.svg' },
  { name: 'Indeed', src: '/logos/indeed.svg' },
];

const marqueeLogos = [...logos, ...logos];

export function LogoMarquee() {
  return (
    <section
      aria-label="Brands we have worked with"
      className="relative w-full overflow-hidden bg-beige py-10 md:py-14"
    >
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          className="flex w-max shrink-0 items-center"
        >
          {[0, 1].map((set) => (
            <div
              key={set}
              aria-hidden={set === 1}
              className="flex shrink-0 items-center"
            >
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${set}-${logo.name}-${index}`}
                  className="relative mx-5 h-10 w-36 shrink-0 opacity-90 brightness-0 md:mx-8 md:h-12 md:w-48"
                >
                  <Image
                    src={logo.src}
                    alt={set === 0 ? logo.name : ''}
                    fill
                    loading="eager"
                    unoptimized
                    sizes="(min-width: 768px) 192px, 144px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-beige via-beige/80 to-transparent md:w-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-beige via-beige/80 to-transparent md:w-40"
      />
    </section>
  );
}
