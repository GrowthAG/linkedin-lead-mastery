
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ShieldCheck, Clock, Gift, Users } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
const CtaSection = () => {
  const isMobile = useIsMobile();
  return <section id="pricing" className="py-16 px-4 bg-gradient-to-r from-[#005f95] to-[#004b76] text-white w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-red-500 px-4 py-1 rounded-full text-white text-sm font-bold">
            VAGAS LIMITADAS - ENCERRA EM 24 HORAS
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Receba R$3.971 em valor total<br className="hidden md:block" /> por apenas R$297
        </h2>
        
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto text-center">
          Junte-se a mais de <span className="underline decoration-yellow-400">2.500 profissionais</span> que já transformaram sua presença no LinkedIn com nosso método comprovado.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-xl md:w-2/3 w-full">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300 flex items-center">
              <Gift className="mr-2 h-6 w-6" /> O que você recebe hoje:
            </h3>
            <div className="grid gap-4 text-left mb-8">
              {["Acesso vitalício ao treinamento completo com 7 módulos (R$2.091)", "Todos os 9 bônus exclusivos (valor de R$1.880)", "Comunidade exclusiva de suporte por 12 meses", "Atualizações gratuitas para sempre", "Templates prontos para hooks, posts e carrosséis", "Auditoria personalizada do seu perfil (20 primeiros inscritos)", "Plano de ação de 90 dias personalizado", "Garantia de resultados de 30 dias"].map((item, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="text-yellow-400 mr-3 h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>)}
            </div>
            
            <div className="flex justify-center">
              <Button onClick={() => window.location.href = "https://pay.kiwify.com.br/9J0bQlb"} className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-md font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pulse flex items-center justify-center h-auto py-6 text-base px-[26px]">
                {isMobile ? <div className="flex items-center">
                    <span className="text-center">
                      Quero Transformar<br />
                      Meu LinkedIn Agora
                    </span>
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </div> : <>
                    <span>Quero Transformar Meu LinkedIn Agora</span>
                    <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                  </>}
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/3 w-full bg-white rounded-xl p-6 text-[#005f95] flex flex-col justify-center">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold inline-block mb-3 self-start animate-pulse">
              OFERTA POR APENAS 24 HORAS
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Investimento único:</h3>
            <div className="mb-4">
              <div className="text-gray-500 line-through">De R$3.971</div>
              <div className="text-3xl font-bold">Por R$297 à vista</div>
              <div className="text-sm text-gray-600 mt-1">ou 12x de R$29,90</div>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-4 bg-green-50 p-3 rounded-lg border border-green-200">
              <ShieldCheck className="text-green-600 h-5 w-5 flex-shrink-0" />
              <p><span className="font-bold">Garantia de Resultado:</span> Ou você gera mais visualizações e reuniões em 30 dias, ou devolvemos 100% do seu dinheiro.</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm mb-6 bg-red-50 p-3 rounded-lg border border-red-200">
              <Clock className="text-red-600 h-5 w-5 flex-shrink-0" />
              <p>Promoção válida por <span className="font-bold">apenas 24 horas</span> ou até esgotarem as 20 vagas para auditoria personalizada</p>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;
