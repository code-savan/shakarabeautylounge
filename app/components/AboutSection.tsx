"use client";

import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-3 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-[family-name:var(--font-figtree)] tracking-[0.2em] uppercase text-[#79643a] font-semibold bg-[#79643a]/10 rounded-full px-4 py-2 mb-5">
              About Shakara
            </span>

            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] leading-[1.05] mb-5 text-gray-900">
              Where beauty meets <span className="not-italic text-[#79643a]">precision</span>
            </h2>

            <p className="text-base font-[family-name:var(--font-figtree)] text-gray-600 leading-relaxed mb-8 max-w-lg">
              At Shakara Beauty Lounge, we believe that beauty is not just about appearance — it is about confidence, consistency, and the feeling of walking out knowing you look your absolute best.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                { title: "Professional-grade products", desc: "Premium quality guaranteed" },
                { title: "Strict hygiene protocols", desc: "Safety first, always" },
                { title: "Personalized consultations", desc: "Tailored to your needs" },
                { title: "Expert professionals", desc: "Skilled & certified team" }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-white border border-gray-100 rounded-2xl p-4 hover:border-[#79643a]/30 hover:shadow-[0_8px_24px_rgb(0,0,0,0.06)] transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#79643a] mt-1.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-[family-name:var(--font-figtree)] font-semibold text-gray-900 text-sm leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-[family-name:var(--font-figtree)] mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-flex items-center gap-3 bg-black text-white pl-2 pr-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit"
            >
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17l10-10" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
              <span className="font-medium text-sm">More about us</span>
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] lg:aspect-[4/5] relative bg-gray-100 rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full absolute inset-0 object-cover"
              >
                <source src="/aboutsection.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <p className="font-[family-name:var(--font-figtree)] font-bold text-2xl text-gray-900 leading-none">5.0</p>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#FBBC04">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500 mt-1">32 Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
