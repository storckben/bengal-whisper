import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bengalBrown from '@/assets/bengal-brown.png';
import bengalSnowLynx from '@/assets/bengal-snow-lynx.png';
import bengalSnowMink from '@/assets/bengal-snow-mink.png';
import bengalSnowSepia from '@/assets/bengal-snow-sepia.png';
import bengalSilver from '@/assets/bengal-silver.png';
import bengalCharcoal from '@/assets/bengal-charcoal.png';
import bengalBlue from '@/assets/bengal-blue.png';
import bengalBlack from '@/assets/bengal-black.png';

const ColorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const colors = [
    {
      name: "Brown (Marrom)",
      desc: "A cor mais clássica e tradicional dos Bengals",
      features: [
        "Cor de base: Todos os tons de marrom",
        "Marcações: Marrom a preto intenso",
        "Ponta da cauda: Preta obrigatória",
        "Olhos: Verdes ou dourados"
      ],
      image: bengalBrown
    },
    {
      name: "Snow Lynx (Neve Linx)",
      desc: "A variação mais clara com olhos azuis hipnotizantes",
      features: [
        "Cor de base: Branco creme muito claro",
        "Marcações: Castanho claro ou seal",
        "Ponta da cauda: Castanho escuro seal",
        "Olhos: Azuis (sempre)"
      ],
      image: bengalSnowLynx
    },
    {
      name: "Snow Mink (Neve Vison)",
      desc: "Tom intermediário com aparência aquosa",
      features: [
        "Cor de base: Marfim, creme, bronzeado claro",
        "Marcações: Tons de seal mink",
        "Ponta da cauda: Seal marrom escuro",
        "Olhos: Azul-esverdeados ou aqua"
      ],
      image: bengalSnowMink
    },
    {
      name: "Snow Sepia (Neve Sépia)",
      desc: "Contraste rico em tons quentes",
      features: [
        "Cor de base: Marfim, creme, bronzeado",
        "Marcações: Tons de seal sépia",
        "Ponta da cauda: Seal marrom escuro",
        "Olhos: Verdes ou dourados"
      ],
      image: bengalSnowSepia
    },
    {
      name: "Silver (Prata)",
      desc: "Elegância em tons metálicos",
      features: [
        "Cor de base: Branco a cinza aço",
        "Marcações: Cinza escuro a preto",
        "Ponta da cauda: Preta obrigatória",
        "Olhos: Verdes ou dourados"
      ],
      image: bengalSilver
    },
    {
      name: "Charcoal (Carvão)",
      desc: "Máscara facial escura característica 'Zorro'",
      features: [
        "Cor de base: Cinza escuro/marrom a carvão",
        "Marcações: Máscara 'Zorro' nos olhos",
        "Ponta da cauda: Preta obrigatória",
        "Olhos: Verdes, dourados ou avelã"
      ],
      image: bengalCharcoal
    },
    {
      name: "Blue (Azul)",
      desc: "Tons acinzentados com reflexos azulados",
      features: [
        "Cor de base: Cinza azulado pálido",
        "Marcações: Azul médio a azul escuro",
        "Ponta da cauda: Cinza escuro",
        "Olhos: Verdes, dourados ou avelã"
      ],
      image: bengalBlue
    },
    {
      name: "Black (Preto/Melanístico)",
      desc: "Pantera negra em miniatura - rosetas fantasmas",
      features: [
        "Cor de base: Preto",
        "Marcações: Pintas pretas sobre preto",
        "Aparência: Ghost markings visíveis",
        "Olhos: Verdes, dourados ou avelã"
      ],
      image: bengalBlack
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % colors.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + colors.length) % colors.length);

  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-16">
          Variedades de Cores Bengal
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            <div className="space-y-8">
              <div className="flex justify-center">
                <img 
                  src={colors[currentSlide].image} 
                  alt={colors[currentSlide].name} 
                  className="w-full max-w-2xl h-auto max-h-[500px] rounded-2xl object-contain transition-all duration-500"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                  {colors[currentSlide].name}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 italic">
                  {colors[currentSlide].desc}
                </p>
                <ul className="space-y-3 text-left max-w-xl mx-auto">
                  {colors[currentSlide].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <span className="text-accent text-xl font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center items-center gap-6 mt-10">
              <Button
                onClick={prevSlide}
                size="icon"
                className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-full transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex gap-2">
                {colors.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentSlide(i)} 
                    className={`h-3 rounded-full transition-all ${
                      i === currentSlide 
                        ? 'bg-accent w-8' 
                        : 'bg-primary/30 w-3 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextSlide}
                size="icon"
                className="w-12 h-12 bg-accent hover:bg-accent/90 rounded-full transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSlider;
