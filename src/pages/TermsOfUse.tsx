
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-linkedin-primary hover:text-linkedin-dark mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para a página inicial
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e utilizar o programa LinkedIn Hackers Academy, você concorda em cumprir e estar vinculado pelos seguintes termos e condições. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar nossos serviços.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">2. Descrição do Serviço</h2>
            <p className="mb-4">
              O LinkedIn Hackers Academy oferece treinamento educacional sobre uso estratégico do LinkedIn para fins profissionais. Nosso conteúdo inclui, mas não se limita a, vídeos, documentos, webinars e material de apoio.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">3. Uso da Conta</h2>
            <p className="mb-4">
              Ao criar uma conta em nossa plataforma, você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorrem em sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">4. Direitos de Propriedade Intelectual</h2>
            <p className="mb-4">
              Todo o conteúdo fornecido como parte do LinkedIn Hackers Academy, incluindo textos, gráficos, logotipos, imagens, vídeos e material de curso, está protegido por direitos autorais e outras leis de propriedade intelectual. Este conteúdo é fornecido apenas para seu uso pessoal e não comercial.
            </p>
            <p className="mb-4">
              É estritamente proibido reproduzir, distribuir, modificar, exibir publicamente, preparar trabalhos derivados ou explorar de outra forma qualquer conteúdo do programa sem nossa autorização expressa por escrito.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">5. Política de Reembolso</h2>
            <p className="mb-4">
              Oferecemos uma garantia de satisfação de 30 dias. Se você implementar as estratégias conforme orientado e não ver um aumento significativo em suas métricas (visualizações, conexões e mensagens) em 30 dias, entre em contato conosco com seu relatório de implementação para solicitar um reembolso.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O LinkedIn Hackers Academy não garante resultados específicos do uso de nossos serviços. Os resultados podem variar com base em diversos fatores, incluindo seu setor, experiência prévia, e consistência na aplicação dos métodos ensinados.
            </p>
            <p className="mb-4">
              Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">7. Modificações dos Termos</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação dos termos atualizados. Seu uso continuado dos serviços após tais alterações constitui sua aceitação dos novos termos.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">8. Legislação Aplicável</h2>
            <p className="mb-4">
              Estes termos serão regidos e interpretados de acordo com as leis do Brasil, independentemente de seus conflitos de princípios legais.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contato</h2>
            <p className="mb-4">
              Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pelo e-mail: <a href="mailto:contato@revhackers.academy" className="text-linkedin-primary hover:underline">contato@revhackers.academy</a>
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

export default TermsOfUse;
