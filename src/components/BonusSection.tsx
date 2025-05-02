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
  return;
};
export default BonusSection;