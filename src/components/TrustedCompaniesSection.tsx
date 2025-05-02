import React, { useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
const TrustedCompaniesSection = () => {
  const companies = [{
    name: "Novo Logo",
    image: "/lovable-uploads/5d0e0845-d152-479b-a43f-c60f3b55f089.png"
  }, {
    name: "Datavoxx",
    image: "/lovable-uploads/b035ef9d-832a-4df1-bf95-751a950e1e92.png"
  }, {
    name: "Steel",
    image: "/lovable-uploads/6005457b-4fca-4277-bbe8-26d5e7597d40.png"
  }, {
    name: "Security First",
    image: "/lovable-uploads/d1df84ed-f656-4e73-a838-5b59df9bf90b.png"
  }, {
    name: "PlacLux",
    image: "/lovable-uploads/468b3b1a-f554-449b-99b5-8e0e838937ae.png"
  }, {
    name: "UMB",
    image: "/lovable-uploads/6facb28f-fa0c-46ef-bc8c-5b0d25f1ba25.png"
  }];
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Configuração para o slide automático
    const autoplayInterval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current.querySelector('.embla__container');
        if (container) {
          // Simula um scroll suave para a esquerda
          container.scrollLeft += 1;

          // Quando chegar no fim, voltar ao início
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
          }
        }
      }
    }, 30); // Intervalo curto para movimento suave e contínuo

    return () => clearInterval(autoplayInterval);
  }, []);
  return <section className="py-16 px-4 bg-white">
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
          
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-600 mb-10">
            Conheça algumas das organizações que já aplicaram nossa metodologia e transformaram sua presença no LinkedIn.
          </p>
        </div>
        
        <div ref={carouselRef} className="w-full overflow-hidden">
          <Carousel opts={{
          align: "start",
          loop: true
        }} className="w-full">
            <CarouselContent className="flex items-center">
              {companies.map((company, index) => <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                  <div className="h-24 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
                    <img src={company.image} alt={`Logo ${company.name}`} className="max-h-16 max-w-full object-contain transition-all duration-300" />
                  </div>
                </CarouselItem>)}
              
              {/* Duplicar os logos para criar um efeito de loop infinito */}
              {companies.map((company, index) => <CarouselItem key={`duplicate-${index}`} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-4">
                  <div className="h-24 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-110">
                    <img src={company.image} alt={`Logo ${company.name}`} className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>;
};
export default TrustedCompaniesSection;