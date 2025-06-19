// src/pages/level-test/LevelTestIntroPage.jsx (Layout Corrigé)

import React from 'react';
import LevelTestNavbar from '../../components/levels/LevelTestNavbar'; // Corrigé le chemin si besoin
import LevelTestHero from '../../components/levels/LevelTestHero';     // Corrigé le chemin si besoin
import LevelTestVideo from '../../components/levels/LevelTestVideo';   // Corrigé le chemin si besoin
import Footer from '../../components/pages/home/Footer'; // Corrigé le chemin si besoin

const LevelTestIntroPage = () => {
  // Hauteur approximative de votre LevelTestNavbar. Ajustez si nécessaire.
  const navbarHeight = '80px'; // Par exemple, 5rem ou 80px

  return (
    <div 
      className="bg-[#0D0518] text-gray-100" // overflow-x-hidden enlevé pour l'instant, voir si nécessaire
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <LevelTestNavbar />
      {/* 
        Le <main> commence APRES la navbar. 
        Si la navbar est 'fixed', le main a besoin d'un padding-top pour ne pas être dessous.
      */}
      <main style={{ paddingTop: navbarHeight }}>
        <LevelTestHero />
        <LevelTestVideo />
        {/* Autres sections ici */}
      </main>
      <Footer />
    </div>
  );
};

export default LevelTestIntroPage;