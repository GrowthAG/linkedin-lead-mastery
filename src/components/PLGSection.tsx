
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Zap, TrendingUp, CheckCircle, Users } from 'lucide-react';

const PLGSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">
            Experimente os resultados antes mesmo de investir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não queremos que você acredite apenas em nossas palavras. Veja como o método funciona com acesso gratuito ao primeiro módulo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold mb-4 text-linkedin-primary">Acesso Gratuito ao Módulo 1</h3>
            
            <ul className="space-y-3 mb-6">
              {[
                "Aprenda as bases de hooks que geram curiosidade",
                "Teste uma das fórmulas em seu próximo post",
                "Veja o engajamento crescer instantaneamente",
                "Sem compromisso ou cartão de crédito"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="w-full bg-linkedin-primary hover:bg-linkedin-dark">
              Quero Testar o Módulo 1 Grátis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <BarChart2 className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Resultados Mensuráveis</h4>
                <p className="text-gray-600">Veja aumentos de 300% em visualizações e 200% em engajamento aplicando apenas a primeira técnica.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <Zap className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Rápido e Prático</h4>
                <p className="text-gray-600">Implemente em menos de 30 minutos e veja resultados já no seu próximo post. Sem teoria complexa.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Valor Comprovado</h4>
                <p className="text-gray-600">Mais de 2.500 profissionais já testaram e viram resultados com estas técnicas introdutórias.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-linkedin-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                <Users className="h-6 w-6 text-linkedin-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Acompanhamento na Comunidade</h4>
                <p className="text-gray-600">Acesso a um grupo exclusivo onde pode tirar dúvidas e receber feedback sobre sua implementação.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg max-w-4xl mx-auto">
          <p className="text-blue-800 italic mb-4">
            "Eu pensei que fosse mais um daqueles treinamentos com promessas vazias. Decidi testar o módulo gratuito e fiquei impressionado. Meu último post teve 400% mais visualizações que o normal."
          </p>
          <p className="font-semibold text-blue-900">— Ricardo M., Consultor de Marketing</p>
        </div>
      </div>
    </section>
  );
};

export default PLGSection;
