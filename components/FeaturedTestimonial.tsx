'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function FeaturedTestimonial() {
  return (
    <section className="bg-dark text-white pb-[140px] px-8 w-full relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative flex flex-col lg:flex-row items-center pt-20">

        {/* Abstract Pink Shape Background Element */}
        <div className="absolute -left-[300px] md:-left-[200px] -bottom-[200px] w-[500px] md:w-[600px] lg:w-[800px] h-[500px] md:h-[600px] lg:h-[800px] -z-0 pointer-events-none">
          {/* Benefits Image */}
          <motion.img
            src="/benefits.png"
            alt="Background Shape"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-0 bottom-0 w-[80%] h-[80%] object-contain object-left-bottom"
          />

          {/* Rotating dashed circle overlapping */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute right-[20%] bottom-[30%] w-[30%] h-[30%] border border-white/100 rounded-full border-dashed"
          />
        </div>

        {/* Empty left column for spacing (since shape takes up space) */}
        <div className="hidden lg:block lg:w-[45%] h-[400px]"></div>

        {/* Text Content */}
        <div className="w-full lg:w-[55%] z-10 pl-0 mt-20 lg:mt-0 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[42px] lg:text-[48px] font-normal leading-[1.25] mb-12 tracking-tight text-white max-w-[800px]"
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
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative">
              <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jamie Hodgson" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-[16px]">Jamie Hodgson</div>
              <div className="text-white/60 text-[14px]">CBO @ <span className="text-pink">Antibody Analytics</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
