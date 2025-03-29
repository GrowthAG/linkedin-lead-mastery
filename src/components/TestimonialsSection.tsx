
import React from 'react';
import { Star, BarChart, TrendingUp, Users } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    position: "Marketing Manager",
    company: "Tech Solutions",
    testimonial: "Cresci de 600 para 15.000 seguidores em apenas 6 meses aplicando as estratégias deste treinamento. O mais impressionante? Minha taxa de conversão triplicou! Todo growth hacker deveria dominar essas táticas.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Carlos Mendes",
    position: "Sales Director",
    company: "Finance Corp",
    testimonial: "Como growth analyst, já tinha feito vários cursos de LinkedIn, mas esse é de outro planeta! Aprendi hooks de conversão que realmente funcionam para B2B e consegui 5 clientes enterprise no primeiro mês após implementar.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Patricia Oliveira",
    position: "CEO",
    company: "Creative Agency",
    testimonial: "Minha startup precisava de pipeline qualificado, e eu estava queimando cash em ads sem resultado. Este treinamento mudou tudo - hoje geramos leads de alto fit toda semana com conteúdo orgânico estruturado.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            O que os growth hackers estão falando
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Startups, analistas e profissionais de growth que transformaram sua geração de leads com nossas táticas data-driven
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full card-hover"
            >
              <div className="flex items-center mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-current h-5 w-5" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 flex-grow">
                "{testimonial.testimonial}"
              </p>
              
              <div className="flex items-center mt-auto">
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
          <h3 className="text-2xl font-bold mb-4">Métricas para growth hackers de verdade:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { 
                icon: TrendingUp,
                number: "3-5x", 
                label: "aumento em alcance orgânico" 
              },
              { 
                icon: Users,
                number: "300%", 
                label: "mais conexões qualificadas" 
              },
              { 
                icon: BarChart,
                number: "10-20", 
                label: "leads enterprise/semana" 
              },
              { 
                icon: Star,
                number: "5-10x", 
                label: "ROI validado por dados" 
              }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-linkedin-primary" />
                </div>
                <div className="text-3xl font-bold text-linkedin-primary">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
