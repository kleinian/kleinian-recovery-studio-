import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[50vh]">
        
        <div className="space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.9]">
            Ready to build what <br/> does not yet exist?
          </h2>
          
          <button className="group flex items-center gap-4 text-2xl md:text-3xl hover:text-sage-400 transition-colors">
            <span className="border-b border-white pb-1 group-hover:border-sage-400 transition-colors">Book Free Consultation</span>
            <ArrowUpRight className="w-8 h-8 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-24 pt-12 border-t border-stone-900">
           <div className="space-y-4 mb-8 md:mb-0">
             <div className="font-sans font-bold tracking-widest text-lg uppercase">
               Kleinian<span className="font-light opacity-70">.Studio</span>
             </div>
             <p className="text-stone-500 text-sm max-w-xs">
               Behavioral Healthcare Design & Strategy.
               <br />Based in Los Angeles, serving globally.
             </p>
           </div>

           <div className="flex gap-8 text-sm text-stone-400 uppercase tracking-wider">
             <a href="#" className="hover:text-white transition-colors">Instagram</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <span className="text-stone-700">|</span>
             <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
             <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
           </div>
        </div>

        <div className="text-center md:text-left mt-8 text-xs text-stone-800 font-mono">
           © 2025 KLEINIAN LLC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;