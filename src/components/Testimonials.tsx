import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Petrilla", 
      location: "Goiânia, GO", 
      text: "Gostaria de agradecer imensamente pelo trabalho e pelo cuidado em cada etapa da criação. Minha Bengal é linda, saudável e de uma natureza tão amorosa! Agradeço por todo o suporte e orientação, e por me proporcionar essa experiência maravilhosa de ter um companheiro felino tão especial. Ótimo criador, respondeu e acolheu todas minhas dúvidas.", 
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=200&q=80" 
    },
    { 
      name: "Hugo", 
      location: "Varginha, MG", 
      text: "Criação responsável e de qualidade. Atencioso e muito comprometido com a entrega, sempre se coloca disponível nos suportes desde o primeiro contato até a adaptação. Estou muito satisfeito e em breve retorno pra buscar outros.", 
      image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=200&q=80" 
    },
    { 
      name: "Eduardo", 
      location: "Rio de Janeiro, RJ", 
      text: "Sobre o gatil do Wilson, só tenho a agradecer pelo profissionalismo, o cuidado e a comunicação que é um ponto chave para que possamos confiar no serviço. Nos acompanha do início ao fim de todo o processo e continua acompanhando a evolução do felino na nova casa, ele nos dá todo o suporte necessário, além de dicas ouro sobre cuidados da raça que são detalhes importantes, afinal deve ser um cuidado diferenciado assim como o bengal é.", 
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&q=80" 
    },
    { 
      name: "Weidilane", 
      location: "Três Pontas, MG", 
      text: "Que lindos seus gatos, são únicos e admiráveis. Amar um gato é aceitar ser conquistado aos poucos, todos os dias, de forma sutil e profunda. Parabéns pela sua dedicação e confiabilidade em seu gatil.", 
      image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=200&q=80" 
    },
    { 
      name: "Daiane", 
      location: "Três Pontas, MG", 
      text: "Procuramos o Gatil do Wilson na curiosidade, mas como nunca tínhamos visitado um gatil e conhecido um animal com procedências e cuidados tão específicos, o encanto bateu ao extremo. O atendimento do Wilson, as explicações, conhecer os seus gatos, a forma de tratá-los, mudou nosso pensamento. Ficamos com nosso Simba, que chegou super tranquilo, adaptou rápido, e tem conquistado meu marido que não era fã de gato. É super parceiro da nossa filha, brinca com ela e adora o colo e carinho dela.", 
      image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5c0?w=200&q=80" 
    },
    { 
      name: "Geovana", 
      location: "Minas Gerais", 
      text: "Amei a gatinha super dócil! A pelagem é igual a de uma oncinha. A minha é da raça Spotted Tabby. Agora quero um da raça Snow Mink também!", 
      image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=200&q=80" 
    },
    { 
      name: "Rosane Sander", 
      location: "USA", 
      text: "Sou fã de seus gatos com jeitinho de oncinhas, além do seu serviço sensacional! Esse gato Bengal Brown Spotted é simplesmente perfeito e aquele Snow Lynx Snow Mink de olhos azuis é fantástico, apaixonante! Estou encantada com seu gatil. Serviço, entrega, cuidado personalizado. Parabéns!", 
      image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=200&q=80" 
    },
    { 
      name: "Bruno", 
      location: "Goiânia, GO", 
      text: "Ter um Bengal sempre foi meu sonho, e realizei com o Gatil Dixini! O criador foi super atencioso, tirou todas as minhas dúvidas e me acompanhou até a adaptação do gatinho. O meu Snow Lynx é um espetáculo, olhos azuis hipnotizantes e um temperamento encantador. Dá pra perceber o cuidado e a paixão que eles têm pelos gatos!", 
      image: "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?w=200&q=80" 
    },
    { 
      name: "Leandro Gontijo", 
      location: "Varginha, MG", 
      text: "Adquiri meu gato Bengal Brown Spotted Tabby, o Senna, e estou muito satisfeito! O Wilson é super atencioso, entende muito sobre a raça e dá pra ver o quanto ele ama o que faz. O Senna é um gato incrível, lindo demais e com um temperamento excelente. Recomendo demais o Gatil Dixini!", 
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=200&q=80" 
    },
    { 
      name: "Bruno Barbosa", 
      location: "Avaré, SP", 
      text: "Adquiri com o Wilson um Bengal Brown Spotted maravilhoso! Padrão da raça altíssimo. Temperamento perfeito e cada dia mais dócil e mais lindo. Ele se preocupou do início ao final em atestar perfeita saúde do animal, assim como orientações detalhadas sobre criação, adaptação na nossa rotina, brinquedos, arranhadores, suplementações. Tudo com muito cuidado e carinho. Somente boas recomendações! Indico para todos. Parabéns pelo trabalho!", 
      image: "https://images.unsplash.com/photo-1494256997604-768d1f608cac?w=200&q=80" 
    }
  ];

  return (
    <section className="bg-gradient-to-b from-muted to-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          O Que Dizem Nossos Tutores
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
