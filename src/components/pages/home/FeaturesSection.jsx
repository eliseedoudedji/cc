// src/components/FeaturesSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Choisissez des icônes de lucide-react qui correspondent à vos fonctionnalités
import { Rocket, Users, Zap, Award } from 'lucide-react';

const featureData = [
  {
    icon: <Rocket size={32} className="text-pink-400" />,
    title: "Innovate Freely",
    description: "Unleash your creativity in a space designed for groundbreaking ideas.",
  },
  {
    icon: <Users size={32} className="text-purple-400" />,
    title: "Collaborate Globally",
    description: "Connect with a diverse community of thinkers and creators worldwide.",
  },
  {
    icon: <Zap size={32} className="text-cyan-400" />,
    title: "Accelerate Impact",
    description: "Bring your visions to life faster with cutting-edge tools and support.",
  },
  {
    icon: <Award size={32} className="text-pink-400" />, // Réutiliser une couleur pour la cohérence
    title: "Achieve Excellence",
    description: "Push boundaries, earn recognition, and redefine what's possible.",
  },
];

// Variantes pour l'animation d'apparition des cartes
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Délai progressif pour chaque carte
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturesSection = () => {
  return (
    <div className="py-20 md:py-32 px-6 bg-[#0F071B]"> {/* Fond légèrement différent pour la section */}
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }} // S'anime quand la section entre dans la vue
          viewport={{ once: true, amount: 0.3 }} // S'anime une fois, quand 30% est visible
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Let's Conquer The <span className="text-pink-500">World</span> Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our platform provides the tools and community to turn ambitious ideas into reality. 
            Discover how we empower innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#1A0F2A]/70 to-[#10081D]/70 p-8 rounded-xl shadow-2xl 
                         border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300
                         flex flex-col items-center text-center"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible" // S'anime quand la carte entre dans la vue
              viewport={{ once: true, amount: 0.2 }} // S'anime une fois
              custom={index} // Pour le délai progressif
            >
              <div className="p-4 bg-purple-900/50 rounded-full mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 
                className="text-xl font-bold mb-3 text-white" 
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;