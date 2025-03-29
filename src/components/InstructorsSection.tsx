
import React from 'react';
import { Trophy, Award, Landmark, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const instructors = [
  {
    name: "Giulliano Alves",
    role: "Especialista em LinkedIn & Marketing Digital",
    photo: "/lovable-uploads/2c9551f6-2632-4b26-a272-76ab6ec2797f.png",
    achievements: [
      "Mais de 50.000 seguidores no LinkedIn",
      "Especialista em geração de leads B2B",
      "Ajudou mais de 300 profissionais a transformarem seus perfis"
    ],
    stats: [
      { icon: Trophy, value: "50k+", label: "seguidores" },
      { icon: Users, value: "300+", label: "alunos" }
    ]
  },
  {
    name: "Henrique Caner",
    role: "Especialista em Conteúdo & Estratégia Digital",
    photo: "/lovable-uploads/6638bfe7-fad6-4184-b786-77df16a32ed1.png",
    achievements: [
      "Criador de conteúdo viral em setores conservadores",
      "Especialista em copywriting para LinkedIn",
      "Fechou mais de R$500.000 em contratos pelo LinkedIn"
    ],
    stats: [
      { icon: Award, value: "15-20", label: "leads/semana" },
      { icon: Landmark, value: "R$500k+", label: "em contratos" }
    ]
  }
];

const InstructorsSection = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="text-center mb-12">
        <h2 className="gradient-text mb-4">Conheça Seus Mentores</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aprenda com quem realmente domina o LinkedIn e já transformou centenas de perfis em máquinas de oportunidades.
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
      
      <div className="text-center mt-8 bg-blue-50 p-6 rounded-lg max-w-3xl mx-auto">
        <p className="text-lg text-blue-800">
          "Este material contém anos de testes, erros e acertos condensados em um sistema prático e testado. A diferença entre quem consegue resultados e quem não consegue está na IMPLEMENTAÇÃO."
        </p>
      </div>
    </div>
  );
};

export default InstructorsSection;
