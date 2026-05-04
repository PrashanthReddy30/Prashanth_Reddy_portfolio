import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="py-32 px-6 w-full text-center relative overflow-hidden border-t border-white/5">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 space-y-12"
      >
        <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">
          Let's create <br className="md:hidden" />
          <span className="text-primary text-glow italic">cinematic excellence</span> together.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <motion.a
            href="mailto:chinnaprshanth06@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 hover:border-primary/50 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          >
            <Mail size={20} className="text-primary" /> Email Me
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/prashanthreddy"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 hover:border-primary/50 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          >
            <Linkedin size={20} className="text-primary" /> LinkedIn
          </motion.a>

          <motion.a
            href="https://wa.me/919666166967"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full glass border border-white/10 hover:border-primary/50 text-white font-semibold transition-all hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]"
          >
            <MessageCircle size={20} className="text-primary" /> WhatsApp
          </motion.a>
        </div>
      </motion.div>
      
      <div className="mt-32 text-silver/50 text-sm tracking-widest uppercase">
        © 2026 M. Prashanth Reddy | VFX Portfolio
      </div>
    </footer>
  );
};

export default Contact;
