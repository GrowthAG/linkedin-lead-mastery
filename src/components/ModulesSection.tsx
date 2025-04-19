import React from 'react';
import { 
  BookOpen, Layout, Edit, TrendingUp, MessageSquare, BarChart, Zap,
  Gift, FileText, Monitor, CheckCircle, Calendar, Users, Target, Award, Clipboard
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    number: 1,
    title: "Descobrindo seu nicho rentável",
    description: "Módulo 1 – Aula 1: Identificação e validação do seu nicho de atuação",
    value: "R$297",
    icon: BookOpen,
    highlights: [
      "Identificação precisa do seu nicho de mercado",
      "Validação do potencial de monetização",
      "Posicionamento estratégico no LinkedIn"
    ]
  },
  {
    number: 2,
    title: "Construindo sua persona profissional",
    description: "Módulo 1 – Aula 2: Desenvolvimento da sua identidade profissional",
    value: "R$297",
    icon: Layout,
    highlights: [
      "Criação da sua marca pessoal profissional",
      "Definição do seu público-alvo ideal",
      "Estratégias de diferenciação no mercado"
    ]
  },
  {
    number: 3,
    title: "Sistema \"Hub and Spoke\" para conteúdo integrado",
    description: "Módulo 1 – Aula 3: Estruturação do seu sistema de conteúdo",
    value: "R$297",
    icon: Edit,
    highlights: [
      "Implementação do modelo Hub and Spoke",
      "Integração de diferentes formatos de conteúdo",
      "Maximização do alcance orgânico"
    ]
  },
  {
    number: 4,
    title: "Ideação sistemática",
    description: "Módulo 1 – Aula 4: Sistema de geração contínua de ideias",
    value: "R$397",
    icon: TrendingUp,
    highlights: [
      "Processo estruturado de geração de ideias",
      "Calendário editorial otimizado",
      "Técnicas de brainstorming efetivo"
    ]
  },
  {
    number: 5,
    title: "Processo de escrita otimizado",
    description: "Módulo 1 – Aula 5: Framework de criação de conteúdo",
    value: "R$197",
    icon: MessageSquare,
    highlights: [
      "Framework de escrita profissional",
      "Técnicas de copywriting para LinkedIn",
      "Otimização de tempo na produção de conteúdo"
    ]
  },
  {
    number: 6,
    title: "Perfil que Vende 24/7",
    description: "Transforme seu perfil em máquina automática de geração de leads",
    value: "R$397",
    icon: BarChart,
    highlights: [
      "Otimização completa do perfil para máxima conversão de visitantes",
      "Sequência de elementos persuasivos que transformam visualizações em mensagens",
      "Sistema de follow-up que converte conexões em reuniões comerciais"
    ]
  },
  {
    number: 7,
    title: "Estratégias para Nichos Conservadores",
    description: "Domine o LinkedIn mesmo em setores tradicionais e técnicos",
    value: "R$297",
    icon: Zap,
    highlights: [
      "Como criar conteúdo viral em setores tradicionalmente conservadores",
      "Adaptações específicas para áreas técnicas, jurídicas e financeiras",
      "Estratégias avançadas de monetização para serviços de alto valor"
    ]
  }
];

const bonuses = [
  {
    icon: FileText,
    title: "Swipe File com 90 Hooks Virais",
    description: "Copie e adapte hooks que geraram milhões de visualizações em diferentes nichos",
    value: "R$297",
    color: "blue"
  },
  {
    icon: Edit,
    title: "200+ Palavras-Poder para Hooks",
    description: "Lista exclusiva de palavras e frases que geram cliques instantâneos nos seus posts",
    value: "R$197",
    color: "blue"
  },
  {
    icon: Monitor,
    title: "Templates de Carrossel no Canva",
    description: "10 templates profissionais prontos para personalizar e publicar imediatamente",
    value: "R$147",
    color: "blue"
  },
  {
    icon: CheckCircle,
    title: "Checklist do Post Perfeito",
    description: "Guia passo a passo para garantir que cada post que você criar tenha máximo impacto",
    value: "R$97",
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Plano de Ação de 30 Dias",
    description: "Roteiro diário do que fazer nos primeiros 30 dias para maximizar resultados rápidos",
    value: "R$97",
    color: "blue"
  },
  {
    icon: Users,
    title: "Comunidade VIP 12 Meses",
    description: "Acesso exclusivo à nossa comunidade privada com suporte direto dos mentores",
    value: "R$497",
    color: "blue"
  },
  {
    icon: Target,
    title: "Auditoria Personalizada do Perfil",
    description: "Análise detalhada do seu perfil com recomendações específicas (20 primeiros inscritos)",
    value: "R$497",
    color: "blue"
  },
  {
    icon: Award,
    title: "Certificado de Especialista",
    description: "Certificado digital que valida suas habilidades avançadas em LinkedIn para seu currículo",
    value: "R$47",
    color: "blue"
  },
  {
    icon: Clipboard,
    title: "Scripts de Mensagens para DM",
    description: "25 scripts prontos para iniciar conversas que convertem conexões em clientes",
    value: "R$97",
    color: "blue"
  }
];

const ModulesSection = () => {
  // Calculate total value
  const modulesTotal = modules.reduce((total, module) => {
    const value = parseInt(module.value.replace(/\D/g, ''));
    return total + value;
  }, 0);
  
  const bonusesTotal = bonuses.reduce((total, bonus) => {
    const value = parseInt(bonus.value.replace(/\D/g, ''));
    return total + value;
  }, 0);
  
  const grandTotal = modulesTotal + bonusesTotal;
  
  const scrollToPrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="modules" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            7 Módulos Transformacionais com Entregas Específicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um sistema completo e integrado para dominar o LinkedIn e transformá-lo em sua principal fonte de clientes
          </p>
        </div>
        
        <div className="space-y-8">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="flex flex-col md:flex-row">
                <div className="bg-gradient-to-br from-linkedin-primary to-linkedin-dark text-white p-6 md:w-1/3 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-white/20 p-2 rounded-full">
                      <module.icon className="h-6 w-6" />
                    </div>
                    <div className="ml-3 text-2xl font-bold">
                      Módulo {module.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-white/80 mb-3">{module.description}</p>
                  <div className="mt-auto bg-white/20 rounded-lg py-1 px-3 inline-block">
                    <span className="text-white font-bold">Valor: {module.value}</span>
                  </div>
                </div>
                
                <div className="p-6 md:w-2/3">
                  <ul className="space-y-3">
                    {module.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-linkedin-primary font-bold mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold text-gray-800">Valor total dos módulos: <span className="text-linkedin-primary">R${modulesTotal}</span></h3>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-xl font-bold mb-8">
            <Gift className="inline-block mr-2 h-5 w-5" /> + Bônus Exclusivos (Acesso Limitado)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index} 
                className="bg-white border-2 border-[#1EAEDB] p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <div className="bg-[#1EAEDB] text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <bonus.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-[#005f95] font-bold text-lg mb-2 text-center">{bonus.title}</h4>
                  <p className="text-gray-600 text-sm text-center mb-3">{bonus.description}</p>
                  <div className="mt-auto pt-2 border-t border-gray-100 w-full text-center">
                    <span className="font-bold text-linkedin-primary">Valor: {bonus.value}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl max-w-3xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-gray-800 mb-3">Valor total dos bônus: <span className="text-linkedin-primary">R${bonusesTotal}</span></h4>
            <div className="h-0.5 bg-yellow-300 my-4"></div>
            <h3 className="text-2xl font-extrabold text-gray-800">
              Você recebe <span className="text-linkedin-primary">R${grandTotal}</span> em valor total
            </h3>
            <p className="text-lg font-medium mt-2">
              Mas hoje pode acessar por apenas <span className="text-linkedin-primary font-bold">R$997</span> ou 12x de R$97
            </p>
          </div>
          
          <div className="bg-[#E6F7FF] border-2 border-[#1EAEDB] p-6 rounded-xl max-w-3xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-[#005f95] mb-3">ATENÇÃO: Bônus por tempo limitado!</h4>
            <p className="text-gray-700 mb-4">
              Estes bônus exclusivos (valor total de R${bonusesTotal}) estão disponíveis apenas por 24 horas ou até atingirmos o limite de 20 vagas para auditoria personalizada.
            </p>
          </div>
          
          <Button 
            className="cta-button text-lg bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-md font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={scrollToPrice}
          >
            Quero Acesso ao Treinamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
