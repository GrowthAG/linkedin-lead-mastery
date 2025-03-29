
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo vou precisar dedicar ao treinamento?",
    answer: "O treinamento foi desenhado para profissionais ocupados. Cada módulo leva cerca de 1-2 horas para ser estudado. Recomendamos dedicar pelo menos 30 minutos por dia ou 3 horas por semana para implementar as estratégias e ver resultados significativos."
  },
  {
    question: "Este treinamento funciona para quem está começando do zero no LinkedIn?",
    answer: "Absolutamente! Na verdade, 67% dos nossos melhores casos são de pessoas que começaram praticamente do zero. O método é ainda mais eficaz para quem está começando porque você implementará as estratégias corretas desde o início, evitando erros comuns."
  },
  {
    question: "Em quanto tempo vou começar a ver resultados?",
    answer: "Nossos alunos geralmente veem aumento nas visualizações e engajamento já na primeira semana. Resultados mais significativos como leads qualificados começam a aparecer entre 14 e 30 dias, dependendo da consistência na aplicação do método. Por isso oferecemos garantia de 30 dias."
  },
  {
    question: "Funciona para qualquer nicho ou área de atuação?",
    answer: "Sim, temos casos de sucesso em mais de 37 nichos diferentes. Desde áreas tradicionais como direito, contabilidade e medicina, até setores mais inovadores como tecnologia, blockchain e IA. O método é adaptável a qualquer segmento e perfil profissional."
  },
  {
    question: "Por quanto tempo terei acesso ao material?",
    answer: "Você terá acesso vitalício ao treinamento e a todas as atualizações futuras. Além disso, também terá acesso à nossa comunidade exclusiva de alunos por 12 meses, onde poderá tirar dúvidas e receber feedback constante."
  },
  {
    question: "Como funciona a garantia de resultados?",
    answer: "Se você implementar as estratégias conforme orientado e não ver um aumento significativo em suas métricas (visualizações, conexões e mensagens) em 30 dias, basta nos enviar um relatório mostrando que você aplicou o método e devolvemos 100% do seu investimento, sem questionamentos."
  },
  {
    question: "Preciso ter conhecimentos avançados em marketing digital?",
    answer: "Não. O treinamento foi projetado para ser acessível a qualquer pessoa, independentemente do seu nível de conhecimento em marketing. Explicamos tudo passo a passo, desde o básico até as estratégias mais avançadas."
  },
  {
    question: "Qual a diferença entre este método e outros treinamentos de LinkedIn?",
    answer: "A maioria dos treinamentos se baseia em teorias genéricas. Nosso método foi desenvolvido a partir de testes reais com mais de 2.500 profissionais e é continuamente atualizado com base no algoritmo atual do LinkedIn. Além disso, oferecemos garantia baseada em resultados, não apenas satisfação."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre o LinkedIn Hackers
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Ainda com dúvidas? Entre em contato conosco:
          </p>
          <a href="mailto:suporte@revhackers.academy" className="text-linkedin-primary font-medium hover:underline">
            suporte@revhackers.academy
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
