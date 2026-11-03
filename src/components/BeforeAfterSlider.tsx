import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  subtitle: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Depois (Charme)',
  title,
  subtitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      let percentage = (x / width) * 100;
      if (percentage < 5) percentage = 5;
      if (percentage > 95) percentage = 95;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-[32px] border border-[#EBE4DD] p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D05E33] uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformação Real</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C1815]">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-[#7A6E67] font-light">{subtitle}</p>
        </div>

        <div className="text-xs text-[#9C8F87] flex items-center gap-1.5 self-start sm:self-auto bg-[#FAF7F2] px-3 py-1.5 rounded-full border border-[#EBE4DD]">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#D05E33]" />
          <span>Arraste o divisor</span>
        </div>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none bg-[#FAF0EB]"
      >
        {/* After Image (Background layer - 100% width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
          }}
        />

        {/* Before Image (Foreground layer - clipped by sliderPosition) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%', maxWidth: 'none' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/aistudio/image_51777c26.png';
            }}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 bg-[#1C1815]/75 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 z-10 bg-[#D05E33]/90 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm pointer-events-none">
          {afterLabel}
        </div>

        {/* Draggable Divider Line & Knob */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#1C1815] shadow-2xl flex items-center justify-center border-2 border-[#D05E33]">
            <MoveHorizontal className="w-5 h-5 text-[#D05E33]" />
          </div>
        </div>
      </div>
    </div>
  );
};
