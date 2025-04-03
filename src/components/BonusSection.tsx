
import React from 'react';
import { Gift, Award, FileText, Layout, CalendarDays, Users, Eye, LineChart, MessageSquare } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const bonuses = [
  {
    title: "Swipe File com 90 Hooks Virais",
    description: "Nunca mais fique sem ideias de aberturas que geram engajamento instantâneo",
    value: "R$297",
    icon: FileText,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "200 Palavras de Impacto",
    description: "Termos que aumentam o engajamento e convertem mais nos seus posts",
    value: "R$197",
    icon: LineChart,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Templates de Carrossel no Canva",
    description: "10 layouts prontos para criar carrosséis profissionais em minutos",
    value: "R$147",
    icon: Layout,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Checklist do Post Perfeito",
    description: "Lista de verificação para garantir que cada post tenha todos os elementos de alta conversão",
    value: "R$97",
    icon: FileText,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Plano de Ação de 30 Dias",
    description: "Roteiro diário para implementar o método e ver resultados em tempo recorde",
    value: "R$97",
    icon: CalendarDays,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Comunidade VIP (12 meses)",
    description: "Acesso ao grupo exclusivo de alunos para networking e suporte contínuo",
    value: "R$497",
    icon: Users,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Auditoria Personalizada",
    description: "Análise individual do seu perfil e estratégia (limitado a 20 vagas)",
    value: "R$497",
    icon: Eye,
    color: "bg-orange-50 text-orange-600",
    limited: true
  },
  {
    title: "Scripts de DM que Convertem",
    description: "Modelos prontos para iniciar conversas que geram oportunidades de negócio",
    value: "R$97",
    icon: MessageSquare,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Certificado de Especialista",
    description: "Documento que comprova sua especialização em LinkedIn para Business",
    value: "R$47",
    icon: Award,
    color: "bg-pink-50 text-pink-600"
  }
];

const BonusSection = () => {
  const totalValue = bonuses.reduce((sum, bonus) => {
    const value = parseFloat(bonus.value.replace('R$', '').replace(',', '.'));
    return sum + value;
  }, 0);
  
  return (
    <section id="bonus" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Gift className="h-4 w-4 mr-2" />
            <span>Bônus Exclusivos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-linkedin-primary to-linkedin-dark bg-clip-text text-transparent">
            + Bônus Exclusivos (Acesso Limitado)
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Além dos 7 módulos, você receberá esses bônus especiais para acelerar seus resultados
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${bonus.color}`}>
                  <bonus.icon className="h-6 w-6" />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{bonus.title}</h3>
                  <span className="font-bold text-linkedin-primary">{bonus.value}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-2">{bonus.description}</p>
                
                {bonus.limited && (
                  <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium inline-flex items-center mt-2">
                    <span>Limitado a 20 vagas</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gray-50 p-6 rounded-xl inline-block">
            <p className="text-xl font-medium">
              Valor total dos bônus: <span className="font-bold text-linkedin-primary">R${totalValue.toFixed(0)}</span>
            </p>
            <p className="text-2xl font-bold mt-2">
              Você recebe <span className="text-linkedin-primary">R$4.152</span> em valor total
            </p>
            <p className="text-lg mt-1 text-gray-600">
              Mas hoje pode acessar por apenas <span className="font-bold underline decoration-yellow-400">R$997</span> ou 12x de <span className="font-bold">R$97</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
