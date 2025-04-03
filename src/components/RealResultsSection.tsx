
import React from 'react';
import { ChevronLeft, ChevronRight, Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  {
    image: "/lovable-uploads/dccbc0af-8083-45eb-9042-019f37190eae.png",
    title: "3 CENTÍMETROS ENTRE A VIDA E A MORTE: O QUE MEU ACIDENTE ME ENSINOU SOBRE LINKEDIN",
    module: "Hooks que Param o Feed",
    metrics: "1.858 reações • 994 comentários • 31 compartilhamentos",
    impression: "82.000+ impressões",
    result: "17 reuniões marcadas em 48h",
    description: "Este post sobre meu acidente gerou engajamento massivo devido ao gancho emocional e à lição de negócios inesperada."
  },
  {
    image: "/lovable-uploads/b7ef5154-2a8d-4baa-8a5e-e9c6f89686a5.png",
    title: "PARA DE MENTIR PRA SI MESMO!",
    module: "Formatação que Converte",
    metrics: "206 reações • 89 comentários • 4 compartilhamentos",
    impression: "20.522 impressões",
    result: "8 leads qualificados",
    description: "Um post simples com referência cultural à Matrix que gerou debates profundos e conexões de qualidade."
  },
  {
    image: "/lovable-uploads/1df326f2-14c2-4230-993e-de17f516705f.png",
    title: "FERRARI DE 3 MILHÕES PARADA NA FEIRA!",
    module: "Técnica da Controvérsia",
    metrics: "12.181 reações • 2.591 comentários • 537 compartilhamentos",
    impression: "1.413.024 impressões",
    result: "56 reuniões e 11 contratos",
    description: "Esse post foi denunciado pela Ferrari, mas gerou 56 reuniões e 11 contratos. Imagine o que você pode fazer aplicando a mesma estratégia."
  }
];

const RealResultsSection = () => {
  return (
    <section id="real-results" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">O que ensino no treinamento é o que vivo todos os dias no meu LinkedIn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns dos posts que me trouxeram contratos reais, reuniões e até polêmicas com grandes marcas:
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {posts.map((post, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-linkedin-primary/5 p-4 rounded-t-lg flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-linkedin-primary" />
                        <span className="text-sm font-medium text-linkedin-primary">
                          Post Real Aplicando a Técnica do Módulo {index + 1} – {post.module}
                        </span>
                      </div>
                      
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full object-cover border border-gray-200"
                          style={{ maxHeight: '500px' }}
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.impression}
                          </div>
                          <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.result}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-500 mb-3">
                          {post.metrics}
                        </div>
                        
                        <p className="text-gray-700 mb-0">
                          {post.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex items-center justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
        
        <div className="mt-12 text-center">
          <Button 
            className="cta-button"
            onClick={() => {
              const element = document.getElementById('cta');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Quero aplicar essa estratégia no meu perfil
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RealResultsSection;
