'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative pt-[160px] lg:pt-[220px] pb-[100px] lg:pb-[160px] px-6 lg:px-8 min-h-[90vh] flex items-center overflow-hidden rounded-br-[100px] md:rounded-br-[200px] lg:rounded-br-[400px]">
      {/* Star Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
        className="absolute left-[57%] top-[40%] -translate-y-1/2 z-20 hidden lg:block"
      >
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0C32 17.673 17.673 32 0 32C17.673 32 32 46.327 32 64C32 46.327 46.327 32 64 32C46.327 32 32 17.673 32 0Z" fill="#050505" />
        </svg>
      </motion.div>

      <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* Left Content */}
        <div className="w-full lg:w-[50%] flex flex-col items-start gap-6 lg:gap-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[60px] sm:text-[90px] lg:text-[140px] font-bold leading-[0.95] tracking-tight text-dark"
          >
            Ready.<br />
            Get set.<br />
            <span className="text-[#FF4675]">Grow.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl lg:text-[22px] leading-[1.6] max-w-[570px] text-dark font-medium"
          >
            Trusted Paid Media and Conversion agency – we amplify growth across the whole paid journey.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-dark text-white px-8 py-4 lg:px-10 lg:py-4 rounded-[40px] font-bold text-base lg:text-[17px] hover:-translate-y-1 transition-transform duration-300 shadow-xl mt-2 lg:mt-4 w-full sm:w-auto"
          >
            Book a call
          </motion.button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end mt-12 lg:mt-0 lg:-mr-16 z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-[400px] h-[350px] sm:h-[450px] lg:max-w-none lg:w-[800px] lg:h-[850px] lg:-my-24"
          >
            <Image
              src="/image.png"
              alt="Happy person"
              fill
              className="object-contain object-center lg:object-right-bottom pointer-events-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
