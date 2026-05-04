import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonitorPlay, Code2, Sparkles } from 'lucide-react';

const skillsData = [
  {
    category: "VFX Tools",
    icon: MonitorPlay,
    items: [
      {
        name: "Silhouette",
        iconUrl: "https://www.google.com/s2/favicons?domain=borisfx.com&sz=128",
        usage: "It is the industry-standard software for high-end Rotoscoping and Paint.",
        learned: "Mastered advanced roto techniques, shape management, and non-destructive painting.",
        purpose: "Used to create clean mattes and remove unwanted objects from live-action footage."
      },
      {
        name: "Mocha",
        iconUrl: "https://www.google.com/s2/favicons?domain=borisfx.com&sz=128",
        usage: "A powerful Academy Award-winning tool for Planar Tracking.",
        learned: "Gained expertise in tracking difficult surfaces and exporting tracking data for compositing.",
        purpose: "Essential for screen replacements, stabilization, and accelerating the rotoscoping process."
      },
      {
        name: "Nuke (Basic)",
        iconUrl: "https://www.pngitem.com/pimgs/m/469-4695429_logo-nuke-the-foundry-hd-png-download.png",
        usage: "The world’s leading node-based digital compositing application.",
        learned: "Developed a foundation in node-based workflows, 2D tracking, and basic color grading.",
        purpose: "Used to merge CGI elements with live-action plates to create a seamless final shot."
      },
      {
        name: "Fusion",
        iconUrl: "https://www.google.com/s2/favicons?domain=blackmagicdesign.com&sz=128",
        usage: "A versatile 2D/3D compositing and motion graphics software.",
        learned: "Learned keying, particle systems, and integrating visual effects within a timeline.",
        purpose: "Popular for creating fast-paced visual effects and high-quality broadcast graphics."
      },
      {
        name: "Bojjo (Boujou)",
        iconUrl: "https://www.google.com/s2/favicons?domain=vicon.com&sz=128",
        usage: "A specialized tool used for workflow automation and production management.",
        learned: "Understood how to optimize VFX pipelines and automate repetitive manual tasks.",
        purpose: "Helps studios increase efficiency by managing data and streamlining artist workflows."
      }
    ]
  },
  {
    category: "Programming",
    icon: Code2,
    items: [
      {
        name: "Basic Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        usage: "A high-level, versatile programming language used worldwide.",
        learned: "Learned core logic, scripting basics, and how to automate simple tasks.",
        purpose: "The backbone of pipeline automation in VFX and the primary language for AI and web backends."
      },
      {
        name: "Microsoft Office",
        iconUrl: "https://www.google.com/s2/favicons?domain=office.com&sz=128",
        usage: "A standard suite of productivity applications for business operations.",
        learned: "Proficient in data organization via Excel and professional reporting via Word and PowerPoint.",
        purpose: "Used for project coordination, documentation, and managing professional communications."
      },
      {
        name: "Power BI",
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        usage: "A business analytics service by Microsoft for data visualization.",
        learned: "Learned to transform raw data into interactive dashboards and visual reports.",
        purpose: "Helps organizations make data-driven decisions by visualizing complex trends clearly."
      }
    ]
  },
  {
    category: "Future Tech",
    icon: Sparkles,
    items: [
      {
        name: "AI Content Engineer",
        iconUrl: "https://www.google.com/s2/favicons?domain=openai.com&sz=128",
        usage: "An emerging role focused on utilizing Generative AI for digital production.",
        learned: "Mastered prompt engineering and the integration of AI-generated assets into creative workflows.",
        purpose: "To significantly reduce production time while maintaining high-quality creative output."
      },
      {
        name: "Interactive Web Developer",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        usage: "Creating modern, high-performance websites with unique user experiences.",
        learned: "Focused on building responsive sites using frameworks like Vite/React and deploying via Netlify.",
        purpose: "To showcase portfolios and digital experiences to a global audience."
      }
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section className="py-24 px-6 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-white">Technical Arsenal</h2>
        <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full glow" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((categoryGroup, catIndex) => {
          const Icon = categoryGroup.icon;
          return (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="glass-dark p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col items-center mb-10 text-center">
                <Icon className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_10px_rgba(0,163,255,0.5)]" />
                <h3 className="text-2xl font-bold text-white tracking-wide">{categoryGroup.category}</h3>
              </div>
              
              <div className="space-y-4">
                {categoryGroup.items.map((skill, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSkill(skill)}
                    className="w-full flex items-center text-left text-silver hover:text-white group/btn transition-colors p-3 -mx-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10"
                  >
                    {skill.iconUrl ? (
                      <div className="w-6 h-6 mr-4 flex-shrink-0 bg-white/10 rounded overflow-hidden flex items-center justify-center p-0.5 group-hover/btn:scale-110 transition-transform">
                        <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-primary mr-4 shadow-[0_0_8px_rgba(0,163,255,0.8)] group-hover/btn:scale-150 transition-transform" />
                    )}
                    <span className="text-lg font-medium">{skill.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pop-up Modal for Details */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-dark p-8 md:p-12 rounded-3xl border border-primary max-w-2xl w-full relative neon-border shadow-[0_0_50px_rgba(0,163,255,0.3)]"
            >
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary text-white transition-colors text-xl font-bold"
              >
                ✕
              </button>
              
              <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-4">
                <h3 className="text-4xl md:text-5xl font-bold text-white text-glow">
                  {selectedSkill.name}
                </h3>
                {selectedSkill.iconUrl && (
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-xl p-2 flex items-center justify-center">
                    <img src={selectedSkill.iconUrl} alt={selectedSkill.name} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2">Usage</span>
                  <p className="text-silver text-lg font-light leading-relaxed">{selectedSkill.usage}</p>
                </div>
                
                <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2">What I Learned</span>
                  <p className="text-silver text-lg font-light leading-relaxed">{selectedSkill.learned}</p>
                </div>
                
                <div>
                  <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2">Purpose</span>
                  <p className="text-silver text-lg font-light leading-relaxed">{selectedSkill.purpose}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
