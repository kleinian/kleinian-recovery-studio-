import React from 'react';
import RevealText from './ui/RevealText';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="min-h-screen lg:h-screen w-full snap-start flex items-center justify-center py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-4">Who We Are</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
             <h2 className="text-5xl md:text-6xl font-serif italic text-sage-600">Kleinian</h2>
             <span className="block text-sm text-stone-400 font-mono mt-2">(KLY-NEE-UHN)</span>
          </div>
          
          <div className="md:col-span-8">
            <RevealText 
              text="We work with people and organizations whose missions improve the human experience. We are not just designers; we are problem solvers. From visual mediums to physical spaces, we develop solutions that are efficient, functional, and meaningful."
              tag="p"
              className="text-2xl md:text-4xl lg:text-5xl leading-tight font-light text-stone-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;