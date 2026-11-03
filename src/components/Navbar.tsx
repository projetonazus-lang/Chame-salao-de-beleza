import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top subtle announcement bar */}
      <div className="bg-[#1C1815] text-[#EEDFD7] text-xs py-2 px-4 text-center font-normal tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-4 text-[13px]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#D05E33]" />
              {SALON_INFO.hours}
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D05E33]" />
              Jardim Monumento, Campo Grande – MS
            </span>
          </div>
          <div className="mx-auto md:mx-0 flex items-center gap-2">
            <span>✨ Sua beleza merece esse momento</span>
            <span className="text-[#D05E33] font-medium hidden sm:inline">· 5,0 ★ no Google (95 avaliações)</span>
          </div>
          <a
            href={`https://wa.me/${SALON_INFO.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Charme%20Sal%C3%A3o%20de%20Beleza.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 text-xs text-[#EEDFD7] hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D05E33]" />
            {SALON_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation - Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EBE4DD] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 sm:h-32 flex items-center justify-between gap-8">
          
          {/* Zone 1: Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-2 shrink-0 py-0.5 overflow-visible"
            aria-label="Charme Salão de Beleza - Início"
          >
            <img
              src="/assets/aistudio/images-removebg-preview__1__86d79fa1.png"
              alt="Charme Salão de Beleza"
              className="h-28 sm:h-36 md:h-40 w-auto object-contain transition-transform hover:scale-105 drop-shadow-xs"
            />
          </a>

          {/* Zone 2: Menu requerido: Início, Sobre Nós, Serviços, Galeria e Contato */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5A504B]">
            <a
              href="#inicio"
              className="text-[#1C1815] hover:text-[#D05E33] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-[#D05E33] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Sobre Nós
            </a>
            <a
              href="#servicos"
              className="hover:text-[#D05E33] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="hover:text-[#D05E33] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Galeria
            </a>
            <a
              href="#contato"
              className="hover:text-[#D05E33] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contato
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="hidden sm:inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-wide text-white bg-[#D05E33] hover:bg-[#B84B22] rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap shrink-0 uppercase"
            >
              <Calendar className="w-4 h-4 text-white" />
              AGENDAR HORÁRIO
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#1C1815] hover:text-[#D05E33] hover:bg-black/5 rounded-full transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#EBE4DD] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3 text-base font-medium text-[#4A403A]">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#D05E33] font-semibold"
              >
                Início
              </a>
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D05E33]"
              >
                Sobre Nós
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D05E33]"
              >
                Serviços
              </a>
              <a
                href="#galeria"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D05E33]"
              >
                Galeria
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#D05E33]"
              >
                Contato
              </a>
            </nav>

            <div className="pt-4 border-t border-[#EBE4DD] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 bg-[#D05E33] hover:bg-[#B84B22] text-white font-semibold rounded-full text-center flex items-center justify-center gap-2 shadow-sm uppercase tracking-wide text-sm"
              >
                <Calendar className="w-4 h-4" />
                AGENDAR HORÁRIO
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Charme%20Sal%C3%A3o%20de%20Beleza.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-white border border-[#EBE4DD] text-[#1C1815] font-medium rounded-full text-center flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                WhatsApp: {SALON_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
