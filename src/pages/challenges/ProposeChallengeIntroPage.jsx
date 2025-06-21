// src/pages/propose-challenge/ProposeChallengeIntroPage.jsx
import React from 'react';
import Navbar from '../../components/pages/home/Navbar';
import ProposeChallengeHero from '../../components/challenges/ProposeChallengeHero';
import ExistingChallengesTeaser from '../../components/challenges/ExistingChallengesTeaser';
import ContactUsTeaser from '../../components/challenges/ContactUsTeaser';
import Footer from '../../components/pages/home/Footer'; // Assurez-vous du chemin

const ProposeChallengeIntroPage = () => {
  // Hauteur de la navbar pour le padding du main
  const navbarHeight = '5rem'; // Ajustez cette valeur

  return (
    <div 
      className="bg-[#0D0518] text-gray-100 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main style={{ paddingTop: navbarHeight }}>
        <ProposeChallengeHero />
        <ExistingChallengesTeaser />
        <ContactUsTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default ProposeChallengeIntroPage;