'use client';

import { motion } from 'motion/react';
import { Target, BarChart2, MessageCircle, Handshake, Lightbulb, CheckCircle2, ArrowUpRight, PieChart, Smile } from 'lucide-react';

const benefits = [
  {
    icon: <ArrowUpRight className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Fuel your growth",
    desc: "Outperform your competition by utilising our experts, tools and insights."
  },
  {
    icon: <BarChart2 className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Sustainable improvements",
    desc: "Reinvest the gains we uncover as we rigorously test and optimise across the full paid journey."
  },
  {
    icon: <MessageCircle className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Clear communication",
    desc: "Your account manager is a paid media expert; they drive strategy and do the work - no crossed wires."
  },
  {
    icon: <Lightbulb className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Fresh ideas",
    desc: "Current channels gone stale? We'll find improvements and develop growth across the funnel."
  },
  {
    icon: <CheckCircle2 className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Experience at all stages",
    desc: "We find improvements and develop growth across the funnel - we don't just stop at traffic generation."
  },
  {
    icon: <Handshake className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Unparalleled service",
    desc: "Been let down before? Have your expectations blown out the water with us."
  },
  {
    icon: <Target className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Pragmatic Approach",
    desc: "We'll research your audience, where to find them, how to engage and convert them; THEN optimise for ROI/Growth."
  },
  {
    icon: <PieChart className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Actions from insights",
    desc: "Get stunning reports your boss will love, with the vital metrics and insights to drive growth."
  },
  {
    icon: <Smile className="text-pink w-5 h-5" strokeWidth={2.5} />,
    title: "Enthusiastic team",
    desc: "We're friendly, but commercially minded. You'll love working with us and feel confident about it too."
  }
];

export function Benefits() {
  return (
    <section className="bg-dark text-white rounded-t-[80px] pt-[120px] pb-[140px] px-8 w-full">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[56px] md:text-[72px] font-bold tracking-tight mb-6"
            >
              Benefits
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-xl md:text-[22px] leading-relaxed max-w-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem id dignissim tincidunt at.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-pink text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-dark transition-colors duration-300 text-[16px]"
          >
            Book a call
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 pt-20 border-t border-white/5">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-3 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center shrink-0 group-hover:border-pink/30 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-xl md:text-[22px] font-bold tracking-tight">{b.title}</h3>
              </div>
              <p className="text-white/50 text-[15px] md:text-base leading-relaxed pl-[68px]">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
