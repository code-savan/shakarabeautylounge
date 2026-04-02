"use client";

import React from 'react';

const ExperienceSection = () => {
  const focuses = [
    "Detail",
    "Comfort", 
    "Clean execution"
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Main Statement */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-serif italic leading-[1.1] mb-12">
            You walk in <span className="not-italic text-[#79643a]">stressed.</span><br/>
            You leave <span className="not-italic text-[#79643a]">put together.</span>
          </h2>
        </div>

        {/* Focus Areas */}
        <div className="text-center mb-20">
          <p className="text-xl md:text-2xl font-sans font-light text-gray-600 mb-12">
            Every session focuses on:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {focuses.map((focus, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#79643a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-serif italic">{focus[0]}</span>
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{focus}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Standards */}
        <div className="text-center bg-gray-50 py-16 px-8 rounded-3xl">
          <h3 className="text-3xl md:text-4xl font-serif italic mb-8">
            Our <span className="not-italic text-[#79643a]">Standards</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#79643a] rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700 font-sans text-lg leading-relaxed">
                No rushed work.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-[#79643a] rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700 font-sans text-lg leading-relaxed">
                No shortcuts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
