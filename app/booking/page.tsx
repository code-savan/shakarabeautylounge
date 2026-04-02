"use client";

import { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const services = [
  // HAIR STYLING
  { id: 'washing-hair', name: 'Washing of Hair', duration: '30 min', price: 5000, category: 'Hair Styling' },
  { id: 'washing-weaving', name: 'Washing & Weaving', duration: '45 min', price: 8000, category: 'Hair Styling' },
  { id: 'retouching-with-product', name: 'Retouching w/ Product', duration: '60 min', price: 10000, category: 'Hair Styling' },
  { id: 'retouching-without-product', name: 'Retouching w/out Product', duration: '60 min', price: 8500, category: 'Hair Styling' },
  { id: 'hair-steaming', name: 'Hair Steaming', duration: '30 min', price: 20000, category: 'Hair Styling' },
  { id: 'natural-hair-twist', name: 'Natural Hair Twist', duration: '45 min', price: 25000, category: 'Hair Styling' },

  // CORNROWS
  { id: 'cornrows-big', name: 'Cornrows (Big)', duration: '60 min', price: 20000, category: 'Cornrows' },
  { id: 'cornrows-medium', name: 'Cornrows (Medium)', duration: '90 min', price: 25000, category: 'Cornrows' },
  { id: 'cornrows-small', name: 'Cornrows (Small)', duration: '120 min', price: 30000, category: 'Cornrows' },

  // STITCH BRAIDS
  { id: 'stitch-big', name: 'Stitch Braids (Big)', duration: '120 min', price: 35000, category: 'Stitch Braids' },
  { id: 'stitch-medium', name: 'Stitch Braids (Medium)', duration: '150 min', price: 40000, category: 'Stitch Braids' },
  { id: 'stitch-small', name: 'Stitch Braids (Small)', duration: '180 min', price: 45000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-big', name: 'Shuku Stitch Braids (Big)', duration: '120 min', price: 45000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-medium', name: 'Shuku Stitch Braids (Medium)', duration: '150 min', price: 50000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-small', name: 'Shuku Stitch Braids (Small)', duration: '180 min', price: 55000, category: 'Stitch Braids' },

  // KNOTLESS BRAIDS
  { id: 'knotless-short', name: 'Knotless Braids (Short)', duration: '120 min', price: 35000, category: 'Knotless Braids' },
  { id: 'knotless-medium', name: 'Knotless Braids (Medium)', duration: '150 min', price: 40000, category: 'Knotless Braids' },
  { id: 'knotless-long', name: 'Knotless Braids (Long)', duration: '180 min', price: 45000, category: 'Knotless Braids' },

  // MICRO BRAIDS
  { id: 'micro-short', name: 'Micro Braids (Short)', duration: '180 min', price: 40000, category: 'Micro Braids' },
  { id: 'micro-medium', name: 'Micro Braids (Medium)', duration: '240 min', price: 50000, category: 'Micro Braids' },
  { id: 'micro-long', name: 'Micro Braids (Long)', duration: '300 min', price: 70000, category: 'Micro Braids' },

  // BOHO BRAIDS
  { id: 'boho-short', name: 'Boho Braids (Short)', duration: '150 min', price: 40000, category: 'Boho Braids' },
  { id: 'boho-medium', name: 'Boho Braids (Medium)', duration: '180 min', price: 45000, category: 'Boho Braids' },
  { id: 'boho-long', name: 'Boho Braids (Long)', duration: '210 min', price: 55000, category: 'Boho Braids' },

  // FULANI BRAIDS
  { id: 'fulani-short', name: 'Fulani Braids (Short)', duration: '120 min', price: 30000, category: 'Fulani Braids' },
  { id: 'fulani-medium', name: 'Fulani Braids (Medium)', duration: '150 min', price: 40000, category: 'Fulani Braids' },
  { id: 'fulani-small', name: 'Fulani Braids (Small)', duration: '180 min', price: 45000, category: 'Fulani Braids' },
  { id: 'fulani-extra-long', name: 'Fulani Braids (Extra Long)', duration: '210 min', price: 55000, category: 'Fulani Braids' },

  // TWIST STYLES
  { id: 'bouncing-short', name: 'Bouncing Twist (Short)', duration: '120 min', price: 40000, category: 'Twist Styles' },
  { id: 'bouncing-medium', name: 'Bouncing Twist (Medium)', duration: '150 min', price: 50000, category: 'Twist Styles' },
  { id: 'bouncing-long', name: 'Bouncing Twist (Long)', duration: '180 min', price: 60000, category: 'Twist Styles' },
  { id: 'micro-twist-short', name: 'Micro Twist (Short)', duration: '240 min', price: 75000, category: 'Twist Styles' },
  { id: 'micro-twist-long', name: 'Micro Twist (Long)', duration: '300 min', price: 120000, category: 'Twist Styles' },

  // HAIR INSTALLATION
  { id: 'frontal-wig', name: 'Frontal Wig', duration: '90 min', price: 30000, category: 'Hair Installation' },
  { id: 'closure-wig', name: 'Closure Wig', duration: '60 min', price: 25000, category: 'Hair Installation' },
  { id: 'wig-construction', name: 'Wig Construction', duration: '120 min', price: 15000, category: 'Hair Installation' },
  { id: 'revamping', name: 'Revamping', duration: '60 min', price: 15000, category: 'Hair Installation' },
  { id: 'frontal-ponytail', name: 'Frontal Ponytail', duration: '90 min', price: 30000, category: 'Hair Installation' },
  { id: 'glueless-frontal', name: 'Glueless Frontal', duration: '60 min', price: 25000, category: 'Hair Installation' },
  { id: 'glueless-closure', name: 'Glueless Closure', duration: '60 min', price: 20000, category: 'Hair Installation' },
  { id: '360-wig', name: '360 Wig Frontal', duration: '120 min', price: 40000, category: 'Hair Installation' },
  { id: 'traditional-sewin', name: 'Traditional Sewin', duration: '90 min', price: 35000, category: 'Hair Installation' },
  { id: 'curling', name: 'Curling', duration: '30 min', price: 10000, category: 'Hair Installation' },
  { id: 'straightening-long', name: 'Straightening (Long Hair)', duration: '45 min', price: 15000, category: 'Hair Installation' },
  { id: 'straightening-short', name: 'Straightening (Short Hair)', duration: '30 min', price: 10000, category: 'Hair Installation' },
  { id: 'ponytail-natural', name: 'Ponytail (Natural Hair)', duration: '60 min', price: 25000, category: 'Hair Installation' },

  // MASSAGES
  { id: 'swedish-massage', name: 'Swedish Massage', duration: '60 min', price: 70000, category: 'Massages' },
  { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 min', price: 80000, category: 'Massages' },
  { id: 'hot-stone', name: 'Hot Stone Massage', duration: '60 min', price: 75000, category: 'Massages' },
  { id: 'couple-massage', name: 'Couple Massage', duration: '60 min', price: 130000, category: 'Massages' },

  // MAKEUP & BROWS
  { id: 'studio-makeup', name: 'Studio Makeup', duration: '60 min', price: 40000, category: 'Makeup & Brows' },
  { id: 'home-makeup', name: 'Home Service Makeup', duration: '90 min', price: 60000, category: 'Makeup & Brows' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM'
];

const steps = [
  { id: 1, label: 'Services' },
  { id: 2, label: 'Date & Time' },
  { id: 3, label: 'Details' },
  { id: 4, label: 'Confirm' },
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceSearch, setServiceSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Load cached services from localStorage on mount
  useEffect(() => {
    const cachedServices = localStorage.getItem('selectedServices');
    if (cachedServices) {
      try {
        const parsedServices = JSON.parse(cachedServices);
        if (Array.isArray(parsedServices) && parsedServices.length > 0) {
          setSelectedServices(parsedServices);
          // Skip services step and go directly to date/time
          setCurrentStep(2);
          // Clear the cache after loading
          localStorage.removeItem('selectedServices');
        }
      } catch (e) {
        console.error('Failed to parse cached services:', e);
      }
    }
  }, []);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();

  const isToday = (date: Date) => isSameDay(date, new Date());

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatDateKey = (date: Date) => date.toISOString().split('T')[0];
  const formatPrice = (price: number) => '₦' + price.toLocaleString();

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  const filteredServices = services.filter(s =>
    (selectedCategory === 'All' || s.category === selectedCategory) &&
    s.name.toLowerCase().includes(serviceSearch.toLowerCase()) &&
    !selectedServices.includes(s.id)
  );

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = services.find(s => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  const addService = (id: string) => {
    if (!selectedServices.includes(id)) {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s !== id));
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedServices.length > 0;
    if (currentStep === 2) return selectedDate && selectedTime;
    if (currentStep === 3) return formData.firstName && formData.lastName && formData.phone;
    return true;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className={`min-h-screen bg-white ${poppins.variable} font-sans`}>
        <Header />
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Booking Confirmed!</h2>
            <p className="text-gray-500 mb-8">We&apos;ve received your booking request. You&apos;ll receive a confirmation call shortly.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Book Another Appointment
            </button>
          </div>
        </section>
        <Footer />
        <ChatBot />
      </main>
    );
  }

  return (
    <main className={`min-h-screen bg-white ${poppins.variable} font-sans`}>
      <Header />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video className="w-full h-full object-cover" src="/hero-bg.mp4" muted loop playsInline autoPlay />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-2">Book Your Visit</h1>
          <p className="text-white/70">Select your services and preferred time</p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentStep === step.id
                    ? 'bg-black text-white'
                    : currentStep > step.id
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-gray-50 text-gray-400'
                }`}>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    currentStep > step.id ? 'bg-black text-white' : 'border border-current'
                  }`}>
                    {currentStep > step.id ? '✓' : step.id}
                  </span>
                  {step.label}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-8 h-px mx-2 ${currentStep > step.id ? 'bg-black' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Step 1: Services */}
          <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Choose your services</h2>
              <p className="text-gray-500">Select one or more services for your appointment</p>
            </div>

            {/* Selected Services */}
            {selectedServices.length > 0 && (
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm font-medium text-gray-700 mb-3">Selected ({selectedServices.length})</p>
                <div className="flex flex-wrap gap-2">
                  {selectedServices.map(id => {
                    const service = services.find(s => s.id === id)!;
                    return (
                      <div key={id} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                        <span className="text-sm font-medium text-gray-900">{service.name}</span>
                        <span className="text-sm text-gray-500">{formatPrice(service.price)}</span>
                        <button onClick={() => removeService(id)} className="text-gray-400 hover:text-red-500 cursor-pointer ml-1">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                        </button>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200">
                  <span className="text-gray-600">Total</span>
                  <span className="text-xl font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            )}

            {/* Search */}
            <div className="relative mb-4">
              <input
                type="text"
                value={serviceSearch}
                onChange={(e) => setServiceSearch(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all placeholder:text-gray-600"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredServices.map(service => (
                <button
                  key={service.id}
                  onClick={() => addService(service.id)}
                  className="group text-left p-4 border border-gray-200 rounded-xl hover:border-black hover:shadow-md transition-all bg-white"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900 group-hover:text-black">{service.name}</h3>
                    <span className="text-sm font-semibold text-gray-900">{formatPrice(service.price)}</span>
                  </div>
                  <p className="text-sm text-gray-500">{service.duration}</p>
                </button>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <p className="text-center text-gray-500 py-8">No services found</p>
            )}
          </div>

          {/* Step 2: Date & Time */}
          <div className={`${currentStep === 2 ? 'block' : 'hidden'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Select date & time</h2>
              <p className="text-gray-500">Choose your preferred appointment slot</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-gray-900">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h3>
                  <div className="flex gap-1">
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))} className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>
                    <button onClick={() => setCurrentMonth(new Date())} className="px-3 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">Today</button>
                    <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))} className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-xl p-4 bg-white">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {weekdayNames.map(day => (
                      <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentMonth).map((date, i) => {
                      if (!date) return <div key={i} className="h-10" />;
                      const key = formatDateKey(date);
                      const selected = selectedDate === key;
                      const today = isToday(date);
                      const past = isPastDate(date);
                      return (
                        <button
                          key={key}
                          onClick={() => !past && setSelectedDate(key)}
                          disabled={past}
                          className={`h-10 rounded-lg text-sm font-medium transition-all ${
                            selected ? 'bg-black text-white' :
                            today ? 'bg-gray-100 text-black border border-gray-300' :
                            past ? 'text-gray-200 cursor-not-allowed' :
                            'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Available times</h3>
                {selectedDate ? (
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-xl text-sm font-medium transition-all border ${
                          selectedTime === time
                            ? 'bg-black text-white border-black'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-400 border border-gray-200 rounded-xl border-dashed">
                    <p>Select a date first</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Details */}
          <div className={`${currentStep === 3 ? 'block' : 'hidden'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your details</h2>
              <p className="text-gray-500">We&apos;ll use this to confirm your booking</p>
            </div>

            <div className="max-w-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all placeholder:text-gray-600"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all placeholder:text-gray-600"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all placeholder:text-gray-600"
                  placeholder="+234 000 000 0000"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email (optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black focus:ring-2 focus:ring-black/5 outline-none transition-all resize-none placeholder:text-gray-600"
                  placeholder="Any special requests..."
                />
              </div>
            </div>
          </div>

          {/* Step 4: Confirm */}
          <div className={`${currentStep === 4 ? 'block' : 'hidden'}`}>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Confirm your booking</h2>
              <p className="text-gray-500">Review your appointment details</p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                {/* Services */}
                <div>
                  <p className="text-sm text-gray-500 mb-2">Services</p>
                  <div className="space-y-2">
                    {selectedServices.map(id => {
                      const s = services.find(x => x.id === id)!;
                      return (
                        <div key={id} className="flex justify-between items-center">
                          <span className="text-gray-900">{s.name}</span>
                          <span className="text-gray-700">{formatPrice(s.price)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Date</span>
                    <span className="text-gray-900">
                      {selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : '-'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500">Time</span>
                    <span className="text-gray-900">{selectedTime}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Name</span>
                    <span className="text-gray-900">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500">Phone</span>
                    <span className="text-gray-900">{formData.phone}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full mt-6 bg-black text-white py-4 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle className="opacity-25" cx="12" cy="12" r="10"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-100">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium disabled:opacity-0 cursor-pointer transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => currentStep < 4 ? setCurrentStep(currentStep + 1) : handleSubmit()}
              disabled={!canProceed()}
              className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              {currentStep === 4 ? 'Confirm Booking' : 'Continue'}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  );
}
