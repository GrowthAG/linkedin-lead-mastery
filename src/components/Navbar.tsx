
import React from 'react';
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Clock } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 py-3 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LinkedinIcon className="h-8 w-8 text-linkedin-primary" />
          <span className="font-bold text-xl text-linkedin-primary">LinkedIn Hackers</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#modules" className="text-gray-600 hover:text-linkedin-primary transition-colors">Módulos</a>
          <a href="#benefits" className="text-gray-600 hover:text-linkedin-primary transition-colors">Benefícios</a>
          <a href="#testimonials" className="text-gray-600 hover:text-linkedin-primary transition-colors">Depoimentos</a>
          <a href="#faq" className="text-gray-600 hover:text-linkedin-primary transition-colors">FAQ</a>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center text-red-600 text-sm mr-2">
            <Clock className="h-4 w-4 mr-1 animate-pulse" />
            <span>Últimas vagas!</span>
          </div>
          <Button variant="default" className="bg-linkedin-primary hover:bg-linkedin-dark">
            Inscreva-se agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
