import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Calendar, ExternalLink } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#1C1815] text-[#FAF7F2] pt-16 pb-12 border-t border-[#332B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#332B26]">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5">
            <a href="#inicio" className="inline-block mb-4" aria-label="Charme Salão de Beleza - Início">
              <img
                src="/assets/aistudio/images-removebg-preview__1__86d79fa1.png"
                alt="Charme Salão de Beleza"
                className="h-20 sm:h-24 w-auto object-contain brightness-0 invert opacity-95 transition-opacity hover:opacity-100"
              />
            </a>
            <p className="text-xs sm:text-sm text-[#A89D96] leading-relaxed max-w-md mb-6 font-light">
              Espaço dedicado à beleza, autoestima e cuidado pessoal no Jardim Monumento, Campo Grande – MS. Reconhecido pelo atendimento atencioso e pela excelência em cada serviço.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Charme%20Sal%C3%A3o%20de%20Beleza.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold flex items-center gap-2 hover:bg-[#20ba59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp: (67) 99261-3387
              </a>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium flex items-center gap-1.5 hover:bg-white/20 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D05E33]" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#A89D96]">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Localização & Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Atendimento & Endereço
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#A89D96]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D05E33] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D05E33] shrink-0" />
                <span>{SALON_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D05E33] shrink-0" />
                <span>{SALON_INFO.phone}</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-5 bg-[#D05E33] hover:bg-[#B84B22] text-white text-xs sm:text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wide"
              >
                <Calendar className="w-4 h-4" />
                Agendar Horário no Salão
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6E67] gap-4">
          <p>© {new Date().getFullYear()} {SALON_INFO.name}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Campo Grande – MS</span>
            <span>·</span>
            <span>5,0 ★ no Google (95 avaliações)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
