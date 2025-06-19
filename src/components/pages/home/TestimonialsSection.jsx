// src/components/TestimonialsSection.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Challenge Continue transformed my approach to problem-solving. The community is incredibly supportive and the challenges are top-notch!",
    name: "Alexia Dupont",
    title: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    quote: "I've grown so much, both professionally and personally, since joining. The collaborative projects are a game-changer.",
    name: "Ben Carter",
    title: "UX Designer",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    quote: "The platform's grading system truly motivates you to push your limits. Highly recommended for anyone looking to upskill.",
    name: "Chloé Moreau",
    title: "Data Scientist",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const TestimonialsSection = () => {
  const [[page, direction], setPage] = useState([0, 0]); // page actuelle, direction du swipe

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex = ((page % testimonialsData.length) + testimonialsData.length) % testimonialsData.length;
  const currentTestimonial = testimonialsData[testimonialIndex];

  return (
    <div className="py-20 md:py-32 px-6 bg-[#0D0518]"> {/* Fond principal de la page */}
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Words from Our <span className="text-purple-400">Challengers</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Hear what our members have to say about their experience and growth on the platform.
          </p>
        </motion.div>

        <div className="relative h-96 md:h-80 flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full max-w-2xl bg-gradient-to-br from-[#1A0F2A]/80 to-[#10081D]/80 p-8 rounded-xl shadow-2xl border border-purple-500/30 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-200 mb-6 italic leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center justify-center">
                <img src={currentTestimonial.avatar} alt={currentTestimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-pink-500"/>
                <div>
                  <p className="font-semibold text-white">{currentTestimonial.name}</p>
                  <p className="text-sm text-purple-300">{currentTestimonial.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-10 z-20">
            <button onClick={() => paginate(-1)} className="p-3 bg-purple-600/50 hover:bg-purple-600/80 rounded-full text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 z-20">
            <button onClick={() => paginate(1)} className="p-3 bg-purple-600/50 hover:bg-purple-600/80 rounded-full text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        {/* Indicateurs de page (points) */}
        <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setPage([index, index > testimonialIndex ? 1 : -1])} // Permet de sauter à un slide
                    className={`w-3 h-3 rounded-full transition-all duration-300
                        ${testimonialIndex === index ? 'bg-pink-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'}`}
                />
            ))}
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;