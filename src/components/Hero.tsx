import React from 'react';
import { ArrowRight, Star, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onScrollToServices,
}) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F7EFE9] rounded-full blur-3xl -z-10 pointer-events-none opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy with motion */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 z-10"
          >
            {/* Kicker label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#D05E33]">
                Campo Grande – MS · Jardim Monumento
              </span>
            </div>

            {/* Main Title: "Sua beleza merece esse momento." */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-serif font-bold text-[#1C1815] tracking-tight leading-[1.12] mb-5">
              Sua beleza
              <span className="block font-script text-5xl sm:text-6xl md:text-7xl text-[#D05E33] font-normal -mt-1 tracking-normal">
                merece esse momento.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#635750] leading-relaxed max-w-xl mb-8 font-light">
              Realce sua beleza, renove sua autoestima e viva uma experiência especial no <strong>Charme Salão de Beleza</strong>.
            </p>

            {/* Action Buttons: "Agende seu horário" e "Conheça nossos serviços" */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group px-8 py-4 bg-[#D05E33] hover:bg-[#B84B22] text-white rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-xl flex items-center gap-2.5 cursor-pointer uppercase tracking-wide"
              >
                <span>Agende seu horário</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToServices}
                className="px-7 py-4 bg-white/90 hover:bg-white text-[#1C1815] border border-[#E5DDD5] rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
              >
                Conheça nossos serviços
              </button>
            </div>

            {/* Indicadores de Confiança Principais */}
            <div className="mt-10 pt-8 border-t border-[#EBE4DD] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center gap-1 text-[#D05E33]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="block text-base font-bold font-serif text-[#1C1815] mt-1">5,0 Estrelas</span>
                <span className="block text-xs text-[#7A6E67]">no Google Avaliações</span>
              </div>

              <div>
                <span className="block text-lg font-bold font-serif text-[#1C1815]">95</span>
                <span className="block text-xs font-semibold text-[#D05E33]">Avaliações reais</span>
                <span className="block text-[11px] text-[#7A6E67]">de clientes satisfeitas</span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#D05E33] mb-0.5">
                  <Heart className="w-4 h-4 fill-[#D05E33]" />
                </div>
                <span className="block text-xs font-bold text-[#1C1815]">Atendimento Atencioso</span>
                <span className="block text-[11px] text-[#7A6E67]">Cuidado e carinho</span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#D05E33] mb-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="block text-xs font-bold text-[#1C1815]">Qualidade Reconhecida</span>
                <span className="block text-[11px] text-[#7A6E67]">Profissionais de excelência</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual with Terracotta Circle and Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            
            {/* The Terracotta Decorative Circle */}
            <div className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Sun / Terracotta Background Disc */}
              <div className="absolute w-[82%] h-[82%] rounded-full bg-gradient-to-tr from-[#C25126] via-[#D05E33] to-[#E37A4B] shadow-2xl shadow-[#D05E33]/30"></div>
              
              {/* Artistic subtle outer ring */}
              <div className="absolute w-[94%] h-[94%] rounded-full border border-[#D05E33]/25 border-dashed animate-[spin_60s_linear_infinite]"></div>

              {/* Main Model Photo with Impeccable Hair */}
              <div className="relative w-full h-full flex items-end justify-center overflow-visible z-10">
                <img
                  src="/assets/aistudio/image_50f97781_hd.png"
                  alt="Mulher elegante com cabelo impecável e maquiagem glow no Charme Salão de Beleza"
                  className="w-[90%] h-[95%] object-cover object-top rounded-b-[40px] drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Badge 1: Top Right "5,0 Estrelas no Google" */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute -top-3 right-1 sm:right-6 z-20 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl border border-[#EBE4DD] shadow-lg shadow-black/5 flex items-center gap-2 sm:gap-2.5 transform transition-transform hover:-translate-y-1"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FAF0EB] flex items-center justify-center text-[#D05E33] shrink-0">
                  <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D05E33]" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] sm:text-xs font-bold text-[#1C1815] leading-tight">5,0 ★ no Google</span>
                  <span className="block text-[10px] sm:text-[11px] text-[#7A6E67]">95 avaliações 5 estrelas</span>
                </div>
              </motion.div>

              {/* Floating Badge 3: Bottom Right "Agende seu horário" */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                onClick={onOpenBooking}
                className="absolute -bottom-4 right-4 sm:right-10 z-20 bg-[#D05E33] hover:bg-[#B84B22] text-white px-5 py-2.5 rounded-full shadow-lg shadow-[#D05E33]/30 flex items-center gap-2 text-xs font-semibold cursor-pointer transition-all hover:scale-105 uppercase tracking-wide"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Agendar Horário
              </motion.button>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
