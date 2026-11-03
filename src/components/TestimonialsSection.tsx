import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, SALON_INFO } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Score Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D05E33] block mb-2">
              Opinião de Quem Confia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1815] tracking-tight">
              Depoimentos de
              <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#D05E33] font-normal ml-3">
                Clientes
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#7A6E67] mt-2 font-light">
              Avaliações reais compartilhadas espontaneamente por nossas clientes no Google.
            </p>
          </div>

          {/* Google Review Badge Box */}
          <div className="bg-white rounded-3xl border border-[#EBE4DD] p-5 sm:p-6 shadow-sm flex items-center gap-5 self-start lg:self-auto">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF0EB] flex items-center justify-center text-[#D05E33] font-serif font-bold text-2xl shadow-inner">
              G
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-serif text-[#1C1815]">5,0</span>
                <div className="flex text-[#D05E33]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#7A6E67] mt-0.5 font-medium">
                Classificação 5,0 estrelas · <strong>95 avaliações</strong> no Google
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id || idx}
              className="bg-white rounded-[28px] p-8 border border-[#EBE4DD] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-[#D05E33]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#EBE4DD]" />
                </div>

                <p className="text-base sm:text-lg text-[#302824] leading-relaxed italic mb-8 font-serif">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0EBE5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="text-xs font-semibold text-[#1C1815]">
                    Avaliação Verificada no Google
                  </span>
                </div>
                <span className="text-[11px] text-[#D05E33] font-medium bg-[#FAF0EB] px-2.5 py-0.5 rounded-full">
                  5.0 ★
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
