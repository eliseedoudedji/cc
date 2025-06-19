// src/components/challenges/FeaturedChallenges.jsx
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ChallengeCard from './ChallengeCard';
import { Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Données de challenges exemples (à remplacer par des données réelles ou un fetch API)
const allChallengesData = [
  { id: "frontend-mastery", title: "Frontend Mastery Challenge", domain: "Programmation Frontend", shortDescription: "Build a complex, responsive web application with modern UI/UX principles.", difficulty: "Avancé", duration: "4 semaines", participants: 150, gradeCC: "CC13+", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  { id: "agile-sprint", title: "Agile Sprint Simulation", domain: "Gestion de Projet", shortDescription: "Manage a simulated project sprint from planning to retrospective.", difficulty: "Intermédiaire", duration: "1 semaine", participants: 50, gradeCC: "CC12+", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" },
  { id: "data-insights", title: "Data Insights Discovery", domain: "Analyse de Données", shortDescription: "Analyze a large dataset to uncover hidden patterns and present your findings.", difficulty: "Avancé", duration: "3 semaines", participants: 75, imageUrl: "https://images.unsplash.com/photo-1551288049-aa38f71079b5?q=80&w=2070&auto=format&fit=crop" },
  { id: "secure-the-fort", title: "Secure the Digital Fort", domain: "Cybersécurité", shortDescription: "Identify and mitigate vulnerabilities in a simulated corporate network.", difficulty: "Expert", duration: "2 semaines", participants: 30, gradeCC: "CC14+", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"},
  { id: "ux-revamp", title: "UX Revamp Challenge", domain: "Design UX/UI", shortDescription: "Redesign an existing application to improve its user experience and accessibility.", difficulty: "Intermédiaire", duration: "3 semaines", participants: 100, imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"},
  { id: "api-architect", title: "API Architect Challenge", domain: "Backend & API", shortDescription: "Design and implement a scalable and secure RESTful API for a new service.", difficulty: "Avancé", duration: "4 semaines", participants: 60, gradeCC: "CC13+", imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"},
];

const categories = ["Tous", "Programmation Frontend", "Gestion de Projet", "Analyse de Données", "Cybersécurité", "Design UX/UI", "Backend & API"];

const FeaturedChallenges = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [showFilters, setShowFilters] = useState(false); // Pour le mobile

  const filteredChallenges = useMemo(() => {
    if (activeCategory === "Tous") return allChallengesData;
    return allChallengesData.filter(challenge => challenge.domain === activeCategory);
  }, [activeCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-[#0F071B]">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Explorez Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Univers de Challenges</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Découvrez une variété de défis conçus pour tester vos compétences, stimuler votre créativité et favoriser la collaboration.
          </p>
        </motion.div>

        {/* Filtres de Catégories */}
        <div className="mb-10 md:mb-12">
            <div className="md:hidden text-center mb-4">
                <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-4 py-2 bg-purple-600/30 text-purple-300 rounded-lg flex items-center justify-center mx-auto gap-2"
                >
                    <Filter size={16}/> Filtrer par Catégorie <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180': ''}`}/>
                </button>
            </div>
            <motion.div 
                className={`flex flex-wrap justify-center gap-2 md:gap-3 ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 md:max-h-full opacity-0 md:opacity-100'} overflow-hidden transition-all duration-500 ease-in-out`}
                initial={false} // Pour que l'animation de hauteur fonctionne bien
            >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300
                            ${activeCategory === category 
                              ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/20' 
                              : 'bg-[#1A0F2A] text-gray-400 hover:bg-purple-500/20 hover:text-purple-300'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {filteredChallenges.length > 0 ? (
            <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // S'anime lorsque la grille entre dans la vue
            viewport={{ once: true, amount: 0.1 }} // S'anime une fois, quand 10% est visible
            >
            {filteredChallenges.map((challenge, index) => (
                <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
            ))}
            </motion.div>
        ) : (
            <p className="text-center text-gray-500 py-10">Aucun challenge trouvé pour cette catégorie.</p>
        )}

        <div className="text-center mt-12 md:mt-16">
            <Link to="/challenges/discover">
                <button className="px-8 py-3 rounded-xl font-semibold text-md bg-white/5 text-cyan-400 border-2 border-cyan-400/50 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300">
                    Voir Tous les Challenges
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedChallenges;