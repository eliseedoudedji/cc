// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../../components/pages/home/Navbar';
import Hero from '../../components/pages/home/Hero';
import FeaturesSection from '../../components/pages/home/FeaturesSection';
import ArenaSection from '../../components/pages/home/ArenaSection';
import GradesSection from '../../components/pages/home/GradesSection';
import CallToActionSection from '../../components/pages/home/CallToActionSection';
import EngageAndGrowSection from '../../components/pages/home/EngageAndGrowSection';
import TestimonialsSection from '../../components/pages/home/TestimonialsSection';
import PartnersSection from '../../components/pages/home/PartnersSection';
import Footer from '../../components/pages/home/Footer'; // Importer le nouveau composant

const HomePage = () => {
  return (
    <div 
      className="bg-[#0D0518] text-gray-100 overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <ArenaSection />
        <GradesSection />
        <CallToActionSection />
        <EngageAndGrowSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer /> {/* Ajouter le Footer ici, en dehors du <main> */}
    </div>
  );
};

export default HomePage;