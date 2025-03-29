
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
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-xl font-bold mb-8">
            <Gift className="inline-block mr-2 h-5 w-5" /> + Bônus Especiais (Valor: R$1.997)
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-yellow-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h4 className="text-yellow-800 font-bold text-lg mb-2">Swipe File com 90 Hooks Virais</h4>
              <p className="text-yellow-700 text-sm">Copie e adapte hooks que geraram milhões de visualizações em diferentes nichos</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-blue-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Edit className="h-6 w-6" />
              </div>
              <h4 className="text-blue-800 font-bold text-lg mb-2">200+ Palavras-Poder para Hooks</h4>
              <p className="text-blue-700 text-sm">Lista exclusiva de palavras e frases que geram cliques instantâneos nos seus posts</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-purple-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-6 w-6" />
              </div>
              <h4 className="text-purple-800 font-bold text-lg mb-2">Templates de Carrossel no Canva</h4>
              <p className="text-purple-700 text-sm">10 templates profissionais prontos para personalizar e publicar imediatamente</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-green-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-green-800 font-bold text-lg mb-2">Checklist do Post Perfeito</h4>
              <p className="text-green-700 text-sm">Guia passo a passo para garantir que cada post que você criar tenha máximo impacto</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-red-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h4 className="text-red-800 font-bold text-lg mb-2">Plano de Ação de 30 Dias</h4>
              <p className="text-red-700 text-sm">Roteiro diário do que fazer nos primeiros 30 dias para maximizar resultados rápidos</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-2 border-indigo-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-indigo-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-indigo-800 font-bold text-lg mb-2">Comunidade VIP 12 Meses</h4>
              <p className="text-indigo-700 text-sm">Acesso exclusivo à nossa comunidade privada com suporte direto dos mentores</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-pink-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h4 className="text-pink-800 font-bold text-lg mb-2">Auditoria Personalizada do Perfil</h4>
              <p className="text-pink-700 text-sm">Análise detalhada do seu perfil com recomendações específicas (20 primeiros inscritos)</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="text-orange-800 font-bold text-lg mb-2">Certificado de Especialista</h4>
              <p className="text-orange-700 text-sm">Certificado digital que valida suas habilidades avançadas em LinkedIn para seu currículo</p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="bg-teal-500 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Clipboard className="h-6 w-6" />
              </div>
              <h4 className="text-teal-800 font-bold text-lg mb-2">Scripts de Mensagens para DM</h4>
              <p className="text-teal-700 text-sm">25 scripts prontos para iniciar conversas que convertem conexões em clientes</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-xl max-w-3xl mx-auto mb-10">
            <h4 className="text-xl font-bold text-yellow-800 mb-3">ATENÇÃO: Bônus por tempo limitado!</h4>
            <p className="text-yellow-700 mb-4">
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
