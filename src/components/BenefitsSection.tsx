
import React from 'react';
import { TrendingUp, Lightbulb, Clock, Target, Zap, Users } from 'lucide-react';

const benefits = [
  {
    title: "3x mais visualizações",
    description: "Ganhe 3x mais visualizações nos seus posts em 30 dias com técnicas específicas de engajamento do algoritmo.",
    icon: TrendingUp,
  },
  {
    title: "10-20 leads por semana",
    description: "Gere de 10 a 20 leads qualificados por semana com posts estrategicamente estruturados para converter.",
    icon: Target,
  },
  {
    title: "Economize 70% do tempo",
    description: "Diminua o tempo de criação de conteúdo em 70% com templates, frameworks e processos otimizados.",
    icon: Clock,
  },
  {
    title: "Perfil que vende 24/7",
    description: "Transforme seu perfil em uma página de vendas automática que atrai clientes enquanto você dorme.",
    icon: Zap,
  },
  {
    title: "Autoridade em qualquer nicho",
    description: "Desenvolva autoridade até nos nichos mais técnicos e conservadores com técnicas específicas por segmento.",
    icon: Lightbulb,
  },
  {
    title: "Fim da prospecção ativa",
    description: "Chega de correr atrás de clientes. Aprenda a atrair leads pré-vendidos que entram em contato com você.",
    icon: Users,
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Benefícios reais e mensuráveis para seu negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados comprovados por mais de 2.500 profissionais que implementaram o método
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md card-hover"
            >
              <div className="bg-linkedin-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-linkedin-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
