<section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between pt-20 pb-12 px-4 bg-gradient-to-b from-white to-gray-50 w-full overflow-x-hidden">
  <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
    {/* Texto */}
    <div className="w-full md:w-3/5 text-center md:text-left">
      <div className="inline-flex items-center bg-linkedin-primary/10 text-linkedin-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
        <span>Metodologia comprovada por 2.500+ profissionais</span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005f95] leading-tight mb-6">
        Seu LinkedIn como Máquina<br className="hidden md:block" />
        de Vendas e Reuniões<br className="hidden md:block" />
        em 30 Dias ou Menos
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mb-8">
        <strong className="text-linkedin-primary">2.500+ profissionais</strong> já transformaram o LinkedIn em canal de <strong className="text-linkedin-primary">geração automática de leads</strong> usando nosso método exclusivo comprovado por números.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8 text-left">
        <p className="text-lg md:text-xl font-medium">
          "Depois de aplicar o método por apenas 3 semanas, fechei 2 contratos que pagaram o investimento mais de 10x" - <span className="italic">Marcela R., Consultora Financeira</span>
        </p>
      </div>

      <div className="flex items-center justify-start gap-2 py-4">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map(num => (
            <img 
              key={num}
              src={`https://i.pravatar.cc/40?img=${num+10}`} 
              className="w-8 h-8 rounded-full border-2 border-white" 
              alt="Aluno" 
            />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          <span className="font-bold text-linkedin-primary">+2.500 profissionais</span> já transformaram seu LinkedIn
        </p>
      </div>

      <Button 
        variant="outline" 
        className="mt-8 border-linkedin-primary text-linkedin-primary hover:bg-linkedin-primary/10 text-base"
        onClick={() => scrollToSection('benefits')}
      >
        Ver benefícios
        <ArrowDown className="ml-2 h-4 w-4" />
      </Button>
    </div>

    {/* Imagem */}
    <div className="w-full md:w-2/5 flex justify-center mb-10 md:mb-0 md:pl-10">
      <div className="text-center">
        <img 
          src="/images/ferrari-post.png" 
          alt="Post viral do LinkedIn" 
          className="rounded-xl shadow-xl max-w-[360px] w-full h-auto"
        />
        <p className="text-xs text-gray-500 mt-2 italic">
          Post com +1.5M de impressões gerou 56 reuniões e R$167mil em contratos
        </p>
      </div>
    </div>
  </div>
</section>
