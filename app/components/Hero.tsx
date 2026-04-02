"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-black font-sans">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg.png"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken background slightly for text readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Header / Navbar (floating pill) */}
      <header className={`
        fixed w-full px-4 md:px-12 pt-6 z-50
        transition-all duration-700 ease-out
        cursor-pointer
        ${scrolled ? "translate-y-0 opacity-100" : "md:-translate-y-20 md:opacity-0"}
      `}>
        <div className="bg-white rounded-xl shadow-lg px-6 py-2.5 flex items-center justify-between text-black max-w-[1400px] mx-auto">
          {/* Logo (left) */}
          <Image
            src="/logo.jpeg"
            alt="Shakara Beauty Lounge"
            width={100}
            height={100}
            className=""
            style={{
              width: "auto",
              height: "auto",
            }}
          />

          {/* Right Section: Menu & CTA */}
          <div className="flex items-center gap-12">
            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-10 text-xs font-[family-name:var(--font-dm-sans)] font-bold uppercase tracking-widest">
              <a href="/" className="hover:opacity-50 transition-opacity">Home</a>
              <a href="/about" className="hover:opacity-50 transition-opacity">About</a>
              <a href="/services" className="hover:opacity-50 transition-opacity">Services</a>
              <a href="/booking" className="hover:opacity-50 transition-opacity">Booking</a>
            </nav>

            {/* CTA Button (far right) */}
            <button className="flex items-center gap-4 bg-black text-white pl-2 pr-8 py-2 rounded-full transition-all hover:scale-105 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" transition-transform"><path d="M7 17l10-10"/><path d="M7 7h10v10"/></svg>
              </div>
              <span className="font-sans font-bold uppercase tracking-widest text-[9px]">Book Now</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col justify-center px-4 md:px-20 max-w-[1400px] mx-auto w-full z-20  text-white">
        <h1 className="text-7xl md:text-5xl lg:text-[120px] mb-8 font-serif leading-[0.8] tracking-tight">
          <span className="block">Shakara Beauty</span>
          <span className="block italic text-white/70">  Lounge</span>
        </h1>
        {/* <p className="mt-8 md:mt-12 text-lg md:text-xl md:max-w-xl text-white/80 font-sans font-light leading-relaxed">
          Look refined. Feel confident.
        </p> */}
        <div className="mt-6 flex flex-wrap gap-4 md:gap-6">
          {['Hair', 'Nails', 'Spa', 'Lashes'].map((service) => (
            <div
              key={service}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => {
                const element = document.getElementById('services-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                {/* Outer ring - IG story style */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 p-0.5 group-hover:scale-110 transition-transform duration-300">
                  {/* Inner circle with image */}
                  <div className="w-full h-full rounded-full bg-black overflow-hidden">
                    <img
                      src="/logo-preview.jpg"
                      alt={service}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
              <span className="mt-2 text-sm md:text-base text-white/80 font-sans font-light group-hover:text-white transition-colors duration-300">
                {service}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 cursor-pointer">
          <button className="bg-white text-black px-8 py-3 rounded-full font-sans font-bold uppercase tracking-widest text-sm cursor-pointer">
            Book my Appointment
          </button>
          <button className="flex items-center gap-4 bg-black text-black pl-2 pr-8 py-2 rounded-full group cursor-pointer relative">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img
                  src="/igicon.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <span className="font-sans font-bold uppercase tracking-wider text-xs text-white">Send a DM</span>
          </button>
        </div>
      </main>

      {/* Bottom Right "Our Story" */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center z-20 text-white cursor-pointer group opacity-60">
        <span className="font-serif text-xl group-hover:mr-2 transition-all duration-300">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  );
};

export default Hero;
