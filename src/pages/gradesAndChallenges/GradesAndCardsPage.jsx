// src/pages/grades/GradesAndCardsPage.jsx
import React from 'react';
import Navbar from '../../components/pages/home/Navbar'; // Ou la navbar que vous préférez
import GradesHero from '../../components/gradesChallenges/GradesHero';
// Importer les autres composants de cette page au fur et à mesure
import GradesExplanation from '../../components/gradesChallenges/GradesExplanation';
import GradeAchieversTestimonials from '../../components/gradesChallenges/GradeAchieversTestimonials';
import GradesSystemVideo from '../../components/gradesChallenges/GradesSystemVideo';
import FinalGradesCTA from '../../components/gradesChallenges/FinalGradesCTA';
import Footer from '../../components/pages/home/Footer'; // Assurez-vous du chemin

const GradesAndCardsPage = () => {
  const navbarHeight = '5rem'; // Ajustez à la hauteur de votre NavbarV2

  return (
    <div 
      className="bg-[#0D0518] text-gray-100 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar /> {/* Ou ProposeChallengeNavbar si plus adaptée */}
      <main style={{ paddingTop: navbarHeight }}>
        <GradesHero />
         <GradesExplanation /> 
         <GradeAchieversTestimonials /> 
        <GradesSystemVideo /> 
        <FinalGradesCTA /> 
      </main>
      <Footer />
    </div>
  );
};

export default GradesAndCardsPage;