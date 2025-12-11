import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from '../types';

const metrics: Metric[] = [
  { value: "40%", label: "Conversion Rate", description: "Increase from visit to intake call." },
  { value: "3x", label: "Marketing ROI", description: "Spend the same, get higher returns." },
  { value: "-25%", label: "AMA Rates", description: "Spaces designed to support mood." },
  { value: "Premium", label: "Higher Revenue", description: "Your brand does the selling for you." }
];

const Results: React.FC = () => {
  return (
    <section className="min-h-screen lg:h-screen w-full snap-start flex items-center justify-center py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="aspect-square bg-white/50 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between border border-white/60 hover:scale-105 transition-transform duration-300"
            >
              <span className="block text-5xl md:text-6xl font-sans font-light text-[#341CFF] tracking-tighter">
                {metric.value}
              </span>
              <div>
                <h4 className="text-lg font-bold uppercase tracking-wide mb-2 text-stone-900">{metric.label}</h4>
                <p className="text-stone-600 text-sm leading-snug">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;