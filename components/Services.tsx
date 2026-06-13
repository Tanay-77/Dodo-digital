'use client';

import { motion } from 'motion/react';

const services = [
  {
    category: "Paid Search",
    items: ["Google Ads", "Microsoft Ads", "Google Shopping", "Google Shopping Feeds", "Apple Search Ads", "Display Ads", "Remarketing Ads", "Youtube Ads"]
  },
  {
    category: "Paid Social",
    items: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Tiktok Ads", "Pinterest Ads", "Reddit Ads", "Quora Ads", "Snapchat Ads"]
  },
  {
    category: "CRO",
    items: ["Landing Page Design", "Static Banners", "Onsite Optimisations", "Copywriting", "A/B Testing", "Behavioural Analysis", "Product shots/videos", "Funnel Optimisation"]
  }
];

export function Services() {
  return (
    <section id="services" className="bg-dark text-white rounded-t-[80px] py-[140px] px-8 mt-[-40px] relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex justify-between items-start"
        >
          <h2 className="text-[72px] font-black tracking-tighter">Services</h2>
          
          <div className="hidden lg:block relative w-[200px] h-[200px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute right-0 top-0 w-32 h-32 border border-white/20 rounded-full border-dashed"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="absolute right-12 top-12" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0L29.2984 18.7016L48 24L29.2984 29.2984L24 48L18.7016 29.2984L0 24L18.7016 18.7016L24 0Z" fill="#FF4675"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white text-dark rounded-[32px] p-10 flex flex-col h-full"
            >
              <h3 className="text-3xl font-black mb-8">{service.category}</h3>
              <ul className="flex flex-col gap-4 font-medium text-lg">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center group cursor-default">
                    <span className="w-full pb-4 border-b border-dark/10 group-hover:border-pink group-hover:text-pink transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
