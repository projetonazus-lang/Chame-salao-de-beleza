import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Service } from './types';
import { SALON_INFO } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<Service | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setPreSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: Service) => {
    setSelectedServiceForDetail(service);
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1815] flex flex-col font-sans selection:bg-[#D05E33] selection:text-white">
      {/* 1. Cabeçalho */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Flow following the exact specification */}
      <main className="flex-1">
        {/* 2. Banner Principal (Hero) */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToServices={handleScrollToServices}
        />

        {/* 3. Indicadores de Confiança */}
        <BenefitsBar />

        {/* 4. Seção Sobre Nós */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Seção de Serviços */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenBooking={handleOpenBooking}
        />

        {/* 6. Galeria de Beleza */}
        <GallerySection />

        {/* 7. Depoimentos (Classificação 5,0 estrelas e 95 avaliações) */}
        <TestimonialsSection />

        {/* 8. Localização e Contato */}
        <LocationSection />
      </main>

      {/* 9. Rodapé */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Botão Flutuante do WhatsApp (5567992613387) */}
      <WhatsAppFloat />

      {/* Modals & Dialogs */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preSelectedServiceId={preSelectedServiceId}
      />

      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookService={(serviceId) => handleOpenBooking(serviceId)}
      />
    </div>
  );
}
