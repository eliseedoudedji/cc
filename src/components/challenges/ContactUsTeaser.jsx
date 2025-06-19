// src/components/propose-challenge/ContactUsTeaser.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, HelpCircle } from 'lucide-react';

const ContactUsTeaser = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-[#0D0518]">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
            <HelpCircle size={28} className="text-purple-400" />
          </div>
          <h2 
            className="text-3xl md:text-4xl font-black mb-4 text-white"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            Une Question ou un Projet Particulier ?
          </h2>
          <p className="text-md text-gray-400 max-w-xl mx-auto mb-8">
            Notre équipe est là pour vous accompagner dans la création de challenges uniques ou pour répondre à vos interrogations spécifiques.
          </p>
          <Link to="/contact"> {/* Assurez-vous d'avoir une page de contact */}
            <button 
              className="px-8 py-3 rounded-xl font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                         hover:shadow-lg hover:shadow-pink-500/20 transform hover:scale-105 transition-all duration-300 
                         flex items-center justify-center mx-auto gap-2"
            >
              <Mail size={20}/> Nous Contacter
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsTeaser;