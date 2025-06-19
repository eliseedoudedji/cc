// src/components/challenges/ChallengeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Users, Calendar, Target, Award, BarChart3 } from 'lucide-react'; // Icônes variées

const ChallengeCard = ({ challenge, index }) => {
  // Déterminer une couleur d'accent et une icône principale basée sur le domaine (exemple)
  const getDomainStyle = (domain) => {
    switch (domain?.toLowerCase()) {
      case 'tech':
      case 'programmation frontend':
      case 'backend & api':
      case 'cybersécurité':
        return { icon: <Zap size={16} className="text-cyan-400" />, color: 'cyan', borderColor: 'border-cyan-500/50', tagBg: 'bg-cyan-500/20', tagText: 'text-cyan-300' };
      case 'design':
      case 'design ux/ui':
        return { icon: <PenTool size={16} className="text-pink-400" />, color: 'pink', borderColor: 'border-pink-500/50', tagBg: 'bg-pink-500/20', tagText: 'text-pink-300' };
      case 'gestion de projet':
        return { icon: <Users size={16} className="text-purple-400" />, color: 'purple', borderColor: 'border-purple-500/50', tagBg: 'bg-purple-500/20', tagText: 'text-purple-300' };
      case 'analyse de données':
        return { icon: <BarChart3 size={16} className="text-yellow-400" />, color: 'yellow', borderColor: 'border-yellow-500/50', tagBg: 'bg-yellow-500/20', tagText: 'text-yellow-300' };
      default:
        return { icon: <Target size={16} className="text-gray-400" />, color: 'gray', borderColor: 'border-gray-500/50', tagBg: 'bg-gray-500/20', tagText: 'text-gray-300' };
    }
  };

  const domainStyle = getDomainStyle(challenge.domain);

  return (
    <motion.div
      className={`bg-gradient-to-br from-[#1A0F2A]/80 to-[#10081D]/90 rounded-xl shadow-xl 
                 border ${domainStyle.borderColor} hover:shadow-${domainStyle.color}-500/30
                 flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out group`}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" } }
      }}
    >
      {challenge.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img src={challenge.imageUrl} alt={challenge.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 text-xs font-semibold ${domainStyle.tagBg} ${domainStyle.tagText} rounded-full flex items-center gap-1.5`}>
            {domainStyle.icon}
            {challenge.domain || "Général"}
          </span>
          {challenge.difficulty && (
             <span className={`px-2 py-0.5 text-xs font-medium text-gray-300 bg-gray-700/50 rounded-full`}>
                {challenge.difficulty}
            </span>
          )}
        </div>
        <h3 
            className="text-xl font-bold text-white mb-2 leading-tight" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
            {challenge.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-grow">
          {challenge.shortDescription}
        </p>
        
        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mb-4">
            {challenge.duration && <div className="flex items-center"><Calendar size={14} className="mr-1.5 text-purple-400"/> {challenge.duration}</div>}
            {challenge.participants !== undefined && <div className="flex items-center"><Users size={14} className="mr-1.5 text-pink-400"/> {challenge.participants} participants</div>}
            {challenge.gradeCC && <div className="flex items-center"><Award size={14} className="mr-1.5 text-yellow-400"/> Grade: {challenge.gradeCC}</div>}
        </div>

        <Link 
            to={`/challenges/detail/${challenge.id}`} // Route vers la page de détail du challenge
            className="mt-auto w-full block text-center px-6 py-2.5 rounded-lg font-semibold text-sm 
                       bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white 
                       hover:from-pink-500 hover:to-purple-600 hover:shadow-lg hover:shadow-pink-500/20
                       transition-all duration-300"
        >
          Voir les Détails
        </Link>
      </div>
    </motion.div>
  );
};
// Ajouter PenTool à l'import de lucide-react si vous l'utilisez
import { PenTool } from 'lucide-react';
export default ChallengeCard;