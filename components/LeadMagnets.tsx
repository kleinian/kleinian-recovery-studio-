import React from 'react';
import { motion } from 'framer-motion';

const LeadMagnets: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-stone-900 text-stone-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Card 1: Consultation - Centered and Focused */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-stone-800 p-12 md:p-16 rounded-sm border border-stone-700 flex flex-col items-center text-center shadow-2xl"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-400 mb-6 block">The Audit</span>
            <h3 className="text-4xl md:text-5xl font-serif italic mb-8">Recovery ID Blitz</h3>
            <p className="text-stone-400 font-light text-lg leading-relaxed mb-10">
              We will identify 3 of the most obvious visual inconsistencies costing you enrollments in a free 20-minute creative session.
            </p>
          </div>
          
          <a 
            href="https://cal.com/kleinian/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-12 py-4 border border-sage-500 text-sage-300 hover:bg-sage-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold"
          >
            Claim Your Audit
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LeadMagnets;