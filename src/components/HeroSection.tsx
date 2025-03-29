
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 space-y-6 mb-10 lg:mb-0">
            <h1 className="gradient-text leading-tight">
              Domine o LinkedIn e transforme seu perfil em uma máquina de leads
            </h1>
            
            <p className="text-xl text-gray-700 md:text-2xl">
              O treinamento mais COMPLETO e TRANSFORMADOR sobre LinkedIn que vai te ensinar os segredos que os TOP INFLUENCERS não compartilham.
            </p>
            
            <div className="py-4 space-y-4 md:space-y-0 md:space-x-4 md:flex">
              <Button className="cta-button w-full md:w-auto animate-pulse-glow">
                Quero Dominar o LinkedIn
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="w-full md:w-auto border-linkedin-primary text-linkedin-primary hover:bg-linkedin-primary/10">
                Ver módulos
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex">
                <span className="text-linkedin-primary font-bold">50.000+</span>
                <span className="ml-1">seguidores</span>
              </div>
              <div className="flex">
                <span className="text-linkedin-primary font-bold">15-20</span>
                <span className="ml-1">leads por semana</span>
              </div>
              <div className="flex">
                <span className="text-linkedin-primary font-bold">R$500.000+</span>
                <span className="ml-1">em contratos</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 lg:pl-12">
            <div className="bg-white rounded-xl shadow-2xl p-6 transform rotate-1 border-2 border-linkedin-primary/20">
              <div className="bg-gradient-to-r from-linkedin-primary to-linkedin-secondary text-white p-4 rounded-lg mb-6">
                <h3 className="text-xl font-bold">O que você vai aprender:</h3>
              </div>
              
              <ul className="space-y-3">
                {[
                  "Como criar hooks irresistíveis que geram cliques",
                  "Como formatar seu conteúdo para máximo engajamento",
                  "Como nunca mais ficar sem ideias de conteúdo",
                  "Como crescer sua audiência trabalhando MENOS",
                  "Como transformar seu perfil numa máquina de vendas 24/7"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-linkedin-primary font-bold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
