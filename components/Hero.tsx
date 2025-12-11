import React, { useState, useEffect } from 'react';
import RevealText from './ui/RevealText';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = now.getFullYear() + 1;
      const targetDate = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
      const difference = targetDate - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen w-full snap-start flex items-end pb-12 pt-32 md:pb-32 px-6 md:px-12 bg-transparent pointer-events-none">
      <div className="relative z-20 w-full max-w-7xl mx-auto pointer-events-auto">
        <div className="max-w-5xl">
          
          {/* Countdown & Special Offer Label */}
          <div className="mb-6">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.7 }}
               className="font-mono text-xl md:text-2xl font-light tracking-tight flex gap-4 md:gap-8 mb-2 text-stone-800"
             >
                <div className="flex flex-col">
                  <span>{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Days</span>
                </div>
                <span className="opacity-30 text-stone-400">:</span>
                <div className="flex flex-col">
                  <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Hours</span>
                </div>
                <span className="opacity-30 text-stone-400">:</span>
                <div className="flex flex-col">
                  <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Mins</span>
                </div>
                <span className="opacity-30 text-stone-400">:</span>
                <div className="flex flex-col">
                  <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] md:text-xs text-stone-400 uppercase tracking-widest">Secs</span>
                </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-4 text-sage-600"
             >
               <span className="text-xs font-bold tracking-[0.2em] uppercase">New Years Special Offer</span>
             </motion.div>
          </div>

          <RevealText 
            text="10x your facility enrollment in under 30 days with no upfront cost."
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8 text-stone-900 tracking-tight"
          />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-stone-800/10 pt-8 mt-12 gap-8">
            <RevealText 
              text="Stop wasting money on ad spend to an outdated website. We will deploy a high-converting landing page for your behavioral healthcare facility within 3 days, 100% free. Pay after 30 days if it works."
              tag="p"
              className="text-stone-600 max-w-2xl text-base md:text-xl font-light leading-relaxed"
              delay={5}
            />
            
            <motion.a
              href="https://cal.com/kleinian/30min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto text-center bg-[#341CFF] text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs md:text-sm hover:bg-blue-700 transition-colors duration-300 flex-shrink-0"
            >
              Book Your Free Consultation
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;