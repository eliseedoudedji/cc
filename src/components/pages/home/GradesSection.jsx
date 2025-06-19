// src/components/GradesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Icônes pour les grades (vous pouvez en choisir d'autres)
import { Shield, ShieldCheck, Star, Crown } from 'lucide-react';

const gradeData = [
  {
    icon: <Shield size={20} className="text-cyan-400" />,
    title: "Basic Grade",
    description: "Upon your registration, you receive a basic level, the CC11. Engage in more challenges to earn more.",
    color: "cyan",
  },
  {
    icon: <ShieldCheck size={20} className="text-purple-400" />,
    title: "Intermediate Grade",
    description: "Unlock more visibility and the possibility to work on more impactful projects.",
    color: "purple",
  },
  {
    icon: <Star size={20} className="text-pink-400" />,
    title: "Senior Grade",
    description: "Confirm your position as a Leader at CC. Project monitoring and resource person in the CC community.",
    color: "pink",
  },
  {
    icon: <Crown size={20} className="text-yellow-400" />,
    title: "Master Grade",
    description: "Become a master of all subjects CC. Keep one foot ahead of technological advancements and global missions.",
    color: "yellow",
  },
];

const listItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const GradesSection = () => {
  return (
    <div className="py-20 md:py-32 px-6 bg-[#0F071B]"> {/* Même fond que FeaturesSection pour la cohérence */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Colonne de Gauche: Titre et Description */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Get Our <span className="text-pink-500">Grade CC</span> for More Opportunities
          </h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Progress through our tiered system by tackling challenges, collaborating, and leading. Each grade unlocks new benefits and recognition within the Challenge Continue ecosystem.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg font-semibold text-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition-opacity"
          >
            See More Details
          </motion.button>
        </motion.div>

        {/* Colonne de Droite: Liste des Grades avec la ligne verticale */}
        <div className="relative">
          {/* Ligne verticale centrale (un peu décalée pour l'esthétique) */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-purple-500/30 rounded-full hidden md:block"></div>

          {gradeData.map((grade, index) => (
            <motion.div
              key={grade.title}
              className="flex items-start mb-8 md:mb-10"
              variants={listItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              {/* Cercle avec Icône */}
              <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 border-${grade.color}-500 bg-[#1A0F2A] flex items-center justify-center mr-6`}>
                {grade.icon}
                {/* Petit point de connexion à la ligne pour les écrans md et plus */}
                <div className={`absolute left-full top-1/2 -translate-y-1/2 w-4 h-1 bg-${grade.color}-500 hidden md:block`}></div>
              </div>
              
              {/* Contenu du Grade */}
              <div>
                <h3 className={`text-xl font-bold mb-1 text-${grade.color}-400`} style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  {grade.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {grade.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GradesSection;