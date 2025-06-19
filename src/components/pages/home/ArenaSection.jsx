// src/components/ArenaSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// URLs pour des avatars placeholder (vous les remplacerez par des vrais ou des icônes)
const avatarUrls = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
];

// Composant pour les cercles concentriques animés
const ConcentricCircles = () => {
  const circles = [
    { size: '500px', opacity: 'opacity-5', delay: 0 },
    { size: '700px', opacity: 'opacity-5', delay: 0.5 },
    { size: '900px', opacity: 'opacity-5', delay: 1 },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute border-2 border-purple-500/30 rounded-full ${circle.opacity}`}
          style={{ width: circle.size, height: circle.size }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: circle.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};


const ArenaSection = () => {
  return (
    <div className="relative py-20 md:py-32 px-6 overflow-hidden bg-[#0D0518]"> {/* Fond principal de la page */}
      <ConcentricCircles /> {/* Cercles animés en fond */}

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-black mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Join the Arena of <span className="text-cyan-400">Creative</span>, <span className="text-pink-500">Technical</span>, and <span className="text-purple-400">Bold</span> Minds.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Challenge Continue is a collaborative, inclusive, and stimulating space where creatives, enthusiasts, and the curious from all backgrounds can propose, tackle, or simply explore a wide variety of challenges. Find your place, get inspired, and progress at your own pace.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-10 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transform transition-transform duration-300"
        >
          Let's Do It Now
        </motion.button>

        {/* Avatars décoratifs (simplifié pour l'exemple) */}
        {/* Pour un effet plus proche de l'original, il faudrait les positionner individuellement */}
        <div className="mt-16 flex justify-center space-x-[-15px] sm:space-x-[-20px] opacity-50 pointer-events-none">
          {avatarUrls.slice(0, 5).map((url, index) => (
            <motion.img
              key={index}
              src={url}
              alt={`User ${index + 1}`}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-purple-800 object-cover"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArenaSection;