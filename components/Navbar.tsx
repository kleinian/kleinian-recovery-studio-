import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to determine text color based on background (simplified logic)
  // On landing page, hero is dark (white text). On philosophy page, hero is light (needs dark text initially).
  // However, sticky nav is mix-blend-difference so it handles itself mostly.
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const isHome = location.pathname === "/";

  // Function to handle hash scrolling when on different pages
  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white"
      >
        <Link to="/" className="font-sans font-bold tracking-widest text-lg md:text-xl uppercase z-50">
          Kleinian<span className="font-light opacity-70">.Studio</span>
        </Link>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide">
          <Link to="/philosophy" className="hover:opacity-60 transition-opacity">Philosophy</Link>
          
          {isHome ? (
            <>
              <a href="#solution" className="hover:opacity-60 transition-opacity">The Reset</a>
              <a href="#process" className="hover:opacity-60 transition-opacity">Process</a>
            </>
          ) : (
             <Link to="/#solution" className="hover:opacity-60 transition-opacity">The Reset</Link>
          )}

          <a 
            href="https://cal.com/kleinian/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className="fixed inset-0 bg-stone-900 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
        initial={{ opacity: 0, pointerEvents: 'none' }}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      >
          <Link to="/philosophy" onClick={() => setIsOpen(false)} className="text-2xl text-white font-serif italic">Philosophy</Link>
          <a href="/#solution" onClick={() => setIsOpen(false)} className="text-2xl text-white font-serif italic">The Reset</a>
          <a href="/#process" onClick={() => setIsOpen(false)} className="text-2xl text-white font-serif italic">Process</a>
          <a href="https://cal.com/kleinian/30min" target="_blank" rel="noopener noreferrer" className="mt-8 border border-white/30 px-8 py-3 rounded-full text-white hover:bg-white hover:text-black transition-all">
            Book Consultation
          </a>
      </motion.div>
    </>
  );
};

export default Navbar;