const AdoptionProcess = () => {
  const steps = [
    {
      number: "01",
      emoji: "💬",
      title: "Primeiro Contato",
      description: "Entre em contato conosco através do WhatsApp. Conte-nos sobre você, sua família e por que deseja um Bengal."
    },
    {
      number: "02",
      emoji: "🏠",
      title: "Conhecendo o Gatil",
      description: "Agende uma visita para conhecer nossos gatinhos pessoalmente. Tire todas as suas dúvidas sobre a raça e nosso trabalho."
    },
    {
      number: "03",
      emoji: "💝",
      title: "Escolha do Filhote",
      description: "Ajudamos você a escolher o filhote ideal para seu perfil e estilo de vida. Cada gatinho tem uma personalidade única!"
    },
    {
      number: "04",
      emoji: "📋",
      title: "Reserva e Documentação",
      description: "Assinamos contrato de adoção responsável e você efetua a reserva. Mantemos contato até o gatinho estar pronto."
    },
    {
      number: "05",
      emoji: "🎉",
      title: "Entrega e Pós-Adoção",
      description: "Seu Bengal vai para casa com vacinas, vermifugação, pedigree e kit completo. Suporte vitalício garantido!"
    }
  ];

  return (
    <section className="bg-background py-24" id="adocao">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          Nosso Processo de Adoção
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-honey to-primary hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-honey rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {step.number}
              </div>
              <div className="flex-1 bg-card rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">{step.emoji}</div>
                <h3 className="text-2xl font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
