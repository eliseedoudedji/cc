// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/auth/login/loginPage';
import SignUpPage from '../pages/auth/signup/signUpPage';
import OnboardingPage from '../pages/auth/onboarding/onboardingPage';
import HomePage from '../pages/home/HomePage';
import LevelTestIntroPage from '../pages/levels/LevelTestIntroPage';
import SelectDisciplinePage from '../pages/levels/SelectDisciplinePage';
import TestInProgressPage from '../pages/levels/TestInProgressPage'
import PreFlightCheckPage from '../pages/levels/PreFlightCheckPage'
import ChallengesPage from '../pages/challenges/ChallengesPage'
import ProposeChallengeIntroPage from '../pages/challenges/ProposeChallengeIntroPage'
import EvaluateChallengeFormPage from '../pages/challenges/EvaluateChallengeFormPage'
import SubmittingChallengePage from '../pages/challenges/SubmittingChallengePage'
import SubmissionSuccessPage from '../pages/challenges/SubmissionSuccessPage'
import GradesAndCardsPage from '../pages/gradesAndChallenges/GradesAndCardsPage'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/level-test/intro" element={<LevelTestIntroPage />} />
      <Route path="/level-test/select-discipline" element={<SelectDisciplinePage />} />
      <Route path="/level-test/pre-flight-check/:disciplineId" element={<PreFlightCheckPage />} />
      <Route path="/level-test/test-in-progress/:disciplineId" element={<TestInProgressPage />} />
      <Route path="/challenges" element={<ChallengesPage />} />
      <Route path="/propose-challenge/intro" element={<ProposeChallengeIntroPage />} />
      <Route path="/evaluate-challenge/evaluate" element={<EvaluateChallengeFormPage />} />
      <Route path="/submitting-challenge" element={<SubmittingChallengePage />} />
      <Route path="/propose-challenge/success" element={<SubmissionSuccessPage />} />
      <Route path="/grades" element={<GradesAndCardsPage />} />
    </Routes>
  );
};

export default AppRoutes;
