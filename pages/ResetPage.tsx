import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight, Layout, Camera, Palette, Monitor } from 'lucide-react';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider';

const ResetPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('interior');
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  // Scroll spy for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['interior', 'media', 'identity', 'digital'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen selection:bg-sage-500 selection:text-white">
      <Navbar />

      {/* 1. Hero Section - Split Screen Hover */}
      <section className="relative h-screen w-full flex overflow-hidden">
        {/* Left: BEFORE */}
        <div className="w-1/2 h-full relative group border-r border-stone-800 bg-black">
          <div className="absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
             <img src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover grayscale blur-sm" alt="Before" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10vw] font-bold text-stone-800 tracking-tighter opacity-50 group-hover:opacity-20 transition-all duration-500">BEFORE</span>
          </div>
        </div>
        
        {/* Right: AFTER (Expands) */}
        <motion.div 
          className="absolute right-0 top-0 bottom-0 w-1/2 h-full z-10 bg-stone-900 overflow-hidden"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 opacity-80">
            <motion.img 
              style={{ scale: heroScale }}
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="After" 
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 pointer-events-none">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-sage-300 mb-4 block">The Great Reset</span>
            <h1 className="text-5xl md:text-7xl font-sans font-light leading-tight mb-8">
              Rapid transformation.<br/>Lasting results.
            </h1>
            <p className="text-xl font-light text-stone-200 max-w-lg mb-8">
              A comprehensive ecosystem to align your environment with your quality of care. 6–8 Weeks.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. The Thesis */}
      <section className="py-32 px-6 md:px-12 bg-stone-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-8">Fragmentation is the enemy of trust.</h2>
          <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed">
            Your clinical care is world-class. But if your facility looks outdated, your website is broken, and your branding is inconsistent, you lose the family before they even pick up the phone.
            <br/><br/>
            <span className="text-white">The Great Reset fixes everything at once. We do not patch holes; we rebuild the vessel.</span>
          </p>
        </div>
      </section>

      {/* 3. The Pillars (Sticky) */}
      <section className="relative w-full bg-stone-900 border-t border-stone-800">
        <div className="flex flex-col lg:flex-row max-w-8xl mx-auto">
          
          {/* Sticky Nav */}
          <div className="hidden lg:block w-1/4 h-screen sticky top-0 border-r border-stone-800 p-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-12 block">Chapters</span>
            <nav className="space-y-8">
              {[
                { id: 'interior', label: 'I. Interior', icon: Layout },
                { id: 'media', label: 'II. Media', icon: Camera },
                { id: 'identity', label: 'III. Identity', icon: Palette },
                { id: 'digital', label: 'IV. Digital', icon: Monitor },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-4 text-lg transition-all duration-300 ${activeSection === item.id ? 'text-sage-400 translate-x-4' : 'text-stone-500 hover:text-stone-300'}`}
                >
                  <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-sage-400' : 'opacity-0'}`} />
                  <span className="font-serif italic">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Scroll */}
          <div className="w-full lg:w-3/4">
            
            {/* Chapter I: Interior */}
            <div id="interior" className="min-h-screen py-24 px-6 md:px-16 border-b border-stone-800">
              <span className="text-sage-400 text-xs tracking-widest uppercase mb-4 block">Chapter I</span>
              <h3 className="text-4xl md:text-6xl font-sans font-light mb-12">HealSpace Refresh</h3>
              
              <div className="mb-16">
                <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=2072&auto=format&fit=crop"
                  afterImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-serif italic mb-4">Effortless Interiors</h4>
                  <p className="text-stone-400 font-light">
                    We curate psychology-backed stylescapes designed to reduce AMA rates and support healing. No more clinical beige.
                  </p>
                </div>
                <ul className="space-y-4">
                  {["10 Psychology-backed stylescapes", "Furniture sourcing (25% off retail)", "White-glove installation", "Donation logistics"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 rounded-full border border-sage-500 flex items-center justify-center text-sage-500"><Check className="w-3 h-3"/></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chapter II: Media */}
            <div id="media" className="min-h-screen py-24 px-6 md:px-16 border-b border-stone-800">
              <span className="text-sage-400 text-xs tracking-widest uppercase mb-4 block">Chapter II</span>
              <h3 className="text-4xl md:text-6xl font-sans font-light mb-12">HealSpace Media</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-12 h-[500px]">
                 <img src="https://images.unsplash.com/photo-1512918760532-3ad838081a74?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" alt="Interior Detail" />
                 <div className="grid grid-rows-2 gap-4 h-full">
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" alt="Lifestyle" />
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" className="w-full h-full object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity" alt="Architecture" />
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-serif italic mb-4">The Cinematic Lens</h4>
                  <p className="text-stone-400 font-light">
                    Your facility, captured like a high-end boutique hotel. We control the light, the angle, and the emotion.
                  </p>
                </div>
                <ul className="space-y-4">
                  {["Hero Photography (50+ shots)", "Matterport 3D Digital Twin", "60s Cinematic Video Tour", "Web-ready Floor Plans"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 rounded-full border border-sage-500 flex items-center justify-center text-sage-500"><Check className="w-3 h-3"/></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Chapter III: Identity */}
            <div id="identity" className="min-h-screen py-24 px-6 md:px-16 border-b border-stone-800 bg-[#1c1917]">
               <span className="text-sage-400 text-xs tracking-widest uppercase mb-4 block">Chapter III</span>
               <h3 className="text-4xl md:text-6xl font-sans font-light mb-12">HealSpace ID</h3>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                  <div className="aspect-square bg-stone-800 flex items-center justify-center border border-stone-700">
                    <span className="font-serif text-2xl italic">Logo</span>
                  </div>
                  <div className="aspect-square bg-sage-800 flex items-center justify-center border border-stone-700">
                    <span className="font-serif text-2xl italic text-sage-200">Color</span>
                  </div>
                  <div className="aspect-square bg-stone-100 flex items-center justify-center border border-stone-700">
                    <span className="font-serif text-2xl italic text-black">Type</span>
                  </div>
                  <div className="aspect-square bg-stone-900 flex items-center justify-center border border-stone-700">
                    <span className="font-serif text-2xl italic">Print</span>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-serif italic mb-4">A Brand You Can Wear</h4>
                  <p className="text-stone-400 font-light">
                    From the logo on the door to the uniform on the staff, we create a visual language that signals safety.
                  </p>
                </div>
                <ul className="space-y-4">
                  {["Logo Redesign & Guidelines", "Messaging Framework", "Uniform & Merch Design", "Social Media Templates"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 rounded-full border border-sage-500 flex items-center justify-center text-sage-500"><Check className="w-3 h-3"/></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

             {/* Chapter IV: Digital */}
             <div id="digital" className="min-h-screen py-24 px-6 md:px-16">
               <span className="text-sage-400 text-xs tracking-widest uppercase mb-4 block">Chapter IV</span>
               <h3 className="text-4xl md:text-6xl font-sans font-light mb-12">HealSpace Digital</h3>

               <div className="relative h-[400px] bg-stone-800 rounded-lg mb-16 border border-stone-700 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                  <div className="text-center z-20">
                    <h5 className="text-5xl font-serif italic mb-2">Kleinian.</h5>
                    <p className="text-xs uppercase tracking-[0.3em]">Digital Experience</p>
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
               </div>

               <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-serif italic mb-4">Identity That Converts</h4>
                  <p className="text-stone-400 font-light">
                    A blazing fast, mobile-optimized experience built on Webflow. Designed not just to inform, but to intake.
                  </p>
                </div>
                <ul className="space-y-4">
                  {["Custom 8-14 page Website", "Calendar/Intake Integration", "SEO Foundation", "Core Web Vitals A-Grade"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 rounded-full border border-sage-500 flex items-center justify-center text-sage-500"><Check className="w-3 h-3"/></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. The Investment */}
      <section className="py-32 px-6 md:px-12 bg-white text-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">The Economics of Design</h2>
            <p className="text-stone-500">Transparent pricing for the complete ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
             {/* Standalone */}
             <div className="p-8 border border-stone-200 text-stone-400">
               <h4 className="text-xl font-bold uppercase tracking-widest mb-8">Standalone Costs</h4>
               <ul className="space-y-4 mb-8 text-sm">
                 <li className="flex justify-between"><span>Interior Design & Sourcing</span> <span>$25,000+</span></li>
                 <li className="flex justify-between"><span>Architectural Photography/Video</span> <span>$15,000+</span></li>
                 <li className="flex justify-between"><span>Brand Identity Agency</span> <span>$40,000+</span></li>
                 <li className="flex justify-between"><span>Custom Web Development</span> <span>$45,000+</span></li>
                 <li className="flex justify-between"><span>Ongoing SEO/Setup</span> <span>$12,000+</span></li>
                 <li className="border-t border-stone-200 pt-4 flex justify-between font-bold text-stone-500"><span>Estimated Total</span> <span>~$137,000</span></li>
               </ul>
             </div>

             {/* Bundle */}
             <div className="p-12 bg-stone-900 text-white shadow-2xl scale-105 relative">
               <div className="absolute top-0 right-0 bg-sage-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">Best Value</div>
               <h4 className="text-2xl font-serif italic mb-2">The Great Reset</h4>
               <p className="text-stone-400 text-sm mb-8">Complete ecosystem transformation.</p>
               
               <div className="mb-8">
                 <span className="text-5xl md:text-6xl font-light">$100k</span>
                 <span className="text-stone-400 text-sm ml-2">Flat Fee + Furniture</span>
               </div>
               
               <ul className="space-y-3 mb-8 text-stone-300 text-sm">
                 <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sage-400"/> All 4 Pillars Included</li>
                 <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sage-400"/> 6-8 Week Turnaround</li>
                 <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sage-400"/> Dedicated Project Lead</li>
               </ul>

               <a 
                 href="https://cal.com/kleinian/30min" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block w-full text-center bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-sage-200 transition-colors"
                >
                 Secure Your Reset
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Results (ROI) */}
      <section className="py-24 bg-stone-100 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 px-6">
           <div>
             <span className="block text-4xl font-serif text-sage-600 mb-2">↑ Conv.</span>
             <p className="text-xs uppercase tracking-widest text-stone-500">Increase Conversion Rates</p>
           </div>
           <div>
             <span className="block text-4xl font-serif text-sage-600 mb-2">↓ CPA</span>
             <p className="text-xs uppercase tracking-widest text-stone-500">Lower Acquisition Cost</p>
           </div>
           <div>
             <span className="block text-4xl font-serif text-sage-600 mb-2">↓ AMA</span>
             <p className="text-xs uppercase tracking-widest text-stone-500">Reduce Clinical Discharge</p>
           </div>
           <div>
             <span className="block text-4xl font-serif text-sage-600 mb-2">$$$</span>
             <p className="text-xs uppercase tracking-widest text-stone-500">Pricing Power</p>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResetPage;