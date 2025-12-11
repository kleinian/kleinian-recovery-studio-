import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal, ImageOff } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, className = '' }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageError, setImageError] = useState<{before: boolean, after: boolean}>({ before: false, after: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchend', handleInteractionEnd);
    } else {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    }
    return () => {
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none group cursor-ew-resize ${className}`}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onMouseDown={(e) => { handleMove(e.clientX); setIsDragging(true); }}
      onTouchStart={(e) => { handleMove(e.touches[0].clientX); setIsDragging(true); }}
    >
      <div className="relative w-full h-full min-h-[200px]">
        {/* Before Image (Background) */}
        {imageError.before ? (
           <div className="absolute inset-0 w-full h-full bg-stone-200 flex flex-col items-center justify-center text-stone-400">
              <ImageOff className="w-8 h-8 mb-2 opacity-50" />
              <span className="text-xs font-mono uppercase tracking-widest">Before Image</span>
           </div>
        ) : (
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover object-top grayscale"
            draggable={false}
            onError={() => setImageError(prev => ({ ...prev, before: true }))}
          />
        )}
        
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded z-20 backdrop-blur-md">Before</div>

        {/* After Image (Foreground - Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {imageError.after ? (
             <div className="absolute inset-0 w-full h-full bg-sage-100 flex flex-col items-center justify-center text-sage-600">
                <ImageOff className="w-8 h-8 mb-2 opacity-50" />
                <span className="text-xs font-mono uppercase tracking-widest">After Image</span>
             </div>
          ) : (
            <img 
              src={afterImage} 
              alt="After" 
              className="absolute inset-0 w-full h-full object-cover object-top"
              draggable={false}
              onError={() => setImageError(prev => ({ ...prev, after: true }))}
            />
          )}
          <div className="absolute top-4 right-4 bg-sage-500/80 text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded z-20 backdrop-blur-md">After</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform active:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-stone-900" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;