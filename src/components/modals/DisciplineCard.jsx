// src/components/level-test/DisciplineCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Importer des icônes spécifiques si vous en avez pour chaque discipline
// Par exemple: Code, BarChart, Shield, Users, PenTool etc.
import { Code, BarChart3, ShieldCheck, Users, PenTool, Database } from 'lucide-react';

const DisciplineCard = ({ discipline, onClick }) => {
  // Associer une icône et une couleur d'accent à chaque discipline (exemples)
  const disciplineVisuals = {
    "Programmation Frontend": { icon: <Code size={32} className="text-cyan-400"/>, accent: "cyan-400", shadow: "shadow-cyan-500/30" },
    "Gestion de Projet": { icon: <Users size={32} className="text-pink-400"/>, accent: "pink-400", shadow: "shadow-pink-500/30" },
    "Analyse de Données": { icon: <BarChart3 size={32} className="text-yellow-400"/>, accent: "yellow-400", shadow: "shadow-yellow-500/30" },
    "Cybersécurité": { icon: <ShieldCheck size={32} className="text-red-400"/>, accent: "red-400", shadow: "shadow-red-500/30" },
    "Design UX/UI": { icon: <PenTool size={32} className="text-green-400"/>, accent: "green-400", shadow: "shadow-green-500/30" },
    "Backend & API": { icon: <Database size={32} className="text-purple-400"/>, accent: "purple-400", shadow: "shadow-purple-500/30" },
    // ... autres disciplines
  };

  const visual = disciplineVisuals[discipline.name] || { icon: <Code size={32} className="text-gray-400"/>, accent: "gray-400", shadow: "shadow-gray-500/30" };

  return (
    <motion.div
      className={`bg-gradient-to-br from-[#1A0F2A]/80 to-[#10081D]/90 p-6 rounded-xl 
                 border border-transparent hover:border-${visual.accent} 
                 shadow-lg hover:${visual.shadow} cursor-pointer
                 transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col`}
      onClick={() => onClick(discipline)}
      whileHover={{ scale: 1.03 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
    >
      <div className={`p-3 bg-${visual.accent}/10 rounded-full self-start mb-4`}>
        {visual.icon}
      </div>
      <h3 
        className={`text-xl font-bold mb-2 text-white`} 
        style={{ fontFamily: "'Orbitron', sans-serif" }}
      >
        {discipline.name}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">
        {discipline.shortDescription}
      </p>
      <div className={`mt-4 text-xs font-semibold text-${visual.accent}`}>
        Évaluer mes compétences →
      </div>
    </motion.div>
  );
};

export default DisciplineCard;