import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data/slides';
import { SlideRenderer } from './components/SlideRenderer';
import { Controls } from './components/Controls';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from 'lucide-react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToHome = useCallback(() => {
    setCurrentIndex(0);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToHome();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToHome]);

  return (
    <div className="min-h-screen bg-brand-bg text-white overflow-hidden relative font-sans selection:bg-brand-coral selection:text-white">
      
      {/* Background Ambience - Updated Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-coral/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Film Grain Texture Overlay */}
      <div className="bg-noise" />

      {/* Home Button */}
      <div className="absolute top-6 left-6 z-50">
        <button 
          onClick={goToHome}
          className="p-3 rounded-full bg-brand-surface/30 border border-white/5 text-brand-text-muted hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
          aria-label="Go to Home"
        >
          <Home size={20} />
        </button>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            <SlideRenderer slide={slides[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <Controls 
        current={currentIndex} 
        total={slides.length} 
        onNext={nextSlide} 
        onPrev={prevSlide}
        onFullscreen={toggleFullscreen}
      />
    </div>
  );
}