'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    q: "What services do you specialise in?", 
    a: "We specialise in paid media, growth strategy, SEO, and conversion rate optimization (CRO). Our goal is to scale your business effectively through data-driven campaigns." 
  },
  { 
    q: "How long does it take to see results?", 
    a: "While some quick wins can be seen within the first 30 days, we typically recommend a 3-month timeframe to fully gather data, optimise campaigns, and see significant, sustainable growth." 
  },
  { 
    q: "Do you work with startups or established businesses?", 
    a: "Both! Whether you're a funded startup looking for rapid user acquisition or an established brand aiming to improve your return on ad spend, we tailor our framework to your specific growth stage." 
  },
  { 
    q: "How do you handle communication and reporting?", 
    a: "Transparency is key. Your dedicated account manager will set up a direct Slack channel for daily comms, provide weekly performance snapshots, and host a deep-dive strategy call every month." 
  },
  { 
    q: "What makes your agency different from others?", 
    a: "We don't just generate traffic; we optimise the full funnel. Our team has deep in-house experience, meaning we understand the commercial realities of your business beyond just vanity metrics." 
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-beige py-[140px] px-8 w-full">
      <div className="max-w-[1000px] mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[64px] md:text-[88px] font-black tracking-tighter text-center mb-16 leading-[1.1]"
        >
          Commonly asked<br />questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-xl md:text-2xl font-bold pr-8">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-8 h-8 shrink-0" strokeWidth={3} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 pt-0 text-lg leading-relaxed text-text-secondary">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
