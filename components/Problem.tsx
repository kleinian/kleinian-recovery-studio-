import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './ui/RevealText';
import { AlertCircle, TrendingDown, Users, DollarSign } from 'lucide-react';
import BeforeAfterSlider from './ui/BeforeAfterSlider';

const Problem: React.FC = () => {
  return (
    <section className="relative min-h-screen lg:h-screen w-full snap-start flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden bg-transparent">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
                <span className="block text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-4 lg:mb-6">The Results</span>
                <RevealText 
                  text="Rehabilitate your digital identity"
                  tag="h2"
                  className="text-4xl md:text-6xl font-sans font-light text-stone-900 tracking-tight"
                />
            </div>
            
            {/* Desktop CTA Button */}
            <a
              href="https://cal.com/kleinian/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-[#341CFF] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-blue-700 transition-colors duration-300 flex-shrink-0"
            >
              Book Consultation
            </a>
        </div>

        {/* Content Layout - Bento / 50-50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:h-[60vh]">
          
          {/* Left: Bento Grid of Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
             <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center gap-2 min-h-[160px]">
                <div className="flex items-center gap-3 text-sage-800 mb-2">
                  <div className="p-2 bg-sage-100 rounded-full">
                     <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-none">Lower CPA</h3>
                </div>
                <p className="text-sm text-stone-600 leading-snug">Stop burning capital. Efficient design lowers cost per acquisition.</p>
             </div>

             <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center gap-2 min-h-[160px]">
                <div className="flex items-center gap-3 text-sage-800 mb-2">
                  <div className="p-2 bg-sage-100 rounded-full">
                     <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-none">High-Ticket Wins</h3>
                </div>
                <p className="text-sm text-stone-600 leading-snug">Signal stability to families. Align digital identity with care quality.</p>
             </div>

             <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center gap-2 min-h-[160px]">
                <div className="flex items-center gap-3 text-sage-800 mb-2">
                  <div className="p-2 bg-sage-100 rounded-full">
                     <TrendingDown className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-none">Increase Trust</h3>
                </div>
                <p className="text-sm text-stone-600 leading-snug">Visual consistency reads as operational competence.</p>
             </div>

             <div className="bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:bg-white/60 transition-all duration-300 flex flex-col justify-center gap-2 min-h-[160px]">
                <div className="flex items-center gap-3 text-sage-800 mb-2">
                  <div className="p-2 bg-sage-100 rounded-full">
                     <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-none">More Calls</h3>
                </div>
                <p className="text-sm text-stone-600 leading-snug">Trust cues and conversion triggers optimize intake volume.</p>
             </div>
          </div>

          {/* Mobile CTA Button (Hidden on Desktop) */}
          <a
              href="https://cal.com/kleinian/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden w-full inline-flex items-center justify-center bg-[#341CFF] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-blue-700 transition-colors duration-300"
            >
              Book Consultation
          </a>

          {/* Right: Before/After Slider */}
          <div className="relative w-full aspect-video lg:aspect-auto lg:h-full rounded-3xl overflow-hidden shadow-2xl mt-0 border border-white/50 bg-stone-200">
            <BeforeAfterSlider 
              beforeImage="/iris-before.png"
              afterImage="/iris-redesign.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
