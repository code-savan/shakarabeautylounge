"use client";

import { useState, useEffect, useRef } from 'react';
import { Poppins } from 'next/font/google';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const newTime = (parseFloat(e.target.value) / 100) * video.duration;
    video.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  return (
    <main className={`min-h-screen bg-white ${poppins.variable} font-sans`}>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Mobile Video Background */}
        {isMobile && (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src="/aboutherovideo.mp4"
              muted={isMuted}
              loop
              playsInline
              autoPlay
            />
            <div className="absolute inset-0 bg-black/50" />

            {/* Video Controls - Mobile */}
            <div className="absolute bottom-8 left-4 right-4 z-30">
              <div className="flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <rect x="6" y="4" width="4" height="16" rx="1"/>
                      <rect x="14" y="4" width="4" height="16" rx="1"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="1" y1="1" x2="23" y2="23"/>
                      <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </>
        )}

        {/* Main Content Grid */}
        <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-between px-6 md:px-12 lg:px-16 py-6 md:py-8">
            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center py-12 lg:py-0">
              {/* Location */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 w-fit mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-sm text-gray-600 font-medium">
                  Wuse II, Abuja, Nigeria
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900 mb-6">
                Beauty & Wellness<br/>
                <span className="text-[#c9a87c]">Redefined</span> in Abuja
              </h1>

              {/* Description */}
              <p className="text-gray-500 max-w-md mb-8">
                Experience luxury beauty services tailored to you. From expert hair styling to rejuvenating massages, we bring out your natural beauty.
              </p>

              {/* Social Proof */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-600 text-xs font-semibold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  Trusted by 1000+ clients
                </span>
              </div>

              {/* CTA Button */}
              <a
                href="/booking"
                className="inline-flex items-center gap-3 bg-black text-white pl-2 pr-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l10-10"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </div>
                <span className="font-medium text-sm">
                  Book Appointment
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Video (Desktop Only) */}
          <div className="hidden lg:block relative p-4">
            <div className="absolute inset-0 rounded-[40px] overflow-hidden m-4">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/aboutherovideo.mp4"
                muted={isMuted}
                loop
                playsInline
                autoPlay
              />

              {/* Desktop Video Controls */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="flex items-center justify-between">
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    {isPlaying ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <rect x="6" y="4" width="4" height="16" rx="1"/>
                        <rect x="14" y="4" width="4" height="16" rx="1"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    {isMuted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="1" y1="1" x2="23" y2="23"/>
                        <path d="M9 9v6a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-[#c9a87c] mb-4 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Where Beauty Meets Expertise
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Founded with a passion for excellence, Shakara Beauty Lounge has become Abuja&apos;s premier destination for luxury beauty services. Our team of skilled professionals is dedicated to helping you look and feel your best.
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-[#c9a87c] mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Premium Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Hair Styling', desc: 'Braids, twists, cornrows & more', icon: '✦' },
              { title: 'Wig Installation', desc: 'Frontal, closure & custom wigs', icon: '✦' },
              { title: 'Massages', desc: 'Swedish, deep tissue & hot stone', icon: '✦' },
              { title: 'Makeup', desc: 'Studio & home service makeup', icon: '✦' },
              { title: 'Hair Treatments', desc: 'Steaming, retouching & conditioning', icon: '✦' },
              { title: 'Consultation', desc: 'Personalized beauty advice', icon: '✦' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <span className="text-[#c9a87c] text-xl mb-3 block">{service.icon}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-[#c9a87c] transition-colors"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10"/>
                <path d="M7 7h10v10"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-[#c9a87c] mb-4 block">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              The Shakara Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Stylists', desc: 'Trained professionals with years of experience in all hair types and styles.' },
              { title: 'Premium Products', desc: 'We use only high-quality products that nourish and protect your hair.' },
              { title: 'Relaxing Atmosphere', desc: 'Enjoy your service in our comfortable, modern, and welcoming space.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#c9a87c] font-semibold">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Book your appointment today and experience the Shakara difference.
          </p>
          <a
            href="/booking"
            className="inline-flex items-center gap-3 bg-white text-black pl-2 pr-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l10-10"/>
                <path d="M7 7h10v10"/>
              </svg>
            </div>
            <span className="font-medium text-sm">Book Now</span>
          </a>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}
