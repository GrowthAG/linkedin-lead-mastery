
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo vou precisar dedicar ao treinamento?",
    answer: "O treinamento foi desenhado para ser implementado em etapas, com cada módulo levando cerca de 1-2 horas para ser estudado. O ideal é dedicar pelo menos 3 horas por semana para estudar e implementar as estratégias."
  },
  {
    question: "Este treinamento funciona para quem está começando do zero no LinkedIn?",
    answer: "Absolutamente! Na verdade, muitos dos nossos melhores resultados vieram de pessoas que começaram praticamente do zero. O treinamento ensina desde os fundamentos até técnicas avançadas."
  },
  {
    question: "Funciona para qualquer nicho ou área de atuação?",
    answer: "Sim, as estratégias ensinadas são adaptáveis para qualquer nicho ou área profissional. Temos alunos de setores tradicionais como direito e contabilidade, até áreas mais inovadoras como blockchain e IA, todos obtendo excelentes resultados."
  },
  {
    question: "Por quanto tempo terei acesso ao material?",
    answer: "Você terá acesso vitalício ao treinamento e a todas as atualizações futuras. Além disso, também terá acesso à nossa comunidade exclusiva de alunos por 12 meses."
  },
  {
    question: "O que acontece se eu não gostar do treinamento?",
    answer: "Oferecemos garantia de satisfação de 30 dias. Se você implementar as estratégias e não ver resultados, ou simplesmente não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento."
  },
  {
    question: "Preciso ter um perfil profissional já consolidado?",
    answer: "Não, o treinamento ensina desde como configurar seu perfil de forma profissional até as estratégias mais avançadas. É adequado para qualquer nível de experiência no LinkedIn."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Esclarecendo suas principais dúvidas sobre o treinamento
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
