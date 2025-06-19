// src/components/propose-challenge/ProposeChallengeHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lightbulb, ClipboardList, Edit, ArrowRight, Info } from 'lucide-react';

const ProposeChallengeHero = () => {
  const containerVariants = { /* ... (identique aux autres heroes) ... */ };
  const itemVariants = { /* ... (identique aux autres heroes) ... */ };
  const heroBgUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Image de collaboration, brainstorming

  return (
    <section 
      className="relative text-center px-4 sm:px-6 overflow-hidden"
      style={{ 
        minHeight: 'calc(90vh - 80px)', // Un peu moins haut que le hero principal
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        paddingTop: '6rem', paddingBottom: '4rem', // Ajustez selon navbar
        backgroundImage: `linear-gradient(to bottom, rgba(13, 5, 24, 0.85), rgba(13, 5, 24, 0.97) 70%, #0D0518), url(${heroBgUrl})`,
        backgroundSize: 'cover', backgroundPosition: 'center center',
      }} 
    >
      <motion.div 
        className="relative z-10 w-full max-w-3xl"
        variants={containerVariants} initial="hidden" animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Lightbulb size={52} className="text-yellow-400 mx-auto animate-twinkle"/>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 text-white leading-tight" 
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Donnez Vie à Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Idée de Challenge</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Avant de soumettre votre challenge à la communauté, une étape d'évaluation nous permet de bien le comprendre, le catégoriser, et lui attribuer un grade. C'est la clé pour garantir sa qualité et son impact !
        </motion.p>

        <motion.div 
          variants={itemVariants} 
          className="p-4 mb-8 bg-pink-500/10 border border-pink-500/30 rounded-lg max-w-xl mx-auto text-sm text-pink-200 flex items-center gap-3"
        >
          <Info size={40} className="flex-shrink-0"/>
          <span>Vous pourrez aussi initier et gérer vos propositions de challenges directement depuis votre tableau de bord personnel.</span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link to="/evaluate-challenge/evaluate"> {/* Lien vers le formulaire d'évaluation */}
            <button 
              className="px-10 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white 
                         hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 
                         flex items-center justify-center mx-auto gap-2"
            >
              <ClipboardList size={22}/> Évaluer Mon Idée de Challenge
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Ajouter l'animation twinkle dans votre CSS global (ex: index.css) si ce n'est pas déjà fait
// @keyframes twinkle { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; transform: scale(1.05); } }
// .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }

export default ProposeChallengeHero;