'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function FeaturedTestimonial() {
  return (
    <section className="bg-dark text-white pb-[140px] px-8 w-full relative overflow-hidden -mt-10 pt-10">
      <div className="max-w-[1400px] mx-auto relative flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 relative h-[500px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-pink rounded-[200px] -rotate-45 -z-0"
          ></motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full border-dashed -z-0"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/3 -translate-x-1/2"
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0L29.2984 18.7016L48 24L29.2984 29.2984L24 48L18.7016 29.2984L0 24L18.7016 18.7016L24 0Z" fill="#050505"/>
            </svg>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 z-10 pl-0 lg:pl-12 mt-12 lg:mt-0">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-medium leading-[1.2] mb-12 tracking-tight"
          >
            Dodo are genuinely honest guys and have been pivotal to our growth.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 relative">
              <Image src="https://picsum.photos/seed/jamie/100/100" alt="Jamie Hodgson" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-xl">Jamie Hodgson</div>
              <div className="text-white/70">CBO @ <span className="text-pink">Antibody Analytics</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
