"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`
      fixed w-full z-50 transition-all duration-700 ease-out
      ${scrolled ? "translate-y-0 opacity-100" : "md:-translate-y-20 md:opacity-0"}
    `}>
      {/* Video Background */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/hero-bg.mp4"
          muted
          loop
          playsInline
          autoPlay
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
      </div> */}

      {/* Header Content */}
      <div className="relative z-10 px-4 md:px-12 pt-6 pb-4">
        <div className="bg-white rounded-xl shadow-lg px-6 py-2.5 flex items-center justify-between text-black max-w-[1400px] mx-auto">
          {/* Logo (left) */}
          <a href="/">
            <Image
              src="/logo.jpeg"
              alt="Shakara Beauty Lounge"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
            />
          </a>

          {/* Right Section: Menu & CTA */}
          <div className="flex items-center gap-12">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest">
              <a href="/" className="hover:opacity-50 transition-opacity">Home</a>
              <a href="/about" className="hover:opacity-50 transition-opacity">About</a>
              <a href="/services" className="hover:opacity-50 transition-opacity">Services</a>
              <a href="/booking" className="hover:opacity-50 transition-opacity">Booking</a>
            </nav>

            {/* CTA Button (far right) */}
            <a
              href="/booking"
              className="flex items-center gap-4 bg-black text-white pl-2 pr-8 py-2 rounded-full transition-all hover:scale-105 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" transition-transform">
                  <path d="M7 17l10-10"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </div>
              <span className="font-sans font-bold uppercase tracking-widest text-[9px]">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
