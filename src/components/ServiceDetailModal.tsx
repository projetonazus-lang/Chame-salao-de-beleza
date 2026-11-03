import React from 'react';
import { X, MessageCircle, Sparkles, Check, Phone } from 'lucide-react';
import { Service } from '../types';
import { SALON_INFO } from '../data/salonData';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Olá! Gostaria de consultar informações sobre *${service.name}* no Charme Salão de Beleza.`;
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-[32px] border border-[#EBE4DD] shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo of Service */}
        <div className="relative aspect-[16/9] w-full bg-[#FAF0EB]">
          <img
            src={service.image}
            alt={service.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider text-[#D05E33] font-bold bg-white/90 px-3 py-1 rounded-full mb-2 inline-block">
              {service.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Details & Copy */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="p-4 bg-white rounded-2xl border border-[#EBE4DD] flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D05E33]" />
              <span className="font-semibold text-[#1C1815]">Charme Salão de Beleza</span>
            </div>
            <span className="text-[#7A6E67]">Campo Grande – MS</span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2">
              Sobre o Procedimento
            </h4>
            <p className="text-sm text-[#544943] leading-relaxed font-light">
              {service.longDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-3">
              Destaques do Atendimento
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#382E28]">
                  <div className="w-5 h-5 rounded-full bg-[#FAF0EB] text-[#D05E33] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-[#7A6E67] italic">
            * Consulte valores e disponibilidade de horários diretamente com nossa equipe pelo WhatsApp.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#EBE4DD] flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Consultar & Agendar pelo WhatsApp
            </button>

            <button
              onClick={onClose}
              className="py-3.5 px-6 bg-white hover:bg-[#F3ECE6] text-[#1C1815] border border-[#EBE4DD] font-medium rounded-full text-sm transition-all cursor-pointer"
            >
              Fechar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
