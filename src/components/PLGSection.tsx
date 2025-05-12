
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Zap, TrendingUp, CheckCircle, Users, Shield, Star } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const PLGSection = () => {
  const isMobile = useIsMobile();
  const scrollToPrice = () => {
    window.location.href = "https://pay.kiwify.com.br/9J0bQlb";
  };
  return <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#1EAEDB]/10 px-4 py-1 rounded-full text-[#1EAEDB] text-sm font-semibold inline-flex items-center">
              <Star className="mr-1.5 h-4 w-4" />
              RESULTADOS COMPROVADOS
            </div>
          </div>
          
          <h2 className="gradient-text mb-4 text-2xl md:text-3xl lg:text-4xl font-bold">
            Invista no método que já transformou<br className="hidden md:block" /> mais de 2.500 perfis no LinkedIn
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso treinamento é exclusivo para profissionais determinados a alcançar resultados reais e mensuráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border-2 border-[#1EAEDB] h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-linkedin-primary">Acesso Premium ao Treinamento Completo</h3>
            
            <ul className="space-y-3 mb-6">
              {["Domine as técnicas avançadas de hooks que geram alto engajamento", "Acesso a todas as fórmulas exclusivas para crescer sua presença", "Suporte dedicado para otimizar sua estratégia no LinkedIn", "Garantia de resultado ou seu dinheiro de volta"].map((item, idx) => <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className={`${isMobile ? 'text-sm' : 'text-base'}`}>{item}</span>
                </li>)}
            </ul>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 line-through text-sm">R$1.997</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold">85% OFF</span>
              </div>
              <div className="text-2xl font-bold text-linkedin-primary">R$297 à vista</div>
              <div className="text-sm text-gray-500">ou 12x de R$29,90</div>
            </div>
            
            <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 text-base rounded-md font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl" onClick={scrollToPrice}>
              Quero Acesso ao Treinamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-3">
              Garantia de 30 dias • Acesso imediato • Suporte por 12 meses
            </p>
          </div>
          
          <div className="space-y-6 h-full flex flex-col justify-center">
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <BarChart2 className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-1">Resultados Mensuráveis</h4>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>Aumente em até 300% suas visualizações e 200% seu engajamento aplicando as técnicas do método.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <Zap className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-1">Rápido e Prático</h4>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>Implemente em menos de 30 minutos e veja resultados já no seu próximo post. Sem teoria complexa.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-1">Valor Comprovado</h4>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>Mais de 2.500 profissionais já aplicaram e viram resultados significativos com estas técnicas.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <Shield className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-1">Garantia de Resultado</h4>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-gray-600`}>Estamos tão confiantes que oferecemos garantia de 30 dias. Se não funcionar, devolvemos seu investimento.</p>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default PLGSection;
