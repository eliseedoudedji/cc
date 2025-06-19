// src/pages/auth/signup/SignUpPage.jsx

import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Données du carrousel (inchangées)
const testimonialsData = [
    {
      id: 1,
      quote: "Joining Challenge Continue was the best career decision I've made. The growth is real!",
      authorName: "Sarah Chen",
      authorTitle: "Lead Developer, Tech Solutions",
      avatarUrl: 'https://i.pravatar.cc/150?u=sarahchen', 
      companyLogoUrl: '/LogoWhite.png', 
    },
    {
      id: 2,
      quote: "The collaborative environment is unmatched. I've learned so much from fellow challengers.",
      authorName: "David Miller",
      authorTitle: "Founder, Innovate Hub",
      avatarUrl: 'https://i.pravatar.cc/150?u=davidmiller',
      companyLogoUrl: '/LogoWhite.png',
    },
    {
      id: 3,
      quote: "Pushing boundaries and achieving milestones together. This platform is truly unique.",
      authorName: "Lena Kim",
      authorTitle: "Product Manager, Future Labs",
      avatarUrl: 'https://i.pravatar.cc/150?u=lenakim',
      companyLogoUrl: '/LogoWhite.png',
    }
];

const inputBaseStyle = "w-full p-3 bg-[#1A0F2A] border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-gray-200 transition-all text-sm";
const labelBaseStyle = "block text-sm font-medium text-purple-300 mb-1";

const SignUpPage = () => {
  const [accountType, setAccountType] = useState('physique');
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

  const formFieldsVariantsLeft = { // Pour le champ nom de l'entreprise à gauche
    hidden: { opacity: 0, height: 0, marginTop: 0, y: -10, transition: { duration: 0.3, ease: "easeOut" } },
    visible: { opacity: 1, height: 'auto', marginTop: '1rem', y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };
  
  const formFieldsVariantsRight = { // Pour les champs à droite
    hidden: { opacity: 0, height: 0, marginTop: 0, paddingTop:0, y: -10, transition: { duration: 0.3, ease: "easeOut" } },
    visible: { opacity: 1, height: 'auto', marginTop: '1.5rem', paddingTop:'1.5rem', y: 0, transition: { duration: 0.4, ease: "easeInOut" } }, // mt-6 et pt-6
  };


  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="container flex items-start justify-start gap-2 w-full px-6">
              <Link to="/" className="flex items-start">
                        {/* 
                          CORRECTION : 
                          Référencez l'image directement par son chemin depuis la racine du serveur.
                          Si LogoWhite.png est dans public/, le chemin devient /LogoWhite.png
                        */}
                        <img src="/logoWhite.png" alt="Challenge Continue Logo" className="w-24 object-contain" /> 
                      </Link>
            </div>
      <div className="fixed -left-40 -top-40 w-96 h-96 bg-pink-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(120px)' }}></div>
      <div className="fixed -right-40 -bottom-40 w-96 h-96 bg-cyan-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(120px)', animationDelay: '2s' }}></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-[#10081D]/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-purple-500/20 my-auto min-h-[680px] md:min-h-[700px]" 
      >
        {/* --- COLONNE DE GAUCHE : FORMULAIRE --- */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <div className="w-full">
            <div className="mb-6 md:mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-black mb-1 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>Create Account</h1>
                <p className="text-purple-300 text-sm">Join the Challenge. Shape the Future.</p>
            </div>
            <div className="flex border-b border-purple-500/30 mb-6 md:mb-8">
                <button onClick={() => setAccountType('physique')} className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 relative ${accountType === 'physique' ? 'text-pink-400' : 'text-gray-400 hover:text-pink-300'}`}>Individual{accountType === 'physique' && <motion.div layoutId="auth-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-400"/>}</button>
                <button onClick={() => setAccountType('morale')} className={`flex-1 py-3 text-sm font-semibold transition-all duration-300 relative ${accountType === 'morale' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-300'}`}>Organization{accountType === 'morale' && <motion.div layoutId="auth-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"/>}</button>
            </div>
            <form>
                <div className="space-y-4">
                    <div><label className={labelBaseStyle}>Full Name*</label><input type="text" className={inputBaseStyle} placeholder="Your Full Name"/></div>
                    <div><label className={labelBaseStyle}>Email*</label><input type="email" className={inputBaseStyle} placeholder="you@example.com"/></div>
                    <div><label className={labelBaseStyle}>Country*</label><input type="text" className={inputBaseStyle} placeholder="Your Country"/></div>
                    <div><label className={labelBaseStyle}>Phone*</label><input type="tel" className={inputBaseStyle} placeholder="+1 234 567 890"/></div>
                    <div><label className={labelBaseStyle}>Password*</label><input type="password" className={inputBaseStyle} placeholder="••••••••"/></div>
                </div>             
                <div className="mt-6"><Link to="/onboarding"><button className="w-full py-3 rounded-lg font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity text-white">Create Account</button></Link></div>
                <div className="text-center mt-4 text-sm"><p className="text-gray-400">Already have an account?{' '}<Link to="/login" className="font-semibold text-cyan-400 hover:text-cyan-300 hover:underline">Sign In</Link></p></div>
            </form>
          </div>
        </div>

        {/* --- COLONNE DE DROITE : TÉMOIGNAGE ET CHAMPS ORGA (CORRIGÉE) --- */}
        <div className={`w-full md:w-1/2 flex flex-col items-center p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-600/10 to-pink-600/5 
                       justify-center`}> {/* JUSTIFY-CENTER TOUJOURS ICI */}
          
          {/* Conteneur interne pour gérer l'espacement et le glissement */}
          <motion.div 
            className="w-full max-w-md flex flex-col"
            animate={{ 
              translateY: accountType === 'morale' ? '-10%' : '0%', // Glisse un peu vers le haut en mode morale
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Bloc Témoignage */}
            <motion.div 
              className="text-center" // mb-auto enlevé
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center text-yellow-400 mb-3"><Star fill="currentColor" className="w-5 h-5" /><Star fill="currentColor" className="w-5 h-5" /><Star fill="currentColor" className="w-5 h-5" /><Star fill="currentColor" className="w-5 h-5" /><Star fill="currentColor" className="w-5 h-5" /></div>
              <AnimatePresence mode="wait">
                  <motion.p key={activeTestimonial.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-lg md:text-xl font-medium leading-relaxed h-28 text-gray-200">"{activeTestimonial.quote}"</motion.p>
              </AnimatePresence>
              <div className="flex items-center justify-center mt-6"><img src={activeTestimonial.avatarUrl} alt={activeTestimonial.authorName} className="w-12 h-12 rounded-full border-2 border-pink-400"/><div className="ml-3 text-left"><p className="font-semibold text-white text-sm">{activeTestimonial.authorName}</p><p className="text-xs text-purple-300">{activeTestimonial.authorTitle}</p></div><div className="border-l border-purple-500/40 h-8 mx-4"></div><img src={activeTestimonial.companyLogoUrl} alt="Company Logo" className="w-16 h-auto filter brightness-0 invert opacity-80"/></div>
              <div className="flex items-center justify-center mt-6 gap-3"><button onClick={handlePrev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"><ArrowLeft size={18} /></button><div className="flex items-center gap-1.5">{testimonialsData.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'w-2.5 h-2.5 bg-pink-500' : 'bg-purple-500/50 hover:bg-purple-400/50'}`} />)}</div><button onClick={handleNext} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 transition-colors"><ArrowRight size={18} /></button></div>
            </motion.div>
            
            {/* Champs conditionnels pour "Personne Morale" */}
            <AnimatePresence mode="wait">
              {accountType === 'morale' && (
                  <motion.div 
                    key="organizationFieldsRight" 
                    variants={formFieldsVariantsRight} // Utilise les variants pour gérer le marginTop et paddingTop
                    initial="hidden" 
                    animate="visible" 
                    exit="hidden" 
                    className="w-full" // Prend toute la largeur disponible dans son conteneur parent
                  >
                      <div className="space-y-4 p-4 bg-black/30 rounded-lg border border-cyan-500/30">
                      <AnimatePresence mode="wait">
                          {accountType === 'morale' && (<motion.div key="organizationNameField" variants={formFieldsVariantsLeft} initial="hidden" animate="visible" exit="hidden"><label className={labelBaseStyle}>Organization Name*</label><input type="text" className={inputBaseStyle} placeholder="Your Company"/></motion.div>)}
                      </AnimatePresence>
                          <div><label className={`${labelBaseStyle} text-cyan-300`}>Tax ID / IFU*</label><input type="text" className={`${inputBaseStyle} border-cyan-500/30 focus:ring-cyan-500`} placeholder="Your Organization's Tax ID"/></div>
                          <div><label className={`${labelBaseStyle} text-cyan-300`}>Main Activity Domain*</label><input type="text" className={`${inputBaseStyle} border-cyan-500/30 focus:ring-cyan-500`} placeholder="e.g., Software Development"/></div>
                      </div>
                  </motion.div>
              )}
            </AnimatePresence>
          </motion.div> {/* Fin du conteneur interne pour glissement */}
          <div className="flex items-start pt-3"><input id="terms" type="checkbox" className="form-checkbox h-4 w-4 bg-[#1A0F2A] border-purple-500/50 text-pink-500 focus:ring-pink-500 rounded mt-1 shrink-0"/><label htmlFor="terms" className="ml-2.5 block text-xs text-gray-400">I agree to the <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>.</label></div>

        </div> {/* Fin de la colonne de droite */}
      </motion.div>

      <div className="w-full max-w-5xl mx-auto mt-6 mb-4"> 
        <div className="border-t border-purple-500/20 pt-6 text-center">
          <p className="text-xs text-gray-500">Challenge Continue © {currentYear}. All rights reserved.</p>
          <p className="text-xs text-gray-600 mt-1">Designed with passion. Coded with precision.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;