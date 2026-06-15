'use client';

import { motion } from 'motion/react';

const steps = [
  { num: 1, title: "Book a call", desc: "Let us know how we can help." },
  { num: 2, title: "Get a free strategy", desc: "We'll work on a free strategy for you, whether our services are new to your business or not." },
  { num: 3, title: "We get to business", desc: "Let us know how we can help.", action: "Let's do it", isAccent: true }
];

export function Process() {
  return (
    <section id="process" className="bg-beige py-[140px] px-8 w-full overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[72px] font-black tracking-tighter mb-8"
        >
          Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl leading-relaxed max-w-3xl mx-auto mb-24 text-text-secondary"
        >
          We use a proven framework of research, testing, validating and scaling to maximise growth across the whole paid journey. Whether paid ads are new to your business or not.
        </motion.p>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Subtle dashed connection lines for desktop only */}
          <div className="hidden md:block absolute top-[80px] left-[16.66%] right-[16.66%] z-0 text-pink">
            <svg width="100%" height="100%" style={{ overflow: 'visible' }}>
              <line x1="0" y1="60" x2="50%" y2="0" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
              <line x1="50%" y1="0" x2="100%" y2="60" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`rounded-[32px] p-10 text-left relative z-10 min-h-[380px] flex flex-col ${step.isAccent ? 'bg-pink text-white' : 'bg-white'
                } ${i === 1 ? 'md:mt-0' : 'md:mt-[60px]'
                }`}
            >
              {step.isAccent && (
                <div className="absolute -top-6 -right-2">
                  <svg width="80" height="80" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 0 Q 24 24 48 24 Q 24 24 24 48 Q 24 24 0 24 Q 24 24 24 0 Z" fill="#050505" />
                  </svg>
                </div>
              )}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black mb-12 ${step.isAccent ? 'bg-white text-pink' : 'bg-pink text-white'}`}>
                {step.num}
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${step.isAccent ? 'text-white' : 'text-dark'}`}>{step.title}</h3>
              <p className={`text-lg leading-[1.6] mb-8 ${step.isAccent ? 'text-white/90' : 'text-text-secondary'}`}>{step.desc}</p>

              {step.action && (
                <div className="mt-auto">
                  <button className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300">
                    {step.action}
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
