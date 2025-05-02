
import React from 'react';
import { Trophy } from 'lucide-react';

const TrustedCompaniesSection = () => {
  const companies = [
    { name: "Anhembi Morumbi", image: "/lovable-uploads/4b99db9e-d764-4722-9841-2e75f4c987aa.png" },
    { name: "T", image: "/lovable-uploads/c6c88712-d10f-451d-880d-cbb1df094c9a.png" },
    { name: "Datavoxx", image: "/lovable-uploads/b035ef9d-832a-4df1-bf95-751a950e1e92.png" },
    { name: "Steel", image: "/lovable-uploads/6005457b-4fca-4277-bbe8-26d5e7597d40.png" },
    { name: "Security First", image: "/lovable-uploads/d1df84ed-f656-4e73-a838-5b59df9bf90b.png" },
    { name: "PlacLux", image: "/lovable-uploads/468b3b1a-f554-449b-99b5-8e0e838937ae.png" },
    { name: "UMB", image: "/lovable-uploads/6facb28f-fa0c-46ef-bc8c-5b0d25f1ba25.png" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#1EAEDB]/10 px-4 py-1 rounded-full text-[#1EAEDB] text-sm font-semibold inline-flex items-center">
              <Trophy className="mr-1.5 h-4 w-4" />
              CREDIBILIDADE COMPROVADA
            </div>
          </div>
          
          <h2 className="gradient-text mb-6 text-2xl md:text-3xl lg:text-4xl font-bold">
            Empresas que confiam no processo
          </h2>
          
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600">
            Conheça algumas das organizações que já aplicaram nossa metodologia e transformaram sua presença no LinkedIn.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-24 w-full px-4 transition-all duration-300 hover:scale-110"
            >
              <img 
                src={company.image} 
                alt={`Logo ${company.name}`} 
                className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
