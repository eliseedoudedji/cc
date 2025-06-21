// src/components/grades/FinalGradesCTA.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Target, BarChartHorizontalBig } from 'lucide-react'; // Target pour le prochain grade

const FinalGradesCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.1 } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Image de fond abstraite et dynamique, évoquant l'ascension, le réseau
  const ctaBgUrl = "https://images.unsplash.com/photo-1634712282287-14ED57b9cc89?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Exemple: Nébuleuse abstraite

  return (
    <section 
      className="relative py-20 md:py-32 px-4 sm:px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(13, 5, 24, 0.95), rgba(13, 5, 24, 0.8) 40%, rgba(13, 5, 24, 0.6)), url(${ctaBgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Halos lumineux pour plus de profondeur */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-10 bg-gradient-to-r from-purple-700 via-transparent to-transparent -z-0 pointer-events-none" style={{filter: 'blur(80px)'}}></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-cyan-700 via-transparent to-transparent -z-0 pointer-events-none" style={{filter: 'blur(80px)'}}></div>
      
      <motion.div 
        className="container mx-auto relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Target size={52} className="text-pink-400 mx-auto animate-pulse" style={{animationDuration: '2.5s'}}/>
        </motion.div>

        <motion.h2 
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 text-white leading-tight" 
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Prêt à Viser <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Plus Haut</span> ?
        </motion.h2>

        <motion.p 
          variants={itemVariants} 
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Chaque challenge relevé vous rapproche du prochain grade. Explorez les défis disponibles et continuez votre ascension sur Challenge Continue.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
        >
          <Link to="/challenges/discover" className="w-full sm:w-auto">
            <button 
              className="w-full px-8 py-3.5 rounded-xl font-semibold text-md bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-white 
                         hover:shadow-xl hover:shadow-cyan-500/30 transform hover:scale-105 transition-all duration-300 
                         flex items-center justify-center gap-2"
            >
              <BarChartHorizontalBig size={20}/> Explorer les Challenges
            </button>
          </Link>
          
          {/* Ce bouton pourrait mener à une section du dashboard où l'utilisateur voit ses progrès / prochains objectifs */}
          <Link to="/dashboard/my-progress" className="w-full sm:w-auto"> 
            <button 
              className="w-full px-8 py-3.5 rounded-xl font-semibold text-md bg-white/10 text-white
                         border-2 border-pink-500 hover:bg-pink-500/20 hover:text-pink-300
                         transform hover:scale-105 transition-all duration-300 
                         flex items-center justify-center gap-2"
            >
               <Target size={20}/> Mon Plan de Progression
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalGradesCTA;