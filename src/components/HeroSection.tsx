
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Trophy, Timer, ShieldCheck } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="lg:w-3/5 space-y-6 mb-10 lg:mb-0">
            <div className="inline-block bg-red-50 text-red-600 px-4 py-1 rounded-full text-sm font-semibold mb-2 animate-pulse">
              <Clock className="inline-block w-4 h-4 mr-1" /> Vagas limitadas: últimas 10 disponíveis
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#005f95] leading-tight">
              Pare de perder negócios no LinkedIn: o método testado que transformou +2.500 profissionais em máquinas de vendas
            </h1>
            
            <p className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} text-gray-700`}>
              <strong className="text-linkedin-primary">97% dos profissionais</strong> desperdiçam seu potencial no LinkedIn com estratégias obsoletas. Junte-se aos <strong className="text-linkedin-primary">3% que dominam</strong> esta plataforma e transformam conexões em contratos.
            </p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className={`${isMobile ? 'text-base' : 'text-lg'} font-medium`}>
                "Depois de aplicar o método por apenas 3 semanas, fechei 2 contratos que pagaram o investimento mais de 10x" - <span className="italic">Marcela R., Consultora Financeira</span>
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm bg-green-50 p-3 rounded-lg my-4 border border-green-200">
              <ShieldCheck className="text-green-600 h-5 w-5 flex-shrink-0" />
              <p><span className="font-bold">Garantia de Resultado:</span> Se em 30 dias você não tiver pelo menos 3x mais visualizações, devolvemos 100% do seu investimento.</p>
            </div>
            
            <div className="py-4 space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <Button 
                className="cta-button w-full md:w-auto animate-pulse-glow text-base md:text-sm"
                onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
              >
                Garantir Minha Vaga Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full md:w-auto border-linkedin-primary text-linkedin-primary hover:bg-linkedin-primary/10 text-base md:text-sm"
                onClick={() => {
                  const element = document.getElementById('testimonials');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver depoimentos
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mt-4">
              <div className="flex items-center">
                <Users className="text-linkedin-primary h-4 w-4 mr-1" />
                <span className="text-linkedin-primary font-bold">50.000+</span>
                <span className="ml-1">seguidores</span>
              </div>
              <div className="flex items-center">
                <Timer className="text-linkedin-primary h-4 w-4 mr-1" />
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
          
          <div className="lg:w-2/5 lg:pl-12 w-full">
            <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-linkedin-primary/20 relative transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ACESSO IMEDIATO
              </div>
              
              <div className="bg-gradient-to-r from-linkedin-primary to-linkedin-secondary text-white p-4 rounded-lg mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <span className="mr-2">✨</span> O que você vai dominar:
                </h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Como criar hooks IRRESISTÍVEIS que geram até 300% mais cliques e visualizações",
                  "Como formatar seu conteúdo para HIPNOTIZAR leitores do início ao fim",
                  "Sistema INFINITO de ideias para nunca mais ficar sem conteúdo",
                  "Estratégia 80/20 para crescer sua audiência trabalhando MENOS",
                  "Como transformar seu perfil num GERADOR AUTOMÁTICO de vendas 24/7"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-linkedin-primary/10 p-1 rounded-full text-linkedin-primary mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className={`${isMobile ? 'text-sm' : 'text-base'} font-medium`}>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  <span className="font-bold">BÔNUS LIMITADO:</span> Primeiros 20 inscritos recebem auditoria personalizada do seu perfil + plano de 90 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
