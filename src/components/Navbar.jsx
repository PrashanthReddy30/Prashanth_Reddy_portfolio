import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Movies', id: 'movies' },
  { name: 'Journey', id: 'journey' },
  { name: 'Arsenal', id: 'skills' },
  { name: 'Education', id: 'education' },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-center md:justify-end py-2 px-2 md:px-6 gap-1.5 pointer-events-auto"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="px-2 py-1 md:px-3 md:py-1 rounded-full bg-primary/10 border border-primary text-primary font-bold tracking-wider uppercase hover:bg-primary hover:text-white transition-all duration-300 neon-border text-[7px] md:text-[8px] backdrop-blur-sm shadow-[0_0_8px_rgba(0,163,255,0.2)] whitespace-nowrap"
        >
          {item.name}
        </button>
      ))}
    </motion.nav>
  );
};

export default Navbar;
