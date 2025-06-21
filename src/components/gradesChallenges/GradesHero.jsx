// src/components/grades/GradesHero.jsx (Adaptation Thème & Contenu)
import React, { useState } from 'react'; // Gardé pour searchQuery, même s'il n'est pas utilisé pour le moment
import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // Plus utilisé directement ici si on enlève les animations Framer
import { ArrowRight, Play, BarChartHorizontalBig, Sparkles } from 'lucide-react'; // Ajout des icônes pour les boutons

const GradesHero = () => {
  // const [searchQuery, setSearchQuery] = useState('leading page'); // Vous pouvez l'enlever si non utilisé

  // --- URLs des médias (gardez les vôtres ou adaptez si besoin pour le thème) ---
  //const centralVideoUrl = "https://cdn-front.freepik.com/revamp/temp/hero/1905-AnonymousHome1920x1080-compressed.webm"; // La vidéo de Freepik, pour l'exemple
  const centralVideoUrl = '/videos/un.mp4';

  const imageCardLeftUrl = "https://img.freepik.com/vecteurs-premium/code-programmation-codage-signe-hacker-icone-code-programmation-faite-du-code-binaire-wireframe-main_127544-3400.jpg";
  const imageCardBottomLeftUrl = "https://img.freepik.com/photo-plan-americain-dun-developpepeur-informatique-35-ans-qui-travaille-laptop-dans_343960-112662.jpg";
  const imageCardRightTopUrl = "https://img.freepik.com/photos-gratuite/portrait-homme-cool-lunettes-soleil-dansant_23-2148851011.jpg";


  return (
    <div
      className="min-h-screen text-white overflow-hidden"
      // MODIFIÉ : Fond et police du thème
      style={{ backgroundColor: '#080313', fontFamily: "'Inter', sans-serif" }}
    >
      <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-8"> {/* pt-8 pour un peu d'espace en haut */}

        {/* MODIFIÉ : Textes et couleurs pour "Grades & Carte CC" */}
        <h1
          className="text-base sm:text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 leading-tight text-center max-w-4xl text-purple-300"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: '0.05em' }}
        >
          VOTRE PARCOURS D'EXCELLENCE AVEC
        </h1>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center leading-none mb-4 md:mb-6"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-purple-600">
            GRADES
          </span>
          <span className="mx-2 text-gray-500">&</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500">
            CARTE CC
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 text-center max-w-xl px-2">
          Découvrez notre système de progression, valorisez vos compétences et obtenez la prestigieuse Carte Challenger.
        </p>

        {/* MODIFIÉ : Style des boutons CTA pour le thème */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 md:mb-12">
          <Link to="#grades-explanation" className="w-full sm:w-auto">
            <button className="group w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:from-cyan-400 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25">
              <BarChartHorizontalBig className="w-5 h-5 mr-2" /> Explorer les Grades
            </button>
          </Link>
          <Link to="/level-test-intro" className="w-full sm:w-auto">
            <button className="group w-full inline-flex items-center justify-center bg-transparent text-pink-400 border-2 border-pink-500 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-pink-500/10 hover:text-pink-300 hover:border-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/15">
              <Sparkles className="w-5 h-5 mr-2" /> Obtenir Ma Carte
            </button>
          </Link>
        </div>


        {/* Floating Cards Container (Structure et animations de base gardées) */}
        {/* Les styles des cartes elles-mêmes (bg, shadow) sont légèrement ajustés pour le thème */}
        <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[500px]">

          {/* MOBILE: Only Video Card Visible */}
          <div className="md:hidden absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[400px] h-[240px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer group z-30 bg-[#10081D] border border-purple-500/30">
            <div className="relative w-full h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={centralVideoUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
               
              </div>

            </div>

          </div>

          {/* DESKTOP: All Cards Visible */}
          <div
            className="hidden md:block absolute top-[-10%] left-[2%] w-[300px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:rotate-0 transition-transform duration-500 cursor-pointer group z-10 bg-[#10081D]/50 backdrop-blur-sm border border-purple-500/20"
          // style={{ transform: 'rotate(-3deg)' }} // Gardez la rotation si vous le souhaitez
          >
            <img src={imageCardLeftUrl} alt="Concept de Code" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div
            className="hidden md:block absolute bottom-24 left-[10%] w-[100px] h-[150px] rounded-2xl overflow-hidden shadow-xl hover:rotate-0 transition-transform duration-500 cursor-pointer group z-10 bg-[#10081D]/50 backdrop-blur-sm border border-purple-500/20"
          // style={{ transform: 'rotate(2deg)' }}
          >
            <img src={imageCardBottomLeftUrl} alt="Codeur concentré" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="hidden md:block absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer group z-30 bg-black border-2 border-pink-500/30">
            <div className="relative w-full h-full">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" poster={centralVideoPosterUrl}>
                <source src={centralVideoUrl} type="video/webm" /> {/* Utilisez webm pour Freepik si possible, sinon mp4 */}
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
          </div>

          <div
            className="hidden md:block absolute top-[-10%] right-8 w-[20%] h-[60%] rounded-2xl overflow-hidden shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500 cursor-pointer group z-20 bg-[#10081D]/50 backdrop-blur-sm border border-purple-500/20"
          >
            <img src={imageCardRightTopUrl} alt="Personne dynamique" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default GradesHero;