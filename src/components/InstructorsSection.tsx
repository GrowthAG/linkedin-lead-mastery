
import React from 'react';
import { Trophy, Award, Landmark, Users, Linkedin, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const instructors = [
  {
    name: "Giulliano Alves",
    role: "Sales Navigator | Marketing Digital | LinkedIn Strategist",
    photo: "/lovable-uploads/2c9551f6-2632-4b26-a272-76ab6ec2797f.png",
    testimonial: "Desenvolvi este método após anos testando centenas de abordagens no LinkedIn. Não é baseado em teorias, mas em dados reais e experiência prática com mais de 2.500 profissionais.",
    achievements: [
      "Speaker e consultor com foco em estratégias B2B",
      "Especialista em LinkedIn e prospecção digital",
      "Criador do método LinkedIn Lab"
    ],
    stats: [
      { icon: Trophy, value: "5k+", label: "conexões" },
      { icon: Users, value: "200+", label: "alunos" }
    ],
    linkedIn: "https://www.linkedin.com/in/giullianoalvess/"
  },
  {
    name: "Henrique Caner",
    role: "LinkedIn Strategy | Copywriting | Geração de Leads B2B",
    photo: "/lovable-uploads/6638bfe7-fad6-4184-b786-77df16a32ed1.png",
    testimonial: "Transformei minha presença digital através de estratégias que realmente funcionam. Nossos alunos conseguem resultados concretos porque aplicamos técnicas testadas e comprovadas no mercado atual.",
    achievements: [
      "Especialista em criação de conteúdo para LinkedIn",
      "Estrategista de Marketing Digital",
      "Especialista em conversão de conexões em oportunidades"
    ],
    stats: [
      { icon: Award, value: "15+", label: "leads/semana" },
      { icon: Landmark, value: "10k+", label: "seguidores" }
    ],
    linkedIn: "https://www.linkedin.com/in/henriquecaner/"
  }
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Quem Está por Trás dos Resultados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não são apenas teorias. Aprendemos na prática o que realmente funciona no LinkedIn atual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {instructors.map((instructor, index) => (
            <Card key={index} className="bg-linkedin-primary/5 p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <CardContent className="p-0">
                <p className="text-lg italic mb-4">
                  "{instructor.testimonial}"
                </p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={instructor.photo} />
                    <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{instructor.name}</p>
                    <p className="text-sm text-gray-600">Co-Criador do LinkedIn Hackers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-linkedin-primary">Conheça nossos especialistas</h3>
          <p className="text-gray-600 mt-2">
            Aprenda com quem realmente domina o LinkedIn e já transformou milhares de perfis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructors.map((instructor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
            >
              <div className="flex flex-col h-full">
                <div className="bg-gradient-to-tr from-linkedin-dark to-linkedin-primary p-6 text-white text-center">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-32 h-32 border-4 border-white/30 mb-4">
                      <AvatarImage src={instructor.photo} alt={instructor.name} />
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl font-bold">{instructor.name}</h3>
                    <p className="opacity-90 mt-1">{instructor.role}</p>
                    <a 
                      href={instructor.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center mt-2 bg-white/20 px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      <span>Perfil LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-linkedin-primary">Expertise:</h4>
                    <ul className="space-y-2">
                      {instructor.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-linkedin-primary font-bold mr-2">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {instructor.stats.map((stat, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 flex items-center">
                        <div className="bg-linkedin-primary/10 p-2 rounded-full mr-3">
                          <stat.icon className="h-5 w-5 text-linkedin-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-linkedin-primary">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos este método após anos testando centenas de abordagens diferentes. 
            <span className="font-bold"> Não é baseado em teorias, mas em dados reais e experiência prática 
            com mais de 2.500 profissionais que transformaram seus perfis de invisíveis para referências em seus nichos.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
