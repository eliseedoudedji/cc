// src/pages/level-test/PreFlightCheckPage.jsx (Design Alternatif)
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LevelTestNavbar from '../../components/levels/LevelTestNavbar'; // Assurez-vous du chemin
import Footer from '../../components/pages/home/Footer'; 
import { AlertTriangle, CheckSquare, ListChecks, UserCheck, Eye, ShieldAlert, FileText, Check } from 'lucide-react';

const PreFlightCheckPage = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [hasAgreed, setHasAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const disciplineData = localStorage.getItem('selectedDisciplineForTest');
    if (disciplineData) {
      setSelectedDiscipline(JSON.parse(disciplineData));
    } else {
      navigate('/level-test/select-discipline');
    }
  }, [navigate]);

  const handleProceed = () => {
    if (hasAgreed && selectedDiscipline) {
      navigate(`/level-test/test-in-progress/${selectedDiscipline.id}`);
    }
  };

  const containerVariants = { /* ... */ 
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants = { /* ... */ 
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  if (!selectedDiscipline) {
    return <div className="min-h-screen bg-[#0D0518] flex items-center justify-center text-white">Chargement...</div>;
  }

  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100 flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
     <div className="">
     <LevelTestNavbar />
     </div>
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-12"> {/* pt-24 pour la navbar */}
        {/* Halos lumineux */}
        <div className="fixed -left-1/4 -top-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-purple-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(100px)', animationDuration: '8s' }}></div>
        <div className="fixed -right-1/4 -bottom-1/4 w-1/2 h-1/2 md:w-1/3 md:h-1/3 bg-pink-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(100px)', animationDelay: '2.5s', animationDuration: '9s' }}></div>

        <motion.div
          className="w-full max-w-3xl text-left" // max-w-3xl pour plus de largeur, text-left
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 ">
            <p className="text-sm sm:text-base text-purple-400 font-semibold tracking-wider mb-2" style={{fontFamily: "'Orbitron', sans-serif"}}>
            {selectedDiscipline.name}
            </p>
            
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mb-8 p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20"
          >
            <h2 className="flex items-center text-xl font-bold text-purple-300 mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>
                <ListChecks size={24} className="mr-3 text-purple-400"/> Votre Parcours d'Évaluation
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300 pl-2">
                <li><strong className="text-gray-100">Test de Compétences Actuel :</strong> L'évaluation que vous êtes sur le point de démarrer.</li>
                <li><strong className="text-gray-100">Revue par la Communauté (si applicable) :</strong> Certains de vos résultats pourront être analysés qualitativement par nos experts.</li>
                <li><strong className="text-gray-100">Vos Résultats et Carte CC :</strong> Découvrez votre performance et votre première Carte Challenge Continue sur votre tableau de bord.</li>
            </ol>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="mb-8 p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-pink-500/20"
          >
            <h2 className="flex items-center text-xl font-bold text-pink-400 mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>
                <ShieldAlert size={24} className="mr-3 text-pink-400"/> Consignes Importantes du Test
            </h2>
            <ul className="space-y-3 text-sm text-gray-300 pl-2">
                <li className="flex items-start"><UserCheck size={20} className="mr-3 mt-0.5 text-pink-300 flex-shrink-0"/>Ce test est individuel. Toute aide extérieure est proscrite.</li>
                <li className="flex items-start"><FileText size={20} className="mr-3 mt-0.5 text-pink-300 flex-shrink-0"/>L'utilisation d'outils d'IA (ChatGPT, Copilot, etc.) pour formuler vos réponses est interdite et entraînera une invalidation.</li>
                <li className="flex items-start"><Clock size={20} className="mr-3 mt-0.5 text-pink-300 flex-shrink-0"/>Durée estimée : <strong className="text-gray-100">{selectedDiscipline.estimatedTime || 'environ 45-60 minutes'}</strong>. Prévoyez ce temps sans interruption.</li>
                <li className="flex items-start"><Wifi size={20} className="mr-3 mt-0.5 text-pink-300 flex-shrink-0"/>Assurez-vous de disposer d'une connexion internet stable durant toute la durée du test.</li>
            </ul>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mb-8 p-6 bg-gradient-to-br from-cyan-600/10 to-purple-600/10 backdrop-blur-md rounded-xl shadow-xl border border-cyan-500/30"
          >
            <div className="flex items-start">
                <input 
                type="checkbox" 
                id="honestyPledge" 
                checked={hasAgreed}
                onChange={() => setHasAgreed(!hasAgreed)}
                className="h-5 w-5 border-2 border-cyan-400 rounded mt-1 shrink-0 cursor-pointer appearance-none relative"
                style={{
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  backgroundColor: hasAgreed ? '#EC4899' : 'transparent',
                  outline: 'none',
                  position: 'relative'
                }}
                />
                {hasAgreed && (
                  <Check 
                    size={14} 
                    className="absolute top-[0.3rem] left-[0.18rem] text-white pointer-events-none"
                  />
                )}
                
                <label htmlFor="honestyPledge" className="ml-4 block text-sm text-gray-200 cursor-pointer leading-relaxed">
                Je confirme avoir lu et compris les consignes. Je m'engage à réaliser ce test avec <strong className="text-cyan-300">honnêteté et intégrité</strong>, sans aucune forme d'assistance non autorisée.
                </label>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button 
              onClick={handleProceed}
              disabled={!hasAgreed}
              className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-md text-white transition-all duration-300 flex items-center justify-center gap-2
                         ${hasAgreed 
                           ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:opacity-90 hover:shadow-xl hover:shadow-pink-500/30 transform hover:scale-105' 
                           : 'bg-gray-700 cursor-not-allowed opacity-60'}`}
            >
              <CheckSquare size={20} /> Confirmer et Procéder
            </button>
            <Link 
              to="/level-test/select-discipline"
              className="w-full sm:w-auto"
            >
              <button 
                className="w-full px-8 py-3.5 rounded-xl font-semibold text-md text-gray-200 border-2 border-gray-600 hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Annuler
              </button>
            </Link>
            
          </motion.div>
        </motion.div>
      </main>
      
    </div>
  );
};
// Ajout des icônes manquantes
import { Clock, Wifi } from 'lucide-react';
export default PreFlightCheckPage;