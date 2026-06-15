'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-4 lg:py-6 backdrop-blur-md bg-beige/80 transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/logonav.png"
            alt="Dodo Digital"
            width={150}
            height={40}
            className="object-contain h-8 lg:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12 font-bold text-[15px]">
          <Link href="#services" className="hover:text-pink transition-colors">Services</Link>
          <Link href="#about" className="hover:text-pink transition-colors">About</Link>
          <Link href="#clients" className="hover:text-pink transition-colors">Clients</Link>
          <Link href="#process" className="hover:text-pink transition-colors">Process</Link>
          <Link href="#faq" className="hover:text-pink transition-colors">FAQs</Link>
        </nav>

        <div className="hidden lg:block">
          <button className="bg-dark text-white px-8 py-3.5 rounded-full font-bold hover:-translate-y-1 transition-transform duration-300 shadow-xl">
            Book a call
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden z-50 text-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-beige border-t border-dark/10 p-6 flex flex-col gap-6 shadow-xl lg:hidden"
          >
            <nav className="flex flex-col gap-6 font-bold text-lg text-center">
              <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-pink transition-colors">Services</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink transition-colors">About</Link>
              <Link href="#clients" onClick={() => setIsOpen(false)} className="hover:text-pink transition-colors">Clients</Link>
              <Link href="#process" onClick={() => setIsOpen(false)} className="hover:text-pink transition-colors">Process</Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="hover:text-pink transition-colors">FAQs</Link>
            </nav>
            <button className="bg-dark text-white px-8 py-4 rounded-full font-bold shadow-xl mt-4 w-full">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
