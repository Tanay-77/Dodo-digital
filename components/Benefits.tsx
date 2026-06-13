'use client';

import { motion } from 'motion/react';
import { Target, TrendingUp, RefreshCw, Handshake, Lightbulb, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp className="text-pink w-6 h-6" />,
    title: "Fuel your growth",
    desc: "Outperform your competition by utilising our experts, tools and insights."
  },
  {
    icon: <RefreshCw className="text-pink w-6 h-6" />,
    title: "Sustainable improvements",
    desc: "Reinvest the gains we uncover as we rigorously test and optimise across the full paid journey."
  },
  {
    icon: <Target className="text-pink w-6 h-6" />,
    title: "Clear communication",
    desc: "Your account manager is a paid media expert; they drive strategy and do the work - no crossed wires."
  },
  {
    icon: <Lightbulb className="text-pink w-6 h-6" />,
    title: "Fresh ideas",
    desc: "Current channels gone stale? We'll find new paths to growth."
  },
  {
    icon: <CheckCircle2 className="text-pink w-6 h-6" />,
    title: "Experience at all stages",
    desc: "We find improvements and develop growth across the funnel - we don't just stop at traffic generation."
  },
  {
    icon: <Handshake className="text-pink w-6 h-6" />,
    title: "Unparalleled service",
    desc: "Been let down before? Have your expectations blown out the water with us."
  }
];

export function Benefits() {
  return (
    <section className="bg-dark text-white rounded-[80px] pt-20 pb-[140px] px-8 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[72px] font-black tracking-tighter mb-6"
            >
              Benefits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-muted text-xl leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dignissim tincidunt at.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-pink text-white px-12 py-5 rounded-full font-bold hover:bg-white hover:text-dark transition-colors duration-300"
          >
            Book a call
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 pt-16 border-t border-white/10">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 shrink-0 relative overflow-hidden group hover:border-pink transition-colors">
                {b.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{b.title}</h3>
              <p className="text-text-muted text-lg leading-[1.6]">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
