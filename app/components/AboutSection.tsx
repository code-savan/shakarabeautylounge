"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-32 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-[family-name:var(--font-figtree)] tracking-widest uppercase text-[#79643a] font-semibold mb-6 block">
              About Shakara
            </span>

            <h2 className="text-6xl md:text-7xl font-[family-name:var(--font-cormorant)]  leading-[1.05] mb-8 text-gray-900">
              Where beauty meets <span className="not-italic text-[#79643a]">precision</span>
            </h2>

            <p className="text-lg font-[family-name:var(--font-figtree)] text-gray-900 leading-relaxed mb-6">
              At Shakara Beauty Lounge, we believe that beauty is not just about appearance—it is about confidence, consistency, and the feeling of walking out knowing you look your absolute best.
            </p>

            {/* <p className="text-base font-[family-name:var(--font-figtree)] text-gray-600 leading-relaxed mb-10">
              Founded with a vision to create a space where quality meets luxury, we have built our reputation on meticulous attention to detail and an unwavering commitment to excellence.
            </p> */}

            {/* Features List - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Professional-grade products", desc: "Premium quality guaranteed" },
                { title: "Strict hygiene protocols", desc: "Safety first, always" },
                { title: "Personalized consultations", desc: "Tailored to your needs" },
                { title: "Expert professionals", desc: "Skilled & certified team" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-[#79643a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-[family-name:var(--font-figtree)] font-semibold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-figtree)] font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-figtree)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative bg-gray-100 rounded-3xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                className="w-full h-full absolute inset-0 object-cover"
              >
                <source src="/aboutsection.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Floating Stats Card */}
            {/* <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-[family-name:var(--font-figtree)] font-light text-[#79643a] mb-1">5+</div>
              <div className="text-sm font-[family-name:var(--font-figtree)] text-gray-600">Years of Excellence</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
