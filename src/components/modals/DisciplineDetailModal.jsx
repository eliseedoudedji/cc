// src/components/level-test/DisciplineDetailModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { X, CheckSquare, Brain } from 'lucide-react'; // Brain pour "Compétences Clés"

const DisciplineDetailModal = ({ discipline, onClose, onStartTest }) => {
  if (!discipline) return null;

  const navigate = useNavigate();

  const handleStartTest = (discipline) => {
    onStartTest(discipline);
    onClose();
    navigate(`/level-test/pre-flight-check/${discipline.id}`);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose} // Ferme en cliquant sur le fond
      >
        <motion.div
          className="bg-gradient-to-br from-[#10081D] to-[#1A0F2A] p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-500/30 text-gray-200"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur le modal lui-même
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {discipline.name}
            </h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            {discipline.longDescription}
          </p>

          <div className="mb-6">
            <h3 className="flex items-center text-lg font-semibold text-purple-300 mb-3" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <Brain size={20} className="mr-2" /> Compétences Évaluées :
            </h3>
            <div className="flex flex-wrap gap-2">
              {discipline.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {discipline.estimatedTime && (
            <p className="text-sm text-gray-400 mb-2">
                <strong>Temps estimé :</strong> {discipline.estimatedTime}
            </p>
          )}
           {discipline.difficulty && (
            <p className="text-sm text-gray-400 mb-6">
                <strong>Niveau :</strong> {discipline.difficulty}
            </p>
          )}

          <button 
            onClick={() => handleStartTest(discipline)}
            className="w-full mt-4 px-8 py-3 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                       hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
          >
            Démarrer le Test pour {discipline.name}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DisciplineDetailModal;