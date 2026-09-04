"use client";

import React from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0rCgwzy6INzQyYLRSNagwNDBJNUhKMTNPMTE0TzQ0tDKoSEw0tkg2SDNNSbS0NE9LNPcSLc5IzE4sSlRISk0sLalUyMkvzUtPBQBSUBeK&q=shakara+beauty+lounge&oq=shaka&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxivARjHATIGCAAQRRg8MgoIARAuGLEDGIAEMgwIAhAuGCcYrwEYxwEyCggDEC4YsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDM2NjFqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x104e0bd67d417a11:0xaa38c0f5da997fa7,1,,,,";

const reviews = [
  {
    name: "Moroti Babayemi",
    time: "8 months ago",
    text: "Visited today and was impressed from the start by the professionalism of the staff and spaciousness and cleanliness of the lounge. Favour did my lashes and made my first time seamless — I showed her what I wanted and she worked her magic, creating a natural look that I love.",
    color: "bg-purple-600",
  },
  {
    name: "Yasmyn Farooq",
    time: "8 months ago",
    text: "From the moment I walked in, the ambience was everything — clean, serene, and well put together. The staff were warm, attentive, and professional. Truly a great salon and spa experience. Best in everything, most especially manicure and pedicure, nails and lashes.",
    color: "bg-pink-600",
  },
  {
    name: "Toluwani Ogunlade",
    time: "2 months ago",
    text: "This is an amazing salon. The aesthetics, the customer experience, the customer service, everything. The attention to detail in everything they do is exceptional. I loved the experience and I would definitely be coming back.",
    color: "bg-amber-600",
  },
  {
    name: "Opeyemi Awosanya",
    time: "a month ago",
    text: "I did pedicure and made my hair, I had a very good experience. The ambiance and professionalism of the staff is commendable.",
    color: "bg-emerald-600",
  },
  {
    name: "Onyeka",
    time: "8 months ago",
    text: "I loved their services. I did my lashes and a massage. I will definitely come again. Also the place is beautiful.",
    color: "bg-sky-600",
  },
  {
    name: "Temitope Ajose-Adeogun",
    time: "3 weeks ago",
    text: "The experience was so efficient and cost effective. Communication was great and they were flexible to meet my timing needs. Would definitely recommend.",
    color: "bg-indigo-600",
  },
  {
    name: "Bonte Emma",
    time: "a month ago",
    text: "Manicure and pedicure 10/10. Nails 100/10. Ambiance, so beauty. Service, amazing. Would recommend.",
    color: "bg-rose-600",
  },
  {
    name: "Vivian Agbo",
    time: "8 months ago",
    text: "Such a nice place and absolutely stunning. Everyone was so nice and friendly especially the hair stylist. Sooo coming back.",
    color: "bg-teal-600",
  },
  {
    name: "Dera Emelife",
    time: "a year ago",
    text: "Exceptional service and ambience. Nothing like this in Abuja.",
    color: "bg-orange-600",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
      <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
    </svg>
  );
}

const ClientTestimonialsSection = () => {
  return (
    <section className="w-full bg-[#f8f9fa] py-20 md:py-24 px-3 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-10 mb-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0">
              <GoogleG size={24} />
            </div>
            <div>
              <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-900 text-lg leading-tight">Google Reviews</p>
              <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-500">Verified reviews from Google</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:border-l md:border-gray-100 md:pl-10">
            <p className="font-[family-name:var(--font-figtree)] font-bold text-5xl text-gray-900">5.0</p>
            <div>
              <Stars />
              <p className="font-[family-name:var(--font-figtree)] text-sm text-gray-500 mt-1">Based on 32 reviews</p>
            </div>
          </div>
          <div className="md:ml-auto flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1a73e8] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1765cc] transition-colors"
            >
              <GoogleG size={16} />
              See all reviews
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-400 transition-colors"
            >
              Review us
            </a>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-center text-gray-900 mb-3">
          What Our Guests Say
        </h2>
        <p className="text-center font-[family-name:var(--font-figtree)] text-sm text-gray-500 mb-12">
          Real 5-star reviews from our Google business profile
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <article key={r.name} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} text-white flex items-center justify-center font-semibold text-sm flex-shrink-0`}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-figtree)] font-semibold text-gray-900 text-sm leading-tight">{r.name}</p>
                    <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-400 mt-0.5">{r.time}</p>
                  </div>
                </div>
                <GoogleG size={18} />
              </div>
              <Stars />
              <p className="font-[family-name:var(--font-figtree)] text-gray-600 text-[15px] leading-relaxed mt-3 flex-1">
                {r.text}
              </p>
              <p className="font-[family-name:var(--font-figtree)] text-xs text-gray-400 mt-4 pt-4 border-t border-gray-50">
                Posted on Google
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-figtree)] text-sm font-medium text-[#1a73e8] hover:underline"
          >
            <GoogleG size={16} />
            Verify all reviews on Google
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17l10-10" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
