"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// Services data organized by category
const servicesByCategory = [
  {
    category: "Hair Styling",
    services: [
      { id: 'washing-hair', name: 'Washing of Hair', duration: '30 min', price: 5000 },
      { id: 'washing-weaving', name: 'Washing & Weaving', duration: '45 min', price: 8000 },
      { id: 'retouching-with-product', name: 'Retouching w/ Product', duration: '60 min', price: 10000 },
      { id: 'retouching-without-product', name: 'Retouching w/out Product', duration: '60 min', price: 8500 },
      { id: 'hair-steaming', name: 'Hair Steaming', duration: '30 min', price: 20000 },
      { id: 'natural-hair-twist', name: 'Natural Hair Twist', duration: '45 min', price: 25000 },
    ]
  },
  {
    category: "Cornrows",
    services: [
      { id: 'cornrows-big', name: 'Cornrows (Big)', duration: '60 min', price: 20000 },
      { id: 'cornrows-medium', name: 'Cornrows (Medium)', duration: '90 min', price: 25000 },
      { id: 'cornrows-small', name: 'Cornrows (Small)', duration: '120 min', price: 30000 },
    ]
  },
  {
    category: "Stitch Braids",
    services: [
      { id: 'stitch-big', name: 'Stitch Braids (Big)', duration: '120 min', price: 35000 },
      { id: 'stitch-medium', name: 'Stitch Braids (Medium)', duration: '150 min', price: 40000 },
      { id: 'stitch-small', name: 'Stitch Braids (Small)', duration: '180 min', price: 45000 },
      { id: 'shuku-stitch-big', name: 'Shuku Stitch Braids (Big)', duration: '120 min', price: 45000 },
      { id: 'shuku-stitch-medium', name: 'Shuku Stitch Braids (Medium)', duration: '150 min', price: 50000 },
      { id: 'shuku-stitch-small', name: 'Shuku Stitch Braids (Small)', duration: '180 min', price: 55000 },
    ]
  },
  {
    category: "Knotless Braids",
    services: [
      { id: 'knotless-short', name: 'Knotless Braids (Short)', duration: '120 min', price: 35000 },
      { id: 'knotless-medium', name: 'Knotless Braids (Medium)', duration: '150 min', price: 40000 },
      { id: 'knotless-long', name: 'Knotless Braids (Long)', duration: '180 min', price: 45000 },
    ]
  },
  {
    category: "Micro Braids",
    services: [
      { id: 'micro-short', name: 'Micro Braids (Short)', duration: '180 min', price: 40000 },
      { id: 'micro-medium', name: 'Micro Braids (Medium)', duration: '240 min', price: 50000 },
      { id: 'micro-long', name: 'Micro Braids (Long)', duration: '300 min', price: 70000 },
    ]
  },
  {
    category: "Boho Braids",
    services: [
      { id: 'boho-short', name: 'Boho Braids (Short)', duration: '150 min', price: 40000 },
      { id: 'boho-medium', name: 'Boho Braids (Medium)', duration: '180 min', price: 45000 },
      { id: 'boho-long', name: 'Boho Braids (Long)', duration: '210 min', price: 55000 },
    ]
  },
  {
    category: "Fulani Braids",
    services: [
      { id: 'fulani-short', name: 'Fulani Braids (Short)', duration: '120 min', price: 30000 },
      { id: 'fulani-medium', name: 'Fulani Braids (Medium)', duration: '150 min', price: 40000 },
      { id: 'fulani-small', name: 'Fulani Braids (Small)', duration: '180 min', price: 45000 },
      { id: 'fulani-extra-long', name: 'Fulani Braids (Extra Long)', duration: '210 min', price: 55000 },
    ]
  },
  {
    category: "Twist Styles",
    services: [
      { id: 'bouncing-short', name: 'Bouncing Twist (Short)', duration: '120 min', price: 40000 },
      { id: 'bouncing-medium', name: 'Bouncing Twist (Medium)', duration: '150 min', price: 50000 },
      { id: 'bouncing-long', name: 'Bouncing Twist (Long)', duration: '180 min', price: 60000 },
      { id: 'micro-twist-short', name: 'Micro Twist (Short)', duration: '240 min', price: 75000 },
      { id: 'micro-twist-long', name: 'Micro Twist (Long)', duration: '300 min', price: 120000 },
    ]
  },
  {
    category: "Hair Installation",
    services: [
      { id: 'frontal-wig', name: 'Frontal Wig', duration: '90 min', price: 30000 },
      { id: 'closure-wig', name: 'Closure Wig', duration: '60 min', price: 25000 },
      { id: 'wig-construction', name: 'Wig Construction', duration: '120 min', price: 15000 },
      { id: 'revamping', name: 'Revamping', duration: '60 min', price: 15000 },
      { id: 'frontal-ponytail', name: 'Frontal Ponytail', duration: '90 min', price: 30000 },
      { id: 'glueless-frontal', name: 'Glueless Frontal', duration: '60 min', price: 25000 },
      { id: 'glueless-closure', name: 'Glueless Closure', duration: '60 min', price: 20000 },
      { id: '360-wig', name: '360 Wig Frontal', duration: '120 min', price: 40000 },
      { id: 'traditional-sewin', name: 'Traditional Sewin', duration: '90 min', price: 35000 },
      { id: 'curling', name: 'Curling', duration: '30 min', price: 10000 },
      { id: 'straightening-long', name: 'Straightening (Long Hair)', duration: '45 min', price: 15000 },
      { id: 'straightening-short', name: 'Straightening (Short Hair)', duration: '30 min', price: 10000 },
      { id: 'ponytail-natural', name: 'Ponytail (Natural Hair)', duration: '60 min', price: 25000 },
    ]
  },
  {
    category: "Massages",
    services: [
      { id: 'swedish-massage', name: 'Swedish Massage', duration: '60 min', price: 70000 },
      { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 min', price: 80000 },
      { id: 'hot-stone', name: 'Hot Stone Massage', duration: '60 min', price: 75000 },
      { id: 'couple-massage', name: 'Couple Massage', duration: '60 min', price: 130000 },
    ]
  },
  {
    category: "Makeup & Brows",
    services: [
      { id: 'studio-makeup', name: 'Studio Makeup', duration: '60 min', price: 40000 },
      { id: 'home-makeup', name: 'Home Service Makeup', duration: '90 min', price: 60000 },
    ]
  },
];

// All videos combined and shuffled
const allVideos = [
  { src: "/hair/1.mp4", duration: 5 },
  { src: "/hair/2.mp4", duration: 5 },
  { src: "/hair/3.mp4", duration: 5 },
  { src: "/hair/4.mp4", duration: 5 },
  { src: "/hair/5.mp4", duration: 5 },
  { src: "/hair/6.mp4", duration: 5 },
  { src: "/hair/7.mp4", duration: 5 },
  { src: "/hair/8.mp4", duration: 5 },
  { src: "/hair/9.mp4", duration: 5 },
  { src: "/hair/10.mp4", duration: 5 },
  { src: "/hair/11.mp4", duration: 5 },
  { src: "/nails/1.mp4", duration: 5 },
  { src: "/nails/2.mp4", duration: 5 },
  { src: "/nails/3.mp4", duration: 5 },
  { src: "/nails/4.mp4", duration: 5 },
  { src: "/nails/5.mp4", duration: 5 },
  { src: "/nails/6.mp4", duration: 5 },
  { src: "/nails/7.mp4", duration: 5 },
  { src: "/nails/8.mp4", duration: 5 },
  { src: "/spa/1.mp4", duration: 5 },
  { src: "/spa/2.mp4", duration: 5 },
  { src: "/spa/3.mp4", duration: 5 },
  { src: "/spa/4.mp4", duration: 5 },
  { src: "/lashes/1.mp4", duration: 5 },
  { src: "/lashes/2.mp4", duration: 5 },
  { src: "/lashes/3.mp4", duration: 5 },
];

// Shuffle videos randomly
const shuffleArray = (array: typeof allVideos) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ServicesPage() {
  const router = useRouter();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [shuffledVideos, setShuffledVideos] = useState(allVideos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Shuffle videos only on client side to avoid hydration mismatch
  useEffect(() => {
    setShuffledVideos(shuffleArray(allVideos));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % shuffledVideos.length);
    setProgress(0);
  }, [shuffledVideos.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + shuffledVideos.length) % shuffledVideos.length);
    setProgress(0);
  }, [shuffledVideos.length]);

  useEffect(() => {
    if (!isPlaying) return;

    const duration = shuffledVideos[currentIndex].duration * 1000;
    const updateInterval = 50;
    let elapsed = 0;

    intervalRef.current = setInterval(() => {
      elapsed += updateInterval;
      const newProgress = (elapsed / duration) * 100;
      setProgress(Math.min(newProgress, 100));

      if (elapsed >= duration) {
        goToNext();
      }
    }, updateInterval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, isPlaying, shuffledVideos, goToNext]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = shuffledVideos[currentIndex].src;
      video.load();
      if (isPlaying) {
        video.play().catch(() => {});
      }
    }
  }, [currentIndex, shuffledVideos, isPlaying]);

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToPrev();
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    goToNext();
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
    }
  };

  // Service selection functions
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const formatPrice = (price: number) => '₦' + price.toLocaleString();

  const handleProceedToBooking = () => {
    // Save selected services to localStorage
    localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
    router.push('/booking');
  };

  // Calculate total price
  const totalPrice = selectedServices.reduce((sum, serviceId) => {
    for (const category of servicesByCategory) {
      const service = category.services.find(s => s.id === serviceId);
      if (service) return sum + service.price;
    }
    return sum;
  }, 0);

  return (
    <main className={`min-h-screen bg-white ${poppins.variable} font-sans`}>
      <Header />

      {/* Hero Section - Full Screen Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={shuffledVideos[0].src}
          muted={isMuted}
          loop={false}
          playsInline
          autoPlay
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Progress Bars - Top */}
        <div className="absolute top-4 left-4 right-4 flex gap-1 z-30">
          {shuffledVideos.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: index === currentIndex
                    ? `${progress}%`
                    : index < currentIndex
                      ? '100%'
                      : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Click Zones */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/4 cursor-pointer z-20"
          onClick={handlePrevClick}
        >
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
        </div>
        <div
          className="absolute right-0 top-0 bottom-0 w-1/4 cursor-pointer z-20"
          onClick={handleNextClick}
        >
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        {/* Mute Button */}
        <button
          onClick={handleMuteToggle}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-30"
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="1" y1="1" x2="23" y2="23"></line>
              <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            </svg>
          )}
        </button>

        {/* Hero Content - Centered */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 px-4">
          <span className="text-sm tracking-widest uppercase text-[#c9a87c] font-bold mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white text-center mb-6">
            See the <span className="text-[#c9a87c]">Shakara</span> Difference
          </h1>
          <p className="text-white/80 text-center max-w-lg mb-8">
            Browse through our collection of transformations
          </p>

          {/* Video Counter */}
          <p className="text-white/60 text-sm mb-8">
            {currentIndex + 1} / {shuffledVideos.length}
          </p>

          {/* CTA */}
          <a
            href="/booking"
            target="_blank"
            className="inline-flex items-center gap-4 bg-white text-[#1a1512] pl-2 pr-8 py-2 rounded-full  transition-all hover:scale-105 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#1a1512] flex items-center justify-center text-[#fff] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10"/>
                <path d="M7 7h10v10"/>
              </svg>
            </div>
            <span className="font-bold uppercase tracking-wider text-xs">
              Book This Look
            </span>
          </a>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/30 via-transparent to-transparent h-20 z-20" />
      </section>

      {/* Services List Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Our <span className="text-[#c9a87c]">Services</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Select the services you&apos;d like to book. Click on a service to add or remove it from your selection.
            </p>
          </div>

          {/* Selected Services Summary */}
          {selectedServices.length > 0 && (
            <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-900 font-semibold">
                  Selected Services ({selectedServices.length})
                </h3>
                <span className="text-[#c9a87c] font-semibold text-xl">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedServices.map(serviceId => {
                  const service = servicesByCategory
                    .flatMap(cat => cat.services)
                    .find(s => s.id === serviceId);
                  return (
                    <div
                      key={serviceId}
                      className="flex items-center gap-2 bg-[#c9a87c]/10 px-3 py-1.5 rounded-full text-sm text-[#c9a87c] border border-[#c9a87c]/30"
                    >
                      <span>{service?.name}</span>
                      <button
                        onClick={() => toggleService(serviceId)}
                        className="hover:text-gray-900 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={handleProceedToBooking}
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Proceed to Booking
              </button>
            </div>
          )}
          {/* Services by Category */}
          <div className="space-y-12">
            {servicesByCategory.map((category) => (
              <div key={category.category}>
                {/* Category Header with Line */}
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c9a87c] whitespace-nowrap">
                    {category.category}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.services.map((service) => {
                    const isSelected = selectedServices.includes(service.id);
                    return (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`group relative p-4 border rounded-xl text-left transition-all ${
                          isSelected
                            ? 'border-black bg-gray-50'
                            : 'border-gray-200 bg-white hover:border-gray-400'
                        }`}
                      >
                        {/* Selection Indicator */}
                        <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'border-black bg-black'
                            : 'border-gray-300'
                        }`}>
                          {isSelected && (
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>

                        <h4 className="text-gray-900 font-medium pr-8 mb-1 group-hover:text-black transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-500 text-sm mb-2">{service.duration}</p>
                        <p className="text-black font-semibold">₦{service.price.toLocaleString()}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          {selectedServices.length > 0 && (
            <div className="mt-12 text-center">
              <button
                onClick={handleProceedToBooking}
                className="inline-flex items-center gap-4 bg-black text-white pl-2 pr-8 py-2 rounded-full hover:bg-gray-800 transition-all hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M7 17l10-10"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </div>
                <span className="font-bold uppercase tracking-wider text-sm">
                  Proceed to Booking ({selectedServices.length} services - {formatPrice(totalPrice)})
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}
