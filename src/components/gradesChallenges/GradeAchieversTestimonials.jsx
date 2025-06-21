// src/components/grades/GradeAchieversTestimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Medal } from 'lucide-react'; // Medal pour le titre

// Données de témoignages spécifiques aux grades atteints
const gradeAchieversData = [
  { 
    id: 1, 
    quote: "Atteindre le grade CC5 a été un véritable tournant. Les opportunités et la reconnaissance sont incroyables !",
    name: "Amina Diallo", 
    title: "Senior Developer, Grade CC5", 
    avatar: "https://i.pravatar.cc/150?img=20", // Nouveaux avatars
  },
  { 
    id: 2, 
    quote: "Le système de grades m'a constamment motivé à apprendre et à me dépasser. Chaque nouveau grade est une victoire.",
    name: "Lucas Bernard", 
    title: "Data Analyst, Grade CC4", 
    avatar: "https://i.pravatar.cc/150?img=21",
  },
  { 
    id: 3, 
    quote: "Ma Carte Challenger est plus qu'un badge, c'est le reflet de mon parcours et de mon expertise sur la plateforme.",
    name: "Priya Sharma", 
    title: "UX Lead, Grade CC6", 
    avatar: "https://i.pravatar.cc/150?img=22",
  },
];

// Mêmes variants de slide et logique de swipe que précédemment
const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }),
    center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0, scale: 0.95 }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;


const GradeAchieversTestimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7500); // Défilement automatique
    return () => clearInterval(timer);
  }, [page]);

  const testimonialIndex = ((page % gradeAchieversData.length) + gradeAchieversData.length) % gradeAchieversData.length;
  const currentTestimonial = gradeAchieversData[testimonialIndex];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#0D0518] relative overflow-hidden">
      {/* Effets de lumière subtils en fond */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-purple-600/5 to-transparent -z-0 pointer-events-none opacity-60"></div>
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-teal-600/5 to-transparent -z-0 pointer-events-none opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block p-3 bg-yellow-500/20 rounded-full mb-4">
            <Medal size={32} className="text-yellow-400" />
          </div>
          <h2 
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Paroles d'<span className="text-yellow-400">Accomplis</span>
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Ceux qui ont gravi les échelons partagent leur expérience et l'impact des Grades CC sur leur parcours.
          </p>
        </motion.div>

        <div className="relative h-80 md:h-72 flex items-center justify-center max-w-3xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page} 
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.3 }, scale: {duration: 0.3} }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] md:w-full p-6 md:p-8 text-center bg-[#1A0F2A]/70 backdrop-blur-lg rounded-2xl border border-yellow-500/20 shadow-xl"
            >
              <div className="flex justify-center mb-3"> {/* Étoiles un peu plus petites */}
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-md md:text-lg text-gray-200 mb-5 italic leading-relaxed h-24 overflow-y-auto custom-scrollbar">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 border-2 border-yellow-400"/>
                <div>
                  <p className="font-semibold text-sm md:text-base text-white">{currentTestimonial.name}</p>
                  <p className="text-xs md:text-sm text-yellow-300">{currentTestimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de Navigation (stylisés pour correspondre) */}
          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full text-gray-400 hover:text-white transition-colors z-20 -ml-1 sm:-ml-3 md:-ml-5"><ChevronLeft size={20} smSize={24} /></button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full text-gray-400 hover:text-white transition-colors z-20 -mr-1 sm:-mr-3 md:-mr-5"><ChevronRight size={20} smSize={24} /></button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
            {gradeAchieversData.map((_, index) => (
                <button key={index} onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])} className={`w-2 h-2 rounded-full transition-all duration-300 ${testimonialIndex === index ? 'bg-yellow-500 scale-125 w-2.5 h-2.5' : 'bg-gray-600 hover:bg-gray-500'}`}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GradeAchieversTestimonials;