import React, { useState, useEffect } from 'react';
import { GitGraph, ArrowRight, Layers, BarChart, CheckCircle2, ShieldAlert, Circle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VennDiagram = () => (
  <div className="relative w-64 h-64 mx-auto flex items-center justify-center opacity-80">
    <div className="absolute w-40 h-40 rounded-full border-2 border-brand-blue bg-brand-blue/10 top-0 left-4 mix-blend-screen animate-pulse" style={{animationDuration: '4s'}} />
    <div className="absolute w-40 h-40 rounded-full border-2 border-brand-coral bg-brand-coral/10 bottom-0 right-4 mix-blend-screen animate-pulse" style={{animationDuration: '5s'}} />
    <div className="absolute w-40 h-40 rounded-full border-2 border-brand-blue bg-brand-blue/10 bottom-0 left-4 mix-blend-screen animate-pulse" style={{animationDuration: '6s'}} />
  </div>
);

export const FlowChart = () => (
  <div className="flex flex-col space-y-4 items-center w-full max-w-xs mx-auto opacity-90">
    {[1, 2, 3].map((i) => (
      <React.Fragment key={i}>
        <div className="w-full p-4 border border-white/20 rounded bg-white/5 backdrop-blur text-center text-xs font-mono text-brand-text-muted">
          Stage {i}
        </div>
        {i < 3 && <ArrowRight className="rotate-90 text-brand-blue" size={16} />}
      </React.Fragment>
    ))}
  </div>
);

export const Comparison = () => (
  <div className="grid grid-cols-2 gap-4 w-full h-48">
    <div className="border border-red-500/30 bg-red-500/5 rounded p-4 flex flex-col items-center justify-center">
      <ShieldAlert className="text-red-400 mb-2" size={32} />
      <span className="text-red-200 text-xs font-mono uppercase">Risk</span>
    </div>
    <div className="border border-emerald-500/30 bg-emerald-500/5 rounded p-4 flex flex-col items-center justify-center">
      <CheckCircle2 className="text-emerald-400 mb-2" size={32} />
      <span className="text-emerald-200 text-xs font-mono uppercase">Safe</span>
    </div>
  </div>
);

export const LayersIcon = () => (
    <div className="flex items-center justify-center h-48">
        <Layers className="text-brand-blue w-24 h-24 opacity-80" />
    </div>
)

export const Timeline = () => (
    <div className="flex flex-col space-y-4 border-l border-white/20 pl-6 ml-6 py-2">
        {[1, 2, 3, 4].map(i => (
             <div key={i} className="relative">
                <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-brand-coral/50 border border-brand-bg"></div>
                <div className="h-2 w-16 bg-white/10 rounded"></div>
             </div>
        ))}
    </div>
)

export const ChartVisual = () => (
    <div className="flex items-end justify-center space-x-2 h-48 pb-4">
        <div className="w-8 bg-brand-blue/20 h-[40%] rounded-t"></div>
        <div className="w-8 bg-brand-blue/40 h-[60%] rounded-t"></div>
        <div className="w-8 bg-brand-blue/60 h-[50%] rounded-t"></div>
        <div className="w-8 bg-brand-coral h-[85%] rounded-t shadow-[0_0_15px_rgba(255,127,80,0.5)]"></div>
    </div>
)

export const ScreenshotCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images || images.length === 0) return <div className="text-white/50 text-sm font-mono">No Images Available</div>;

  return (
    <div className="w-full h-full relative overflow-hidden bg-brand-bg/50 group">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index + 1}`}
          onClick={nextImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-contain p-4 cursor-pointer"
        />
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button 
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-coral z-20"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-coral z-20"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
            {images.map((_, i) => (
            <div 
                key={i} 
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${i === index ? 'bg-brand-coral' : 'bg-white/20 hover:bg-white/40'}`} 
            />
            ))}
        </div>
      )}
    </div>
  );
};

export const VisualPlaceholder: React.FC<{ type: string; meta?: any }> = ({ type, meta }) => {
  switch (type) {
    case 'venn': return <VennDiagram />;
    case 'flow': return <FlowChart />;
    case 'comparison': return <Comparison />;
    case 'split-image': 
        if (meta?.image) {
             const ImageContent = <img src={meta.image} alt="Visual" className="w-full h-full object-contain p-4" />;
             
             if (meta.link) {
                 return (
                     <a href={meta.link} target="_blank" rel="noopener noreferrer" className="w-full h-full relative block cursor-pointer hover:opacity-90 transition-opacity">
                         {ImageContent}
                     </a>
                 )
             }

             return (
                 <div className="w-full h-full relative">
                    {ImageContent}
                 </div>
             )
        }
        return <div className="w-full h-64 bg-gradient-to-br from-brand-blue/20 to-brand-coral/20 rounded-lg flex items-center justify-center border border-white/10"><GitGraph className="text-white/50 w-16 h-16"/></div>;
    case 'timeline': return <Timeline />;
    case 'chart': return <ChartVisual />;
    case 'grid': return <div className="grid grid-cols-2 gap-2 w-full h-48 opacity-50"><div className="bg-white/5 rounded"></div><div className="bg-white/5 rounded"></div><div className="bg-white/5 rounded"></div><div className="bg-white/5 rounded"></div></div>;
    case 'carousel': return <ScreenshotCarousel images={meta?.images || []} />;
    default: return <LayersIcon />;
  }
};