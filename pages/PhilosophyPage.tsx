import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RevealText from '../components/ui/RevealText';
import { ArrowRight } from 'lucide-react';

const WireframeSphere: React.FC = () => {
  return (
    <div className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center opacity-60">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full border border-stone-800 rounded-full flex items-center justify-center relative"
      >
        <div className="absolute inset-0 border border-stone-800 rounded-full transform rotate-45 scale-90" />
        <div className="absolute inset-0 border border-stone-800 rounded-full transform -rotate-45 scale-90" />
        <div className="absolute inset-0 border border-stone-800 rounded-full transform rotate-12 scale-[0.8]" />
        <div className="absolute inset-0 border border-stone-400 rounded-full transform -rotate-12 scale-[0.8]" />
      </motion.div>
    </div>
  );
};

const MethodologyStep: React.FC<{ title: string; desc: string; num: string }> = ({ title, desc, num }) => (
  <div className="min-w-[85vw] md:min-w-[30vw] h-full flex flex-col justify-between p-8 md:p-12 border-r border-stone-300 bg-[#F5F5F0]">
    <div className="border-b border-stone-900 pb-4 mb-8">
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500">Step {num}</span>
      <h3 className="text-3xl font-serif italic mt-2">{title}</h3>
    </div>
    <p className="text-lg md:text-xl font-light leading-relaxed text-stone-800">
      {desc}
    </p>
  </div>
);

const PhilosophyPage: React.FC = () => {
  const containerRef = useRef(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: methodologyRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="bg-[#F5F5F0] min-h-screen selection:bg-stone-300 selection:text-black">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 relative">
        <div className="max-w-6xl mx-auto w-full">
          <RevealText
            text="We are in the business of building what does not yet exist, and improving what does."
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] text-stone-900 mb-12"
          />
        </div>
        <div className="absolute bottom-12 right-6 md:right-12 text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
          Kleinian / Est. 2025
        </div>
      </section>

      {/* 2. The Core Belief (Sticky) */}
      <section className="relative w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Sticky Left Side */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex items-center justify-center bg-[#F5F5F0] border-r border-stone-200 overflow-hidden">
             <WireframeSphere />
          </div>

          {/* Scrolling Right Side */}
          <div className="w-full lg:w-1/2 bg-white">
            <div className="px-8 py-24 md:p-24 min-h-screen flex flex-col justify-center">
              <span className="block text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-8">The Core Belief</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-12">Design is a Clinical Tool.</h2>
              
              <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed text-stone-600">
                <p>
                  Recovery is uncomfortable. The decision to seek help is often made in a moment of crisis. In this fragile state, environment is everything.
                </p>
                <p>
                  We believe that visual consistency is a proxy for operational stability. If a facility looks chaotic, the care feels chaotic. If the environment is sterile, the patient feels isolated.
                </p>
                <p>
                  We design to restore dignity. We create spaces—digital and physical—that signal safety, competence, and premium care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Methodology (Horizontal Scroll) */}
      <section ref={methodologyRef} className="h-[300vh] relative bg-[#F5F5F0] border-t border-stone-900">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          <div className="px-6 md:px-12 py-8 border-b border-stone-200 flex justify-between items-center bg-[#F5F5F0] z-20">
            <h2 className="text-2xl font-sans font-bold uppercase tracking-widest">Our Methodology</h2>
            <span className="text-stone-400 text-xs tracking-widest uppercase hidden md:block">Scroll to Explore</span>
          </div>
          
          <motion.div style={{ x }} className="flex flex-1 h-full items-center">
             <MethodologyStep 
               num="01"
               title="Research"
               desc="We do not guess. We analyze market gaps, AMA rates, and patient demographics to understand the specific pain points of your facility."
             />
             <MethodologyStep 
               num="02"
               title="Design Thinking"
               desc="We solve communication problems. Whether it's a website flow that reduces friction or a living room layout that encourages socialization, every decision is intentional."
             />
             <MethodologyStep 
               num="03"
               title="Strategic Direction"
               desc="We execute with precision. From brand voice to interior installation, we ensure the vision remains intact across every medium."
             />
              {/* Spacer for scroll feel */}
             <div className="min-w-[50vw] h-full bg-[#F5F5F0]" />
          </motion.div>
        </div>
      </section>

      {/* 4. The Collective (Dark Mode) */}
      <section className="bg-stone-900 text-stone-100 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
             <h2 className="text-5xl md:text-7xl font-serif italic mb-8 text-stone-100">The Intersection of Digital & Physical.</h2>
             <p className="text-xl text-stone-400 leading-relaxed font-light">
               Kleinian operates as a dynamic network of specialized creative service providers. We leverage cutting-edge digital tools alongside traditional physical craftsmanship.
             </p>
          </div>

          <div className="space-y-16 font-mono text-sm md:text-base">
            <div>
              <h4 className="text-sage-400 mb-6 uppercase tracking-widest border-b border-stone-800 pb-2">Digital Toolset</h4>
              <ul className="space-y-4 text-stone-300">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse" /> Generative AI & Machine Learning
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse delay-75" /> 3D Spatial Computing
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-sage-500 rounded-full animate-pulse delay-150" /> Cinema-Grade Color Grading
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sage-400 mb-6 uppercase tracking-widest border-b border-stone-800 pb-2">Physical Craft</h4>
              <ul className="space-y-4 text-stone-300">
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-white rounded-full" /> Bespoke Textile Fabrication
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-white rounded-full" /> Large Scale Printing
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-white rounded-full" /> Architectural Millwork
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Mission (Full Screen Image) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2599&auto=format&fit=crop" 
            alt="Meditative Space" 
            className="w-full h-full object-cover grayscale opacity-90" 
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 max-w-4xl px-6 md:px-12 text-center text-white">
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight">
            "We work exclusively with people and organizations whose missions improve the human experience. In a market crowded with noise, we help the true healers stand out."
          </p>
        </div>
      </section>

      {/* 6. Footer CTA */}
      <section className="py-32 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-5xl font-serif italic mb-12 text-stone-900">Align your outside with your inside.</h2>
        <a 
          href="https://cal.com/kleinian/30min" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm hover:bg-sage-600 transition-colors"
        >
          Book A Strategy Call <ArrowRight className="w-4 h-4" />
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default PhilosophyPage;