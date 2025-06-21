// src/pages/propose-challenge/SubmissionSuccessPage.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProposeChallengeNavbar from '../../components/challenges/ProposeChallengeNavbar'; // Adaptez le chemin
import Footer from '../../components/pages/home/Footer'; // Adaptez le chemin
import { CheckCircle, Download, Mail, Home, PlusCircle } from 'lucide-react';

const SubmissionSuccessPage = () => {
  const [submittedChallenge, setSubmittedChallenge] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer les données du challenge soumis (optionnel, mais utile pour personnaliser)
    const data = localStorage.getItem('submittedChallengeData');
    if (data) {
      setSubmittedChallenge(JSON.parse(data));
      // Optionnel: supprimer l'item du localStorage après l'avoir utilisé
      // localStorage.removeItem('submittedChallengeData'); 
    } else {
        // Si pas de données, l'utilisateur est peut-être arrivé ici directement
        // Rediriger ou afficher un message par défaut
        console.warn("Aucune donnée de challenge soumise trouvée.");
    }
  }, []);

  const handleDownloadSummary = () => {
    // TODO: Logique de génération et de téléchargement du PDF
    // Pour l'instant, on simule avec une alerte
    if (submittedChallenge) {
      alert(`Simulation : Téléchargement du résumé pour "${submittedChallenge.title}".\n\nContenu:\n${JSON.stringify(submittedChallenge, null, 2)}`);
    } else {
      alert("Aucune donnée de challenge à télécharger.");
    }
  };

  // Variantes pour les animations
  const containerVariants = { /* ... (identique aux pages précédentes) ... */ };
  const itemVariants = { /* ... (identique aux pages précédentes) ... */ };
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
        scale: 1, 
        rotate: 0, 
        transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 } 
    },
  };


  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100 flex flex-col"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
     <div className='mb-12'>
     <ProposeChallengeNavbar />
     </div>
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 relative overflow-hidden">
        {/* Halos lumineux */}
        <div className="fixed -left-1/3 -top-1/3 w-2/3 h-2/3 bg-green-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)', animationDuration: '10s' }}></div>
        <div className="fixed -right-1/3 -bottom-1/3 w-2/3 h-2/3 bg-cyan-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)', animationDelay: '3s', animationDuration: '11s' }}></div>

        <motion.div
          className="w-full max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={iconVariants} className="mb-6">
            <CheckCircle size={72} className="text-green-400 mx-auto" strokeWidth={1.5}/>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-white" 
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Proposition <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Reçue !</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-md md:text-lg text-gray-300 mb-6 max-w-lg mx-auto leading-relaxed">
            Félicitations ! Votre idée de challenge{submittedChallenge ? ` "${submittedChallenge.title}"` : ""} a bien été soumise. Notre équipe va l'examiner avec attention.
          </motion.p>

          <motion.div 
            variants={itemVariants} 
            className="p-4 mb-8 bg-black/20 rounded-lg border border-purple-500/20 max-w-md mx-auto"
          >
            <p className="text-sm text-gray-400">
                Vous recevrez une notification par email et sur votre tableau de bord concernant son statut (généralement sous 48h).
            </p>
          </motion.div>
          
          {submittedChallenge && (
            <motion.div variants={itemVariants} className="mb-8">
                <button 
                onClick={handleDownloadSummary}
                className="px-6 py-3 rounded-xl font-semibold text-sm border-2 border-cyan-400 text-cyan-400 
                            hover:bg-cyan-400/10 transition-all duration-300 
                            flex items-center justify-center mx-auto gap-2"
                >
                <Download size={18}/> Télécharger le Récapitulatif de ma Proposition
                </button>
                <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
                    <Mail size={14}/> Un exemplaire vous a également été envoyé par email.
                </p>
            </motion.div>
          )}


          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-0 sm:flex sm:justify-center sm:items-center sm:gap-4">
            <Link to="/dashboard" className="w-full sm:w-auto block">
              <button 
                className="w-full px-8 py-3 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                           hover:shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300 
                           flex items-center justify-center gap-2"
              >
                <Home size={18}/> Mon Tableau de Bord
              </button>
            </Link>
            <Link to="/propose-challenge/intro" className="w-full sm:w-auto block">
              <button 
                className="w-full px-8 py-3 rounded-xl font-semibold text-md bg-white/10 text-gray-300
                           border border-gray-600 hover:bg-white/20 hover:text-white
                           transition-all duration-300 
                           flex items-center justify-center gap-2"
              >
                <PlusCircle size={18}/> Proposer un Autre Challenge
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SubmissionSuccessPage;