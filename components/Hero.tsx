import React from 'react';
import RevealText from './ui/RevealText';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-12 bg-stone-900">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for cinematic abstract video */}
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop" 
          alt="Architectural Abstract" 
          className="w-full h-full object-cover scale-110"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto text-white">
        <div className="max-w-4xl">
          <RevealText 
            text="Building what does not yet exist, and improving what does."
            tag="h1"
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8"
          />
          
          <div className="md:flex justify-between items-end border-t border-white/20 pt-8 mt-12">
            <RevealText 
              text="We identify and solve problems for behavioral healthcare centers through research, design thinking, and strategic direction."
              tag="p"
              className="text-stone-300 max-w-xl text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-0"
              delay={5}
            />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-sage-200 transition-colors duration-300"
            >
              Book Your Free Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;