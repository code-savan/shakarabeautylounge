"use client";

import { useState, useEffect, useCallback } from 'react';
import { Poppins } from 'next/font/google';
import { useRouter } from 'next/navigation';
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

function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function parseKey(key: string): Date {
  return new Date(key + 'T12:00:00');
}

const stepLabels = ['Services', 'Date & time', 'Your details', 'Payment'];

export default function BookingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceSearch, setServiceSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const categories = ['All', ...Array.from(new Set(services.map(s => s.category)))];

  const groupedServices = categories
    .filter(c => c !== 'All')
    .map(cat => ({
      category: cat,
      items: services.filter(s =>
        s.category === cat &&
        (selectedCategory === 'All' || selectedCategory === cat) &&
        s.name.toLowerCase().includes(serviceSearch.toLowerCase())
      )
    }))
    .filter(g => g.items.length > 0);

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = services.find(s => s.id === id);
    return sum + (service?.price || 0);
  }, 0);

  const totalDuration = selectedServices.reduce((sum, id) => {
    const service = services.find(s => s.id === id);
    const mins = service ? parseInt(service.duration) || 0 : 0;
    return sum + mins;
  }, 0);

  const amountToPay = totalPrice <= 10000 ? totalPrice : paymentType === 'deposit' ? 10000 : totalPrice;
  const formatPrice = (price: number) => '₦' + price.toLocaleString();

  const next21Days: Date[] = Array.from({ length: 21 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const toggleService = (id: string) => {
    setSelectedServices(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  const removeService = (id: string) => {
    setSelectedServices(selectedServices.filter(s => s !== id));
  };

  const goToStep = (step: number) => {
    if (step === 1) setCurrentStep(1);
    if (step === 2 && selectedServices.length > 0) setCurrentStep(2);
    if (step === 3 && selectedServices.length > 0 && selectedDate && selectedTime) setCurrentStep(3);
    if (step === 4 && selectedServices.length > 0 && selectedDate && selectedTime && formData.firstName && formData.lastName && formData.phone && formData.email) setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContinue = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.back();
    }
  };

  const canContinue =
    (currentStep === 1 && selectedServices.length > 0) ||
    (currentStep === 2 && !!(selectedDate && selectedTime)) ||
    (currentStep === 3 && !!(formData.firstName && formData.lastName && formData.phone && formData.email));

  const continueLabel =
    currentStep === 1 ? `Continue (${selectedServices.length} selected)` :
    currentStep === 2 ? 'Continue' :
    currentStep === 3 ? 'Review booking' : 'Pay now';

  const handleSuccess = useCallback(() => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const whatsappMessage = `Hi Shakara Beauty Lounge!%0A%0AI have made a payment for my booking.%0A%0A*Booking Details:*%0AName: ${formData.firstName} ${formData.lastName}%0APhone: ${formData.phone}%0ADate: ${selectedDate ? parseKey(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : '-'}%0ATime: ${selectedTime}%0A%0A*Services:*%0A${servicesList}%0A%0A*Payment:*%0AAmount Paid: ${formatPrice(amountToPay)}%0ATotal: ${formatPrice(totalPrice)}%0A${paymentType === 'deposit' && totalPrice > 10000 ? 'Payment Type: Deposit (₦10,000)' : 'Payment Type: Full Payment'}%0A%0APlease confirm my booking. Thank you!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    return (
      <main className={`min-h-screen bg-[#f5f5f5] ${poppins.variable} font-sans`}>
        <section className="pt-6 pb-16 px-4">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Booking confirmed</h2>
              <p className="text-gray-500 mb-1">Thank you, {formData.firstName}. Your payment was received.</p>
              <p className="text-gray-400 text-sm mb-6">
                {selectedDate ? parseKey(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : ''}{selectedTime ? ` at ${selectedTime}` : ''} · {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} · {formatPrice(totalPrice)}
              </p>
              <p className="text-gray-400 text-sm mb-8">Please send a quick confirmation via WhatsApp so we can lock in your slot.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Confirm via WhatsApp
                </a>
                <button
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 rounded-full font-medium border-2 border-gray-200 text-gray-700 hover:border-gray-400 transition-colors cursor-pointer"
                >
                  Book another
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        <ChatBot positionClass="bottom-[96px] sm:bottom-5" />
      </main>
    );
  }

  return (
    <main className={`min-h-screen bg-[#f5f5f5] ${poppins.variable} font-sans`}>
      <div className="max-w-6xl mx-auto px-4 pt-5">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-black hover:bg-gray-100 transition-colors cursor-pointer flex-shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <p className="font-semibold text-gray-900">Book an appointment</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6 flex gap-4">
          <img src="/logo-preview.jpg" alt="Shakara Beauty Lounge" className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover flex-shrink-0" />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900 truncate">Shakara Beauty Lounge</h1>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1a73e8" className="flex-shrink-0"><path d="M12 2l2.4 2.4 3.4-.5.9 3.3 3 1.7-1.4 3.1 1.4 3.1-3 1.7-.9 3.3-3.4-.5L12 22l-2.4-2.4-3.4.5-.9-3.3-3-1.7L3.7 12 2.3 8.9l3-1.7.9-3.3 3.4.5L12 2z"/><path d="M10.5 13.5l-2-2-1 1 3 3 5-5-1-1-4 4z" fill="white"/></svg>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-semibold text-gray-900 text-sm">5.0</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBC04"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">(32)</span>
            </div>
            <p className="text-sm text-gray-500 mt-1.5 truncate">Kingfem GA247, Wuse II, Abuja</p>
            <p className="text-sm mt-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              <span className="text-gray-600">Open</span>
              <span className="text-gray-400">· Mon - Sat: 9AM - 7PM</span>
            </p>
          </div>
        </div>

        <nav aria-label="Booking steps" className="mt-4 px-1 flex items-center gap-1.5 overflow-x-auto text-[13px] whitespace-nowrap">
          {stepLabels.map((label, i) => {
            const n = i + 1;
            const active = currentStep === n;
            const done = currentStep > n;
            const reachable =
              n === 1 || (n === 2 && selectedServices.length > 0) ||
              (n === 3 && selectedServices.length > 0 && selectedDate && selectedTime) ||
              (n === 4 && selectedServices.length > 0 && selectedDate && selectedTime);
            return (
              <span key={label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-gray-300">/</span>}
                <button
                  onClick={() => reachable && goToStep(n)}
                  disabled={!reachable}
                  aria-current={active ? "step" : undefined}
                  className={`transition-colors ${active ? 'text-gray-900 font-semibold' : done ? 'text-gray-900 font-medium' : 'text-gray-400'} ${reachable ? 'cursor-pointer hover:text-gray-900 hover:underline underline-offset-4' : 'cursor-default'}`}
                >
                  {label}
                </button>
              </span>
            );
          })}
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-4 pb-32 lg:pb-16 grid lg:grid-cols-[1fr_360px] gap-4 items-start">
        <div className="min-w-0">
          {currentStep === 1 && (
            <div>
              <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5">
                <div className="relative">
                  <input
                    type="text"
                    value={serviceSearch}
                    onChange={(e) => setServiceSearch(e.target.value)}
                    placeholder="Search services..."
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-1">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {groupedServices.length === 0 && (
                <div className="bg-white rounded-2xl shadow-sm p-10 text-center text-gray-500 mt-4">
                  No services found. Try a different search.
                </div>
              )}

              {groupedServices.map(group => (
                <div key={group.category} id={`cat-${group.category}`} className="bg-white rounded-2xl shadow-sm mt-4 overflow-hidden">
                  <h3 className="px-5 pt-5 pb-1 font-semibold text-gray-900">{group.category}</h3>
                  <p className="px-5 text-xs text-gray-400 pb-2">{group.items.length} service{group.items.length > 1 ? 's' : ''}</p>
                  <div className="divide-y divide-gray-100">
                    {group.items.map(service => {
                      const added = selectedServices.includes(service.id);
                      return (
                        <div key={service.id} className="flex items-center gap-3 px-5 py-4 hover:bg-gray-50 transition-colors">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 text-[15px]">{service.name}</p>
                            <p className="text-[13px] text-gray-500 mt-0.5">{service.duration} · {formatPrice(service.price)}</p>
                          </div>
                          <button
                            onClick={() => toggleService(service.id)}
                            aria-label={added ? `Remove ${service.name}` : `Add ${service.name}`}
                            className={`h-9 px-4 rounded-full text-[13px] font-semibold transition-all cursor-pointer flex-shrink-0 ${added ? 'bg-green-50 text-green-700 border border-green-500' : 'bg-black text-white hover:bg-gray-800'}`}
                          >
                            {added ? '✓ Added' : '+ Add'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentStep === 2 && (
            <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
              <h3 className="font-semibold text-gray-900 text-lg">Select date & time</h3>
              <p className="text-sm text-gray-500 mt-1 mb-5">Choose your preferred slot · {totalDuration > 0 ? `about ${totalDuration} min total` : ''}</p>

              <p className="text-sm font-medium text-gray-700 mb-3">Date</p>
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
                {next21Days.map(d => {
                  const key = dateKey(d);
                  const selected = selectedDate === key;
                  const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedDate(key)}
                      className={`flex-shrink-0 w-[62px] py-3 rounded-xl border text-center transition-all cursor-pointer ${selected ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}
                    >
                      <span className={`block text-[11px] font-medium ${selected ? 'text-white/70' : 'text-gray-400'}`}>{dayName}</span>
                      <span className="block text-lg font-semibold leading-tight">{d.getDate()}</span>
                      <span className={`block text-[11px] ${selected ? 'text-white/70' : 'text-gray-400'}`}>{d.toLocaleDateString('en-US', { month: 'short' })}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-sm font-medium text-gray-700 mt-6 mb-3">Available times</p>
              {selectedDate ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 rounded-xl text-[13px] font-medium transition-all border cursor-pointer ${selectedTime === time ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 border border-dashed border-gray-200 rounded-xl min-h-[120px] flex items-center justify-center text-sm">
                  Select a date first
                </div>
              )}

              <button onClick={() => setCurrentStep(1)} className="mt-6 text-sm text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                ← Back to services
              </button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
              <h3 className="font-semibold text-gray-900 text-lg">Your details</h3>
              <p className="text-sm text-gray-500 mt-1 mb-5">We will use this to confirm your booking</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">First name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm"
                  placeholder="+234 000 000 0000"
                />
              </div>
              <div className="mb-3">
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all placeholder:text-gray-400 text-gray-900 text-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Notes (optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-black outline-none transition-all resize-none placeholder:text-gray-400 text-sm"
                  placeholder="Anything we should know?"
                />
              </div>
              <button onClick={() => setCurrentStep(2)} className="mt-6 text-sm text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                ← Back to date & time
              </button>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm p-5 md:p-6">
                <h3 className="font-semibold text-gray-900 text-lg mb-4">Review & pay</h3>
                <div className="space-y-2.5">
                  {selectedServices.map(id => {
                    const s = services.find(x => x.id === id)!;
                    return (
                      <div key={id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-900">{s.name} <span className="text-gray-400">· {s.duration}</span></span>
                        <span className="text-gray-700 font-medium">{formatPrice(s.price)}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date</span>
                    <span className="text-gray-900 font-medium">{selectedDate ? parseKey(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : '-'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time</span>
                    <span className="text-gray-900 font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Guest</span>
                    <span className="text-gray-900 font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 mt-4 pt-4 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                <p className="text-[13px] text-amber-800">
                  <span className="font-semibold">Payment policy: </span>
                  {totalPrice <= 10000 ? (
                    <>Bookings of ₦10,000 and below require full payment.</>
                  ) : (
                    <>Pay a ₦10,000 deposit to lock your slot, or pay in full.</>
                  )}
                </p>
              </div>

              {totalPrice > 10000 && (
                <div className="bg-white rounded-2xl shadow-sm p-5">
                  <p className="text-sm font-medium text-gray-700 mb-3">Payment option</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${paymentType === 'deposit' ? 'border-black bg-black/[0.03]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setPaymentType('deposit')}
                    >
                      <p className="font-semibold text-gray-900 text-sm">₦10,000 deposit</p>
                      <p className="text-xs text-gray-500 mt-1">Lock your slot</p>
                    </button>
                    <button
                      type="button"
                      className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${paymentType === 'full' ? 'border-black bg-black/[0.03]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setPaymentType('full')}
                    >
                      <p className="font-semibold text-gray-900 text-sm">Full payment</p>
                      <p className="text-xs text-gray-500 mt-1">{formatPrice(totalPrice)}</p>
                    </button>
                  </div>
                </div>
              )}

              {submissionError && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                  <p className="text-sm text-red-700">{submissionError}</p>
                </div>
              )}

              {!paystackReady && (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <p className="text-sm text-blue-700">Loading secure payment...</p>
                </div>
              )}

              <button
                onClick={handlePaystackPayment}
                disabled={!paystackReady || isPaying}
                className="w-full bg-[#0ba360] hover:bg-[#089254] text-white py-4 rounded-full font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isPaying ? 'Processing...' : `Pay ${formatPrice(amountToPay)} securely`}
              </button>
              <p className="text-xs text-gray-400 text-center">
                Secure payment powered by Paystack · Free cancellation up to 24h before
              </p>
              <button onClick={() => setCurrentStep(3)} className="text-sm text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition-colors">
                ← Back to details
              </button>
            </div>
          )}
        </div>

        <aside className="hidden lg:block sticky top-24 bg-white rounded-2xl shadow-sm p-5">
          <h3 className="font-semibold text-gray-900 mb-1">Your booking</h3>
          <p className="text-xs text-gray-400 mb-4">Shakara Beauty Lounge · Wuse II</p>
          {selectedServices.length === 0 ? (
            <p className="text-sm text-gray-400 py-4 text-center border border-dashed border-gray-200 rounded-xl">
              No services selected yet
            </p>
          ) : (
            <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1">
              {selectedServices.map(id => {
                const s = services.find(x => x.id === id)!;
                return (
                  <div key={id} className="flex justify-between items-start gap-2 bg-gray-50 p-3 rounded-xl">
                    <div className="min-w-0">
                      <p className="text-[13px] font-medium text-gray-900 truncate">{s.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.duration} · {formatPrice(s.price)}</p>
                    </div>
                    <button onClick={() => removeService(id)} aria-label={`Remove ${s.name}`} className="text-gray-400 hover:text-red-500 p-1 flex-shrink-0 cursor-pointer transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
          <div className="border-t border-gray-100 mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Date</span>
              <span className="text-gray-900 font-medium">{selectedDate ? parseKey(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '—'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Time</span>
              <span className="text-gray-900 font-medium">{selectedTime || '—'}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-semibold text-gray-900">{formatPrice(totalPrice)}</span>
            </div>
            {currentStep === 4 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Due now</span>
                <span className="font-semibold text-green-700">{formatPrice(amountToPay)}</span>
              </div>
            )}
          </div>
          {currentStep < 4 ? (
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className="w-full mt-4 bg-black text-white py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              {continueLabel}
            </button>
          ) : (
            <button
              onClick={handlePaystackPayment}
              disabled={!paystackReady || isPaying}
              className="w-full mt-4 bg-[#0ba360] hover:bg-[#089254] text-white py-3.5 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              {isPaying ? 'Processing...' : `Pay ${formatPrice(amountToPay)}`}
            </button>
          )}
          <p className="text-[11px] text-gray-400 text-center mt-3">Free cancellation up to 24h before your visit</p>
        </aside>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 truncate">
              {selectedServices.length === 0 ? 'No services selected' : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
              {selectedDate && selectedTime ? ` · ${parseKey(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} at ${selectedTime}` : ''}
            </p>
            <p className="font-semibold text-gray-900">{formatPrice(currentStep === 4 ? amountToPay : totalPrice)}</p>
          </div>
          {currentStep < 4 ? (
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handlePaystackPayment}
              disabled={!paystackReady || isPaying}
              className="bg-[#0ba360] text-white px-6 py-3.5 rounded-full font-medium text-sm hover:bg-[#089254] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex-shrink-0"
            >
              {isPaying ? 'Processing...' : `Pay ${formatPrice(amountToPay)}`}
            </button>
          )}
        </div>
      </div>

      <Footer />
      <ChatBot positionClass="bottom-[96px] sm:bottom-5" />
    </main>
  );
}
