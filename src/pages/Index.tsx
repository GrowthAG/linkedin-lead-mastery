
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ModulesSection from '@/components/ModulesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import InstructorsSection from '@/components/InstructorsSection';
import ObjectionsSection from '@/components/ObjectionsSection';
import PLGSection from '@/components/PLGSection';

// Links para materiais do treinamento
const trainingMaterials = {
  module1: "https://doc.clickup.com/9013724327/d/h/8cm5157-1473/f1b64c100816cec",
  module2: "https://doc.clickup.com/9013724327/d/h/8cm5157-1493/d9ab176d673d531"
};

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <PLGSection />
      <ModulesSection />
      <ObjectionsSection />
      <InstructorsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
