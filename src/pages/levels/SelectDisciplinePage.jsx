// src/pages/level-test/SelectDisciplinePage.jsx
import React, { useState, useMemo } from 'react'; // Ajout de useMemo
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DisciplineCard from '../../components/modals/DisciplineCard';      // Assurez-vous que le chemin est correct
import DisciplineDetailModal from '../../components/modals/DisciplineDetailModal'; // Assurez-vous que le chemin est correct
import LevelTestNavbar from '../../components/levels/LevelTestNavbar';       // Assurez-vous que le chemin est correct
import { Search, Info, Layers } from 'lucide-react'; // Icônes pour recherche et info

// Données des disciplines (ajoutez plus de détails et d'entrées)
const disciplinesData = [
    { id: "frontend", name: "Programmation Frontend", shortDescription: "Créez des interfaces utilisateur interactives et responsives.", longDescription: "Le test de programmation Frontend évaluera votre maîtrise des technologies web fondamentales (HTML, CSS, JavaScript) ainsi que votre capacité à utiliser des frameworks modernes comme React pour construire des applications web dynamiques et performantes.", skills: ["HTML5", "CSS3", "JavaScript ES6+", "React", "Vue.js", "Angular", "Responsive Design", "API REST", "Performance Web"], estimatedTime: "45-60 minutes", difficulty: "Intermédiaire" },
    { id: "project_management", name: "Gestion de Projet", shortDescription: "Pilotez des projets de A à Z, de la planification à la livraison.", longDescription: "Évaluez vos compétences en méthodologies agiles et traditionnelles, gestion des risques, communication d'équipe, et utilisation d'outils de suivi pour mener à bien des projets complexes.", skills: ["Agile (Scrum/Kanban)", "Waterfall", "Cycle de vie projet", "Gestion des risques", "Budgetisation", "Communication", "Outils (Jira, Asana, Trello)"], estimatedTime: "30-45 minutes", difficulty: "Fondamental à Intermédiaire" },
    { id: "data_analysis", name: "Analyse de Données", shortDescription: "Transformez les données brutes en informations stratégiques.", longDescription: "Ce test couvrira votre capacité à collecter, nettoyer, analyser et visualiser des données pour en extraire des insights pertinents. Les compétences en SQL, Python (Pandas, NumPy) et des outils de visualisation seront abordées.", skills: ["SQL", "Python (Pandas, NumPy)", "Statistiques", "Data Visualization (Tableau, PowerBI)", "Nettoyage de données", "Machine Learning (bases)"], estimatedTime: "60-75 minutes", difficulty: "Intermédiaire à Avancé" },
    { id: "cybersecurity", name: "Cybersécurité", shortDescription: "Protégez les systèmes d'information contre les menaces.", longDescription: "Évaluez vos connaissances en sécurité des réseaux, cryptographie, gestion des vulnérabilités, tests d'intrusion éthiques et conformité réglementaire.", skills: ["Sécurité Réseau", "Cryptographie", "Pentesting", "Analyse de Malware", "Gestion des identités", "Conformité (RGPD, ISO 27001)"], estimatedTime: "60 minutes", difficulty: "Avancé" },
    { id: "backend_dev", name: "Développement Backend", shortDescription: "Construisez la logique et les API robustes de vos applications.", longDescription: "Ce test évalue votre capacité à concevoir et implémenter des API RESTful, gérer des bases de données, et assurer la performance et la sécurité côté serveur en utilisant des langages comme Node.js, Python (Django/Flask), ou Java (Spring).", skills: ["Node.js (Express)", "Python (Django/Flask)", "Java (Spring Boot)", "API RESTful", "Bases de données (SQL/NoSQL)", "Authentification", "Microservices"], estimatedTime: "60-75 minutes", difficulty: "Intermédiaire à Avancé" },
    { id: "ui_ux_design", name: "Design UX/UI", shortDescription: "Concevez des expériences utilisateur intuitives et esthétiques.", longDescription: "Démontrez vos compétences en recherche utilisateur, prototypage, conception d'interfaces, et utilisation d'outils comme Figma ou Adobe XD pour créer des produits numériques centrés sur l'utilisateur.", skills: ["Recherche Utilisateur", "Wireframing", "Prototypage", "Design System", "Figma", "Adobe XD", "Accessibilité"], estimatedTime: "45-60 minutes", difficulty: "Intermédiaire" },
];

const SelectDisciplinePage = () => {
    const [selectedDiscipline, setSelectedDiscipline] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleCardClick = (discipline) => setSelectedDiscipline(discipline);
    const handleCloseModal = () => setSelectedDiscipline(null);

    const handleStartTest = (discipline) => {
        console.log("Démarrage du test pour :", discipline.name);
        localStorage.setItem('selectedDisciplineForTest', JSON.stringify(discipline));
        navigate('/level-test/pre-flight-check');
    };

    // Filtrer les disciplines en fonction du terme de recherche
    const filteredDisciplines = useMemo(() => {
        if (!searchTerm) return disciplinesData;
        return disciplinesData.filter(discipline =>
            discipline.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            discipline.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div
            className="min-h-screen bg-[#0D0518] text-gray-100 overflow-y-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >
            <div className="mb-24">
                <LevelTestNavbar />
            </div>

            <main className="pt-24 pb-16 px-4 sm:px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center mb-10 md:mb-12"
                    >
                        <p className="text-xs sm:text-sm text-purple-400 font-semibold tracking-wider mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            ÉTAPE 2/4 : CHOIX DE LA DISCIPLINE
                        </p>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                            Choisissez Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">Arène</span>
                        </h1>
                        <p className="mt-3 text-md md:text-lg text-gray-400 max-w-xl mx-auto">
                            Sélectionnez la discipline dans laquelle vous souhaitez évaluer et certifier vos compétences.
                        </p>
                    </motion.div>


                    {/* --- Note explicative --- */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.7 }} // Apparaît après que les cartes soient chargées
                        className="text-center  px-6"
                    >
                        
                    </motion.div>
                    {/* Le Footer n'est généralement pas inclus dans les étapes d'un flux comme celui-ci pour garder l'utilisateur concentré */}

                    {/* --- Champ de recherche --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-8 md:mb-10 max-w-lg mx-auto"
                    >
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Rechercher une discipline (ex: Frontend, Data...)"
                                className="w-full p-3 pl-10 text-sm bg-[#1A0F2A] border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 placeholder-gray-500 text-gray-200"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        </div>
                    </motion.div>



                    {/* Grille des disciplines */}
                    {filteredDisciplines.length > 0 ? (
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                            initial="hidden"
                            animate="visible"
                        >
                            {filteredDisciplines.map((discipline) => (
                                <DisciplineCard
                                    key={discipline.id}
                                    discipline={discipline}
                                    onClick={handleCardClick}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="text-center text-gray-400 py-10"
                        >
                            Aucune discipline ne correspond à votre recherche "{searchTerm}".
                        </motion.p>
                    )}
                </div>
            </main>

            <DisciplineDetailModal
                discipline={selectedDiscipline}
                onClose={handleCloseModal}
                onStartTest={handleStartTest}
            />

            {/* --- Badge d'info --- */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-2xl mx-auto mb-8 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center space-x-3"
            >
                <Info size={20} className="text-cyan-400 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-cyan-200">
                    Prenez le temps de lire les détails de chaque discipline en cliquant sur une carte avant de faire votre choix.
                </p>
            </motion.div>
        </div>
    );
};

export default SelectDisciplinePage;