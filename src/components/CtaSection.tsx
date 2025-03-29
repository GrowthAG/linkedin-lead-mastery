
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-linkedin-primary to-linkedin-dark text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para transformar seu LinkedIn?
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Chegou a hora de parar de desperdiçar tempo com estratégias que não funcionam e começar a construir uma presença que gera resultados reais.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl mb-8 inline-block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Acesso vitalício ao treinamento completo",
              "Todos os bônus exclusivos",
              "Comunidade de suporte por 12 meses",
              "Atualizações gratuitas",
              "Certificado de conclusão",
              "Garantia de 30 dias"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="text-yellow-400 mr-2 h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          className="cta-button text-lg mb-6 animate-pulse-glow"
          onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
        >
          Quero Transformar Meu LinkedIn Agora
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="text-sm text-white/70">
          Investimento único com acesso vitalício. Satisfação garantida ou seu dinheiro de volta.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;
