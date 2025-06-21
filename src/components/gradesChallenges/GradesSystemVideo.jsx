// src/components/grades/GradesSystemVideo.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, Film } from 'lucide-react'; // Film pour le titre

const GradesSystemVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  // REMPLACEZ PAR L'ID de votre vidéo YouTube expliquant les Grades & Cartes
  const videoId = "your_youtube_video_id_explaining_grades"; 
  // Ou utilisez un placeholder si vous n'avez pas encore la vidéo
  // const videoId = "dQw4w9WgXcQ"; // Placeholder Rick Astley

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#0D0518] text-center"> {/* Fond principal */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="inline-block p-3 bg-pink-500/20 rounded-full mb-4">
            <Film size={32} className="text-pink-400" />
          </div>
          <h2 
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Le Système de <span className="text-pink-400">Grades en Action</span>
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez en vidéo comment notre système de progression fonctionne, comment gravir les échelons et quels avantages uniques votre Carte Challenger vous offre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl 
                     border-2 border-pink-500/25 group cursor-pointer" // Bordure d'accent rose
          onClick={() => setShowVideo(true)}
        >
          {/* Thumbnail de la vidéo */}
          <img 
            // Utiliser une miniature spécifique à votre vidéo si possible, sinon la miniature YouTube par défaut
            src={videoId === "your_youtube_video_id_explaining_grades" ? "https://img.freepik.com/photos-gratuite/gens-plan-moyen-obtenant-leur-diplome_23-2148950544.jpg" : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
            alt="Présentation Vidéo du Système de Grades" 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          {/* Bouton Play superposé */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
            <div className="p-4 md:p-5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full 
                            shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play size={28} className="text-white md:w-10 md:h-10" fill="white"/>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour la vidéo */}
      <AnimatePresence>
        {showVideo && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setShowVideo(false)} 
            >
            <motion.div 
                initial={{scale: 0.7, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.7, opacity:0}}
                className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            >
                <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
                title="Système de Grades et Carte Challenger"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                ></iframe>
                <button 
                onClick={() => setShowVideo(false)} 
                className="absolute top-2 right-2 md:top-3 md:right-3 p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                aria-label="Fermer la vidéo"
                >
                <X size={18} smSize={20}/>
                </button>
            </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
// Importer AnimatePresence si ce n'est pas déjà fait en haut du fichier
import { AnimatePresence } from 'framer-motion';
export default GradesSystemVideo;