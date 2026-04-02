"use client";

import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="w-full bg-white py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-[#79643a] animate-pulse" />
          <span className="text-sm font-sans tracking-widest uppercase text-[#79643a]">Testimonials</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-12">
          Clients leave <span className="not-italic text-[#79643a]">refreshed.</span><br/>
          They come back <span className="not-italic text-[#79643a]">consistent.</span>
        </h2>
        
        <p className="text-xl md:text-2xl font-sans font-light text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          You are not guessing here.<br/>
          You are choosing a standard.
        </p>
        
        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Amara O.",
              service: "Hair & Nails",
              text: "The attention to detail is unmatched. I never have to worry about a thing."
            },
            {
              name: "Chioma R.",
              service: "Spa & Lashes",
              text: "Finally found a place where quality meets consistency. Worth every penny."
            },
            {
              name: "Funke A.",
              service: "Full Package",
              text: "Professional, clean, and always delivers exactly what I ask for."
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl text-left">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 rounded-full bg-[#79643a]" />
                ))}
              </div>
              <p className="text-gray-700 font-sans mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-sans font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
