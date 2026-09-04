"use client";

import Image from 'next/image';
import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`w-full bg-[#111111] text-white ${poppins.variable} font-sans`}>
      <section className="px-3 md:px-12 py-12 md:py-16 border-b border-white/10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-3 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-white/60">Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Visit the <span className="text-[#c9a87c]">Studio</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/40 mb-2 uppercase tracking-widest">Location:</span>
              <p className="text-lg md:text-xl font-light">WUSE II, Abuja</p>
            </div>
            <div className="flex flex-col items-center md:border-x md:border-white/10 md:px-6">
              <span className="text-xs text-white/40 mb-2 uppercase tracking-widest">Address:</span>
              <p className="text-lg md:text-xl font-light">Kingfem GA247 Plot 264 Ahmadu Bello Express Way, Mabushi-Wuse 2, Abuja, FCT</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/40 mb-2 uppercase tracking-widest">Hours:</span>
              <p className="text-lg md:text-xl font-light">Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>

          <div className="w-full mt-10 aspect-[16/10] md:aspect-[21/9] bg-[#1a1a1a] rounded-2xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 tracking-widest">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165.470703977575!2d7.456591375266091!3d9.086009790977604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e1!3m2!1sen!2sng!4v1775051373755!5m2!1sen!2sng" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-12 pt-10 pb-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a87c] animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-white/60">Ready to Book?</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
              Your Beauty Journey <span className="text-[#c9a87c]">Starts Here</span>
            </h2>
            <p className="text-sm text-white/50 mt-2">Mon - Sat: 9AM - 7PM · Wuse II, Abuja</p>
          </div>
          <a href="/booking" className="flex items-center gap-3 bg-white text-black pl-1.5 pr-6 py-1.5 rounded-full transition-all hover:scale-105 group w-fit flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17l10-10"/><path d="M7 7h10v10"/></svg>
            </div>
            <span className="font-semibold uppercase tracking-wider text-xs">Book Appointment</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-start gap-8">
          <div className="flex items-center justify-between md:justify-start md:gap-6 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Shakara Beauty Lounge"
              width={200}
              height={60}
              className="object-contain w-auto h-6 md:h-8 rounded-lg"
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="flex items-center gap-2.5 md:hidden">
              <a
                href="https://www.instagram.com/shakarabeautylounge/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/2348144209739"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs text-white/40 uppercase tracking-widest">Explore</h4>
              <ul className="flex flex-col gap-2 text-[15px] font-light">
                <li><a href="/" className="hover:text-[#c9a87c] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#c9a87c] transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-[#c9a87c] transition-colors">Services</a></li>
                <li><a href="/booking" className="hover:text-[#c9a87c] transition-colors">Booking</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-xs text-white/40 uppercase tracking-widest">Contact</h4>
              <ul className="flex flex-col gap-2 text-[15px] font-light">
                <li><a href="tel:+2348144209739" className="hover:text-[#c9a87c] transition-colors">+234 814 420 9739</a></li>
                <li><a href="mailto:contact@shakarabeautylounge.com" className="hover:text-[#c9a87c] transition-colors break-all">contact@shakarabeautylounge.com</a></li>
              </ul>
            </div>
            <div className="hidden md:flex flex-col gap-3">
              <h4 className="text-xs text-white/40 uppercase tracking-widest">Follow</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.instagram.com/shakarabeautylounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/2348144209739"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-[13px] text-white/40">
          <span>© Shakara Beauty Lounge, 2025</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Back to Top ↑
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
