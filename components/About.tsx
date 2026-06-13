'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="bg-beige py-[140px] px-8 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2 shrink-0">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[72px] md:text-[96px] font-black tracking-tighter mb-10"
          >
            About
          </motion.h2>
          <div className="space-y-8 text-xl leading-[1.8] text-text-primary max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Our name might be silly, but we're not. We're an independent agency with 27 years combined experience.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Prior to Dodo, we led growth strategies at other agencies as well as in-house at Vouchercloud & Groupon.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Quiz your new team on our knowledge and how we can help you.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-dark text-white px-12 py-5 rounded-full font-bold hover:-translate-y-1 transition-transform duration-300 shadow-xl"
          >
            Book a call
          </motion.button>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[600px] mt-12 lg:mt-0">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative z-10 w-full h-[600px] rounded-[32px] overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/aboutus/1000/1200"
              alt="Team at work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 left-1/4 z-20"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0L39.0645 24.9355L64 32L39.0645 39.0645L32 64L24.9355 39.0645L0 32L24.9355 24.9355L32 0Z" fill="#FF4675"/>
            </svg>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[100px] -right-[150px] w-[400px] h-[400px] border border-dark rounded-full border-dashed opacity-50 z-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
