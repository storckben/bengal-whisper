import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import bengalBody from '@/assets/bengal-rosettes.png';

const RosetteTypes = () => {
  const [activeRosette, setActiveRosette] = useState<number | null>(null);

  const rosettesTop = [
    { 
      name: "Pegada", 
      position: "left-[35%]", 
      description: "Marcas que lembram pegadas de felinos selvagens",
    },
    { 
      name: "Rosca", 
      position: "left-[55%]", 
      description: "Círculos completos ou semi-fechados, altamente desejados",
    },
    { 
      name: "Ponta de Flecha", 
      position: "left-[74%]", 
      description: "Marcas triangulares direcionais",
    },
  ];

  const rosettesBottom = [
    { 
      name: "Corrente", 
      position: "left-[30%]", 
      description: "Rosetas conectadas formando cadeias horizontais",
    },
    { 
      name: "Agrupamento", 
      position: "left-[50%]", 
      description: "Múltiplas marcas pequenas formando grupos",
    },
    { 
      name: "Nublado", 
      position: "left-[70%]", 
      description: "Manchas maiores com bordas irregulares",
    }
  ];

  return (
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-4">
          Padrões de Pelagem Bengal: Rosetas
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Cada Bengal possui um padrão único, como uma impressão digital
        </p>
        
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="relative">
            <img 
              src={bengalBody} 
              alt="Bengal Cat Body Pattern" 
              className="w-full rounded-3xl shadow-2xl" 
            />
            
            {/* Rosetas superiores */}
            {rosettesTop.map((rosette, index) => (
              <div 
                key={`top-${index}`} 
                className={`absolute -top-8 md:-top-12 ${rosette.position} transform -translate-x-1/2 z-10`}
                onMouseEnter={() => setActiveRosette(index)}
                onMouseLeave={() => setActiveRosette(null)}
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-full border-3 md:border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300">
                    <ZoomIn className="w-[15px] h-[15px] md:w-6 md:h-6 text-accent-foreground" />
                  </div>
                  {activeRosette === index && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[calc(100vw-3rem)] max-w-[240px] md:w-72 z-50 animate-fade-in">
                      <h4 className="font-bold text-lg md:text-xl text-secondary mb-2">{rosette.name}</h4>
                      <p className="text-muted-foreground text-sm">{rosette.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Rosetas inferiores */}
            {rosettesBottom.map((rosette, index) => (
              <div 
                key={`bottom-${index}`} 
                className={`absolute -bottom-8 md:-bottom-12 ${rosette.position} transform -translate-x-1/2 z-10`}
                onMouseEnter={() => setActiveRosette(index + rosettesTop.length)}
                onMouseLeave={() => setActiveRosette(null)}
              >
                <div className="relative">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-accent rounded-full border-3 md:border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300">
                    <ZoomIn className="w-[15px] h-[15px] md:w-6 md:h-6 text-accent-foreground" />
                  </div>
                  {activeRosette === (index + rosettesTop.length) && (
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 md:p-6 w-[calc(100vw-3rem)] max-w-[240px] md:w-72 z-50 animate-fade-in">
                      <h4 className="font-bold text-lg md:text-xl text-secondary mb-2">{rosette.name}</h4>
                      <p className="text-muted-foreground text-sm">{rosette.description}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Barriga Pintada - Abaixo da imagem */}
          <div className="mt-16 md:mt-20 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-md mx-auto text-center">
            <p className="font-bold text-secondary text-base md:text-lg mb-2">Barriga Pintada</p>
            <p className="text-sm md:text-base text-muted-foreground">Pintas obrigatórias na barriga, característica essencial do Bengal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RosetteTypes;
