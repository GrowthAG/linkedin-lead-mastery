
import React from 'react';
import { 
  BookOpen, 
  Layout, 
  Edit, 
  TrendingUp, 
  MessageSquare, 
  BarChart, 
  Zap,
  Gift,
  CheckCircle,
  FileText,
  Monitor,
  Calendar,
  Users,
  Target,
  Award,
  Clipboard
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const modules = [
  {
    number: 1,
    title: "Hooks Matadores",
    description: "A arma secreta para conseguir cliques e leituras",
    icon: BookOpen,
    highlights: [
      "Fórmula dos 3 segundos para capturar atenção",
      "12 estruturas de hooks testadas e aprovadas",
      "Como criar curiosidade irresistível"
    ]
  },
  {
    number: 2,
    title: "Formatação que Converte",
    description: "Transforme seu conteúdo em algo irresistível de ler",
    icon: Layout,
    highlights: [
      "Técnicas de formatação visual que prendem a atenção",
      "O segredo dos espaçamentos estratégicos",
      "Elementos visuais que aumentam engajamento"
    ]
  },
  {
    number: 3,
    title: "Criação de Conteúdo Infinito",
    description: "Nunca mais fique sem ideias matadoras",
    icon: Edit,
    highlights: [
      "Sistema de criação de conteúdo de 30 minutos",
      "Como reutilizar conteúdo antigo sem parecer repetitivo",
      "25 fontes de ideias para qualquer nicho"
    ]
  },
  {
    number: 4,
    title: 'A Fórmula "Forever 50"',
    description: "Trabalhe menos e cresça mais rápido",
    icon: TrendingUp,
    highlights: [
      "Como ganhar engajamento trabalhando menos",
      "Plano de produtividade para gestão de conteúdo",
      "Automatização do processo de criação"
    ]
  },
  {
    number: 5,
    title: "Comentários Estratégicos",
    description: "Use comentários para explodir seu alcance",
    icon: MessageSquare,
    highlights: [
      "Como usar comentários para aumentar visibilidade",
      "Sistema de 15 minutos para comentários estratégicos",
      "Técnicas de networking através de comentários"
    ]
  },
  {
    number: 6,
    title: "Transformando Perfil em Máquina de Vendas",
    description: "Seu perfil trabalhando por você 24/7",
    icon: BarChart,
    highlights: [
      "Otimização completa do perfil para conversão",
      "Sequência de etapas para transformar conexões em clientes",
      "Automação de mensagens e follow-ups"
    ]
  },
  {
    number: 7,
    title: "Estratégias Avançadas",
    description: "Leve seu LinkedIn para o próximo nível",
    icon: Zap,
    highlights: [
      "Como criar conteúdo viral em setores conservadores",
      "Estratégias de crescimento acelerado",
      "Monetização avançada da sua presença no LinkedIn"
    ]
  }
];

const bonuses = [
  {
    icon: FileText,
    title: "Swipe File com 90 Hooks Virais",
    description: "Copie e adapte hooks que geraram milhões de visualizações em diferentes nichos",
    color: "blue"
  },
  {
    icon: Edit,
    title: "200+ Palavras-Poder para Hooks",
    description: "Lista exclusiva de palavras e frases que geram cliques instantâneos nos seus posts",
    color: "blue"
  },
  {
    icon: Monitor,
    title: "Templates de Carrossel no Canva",
    description: "10 templates profissionais prontos para personalizar e publicar imediatamente",
    color: "blue"
  },
  {
    icon: CheckCircle,
    title: "Checklist do Post Perfeito",
    description: "Guia passo a passo para garantir que cada post que você criar tenha máximo impacto",
    color: "blue"
  },
  {
    icon: Calendar,
    title: "Plano de Ação de 30 Dias",
    description: "Roteiro diário do que fazer nos primeiros 30 dias para maximizar resultados rápidos",
    color: "blue"
  },
  {
    icon: Users,
    title: "Comunidade VIP 12 Meses",
    description: "Acesso exclusivo à nossa comunidade privada com suporte direto dos mentores",
    color: "blue"
  },
  {
    icon: Target,
    title: "Auditoria Personalizada do Perfil",
    description: "Análise detalhada do seu perfil com recomendações específicas (20 primeiros inscritos)",
    color: "blue"
  },
  {
    icon: Award,
    title: "Certificado de Especialista",
    description: "Certificado digital que valida suas habilidades avançadas em LinkedIn para seu currículo",
    color: "blue"
  },
  {
    icon: Clipboard,
    title: "Scripts de Mensagens para DM",
    description: "25 scripts prontos para iniciar conversas que convertem conexões em clientes",
    color: "blue"
  }
];

const ModulesSection = () => {
  return (
    <section id="modules" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Conheça os 7 módulos do treinamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada módulo foi cuidadosamente projetado para construir sobre o anterior, criando um sistema completo e integrado.
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
                  <p className="text-white/80">{module.description}</p>
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
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-xl font-bold mb-8">
            <Gift className="inline-block mr-2 h-5 w-5" /> + Bônus Especiais (Valor: R$1.997)
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
                  <p className="text-gray-600 text-sm text-center">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-[#E6F7FF] border-2 border-[#1EAEDB] p-6 rounded-xl max-w-3xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-[#005f95] mb-3">ATENÇÃO: Bônus por tempo limitado!</h4>
            <p className="text-gray-700 mb-4">
              Estes bônus exclusivos (valor total de R$1.997) estão disponíveis apenas para as próximas 24 horas ou até atingirmos o limite de vagas.
            </p>
          </div>
          
          <Button 
            className="cta-button text-lg"
            onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
          >
            Quero Acesso ao Treinamento + Todos os Bônus
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
