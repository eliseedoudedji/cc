// src/components/grades/GradeDescriptionCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react'; // Pour un éventuel bouton "Lire plus"

const GradeDescriptionCard = ({ grade }) => {
  if (!grade) return null;

  // Utiliser les couleurs du thème de la carte du grade pour des accents
  // Exemple: text-pink-400 si grade.cardTheme.accent est 'pink'
  // Pour la simplicité, j'utiliserai une couleur d'accent fixe pour le titre,
  // mais vous pourriez rendre cela dynamique basé sur grade.cardTheme.accent
  const accentColorClass = `text-${grade.cardTheme?.accent || 'purple-400'}`;
  // Assurez-vous que Tailwind peut générer ces classes dynamiquement,
  // ou listez toutes les possibilités dans votre tailwind.config.js safelist.
  // Plus simple: utilisez des couleurs fixes ou passez la classe complète.

  return (
    <motion.div 
      className="bg-gradient-to-br from-[#1A0F2A]/70 to-[#10081D]/70 p-6 md:p-8 rounded-2xl shadow-xl h-full flex flex-col border border-purple-500/20"
      // Animation d'entrée (peut être gérée par le parent `GradesExplanation`)
    >
      <div className="flex items-center mb-4">
        {/* Icône du grade (fournie dans grade.icon) */}
        <div className={`p-2 bg-${grade.cardTheme?.secondary || 'gray-700'}/30 rounded-full mr-3`}>
            {React.cloneElement(grade.icon, { 
                className: `${accentColorClass} opacity-90`, 
                size: 24 
            })}
        </div>
        <div>
          <p className={`text-xs font-semibold uppercase tracking-wider ${accentColorClass}`} style={{fontFamily: "'Orbitron', sans-serif"}}>
            GRADE {grade.level}
          </p>
          <h3 
            className="text-2xl md:text-3xl font-black text-white" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {grade.title}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow">
        {grade.description}
      </p>

      {/* Bouton optionnel si la description est très longue ou pour des actions spécifiques */}
      {/* 
      <div className="mt-auto pt-4 border-t border-purple-500/20">
        <button 
          className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-sm 
                     bg-${grade.cardTheme?.accent || 'purple-600'}/20 text-${grade.cardTheme?.accent || 'purple-300'}
                     border border-${grade.cardTheme?.accent || 'purple-500'}/50 
                     hover:bg-${grade.cardTheme?.accent || 'purple-600'}/30 hover:text-white
                     transition-all duration-300 flex items-center justify-center gap-2`}
        >
          <Info size={16}/> En Savoir Plus
        </button>
      </div>
      */}
    </motion.div>
  );
};

export default GradeDescriptionCard;