
import React from 'react';
import { Gift, Award, FileText, Layout, CalendarDays, Users, Eye, LineChart, MessageSquare } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const bonuses = [{
  title: "Swipe File com 90 Hooks Virais",
  description: "Nunca mais fique sem ideias de aberturas que geram engajamento instantâneo",
  value: "R$297",
  icon: FileText,
  color: "bg-purple-50 text-purple-600"
}, {
  title: "200 Palavras de Impacto",
  description: "Termos que aumentam o engajamento e convertem mais nos seus posts",
  value: "R$197",
  icon: LineChart,
  color: "bg-blue-50 text-blue-600"
}, {
  title: "Templates de Carrossel no Canva",
  description: "10 layouts prontos para criar carrosséis profissionais em minutos",
  value: "R$147",
  icon: Layout,
  color: "bg-indigo-50 text-indigo-600"
}, {
  title: "Checklist do Post Perfeito",
  description: "Lista de verificação para garantir que cada post tenha todos os elementos de alta conversão",
  value: "R$97",
  icon: FileText,
  color: "bg-green-50 text-green-600"
}, {
  title: "Plano de Ação de 30 Dias",
  description: "Roteiro diário para implementar o método e ver resultados em tempo recorde",
  value: "R$97",
  icon: CalendarDays,
  color: "bg-yellow-50 text-yellow-600"
}, {
  title: "Comunidade VIP (12 meses)",
  description: "Acesso ao grupo exclusivo de alunos para networking e suporte contínuo",
  value: "R$497",
  icon: Users,
  color: "bg-red-50 text-red-600"
}, {
  title: "Auditoria Personalizada",
  description: "Análise individual do seu perfil e estratégia (limitado a 20 vagas)",
  value: "R$497",
  icon: Eye,
  color: "bg-orange-50 text-orange-600",
  limited: true
}, {
  title: "Scripts de DM que Convertem",
  description: "Modelos prontos para iniciar conversas que geram oportunidades de negócio",
  value: "R$97",
  icon: MessageSquare,
  color: "bg-teal-50 text-teal-600"
}, {
  title: "Certificado de Especialista",
  description: "Documento que comprova sua especialização em LinkedIn para Business",
  value: "R$47",
  icon: Award,
  color: "bg-pink-50 text-pink-600"
}];

const BonusSection = () => {
  const totalValue = bonuses.reduce((sum, bonus) => {
    const value = parseFloat(bonus.value.replace('R$', '').replace(',', '.'));
    return sum + value;
  }, 0);
  
  return (
    <section id="bonus" className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-100 px-4 py-1 rounded-full text-yellow-700 text-sm font-semibold mb-4">
            <Gift className="inline-block mr-1.5 h-4 w-4" />
            BÔNUS EXCLUSIVOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">9 Bônus Para Acelerar Seus Resultados</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ao se inscrever hoje, você receberá acesso a estes bônus exclusivos que complementam o treinamento principal e aceleram seus resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className={`${bonus.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <bonus.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{bonus.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-linkedin-primary">{bonus.value}</span>
                  {bonus.limited && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Vagas limitadas</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-6 inline-block">
            <p className="text-lg font-semibold mb-1">Valor Total dos Bônus:</p>
            <p className="text-3xl font-bold text-yellow-600">R$ {totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className="text-sm text-gray-500 mt-1">Incluídos gratuitamente na sua inscrição hoje</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
