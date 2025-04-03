
import React from 'react';
import { Trophy, Award, Landmark, Users, Linkedin, Star, Target, BarChart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const CreatorSection = () => {
  return (
    <section id="creator" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">Conheça o Criador do Método</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda com quem realmente entende de LinkedIn e já transformou mais de 2.500 perfis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-linkedin-primary/5 p-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 mb-4">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <CardContent className="p-0">
              <p className="text-lg italic mb-4">
                "Desenvolvi este método após anos testando centenas de abordagens no LinkedIn. Não é baseado em teorias, mas em dados reais e experiência prática com mais de 2.500 profissionais que transformaram seus perfis."
              </p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/lovable-uploads/2c9551f6-2632-4b26-a272-76ab6ec2797f.png" />
                  <AvatarFallback>GA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">Giulliano Alves</p>
                  <p className="text-sm text-gray-600">Criador do LinkedIn Hackers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
            <div className="flex flex-col h-full">
              <div className="bg-gradient-to-tr from-linkedin-dark to-linkedin-primary p-6 text-white text-center">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 border-4 border-white/30 mb-4">
                    <AvatarImage src="/lovable-uploads/2c9551f6-2632-4b26-a272-76ab6ec2797f.png" alt="Giulliano Alves" />
                    <AvatarFallback>GA</AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-bold">Giulliano Alves</h3>
                  <p className="opacity-90 mt-1">Revenue Expert | B2B Growth Specialist | +R$100MM para empresas B2B & SaaS</p>
                  <a 
                    href="https://www.linkedin.com/in/giullianoalvess/" 
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
                    {[
                      "Especialista em Growth, ABM & Revenue Cycle",
                      "Gerador de +R$100MM em mídia paga gerenciados",
                      "Consultor de estratégias B2B para SaaS"
                    ].map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-linkedin-primary font-bold mr-2">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Trophy, value: "5k+", label: "conexões" },
                    { icon: BarChart, value: "R$100MM+", label: "em mídia" }
                  ].map((stat, idx) => (
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
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
