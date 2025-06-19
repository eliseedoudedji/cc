// src/pages/level-test/TestInProgressPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LevelTestNavbar from '../../components/levels/LevelTestNavbar';
import Footer from '../../components/pages/home/Footer';
import { HardHat, Clock, Map } from 'lucide-react';

const TestInProgressPage = () => {

  // Variantes pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
  };


  return (
    <div 
      className="min-h-[90vh] bg-[#0D0518] text-gray-100 flex flex-col justify-between"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mb-20">
        <LevelTestNavbar />
      </div>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center my-20 px-6 py-12 relative overflow-hidden">
        {/* Halos lumineux */}
        <div className="fixed -left-1/4 -top-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-yellow-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(100px)', animationDuration: '9s' }}></div>
        <div className="fixed -right-1/4 -bottom-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-purple-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(100px)', animationDelay: '3s', animationDuration: '10s' }}></div>

        <motion.div
          className="w-full max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div animate={pulseAnimation}>
                <HardHat size={64} className="text-yellow-400 mx-auto opacity-80" />
            </motion.div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Soon</span> !
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-purple-300 mb-1" style={{fontFamily: "'Orbitron', sans-serif"}}>
            Plateforme en construction
          </motion.p>

          <motion.p variants={itemVariants} className="text-md md:text-lg text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
            Nos équipes déploient toute leur énergie pour finaliser cette section. Les tests de niveau seront bientôt disponibles. Merci pour votre patience !
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center p-4 bg-black/20 rounded-lg border border-purple-500/20 mb-10 max-w-md mx-auto">
            <Clock size={20} className="text-cyan-400 mr-3 flex-shrink-0" />
            <span className="text-sm text-gray-300">En attendant, n'hésitez pas à explorer les autres fonctionnalités de la plateforme.</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto"> {/* Lien vers le tableau de bord */}
              <button 
                className="w-full px-8 py-3 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                           hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 
                           flex items-center justify-center gap-2"
              >
                <Map size={18}/> Voir ma Carte Challenger
              </button>
            </Link>
            {/* Optionnel: Bouton pour être notifié */}
            {/* <button 
              className="w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-md border-2 border-cyan-400 text-cyan-400 
                         hover:bg-cyan-400/10 transition-colors flex items-center justify-center gap-2"
            >
              <Bell size={18}/> Me Notifier
            </button> */}
          </motion.div>
        </motion.div>
      </main>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default TestInProgressPage;