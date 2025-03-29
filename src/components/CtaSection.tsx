
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-linkedin-primary to-linkedin-dark text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Chegou a hora de transformar seu LinkedIn em uma máquina de vendas
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto text-center">
          Pare de desperdiçar seu potencial com estratégias que não funcionam. Junte-se a mais de 2.500 profissionais que já transformaram seu LinkedIn.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl md:w-2/3">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">O que você recebe hoje:</h3>
            <div className="grid gap-4 text-left">
              {[
                "Acesso vitalício ao treinamento completo com 7 módulos",
                "Todos os bônus exclusivos (valor de R$1.997)",
                "Comunidade exclusiva de suporte por 12 meses",
                "Atualizações gratuitas para sempre",
                "Templates prontos para hooks e posts",
                "Auditoria personalizada do seu perfil (20 primeiros inscritos)",
                "Plano de ação de 90 dias personalizado",
                "Garantia de resultados de 30 dias"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-yellow-400 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3 bg-white rounded-xl p-6 text-linkedin-primary flex flex-col justify-center">
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3 self-start">
              OFERTA POR TEMPO LIMITADO
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Investimento único:</h3>
            <div className="mb-4">
              <div className="text-gray-500 line-through">De R$1.997</div>
              <div className="text-3xl font-bold">Por R$997</div>
              <div className="text-sm text-gray-600 mt-1">ou 12x de R$97</div>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-4 bg-green-50 p-3 rounded-lg border border-green-200">
              <ShieldCheck className="text-green-600 h-5 w-5 flex-shrink-0" />
              <p><span className="font-bold">Garantia de Resultado:</span> Resultados em 30 dias ou seu dinheiro de volta.</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-6 bg-red-50 p-3 rounded-lg border border-red-200">
              <Clock className="text-red-600 h-5 w-5 flex-shrink-0" />
              <p>Promoção válida por <span className="font-bold">apenas 24 horas</span> ou até esgotarem as vagas</p>
            </div>
            
            <Button 
              className="cta-button w-full"
              onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg max-w-3xl mx-auto text-center">
          <h4 className="font-bold mb-4">ÚLTIMAS VAGAS DISPONÍVEIS</h4>
          <p className="text-white/90 mb-6">
            Limitamos o número de vagas para garantir a qualidade do suporte e da comunidade.
            As últimas turmas esgotaram em menos de 24 horas.
          </p>
          <Button 
            className="cta-button text-lg animate-pulse-glow"
            onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
          >
            Quero Transformar Meu LinkedIn Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
