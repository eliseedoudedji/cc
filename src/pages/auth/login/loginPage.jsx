// src/pages/auth/login/LoginPage.jsx

import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Pour des transitions plus fluides
import Navbar from '../../../components/pages/home/Navbar';

// Données du carrousel (vous pouvez les personnaliser ou les réutiliser)
const testimonialsData = [
  {
    id: 1,
    quote: "Si vous survivez deux jours aux challenges, nous vous offrirons un poste de manager à MTN.",
    authorName: "Sarah Lemoine",
    authorTitle: "CEO, MTN Bénin",
    avatarUrl: 'https://i.pravatar.cc/150?u=sarahlemoine',
    companyLogoUrl: '/LogoWhite.png', // Assurez-vous que ce logo est dans public/
  },
  {
    id: 2,
    quote: "Ce challenge teste non seulement vos compétences techniques, mais aussi votre esprit d'équipe.",
    authorName: "Marc Petit",
    authorTitle: "Directeur de l'Innovation",
    avatarUrl: 'https://i.pravatar.cc/150?u=marcpetit',
    companyLogoUrl: '/LogoWhite.png',
  },
  {
    id: 3,
    quote: "Une expérience intense et gratifiante qui a lancé ma carrière de manière fulgurante.",
    authorName: "Julien Dubois",
    authorTitle: "Ancien Participant, Manager",
    avatarUrl: 'https://i.pravatar.cc/150?u=juliendubois',
    companyLogoUrl: '/LogoWhite.png',
  },
];

// Styles de base pour les inputs et labels (identiques à SignUpPage)
const inputBaseStyle = "w-full p-3 bg-[#1A0F2A] border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-gray-200 transition-all text-sm";
const labelBaseStyle = "block text-sm font-medium text-purple-300 mb-1";

const LoginPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonialsData[currentIndex];
  const handlePrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  const handleNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);

  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100 flex flex-col items-center justify-center  sm:p-6 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className=" container flex items-start justify-start gap-2 w-full px-6">
        <Link to="/" className="flex items-start">
                  {/* 
                    CORRECTION : 
                    Référencez l'image directement par son chemin depuis la racine du serveur.
                    Si LogoWhite.png est dans public/, le chemin devient /LogoWhite.png
                  */}
                  <img src="/logoWhite.png" alt="Challenge Continue Logo" className="w-24 object-contain" /> 
                </Link>
      </div>

      {/* Halos lumineux en fond */}
      <div className="fixed -left-40 -top-40 w-96 h-96 bg-cyan-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(120px)', animationDelay: '1s' }}></div>
      <div className="fixed -right-40 -bottom-40 w-96 h-96 bg-pink-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(120px)', animationDelay: '3s' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-[#10081D]/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 my-auto min-h-[600px] md:min-h-[650px]" 
      >
        {/* --- COLONNE DE GAUCHE : FORMULAIRE --- */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="w-full">
            <div className="mb-6 md:mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-black mb-1 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>Welcome Back</h1>
                <p className="text-purple-300 text-sm">Sign in to continue your journey.</p>
            </div>
            
            <form>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className={labelBaseStyle}>Email*</label>
                  <input type="email" id="email" className={inputBaseStyle} placeholder="you@example.com" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className={labelBaseStyle}>Password*</label>
                    <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300 hover:underline">Forgot password?</a>
                  </div>
                  <input type="password" id="password" className={inputBaseStyle} placeholder="••••••••" />
                </div>
              </div>             
              <div className="mt-8">
                {/* Pour l'exemple, le bouton ne fait rien, mais vous le connecteriez à une logique de connexion */}
                <button type="submit" className="w-full py-3 rounded-lg font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity text-white">
                  Sign In
                </button>
              </div>
              <div className="text-center mt-6 text-sm">
                <p className="text-gray-400">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* --- COLONNE DE DROITE : TÉMOIGNAGE --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-600/10 to-pink-600/5">
          <motion.div 
            className="max-w-md w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-center text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" strokeWidth={0} className="w-5 h-5" />)}
            </div>
            <AnimatePresence mode="wait">
                <motion.p 
                    key={activeTestimonial.id} 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }} 
                    transition={{ duration: 0.3 }} 
                    className="text-lg md:text-xl font-medium leading-relaxed h-28 text-gray-200"
                >
                    "{activeTestimonial.quote}"
                </motion.p>
            </AnimatePresence>
            <div className="flex items-center justify-center mt-6">
                <img src={activeTestimonial.avatarUrl} alt={activeTestimonial.authorName} className="w-12 h-12 rounded-full border-2 border-pink-400"/>
                <div className="ml-3 text-left">
                    <p className="font-semibold text-white text-sm">{activeTestimonial.authorName}</p>
                    <p className="text-xs text-purple-300">{activeTestimonial.authorTitle}</p>
                </div>
                <div className="border-l border-purple-500/40 h-8 mx-4"></div>
                <img src={activeTestimonial.companyLogoUrl} alt="Company Logo" className="w-16 h-auto filter brightness-0 invert opacity-80"/>
            </div>
            <div className="flex items-center justify-center mt-6 gap-3">
                <button onClick={handlePrev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"><ArrowLeft size={18} /></button>
                <div className="flex items-center gap-1.5">
                    {testimonialsData.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'w-2.5 h-2.5 bg-pink-500' : 'bg-purple-500/50 hover:bg-purple-400/50'}`} />)}
                </div>
                <button onClick={handleNext} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"><ArrowRight size={18} /></button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- MINI-FOOTER --- */}
      <div className="w-full max-w-4xl mx-auto mt-6 mb-4"> 
        <div className="border-t border-purple-500/20 pt-6 text-center">
          <p className="text-xs text-gray-500">
            Challenge Continue © {currentYear}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Designed with passion. Coded with precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;