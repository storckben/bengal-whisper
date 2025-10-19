import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { 
      q: "Qual o valor de um filhote Bengal?", 
      a: "O investimento varia conforme cor, padrão e qualidade. Entre em contato para valores atualizados e condições de pagamento." 
    },
    { 
      q: "Com que idade posso levar meu filhote para casa?", 
      a: "Os filhotes vão para seus novos lares com no mínimo 12 semanas de idade, totalmente vacinados e socializados." 
    },
    { 
      q: "Bengals se dão bem com crianças e outros pets?", 
      a: "Sim! São extremamente sociais e se adaptam muito bem a famílias com crianças e outros animais quando socializados corretamente." 
    },
    { 
      q: "Preciso de experiência prévia com gatos?", 
      a: "Não necessariamente, mas Bengals são energéticos e inteligentes. Fornecemos todo suporte e orientação necessários." 
    },
    { 
      q: "Qual o temperamento dos Bengals?", 
      a: "São ativos, brincalhões, carinhosos e muito inteligentes. Adoram interagir com humanos e são extremamente leais." 
    },
    { 
      q: "Bengals precisam de cuidados especiais?", 
      a: "Além dos cuidados básicos felinos, precisam de estímulo mental e físico. Enriquecimento ambiental é essencial." 
    },
    { 
      q: "Fazem entrega para outros estados?", 
      a: "Sim, realizamos entregas para todo o Brasil com segurança. O filhote viaja com todo conforto e documentação." 
    },
    { 
      q: "Fornecem garantia de saúde?", 
      a: "Sim, todos os filhotes têm garantia contra doenças genéticas e saúde certificada por veterinário." 
    },
    { 
      q: "Posso visitar o gatil antes de decidir?", 
      a: "Sim! Incentivamos visitas agendadas para conhecer nossos gatos e instalações pessoalmente." 
    },
    { 
      q: "Qual a diferença entre rosetas e marble?", 
      a: "Rosetas são manchas circulares (mais valorizadas), enquanto marble tem padrão marmoreado corrido. Ambos são lindos!" 
    }
  ];

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${
                    openFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
