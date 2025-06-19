// src/components/EngageAndGrowSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Icônes pour illustrer les points
import { UserPlus, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

const engagementPoints = [
  {
    icon: <UserPlus size={24} className="text-pink-400" />,
    title: "Become a Member",
    items: [
      "Create your free account in minutes.",
      "Join a global network of innovators.",
      "Access exclusive challenges and resources.",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image de collaboration/équipe
  },
  {
    icon: <Briefcase size={24} className="text-cyan-400" />,
    title: "Contribute to Projects",
    items: [
      "Choose projects that ignite your passion.",
      "Collaborate on real-world solutions.",
      "Showcase your skills and build your portfolio.",
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image de travail sur un projet
  },
  {
    icon: <TrendingUp size={24} className="text-purple-400" />,
    title: "Grow and Impact",
    items: [
      "Learn from experts and mentor others.",
      "Elevate your career and professional network.",
      "Make a tangible difference in the world.",
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Image de croissance/présentation
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};


const EngageAndGrowSection = () => {
  return (
    <div className="py-20 md:py-32 px-6 bg-[#0F071B]"> {/* Fond cohérent */}
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 md:mb-20"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Engage, <span className="text-pink-500">Create</span>, & <span className="text-cyan-400">Elevate</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dive into a world of opportunities. Become an active member, contribute your unique talents, and watch your impact grow.
          </p>
        </motion.div>

        <motion.div 
            className="space-y-16 md:space-y-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
          {engagementPoints.map((point, index) => (
            <motion.div
              key={point.title}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`} // Alterner la position de l'image
              variants={itemVariants} // L'item entier s'anime
            >
              {/* Colonne Texte */}
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-900/50 rounded-full mr-4 inline-block">
                    {point.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                    {point.title}
                  </h3>
                </div>
                <ul className="space-y-3 pl-2">
                  {point.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle size={20} className="text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colonne Image */}
              <motion.div 
                className="md:w-1/2"
                variants={imageVariants} // L'image a sa propre animation d'apparition
              >
                <img 
                  src={point.image} 
                  alt={point.title} 
                  className="rounded-xl shadow-2xl w-full h-auto object-cover max-h-80 md:max-h-96 
                             border-2 border-transparent hover:border-purple-500/50 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default EngageAndGrowSection;