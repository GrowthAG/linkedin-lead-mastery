
import React from 'react';
import { Shield, Clock, BrainCircuit, DollarSign, Target, Heart, PieChart, Award } from 'lucide-react';

const objections = [
  {
    title: "Já tentei outras estratégias sem resultado",
    response: "Nosso método é baseado em DADOS REAIS de +2.500 profissionais, não em teorias. Trabalhamos com o algoritmo ATUAL do LinkedIn, garantindo resultados em até 14 dias, mesmo para quem já tentou outras abordagens.",
    icon: BrainCircuit
  },
  {
    title: "Não tenho tempo para criar conteúdo",
    response: "Nosso método 80/20 exige apenas 2-3 horas por semana. Fornecemos templates prontos e um sistema de automação que reduz em 70% o tempo para criar conteúdo de alto impacto.",
    icon: Clock
  },
  {
    title: "Meu nicho é muito técnico/conservador",
    response: "Temos dezenas de casos de sucesso em áreas como direito, engenharia, medicina e finanças. Nossa estratégia preserva sua credibilidade enquanto aumenta drasticamente sua visibilidade.",
    icon: Target
  },
  {
    title: "O investimento parece alto para mim agora",
    response: "Um único cliente de alto valor paga o investimento muitas vezes. A maioria dos alunos recupera o investimento em menos de 30 dias, com ROI médio de 500% no primeiro trimestre.",
    icon: DollarSign
  },
  {
    title: "E se eu não conseguir os resultados?",
    response: "Oferecemos garantia de 30 dias baseada em RESULTADOS REAIS. Se você implementar as estratégias e não ver aumento significativo em métricas, devolvemos 100% do seu investimento.",
    icon: Shield
  },
  {
    title: "Não sou especialista em marketing digital",
    response: "Nosso método foi desenvolvido para qualquer pessoa, independente do seu conhecimento em marketing. 67% dos nossos melhores casos são de pessoas que nunca tinham criado conteúdo antes.",
    icon: Heart
  },
  {
    title: "Não tenho muitos seguidores ainda",
    response: "Isso é perfeito! Você evitará erros comuns. Alunos que começaram do zero conseguiram resultados até mais rápido por aplicarem a estratégia correta desde o início.",
    icon: PieChart
  },
  {
    title: "Já sou muito ocupado com meu trabalho",
    response: "Justamente por isso nosso método é otimizado para profissionais ocupados. Com apenas 30 minutos por dia, você consegue implementar as estratégias e ver resultados consistentes.",
    icon: Award
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objections.map((objection, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto border-2 border-linkedin-primary/10">
          <h3 className="text-xl font-bold mb-6 text-center text-linkedin-primary">O que está REALMENTE em jogo aqui?</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-red-500 pl-4 p-4 bg-red-50/50 rounded-r-lg">
              <h4 className="font-bold mb-3 text-gray-800">Se você continuar fazendo o mesmo:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Perder oportunidades de negócio para concorrentes menos qualificados que você</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Continuar investindo tempo em estratégias que não geram retorno concreto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Permanecer invisível enquanto outros em seu mercado se destacam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Precisar fazer prospecção ativa constantemente para conseguir clientes</span>
                </li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 p-4 bg-green-50/50 rounded-r-lg">
              <h4 className="font-bold mb-3 text-gray-800">Ao implementar o método:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  <span>Tornar-se uma referência respeitada em seu mercado em 60-90 dias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  <span>Atrair clientes de alto valor que chegam pré-vendidos para trabalhar com você</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  <span>Construir um ativo digital que gera leads qualificados 24 horas por dia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">•</span>
                  <span>Estabelecer seu posicionamento premium e aumentar seus preços com base em sua autoridade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
