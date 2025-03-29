
import React from 'react';
import { Shield, Clock, BrainCircuit, DollarSign, Target, Heart } from 'lucide-react';

const objections = [
  {
    title: "Não tenho tempo para criar conteúdo",
    response: "Com nosso método 80/20, você precisará de apenas 2-3 horas por semana para criar conteúdo de alto impacto. Nossas ferramentas de automação reduzem o tempo gasto em 70%.",
    icon: Clock
  },
  {
    title: "Meu nicho é muito técnico/conservador",
    response: "Temos dezenas de alunos de áreas como direito, engenharia e finanças que estão crescendo exponencialmente. Nosso método se adapta a qualquer nicho, mantendo sua credibilidade.",
    icon: Target
  },
  {
    title: "Já tentei outras estratégias sem sucesso",
    response: "Diferente de outras abordagens, nosso método é baseado em dados e testes reais com mais de 2.500 profissionais. Trabalhamos com o algoritmo atual do LinkedIn, não com teorias obsoletas.",
    icon: BrainCircuit
  },
  {
    title: "O investimento é muito alto para mim agora",
    response: "Considere quanto vale um novo cliente para seu negócio. Muitos alunos recuperam o investimento com apenas 1-2 novos clientes, frequentemente na primeira semana após a implementação.",
    icon: DollarSign
  },
  {
    title: "E se eu não conseguir os resultados prometidos?",
    response: "Oferecemos garantia de satisfação de 30 dias. Se você implementar as estratégias e não ver melhoria significativa, devolvemos 100% do seu investimento sem questionamentos.",
    icon: Shield
  },
  {
    title: "Não tenho experiência suficiente no LinkedIn",
    response: "Nosso método foi desenvolvido tanto para iniciantes quanto para usuários avançados. Mais de 40% dos nossos alunos começaram do zero, e hoje têm perfis de alto impacto.",
    icon: Heart
  },
];

const ObjectionsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">
            Ainda com dúvidas? Entendemos você.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sabemos que você pode ter algumas preocupações. Vamos endereçá-las diretamente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objections.map((objection, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-linkedin-primary/10 p-2 rounded-full mr-3">
                  <objection.icon className="h-5 w-5 text-linkedin-primary" />
                </div>
                <h3 className="font-bold text-lg">{objection.title}</h3>
              </div>
              
              <p className="text-gray-600">{objection.response}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">O que está realmente em jogo?</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold mb-2">Se você não agir agora:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Continuar invisível enquanto concorrentes crescem</li>
                <li>• Perder oportunidades valiosas de networking</li>
                <li>• Investir tempo em estratégias ineficientes</li>
                <li>• Deixar dinheiro na mesa enquanto outros capturam leads</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold mb-2">Ao implementar o método:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Tornar-se referência em seu nicho</li>
                <li>• Atrair oportunidades sem precisar prospectar</li>
                <li>• Construir autoridade que se converte em negócios</li>
                <li>• Criar uma máquina de leads que trabalha 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
