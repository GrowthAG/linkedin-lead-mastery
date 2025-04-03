
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <div className="flex flex-col items-center">
            <div className="bg-green-50 p-4 rounded-full mb-4">
              <ShieldCheck className="h-16 w-16 text-green-600" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Garantia Incondicional de Resultado</h2>
            
            <div className="h-1 w-20 bg-green-500 rounded-full mb-6"></div>
            
            <p className="text-xl mb-6 max-w-xl">
              Se você aplicar o método e não tiver mais visualizações, leads ou reuniões em 30 dias, 
              devolvemos 100% do seu investimento. Sem letra miúda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  title: "Visualizações",
                  description: "Mais visualizações nos seus conteúdos"
                },
                {
                  title: "Leads",
                  description: "Mais leads qualificados via LinkedIn"
                },
                {
                  title: "Reuniões",
                  description: "Mais reuniões com potenciais clientes"
                }
              ].map((item, index) => (
                <div key={index} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800">{item.title}</h3>
                  <p className="text-green-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
