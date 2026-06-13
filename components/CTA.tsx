'use client';

import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="px-8 pb-[140px] pt-12 bg-beige w-full">
      <div className="max-w-[1400px] mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-pink rounded-[60px] py-[100px] px-8 md:px-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          {/* Decorative stuff */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] border border-white/20 rounded-full border-dashed translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none" />
          <motion.div
            animate={{ rotate: 180 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute left-10 top-10 pointer-events-none"
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0L29.2984 18.7016L48 24L29.2984 29.2984L24 48L18.7016 29.2984L0 24L18.7016 18.7016L24 0Z" fill="white"/>
            </svg>
          </motion.div>

          <div className="relative z-10 text-white max-w-2xl text-center md:text-left mb-12 md:mb-0">
             <h2 className="text-[64px] md:text-[96px] font-black leading-[0.9] tracking-tighter">
              Ready.<br />
              Get set.<br />
              Grow.
            </h2>
          </div>
          <div className="relative z-10 shrink-0">
            <button className="bg-dark text-white px-14 py-6 rounded-full font-bold text-xl hover:scale-105 hover:bg-white hover:text-dark transition-all duration-300 shadow-xl">
              Book a call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
