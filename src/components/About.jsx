import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-6 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="glass-dark p-10 md:p-14 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
        
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 border-b border-primary/30 pb-4 inline-block">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg text-silver leading-relaxed font-light relative z-10">
          <p>
            I am a dedicated professional with a diverse background spanning <span className="text-primary font-medium">Business Development, Strategic Marketing, and Visual Effects (VFX)</span>. With a foundation in Computer Science and extensive experience in leadership roles, I bring a unique blend of analytical thinking and creative execution to every project.
          </p>
          <p>
            Currently, I am channeling my technical skills and artistic vision into the VFX Industry, where I contribute to cinematic storytelling through precision work in the <span className="text-white font-medium">Roto Department</span>. My journey from managing business operations to crafting high-quality visual effects reflects my adaptability and passion for continuous growth in the digital era.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
