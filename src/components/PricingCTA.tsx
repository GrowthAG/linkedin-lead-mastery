
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const PricingCTA = () => {
  const scrollToPrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If there's no direct pricing section, let's scroll to the CTA section which has pricing
      const ctaSection = document.getElementById('cta');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="py-10 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Button
          onClick={scrollToPrice}
          className="bg-gradient-to-r from-linkedin-primary to-linkedin-dark hover:from-linkedin-dark hover:to-linkedin-primary text-white px-6 py-6 text-lg rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
        >
          Ver investimento e garantir minha vaga
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </div>
  );
};

export default PricingCTA;
