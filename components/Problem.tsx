import React from 'react';
import { motion } from 'framer-motion';
import RevealText from './ui/RevealText';
import { AlertCircle, TrendingDown, Users, DollarSign } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="w-full bg-stone-900 text-stone-100 py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <span className="block text-xs font-bold tracking-[0.2em] uppercase text-sage-400 mb-6">The Insight</span>
          
          <RevealText 
            text="The Cost of Inconsistency."
            tag="h2"
            className="text-4xl md:text-6xl font-serif mb-8"
          />
          
          <p className="text-xl text-stone-400 mb-12 font-light leading-relaxed border-l-2 border-sage-600 pl-6">
            Families shop 3–7 centers before choosing. If you don't look premium online, you lose the client before they even call.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sage-300">
                <DollarSign className="w-5 h-5" />
                <h3 className="font-bold text-lg">High CPA</h3>
              </div>
              <p className="text-sm text-stone-400">Paid search is expensive. Low conversion on unbranded sites burns capital.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sage-300">
                <AlertCircle className="w-5 h-5" />
                <h3 className="font-bold text-lg">High AMAs</h3>
              </div>
              <p className="text-sm text-stone-400">Sterile clinical environments lead to patients leaving Against Medical Advice.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sage-300">
                <TrendingDown className="w-5 h-5" />
                <h3 className="font-bold text-lg">No Pricing Power</h3>
              </div>
              <p className="text-sm text-stone-400">Visual inconsistency reads as operational inconsistency to payers and families.</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sage-300">
                <Users className="w-5 h-5" />
                <h3 className="font-bold text-lg">Broken Systems</h3>
              </div>
              <p className="text-sm text-stone-400">Scaling expands the business but often splinters the brand identity.</p>
            </div>
          </div>
        </div>

        {/* Right: Visual Abstraction */}
        <div className="order-1 lg:order-2 h-[500px] lg:h-[700px] relative rounded-lg overflow-hidden">
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0.8 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
             <img 
               src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop" 
               alt="Blurred clinical hallway" 
               className="w-full h-full object-cover grayscale opacity-60 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
               <span className="text-8xl md:text-9xl font-bold text-white/5 blur-sm tracking-tighter">CHAOS</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;