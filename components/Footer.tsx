import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="min-h-screen lg:h-screen w-full snap-start flex flex-col justify-between bg-stone-900 text-white px-6 md:px-12 py-12 md:py-24">
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-sans font-light tracking-tighter leading-[0.9]">
            Ready to fill those <br/> empty beds?
          </h2>
          
          <a 
            href="https://cal.com/kleinian/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-fit flex items-center gap-4 text-2xl md:text-4xl hover:text-[#341CFF] transition-colors"
          >
            <span className="border-b-2 border-white pb-1 group-hover:border-[#341CFF] transition-colors">Book Free Consultation</span>
            <ArrowUpRight className="w-10 h-10 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end border-t border-stone-800 pt-8">
           <div className="space-y-2 mb-4 md:mb-0">
             <div className="font-sans font-bold tracking-widest text-lg uppercase">
               Kleinian<span className="font-light opacity-70">.Studio</span>
             </div>
             <p className="text-stone-500 text-sm max-w-xs">
               Behavioral Healthcare Design & Strategy.
               <br />Based in Los Angeles, serving globally.
             </p>
           </div>
           
           <div className="text-xs text-stone-700 font-mono uppercase tracking-widest">
              © 2025 KLEINIAN LLC.
           </div>
      </div>
    </footer>
  );
};

export default Footer;