"use client";

import { useState, useEffect, useCallback } from 'react';
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
  { id: 'washing-hair', name: 'Washing of Hair', duration: '30 min', price: 5000, category: 'Hair Styling' },
  { id: 'washing-weaving', name: 'Washing & Weaving', duration: '45 min', price: 8000, category: 'Hair Styling' },
  { id: 'retouching-with-product', name: 'Retouching w/ Product', duration: '60 min', price: 10000, category: 'Hair Styling' },
  { id: 'retouching-without-product', name: 'Retouching w/out Product', duration: '60 min', price: 8500, category: 'Hair Styling' },
  { id: 'hair-steaming', name: 'Hair Steaming', duration: '30 min', price: 20000, category: 'Hair Styling' },
  { id: 'natural-hair-twist', name: 'Natural Hair Twist', duration: '45 min', price: 25000, category: 'Hair Styling' },
  { id: 'cornrows-big', name: 'Cornrows (Big)', duration: '60 min', price: 20000, category: 'Cornrows' },
  { id: 'cornrows-medium', name: 'Cornrows (Medium)', duration: '90 min', price: 25000, category: 'Cornrows' },
  { id: 'cornrows-small', name: 'Cornrows (Small)', duration: '120 min', price: 30000, category: 'Cornrows' },
  { id: 'stitch-big', name: 'Stitch Braids (Big)', duration: '120 min', price: 35000, category: 'Stitch Braids' },
  { id: 'stitch-medium', name: 'Stitch Braids (Medium)', duration: '150 min', price: 40000, category: 'Stitch Braids' },
  { id: 'stitch-small', name: 'Stitch Braids (Small)', duration: '180 min', price: 45000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-big', name: 'Shuku Stitch Braids (Big)', duration: '120 min', price: 45000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-medium', name: 'Shuku Stitch Braids (Medium)', duration: '150 min', price: 50000, category: 'Stitch Braids' },
  { id: 'shuku-stitch-small', name: 'Shuku Stitch Braids (Small)', duration: '180 min', price: 55000, category: 'Stitch Braids' },
  { id: 'knotless-short', name: 'Knotless Braids (Short)', duration: '120 min', price: 35000, category: 'Knotless Braids' },
  { id: 'knotless-medium', name: 'Knotless Braids (Medium)', duration: '150 min', price: 40000, category: 'Knotless Braids' },
  { id: 'knotless-long', name: 'Knotless Braids (Long)', duration: '180 min', price: 45000, category: 'Knotless Braids' },
  { id: 'micro-short', name: 'Micro Braids (Short)', duration: '180 min', price: 40000, category: 'Micro Braids' },
  { id: 'micro-medium', name: 'Micro Braids (Medium)', duration: '240 min', price: 50000, category: 'Micro Braids' },
  { id: 'micro-long', name: 'Micro Braids (Long)', duration: '300 min', price: 70000, category: 'Micro Braids' },
  { id: 'boho-short', name: 'Boho Braids (Short)', duration: '150 min', price: 40000, category: 'Boho Braids' },
  { id: 'boho-medium', name: 'Boho Braids (Medium)', duration: '180 min', price: 45000, category: 'Boho Braids' },
  { id: 'boho-long', name: 'Boho Braids (Long)', duration: '210 min', price: 55000, category: 'Boho Braids' },
  { id: 'fulani-short', name: 'Fulani Braids (Short)', duration: '120 min', price: 30000, category: 'Fulani Braids' },
  { id: 'fulani-medium', name: 'Fulani Braids (Medium)', duration: '150 min', price: 40000, category: 'Fulani Braids' },
  { id: 'fulani-small', name: 'Fulani Braids (Small)', duration: '180 min', price: 45000, category: 'Fulani Braids' },
  { id: 'fulani-extra-long', name: 'Fulani Braids (Extra Long)', duration: '210 min', price: 55000, category: 'Fulani Braids' },
  { id: 'bouncing-short', name: 'Bouncing Twist (Short)', duration: '120 min', price: 40000, category: 'Twist Styles' },
  { id: 'bouncing-medium', name: 'Bouncing Twist (Medium)', duration: '150 min', price: 50000, category: 'Twist Styles' },
  { id: 'bouncing-long', name: 'Bouncing Twist (Long)', duration: '180 min', price: 60000, category: 'Twist Styles' },
  { id: 'micro-twist-short', name: 'Micro Twist (Short)', duration: '240 min', price: 75000, category: 'Twist Styles' },
  { id: 'micro-twist-long', name: 'Micro Twist (Long)', duration: '300 min', price: 120000, category: 'Twist Styles' },
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
  { id: 'swedish-massage', name: 'Swedish Massage', duration: '60 min', price: 70000, category: 'Massages' },
  { id: 'deep-tissue', name: 'Deep Tissue Massage', duration: '60 min', price: 80000, category: 'Massages' },
  { id: 'hot-stone', name: 'Hot Stone Massage', duration: '60 min', price: 75000, category: 'Massages' },
  { id: 'couple-massage', name: 'Couple Massage', duration: '60 min', price: 130000, category: 'Massages' },
  { id: 'studio-makeup', name: 'Studio Makeup', duration: '60 min', price: 40000, category: 'Makeup & Brows' },
  { id: 'home-makeup', name: 'Home Service Makeup', duration: '90 min', price: 60000, category: 'Makeup & Brows' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM'
];

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!;
const WHATSAPP_NUMBER = "2348144209739";

declare global {
  interface Window {
    PaystackPop: {
      setup(config: {
        key: string;
        email: string;
        amount: number;
        currency?: string;
        ref?: string;
        metadata?: Record<string, unknown>;
        onSuccess: (transaction: { reference: string }) => void;
        onCancel: () => void;
        onError?: (error: unknown) => void;
      }): { openIframe: () => void };
    };
  }
}

function loadPaystackScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.PaystackPop) return resolve();
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Paystack'));
    document.head.appendChild(script);
  });
}

function generateRef(): string {
  return 'SBL-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

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
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [paymentType, setPaymentType] = useState<'deposit' | 'full'>('deposit');
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [paystackReady, setPaystackReady] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    const cachedServices = localStorage.getItem('selectedServices');
    if (cachedServices) {
      try {
        const parsedServices = JSON.parse(cachedServices);
        if (Array.isArray(parsedServices) && parsedServices.length > 0) {
          setSelectedServices(parsedServices);
          setCurrentStep(2);
          localStorage.removeItem('selectedServices');
        }
      } catch (_e) {}
    }
  }, []);

  useEffect(() => {
    loadPaystackScript()
      .then(() => setPaystackReady(true))
      .catch(() => setPaystackReady(false));
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
    d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
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

  const amountToPay = totalPrice <= 10000 ? totalPrice : paymentType === 'deposit' ? 10000 : totalPrice;

  const addService = (id: string) => {
    if (!selectedServices.includes(id)) {
      setSelectedServices([...selectedServices, id]);
    }
  };
  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s !== id));
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setTimeout(() => {
        const element = document.getElementById(`step-${nextStep}`);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSuccess = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handlePaystackPayment = useCallback(async () => {
    if (!paystackReady || isPaying) return;

    const email = formData.email || `${formData.phone.replace(/[^0-9]/g, '')}@shakara.app`;
    const ref = generateRef();

    setIsPaying(true);
    setSubmissionError('');

    try {
      await loadPaystackScript();
      const handler = window.PaystackPop.setup({
        key: PAYSTACK_PUBLIC_KEY,
        email,
        amount: amountToPay * 100,
        currency: 'NGN',
        ref,
        metadata: {
          custom_fields: [
            { display_name: "Customer Name", variable_name: "customer_name", value: `${formData.firstName} ${formData.lastName}` },
            { display_name: "Phone", variable_name: "phone", value: formData.phone },
            { display_name: "Services", variable_name: "services", value: selectedServices.map(id => services.find(s => s.id === id)?.name).join(', ') },
          ]
        },
        onSuccess: () => {
          setIsPaying(false);
          handleSuccess();
        },
        onCancel: () => {
          setIsPaying(false);
        },
        onError: (_error: unknown) => {
          setIsPaying(false);
          setSubmissionError('Payment could not be completed. Please try again.');
        },
      });
      handler.openIframe();
    } catch {
      setIsPaying(false);
      setSubmissionError('Failed to initialize payment. Please try again.');
    }
  }, [paystackReady, isPaying, formData, amountToPay, selectedServices, handleSuccess]);

  if (submitted) {
    const servicesList = selectedServices.map(id => {
      const s = services.find(x => x.id === id)!;
      return `- ${s.name} (${formatPrice(s.price)})`;
    }).join('\n');
    const whatsappMessage = `Hi Shakara Beauty Lounge!%0A%0AI have made a payment for my booking.%0A%0A*Booking Details:*%0AName: ${formData.firstName} ${formData.lastName}%0APhone: ${formData.phone}%0ADate: ${selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : '-'}%0ATime: ${selectedTime}%0A%0A*Services:*%0A${servicesList}%0A%0A*Payment:*%0AAmount Paid: ${formatPrice(amountToPay)}%0ATotal: ${formatPrice(totalPrice)}%0A${paymentType === 'deposit' && totalPrice > 10000 ? 'Payment Type: Deposit (₦10,000)' : 'Payment Type: Full Payment'}%0A%0APlease confirm my booking. Thank you!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
      <main className={`min-h-screen bg-white ${poppins.variable} font-sans`}>
        <Header />
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Payment Successful! 🎉</h2>
            <p className="text-gray-500 mb-4">Your booking has been received.</p>
            <p className="text-gray-400 text-sm mb-8">Please send a quick confirmation via WhatsApp so we can confirm your slot.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.2.05-.375-.025-.524-.075-.15-.672-1.612-.922-2.206-.24-.583-.487-.51-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Confirm via WhatsApp
              </a>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 rounded-full font-medium border-2 border-gray-200 text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
              >
                Book Another
              </button>
            </div>
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

      <section className="py-12 px-4" id="booking-steps-container">
        <div className="max-w-3xl mx-auto space-y-6">

          {/* Step 1: Services */}
          <div id="step-1" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${currentStep === 1 ? 'border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white' : currentStep > 1 ? 'border-gray-200 bg-white hover:border-gray-300' : 'border-gray-100 bg-gray-50 opacity-50 pointer-events-none'}`}>
            <div
              className={`p-6 flex items-center justify-between ${currentStep > 1 ? 'cursor-pointer' : ''}`}
              onClick={() => currentStep > 1 && setCurrentStep(1)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {currentStep > 1 ? '✓' : '1'}
                </div>
                <div>
                  <h2 className={`text-xl font-semibold ${currentStep === 1 ? 'text-gray-900' : 'text-gray-700'}`}>Choose your services</h2>
                  {currentStep !== 1 && selectedServices.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">{selectedServices.length} service(s) selected - {formatPrice(totalPrice)}</p>
                  )}
                </div>
              </div>
              {currentStep > 1 && <span className="text-sm text-black font-medium">Edit</span>}
            </div>

            <div className={`transition-all duration-300 ${currentStep === 1 ? 'block' : 'hidden'}`}>
              <div className="p-6 pt-0 border-t border-gray-100">
                <p className="text-gray-500 mb-6 mt-4">Select one or more services for your appointment</p>

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

                <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={handleNextStep}
                    disabled={selectedServices.length === 0}
                    className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Date & Time */}
          <div id="step-2" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${currentStep === 2 ? 'border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white' : currentStep > 2 ? 'border-gray-200 bg-white hover:border-gray-300' : 'border-gray-100 bg-gray-50 opacity-50 pointer-events-none'}`}>
            <div
              className={`p-6 flex items-center justify-between ${currentStep > 2 ? 'cursor-pointer' : ''}`}
              onClick={() => currentStep > 2 && setCurrentStep(2)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {currentStep > 2 ? '✓' : '2'}
                </div>
                <div>
                  <h2 className={`text-xl font-semibold ${currentStep === 2 ? 'text-gray-900' : 'text-gray-700'}`}>Select date & time</h2>
                  {currentStep !== 2 && selectedDate && selectedTime && (
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {selectedTime}
                    </p>
                  )}
                </div>
              </div>
              {currentStep > 2 && <span className="text-sm text-black font-medium">Edit</span>}
            </div>

            <div className={`transition-all duration-300 ${currentStep === 2 ? 'block' : 'hidden'}`}>
              <div className="p-6 pt-0 border-t border-gray-100">
                <p className="text-gray-500 mb-6 mt-4">Choose your preferred appointment slot</p>

                <div className="grid lg:grid-cols-2 gap-8">
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

                  <div>
                    <h3 className="font-medium text-gray-900 mb-4">Available times</h3>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-2 sm:px-4 rounded-xl text-sm font-medium transition-all border ${
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
                      <div className="h-full flex items-center justify-center text-gray-400 border border-gray-200 rounded-xl border-dashed min-h-[200px]">
                        <p>Select a date first</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium cursor-pointer transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!(selectedDate && selectedTime)}
                    className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Details */}
          <div id="step-3" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${currentStep === 3 ? 'border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white' : currentStep > 3 ? 'border-gray-200 bg-white hover:border-gray-300' : 'border-gray-100 bg-gray-50 opacity-50 pointer-events-none'}`}>
            <div
              className={`p-6 flex items-center justify-between ${currentStep > 3 ? 'cursor-pointer' : ''}`}
              onClick={() => currentStep > 3 && setCurrentStep(3)}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${currentStep >= 3 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {currentStep > 3 ? '✓' : '3'}
                </div>
                <div>
                  <h2 className={`text-xl font-semibold ${currentStep === 3 ? 'text-gray-900' : 'text-gray-700'}`}>Your details</h2>
                  {currentStep !== 3 && formData.firstName && (
                    <p className="text-sm text-gray-500 mt-1">{formData.firstName} {formData.lastName}</p>
                  )}
                </div>
              </div>
              {currentStep > 3 && <span className="text-sm text-black font-medium">Edit</span>}
            </div>

            <div className={`transition-all duration-300 ${currentStep === 3 ? 'block' : 'hidden'}`}>
              <div className="p-6 pt-0 border-t border-gray-100">
                <p className="text-gray-500 mb-6 mt-4">We'll use this to confirm your booking</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email (required for payment)</label>
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
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium cursor-pointer transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={!(formData.firstName && formData.lastName && formData.phone && formData.email)}
                      className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Confirm & Pay */}
          <div id="step-4" className={`border rounded-2xl overflow-hidden transition-all duration-300 ${currentStep === 4 ? 'border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white' : 'border-gray-100 bg-gray-50 opacity-50 pointer-events-none'}`}>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${currentStep === 4 ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>4</div>
                <h2 className={`text-xl font-semibold ${currentStep === 4 ? 'text-gray-900' : 'text-gray-700'}`}>Confirm & Pay</h2>
              </div>
            </div>

            <div className={`transition-all duration-300 ${currentStep === 4 ? 'block' : 'hidden'}`}>
              <div className="p-6 pt-0 border-t border-gray-100">
                <p className="text-gray-500 mb-6 mt-4">Review your appointment and complete payment securely</p>

                <div className="max-w-lg mx-auto space-y-6">
                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
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

                  {/* Payment Rules */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <p className="text-sm text-amber-800">
                      <span className="font-semibold">Payment Policy:</span>
                      {totalPrice <= 10000 ? (
                        <> Services ₦10,000 and below require <span className="font-semibold">100% payment</span>.</>
                      ) : (
                        <> Services above ₦10,000: Pay <span className="font-semibold">₦10,000 deposit</span> to lock your slot, or pay the full amount.</>
                      )}
                    </p>
                  </div>

                  {/* Payment Type Selection */}
                  {totalPrice > 10000 && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Choose payment option:</p>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          className={`p-4 rounded-xl border-2 text-left transition-all ${paymentType === 'deposit' ? 'border-black bg-black/5' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => setPaymentType('deposit')}
                        >
                          <p className="font-semibold text-gray-900">₦10,000 Deposit</p>
                          <p className="text-xs text-gray-500 mt-1">Lock your slot</p>
                        </button>
                        <button
                          type="button"
                          className={`p-4 rounded-xl border-2 text-left transition-all ${paymentType === 'full' ? 'border-black bg-black/5' : 'border-gray-200 hover:border-gray-300'}`}
                          onClick={() => setPaymentType('full')}
                        >
                          <p className="font-semibold text-gray-900">Full Payment</p>
                          <p className="text-xs text-gray-500 mt-1">{formatPrice(totalPrice)}</p>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Amount to Pay */}
                  <div className="bg-black text-white rounded-2xl p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-white/70">Amount to Pay</p>
                        <p className="text-xs text-white/50 mt-1">
                          {paymentType === 'deposit' ? 'Deposit to lock slot' : 'Full payment required'}
                        </p>
                      </div>
                      <span className="text-3xl font-bold">{formatPrice(amountToPay)}</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {submissionError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-sm text-red-700">{submissionError}</p>
                    </div>
                  )}

                  {/* Pay with Paystack */}
                  {!paystackReady && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <p className="text-sm text-blue-700">Loading payment gateway...</p>
                    </div>
                  )}

                  <button
                    onClick={handlePaystackPayment}
                    disabled={!paystackReady || isPaying}
                    className="w-full bg-[#0ba360] hover:bg-[#089254] text-white py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isPaying ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Pay {formatPrice(amountToPay)} with Paystack
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Secure payment powered by Paystack. Your payment information is encrypted.
                  </p>
                </div>

                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium cursor-pointer transition-colors"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />

      {selectedServices.length > 0 && currentStep === 1 && (
        <div className={`fixed z-50 transition-all duration-300 bg-white border border-gray-100 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] sm:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${
          'bottom-0 left-0 right-0 rounded-t-3xl sm:bottom-6 sm:left-6 sm:right-auto sm:w-80 sm:rounded-3xl'
        }`}>
          <div
            className="p-6 flex items-center justify-between cursor-pointer"
            onClick={() => setIsMobileExpanded(!isMobileExpanded)}
          >
            <div>
              <p className="text-sm font-medium text-gray-900">Selected Services ({selectedServices.length})</p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5">{formatPrice(totalPrice)}</p>
            </div>
            <button
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileExpanded(!isMobileExpanded);
              }}
            >
              {isMobileExpanded ? (
                <><span>Compress</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"></polyline></svg></>
              ) : (
                <><span>Expand</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg></>
              )}
            </button>
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isMobileExpanded ? 'max-h-[60vh] overflow-y-auto' : 'max-h-0'}`}>
            <div className="p-6 pt-0 border-t border-gray-100 flex flex-col gap-3 mt-2">
              {selectedServices.map(id => {
                const service = services.find(s => s.id === id)!;
                return (
                  <div key={id} className="flex justify-between items-center bg-gray-50 p-3 rounded-xl border border-gray-100/50">
                    <div className="pr-2">
                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{formatPrice(service.price)}</p>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); removeService(id); }} className="text-gray-400 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg flex-shrink-0 cursor-pointer transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
