// src/components/CallToActionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  // Une image de fond qui évoque la collaboration, l'innovation ou le futur
  // Cherchez sur Unsplash : "team working future", "digital collaboration", "abstract technology"
  const ctaBackgroundImageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="relative py-24 md:py-40 px-6 overflow-hidden">
      {/* Couche d'image de fond avec superposition sombre */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${ctaBackgroundImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0518] via-[#0D0518]/80 to-[#0D0518]/50"></div>
      </div>

      {/* Halo lumineux subtil en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-600/20 rounded-full animate-pulse" style={{ filter: 'blur(180px)', animationDuration: '7s' }}></div>


      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 max-w-3xl mx-auto"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Be a Part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Innovation</span> and Impact the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Future</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Your ideas, skills, and passion can shape tomorrow. Join a vibrant community dedicated to pushing boundaries and creating meaningful change.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.5)" }} // Effet d'ombre lumineuse au survol
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 rounded-lg font-semibold text-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white shadow-lg"
        >
          Join Us Now <ArrowRight size={22} className="inline ml-2" />
        </motion.button>
      </div>
    </div>
  );
};

export default CallToActionSection;