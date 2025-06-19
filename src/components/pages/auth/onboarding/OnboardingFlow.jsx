// src/components/pages/auth/onboarding/OnboardingFlow.jsx (ou votre chemin actuel)

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Box, Award, ShieldCheck, HelpCircle, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- Structure des données (inchangée) ---
const onboardingSteps = [
  { step: 1, icon: <HelpCircle size={20} />, title: "How to Join Challenges", description: "A quick guide to get you started.", points: ["Explore available challenges based on your interests.", "Read the requirements and objectives carefully.", "Click 'Join Challenge' and dive in!"], nextButtonText: "Next Step" },
  { step: 2, icon: <ShieldCheck size={20} />, title: "Understanding CC Card", description: "Your digital identity on the platform.", points: ["Your CC Card reflects your progress and achievements.", "Complete challenges to upgrade its level.", "Showcase your card to the community and partners."], nextButtonText: "Next Step" },
  { step: 3, icon: <Award size={20} />, title: "Advancing CC Grade", description: "Level up your skills and recognition.", points: ["Actively participate and succeed in challenges.", "Collaborate and contribute to team projects.", "Each grade unlocks new opportunities and perks."], nextButtonText: "Next Step" },
  { step: 4, icon: <Rocket size={20} />, title: "Welcome Aboard!", isFinalStep: true, logoUrl: "/logoWhite.png", description: "You're all set to Challenge the Future!", longText: "Congratulations on completing the onboarding process. You are now ready to explore, create, and conquer. Let your journey of innovation begin!", nextButtonText: "Go to Dashboard" },
];

// --- Composant Stepper (Couleur de validation ajustée) ---
const Stepper = ({ currentStep }) => {
  const totalSteps = onboardingSteps.length;
  return (
    <div className="flex items-center w-full max-w-md mx-auto mb-12 md:mb-16">
      {onboardingSteps.map(({ step, icon: StepIconComponent }, index) => ( // Renommé 'icon' pour éviter conflit
        <React.Fragment key={step}>
          <div className="flex flex-col items-center relative">
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 border-2
                ${currentStep > step
                  ? 'border-purple-500 text-white' // VALIDÉ: Violet solide, plus subtil
                  : currentStep === step
                    ? 'border-cyan-400 bg-[#1A0F2A] scale-110 shadow-lg shadow-cyan-500/30 text-cyan-400' // ACTIF
                    : 'border-purple-500/30 bg-[#10081D] text-gray-500' // INACTIF
                }`}
            >
              {currentStep > step
                ? <Check size={20} />
                // Pour l'étape active et inactive, on affiche l'icône de l'étape si elle existe, sinon le numéro
                : (StepIconComponent ? React.cloneElement(StepIconComponent, { size: 20, className: currentStep === step ? 'text-cyan-400' : 'text-gray-500' }) : step)
              }
            </div>
          </div>
          {index < totalSteps - 1 && (
            <div className={`flex-1 h-1 transition-colors duration-500 
                            ${currentStep > step ? 'bg-purple-600' : 'bg-purple-500/30'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


// --- Composant Principal (Card sans bordure) ---
const OnboardingFlow = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const activeStepData = onboardingSteps.find(s => s.step === currentStep);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Onboarding terminé ! Redirection...");
      navigate("/level-test/intro");
    }
  };

  const contentVariants = { /* ... (inchangé) ... */
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="relative min-h-screen pt-16 bg-[#0D0518] text-gray-100 flex flex-col items-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Stepper simple au-dessus du contenu */}
      <div className="w-full py-8 px-4 sm:px-6 max-w-4xl mx-auto">
        <Stepper currentStep={currentStep} />
      </div>

      {/* Contenu principal */}
      <div className="w-full flex-grow flex flex-col items-center p-4 sm:p-8 relative z-10">
        <div className="fixed -left-60 -top-60 w-[500px] h-[500px] bg-purple-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)' }}></div>
        <div className="fixed -right-60 -bottom-60 w-[500px] h-[500px] bg-cyan-600/10 rounded-full animate-pulse -z-10" style={{ filter: 'blur(150px)', animationDelay: '2.5s' }}></div>
      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl text-center"
        >
          <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="min-h-[300px] md:min-h-[320px]"
          >
            {activeStepData.isFinalStep ? (
              <div className="flex flex-col items-center justify-center h-full">
                <motion.img
                  src={activeStepData.logoUrl}
                  alt="Challenge Continue Logo"
                  className="w-28 h-auto mb-6 filter brightness-0 invert"
                  initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
                />
                <h1 className="text-3xl md:text-4xl font-black mb-3 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>{activeStepData.title}</h1>
                <p className="font-semibold text-lg mb-4 text-purple-300">{activeStepData.description}</p>
                <p className="text-gray-400 max-w-md leading-relaxed">{activeStepData.longText}</p>
              </div>
            ) : (
              <div>
                <h1 className="text-3xl md:text-4xl font-black mb-3 text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>{activeStepData.title}</h1>
                <p className="text-gray-400 mb-8">{activeStepData.description}</p>
                <ul className="space-y-4 text-left max-w-md mx-auto">
                  {activeStepData.points.map((point, index) => (
                    <motion.li
                      key={index}
                      // MODIFIÉ: Bordure enlevée des items de liste aussi pour la cohérence
                      className="flex items-start bg-[#1A0F2A]/60 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mr-4">
                        <Box size={16} />
                      </div>
                      <span className="text-gray-300 text-sm md:text-base">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
          </AnimatePresence>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
            {currentStep > 1 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.1 }}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-md border-2 border-gray-600 text-gray-400 hover:bg-gray-700 hover:border-gray-700 hover:text-white transition-colors"
              >
                Précédent
              </motion.button>
            )}
            <motion.button
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              onClick={handleNext}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
            >
              {activeStepData.nextButtonText}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnboardingFlow;