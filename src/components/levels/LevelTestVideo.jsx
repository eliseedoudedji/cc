// src/components/level-test/LevelTestVideo.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

const LevelTestVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  // ID d'une vidéo YouTube expliquant le processus de test ou la plateforme
  const videoId = "your_youtube_video_id_here"; // REMPLACEZ CECI

  return (
    <section className="py-16 md:py-24 px-6 bg-[#0F071B] text-center"> {/* Fond légèrement différent */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-black mb-3 text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Comment ça <span className="text-cyan-400">Marche</span>
          </h2>
          <p className="text-md text-gray-400 max-w-xl mx-auto">
            Regardez une courte présentation de notre processus d'évaluation des compétences et de comment cela vous aide à vous développer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl 
                     border-2 border-purple-500/20 group cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <img 
            src={`https://img.freepik.com/homme-appareil-photo-camera-video-son-epaule_1276913-29529.jpg`} 
            alt="Video Tutorial Thumbnail" 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
            <div className="p-3 md:p-5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play size={28} className="text-white md:w-8 md:h-8" fill="white"/>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour la vidéo (identique à VideoSection.jsx précédent) */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div 
            initial={{scale: 0.7, opacity:0}} animate={{scale:1, opacity:1}}
            className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/4OdlLT7XZqY?autoplay=1&rel=0" 
              title="Présentation de l'évaluation de compétences" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button onClick={() => setShowVideo(false)} className="absolute top-2 right-2 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors" aria-label="Close video"><X size={20}/></button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default LevelTestVideo;