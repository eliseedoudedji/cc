import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BrainCircuit } from 'lucide-react';

const LevelTestHero = () => {
  // Utilisation de useMemo pour optimiser les performances des animations
  const { containerVariants, itemVariants, imageVariants } = useMemo(() => ({
    containerVariants: { 
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1, 
        transition: { 
          staggerChildren: 0.15, 
          delayChildren: 0.1,
          when: "beforeChildren"
        } 
      },
    },
    itemVariants: { 
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          duration: 0.6, 
          ease: [0.6, 0.05, -0.01, 0.9],
          type: "spring",
          stiffness: 100
        } 
      },
    },
    imageVariants: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }
    }
  }), []);

  // Image optimisée avec lazy loading
  const sideImageUrl = "https://img.freepik.com/portrait-belle-jeune-femme-afro-americaine-reussie-qui-aime-passer-moment-qualite-joyeux-tout-travaillant-dans-grand-bureau-moderne_530697-55255.jpg";

  // Points clés réutilisables
  const keyPoints = [
    "Découvrez vos points forts et axes d'amélioration.",
    "Accédez à des challenges spécifiquement adaptés à votre niveau.",
    "Obtenez une reconnaissance officielle avec votre Carte CC."
  ];

  return (
    <section 
      className="relative flex items-center py-16 md:py-24 px-4 sm:px-6"
      aria-labelledby="hero-heading"
    >
      {/* Effets d'arrière-plan optimisés */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-pink-700/5 rounded-full animate-pulse" 
             style={{ filter: 'blur(80px)', animationDuration: '12s' }} 
             aria-hidden="true" />
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-cyan-700/5 rounded-full animate-pulse" 
             style={{ filter: 'blur(80px)', animationDuration: '15s', animationDelay: '3s' }} 
             aria-hidden="true" />
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div 
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            aria-live="polite"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <BrainCircuit 
                size={48} 
                className="text-purple-400 mx-auto md:mx-0 opacity-90"
                aria-hidden="true"
              />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 text-white leading-tight" 
              style={{ fontFamily: "'Orbitron', sans-serif" }}
              id="hero-heading"
            >
              Test <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">rapide</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants} 
              className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              Bienvenue ! Pour personnaliser votre parcours sur Challenge Continue et vous donner accès aux défis les plus pertinents ainsi qu'à votre première <strong className="text-cyan-400">Carte CC</strong>, une évaluation de vos compétences est essentielle.
            </motion.p>
            
            <motion.ul 
              variants={containerVariants}
              className="space-y-3 mb-10 text-left"
              aria-label="Avantages de l'évaluation"
            >
              {keyPoints.map((point, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-center p-3 bg-white/5 rounded-lg backdrop-blur-sm"
                >
                  <CheckCircle 
                    size={20} 
                    className="text-green-400 mr-3 flex-shrink-0" 
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-200">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/level-test/select-discipline" 
                className="w-full sm:w-auto"
                aria-label="Commencer l'évaluation de compétences"
              >
                <button 
                  className="w-full px-10 py-3.5 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Commencer l'Évaluation 
                  <ArrowRight size={20} aria-hidden="true"/>
                </button>
              </Link>
              
              <button 
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-medium text-md bg-white/5 text-white hover:bg-white/10 transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
                onClick={() => {
                  const element = document.getElementById('how-it-works');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Comment ça marche ?
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hidden md:flex justify-center items-center w-full h-full" 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative p-3 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 shadow-2xl">
              <img 
                src={sideImageUrl} 
                alt="Illustration de l'évaluation de compétences" 
                className="rounded-xl w-full max-w-xl h-auto object-cover"
                loading="lazy"
                width={900}
                height={675}
              />
              <div 
                className="absolute -inset-6 bg-pink-500/20 rounded-full -z-10 opacity-50" 
                style={{ filter: 'blur(50px)' }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LevelTestHero;