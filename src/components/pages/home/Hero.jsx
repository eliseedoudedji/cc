// src/components/Hero.jsx (Focus sur l'Animation de Texte)
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- HOOK PERSONNALISÉ POUR L'EFFET MACHINE À ÉCRIRE (AFFINÉ) ---
const useTypewriter = (
  words, 
  typeSpeed = 100,    // Vitesse de frappe (ms par lettre)
  deleteSpeed = 60,   // Vitesse d'effacement (ms par lettre)
  delayBeforeDelete = 2000, // Pause avant d'effacer le mot complet
  delayBeforeTypeNext = 500 // Pause avant de taper le mot suivant
) => {
  const [wordIndex, setWordIndex] = useState(0);      // Index du mot actuel
  const [text, setText] = useState('');               // Texte affiché
  const [isDeleting, setIsDeleting] = useState(false);  // Mode effacement/écriture

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timer;

    if (isDeleting) {
      // --- MODE EFFACEMENT ---
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(prev => prev.substring(0, prev.length - 1));
        }, deleteSpeed);
      } else {
        // Le mot est complètement effacé
        setIsDeleting(false);
        setWordIndex(prev => prev + 1); // Passer au mot suivant
        // Petite pause avant de taper le nouveau mot
        timer = setTimeout(() => {}, delayBeforeTypeNext); 
      }
    } else {
      // --- MODE ÉCRITURE ---
      if (text.length < currentWord.length) {
        timer = setTimeout(() => {
          setText(prev => currentWord.substring(0, prev.length + 1));
        }, typeSpeed);
      } else {
        // Le mot est complètement écrit, pause puis active l'effacement
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      }
    }

    return () => clearTimeout(timer); // Nettoyage du timer
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delayBeforeDelete, delayBeforeTypeNext]);

  return text; // Retourne le texte à afficher
};


const Hero = () => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Mots pour l'animation "machine à écrire"
  const dynamicWords = ["AGAIN.", "NOW.", "WITH YOU."];
  // Ajustez les vitesses ici si besoin :
  // useTypewriter(mots, vitesseFrappe, vitesseEffacement, pauseApresEcriture, pauseApresEffacement)
  const typedText = useTypewriter(dynamicWords, 120, 70, 2500, 600);

  // Variantes pour l'animation d'entrée du reste du texte
  const introVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" }}),
  };
  const buttonDelay = 1.2; // Augmenter le délai pour que les boutons apparaissent après les titres fixes

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Fond avec image et dégradé */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0518]/80 via-[#0D0518]/90 to-[#0D0518]"></div>
      </div>
      {/* Halos lumineux */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-pink-600/20 rounded-full animate-pulse z-0" style={{ filter: 'blur(150px)', animationDuration: '5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-cyan-500/20 rounded-full animate-pulse z-0" style={{ filter: 'blur(120px)', animationDelay: '2s', animationDuration: '6s' }}></div>

      {/* Contenu Principal */}
      <div className="relative z-10 px-6">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-black leading-tight tracking-tight"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400" variants={introVariants} custom={0}>
            CHALLENGE
          </motion.span>
          <motion.span className="block" variants={introVariants} custom={1}>
            THE FUTURE.
          </motion.span>
          
          {/* --- PARTIE DYNAMIQUE DU TITRE "MACHINE À ÉCRIRE" --- */}
          <span className="block text-4xl sm:text-5xl md:text-7xl h-20 md:h-24" style={{ minWidth: '200px' }}> {/* Hauteur et largeur min pour éviter les sauts */}
            <AnimatePresence mode="popLayout"> {/* popLayout peut aider pour les changements de taille */}
              {typedText.split('').map((char, index) => (
                <motion.span
                  key={`${char}-${index}`} // Clé plus unique pour les caractères répétés
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.05 }} // Transition très rapide pour les lettres
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
            {/* Curseur de frappe */}
            <motion.span 
              className="inline-block w-1 h-12 md:h-16 bg-cyan-400 ml-1 align-bottom" // align-bottom pour mieux s'aligner
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
            />
          </span>
        </motion.h1>
        
        <motion.p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300" variants={introVariants} initial="hidden" animate="visible" custom={2}>
          Unleash your potential. Connect with innovators. Conquer new horizons. The next evolution of collaborative creation starts here.
        </motion.p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/login">
          <motion.button className="w-full sm:w-auto px-10 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transform transition-transform duration-300 flex items-center justify-center gap-2" initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay: buttonDelay}}>
            Start Your Challenge <ArrowRight size={20}/>
          </motion.button>
          </Link>
          <Link to="/challenges"><motion.button className="w-full sm:w-auto px-10 py-4 rounded-lg font-semibold text-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition-colors" initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} transition={{delay: buttonDelay + 0.15}}>
            Discover More
          </motion.button></Link>
        </div>

        <motion.p className="mt-12 text-sm text-gray-500" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: buttonDelay + 0.5}}>
          Trusted by innovators and pioneers worldwide.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;