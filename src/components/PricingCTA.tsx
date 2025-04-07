
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const PricingCTA = () => {
  const scrollToPrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-10 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Button
          onClick={scrollToPrice}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-6 text-lg rounded-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Garantir minha vaga
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </div>
  );
};

export default PricingCTA;
