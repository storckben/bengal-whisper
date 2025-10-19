import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Petrilla", 
      location: "Goiânia, GO", 
      text: "Gostaria de agradecer imensamente pelo trabalho e pelo cuidado em cada etapa da criação. Minha Bengal é linda, saudável e de uma natureza tão amorosa! Agradeço por todo o suporte e orientação, e por me proporcionar essa experiência maravilhosa de ter um companheiro felino tão especial. Ótimo criador, respondeu e acolheu todas minhas dúvidas", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" 
    },
    { 
      name: "Hugo", 
      location: "Varginha, MG", 
      text: "Criação responsável e de qualidade. Atencioso e muito comprometido com a entrega, sempre se coloca disponível nos suportes desde o primeiro contato até a adaptação. Estou muito satisfeito e em breve retorno pra buscar outros.", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" 
    },
    { 
      name: "Eduardo", 
      location: "Rio de Janeiro, RJ", 
      text: "Sobre o gatil do Wilson, só tenho a agradecer pelo profissionalismo, o cuidado e a comunicação que é um ponto chave para que possamos confiar no serviço. Nos acompanha do início ao fim de todo o processo e continua acompanhando a evolução do felino na nova casa, ele nos dá todo o suporte necessário, além de dicas ouro sobre cuidados da raça que são detalhes importantes, afinal deve ser um cuidado diferenciado assim como o bengal é.", 
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&q=80" 
    }
  ];

  return (
    <section className="bg-gradient-to-b from-muted to-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          O Que Dizem Nossos Tutores
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((test, i) => (
            <div 
              key={i} 
              className="bg-card rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={test.image} 
                  alt={`${test.name} photo`} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary" 
                />
                <div>
                  <h4 className="font-bold text-secondary">{test.name}</h4>
                  <p className="text-sm text-muted-foreground">{test.location}</p>
                </div>
              </div>
              <div className="text-6xl text-primary/20 leading-none mb-4">"</div>
              <p className="text-muted-foreground leading-relaxed mb-4">{test.text}</p>
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
