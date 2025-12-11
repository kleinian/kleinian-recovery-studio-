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
        <div className="mb-12">
            <span className="block text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-6">The Results</span>
            <RevealText 
              text="Rehabilitate your digital identity"
              tag="h2"
              className="text-4xl md:text-6xl font-sans font-light text-stone-900 tracking-tight"
            />
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

          {/* Right: Before/After Slider */}
          <div className="relative h-[400px] lg:h-full rounded-3xl overflow-hidden shadow-2xl mt-8 lg:mt-0 border border-white/50">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;