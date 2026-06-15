'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const studies = [
  {
    id: "bianchi",
    logoSrc: "/logos/bianchi.svg",
    title: "How Bianchi saw a 125% increase in sales",
    bgColor: "bg-pink",
    btnColor: "bg-dark text-white",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "indeed",
    logoSrc: "/logos/indeed.svg",
    title: "How Indeed saw a 125% increase in sales",
    bgColor: "bg-dark",
    btnColor: "bg-pink text-white",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sephora",
    logoSrc: "/logos/sephora.svg",
    title: "How Sephora increased online conversions by 85%",
    bgColor: "bg-pink",
    btnColor: "bg-dark text-white",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "mobil",
    logoSrc: "/logos/mobil.svg",
    title: "How Mobil reduced global CPA by over 40%",
    bgColor: "bg-dark",
    btnColor: "bg-pink text-white",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "lowes",
    logoSrc: "/logos/bianchi.svg",
    title: "How Lowe's scaled their user acquisition strategy",
    bgColor: "bg-pink",
    btnColor: "bg-dark text-white",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800"
  }
];

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollNext = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth * 0.8, behavior: 'smooth' });
  };

  const scrollPrev = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -(scrollRef.current.clientWidth * 0.8), behavior: 'smooth' });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="clients" className="bg-beige py-[100px] md:py-[140px] w-full overflow-hidden">
      {/* Header Container */}
      <div className="max-w-[1400px] mx-auto w-full px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[56px] md:text-[72px] font-bold tracking-tighter"
          >
            Case studies
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:-translate-y-1 transition-transform"
          >
            See all
          </motion.button>
        </div>
      </div>

      {/* Full Bleed Carousel Container with Drag and Floating Arrows */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className={`flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-mandatory [&::-webkit-scrollbar]:hidden pl-8 md:pl-12 lg:pl-[max(4rem,calc((100vw-1400px)/2+4rem))] pr-8 md:pr-12 lg:pr-16 w-full ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {studies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-[90vw] md:w-[85vw] max-w-[1000px] shrink-0 rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col lg:flex-row group snap-center relative pointer-events-none"
            >
              {/* Left Side */}
              <div className={`${study.bgColor} lg:w-[55%] p-10 md:p-16 flex flex-col justify-between shrink-0 relative z-10 pointer-events-auto`}>
                <div className="relative z-20 h-full flex flex-col justify-between">
                  <div className="mb-16">
                    <img src={study.logoSrc} alt={study.id} className="h-8 md:h-10 object-contain brightness-0 invert" draggable={false} />
                  </div>
                  <div>
                    <h4 className="text-white text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-tight mb-12 max-w-lg select-none">
                      {study.title}
                    </h4>
                    <button className={`${study.btnColor} rounded-full px-8 py-4 font-bold hover:scale-105 transition-transform duration-300 inline-block w-fit text-[15px]`}>
                      Read the study
                    </button>
                  </div>
                </div>
                {/* Slanted divider overlay */}
                <div className={`hidden lg:block absolute -top-20 -bottom-20 -right-16 w-32 ${study.bgColor} z-10`} style={{ transform: "skewX(12deg)" }}></div>
              </div>

              {/* Right Image Side */}
              <div className="lg:w-[45%] relative min-h-[300px] lg:min-h-full overflow-hidden bg-dark pointer-events-none">
                <img
                  src={study.image}
                  alt={study.id}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 pointer-events-none"
                  style={{ objectPosition: 'center' }}
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}

          {/* Final "View All" Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-[90vw] md:w-[85vw] max-w-[1000px] shrink-0 rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col lg:flex-row group snap-center relative bg-beige border-2 border-dark/10 pointer-events-none"
          >
            <div className="w-full p-10 md:p-16 flex flex-col items-center justify-center text-center pointer-events-auto">
              <h4 className="text-dark text-[40px] md:text-[56px] font-bold leading-[1.05] tracking-tight mb-8 max-w-2xl select-none">
                Ready to see what we can do for you?
              </h4>
              <button className="bg-pink text-white rounded-full px-10 py-5 font-bold hover:scale-105 transition-transform duration-300 text-[16px]">
                Explore all case studies
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Scroll Controls - Left */}
        <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex pointer-events-none">
          <button onClick={scrollPrev} className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-dark shadow-xl flex items-center justify-center transition-all pointer-events-auto hover:scale-110 border border-dark/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        </div>

        {/* Floating Scroll Controls - Right */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex pointer-events-none">
          <button onClick={scrollNext} className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-dark shadow-xl flex items-center justify-center transition-all pointer-events-auto hover:scale-110 border border-dark/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
