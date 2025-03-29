
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ModulesSection from '@/components/ModulesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ModulesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
