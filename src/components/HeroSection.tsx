
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Trophy, ShieldCheck, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-20 px-4 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="lg:w-3/5 space-y-5 mb-10 lg:mb-0 w-full">
            <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 animate-pulse">
              <Clock className="inline-block w-4 h-4 mr-1.5" /> 
              <span>Últimas 10 vagas disponíveis</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#005f95] leading-tight">
              Transforme seu LinkedIn em uma<br className="hidden md:block" />
              Máquina de Vendas em<br className="hidden md:block" />
              30 Dias ou Menos
            </h1>
            
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-700 max-w-2xl`}>
              <strong className="text-linkedin-primary">2.500+ profissionais</strong> já transformaram o LinkedIn em canal de <strong className="text-linkedin-primary">geração automática de leads</strong> usando nosso método exclusivo comprovado por números.
            </p>
            
            <div className="flex items-center gap-2 py-3">
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
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-5">
              <p className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
                "Depois de aplicar o método por apenas 3 semanas, fechei 2 contratos que pagaram o investimento mais de 10x" - <span className="italic">Marcela R., Consultora Financeira</span>
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm bg-green-50 p-3 rounded-lg my-4 border border-green-200">
              <ShieldCheck className="text-green-600 h-5 w-5 flex-shrink-0" />
              <p><span className="font-bold">Garantia de Resultado:</span> Ou você gera mais visualizações, leads e reuniões em 30 dias, ou devolvemos 100% do seu investimento.</p>
            </div>
            
            <div className="py-4 space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <Button 
                className="w-full md:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 text-base rounded-md font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
              >
                Quero começar agora – Últimas vagas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full md:w-auto border-linkedin-primary text-linkedin-primary hover:bg-linkedin-primary/10 text-base"
                onClick={() => {
                  const element = document.getElementById('benefits');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver benefícios
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-4 bg-white p-3 rounded-md border border-gray-100">
              <div className="flex items-center">
                <Users className="text-linkedin-primary h-4 w-4 mr-1" />
                <span className="text-linkedin-primary font-bold">50.000+</span>
                <span className="ml-1">seguidores</span>
              </div>
              <div className="flex items-center">
                <Check className="text-linkedin-primary h-4 w-4 mr-1" />
                <span className="text-linkedin-primary font-bold">15-20</span>
                <span className="ml-1">leads por semana</span>
              </div>
              <div className="flex items-center">
                <Trophy className="text-linkedin-primary h-4 w-4 mr-1" />
                <span className="text-linkedin-primary font-bold">R$500.000+</span>
                <span className="ml-1">em contratos</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 lg:pl-10 w-full">
            <Card className="bg-white rounded-xl shadow-xl p-6 border-2 border-[#1EAEDB] relative transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                ACESSO IMEDIATO
              </div>
              
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#1EAEDB] to-[#0FA0CE] text-white p-4 rounded-lg mb-6">
                  <h3 className="text-xl font-bold flex items-center">
                    <span className="mr-2">✨</span> Resultados que você vai conquistar:
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "3x mais visualizações nos seus posts em apenas 30 dias",
                    "10-20 leads qualificados por semana sem prospecção ativa",
                    "Economia de 70% no tempo de criação de conteúdo",
                    "Conversão de conexões em reuniões comerciais",
                    "Autoridade reconhecida no seu nicho, até nos mais técnicos"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-[#1EAEDB]/10 p-1 rounded-full text-[#1EAEDB] mr-3 mt-1">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 bg-[#E6F7FF] p-4 rounded-lg border border-[#1EAEDB]/30">
                  <div className="text-center bg-white py-2 px-4 rounded-md border border-[#1EAEDB]/20 mb-3">
                    <p className="text-sm font-bold text-[#005f95]">DE <span className="line-through">R$1.997</span> POR APENAS</p>
                    <p className="text-3xl font-extrabold text-[#005f95]">R$997</p>
                    <p className="text-xs text-gray-500">ou 12x de R$97</p>
                  </div>
                  <p className="text-sm text-center text-gray-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1EAEDB] mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold">BÔNUS LIMITADO:</span> Primeiros 20 inscritos recebem auditoria personalizada
                  </p>
                  
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2 text-base rounded-md font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
                  >
                    Quero começar agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
