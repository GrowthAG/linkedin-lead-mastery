
import React from 'react';
import { 
  BookOpen, 
  Layout, 
  Edit, 
  TrendingUp, 
  MessageSquare, 
  BarChart, 
  Zap 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

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
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">+ Bônus Especiais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            {[
              "Swipe File com 90 Hooks Virais",
              "200+ Palavras-Poder para Hooks",
              "Templates de Carrossel no Canva",
              "Checklist do Post Perfeito",
              "Plano de Ação de 30 Dias"
            ].map((bonus, idx) => (
              <div key={idx} className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                <p className="font-semibold text-yellow-800">{bonus}</p>
              </div>
            ))}
          </div>
          
          <Button 
            className="cta-button"
            onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
          >
            Quero Acesso ao Treinamento Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
