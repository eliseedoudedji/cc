// src/components/propose-challenge/ExistingChallengesTeaser.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ChallengeCard from '../challenges/ChallengeCard'; // Réutiliser la carte de challenge

// Données d'exemple, vous les fetcherez ou les passerez en props
const teaserChallengesData = [
  { id: "frontend-mastery", title: "Frontend Mastery", domain: "Programmation Frontend", shortDescription: "Build a complex, responsive web app...", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", difficulty: "Avancé" },
  { id: "agile-sprint", title: "Agile Sprint Sim", domain: "Gestion de Projet", shortDescription: "Manage a simulated project sprint...", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", difficulty: "Intermédiaire" },
  { id: "data-insights", title: "Data Insights", domain: "Analyse de Données", shortDescription: "Analyze a large dataset to uncover patterns...", imageUrl: "https://images.unsplash.com/photo-1551288049-aa38f71079b5?q=80&w=2070&auto=format&fit=crop", difficulty: "Avancé"},
];

const ExistingChallengesTeaser = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#0F071B]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-black mb-3 text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Inspirez-vous des <span className="text-cyan-400">Challenges Actuels</span>
          </h2>
          <p className="text-md text-gray-400 max-w-xl mx-auto">
            Découvrez quelques exemples de défis passionnants déjà proposés par notre communauté.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teaserChallengesData.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/challenges/discover">
            <button className="px-8 py-3 rounded-xl font-semibold text-md bg-white/10 text-cyan-400 border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
              Explorer Tous les Challenges
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExistingChallengesTeaser;