"use client";

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
    <section className="relative w-full h-screen min-h-[500px] md:min-h-[600px] flex flex-col justify-center overflow-hidden bg-black font-sans">
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
      <div className="absolute inset-0 bg-black/60 md:bg-black/70 z-10" />

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col justify-center items-center px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto w-full z-20 text-white pt-20">
        <h1 className="text-5xl md:text-7xl lg:text-[120px] mb-6 md:mb-8 font-serif leading-[0.9] md:leading-[0.8] tracking-tight text-center">
          <span className="block">Shakara Beauty</span>
          <span className="block italic text-white/70">Lounge</span>
        </h1>
        <div className="mt-4 md:mt-6 flex flex-wrap gap-3 md:gap-4 lg:gap-6">
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
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16">
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
              <span className="mt-1 md:mt-2 text-xs md:text-sm lg:text-base text-white/80 font-light group-hover:text-white transition-colors duration-300">
                {service}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
          <button className="bg-white text-black px-6 md:px-8 py-2.5 md:py-3 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm cursor-pointer hover:scale-105 transition-transform">
            Book Appointment
          </button>
          <button className="flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm text-white pl-2 pr-6 py-2 rounded-full group cursor-pointer hover:bg-black/70 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img
                  src="/igicon.png"
                  alt="Instagram"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </div>
            </div>
            <span className="font-bold uppercase tracking-wider text-xs text-white">Send a DM</span>
          </button>
        </div>
      </main>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center z-20 text-white cursor-pointer group opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-sm md:text-base font-medium group-hover:mr-2 transition-all duration-300">Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-300"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>
  );
};

export default Hero;
