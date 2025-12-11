import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Revenue Leak Audit", description: "We identify the core visual issues costing you $10,000+ per month in lost enrollments. You keep the full blueprint, risk-free. If we don't find it, we owe you dinner." },
  { number: "02", title: "Free Landing Page Build", description: "72-Hour Delivery. We build and launch your customized, high-performing landing page in under a week. We assume all the heavy lifting and launch costs so you see results fast." },
  { number: "03", title: "The 30-Day Payback", description: "We guarantee the new page will crush your current website's conversion rate. Only pay our fee if the page generates enough profit to pay for itself and ours within the first 30 days." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="min-h-screen lg:h-screen w-full snap-start flex items-center justify-center py-24 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-sans font-light tracking-tight mb-4">Rapid Transformation.</h2>
           <p className="text-stone-500 uppercase tracking-widest text-sm">30 Day Turnaround</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto lg:h-[50vh]">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:bg-white/70 transition-colors min-h-[300px]"
            >
              {/* Centered Number */}
              <span className="text-9xl font-sans font-bold text-stone-200/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none group-hover:text-sage-200/50 transition-colors">
                {step.number}
              </span>
              
              <div className="relative z-10 mt-auto text-center">
                <h3 className="text-2xl font-bold mb-4 text-stone-900">{step.title}</h3>
                <p className="text-stone-700 font-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;