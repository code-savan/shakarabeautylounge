"use client";

import React from 'react';

const LuxuryUniquenessSection = () => {
  return (
    <section className="w-full bg-gray-50 py-24 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-gray-900 mb-4">
          Your Transformation Starts Here
        </h2>

        {/* Subtext */}
        <p className="font-[family-name:var(--font-figtree)] text-gray-500 mb-10 max-w-lg mx-auto">
          Step into Shakara and leave with confidence. Hair, nails, spa, and lashes—all in one place.
        </p>

        {/* CTA Button - Matching Footer Style */}
        <a
          href="https://wa.me/2348144209739"
          target="_blank"
          className="inline-flex items-center gap-4 bg-[#1a1512] text-white pl-2 pr-8 py-2 rounded-full  transition-all hover:scale-105 group"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1512]  transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" transition-transform">
              <path d="M7 17l10-10"/>
              <path d="M7 7h10v10"/>
            </svg>
          </div>
          <span className="font-[family-name:var(--font-figtree)] font-bold uppercase tracking-wider text-xs">
            Book Appointment
          </span>
        </a>

        {/* Hours */}
        <p className="font-[family-name:var(--font-figtree)] text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-6">
          Mon - Sat: 9AM - 7PM
        </p>
      </div>
    </section>
  );
};

export default LuxuryUniquenessSection;
