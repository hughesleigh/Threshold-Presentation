import React from 'react';
import { SlideData } from '../types';
import { VisualPlaceholder } from './Visuals';
import { motion } from 'framer-motion';

interface SlideRendererProps {
  slide: SlideData;
}

const variants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  const { layout, title, subtitle, content, bullets, visualType, visualMeta, link } = slide;

  const renderContent = () => (
    <div className="space-y-6">
      {subtitle && <h3 className="text-xl md:text-2xl text-brand-coral font-mono tracking-tight whitespace-pre-line">{subtitle}</h3>}
      {content && content.map((p, i) => (
        <p key={i} className="text-lg md:text-xl text-brand-text-muted leading-relaxed max-w-3xl whitespace-pre-line">{p}</p>
      ))}
      {bullets && (
        <ul className="space-y-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start space-x-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand-blue to-brand-coral shrink-0" />
              <div className="text-lg text-brand-text-muted leading-relaxed whitespace-pre-line">
                {b.title && <strong className="text-white font-semibold block mb-1">{b.title}</strong>}
                {b.text}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const containerClasses = "w-full max-w-6xl mx-auto px-8 md:px-16 h-full flex flex-col justify-center py-20";

  if (layout === 'title') {
    const TitleContent = (
        <motion.div initial="hidden" animate="visible" variants={variants} className={link ? "cursor-pointer group" : ""}>
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 pb-2 whitespace-pre-line ${link ? 'group-hover:text-brand-blue transition-colors' : ''}`}>
            {title}
          </h1>
          {subtitle && <h2 className="text-2xl text-brand-coral font-mono mb-12 whitespace-pre-line">{subtitle}</h2>}
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-coral mx-auto mb-12 rounded-full" />
          <div className="text-brand-text-muted space-y-2">
            {content?.map((line, i) => <p key={i} className="whitespace-pre-line">{line}</p>)}
          </div>
        </motion.div>
    );

    return (
      <div className={`${containerClasses} items-center text-center`}>
        {link ? <a href={link} target="_blank" rel="noopener noreferrer">{TitleContent}</a> : TitleContent}
      </div>
    );
  }

  // Split Layout
  if (layout === 'split') {
    const isCarousel = visualType === 'carousel';
    const isSplitImage = visualType === 'split-image';
    
    // Adjusted container heights for better visibility
    const visualContainerClasses = isCarousel || isSplitImage
      ? "bg-white/5 rounded-2xl p-0 border border-white/10 backdrop-blur-sm h-[400px] md:h-[500px] w-full flex flex-col items-center justify-center relative overflow-hidden group"
      : "bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden group";

    return (
      <div className={`${containerClasses}`}>
        <motion.div 
          initial="hidden" animate="visible" variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Column - conditionally wrapped in Link */}
          <div className={link ? "group" : ""}>
             {link ? (
                 <a href={link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity">
                    <h2 className="text-4xl font-bold text-white mb-2 whitespace-pre-line">{title}</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-coral mb-8 rounded-full" />
                    {renderContent()}
                 </a>
             ) : (
                 <>
                    <h2 className="text-4xl font-bold text-white mb-2 whitespace-pre-line">{title}</h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-brand-blue to-brand-coral mb-8 rounded-full" />
                    {renderContent()}
                 </>
             )}
          </div>
          
          {/* Visual Column */}
          <div className={visualContainerClasses}>
            {visualType === 'carousel' ? null : <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-brand-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />}
             {visualType ? <VisualPlaceholder type={visualType} meta={visualMeta} /> : <div className="text-brand-text-muted font-mono text-sm">Visual Placeholder</div>}
          </div>
        </motion.div>
      </div>
    );
  }

  if (layout === 'grid') {
    // If there are exactly 4 bullets, use a 2-column grid for better balance (cards 3 & 4 on same line)
    const gridCols = (bullets && bullets.length === 4) ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={containerClasses}>
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <div className="mb-12 border-b border-white/10 pb-6">
                <h2 className="text-4xl font-bold text-white mb-2 whitespace-pre-line">{title}</h2>
                {subtitle && <h3 className="text-xl text-brand-coral font-mono whitespace-pre-line">{subtitle}</h3>}
            </div>
            <div className={`grid ${gridCols} gap-6`}>
               {bullets?.map((b, i) => (
                   <div key={i} className="bg-brand-surface border border-white/5 p-6 rounded-xl hover:border-brand-coral/30 transition-colors duration-300">
                       <div className="text-brand-coral font-mono text-xs mb-3">0{i + 1}</div>
                       {b.title && <h4 className="text-xl font-bold text-white mb-3">{b.title}</h4>}
                       <p className="text-brand-text-muted leading-relaxed text-sm whitespace-pre-line">{b.text}</p>
                   </div>
               ))}
               {content?.map((c, i) => (
                    <div key={`c-${i}`} className="bg-brand-surface border border-white/5 p-6 rounded-xl col-span-full">
                        <p className="text-brand-text-muted whitespace-pre-line">{c}</p>
                    </div>
               ))}
            </div>
          </motion.div>
        </div>
    )
  }

  if (layout === 'center') {
      return (
        <div className={`${containerClasses} text-center`}>
            <motion.div initial="hidden" animate="visible" variants={variants} className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 whitespace-pre-line">{title}</h2>
                {subtitle && <h3 className="text-2xl text-brand-coral mb-12 font-mono whitespace-pre-line">{subtitle}</h3>}
                <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                     {content && content.map((p, i) => (
                        <p key={i} className="text-xl md:text-2xl text-brand-text-muted leading-relaxed mb-6 last:mb-0 font-light whitespace-pre-line">{p}</p>
                     ))}
                </div>
            </motion.div>
        </div>
      )
  }

  // Default Standard Layout (Now handles grid for side-by-side)
  const isVisualPresent = !!visualType && visualType !== 'none';

  return (
    <div className={containerClasses}>
       <motion.div initial="hidden" animate="visible" variants={variants}>
         <div className={isVisualPresent ? "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" : "max-w-4xl"}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 whitespace-pre-line">{title}</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-coral mb-10 rounded-full" />
              {renderContent()}
            </div>
            
            {isVisualPresent && (
                <div className="mt-8 md:mt-0 p-0 rounded-2xl bg-white/5 border border-white/10 overflow-hidden h-[400px] relative w-full flex flex-col items-center justify-center">
                     <VisualPlaceholder type={visualType} meta={visualMeta} />
                </div>
            )}
         </div>
      </motion.div>
    </div>
  );
};