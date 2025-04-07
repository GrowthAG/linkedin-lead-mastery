
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center bg-linkedin-primary/10 text-linkedin-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <span>Metodologia comprovada por 2.500+ profissionais</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005f95] leading-tight mb-6">
          Seu LinkedIn como Máquina<br className="hidden md:block" />
          de Vendas e Reuniões
          em 30 Dias ou Menos
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          <strong className="text-linkedin-primary">2.500+ profissionais</strong> já transformaram o LinkedIn em canal de <strong className="text-linkedin-primary">geração automática de leads</strong> usando nosso método exclusivo comprovado por números.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 max-w-2xl mx-auto text-left">
          <p className="text-lg md:text-xl font-medium">
            "Depois de aplicar o método por apenas 3 semanas, fechei 2 contratos que pagaram o investimento mais de 10x" - <span className="italic">Marcela R., Consultora Financeira</span>
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(num => (
              <img 
                key={num}
                src={`https://i.pravatar.cc/40?img=${num+10}`} 
                className="w-8 h-8 rounded-full border-2 border-white" 
                alt="Aluno" 
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            <span className="font-bold text-linkedin-primary">+2.500 profissionais</span> já transformaram seu LinkedIn
          </p>
        </div>
        
        <Button 
          variant="outline" 
          className="mt-8 border-linkedin-primary text-linkedin-primary hover:bg-linkedin-primary/10 text-base"
          onClick={() => scrollToSection('benefits')}
        >
          Ver benefícios
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
