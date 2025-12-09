import React from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onFullscreen: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ current, total, onNext, onPrev, onFullscreen }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-6 flex items-center justify-between bg-gradient-to-t from-brand-bg to-transparent">
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-surface w-full">
        <div 
          className="h-full bg-gradient-to-r from-brand-blue to-brand-coral transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center space-x-4 text-brand-blue font-mono text-xs tracking-widest opacity-70">
        <span>{String(current + 1).padStart(2, '0')}</span>
        <span className="text-brand-text-muted">/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>

      <div className="flex items-center space-x-2">
        <button 
          onClick={onPrev}
          disabled={current === 0}
          className="p-3 rounded-full bg-brand-surface/50 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-md"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={onNext}
          disabled={current === total - 1}
          className="p-3 rounded-full bg-brand-surface/50 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-md"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="hidden md:block">
         <button onClick={onFullscreen} className="p-2 text-brand-text-muted hover:text-white transition-colors">
            <Maximize2 size={16} />
         </button>
      </div>
    </div>
  );
};