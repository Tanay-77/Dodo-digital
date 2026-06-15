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
        <div className="hidden lg:block absolute right-[2%] top-[30px] w-[300px] h-[300px] z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-50 w-[280px] h-[280px] border-[1.5px] border-white/100 rounded-full border-dashed"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[230px] top-40"
          >
            <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0C24 13.25 13.25 24 0 24C13.25 24 24 34.75 24 48C24 34.75 34.75 24 48 24C34.75 24 24 13.25 24 0Z" fill="#FF4675" />
            </svg>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-[56px] md:text-[72px] font-bold tracking-tighter">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white text-dark rounded-[32px] p-8 md:p-10 flex flex-col h-full"
            >
              <h3 className="text-[28px] font-bold mb-8">{service.category}</h3>
              <ul className="flex flex-col font-medium text-[15px]">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center group cursor-default">
                    <span className="w-full py-3.5 border-b border-dark/10 group-hover:border-pink group-hover:text-pink transition-colors">
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
