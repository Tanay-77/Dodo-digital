'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "We've leaned on their experience to guide our user acquisition strategy. We trust them.",
    name: "Kim Palmer",
    role: "Founder @ Clementine App",
    avatar: "https://picsum.photos/seed/t1/100/100"
  },
  {
    quote: "Dodo are genuinely honest guys and have been pivotal to our growth.",
    name: "Jamie Hodgson",
    role: "CBO @ Antibody Analytics",
    avatar: "https://picsum.photos/seed/t2/100/100"
  },
  {
    quote: "It's been an absolute pleasure working with Dodo Digital - we look forward to a long-term partnership.",
    name: "Lou Alderson",
    role: "Co-Founder @ So Syncd",
    avatar: "https://picsum.photos/seed/t3/100/100"
  },
  {
    quote: "They beat their own forecasts by a factor of 3. I have no hesitation in recommending them.",
    name: "Juliet Lecchini",
    role: "Marketing Director @ Ricardo PLC",
    avatar: "https://picsum.photos/seed/t4/100/100"
  }
];

export function TestimonialGrid() {
  return (
    <section className="py-[140px] px-8 max-w-[1400px] mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-[40px] md:text-[56px] font-black leading-[1.1] tracking-tight">
          We get behind brands we think deserve to grow, win more market share and be major players in their area.
        </h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-card rounded-[32px] p-8 flex flex-col justify-between"
          >
            <p className="text-xl leading-[1.6] font-medium mb-12 text-text-primary">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-sm text-text-secondary font-medium">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
