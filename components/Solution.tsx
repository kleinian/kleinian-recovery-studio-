import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SolutionCardProps } from '../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions: SolutionCardProps[] = [
  {
    title: "Recovery Refresh",
    description: "Making interior design effortless. Psychology-backed interior stylescapes to reduce AMA rates and support healing.",
    features: ["Facility Assessment & 'Before' Analysis", "Furniture Sourcing (Up to 25% off retail)", "Logistics & Installation"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    index: 0
  },
  {
    title: "Recovery Media",
    description: "A stunning professional photo & video suite. Your facility, captured cinematically.",
    features: ["Hero Photography & Lifestyle Shots", "Matterport 3D Digital Twin", "60-second Cinematic Video Walkthrough"],
    image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?q=80&w=2670&auto=format&fit=crop",
    index: 1
  },
  {
    title: "Recovery ID",
    description: "Refreshed and aligned brand assets that build immediate trust.",
    features: ["Logo Redesign & Messaging Framework", "Color Systems & Typography", "Uniforms & Merchandise Design"],
    image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2670&auto=format&fit=crop",
    index: 2
  },
  {
    title: "Recovery Digital",
    description: "A new digital identity that converts.",
    features: ["Modern, Blazing Fast Website", "Brand-Aligned UX Copy", "Intake CRM Integration", "SEO Foundation"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    index: 3
  }
];

const SolutionCard: React.FC<{ data: SolutionCardProps }> = ({ data }) => {
  return (
    <div className="w-[85vw] md:w-[60vw] lg:w-[40vw] h-[70vh] flex-shrink-0 relative group overflow-hidden bg-white border-r border-stone-200">
      <div className="absolute inset-0">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/60 transition-colors duration-500" />
      </div>
      
      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
        <h3 className="text-3xl md:text-5xl font-serif italic mb-4">{data.title}</h3>
        <p className="text-lg md:text-xl font-light mb-8 max-w-md">{data.description}</p>
        
        <ul className="space-y-2 mb-8 border-t border-white/20 pt-6">
          {data.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm md:text-base opacity-80">
              <span className="w-1.5 h-1.5 bg-sage-400 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <Link to="/reset" className="flex items-center gap-2 uppercase tracking-widest text-xs font-bold hover:text-sage-300 transition-colors">
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="absolute top-8 right-8 text-white/20 font-serif text-6xl">
        0{data.index + 1}
      </div>
    </div>
  );
};

const Solution: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="solution" ref={targetRef} className="relative h-[300vh] bg-stone-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Intro Static Block */}
        <div className="w-[100vw] lg:w-[30vw] flex-shrink-0 px-12 md:px-24 flex flex-col justify-center z-10 bg-stone-100 h-full border-r border-stone-200">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-6">The Solution</span>
          <h2 className="text-5xl md:text-7xl font-sans font-light mb-6">The Great Reset.</h2>
          <p className="text-xl text-stone-500 font-light leading-relaxed mb-8">
            A comprehensive ecosystem to align your environment with your quality of care.
          </p>
          <Link to="/reset" className="w-fit bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-sage-600 transition-colors">
            Explore Ecosystem
          </Link>
        </div>

        {/* Scrolling Cards */}
        <motion.div style={{ x }} className="flex h-[70vh] items-center gap-0">
           {/* Spacer to start after the text block */}
           <div className="w-[10vw] flex-shrink-0" />
           {solutions.map((item, index) => (
             <SolutionCard key={index} data={item} />
           ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;