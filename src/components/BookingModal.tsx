import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, User, Phone, CheckCircle2, Sparkles, Send, MessageCircle } from 'lucide-react';
import { SERVICES, SALON_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedServiceId || SERVICES[0].id
  );
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState<string>('14:00');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:30', '17:00', '18:30', '19:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert('Por favor, informe seu nome e telefone.');
      return;
    }

    const randomCode = 'CHM-' + Math.floor(1000 + Math.random() * 9000);
    setBookingCode(randomCode);
    setIsSuccess(true);

    const message = `✨ *SOLICITAÇÃO DE AGENDAMENTO - CHARME SALÃO DE BELEZA*\n\n` +
      `Código: *${randomCode}*\n` +
      `Cliente: *${clientName}*\n` +
      `Telefone/WhatsApp: *${clientPhone}*\n` +
      `Procedimento: *${currentService.name}*\n` +
      `Data pretendida: *${selectedDate}*\n` +
      `Horário preferencial: *${selectedTime}*\n` +
      (notes ? `Observações: ${notes}\n\n` : '\n') +
      `Gostaria de verificar a disponibilidade e confirmar o agendamento!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SALON_INFO.whatsapp}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-[32px] border border-[#EBE4DD] shadow-2xl overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#1C1815] text-white p-6 sm:p-8 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#D05E33] font-semibold tracking-wider uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento via WhatsApp</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold">
              Reserve Seu Momento
            </h3>
            <p className="text-xs sm:text-sm text-[#A89D96] mt-1 font-light">
              Charme Salão de Beleza · Campo Grande – MS
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success View */}
        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#FAF0EB] text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-semibold tracking-wider uppercase text-[#D05E33]">
              Pedido Pronto para Envio
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#1C1815] mt-1 mb-2">
              Muito obrigada, {clientName}!
            </h4>
            <p className="text-sm text-[#6B5E55] max-w-md mx-auto mb-6">
              Sua solicitação <strong>#{bookingCode}</strong> foi gerada. Estamos abrindo o WhatsApp do Charme Salão de Beleza para concluir sua confirmação.
            </p>

            <div className="bg-white p-5 rounded-2xl border border-[#EBE4DD] text-left max-w-md mx-auto mb-8 text-xs sm:text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-[#7A6E67]">Serviço:</span>
                <span className="font-semibold text-[#1C1815]">{currentService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6E67]">Data e Horário:</span>
                <span className="font-semibold text-[#1C1815]">{selectedDate} às {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7A6E67]">Salão:</span>
                <span className="text-[#1C1815]">Jardim Monumento, Campo Grande – MS</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3.5 bg-[#D05E33] hover:bg-[#B84B22] text-white rounded-full text-sm font-semibold transition-all cursor-pointer"
            >
              Concluir e Voltar ao Site
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2">
                1. Selecione a Categoria de Serviço
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} ({s.categoryLabel})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#D05E33]" />
                  2. Data Pretendida
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D05E33]" />
                  3. Horário Sugerido (Até as 20h)
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 3: Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D05E33]" />
                  Seu Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#D05E33]" />
                  Seu WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  placeholder="(67) 99999-9999"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1815] uppercase tracking-wider mb-2">
                Observações Especiais (Opcional)
              </label>
              <textarea
                placeholder="Ex: Gostaria de consultar corte + escova, ou tirar dúvidas sobre tonalidades..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#D8CCC4] text-sm text-[#1C1815] focus:outline-none focus:border-[#D05E33]"
              />
            </div>

            <p className="text-[11px] text-[#7A6E67]">
              ℹ️ Horários atendidos até as 20h conforme disponibilidade e confirmação do salão.
            </p>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer uppercase tracking-wide text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Enviar Agendamento pelo WhatsApp</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
