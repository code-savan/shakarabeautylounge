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
      {/* Logo Section */}
      {/* <section className="px-4 md:px-20 py-12 ">
        <div className="flex justify-center">
          <div className="w-48 md:w-64 relative">
            <Image
              src="/footer.png"
              alt="Shakara Beauty Lounge"
              width={256}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section> */}

      {/* Location Section */}
      <section className="px-4 md:px-20 py-24 border-b border-white/10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4 group cursor-default">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            <span className="text-sm tracking-widest uppercase text-white/60">Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-16">Visit the <span className="text-[#c9a87c]">Studio</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl gap-12 text-center">
            {/* Neighborhood */}
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/40 mb-4 uppercase tracking-widest">Location:</span>
              <p className="text-2xl md:text-3xl font-light">WUSE II, Abuja</p>
            </div>
            {/* Address */}
            <div className="flex flex-col items-center md:border-x md:border-white/10">
              <span className="text-xs text-white/40 mb-4 uppercase tracking-widest">Address:</span>
              <p className="text-2xl md:text-3xl font-light">Kingfem GA247 Plot 264 Ahmadu Bello Express Way,
Mabushi-Wuse 2, Abuja, FCT</p>
            </div>
            {/* Floor */}
            <div className="flex flex-col items-center">
              <span className="text-xs text-white/40 mb-4 uppercase tracking-widest">Hours:</span>
              <p className="text-2xl md:text-3xl font-light">Mon - Sat: 9AM - 7PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full mt-20 aspect-[16/7] bg-[#1a1a1a] rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 tracking-widest">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4165.470703977575!2d7.456591375266091!3d9.086009790977604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b929d261bc1%3A0xf87655077fcf6153!2sKINGFEM%20GA247!5e1!3m2!1sen!2sng!4v1775051373755!5m2!1sen!2sng" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="px-4 md:px-20 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Column: Heading & Button */}
          <div className="lg:col-span-6 flex flex-col items-start">
                <div className="w-48 md:w-64 relative mb-10">
            <Image
              src="/footer.png"
              alt="Shakara Beauty Lounge"
              width={256}
              height={100}
              className="object-contain"
            />
          </div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9a87c] animate-pulse" />
              <span className="text-sm tracking-widest uppercase text-white/60">Ready to Book?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-12 max-w-lg">
              Your Beauty Journey<br /> <span className="text-[#c9a87c]">Starts Here</span>
            </h2>
            <a href="/booking" className="flex items-center gap-4 bg-white text-black pl-2 pr-8 py-2 rounded-full transition-all hover:scale-105 group">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><path d="M7 17l10-10"/><path d="M7 7h10v10"/></svg>
              </div>
              <span className="font-semibold uppercase tracking-wider text-xs">Book Appointment</span>
            </a>
          </div>

          {/* Middle Columns: Links */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-6">
              <h4 className="text-sm text-white/40 uppercase tracking-widest">Pages</h4>
              <ul className="flex flex-col gap-3 text-lg font-light">
                <li><a href="/" className="hover:text-[#c9a87c] transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-[#c9a87c] transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-[#c9a87c] transition-colors">Services</a></li>
                <li><a href="/booking" className="hover:text-[#c9a87c] transition-colors">Booking</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-8 md:col-span-1 col-span-2">
              <div className="flex flex-col gap-6">
                <h4 className="text-sm text-white/40 uppercase tracking-widest">Contact</h4>
                <ul className="flex flex-col gap-3 text-lg font-light">
                  <li><a href="mailto:contact@shakarabeautylounge" className="hover:text-[#c9a87c] transition-colors">contact@shakarabeautylounge</a></li>
                  <li><a href="https://wa.me/2348144209739" target="_blank" className="hover:text-[#c9a87c] transition-colors">+234 814 420 9739</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <span>© Shakara Beauty Lounge, 2025</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </button>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
