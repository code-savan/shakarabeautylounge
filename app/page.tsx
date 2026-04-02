import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import LuxuryUniquenessSection from "./components/LuxuryUniquenessSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <div className="bg-white">
        <AboutSection />
        <ServicesSection />
        <LuxuryUniquenessSection />
        <ClientTestimonialsSection />
      </div>

      <Footer />
      <ChatBot />
    </div>
  );
}
