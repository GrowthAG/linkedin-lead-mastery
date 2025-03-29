
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    position: "Marketing Manager",
    company: "Tech Solutions",
    testimonial: "Cresci de 600 para 15.000 seguidores em apenas 6 meses aplicando as estratégias deste treinamento. O mais impressionante é que minha taxa de conversão triplicou!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Carlos Mendes",
    position: "Sales Director",
    company: "Finance Corp",
    testimonial: "Já fiz vários cursos de LinkedIn antes, mas este é outro nível. Aprendi como criar hooks que realmente funcionam e consegui 5 clientes novos no primeiro mês.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Patricia Oliveira",
    position: "CEO",
    company: "Creative Agency",
    testimonial: "Eu estava completamente perdida no LinkedIn, postando sem estratégia. Depois deste treinamento, consigo gerar leads qualificados semanalmente sem esforço.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gradient-text mb-4">
            O que dizem nossos alunos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centenas de profissionais já transformaram sua presença no LinkedIn com nosso método
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
          <h3 className="text-2xl font-bold mb-4">Resultados que você pode esperar:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { number: "3-5x", label: "mais visualizações" },
              { number: "300%", label: "aumento em conexões" },
              { number: "10-20", label: "leads por semana" },
              { number: "5-10x", label: "ROI do investimento" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-linkedin-primary">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
