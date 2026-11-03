import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [quickMsg, setQuickMsg] = useState<string>('');

  const defaultMessage = 'Olá! Gostaria de agendar um horário no Charme Salão de Beleza.';

  const handleSendMessage = (textToSend: string) => {
    const text = textToSend || defaultMessage;
    const url = `https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Quick Chat Preview Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-[#EBE4DD] overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#1C1815] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Atendimento Charme"
                  className="w-9 h-9 rounded-full object-cover border border-[#D05E33]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
                  }}
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#1C1815]"></span>
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-tight">Concierge Charme</h4>
                <span className="text-[11px] text-[#D05E33]">Online agora</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-[#FAF7F2] text-xs text-[#544943] space-y-2.5">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-[#EBE4DD] shadow-sm leading-relaxed">
              Olá! Seja bem-vinda ao <strong>Charme Salão de Beleza</strong>. ✨ Como podemos cuidar da sua beleza hoje?
            </div>
            
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => handleSendMessage('Olá! Gostaria de agendar um horário para cabelo/escova no Charme Salão de Beleza.')}
                className="w-full text-left py-2 px-3 bg-white hover:bg-[#FAF0EB] rounded-xl border border-[#EBE4DD] text-[11px] text-[#1C1815] transition-colors"
              >
                💇‍♀️ Agendar cabelo, corte ou escova
              </button>
              <button
                onClick={() => handleSendMessage('Olá! Gostaria de agendar manicure/pedicure no Charme Salão de Beleza.')}
                className="w-full text-left py-2 px-3 bg-white hover:bg-[#FAF0EB] rounded-xl border border-[#EBE4DD] text-[11px] text-[#1C1815] transition-colors"
              >
                💅 Agendar manicure ou pedicure
              </button>
              <button
                onClick={() => handleSendMessage('Olá! Gostaria de consultar os horários disponíveis esta semana no Charme Salão de Beleza.')}
                className="w-full text-left py-2 px-3 bg-white hover:bg-[#FAF0EB] rounded-xl border border-[#EBE4DD] text-[11px] text-[#1C1815] transition-colors"
              >
                📅 Consultar disponibilidade de horários
              </button>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-[#EBE4DD] flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua dúvida..."
              value={quickMsg}
              onChange={(e) => setQuickMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage(quickMsg);
              }}
              className="flex-1 text-xs px-3 py-2 bg-[#FAF7F2] rounded-full border border-[#D8CCC4] focus:outline-none focus:border-[#D05E33]"
            />
            <button
              onClick={() => handleSendMessage(quickMsg)}
              className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba59] transition-colors cursor-pointer shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main WhatsApp Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-green-500/30 transition-all cursor-pointer hover:scale-105"
        aria-label="Abrir conversa no WhatsApp"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        </span>
        <span className="text-xs font-semibold hidden sm:inline-block">
          Fale Conosco
        </span>
      </button>

    </div>
  );
};
