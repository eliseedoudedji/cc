// src/components/challenges/ChallengeTestimonials.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react'; // MessageSquareQuote pour le titre

// Données de témoignages spécifiques aux challenges
const challengeTestimonialsData = [
  { 
    id: 1, 
    quote: "Le 'Frontend Mastery Challenge' m'a poussé à sortir de ma zone de confort et à maîtriser des concepts que je n'aurais jamais explorés seul. Incroyable !",
    name: "Léa Martin", 
    title: "Participante, Frontend Mastery", 
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  { 
    id: 2, 
    quote: "Proposer mon propre challenge sur la plateforme a été une expérience enrichissante. Voir la communauté s'engager sur mon idée était très gratifiant.",
    name: "Karim Benzema (homonyme)", // Pour l'exemple ;)
    title: "Proposeur de Challenge, 'AI for Good'", 
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  { 
    id: 3, 
    quote: "Grâce au 'Secure The Fort Challenge', j'ai acquis des compétences pratiques en cybersécurité qui ont directement boosté ma carrière.",
    name: "Sofia Chen", 
    title: "Participante, Secure The Fort", 
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  { 
    id: 4, 
    quote: "L'aspect collaboratif des challenges en équipe est fantastique. On apprend énormément des autres et on construit des solutions innovantes ensemble.",
    name: "Tom Lefevre", 
    title: "Membre d'Équipe, 'Eco-Innovate Challenge'", 
    avatar: "https://i.pravatar.cc/150?img=16",
  },
];

// Mêmes variants de slide et logique de swipe que précédemment
const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? '100%' : '-100%', opacity: 0 }),
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;


const ChallengeTestimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000); // Défilement automatique toutes les 7 secondes
    return () => clearInterval(timer);
  }, [page]); // Important de dépendre de 'page' pour réinitialiser le timer si l'utilisateur navigue manuellement

  const testimonialIndex = ((page % challengeTestimonialsData.length) + challengeTestimonialsData.length) % challengeTestimonialsData.length;
  const currentTestimonial = challengeTestimonialsData[testimonialIndex];

  return (
    <section className="py-20 md:py-28 px-6 bg-[#0D0518] relative overflow-hidden"> {/* Fond principal de la page */}
      {/* Effets de lumière subtils en fond */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-600/5 to-transparent -z-0 pointer-events-none opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-cyan-600/5 to-transparent -z-0 pointer-events-none opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Retours d'<span className="text-purple-400">Expérience</span>
          </h2>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez l'impact de nos challenges à travers les mots de notre communauté.
          </p>
        </motion.div>

        <div className="relative h-80 md:h-72 flex items-center justify-center max-w-3xl mx-auto"> {/* Hauteur ajustée */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page} 
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 250, damping: 30 }, opacity: { duration: 0.3 } }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
              className="absolute w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-full p-6 md:p-8 text-center bg-[#1A0F2A]/60 backdrop-blur-md rounded-xl border border-purple-500/30 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-md md:text-lg text-gray-200 mb-6 italic leading-relaxed h-24 overflow-y-auto custom-scrollbar"> {/* Hauteur fixe et scroll si besoin */}
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 border-2 border-pink-500"/>
                <div>
                  <p className="font-semibold text-sm md:text-base text-white">{currentTestimonial.name}</p>
                  <p className="text-xs md:text-sm text-purple-300">{currentTestimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={() => paginate(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-gray-300 transition-colors z-20 -ml-2 sm:-ml-4"><ChevronLeft size={20} smSize={24} /></button>
          <button onClick={() => paginate(1)} className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full text-gray-300 transition-colors z-20 -mr-2 sm:-mr-4"><ChevronRight size={20} smSize={24} /></button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2.5">
            {challengeTestimonialsData.map((_, index) => (
                <button key={index} onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${testimonialIndex === index ? 'bg-pink-500 scale-125 w-3 h-3' : 'bg-purple-500/40 hover:bg-purple-400/60'}`}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeTestimonials;