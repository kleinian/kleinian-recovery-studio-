import React from 'react';
import { motion } from 'framer-motion';
import { Metric } from '../types';

const metrics: Metric[] = [
  { value: "40%", label: "Conversion Rate Increase", description: "From website visit to intake call." },
  { value: "3x", label: "ROI on Marketing", description: "Spend the same, get higher returns." },
  { value: "-25%", label: "Reduction in AMAs", description: "Spaces designed to support mood." },
  { value: "Premium", label: "Higher Revenue", description: "Your brand does the selling for you." }
];

const Results: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-stone-200 pt-12">
          {metrics.map((metric, index) => (
            <div key={index} className="group cursor-default">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="block text-6xl md:text-7xl font-serif text-stone-900 mb-4 group-hover:text-sage-600 transition-colors"
              >
                {metric.value}
              </motion.span>
              <h4 className="text-lg font-bold uppercase tracking-wide mb-2">{metric.label}</h4>
              <p className="text-stone-500 font-light text-sm">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;