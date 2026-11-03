import React from 'react';
import { Star, Heart, Award, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: Star,
      title: '5,0 Estrelas no Google',
      description: '95 avaliações unânimes de clientes satisfeitas',
    },
    {
      icon: Heart,
      title: 'Atendimento Atencioso',
      description: 'Cuidado personalizado e acolhimento caloroso',
    },
    {
      icon: Award,
      title: 'Profissionais de Excelência',
      description: 'Reconhecidos pela qualidade e dedicação aos serviços',
    },
    {
      icon: MapPin,
      title: 'Campo Grande – MS',
      description: 'Rua Inúbia Paulista, 1116 – Jardim Monumento',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 lg:-mt-8 mb-20 relative z-20">
      <div className="bg-white/95 backdrop-blur-md rounded-[28px] border border-[#EBE4DD] shadow-xl shadow-black/3 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EBE4DD]">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index > 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0EB] text-[#D05E33] flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1C1815] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#7A6E67] mt-1 font-light leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
