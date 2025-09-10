import React from 'react';
import MigrantHealthHeader from './components/MigrantHealthHeader';
import MigrantHeroSection from './components/MigrantHeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import MigrantHealthFooter from './components/MigrantHealthFooter';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <MigrantHealthHeader />  
      <main className="pt-16">
        <MigrantHeroSection /> 
        <FeaturesSection /> 
        <HowItWorksSection /> 
      </main>
      <MigrantHealthFooter />
    </div>
  );
};

export default Homepage;