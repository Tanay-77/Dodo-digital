'use client';

import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="px-0 pt-12 bg-beige w-full">
      <div className="bg-pink w-full rounded-t-[60px] pt-[120px] pb-[200px] px-8 relative">
        <div className="max-w-[1400px] mx-auto w-full relative flex flex-col md:flex-row items-center justify-between">

          <div className="relative z-10 text-white max-w-2xl text-center md:text-left mb-12 md:mb-0">
            <h2 className="text-[80px] md:text-[120px] font-black leading-[0.9] tracking-tighter">
              Ready.<br />
              Get set.<br />
              <span className="text-dark">Grow.</span>
            </h2>
          </div>

          <div className="relative z-10 flex flex-col items-start gap-6 max-w-md mt-8 md:mt-0 lg:mr-32">
            <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-[400px]">
              Based in a Media & Content Agency – we are driving growth across the whole UX journey
            </p>
            <button className="bg-dark text-white px-8 py-4 rounded-full font-bold text-base hover:scale-105 hover:bg-white hover:text-dark transition-all duration-300 shadow-xl">
              Book a call
            </button>
          </div>

          {/* Decorative black dashed circle with white star */}
          <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-dark rounded-full border-dashed opacity-50 z-0 pointer-events-none flex items-center justify-end">
            <div className="translate-x-1/2">
              <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0 Q 32 32 64 32 Q 32 32 32 64 Q 32 32 0 32 Q 32 32 32 0 Z" fill="white" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
