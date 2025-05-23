
import React from 'react';
import { LinkedinIcon, Mail, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 md:pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6 text-linkedin-primary" />
              <span className={`font-bold ${isMobile ? 'text-lg' : 'text-xl'} text-white`}>LinkedIn Hackers Academy</span>
            </div>
            <p className={`mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
              O treinamento mais completo para transformar seu LinkedIn em uma máquina de oportunidades.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-linkedin-secondary hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:contato@revhackers.academy" className="text-linkedin-secondary hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={`font-bold ${isMobile ? 'text-base' : 'text-lg'} text-white mb-4`}>Links Rápidos</h3>
            <ul className="space-y-2 grid grid-cols-1">
              {[
                { name: "Módulos", href: "#modules" },
                { name: "Benefícios", href: "#benefits" },
                { name: "Depoimentos", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Política de Privacidade", href: "/politica-de-privacidade" },
                { name: "Termos de Uso", href: "/termos-de-uso" }
              ].map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("#") ? (
                    <a 
                      href={link.href} 
                      className={`hover:text-linkedin-secondary transition-colors ${isMobile ? 'text-sm' : 'text-base'}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className={`hover:text-linkedin-secondary transition-colors ${isMobile ? 'text-sm' : 'text-base'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={`font-bold ${isMobile ? 'text-base' : 'text-lg'} text-white mb-4`}>Contato e Suporte</h3>
            <p className={`mb-4 ${isMobile ? 'text-sm' : 'text-base'}`}>
              Dúvidas ou precisa de ajuda? Entre em contato conosco:
            </p>
            <a 
              href="mailto:contato@revhackers.academy" 
              className="text-linkedin-secondary hover:underline text-sm md:text-base"
            >
              contato@revhackers.academy
            </a>
            
            <div className="mt-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-linkedin-secondary" />
              <span className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>© 2025 LinkedIn Hackers Academy | Todos os direitos reservados</p>
          <p className={`mt-2 text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            Este material é protegido por direitos autorais. A reprodução ou distribuição não autorizada é proibida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
