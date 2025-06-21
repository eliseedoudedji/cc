// src/pages/propose-challenge/SubmittingChallengePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, UploadCloud } from 'lucide-react'; // Loader2 pour un spinner, UploadCloud pour l'idée d'envoi

const SubmittingChallengePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simuler un temps de traitement/envoi
    const timer = setTimeout(() => {
      // Récupérer les données soumises (optionnel, si besoin sur la page de succès)
      // const submittedData = localStorage.getItem('submittedChallengeData');
      
      // Rediriger vers la page de succès
      navigate('/propose-challenge/success');
    }, 3500); // 3.5 secondes de simulation

    return () => clearTimeout(timer); // Nettoyage au démontage
  }, [navigate]);

  // Variantes pour l'animation des éléments
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { 
        scale: 1, 
        opacity: 1,
        transition: { duration: 0.5, ease: "backOut"}
    },
    processing: {
        rotate: 360,
        transition: { duration: 1, ease: "linear", repeat: Infinity }
    }
  }

  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100 flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Halos lumineux pour l'ambiance */}
      <div className="fixed -left-1/3 -top-1/3 w-2/3 h-2/3 bg-pink-600/15 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)', animationDuration: '7s' }}></div>
      <div className="fixed -right-1/3 -bottom-1/3 w-2/3 h-2/3 bg-cyan-600/15 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)', animationDelay: '2.5s', animationDuration: '8s' }}></div>
      
      <motion.div
        className="text-center w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          {/* Icône qui tourne */}
          <motion.div
            variants={iconVariants}
            initial="initial"
            animate={["animate", "processing"]} // Applique les deux animations
          >
            <UploadCloud size={72} className="text-purple-400 mx-auto" />
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 text-white" 
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Envoi de Votre Proposition...
        </motion.h1>

        <motion.p 
          variants={itemVariants} 
          className="text-md text-gray-300 mb-10 max-w-sm mx-auto"
        >
          Nous traitons les informations de votre challenge. Veuillez patienter un instant.
        </motion.p>

        {/* Barre de progression stylisée (simulation) */}
        <motion.div 
          variants={itemVariants}
          className="w-full max-w-xs mx-auto h-2 bg-[#1A0F2A] rounded-full overflow-hidden border border-purple-500/30"
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "linear" }} // Durée correspond au timer de redirection moins une marge
          />
        </motion.div>
        
        {/* Optionnel: Un spinner alternatif */}
        {/* 
        <motion.div variants={itemVariants} className="mt-8">
          <Loader2 size={32} className="text-cyan-400 mx-auto animate-spin" />
        </motion.div>
        */}
      </motion.div>
    </div>
  );
};

export default SubmittingChallengePage;