"use client";

import React from 'react';

const ServicesPreview = () => {
  const services = [
    {
      title: "Hair",
      description: "Braids. Styling. Color. Installs.",
      tagline: "Your look, done right.",
      image: "/hair-service.jpg"
    },
    {
      title: "Nails",
      description: "Clean manicures. Strong acrylics.",
      tagline: "Custom nail art.",
      image: "/nails-service.jpg"
    },
    {
      title: "Spa",
      description: "Facials. Massage. Waxing.",
      tagline: "Real relaxation.",
      image: "/spa-service.jpg"
    },
    {
      title: "Lashes",
      description: "Classic to volume sets.",
      tagline: "Full, defined, clean finish.",
      image: "/lashes-service.jpg"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#79643a] animate-pulse" />
            <span className="text-sm font-sans tracking-widest uppercase text-[#79643a]">Services</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-8">
            What We <span className="not-italic text-[#79643a]">Offer</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-400 text-6xl font-serif italic">{service.title[0]}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif mb-3 group-hover:text-[#79643a] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-sans mb-2 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-[#79643a] font-sans font-medium">
                {service.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-[#79643a] text-white px-8 py-3 rounded-full hover:bg-black transition-colors font-sans font-bold uppercase tracking-widest text-sm">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
