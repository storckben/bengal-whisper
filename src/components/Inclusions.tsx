import { Check } from 'lucide-react';

const Inclusions = () => {
  const inclusions = [
    { text: "Pedigree TICA ou CAT", detail: "Certificado internacional" },
    { text: "Vacinas em Dia", detail: "Protocolo completo" },
    { text: "Vermifugação", detail: "Livre de parasitas" },
    { text: "Microchip Identificação", detail: "Segurança" },
    { text: "Atestado Veterinário", detail: "Saúde certificada" },
    { text: "Contrato de Aquisição", detail: "Garantias legais" },
    { text: "Kit Completo", detail: "Ração, brinquedos e guia" },
    { text: "Suporte", detail: "Fale Conosco" },
    { text: "Garantia de Saúde", detail: "Cobertura de Saúde" },
    { text: "Socialização Completa", detail: "Ambiente familiar" }
  ];

  return (
    <section className="bg-gradient-to-b from-muted to-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          O Que Está Incluso na Aquisição
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {inclusions.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 bg-card rounded-xl shadow-md p-6 hover:shadow-lg transition-all"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <p className="text-foreground font-semibold">{item.text}</p>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inclusions;
