// src/components/challenges/ChallengesHero.jsx (Typo et Cercles Revus)
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ListChecks, Edit3, Zap } from 'lucide-react';

// --- Composant pour les cercles concentriques animés (Animation revue) ---
const ConcentricCircles = ({ 
    colors = ["#EC4899", "#22D3EE", "#A78BFA"], // Couleurs HEX pures pour l'ombre
    baseSize = 250, // Un peu plus petit pour commencer
    count = 4, // Plus de cercles
    spread = 180
}) => {
  const circles = Array.from({ length: count }).map((_, index) => ({
    size: baseSize + index * spread,
    delay: index * 0.4,
    colorHex: colors[index % colors.length], // Couleur HEX pour le boxShadow
    borderColorClass: `border-${['pink', 'cyan', 'purple'][index % colors.length]}-500/50`, // Classe Tailwind pour la bordure
    duration: 4 + index * 0.7,
    initialOpacity: 0.05 + (index * 0.02), // Opacité initiale très faible
    animateOpacity: 0.3 - (index * 0.05)   // Opacité animée
  }));

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden -z-10">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className={`absolute ${circle.borderColorClass} rounded-full border`} // border au lieu de border-2
          style={{
            width: circle.size,
            height: circle.size,
            // Ombre portée subtile avec la couleur du cercle pour un effet de "lueur"
            boxShadow: `0 0 20px ${circle.colorHex}33, 0 0 35px ${circle.colorHex}22 inset`, 
          }}
          initial={{ scale: 0.5, opacity: circle.initialOpacity }}
          animate={{ 
            scale: [1, 1.02, 0.98, 1], 
            opacity: [circle.initialOpacity, circle.animateOpacity, circle.animateOpacity * 0.7, circle.initialOpacity],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: 'easeInOut', // Changé pour un mouvement plus doux
            // repeatType: 'loop' // Enlevé pour que l'opacité revienne à sa valeur initiale
            times: [0, 0.4, 0.7, 1] // Contrôle les étapes de l'animation
          }}
        />
      ))}
    </div>
  );
};


const ChallengesHero = () => {
  const containerVariants = { /* ... inchangé ... */ };
  const itemVariants = { /* ... inchangé ... */ };
  const heroBgUrl = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section 
      className="relative w-full text-center px-4 sm:px-6 overflow-hidden"
      style={{ 
        minHeight: 'calc(100vh - 80px)', 
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        paddingTop: '6rem', paddingBottom: '4rem',
      }} 
    >
      <div className="absolute inset-0 bg-cover bg-center -z-20" style={{ backgroundImage: `url(${heroBgUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0518]/60 via-[#0D0518]/80 to-[#0D0518] -z-10"/> 
      
      <ConcentricCircles />

      <motion.div 
        className="relative z-10 w-full max-w-4xl"
        variants={containerVariants} initial="hidden" animate="visible"
      >
        

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-none" 
          // Style du titre principal : Orbitron
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          
          <span 
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 py-2"
            // Style spécifique pour le mot "CHALLENGES" : Audiowide
            style={{ fontFamily: "'Audiowide', cursive", letterSpacing: '0.05em' }} 
          >
            CHALLENGES
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-gray-300 my-10 max-w-2xl mx-auto leading-relaxed" // my-10 pour plus d'espace
        >
          Plongez au cœur de l'innovation. Résolvez des défis stimulants, collaborez avec des esprits brillants, et façonnez l'avenir. Votre prochain grand accomplissement commence ici.
        </motion.p>

        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
        >
          <Link to="" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3.5 rounded-xl font-semibold text-md bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <ListChecks size={20}/> Découvrir les Challenges
            </button>
          </Link>
          <Link to="/propose-challenge/intro" className="w-full sm:w-auto">
            <button className="w-full px-8 py-3.5 rounded-xl font-semibold text-md bg-white/10 text-white border-2 border-pink-500 hover:bg-pink-500/20 hover:text-pink-300 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
               <Edit3 size={20}/> Proposer un Challenge
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChallengesHero;