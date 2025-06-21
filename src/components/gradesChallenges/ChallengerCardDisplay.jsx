// src/components/grades/ChallengerCardDisplay.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Wifi, MapPin, Phone, Mail, Globe, UserCircle, QrCode } from 'lucide-react'; // Icônes pour la carte

// Fonction pour générer un dégradé basé sur le thème
const getCardGradient = (theme) => {
  if (!theme) return "from-gray-700 via-gray-800 to-gray-900"; // Défaut
  // Exemple simple, à enrichir
  const colorMap = {
    gray: "from-slate-600 via-slate-700 to-slate-800",
    teal: "from-teal-500 via-teal-600 to-teal-700",
    cyan: "from-cyan-500 via-cyan-600 to-cyan-700",
    blue: "from-blue-500 via-blue-600 to-blue-700",
    indigo: "from-indigo-500 via-indigo-600 to-indigo-700",
    purple: "from-purple-500 via-purple-600 to-purple-700",
    fuchsia: "from-fuchsia-500 via-fuchsia-600 to-fuchsia-700",
    pink: "from-pink-500 via-pink-600 to-pink-700",
    red: "from-red-500 via-red-600 to-red-700",
    yellow: "from-yellow-400 via-yellow-500 to-yellow-600",
  };
  return colorMap[theme.primary] || colorMap.gray;
};

// Placeholder pour les données utilisateur - sera null pour la page de présentation
const defaultUserData = {
  photoUrl: null, // ou '/path/to/default-avatar.png'
  nom: " CHALLENGER",
  prenoms: "NOM ",
  email: "nom.prenom@example.com",
  siteWeb: "www.votresite.com",
  telephone: "+XX XXX XXX XXX",
  pays: "Pays",
  qrCodeUrl: "/images/placeholder-qr-code.png", // Un QR code générique dans /public/images
  userId: "CC-USER-000000"
};


const ChallengerCardDisplay = ({ grade, userData }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const user = userData || defaultUserData;

  const cardTheme = grade?.cardTheme || { primary: "gray", secondary: "gray", accent: "gray", pattern: null };
  const gradientClass = getCardGradient(cardTheme);
  
  // Styles pour les motifs de fond (placeholders, à implémenter en CSS ou SVG si désiré)
  // const patternStyle = cardTheme.pattern ? `pattern-${cardTheme.pattern}` : '';

  return (
    <div className="w-full max-w-xs mx-auto perspective"> {/* perspective pour l'effet 3D */}
      <motion.div
        className="relative w-full aspect-[1.586] cursor-pointer" // Ratio carte de crédit (85.6mm / 53.98mm)
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }} // Nécessaire pour le flip 3D
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* --- RECTO DE LA CARTE --- */}
        <motion.div
          className={`absolute inset-0 w-full h-full bg-gradient-to-br ${gradientClass} 
                     rounded-xl shadow-2xl p-4 md:p-5 flex flex-col justify-between
                     text-white overflow-hidden backface-hidden`} // backface-hidden cache le dos pendant l'animation
          // className={`... ${patternStyle}`} // Si vous utilisez des classes de motif
        >
          {/* Haut de la carte: Logo CC et Nom de la carte */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1.5">
                <img src="/LogoWhite.png" alt="CC Logo" className="w-7 h-7 opacity-90" /> 
                <span className="text-xs font-bold tracking-wider opacity-80" style={{fontFamily: "'Orbitron', sans-serif"}}>CHALLENGE CARD</span>
            </div>
            {/* Puce stylisée */}
            <div className={`w-8 h-6 bg-${cardTheme.accent}/30 rounded-sm border border-${cardTheme.accent}/50 opacity-80 flex items-center justify-center`}>
                <Wifi size={14} className={`text-${cardTheme.accent}`} />
            </div>
          </div>

          {/* Milieu: Informations Utilisateur */}
          <div className="flex items-center gap-3 mt-auto mb-2">
            {user.photoUrl ? (
                <img src={user.photoUrl} alt={`${user.prenoms} ${user.nom}`} className={`w-16 h-16 rounded-lg object-cover border-2 border-${cardTheme.accent}/50`} />
            ) : (
                <div className={`w-16 h-16 rounded-lg bg-${cardTheme.secondary}/30 flex items-center justify-center border-2 border-${cardTheme.accent}/50`}>
                    <UserCircle size={32} className={`text-${cardTheme.accent}/70`} />
                </div>
            )}
            <div className="text-left">
              <p className="text-lg font-bold leading-tight" style={{fontFamily: "'Orbitron', sans-serif"}}>{user.prenoms} {user.nom}</p>
              <p className="text-xs opacity-70">{user.email}</p>
            </div>
          </div>
          
          {/* Bas de la carte: QR Code et Grade */}
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] opacity-60 mb-0.5">Grade Actuel</p>
              <p className={`text-sm font-bold text-${cardTheme.accent}`} style={{fontFamily: "'Orbitron', sans-serif"}}>{grade.level} - {grade.title}</p>
            </div>
            {user.qrCodeUrl ? (
                <img src={user.qrCodeUrl} alt="QR Code" className="w-12 h-12 p-0.5 bg-white rounded-md"/>
            ) : (
                <div className="w-12 h-12 bg-white/80 rounded-md flex items-center justify-center">
                    <QrCode size={36} className="text-black/70"/>
                </div>
            )}
          </div>
          
          {/* Numéro de carte fictif stylisé */}
          <p className="text-center text-sm tracking-[0.2em] opacity-50 mt-1" style={{fontFamily: "'Orbitron', sans-serif"}}>
            0000 00CC {grade.level?.replace('CC','')}XXX XXXX
          </p>

        </motion.div>

        {/* --- VERSO DE LA CARTE --- */}
        <motion.div
          className={`absolute inset-0 w-full h-full bg-gradient-to-tl ${gradientClass} 
                     rounded-xl shadow-2xl p-4 md:p-5 flex flex-col justify-between 
                     text-white overflow-hidden backface-hidden`}
          style={{ transform: "rotateY(180deg)" }} // Le verso est initialement retourné
          // className={`... ${patternStyle}`}
        >
          {/* Bande magnétique stylisée */}
          <div className="h-10 bg-black/70 -mx-4 md:-mx-5 mt-4"></div>

          <div className="flex-grow flex flex-col justify-center items-center text-center">
            <img src="/LogoWhite.png" alt="Challenge Continue Logo" className="w-20 h-20 opacity-80 mb-3" />
            <p className="text-xs opacity-70" style={{fontFamily: "'Orbitron', sans-serif"}}>
                MEMBRE DE CHALLENGE CONTINUE
            </p>
          </div>

          <div className="text-left text-xs space-y-1 opacity-80">
            <p><strong className="font-semibold">ID Utilisateur:</strong> {user.userId}</p>
            {user.siteWeb && <p><strong className="font-semibold">Site Web:</strong> {user.siteWeb}</p>}
            {user.telephone && <p><strong className="font-semibold">Téléphone:</strong> {user.telephone}</p>}
            {user.pays && <p><strong className="font-semibold">Pays:</strong> {user.pays}</p>}
          </div>

          <p className="text-[10px] text-center opacity-50 mt-3">
            Cette carte est la propriété de Challenge Continue.
          </p>
        </motion.div>

        {/* Bouton Flip (optionnel, le clic sur la carte fonctionne déjà) */}
        <button 
            aria-label="Retourner la carte"
            className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-gray-300 hover:text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setIsFlipped(!isFlipped); }} // stopPropagation pour ne pas flipper deux fois
            style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}} // Pour que le bouton reste du bon côté
        >
            <RefreshCw size={12} />
        </button>
      </motion.div>
    </div>
  );
};

// Classes CSS pour la perspective et le backface-visibility (à mettre dans votre CSS global ou un <style jsx global>)
// Si vous utilisez Tailwind JIT, ces classes pourraient ne pas être nécessaires car Framer Motion gère le transform-style.
// Sinon, ajoutez ceci à votre index.css :
/*
.perspective {
  perspective: 1000px;
}
.backface-hidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
*/

export default ChallengerCardDisplay;