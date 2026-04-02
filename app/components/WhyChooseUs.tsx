"use client";

import React from 'react';

const WhyChooseUs = () => {
  const benefits = [
    "Skilled professionals",
    "Clean environment", 
    "Consistent results",
    "Full service menu"
  ];

  return (
    <section className="w-full bg-gray-50 py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#79643a] animate-pulse" />
            <span className="text-sm font-sans tracking-widest uppercase text-[#79643a]">Why Choose Us</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-12">
            The <span className="not-italic text-[#79643a]">Difference</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <div className="w-8 h-8 bg-[#79643a] rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-2">{benefit}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Key Message */}
        <div className="bg-white p-12 rounded-3xl text-center">
          <p className="text-xl md:text-2xl font-sans font-light text-gray-600 leading-relaxed mb-6">
            You do not need to move around.
          </p>
          <p className="text-2xl md:text-3xl font-serif italic text-[#79643a]">
            Everything is handled here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
