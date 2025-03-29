
import React from 'react';
import { LinkedinIcon, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LinkedinIcon className="h-6 w-6 text-linkedin-primary" />
              <span className="font-bold text-xl text-white">LinkedIn Hackers Academy</span>
            </div>
            <p className="mb-4">
              O treinamento mais completo para transformar seu LinkedIn em uma máquina de oportunidades.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-linkedin-secondary hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="mailto:contato@revhackers.academy" className="text-linkedin-secondary hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Módulos", href: "#modules" },
                { name: "Benefícios", href: "#benefits" },
                { name: "Depoimentos", href: "#testimonials" },
                { name: "FAQ", href: "#faq" },
                { name: "Política de Privacidade", href: "#" },
                { name: "Termos de Uso", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-linkedin-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Contato e Suporte</h3>
            <p className="mb-4">
              Dúvidas ou precisa de ajuda? Entre em contato conosco:
            </p>
            <a 
              href="mailto:contato@revhackers.academy" 
              className="text-linkedin-secondary hover:underline"
            >
              contato@revhackers.academy
            </a>
            
            <div className="mt-6 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-linkedin-secondary" />
              <span className="text-sm">Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 LinkedIn Hackers Academy | Todos os direitos reservados</p>
          <p className="mt-2">
            Este material é protegido por direitos autorais. A reprodução ou distribuição não autorizada é proibida.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
