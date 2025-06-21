// src/components/pages/home/Navbar.jsx (Complète et Responsive)
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation pour fermer le menu en changeant de page
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Icônes pour le menu hamburger

const logoUrl = "/logoWhite.png"; // Assurez-vous que logoWhite.png est dans /public

const navLinks = [
  { name: "Accueil", to: "/" }, // Lien vers la page d'accueil
  { name: "Fonctionnalités", to: "/#features" }, // Exemple d'ancre
  { name: "Challenges", to: "/challenges" },
  { name: "Grades & Carte", to: "/grades"}, // Nouvelle page
  { name: "Communauté", to: "/#community" }, // Exemple d'ancre
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Effet de scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lorsque la route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { delay: i * 0.05, duration:0.3, ease:"easeOut" } 
    }),
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
                  ${scrolled || mobileMenuOpen ? 'bg-[#10081D]/95 backdrop-blur-lg shadow-xl py-4' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoUrl} alt="Challenge Continue Logo" className="h-10 sm:h-12 w-auto object-contain" /> 
          {/* Optionnel: Nom à côté du logo, peut être caché sur mobile si trop long */}
          {/* <span className="hidden sm:block font-bold text-lg text-white tracking-wider" style={{fontFamily: "'Orbitron', sans-serif"}}>CHALLENGE</span> */}
        </Link>
        
        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.to} 
              className={`text-sm font-medium transition-colors
                          ${scrolled || mobileMenuOpen ? 'text-gray-200 hover:text-pink-400' : 'text-gray-100 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bouton d'action Desktop */}
        <div className="hidden md:flex items-center">
          <Link to="/login">
            <button className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300
                              ${scrolled || mobileMenuOpen
                                ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                                : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90'}`}
            >
              Connexion
            </button>
          </Link>
          {/* Ou si l'utilisateur est connecté, afficher un lien vers le dashboard/profil */}
          {/* <Link to="/dashboard"><button className="...">Mon Profil</button></Link> */}
        </div>

        {/* Bouton Menu Hamburger pour Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Ouvrir le menu"
            className={`p-2 rounded-md transition-colors 
                        ${scrolled || mobileMenuOpen ? 'text-gray-200 hover:text-pink-400' : 'text-gray-100 hover:text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Déroulant */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 right-0 bg-[#10081D]/95 backdrop-blur-lg shadow-xl pb-6 pt-2 border-t border-purple-500/20"
          >
            <nav className="flex flex-col items-center space-y-4 px-6">
              {navLinks.map((link, index) => (
                <motion.custom 
                    key={link.name} 
                    variants={navItemVariants}
                    custom={index} // Pour l'animation en cascade
                    initial="hidden" // Nécessaire si variants sont sur le parent et l'enfant
                    animate="visible"
                    className="w-full"
                >
                    <Link 
                    to={link.to} 
                    className="block w-full py-3 text-center text-gray-200 hover:text-pink-400 hover:bg-purple-500/10 rounded-md transition-colors text-md font-medium"
                    onClick={() => setMobileMenuOpen(false)} // Ferme le menu au clic
                    >
                    {link.name}
                    </Link>
                </motion.custom>
              ))}
              <motion.div variants={navItemVariants} custom={navLinks.length} className="w-full pt-4 border-t border-purple-500/10 mt-4">
                <Link to="/login" className="w-full block">
                  <button className="w-full px-6 py-3 rounded-lg font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
                    Connexion
                  </button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;