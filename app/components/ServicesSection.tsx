"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

interface VideoSet {
  src: string;
  duration: number;
}

interface Service {
  title: string;
  tagline: string;
  videos: VideoSet[];
}

// Services data - defined outside component to prevent recreation on render
const services: Service[] = [
  {
    title: "Hair",
    tagline: "Braids. Color. Styling. Weaves.",
    videos: [
      { src: "/hair/1.mp4", duration: 5 },
      { src: "/hair/2.mp4", duration: 5 },
      { src: "/hair/3.mp4", duration: 5 },
      { src: "/hair/4.mp4", duration: 5 },
      { src: "/hair/5.mp4", duration: 5 },
    ]
  },
  {
    title: "Nails",
    tagline: "Manicures. Acrylics. Nail Art.",
    videos: [
      { src: "/nails/1.mp4", duration: 5 },
      { src: "/nails/2.mp4", duration: 5 },
      { src: "/nails/3.mp4", duration: 5 },
      { src: "/nails/4.mp4", duration: 5 },
    ]
  },
  {
    title: "Spa",
    tagline: "Facials. Massage. Waxing.",
    videos: [
      { src: "/spa/1.mp4", duration: 5 },
      { src: "/spa/2.mp4", duration: 5 },
      { src: "/spa/3.mp4", duration: 5 },
      { src: "/spa/4.mp4", duration: 5 },
    ]
  },
  {
    title: "Lashes",
    tagline: "Extensions. Lifts. Brow Styling.",
    videos: [
      { src: "/lashes/1.mp4", duration: 5 },
      { src: "/lashes/2.mp4", duration: 5 },
      { src: "/lashes/3.mp4", duration: 5 },
    ]
  }
];

const ServicesSection = () => {

  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [videoIndices, setVideoIndices] = useState<number[]>(services.map(() => 0));
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState<number[]>(services.map(() => 0));
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    return () => {
      // Cleanup
    };
  }, []);

  const playVideo = useCallback((cardIndex: number) => {
    const video = videoRefs.current[cardIndex];
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  const pauseVideo = useCallback((cardIndex: number) => {
    const video = videoRefs.current[cardIndex];
    if (video) {
      video.pause();
    }
  }, []);

  // Handle video timeupdate for accurate progress tracking
  const handleTimeUpdate = useCallback((cardIndex: number) => {
    const video = videoRefs.current[cardIndex];
    if (!video || !video.duration) return;

    const newProgress = (video.currentTime / video.duration) * 100;
    setProgress(prev => {
      const newProgressArr = [...prev];
      newProgressArr[cardIndex] = Math.min(newProgress, 100);
      return newProgressArr;
    });
  }, []);

  // Handle video ended event
  const handleVideoEnded = useCallback((cardIndex: number) => {
    setVideoIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = (newIndices[cardIndex] + 1) % services[cardIndex].videos.length;
      return newIndices;
    });
    setProgress(prev => {
      const newProgressArr = [...prev];
      newProgressArr[cardIndex] = 0;
      return newProgressArr;
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
    setActiveCard(index);
    playVideo(index);
  };

  const handleMouseLeave = (index: number) => {
    if (isMobile) return;
    setActiveCard(null);
    pauseVideo(index);
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[index] = 0;
      return newProgress;
    });
  };

  const handleCardClick = (index: number) => {
    if (!isMobile) return;

    if (activeCard === index) {
      setIsMuted(!isMuted);
    } else {
      setActiveCard(index);
      setIsMuted(false);
      playVideo(index);
    }
  };

  const handleMuteToggle = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !isMuted;
    }
  };

  const goToNextVideo = useCallback((cardIndex: number) => {
    // Update video index
    setVideoIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = (newIndices[cardIndex] + 1) % services[cardIndex].videos.length;
      return newIndices;
    });
    // Reset progress for this card
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[cardIndex] = 0;
      return newProgress;
    });
    // Update video source ONLY for this card to prevent others from blinking
    const video = videoRefs.current[cardIndex];
    if (video) {
      const nextIndex = (videoIndices[cardIndex] + 1) % services[cardIndex].videos.length;
      const nextSrc = services[cardIndex].videos[nextIndex].src;
      if (video.src !== nextSrc) {
        video.src = nextSrc;
        video.load();
        if (activeCard === cardIndex) {
          video.play().catch(() => {});
        }
      }
    }
  }, [services, videoIndices, activeCard]);

  const goToPrevVideo = useCallback((cardIndex: number) => {
    // Update video index
    setVideoIndices(prev => {
      const newIndices = [...prev];
      newIndices[cardIndex] = (newIndices[cardIndex] - 1 + services[cardIndex].videos.length) % services[cardIndex].videos.length;
      return newIndices;
    });
    // Reset progress for this card
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[cardIndex] = 0;
      return newProgress;
    });
    // Update video source ONLY for this card to prevent others from blinking
    const video = videoRefs.current[cardIndex];
    if (video) {
      const prevIndex = (videoIndices[cardIndex] - 1 + services[cardIndex].videos.length) % services[cardIndex].videos.length;
      const prevSrc = services[cardIndex].videos[prevIndex].src;
      if (video.src !== prevSrc) {
        video.src = prevSrc;
        video.load();
        if (activeCard === cardIndex) {
          video.play().catch(() => {});
        }
      }
    }
  }, [services, videoIndices, activeCard]);

  const handlePrevClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    goToPrevVideo(index);
  };

  const handleNextClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    goToNextVideo(index);
  };

  // Effect to set initial video sources on mount only
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && !video.src) {
        const currentSrc = services[index].videos[0].src;
        video.src = currentSrc;
        video.load();
      }
    });
  }, []);

  // Separate effect for play/pause based on activeCard
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (activeCard === index) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [activeCard]);

  return (
    <section className={`w-full bg-[#1a1512] py-24 overflow-hidden ${poppins.variable} font-sans`}>
      {/* Section Header */}
      <div className="px-4 md:px-20 mb-12">
        <span className="text-sm tracking-widest uppercase text-[#c9a87c] font-semibold mb-4 block">
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Everything <span className="text-[#c9a87c]">Beauty</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl">
          Four categories. One standard. Your transformation starts here.
        </p>
      </div>

      {/* Horizontal Scroll Container - No Scrollbar */}
      <div className="pl-4 md:pl-20 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="flex gap-4 md:gap-6 pb-4 pr-4 md:pr-20" style={{ width: 'max-content' }}>
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[280px] md:w-[320px] flex-shrink-0"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-[#2a231d] rounded-2xl overflow-hidden border border-[#3d3229] cursor-pointer">
                {/* Video */}
                <video
                  ref={(el) => { videoRefs.current[index] = el; }}
                  className="w-full h-full object-cover"
                  src={service.videos[0].src}
                  muted={isMuted}
                  loop={false}
                  playsInline
                  onTimeUpdate={() => handleTimeUpdate(index)}
                  onEnded={() => handleVideoEnded(index)}
                />

                {/* Click Zones for Navigation */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1/4 cursor-pointer z-10"
                  onClick={(e) => handlePrevClick(e, index)}
                >
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </div>
                </div>
                <div
                  className="absolute right-0 top-0 bottom-0 w-1/4 cursor-pointer z-10"
                  onClick={(e) => handleNextClick(e, index)}
                >
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                {/* WhatsApp Status Progress Bars */}
                <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                  {service.videos.map((_, vidIndex) => (
                    <div key={vidIndex} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                        style={{
                          width: vidIndex === videoIndices[index]
                            ? `${progress[index]}%`
                            : vidIndex < videoIndices[index]
                              ? '100%'
                              : '0%'
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Mute/Unmute Button */}
                {(activeCard === index || isMobile) && (
                  <button
                    onClick={(e) => handleMuteToggle(e, index)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors z-20"
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                        <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>
                        <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                      </svg>
                    )}
                  </button>
                )}

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-6 px-4 z-20">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-[#c9a87c] font-medium text-sm">
                    {service.tagline}
                  </p>
                </div>

                {/* Play Indicator */}
                {!isMobile && activeCard !== index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Stylish Button */}
      <div className="px-4 md:px-20 mt-12 text-center md:text-left">
        <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#c9a87c] text-[#c9a87c] px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:text-[#1a1512] cursor-pointer">
          <span className="absolute inset-0 bg-[#c9a87c] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative font-semibold uppercase tracking-wider text-xs">
            Explore All Services
          </span>
          <svg
            className="relative w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
