'use client';

import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-[140px] pb-10 px-8 w-full mt-[-120px] relative z-10 [border-top-left-radius:50%_100px] [border-top-right-radius:50%_100px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-32 mb-24">
          <div className="lg:w-1/3 mb-16 lg:mb-0">
            <Link href="/" className="text-5xl font-black tracking-tighter flex items-center gap-1 mb-12 inline-block">
              Dodo<span className="text-pink text-opacity-100">.</span><span className="text-sm font-medium text-pink tracking-widest align-text-bottom block mt-1">digital</span>
            </Link>

            <div className="space-y-8 text-xl text-white/80">
              <p>
                Spaces, Programme Building,<br />
                Castle Park, Bristol, BS1 2NB
              </p>
              <p>
                <a href="mailto:hello@dododigital.agency" className="text-pink hover:underline underline-offset-4 pointer-events-auto">hello@dododigital.agency</a>
              </p>
              <p>
                <a href="tel:+441172872987" className="text-pink hover:underline underline-offset-4 pointer-events-auto">+44(0) 117 287 2987</a>
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="w-12 h-12 bg-pink flex items-center justify-center rounded transition-transform hover:-translate-y-1">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="w-12 h-12 bg-pink flex items-center justify-center rounded transition-transform hover:-translate-y-1">
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col md:flex-row justify-between gap-16">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6 font-bold text-xl">
                <Link href="#services" className="hover:text-pink transition-colors">Services</Link>
                <Link href="#about" className="hover:text-pink transition-colors">About</Link>
                <Link href="#clients" className="hover:text-pink transition-colors">Clients</Link>
                <Link href="#process" className="hover:text-pink transition-colors">Process</Link>
                <Link href="#faq" className="hover:text-pink transition-colors">FAQs</Link>
              </div>
              <div className="flex flex-col gap-6 font-bold text-xl">
                <Link href="#" className="hover:text-pink transition-colors">Terms of Services</Link>
                <Link href="#" className="hover:text-pink transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-pink transition-colors">Cookies</Link>
              </div>
            </div>

            <div className="max-w-sm">
              <h3 className="text-3xl font-black mb-6">Subscribe to our newsletter</h3>
              <p className="text-white/60 mb-10 leading-relaxed text-lg">
                Join our newsletter to stay updated about our latest news and articles.
              </p>
              <div className="relative border-b border-white/30 pb-4 flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none w-full text-lg placeholder:text-white/40 focus:ring-0"
                />
                <button aria-label="Subscribe" className="text-pink hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-10 text-white/50 text-sm gap-4">
          <p>© 2026 Copyright Sustain Digital Limited t/a Dodo Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <div className="px-8 py-4 bg-[#111] rounded-md font-medium text-white/80 border border-white/5">Badge</div>
            <div className="px-8 py-4 bg-[#111] rounded-md font-medium text-white/80 border border-white/5">Badge</div>
            <div className="px-8 py-4 bg-[#111] rounded-md font-medium text-white/80 border border-white/5">Badge</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
