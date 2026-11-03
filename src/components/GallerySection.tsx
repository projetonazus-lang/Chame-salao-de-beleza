import React, { useState } from 'react';
import { Sparkles, X, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'coloracao', label: 'Mechas & Cores' },
    { id: 'cabelos', label: 'Cortes & Visagismo' },
    { id: 'unhas', label: 'Unhas & Nails' },
    { id: 'noivas', label: 'Noivas & Festas' },
    { id: 'ambiente', label: 'Espaço & Bar' },
  ];

  const filteredItems = activeTab === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="galeria" className="py-16 lg:py-24 bg-[#FAF7F2] border-t border-[#EBE4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D05E33] block mb-2">
            Portfólio & Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1815] tracking-tight">
            Galeria de
            <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#D05E33] font-normal ml-3">
              Transformações
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55] mt-3 font-light leading-relaxed">
            Cada cliente possui uma beleza singular. Conheça resultados reais criados diariamente por nossas visagistas e hair stylists.
          </p>
        </div>

        {/* Featured Before & After Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <BeforeAfterSlider
            beforeImage="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
            beforeLabel="Antes (Fios opacos & sem corte)"
            afterLabel="Depois (Morena Iluminada Avelã + Fusio-Dose)"
            title="Transformação Iluminação & Saúde Capilar"
            subtitle="Correção de tonalidade com mechas sem amônia e cronograma lipídico restaurador."
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#1C1815] text-white shadow-sm'
                  : 'bg-white text-[#544943] border border-[#EBE4DD] hover:border-[#D05E33] hover:text-[#D05E33]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative bg-white rounded-[26px] overflow-hidden border border-[#EBE4DD] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#FAF0EB]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
                  }}
                />
              </div>

              {/* Overlay with subtle gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#EEDFD7] font-semibold mb-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#D05E33]" />
                  {item.category.toUpperCase()}
                </span>
                <h4 className="text-lg font-serif font-bold leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-[#E5DDD5] mt-1 line-clamp-2 font-light">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-[#D05E33] font-medium">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver em alta resolução</span>
                </div>
              </div>

              {/* Quiet caption for mobile when hover is not active */}
              <div className="p-4 group-hover:hidden sm:block">
                <h4 className="text-sm font-semibold text-[#1C1815] line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-[#7A6E67] line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] sm:aspect-[16/10] bg-black">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
                }}
              />
            </div>

            <div className="p-6 sm:p-8">
              <span className="text-xs uppercase tracking-wider text-[#D05E33] font-semibold">
                {activeLightbox.category}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#1C1815] mt-1 mb-2">
                {activeLightbox.title}
              </h3>
              <p className="text-sm text-[#6B5E55] leading-relaxed">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
