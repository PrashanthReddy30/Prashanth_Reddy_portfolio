import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 relative"
      >
        <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-40 bg-primary/20 blur-[100px] -z-10 rounded-full" />
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Profile Photo Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/50 neon-border flex-shrink-0"
          >
            <img 
              src="/M PrashanthReddy.jpg" 
              alt="M. Prashanth Reddy" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1 
              className="text-5xl md:text-7xl font-display font-black text-white tracking-tight mb-4"
            >
              M. Prashanth Reddy
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-silver font-light tracking-wide"
            >
              <span className="text-primary font-semibold text-glow">VFX Specialist</span> | Technical Artist
              <span className="hidden md:inline"> | </span>
              <span className="block md:inline mt-1 md:mt-0">Former Management</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="pt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-primary/10 border border-primary text-primary font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300 neon-border"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
