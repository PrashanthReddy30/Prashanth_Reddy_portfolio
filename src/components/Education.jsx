import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "BSc Degree",
    year: "2018",
    description: "A Bachelor of Science (BSc) is a globally recognised undergraduate academic degree awarded for studies in science, technology, mathematics, and related disciplines."
  },
  {
    degree: "Intermediate (MPC)",
    year: "2015",
    description: "The Mathematics, Physics, and Chemistry (MPC) group is the most popular science stream under the Telangana State Board of Intermediate Education."
  },
  {
    degree: "10th Class (SSC)",
    year: "2013",
    description: "The Telangana Board of Secondary Education (BSE Telangana) conducts the 10th class (SSC) examinations, which are critical for secondary education completion."
  }
];

const Education = () => {
  return (
    <section className="py-24 px-6 w-full max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-white">Education</h2>
        <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full glow" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300"
          >
            {/* Background Glow on hover */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white leading-tight">{item.degree}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm border border-primary/20 shadow-[0_0_10px_rgba(0,163,255,0.2)]">
                  {item.year}
                </span>
              </div>
              <p className="text-silver font-light text-sm leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
