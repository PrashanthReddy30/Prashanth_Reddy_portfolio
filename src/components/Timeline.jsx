import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, School, Target, MessageSquare } from 'lucide-react';

const timelineData = [
  {
    role: "Roto Artist",
    company: "PhantomFX",
    description: "PhantomFX (Phantom Digital Effects Limited) is a top-tier Indian visual effects (VFX) and animation studio headquartered in Chennai. Established in 2011, it has grown from a 4-artist team to a prolific studio of over 600 members.",
    logo: "https://phantomfx.com/wp-content/uploads/sites/45/2021/02/pixoo-black-logo.png",
    icon: Briefcase
  },
  {
    role: "Assistant Manager",
    company: "RIFT",
    fullName: "Rotomaker International Film & Television Institute",
    description: "A prominent media and film school based in Hyderabad, India. It provides hands-on professional training across multiple creative disciplines to help students build careers in the entertainment industry.",
    logo: "https://riftifilmschool.com/wp-content/uploads/2025/11/Untitled-1-copy.jpg",
    icon: School
  },
  {
    role: "Business Development Manager (BDM)",
    company: "Lakme Academy",
    description: "Growth strategy, client relations, and identifying new market opportunities.",
    logo: "https://professionalbeauty.in/wp-content/uploads/2024/01/6-Jan.png",
    icon: Target
  },
  {
    role: "Marketing",
    company: "Rotomaker Institute",
    description: "Market analysis, campaign strategy, and professional communication.",
    logo: "https://rotomaker.com/img/rmlogo3.png",
    icon: MessageSquare
  }
];

const Timeline = () => {
  return (
    <section className="py-24 px-6 w-full max-w-6xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl font-display font-bold text-white">Professional Journey</h2>
        <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full glow" />
      </motion.div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
                {/* Desktop layout logic */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:order-1' : 'md:order-3'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-dark p-6 md:p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">{item.role}</h3>
                        <p className="text-primary font-semibold text-sm tracking-wide mt-1">{item.company}</p>
                      </div>

                      <div className="w-24 h-12 bg-white/10 rounded-lg p-2 flex items-center justify-center overflow-hidden">
                        <img src={item.logo} alt={item.company} className="w-full h-full object-contain" />
                      </div>

                      <p className="text-silver text-sm font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon Node */}
                <div className="z-10 absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,163,255,0.5)] border-2 border-black"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-[45%] md:order-2" />
              </div>
            );
          })}
        </div>

        {/* Mobile vertical line fallback (left aligned) */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20 md:hidden ml-4" />
      </div>
    </section>
  );
};

export default Timeline;
