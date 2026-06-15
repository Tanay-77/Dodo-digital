'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const topRowTestimonials = [
  {
    quote: "We've leaned on their experience to guide our user acquisition strategy. We trust them.",
    name: "Kim Palmer",
    role: "Founder @ ",
    company: "Clementine App",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Dodo are genuinely honest guys and have been pivotal to our growth.",
    name: "Jamie Hodgson",
    role: "CBO @ ",
    company: "Antibody Analytics",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "It's been an absolute pleasure working with Dodo Digital - we look forward to a long-term partnership.",
    name: "Lou Alderson",
    role: "Co-Founder @ ",
    company: "So Syncd",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    quote: "It's been an absolute pleasure working with Dodo Digital - we look forward to a long-term partnership.",
    name: "Tanay Mahajan",
    role: "Co-Founder @ ",
    company: "Grad18",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  }
];

const bottomRowTestimonials = [
  {
    quote: "I can tell they really care about our business, we've really benefited working with specialists.",
    name: "James Collins",
    role: "Director @ ",
    company: "Studio Innate",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "They beat their own forecasts by a factor of 3. I have no hesitation in recommending them.",
    name: "Juliet Lecchini",
    role: "Marketing Director @ ",
    company: "Ricardo PLC",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    quote: "We moved from a big 6 agency to Dodo, they care and implement strategies that work",
    name: "Dan Evans",
    role: "Marketing Manager @ ",
    company: "Salad Money",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    quote: "We moved from a big 6 agency to Dodo, they care and implement strategies that work",
    name: "Dan Evans",
    role: "Marketing Manager @ ",
    company: "Salad Money",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

function TestimonialCard({ t }: { t: any }) {
  return (
    <div className="bg-[#F6F6F6] rounded-[24px] p-8 flex flex-col justify-between w-[350px] md:w-[420px] shrink-0 h-[220px]">
      <p className="text-[15px] leading-[1.6] font-medium text-dark">
        {t.quote}
      </p>
      <div className="flex items-center gap-4 mt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <div className="font-bold text-[15px] text-dark">{t.name}</div>
          <div className="text-[13px] font-bold text-dark">
            {t.role}
            <span className="text-[#FF4675]">{t.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialGrid() {
  return (
    <section className="py-24 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[800px] mx-auto mb-16 px-6"
      >
        <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.3] text-dark">
          We get behind brands we think deserve to grow, win more
          market share and be major players in their area.
        </h2>
      </motion.div>

      <div className="flex flex-col gap-6 relative w-full left-1/2 -translate-x-1/2 w-[110vw]">
        {/* Top Row Marquee */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 w-max"
        >
          {[...topRowTestimonials, ...topRowTestimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>

        {/* Bottom Row Marquee */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-6 w-max ml-[-200px]"
        >
          {[...bottomRowTestimonials, ...bottomRowTestimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
