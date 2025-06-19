// src/pages/challenges/ChallengesPage.jsx
import React from 'react';
import NavbarChallenges from '../../components/levels/LevelTestNavbar'; // Ou la navbar de votre choix
import ChallengesHero from '../../components/challenges/ChallengesHero';
import Footer from '../../components/pages/home/Footer'; // Assurez-vous du chemin
import FeaturedChallenges from '../../components/challenges/FeaturedChallenges';
import ChallengeTestimonials from '../../components/challenges/ChallengeTestimonials';

const ChallengesPage = () => {
  return (
    <div 
      className="bg-[#0D0518] text-gray-100 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <NavbarChallenges />
      <main>
        <ChallengesHero />
        <FeaturedChallenges />
        <ChallengeTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default ChallengesPage;