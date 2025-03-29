
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-linkedin-primary hover:text-linkedin-dark mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para a página inicial
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <p className="mb-4">
              A sua privacidade é importante para nós. Esta Política de Privacidade explica como o LinkedIn Hackers Academy coleta, usa, protege e compartilha suas informações pessoais quando você utiliza nossos serviços.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Informações de identificação pessoal (nome, e-mail, telefone)</li>
              <li>Informações de pagamento (processadas por nossas plataformas de pagamento parceiras)</li>
              <li>Informações sobre o uso da plataforma (aulas assistidas, interações)</li>
              <li>Dados técnicos (endereço IP, tipo de navegador)</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Como Usamos Suas Informações</h2>
            <p className="mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer e melhorar nossos serviços educacionais</li>
              <li>Processar pagamentos e gerenciar sua conta</li>
              <li>Enviar comunicações relacionadas ao curso</li>
              <li>Fornecer suporte ao cliente</li>
              <li>Analisar o uso da plataforma para melhorias</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-4">
              Não vendemos suas informações pessoais a terceiros. Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provedores de serviços que nos auxiliam a operar a plataforma</li>
              <li>Parceiros de processamento de pagamento</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Segurança de Dados</h2>
            <p className="mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              Dependendo da sua localização, você pode ter direitos relacionados às suas informações pessoais, incluindo:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar suas informações pessoais</li>
              <li>Retificar informações imprecisas</li>
              <li>Excluir suas informações (em determinadas circunstâncias)</li>
              <li>Restringir ou opor-se ao processamento de suas informações</li>
              <li>Solicitar a portabilidade de seus dados</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookies e Tecnologias Semelhantes</h2>
            <p className="mb-4">
              Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência, analisar o tráfego e personalizar o conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Alterações a Esta Política</h2>
            <p className="mb-4">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas por e-mail ou através de um aviso em nossa plataforma.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco pelo e-mail: <a href="mailto:contato@revhackers.academy" className="text-linkedin-primary hover:underline">contato@revhackers.academy</a>
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              variant="default" 
              className="bg-linkedin-primary hover:bg-linkedin-dark"
              onClick={() => window.history.back()}
            >
              Voltar
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
