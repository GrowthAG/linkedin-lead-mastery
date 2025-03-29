
import React from 'react';
import { TrendingUp, Lightbulb, Clock, Target, Zap, Users } from 'lucide-react';

const benefits = [
  {
    title: "Cresça Organicamente",
    description: "Aprenda técnicas para crescer seu perfil de forma 100% orgânica, sem truques ou números falsos.",
    icon: TrendingUp,
  },
  {
    title: "Ideias Infinitas",
    description: "Sistema prático para nunca mais ficar sem ideias de conteúdo, mesmo em nichos considerados 'chatos'.",
    icon: Lightbulb,
  },
  {
    title: "Economize Tempo",
    description: "Técnicas otimizadas para maximizar seus resultados enquanto economiza tempo e esforço.",
    icon: Clock,
  },
  {
    title: "Atraia Clientes",
    description: "Transforme seu perfil em uma máquina de prospecção que atrai potenciais clientes 24 horas por dia.",
    icon: Target,
  },
  {
    title: "Estratégias Comprovadas",
    description: "Acesso a estratégias testadas e aprovadas que realmente funcionam no algoritmo atual do LinkedIn.",
    icon: Zap,
  },
  {
    title: "Comunidade Exclusiva",
    description: "Faça parte de uma comunidade de pessoas determinadas a dominar o LinkedIn para gerar resultados.",
    icon: Users,
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Por que este treinamento é diferente?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Este não é mais um curso genérico com dicas básicas. Aqui você encontra estratégias avançadas que realmente funcionam.
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
