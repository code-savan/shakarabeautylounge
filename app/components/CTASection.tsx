"use client";

import React from 'react';

const CTASection = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-[#79643a] animate-pulse" />
          <span className="text-sm font-sans tracking-widest uppercase text-[#79643a]">Ready to Begin</span>
        </div>
        
        {/* Main Question */}
        <h2 className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-12">
          Ready to look your <span className="not-italic text-[#79643a]">best?</span>
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-sans font-light text-gray-600 mb-16 leading-relaxed">
          Book your appointment now.
        </p>
        
        {/* CTA Button */}
        <button className="bg-black text-white px-12 py-4 rounded-full hover:bg-[#79643a] transition-colors font-sans font-bold uppercase tracking-widest text-sm">
          Book Now
        </button>
        
        {/* Additional Info */}
        <div className="mt-12 text-gray-500 font-sans">
          <p>Instant confirmation • Flexible scheduling • Expert professionals</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
