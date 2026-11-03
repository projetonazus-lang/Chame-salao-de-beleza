import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, MessageCircle, Check } from 'lucide-react';
import { SERVICES, SALON_INFO } from '../data/salonData';
import { Service } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Categorias' },
    { id: 'cabelos', label: 'Cabelos & Cortes' },
    { id: 'coloracao', label: 'Coloração & Mechas' },
    { id: 'escova', label: 'Escova & Penteados' },
    { id: 'hidratacao', label: 'Tratamentos Capilares' },
    { id: 'unhas', label: 'Manicure & Pedicure' },
    { id: 'estetica', label: 'Estética & Procedimentos' },
  ];

  const filteredServices = selectedCategory === 'todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleWhatsAppInquiry = (serviceName: string) => {
    const text = `Olá! Gostaria de consultar informações e disponibilidade para o serviço de *${serviceName}* no Charme Salão de Beleza.`;
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching the editorial reference styling */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D05E33] block mb-2">
              Menu de Cuidados & Procedimentos
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1815] tracking-tight">
              Serviços de
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#D05E33] font-normal ml-3">
                Beleza
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E67] mt-2 font-light max-w-xl">
              Consulte a disponibilidade e detalhes de cada procedimento diretamente com nossa equipe atenciosa pelo WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="text-xs sm:text-sm font-semibold text-[#D05E33] hover:text-[#B84B22] flex items-center gap-1.5 transition-colors group cursor-pointer"
            >
              <span>Consultar Agenda no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Carousel navigation arrows */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full border border-[#EBE4DD] bg-white text-[#1C1815] hover:text-[#D05E33] hover:border-[#D05E33] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Rolar para esquerda"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full border border-[#EBE4DD] bg-white text-[#1C1815] hover:text-[#D05E33] hover:border-[#D05E33] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                aria-label="Rolar para direita"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1815] text-white shadow-sm'
                  : 'bg-white text-[#544943] border border-[#EBE4DD] hover:border-[#D05E33] hover:text-[#D05E33]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Slider / Grid (faithful to "Shop by Category" in reference) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex-none w-[280px] sm:w-[320px] bg-white rounded-[26px] p-3.5 border border-[#EBE4DD] shadow-sm hover:shadow-xl transition-all duration-300 snap-start flex flex-col"
            >
              {/* Image Container with rounded inner corners */}
              <div
                onClick={() => onSelectService(service)}
                className="relative aspect-[4/5] rounded-[20px] overflow-hidden bg-[#FAF0EB] mb-4 cursor-pointer"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
                  }}
                />

                <div className="absolute top-3 left-3 bg-[#1C1815]/80 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3 text-[#D05E33]" />
                  {service.categoryLabel}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="px-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectService(service)}
                    className="text-base font-semibold text-[#1C1815] group-hover:text-[#D05E33] transition-colors leading-snug cursor-pointer line-clamp-1"
                  >
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#7A6E67] mt-1.5 line-clamp-2 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Benefits mini list */}
                <div className="mt-3 pt-3 border-t border-[#F0EBE5] space-y-1">
                  {service.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#544943]">
                      <Check className="w-3 h-3 text-[#25D366] shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Direct WhatsApp Call to Action on each card */}
                <div className="mt-4 pt-3 border-t border-[#F0EBE5] flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleWhatsAppInquiry(service.name)}
                    className="flex-1 py-2.5 px-3 bg-[#FAF0EB] hover:bg-[#D05E33] text-[#D05E33] hover:text-white rounded-full text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consultar no WhatsApp
                  </button>

                  {/* Circular Button matching reference */}
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-9 h-9 rounded-full border border-[#EBE4DD] bg-[#FAF7F2] hover:bg-[#1C1815] text-[#1C1815] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer shrink-0"
                    title="Ver detalhes"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
