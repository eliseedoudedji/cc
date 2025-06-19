// src/components/PartnersSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Remplacez ces URLs par les vrais logos de vos partenaires
// Idéalement, utilisez des SVGs pour une meilleure qualité et un fond transparent
// J'utilise des placeholders pour l'exemple. Les images doivent être claires sur fond sombre.
const partnerLogos = [
  { name: "Epitech", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Epitech.png/480px-Epitech.png", alt: "Epitech Logo" },
  { name: "10000 Codeurs", src: "https://www.10000codeurs.com/wp-content/uploads/2023/02/logo-10000codeurs-blanc.svg", alt: "10000 Codeurs Logo" },
  { name: "Coding Academy", src: "https://isga.ma/wp-content/uploads/2020/02/logo-coding-academy.png", alt: "Coding Academy by Epitech Logo" },
  { name: "European Union", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png", alt: "European Union Logo" },
  { name: "Gouv Benin", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/255px-Flag_of_Benin.svg.png", alt: "Gouvernement du Benin Logo" },
  // Ajoutez d'autres partenaires ici
];

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const PartnersSection = () => {
  return (
    <div className="py-20 md:py-28 px-6 bg-[#0F071B]"> {/* Fond cohérent */}
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Our Esteemed <span className="text-cyan-400">Partners</span>
          </h2>
          <p className="text-md text-gray-400 max-w-xl mx-auto">
            We are proud to collaborate with leading organizations and institutions to foster innovation and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-12 items-center">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex justify-center items-center h-20" // Hauteur fixe pour un alignement propre
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <img 
                src={partner.src} 
                alt={partner.alt} 
                // Les classes pour le style du logo :
                // - max-h-12 ou max-h-16 pour contrôler la hauteur max
                // - w-auto pour que la largeur s'ajuste
                // - filter grayscale hover:grayscale-0 pour un effet au survol
                // - opacity-70 hover:opacity-100 pour un effet au survol
                // - transition-all pour la douceur
                className="max-h-12 w-auto object-contain 
                           filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 
                           transition-all duration-300 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;