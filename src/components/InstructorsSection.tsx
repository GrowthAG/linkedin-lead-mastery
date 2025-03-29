
import React from 'react';
import { Trophy, Award, Landmark, Users, Linkedin, Star, Target, BarChart, Rocket } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const instructors = [
  {
    name: "Giulliano Alves",
    role: "Revenue Expert | B2B Growth Specialist | +R$100MM para empresas B2B & SaaS",
    photo: "/lovable-uploads/2c9551f6-2632-4b26-a272-76ab6ec2797f.png",
    testimonial: "E aí, growth hacker! Depois de queimar milhares em ads sem ROI, criei este método data-driven. Testei +500 formatos de conteúdo e abordagens no LinkedIn para extrair insights reais que você não encontra em blogs ou cursos teóricos. Isso não é achismo, é growth hacking puro!",
    achievements: [
      "Especialista em Growth, ABM & Revenue Cycle",
      "Gerador de +R$100MM em mídia paga gerenciados",
      "Consultor de estratégias B2B para SaaS"
    ],
    stats: [
      { icon: Trophy, value: "5k+", label: "conexões" },
      { icon: BarChart, value: "R$100MM+", label: "em mídia" }
    ],
    linkedIn: "https://www.linkedin.com/in/giullianoalvess/"
  },
  {
    name: "Henrique Caner",
    role: "Advisor de Growth 2024 | Growth Hacker | CMO as a Service | Geração de Demanda",
    photo: "/lovable-uploads/6638bfe7-fad6-4184-b786-77df16a32ed1.png",
    testimonial: "Se você é analista de growth ou startup founder e quer gerar pipeline qualificado sem queimar budget em teste A/B sem fim, temos a solução! Aplico frameworks validados que tiram startups do zero ao MRR/ARR previsível em tempo recorde, sem bullshit de coach ou teoria acadêmica.",
    achievements: [
      "Especialista em estratégias de Growth e Revenue Hacks",
      "CMO as a Service para empresas B2B e SaaS",
      "Responsável por R$50M+ em M&A de Startups"
    ],
    stats: [
      { icon: Award, value: "15+", label: "leads/semana" },
      { icon: Landmark, value: "R$50M+", label: "em M&A" }
    ],
    linkedIn: "https://www.linkedin.com/in/henriquecaner/"
  }
];

const InstructorsSection = () => {
  return (
    <section id="instructors" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Growth Hackers por trás dos números</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nada de teoria ou achismos. Somos data-driven e obsessivos por resultados mensuráveis.
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
          <h3 className="text-2xl font-bold text-linkedin-primary">Conheça os especialistas em growth</h3>
          <p className="text-gray-600 mt-2">
            Aprenda frameworks de crescimento com quem já validou o método em centenas de startups
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
                    <h4 className="text-lg font-semibold mb-3 text-linkedin-primary">Stack de Growth:</h4>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Tá cansado de teoria que não gera resultado? Chega de queimar CAC sem retorno!
            <span className="font-bold"> Nosso treinamento é feito por e para growth hackers - profissionais obcecados por métricas 
            que geraram pipeline real para mais de 2.500 startups e scale-ups.</span>
          </p>
          
          <Button 
            className="cta-button"
            onClick={() => window.location.href = "https://checkout.revhackers.academy/linkedin-hackers"}
          >
            Quero Hackear o Algoritmo do LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
