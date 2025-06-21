// src/pages/propose-challenge/EvaluateChallengeFormPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProposeChallengeNavbar from '../../components/challenges/ProposeChallengeNavbar'; // Adaptez le chemin
import Footer from '../../components/pages/home/Footer'; // Adaptez le chemin
import { FileText, DollarSign, Users, Clock, CalendarDays, Settings, AlertTriangle, ListPlus, ArrowRight } from 'lucide-react';

// Styles de base pour les inputs et labels (peut être mis dans un fichier utils)
const inputBaseStyle = "w-full p-3 bg-[#1A0F2A] border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-gray-200 transition-all text-sm";
const labelBaseStyle = "block text-sm font-semibold text-purple-300 mb-1.5";
const sectionTitleStyle = "text-2xl font-bold text-cyan-400 mb-4 pb-2 border-b border-cyan-500/30 flex items-center gap-2";

const EvaluateChallengeFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    detailedDescription: '',
    mainDomain: '',
    subCategories: '', // Pourra être un tableau ou une chaîne de tags
    challengeType: 'individual',
    estimatedDuration: '',
    difficulty: 'intermediate',
    budget: '',
    rewards: '',
    constraints: '',
    resources: '',
    evaluationCriteria: '',
    visibility: 'public',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validation des données
    console.log("Formulaire soumis:", formData);
    // Stocker formData si nécessaire (localStorage, contexte, Redux)
    localStorage.setItem('submittedChallengeData', JSON.stringify(formData));
    // Rediriger vers la page d'animation d'envoi (à créer)
    navigate('/propose-challenge/submitting'); 
  };
  
  // Variantes pour l'animation des sections du formulaire
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 } },
  };
  const fieldVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  return (
    <div 
      className="min-h-screen bg-[#0D0518] text-gray-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <ProposeChallengeNavbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6"> {/* pt-24 pour la navbar fixe */}
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-10 md:mb-12"
          >
            <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
                <ListPlus size={32} className="text-purple-300" />
            </div>
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              Détaillez Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Proposition</span>
            </h1>
            <p className="mt-3 text-md text-gray-400 max-w-xl mx-auto">
              Fournissez autant de détails que possible pour nous aider à évaluer et catégoriser votre idée de challenge.
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-10"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section 1: Informations Générales */}
            <motion.fieldset variants={sectionVariants} className="p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20">
              <legend className={sectionTitleStyle}><FileText size={20}/>Informations Générales</legend>
              <div className="space-y-5 mt-4">
                <motion.div variants={fieldVariants}><label htmlFor="title" className={labelBaseStyle}>Titre du Challenge*</label><input type="text" name="title" id="title" value={formData.title} onChange={handleChange} className={inputBaseStyle} placeholder="Ex: Optimisation d'Algorithme IA" required /></motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="shortDescription" className={labelBaseStyle}>Description Courte* (max 150 car.)</label><textarea name="shortDescription" id="shortDescription" value={formData.shortDescription} onChange={handleChange} rows="2" className={inputBaseStyle} placeholder="Un résumé accrocheur de votre challenge" maxLength="150" required></textarea></motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="detailedDescription" className={labelBaseStyle}>Description Détaillée*</label><textarea name="detailedDescription" id="detailedDescription" value={formData.detailedDescription} onChange={handleChange} rows="5" className={inputBaseStyle} placeholder="Objectifs, contexte, livrables attendus, public cible..." required></textarea></motion.div>
              </div>
            </motion.fieldset>

            {/* Section 2: Catégorisation */}
            <motion.fieldset variants={sectionVariants} className="p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20">
              <legend className={sectionTitleStyle}><Settings size={20}/>Catégorisation</legend>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-5 mt-4">
                <motion.div variants={fieldVariants}>
                  <label htmlFor="mainDomain" className={labelBaseStyle}>Domaine Principal*</label>
                  <select name="mainDomain" id="mainDomain" value={formData.mainDomain} onChange={handleChange} className={inputBaseStyle} required>
                    <option value="">Sélectionnez un domaine</option>
                    <option value="tech">Technologie / Développement</option>
                    <option value="design">Design UX/UI</option>
                    <option value="data">Analyse de Données / IA</option>
                    <option value="gestion">Gestion de Projet / Business</option>
                    <option value="cybersecurite">Cybersécurité</option>
                    <option value="autre">Autre (précisez)</option>
                  </select>
                </motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="subCategories" className={labelBaseStyle}>Sous-catégories / Compétences Clés</label><input type="text" name="subCategories" id="subCategories" value={formData.subCategories} onChange={handleChange} className={inputBaseStyle} placeholder="Ex: React, Python, Figma (séparés par des virgules)" /></motion.div>
              </div>
            </motion.fieldset>

            {/* Section 3: Paramètres du Challenge */}
            <motion.fieldset variants={sectionVariants} className="p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20">
              <legend className={sectionTitleStyle}><Clock size={20}/>Paramètres du Challenge</legend>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-5 mt-4">
                <motion.div variants={fieldVariants}><label htmlFor="challengeType" className={labelBaseStyle}>Type de Challenge</label><select name="challengeType" id="challengeType" value={formData.challengeType} onChange={handleChange} className={inputBaseStyle}><option value="individual">Individuel</option><option value="team">En équipe</option></select></motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="estimatedDuration" className={labelBaseStyle}>Durée Estimée de Réalisation*</label><input type="text" name="estimatedDuration" id="estimatedDuration" value={formData.estimatedDuration} onChange={handleChange} className={inputBaseStyle} placeholder="Ex: 2 semaines, 48 heures" required /></motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="difficulty" className={labelBaseStyle}>Niveau de Difficulté Estimé</label><select name="difficulty" id="difficulty" value={formData.difficulty} onChange={handleChange} className={inputBaseStyle}><option value="beginner">Débutant</option><option value="intermediate">Intermédiaire</option><option value="advanced">Avancé</option><option value="expert">Expert</option></select></motion.div>
                <motion.div variants={fieldVariants}><label htmlFor="budget" className={labelBaseStyle}>Budget Alloué (si applicable)</label><div className="relative"><span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"><DollarSign size={14}/></span><input type="number" name="budget" id="budget" value={formData.budget} onChange={handleChange} className={`${inputBaseStyle} pl-9`} placeholder="0.00" /></div></motion.div>
                <motion.div variants={fieldVariants} className="md:col-span-2"><label htmlFor="rewards" className={labelBaseStyle}>Récompenses / Reconnaissance</label><textarea name="rewards" id="rewards" value={formData.rewards} onChange={handleChange} rows="2" className={inputBaseStyle} placeholder="Points CC, badges, visibilité, prix..."></textarea></motion.div>
              </div>
            </motion.fieldset>

            {/* Section 4: Contraintes et Critères */}
            <motion.fieldset variants={sectionVariants} className="p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20">
                <legend className={sectionTitleStyle}><AlertTriangle size={20}/>Contraintes & Critères</legend>
                <div className="space-y-5 mt-4">
                    <motion.div variants={fieldVariants}><label htmlFor="constraints" className={labelBaseStyle}>Contraintes Spécifiques</label><textarea name="constraints" id="constraints" value={formData.constraints} onChange={handleChange} rows="3" className={inputBaseStyle} placeholder="Technologies imposées, limites de temps strictes, etc."></textarea></motion.div>
                    <motion.div variants={fieldVariants}><label htmlFor="resources" className={labelBaseStyle}>Ressources Fournies (si applicable)</label><textarea name="resources" id="resources" value={formData.resources} onChange={handleChange} rows="3" className={inputBaseStyle} placeholder="Datasets, accès API, templates, documentation..."></textarea></motion.div>
                    <motion.div variants={fieldVariants}><label htmlFor="evaluationCriteria" className={labelBaseStyle}>Critères d'Évaluation*</label><textarea name="evaluationCriteria" id="evaluationCriteria" value={formData.evaluationCriteria} onChange={handleChange} rows="3" className={inputBaseStyle} placeholder="Comment les soumissions seront-elles jugées ? (Clarté, innovation, fonctionnalité...)" required></textarea></motion.div>
                </div>
            </motion.fieldset>
            
            {/* Section 5: Visibilité */}
            <motion.fieldset variants={sectionVariants} className="p-6 bg-[#10081D]/70 backdrop-blur-md rounded-xl shadow-xl border border-purple-500/20">
                <legend className={sectionTitleStyle}><Users size={20}/>Visibilité du Challenge</legend>
                <motion.div variants={fieldVariants} className="mt-4">
                    <label htmlFor="visibility" className={labelBaseStyle}>Qui peut participer ?</label>
                    <select name="visibility" id="visibility" value={formData.visibility} onChange={handleChange} className={inputBaseStyle}>
                        <option value="public">Public (ouvert à tous les membres)</option>
                        <option value="restricted_grade">Restreint par Grade CC (à définir)</option>
                        <option value="private">Privé (sur invitation uniquement)</option>
                    </select>
                </motion.div>
            </motion.fieldset>

            <motion.div variants={itemVariants} className="flex justify-end pt-4">
              <Link to='/submitting-challenge'>
              <button 
                type="submit"
                className="px-10 py-3.5 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white 
                           hover:shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 
                           flex items-center justify-center gap-2"
              >
                Soumettre pour Évaluation <ArrowRight size={20}/>
              </button>
              </Link>
            </motion.div>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EvaluateChallengeFormPage;