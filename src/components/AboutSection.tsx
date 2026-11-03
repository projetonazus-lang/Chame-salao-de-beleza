import React from 'react';
import { Heart, Star, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SALON_INFO } from '../data/salonData';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#F5EEE8]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with Framer Motion slide-in */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-[480px]">
              
              {/* Main Photo: Salon Atmosphere & Care */}
              <div className="aspect-[3/4] sm:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-[#FAF0EB]">
                <img
                  src="/assets/aistudio/image_c4423f05_hd.png"
                  alt="Interior real e acolhedor do Charme Salão de Beleza em Campo Grande MS"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Inset Photo: Hair Care Detail */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 -right-6 w-48 sm:w-56 aspect-square rounded-[24px] overflow-hidden shadow-2xl border-4 border-white hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80"
                  alt="Tratamento capilar com resultado impecável"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
                  }}
                />
              </motion.div>

              {/* Floating Badge: 5.0 Google Score */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="absolute -top-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl border border-[#EBE4DD] shadow-xl"
              >
                <div className="flex items-center gap-1 text-[#D05E33]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="block text-xl font-serif font-bold text-[#1C1815] mt-1">
                  5,0 Estrelas
                </span>
                <span className="block text-xs text-[#7A6E67] font-medium">
                  95 avaliações no Google
                </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Narrative & Values with Framer Motion slide-in */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D05E33] block mb-2">
              Conheça Nossa História
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1815] tracking-tight leading-tight mb-6">
              Um espaço dedicado à sua
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#D05E33] font-normal ml-3">
                autoestima
              </span>
            </h2>

            <p className="text-base text-[#635750] leading-relaxed mb-6 font-light">
              O <strong>Charme Salão de Beleza</strong> é um espaço acolhedor e profissional localizado em Campo Grande – MS, planejado especialmente para proporcionar momentos de renovação, cuidado pessoal e bem-estar.
            </p>

            <p className="text-base text-[#635750] leading-relaxed mb-6 font-light">
              Reconhecido pela nota máxima de <strong>5,0 estrelas no Google com 95 avaliações</strong>, nosso salão se destaca pelo <strong>atendimento atencioso</strong> e pela dedicação aos resultados de cada cliente — do corte à finalização, das mechas aos tratamentos e manicure.
            </p>

            {/* Feature Highlights with soft reveal */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#EBE4DD] transition-all hover:shadow-md">
                <Heart className="w-5 h-5 text-[#D05E33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1815] uppercase tracking-wider">
                    Atendimento Atencioso
                  </h4>
                  <p className="text-xs text-[#7A6E67] mt-1">
                    Ambiente aconchegante onde cada detalhe é pensado para seu conforto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/80 border border-[#EBE4DD] transition-all hover:shadow-md">
                <Sparkles className="w-5 h-5 text-[#D05E33] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#1C1815] uppercase tracking-wider">
                    Serviço de Qualidade
                  </h4>
                  <p className="text-xs text-[#7A6E67] mt-1">
                    Profissionais reconhecidos pelo capricho e resultados que encantam.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-3.5 bg-[#D05E33] hover:bg-[#B84B22] text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wide"
              >
                Agende Seu Horário no WhatsApp
              </button>

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-white hover:bg-[#FAF7F2] text-[#1C1815] border border-[#EBE4DD] rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm flex items-center gap-1.5"
              >
                <MapPin className="w-4 h-4 text-[#D05E33]" />
                Ver Localização
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
