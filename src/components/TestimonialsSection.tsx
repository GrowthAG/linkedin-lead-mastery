
import React from 'react';
import { Star, Users, TrendingUp, Clock } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    position: "Marketing Manager",
    company: "Tech Solutions",
    testimonial: "Depois de 8 semanas usando o método, meus posts estão gerando 3x mais visualizações e fechei 4 contratos diretos pelo LinkedIn. O mais impressionante foi reduzir meu tempo de criação de conteúdo em 70%.",
    avatar: "https://i.pravatar.cc/150?img=1",
    highlight: "4 contratos fechados em 8 semanas"
  },
  {
    name: "Carlos Mendes",
    position: "Sales Director",
    company: "Finance Corp",
    testimonial: "Investi no LinkedIn Hackers há 3 meses e já recuperei 8x o valor. Tinha dúvidas por ser de um setor conservador (financeiro), mas as estratégias para nichos técnicos funcionaram perfeitamente.",
    avatar: "https://i.pravatar.cc/150?img=3",
    highlight: "ROI de 8x em apenas 3 meses"
  },
  {
    name: "Patricia Oliveira",
    position: "CEO",
    company: "Creative Agency",
    testimonial: "Antes eu era completamente invisível no LinkedIn. Após aplicar o método, me tornei referência no meu nicho e agora recebo cerca de 15 leads qualificados por semana, sem precisar fazer prospecção ativa.",
    avatar: "https://i.pravatar.cc/150?img=5",
    highlight: "De invisível a 15 leads semanais"
  },
];

const impactMetrics = [
  { number: "3-5x", label: "mais visualizações", icon: TrendingUp },
  { number: "300%", label: "aumento em conexões", icon: Users },
  { number: "10-20", label: "leads qualificados/semana", icon: Users },
  { number: "-70%", label: "tempo de produção", icon: Clock },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            Transformações reais de quem aplicou o método
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados concretos e mensuráveis de profissionais que aplicaram nosso sistema
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full card-hover"
            >
              <div className="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold self-start mb-3">
                {testimonial.highlight}
              </div>
              
              <div className="flex items-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current h-5 w-5" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 flex-grow">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Resultados médios após 30-60 dias:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {impactMetrics.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-linkedin-primary/5 rounded-lg">
                <div className="inline-block bg-linkedin-primary/10 p-2 rounded-full mb-2">
                  <stat.icon className="h-6 w-6 text-linkedin-primary" />
                </div>
                <div className="text-3xl font-bold text-linkedin-primary">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 bg-white border-l-4 border-blue-500 p-4 md:p-6 rounded-r-lg max-w-4xl mx-auto shadow-sm">
          <div className="flex items-start md:items-center">
            <div className="mr-4 flex-shrink-0">
              <img 
                src="https://i.pravatar.cc/60?img=8" 
                alt="Cliente satisfeito" 
                className="w-12 h-12 rounded-full border-2 border-blue-100"
              />
            </div>
            <div>
              <p className="text-blue-800 italic mb-2 text-sm md:text-base">
                "Antes do LinkedIn Hackers, eu gastava horas criando conteúdo sem resultados. Hoje consigo 3-5 reuniões comerciais por semana apenas pelo LinkedIn, com conversão de 30% em contratos. Em 90 dias, recuperei o investimento mais de 20x."
              </p>
              <p className="font-semibold text-blue-900 text-sm md:text-base">— Ricardo M., Consultor de Marketing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
