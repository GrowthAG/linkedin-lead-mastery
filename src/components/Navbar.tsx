
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { LinkedinIcon, Clock, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPrice = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navbarClass = `fixed top-0 left-0 right-0 z-50 ${
    scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
  } border-b border-gray-200 py-3 px-4 md:px-8 transition-all duration-300 w-full`;

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LinkedinIcon className="h-6 w-6 md:h-8 md:w-8 text-linkedin-primary" />
          <span className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'} text-linkedin-primary`}>LinkedIn Hackers Academy</span>
        </div>
        
        {isMobile ? (
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-linkedin-primary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        ) : (
          <>
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
              <Button 
                variant="default" 
                className="bg-linkedin-primary hover:bg-linkedin-dark text-sm"
                onClick={scrollToPrice}
              >
                Inscreva-se agora
              </Button>
            </div>
          </>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 px-6 flex flex-col space-y-4 w-full">
          <a 
            href="#modules" 
            className="text-gray-600 hover:text-linkedin-primary transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Módulos
          </a>
          <a 
            href="#benefits" 
            className="text-gray-600 hover:text-linkedin-primary transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefícios
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-600 hover:text-linkedin-primary transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#faq" 
            className="text-gray-600 hover:text-linkedin-primary transition-colors py-2 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="flex items-center text-red-600 text-sm mt-2">
            <Clock className="h-4 w-4 mr-1 animate-pulse" />
            <span>Últimas vagas!</span>
          </div>
          <Button 
            variant="default" 
            className="bg-linkedin-primary hover:bg-linkedin-dark w-full mt-2 text-base"
            onClick={scrollToPrice}
          >
            Inscreva-se agora
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
