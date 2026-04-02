"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/booking", label: "Booking" },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-700 ease-out ${scrolled ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
        {/* Header Content */}
        <div className="relative z-10 px-4 md:px-12 pt-4 md:pt-6 pb-2 md:pb-4">
          <div className="bg-white rounded-xl shadow-lg px-4 md:px-6 py-2.5 flex items-center justify-between text-black max-w-[1400px] mx-auto">
            {/* Logo (left) */}
            <a href="/" className="flex-shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Shakara Beauty Lounge"
                width={80}
                height={80}
                className="w-auto h-10 md:h-12"
                style={{ width: "auto", height: "auto" }}
              />
            </a>

            {/* Right Section: Menu & CTA */}
            <div className="flex items-center gap-4 md:gap-12">
              {/* Desktop Navigation Menu */}
              <nav className="hidden md:flex items-center space-x-10 text-xs font-bold uppercase tracking-widest">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:opacity-50 transition-opacity"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -mr-2"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>

              {/* Desktop CTA Button */}
              <a
                href="/booking"
                className="hidden md:flex items-center gap-4 bg-black text-white pl-2 pr-8 py-2 rounded-full transition-all hover:scale-105 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform">
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

      {/* Mobile Menu Overlay - Fullscreen Sheet */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/60 hover:text-white transition-colors z-50"
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="h-full overflow-y-auto px-6 py-20">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/logo.jpeg"
              alt="Shakara Beauty Lounge"
              width={80}
              height={80}
              className="w-auto h-12 brightness-0 invert"
            />
          </div>

          {/* Main Navigation */}
          <nav className="mb-12">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-4 text-3xl font-semibold text-white uppercase tracking-wider hover:text-[#c9a87c] transition-all duration-300 transform border-b border-white/10 ${
                      mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="mb-8 space-y-4">
            <p className="text-sm text-white/40 uppercase tracking-widest mb-4">Get in Touch</p>
            <a
              href="tel:+2348144209739"
              className="flex items-center gap-3 text-white/80 hover:text-[#c9a87c] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+234 814 420 9739</span>
            </a>
            <a
              href="mailto:contact@shakarabeautylounge.com"
              className="flex items-center gap-3 text-white/80 hover:text-[#c9a87c] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>contact@shakarabeautylounge.com</span>
            </a>
          </div>

          {/* Location & Hours */}
          <div className="mb-12 space-y-4">
            <p className="text-sm text-white/40 uppercase tracking-widest mb-4">Visit Us</p>
            <div className="flex items-start gap-3 text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Kingfem GA247, Wuse II, Abuja</span>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <span>Mon - Sat: 9AM - 7PM</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="/booking"
            onClick={() => setMobileMenuOpen(false)}
            className={`inline-flex items-center gap-4 bg-white text-black pl-2 pr-8 py-3 rounded-full transition-all duration-300 transform ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10"/>
                <path d="M7 7h10v10"/>
              </svg>
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">Book Appointment</span>
          </a>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-white/40 uppercase tracking-widest mb-4">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/shakarabeautylounge"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/2348144209739"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#c9a87c] hover:text-black transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
