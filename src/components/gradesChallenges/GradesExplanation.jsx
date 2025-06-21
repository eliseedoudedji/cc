// src/components/grades/GradesExplanation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import GradeDescriptionCard from './GradeDescriptionCard'; // À créer
import ChallengerCardDisplay from './ChallengerCardDisplay'; // À créer
import { BarChartHorizontalBig, Award } from 'lucide-react'; // Award pour "Niveaux Atteints"

// Données pour les 9 Grades (exemple, à compléter et affiner)
// Chaque grade aura un 'theme' pour sa carte (ex: couleurs, motif de fond léger)
const gradesData = [
    { id: "cc1", level: "CC1", title: "Novice Inspiré", icon: <Award size={20} className="text-gray-400" />, description: "Vous débutez votre parcours. Curiosité et premières explorations.", cardTheme: { primary: "gray-500", secondary: "gray-700", accent: "gray-400", pattern: "pattern-dots" } },
    { id: "cc2", level: "CC2", title: "Apprenti Engagé", icon: <Award size={20} className="text-teal-400" />, description: "Premiers challenges relevés, les bases sont acquises.", cardTheme: { primary: "teal-500", secondary: "teal-700", accent: "teal-300", pattern: "pattern-lines" } },
    { id: "cc3", level: "CC3", title: "Explorateur Compétent", icon: <Award size={20} className="text-cyan-400" />, description: "Vous gagnez en autonomie et en efficacité.", cardTheme: { primary: "cyan-500", secondary: "cyan-700", accent: "cyan-300", pattern: "pattern-grid" } },
    { id: "cc4", level: "CC4", title: "Praticien Confirmé", icon: <Award size={20} className="text-blue-400" />, description: "Maîtrise solide des fondamentaux, capable de guider.", cardTheme: { primary: "blue-500", secondary: "blue-700", accent: "blue-300", pattern: "pattern-cross" } },
    { id: "cc5", level: "CC5", title: "ProfessionnelChevronné", icon: <Award size={20} className="text-indigo-400" />, description: "Expertise reconnue, vous menez des projets complexes.", cardTheme: { primary: "indigo-500", secondary: "indigo-700", accent: "indigo-300", pattern: "pattern-zig-zag" } },
    { id: "cc6", level: "CC6", title: "Senior Distingué", icon: <Award size={20} className="text-purple-400" />, description: "Influence et leadership au sein de la communauté.", cardTheme: { primary: "purple-500", secondary: "purple-700", accent: "purple-300", pattern: "pattern-waves" } },
    { id: "cc7", level: "CC7", title: "Maître Innovateur", icon: <Award size={20} className="text-fuchsia-400" />, description: "Vous façonnez l'avenir avec des solutions pionnières.", cardTheme: { primary: "fuchsia-500", secondary: "fuchsia-700", accent: "fuchsia-300", pattern: "pattern-diamonds" } },
    { id: "cc8", level: "CC8", title: "Grand Maître Stratège", icon: <Award size={20} className="text-pink-400" />, description: "Vision stratégique et impact durable sur la plateforme.", cardTheme: { primary: "pink-500", secondary: "pink-700", accent: "pink-300", pattern: "pattern-polka" } },
    { id: "cc9", level: "CC9", title: "Légende Vivante", icon: <Award size={20} className="text-red-400" />, description: "Votre héritage inspire des générations de challengers.", cardTheme: { primary: "red-500", secondary: "red-700", accent: "red-300", pattern: "pattern-stars" } },
];
// Note: Les classes `pattern-*` sont des placeholders. Vous devrez les créer si vous voulez des motifs.

const GradesExplanation = () => {
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    return (
        <section
            id="grades-explanation" // Pour le lien d'ancre du Hero
            className="py-20 md:py-28 px-4 sm:px-6 bg-[#0F071B]" // Fond légèrement différent
        >
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <div className="inline-block p-3 bg-cyan-500/20 rounded-full mb-4">
                        <BarChartHorizontalBig size={32} className="text-cyan-400" />
                    </div>
                    <h2
                        className="text-4xl md:text-5xl font-black text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Les Paliers de l'<span className="text-cyan-400">Excellence</span>
                    </h2>
                    <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">
                        Chaque grade sur Challenge Continue est une reconnaissance de vos compétences, de votre engagement et de votre impact au sein de notre communauté.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-16 md:space-y-20" // Espace entre chaque "paire" de grade
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }} // Déclenche l'animation quand 5% est visible
                >
                    {gradesData.map((grade, index) => (
                        <motion.div
                            key={grade.id}
                            // Alterne la disposition pour la variété (image à gauche, puis à droite)
                            className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-row-dense'}`}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                        >
                            {/* La carte de description du grade */}
                            <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                <GradeDescriptionCard grade={grade} />
                            </div>

                            {/* La Carte Challenger (flippable) */}
                            <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                <ChallengerCardDisplay grade={grade} userData={null} />
                                {/* userData sera null ici, on affiche un template de carte */}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GradesExplanation;