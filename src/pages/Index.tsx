
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

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ModulesSection />
      <TestimonialsSection />
      <CreatorSection />
      <GuaranteeSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
