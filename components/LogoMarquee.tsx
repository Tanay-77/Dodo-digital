'use client';

import { motion } from 'motion/react';

const logos = [
  "SEPHORA", "Indeed", "Lowe's", "Mobil", "Bianchi", "SEPHORA", "Indeed", "Lowe's", "Mobil", "Bianchi"
];

export function LogoMarquee() {
  return (
    <div className="py-20 border-y border-dark/10 overflow-hidden bg-beige w-full">
      <div className="max-w-[1400px] mx-auto w-full flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {logos.map((logo, i) => (
            <div key={i} className="mx-16 md:mx-24 text-3xl md:text-5xl font-black opacity-80 uppercase tracking-tighter mix-blend-color-burn">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
