'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-[220px] pb-[160px] px-8 min-h-[90vh] flex items-center overflow-hidden rounded-br-[200px] lg:rounded-br-[400px]">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col items-start gap-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[60px] lg:text-[140px] font-bold leading-[0.95] tracking-tight text-dark"
          >
            Ready.<br />
            Get set.<br />
            <span className="text-[#FF4675]">Grow.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl lg:text-[22px] leading-[1.6] max-w-[460px] text-dark font-medium"
          >
            Trusted Paid Media and Conversion agency – we amplify growth across the whole paid journey.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-dark text-white px-10 py-4 rounded-[40px] font-bold text-[17px] hover:-translate-y-1 transition-transform duration-300 shadow-xl mt-4"
          >
            Book a call
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[55%] relative flex justify-center lg:justify-end mt-16 lg:mt-0 lg:-mr-16 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-[400px] h-[500px] lg:w-[800px] lg:h-[850px] lg:-my-24"
          >
            <Image
              src="/image.png"
              alt="Happy person"
              fill
              className="object-contain object-right-bottom pointer-events-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
