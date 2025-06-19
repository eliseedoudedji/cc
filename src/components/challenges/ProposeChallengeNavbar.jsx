// src/components/propose-challenge/ProposeChallengeNavbar.jsx 
// (Peut être une copie ou une version adaptée de LevelTestNavbar.jsx)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
const logoUrl = "/logoWhite.png"; 

const mainNavLinks = [
  { name: "Challenges", to: "/challenges" }, // Lien vers la page principale des challenges
  { name: "Community", to: "/#community" },
];

const ProposeChallengeNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out pb-2
                  ${scrolled ? 'bg-[#10081D]/90 backdrop-blur-md shadow-lg py-3' : 'py-5'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="Challenge Continue Logo" className="h-16 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {mainNavLinks.map((link) => (
            <Link key={link.name} to={link.to} className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-300 hover:text-white' : 'text-gray-200 hover:text-white'}`}>
              {link.name}
            </Link>
          ))}
        </nav>
        <div>
          <Link to="/dashboard"> 
            <button className={`px-5 py-2 rounded-md font-semibold text-sm transition-all duration-300 ${scrolled ? 'bg-pink-500 hover:bg-pink-600 text-white' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90'}`}>
              Mon Tableau de Bord 
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ProposeChallengeNavbar;