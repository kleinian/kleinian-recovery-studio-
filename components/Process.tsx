import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Discovery & Assessment", description: "We visit your facility, audit your digital presence, and identify the gaps costing you clients." },
  { number: "02", title: "Design & Sourcing", description: "We create photorealistic renderings, source furniture at wholesale, and redesign your brand assets." },
  { number: "03", title: "Installation & Launch", description: "We manage the logistics, install the interior refresh, and launch your new digital ecosystem." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="w-full py-32 px-6 md:px-12 bg-stone-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Rapid Transformation. Lasting Results.</h2>
           <p className="text-stone-500 uppercase tracking-widest text-sm">6–8 Weeks Average Turnaround</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-stone-300 transform -translate-x-1/2" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-start gap-8 md:gap-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 pl-12'}`}>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-stone-500 font-light">{step.description}</p>
                </div>

                {/* Center Marker */}
                <div className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border border-stone-300 flex items-center justify-center z-10">
                   <div className="w-2 h-2 bg-sage-500 rounded-full" />
                </div>
                
                {/* Number Side (Empty for visual balance on mobile it sits differently) */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16 pl-12' : 'md:pr-16 md:text-right hidden md:block'}`}>
                  <span className="text-6xl md:text-8xl font-serif text-stone-200 font-bold">{step.number}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;