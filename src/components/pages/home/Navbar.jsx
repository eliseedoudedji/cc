// src/components/pages/home/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [{ name: "Features", to: "/#features" }, { name: "Challenges", to: "/challenges" }, { name: "Community", to: "/#community" }];

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        <Link to="/" className="flex items-center gap-2">
          {/* 
            CORRECTION : 
            Référencez l'image directement par son chemin depuis la racine du serveur.
            Si LogoWhite.png est dans public/, le chemin devient /LogoWhite.png
          */}
          <img src="/logoWhite.png" alt="Challenge Continue Logo" className="w-24 object-contain" /> 
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.to} className="text-gray-300 hover:text-white transition-colors">{link.name}</Link>
          ))}
        </nav>
        <Link to="/register"><button className="px-6 py-2 rounded-md font-semibold text-sm bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity">
          Join Now
        </button></Link>
      </div>
    </header>
  );
};

export default Navbar;