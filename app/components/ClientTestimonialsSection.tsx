"use client";

import React, { useState } from 'react';

const ClientTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Amara O.",
      text: "Shakara is my go-to for everything beauty. The braids are always neat, the spa treatments are relaxing, and the service is unmatched. Truly a 5-star experience every time.",
      service: "Hair & Spa"
    },
    {
      name: "Chioma K.",
      text: "Best beauty lounge in Abuja. Professional staff, premium products, and they never rush your appointment. My nails and lashes always look perfect.",
      service: "Nails & Lashes"
    },
    {
      name: "Funke M.",
      text: "Finally found a place that understands luxury. From the moment you walk in, you're treated like royalty. The hair styling and makeup services are exceptional.",
      service: "Hair & Makeup"
    },
    {
      name: "Ngozi A.",
      text: "The knotless braids I got here lasted for weeks and looked amazing the entire time. The stylists really know what they're doing. Worth every naira!",
      service: "Knotless Braids"
    },
    {
      name: "Yemi T.",
      text: "I booked the couple massage for our anniversary and it was incredible. The ambiance, the skilled therapists, everything was perfect. We'll definitely be back.",
      service: "Couple Massage"
    },
    {
      name: "Aisha B.",
      text: "My frontal wig installation was seamless and natural-looking. No one could tell it wasn't my real hair! The team here is truly talented and professional.",
      service: "Wig Installation"
    },
    {
      name: "Zainab K.",
      text: "I've been coming here for my retouching and treatments for over a year now. My hair has never been healthier. They really care about hair health here.",
      service: "Hair Treatment"
    },
    {
      name: "Tolani R.",
      text: "The studio makeup for my graduation photos was flawless. I looked like myself but better! The makeup artist understood exactly what I wanted.",
      service: "Studio Makeup"
    },
    {
      name: "Bisola D.",
      text: "From cornrows to wigs to massages, I've tried almost every service here. Consistently excellent quality and the customer service is top tier. Highly recommend!",
      service: "Multiple Services"
    }
  ];

  return (
    <section className="w-full bg-white py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-center text-gray-900 mb-16">
          What Our Guests Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#1a1512" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="font-[family-name:var(--font-figtree)] text-gray-600 italic leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="font-[family-name:var(--font-figtree)] text-xs tracking-[0.2em] uppercase text-gray-800">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
