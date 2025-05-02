
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ModulesSection from '@/components/ModulesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CreatorSection from '@/components/CreatorSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import BonusSection from '@/components/BonusSection';
import RealResultsSection from '@/components/RealResultsSection';
import PricingCTA from '@/components/PricingCTA';
import PLGSection from '@/components/PLGSection';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ModulesSection />
      <BonusSection />
      <CreatorSection />
      <RealResultsSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <PricingCTA />
      <PLGSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
