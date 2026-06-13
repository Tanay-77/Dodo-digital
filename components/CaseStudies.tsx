'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function CaseStudies() {
  return (
    <section id="clients" className="bg-beige py-[140px] px-8 w-full">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[72px] font-black tracking-tighter"
          >
            Case studies
          </motion.h2>
          <motion.button 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark text-white px-10 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
          >
            See all
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-[40px] overflow-hidden flex flex-col lg:flex-row group"
        >
          {/* Left Pink Side */}
          <div className="lg:w-1/2 bg-pink p-12 md:p-20 flex flex-col justify-between shrink-0 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-black italic mb-16 tracking-widest uppercase opacity-90">Bianchi</h3>
              <h4 className="text-white text-[48px] md:text-[64px] font-black leading-[1.05] tracking-tight mb-16 max-w-xl">
                How Bianchi saw a 125% increase in sales
              </h4>
              <button className="bg-dark text-white rounded-full px-10 py-5 font-bold hover:scale-105 transition-transform duration-300 inline-block w-fit">
                Read the study
              </button>
            </div>
            {/* Slanted divider overlay */}
            <div className="hidden lg:block absolute top-0 -right-24 bottom-0 w-48 bg-pink z-20" style={{ transform: "skewX(-15deg)" }}></div>
          </div>
          
          {/* Right Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden">
             <Image 
              src="https://picsum.photos/seed/casestudy/1000/800"
              alt="Case study person"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
