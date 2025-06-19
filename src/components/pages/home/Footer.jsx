// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
// Icônes pour le logo et les réseaux sociaux
import { Aperture, Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  navigations: [
    { name: "Login", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Become a Contributor", href: "#" },
    { name: "Subscribe", href: "#" },
    { name: "Challenges", href: "#" },
  ],
  actualites: [
    { name: "7 Thousand Projects in 2 Years", href: "#" },
    { name: "Meeting with the Minister", href: "#" },
    { name: "New Grades Unveiled", href: "#" },
    { name: "Platform Updates", href: "#" },
  ],
  socials: [
    { name: "Facebook", icon: <Facebook size={20} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[#1A0F2A] to-[#0D0518] text-gray-300 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        {/* Section supérieure du footer avec les colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Colonne 1: Logo et description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1" // Prend une colonne, ou deux si on réduit les autres
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/logoWhite.png" alt="Challenge Continue Logo" className="w-20 object-contain" /> 
            </a>
            <p className="text-sm leading-relaxed mb-4">
              The premier platform for collaborative innovation, connecting minds to build the future, one challenge at a time.
            </p>
            <div className="flex space-x-4">
              {footerLinks.socials.map(social => (
                <a key={social.name} href={social.href} aria-label={social.name} className="text-gray-400 hover:text-pink-400 transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Colonne 2: Coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay:0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start"><MapPin size={16} className="mr-3 mt-1 text-purple-400 flex-shrink-0"/> Abomey Calavi, Bénin<br/>Rue N° 235, Godomey</li>
              <li className="flex items-center"><Phone size={16} className="mr-3 text-purple-400"/> (+229) 016-182-064-6</li>
              <li className="flex items-center"><Mail size={16} className="mr-3 text-purple-400"/> ccmail@challengecontinue.com</li>
            </ul>
          </motion.div>

          {/* Colonne 3: Navigations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay:0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>Navigations</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.navigations.map(link => (
                <li key={link.name}><a href={link.href} className="hover:text-cyan-400 transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 4: Actualités */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay:0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4" style={{fontFamily: "'Orbitron', sans-serif"}}>News & Updates</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.actualites.map(link => (
                <li key={link.name}><a href={link.href} className="hover:text-cyan-400 transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-purple-500/30 pt-8 text-center">
          <p className="text-sm text-gray-400">
            Challenge Continue © {currentYear}. Tout droit réservés.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Designed with passion. Coded with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;