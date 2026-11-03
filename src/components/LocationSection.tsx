import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 lg:py-24 bg-[#F5EEE8]/50 relative border-t border-[#EBE4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D05E33] block mb-2">
            Visite Nosso Espaço
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1815] tracking-tight">
            Localização &
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#D05E33] font-normal ml-3">
              Contato
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55] mt-3 font-light leading-relaxed">
            Estamos prontas para te receber com todo o carinho e conforto no Jardim Monumento, Campo Grande – MS.
          </p>
        </div>

        {/* 2-Column Location & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-white rounded-[32px] border border-[#EBE4DD] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0EB] text-[#D05E33] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6E67]">
                    Endereço Completo
                  </h4>
                  <p className="text-base font-semibold text-[#1C1815] mt-1 leading-snug">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#7A6E67] mt-1">
                    Jardim Monumento · Campo Grande – MS
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0EB] text-[#D05E33] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6E67]">
                    Telefone & WhatsApp
                  </h4>
                  <p className="text-base font-semibold text-[#1C1815] mt-1">
                    {SALON_INFO.phone}
                  </p>
                  <p className="text-xs text-[#7A6E67] mt-1">
                    Atendimento rápido e agendamentos diretos
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0EB] text-[#D05E33] flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6E67]">
                    Horário de Atendimento
                  </h4>
                  <p className="text-base font-semibold text-[#1C1815] mt-1 leading-snug">
                    {SALON_INFO.hours}
                  </p>
                  <p className="text-xs text-[#7A6E67] mt-1">
                    Agende previamente para garantir o seu horário
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-[#F0EBE5] space-y-3">
              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Charme%20Sal%C3%A3o%20de%20Beleza.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full text-sm font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                Iniciar Conversa pelo WhatsApp
              </a>

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-white hover:bg-[#FAF7F2] text-[#1C1815] border border-[#EBE4DD] rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-[#D05E33]" />
                Abrir Localização no Google Maps
              </a>
            </div>

          </div>

          {/* Interactive Map Iframe Container */}
          <div className="lg:col-span-7 bg-white rounded-[32px] border border-[#EBE4DD] overflow-hidden shadow-sm flex flex-col min-h-[380px]">
            <div className="p-4 bg-[#FAF7F2] border-b border-[#EBE4DD] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1C1815]">
                <MapPin className="w-4 h-4 text-[#D05E33]" />
                <span>Mapa de Acesso: Jardim Monumento</span>
              </div>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D05E33] hover:underline font-medium flex items-center gap-1"
              >
                Como chegar <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex-1 w-full min-h-[350px] relative">
              <iframe
                title="Mapa de localização Charme Salão de Beleza"
                src="https://maps.google.com/maps?q=Rua+In%C3%BAbia+Paulista%2C+1116+-+Jardim+Monumento%2C+Campo+Grande+-+MS%2C+79071-180&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
