'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md bg-beige/80 transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center leading-none">
          <span className="text-[32px] font-black tracking-tighter flex items-center gap-1 relative">
            Dodo
            <svg className="absolute -top-1 -right-4" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#050505"/>
            </svg>
          </span>
          <span className="text-sm font-bold ml-4">digital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-12 font-bold text-[15px]">
          <Link href="#services" className="hover:text-pink transition-colors">Services</Link>
          <Link href="#about" className="hover:text-pink transition-colors">About</Link>
          <Link href="#clients" className="hover:text-pink transition-colors">Clients</Link>
          <Link href="#process" className="hover:text-pink transition-colors">Process</Link>
          <Link href="#faq" className="hover:text-pink transition-colors">FAQs</Link>
        </nav>
        <button className="bg-dark text-white px-8 py-3.5 rounded-full font-bold hover:-translate-y-1 transition-transform duration-300 shadow-xl">
          Book a call
        </button>
      </div>
    </motion.header>
  );
}
