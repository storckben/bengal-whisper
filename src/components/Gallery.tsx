import { useState } from 'react';
import { Button } from '@/components/ui/button';
import adulto1 from '@/assets/gallery-adulto1.jpeg';
import adulto2 from '@/assets/gallery-adulto2.jpeg';
import adulto3 from '@/assets/gallery-adulto3.jpeg';
import filhote1 from '@/assets/gallery-filhote1.jpeg';
import filhote2 from '@/assets/gallery-filhote2.jpeg';
import filhote3 from '@/assets/gallery-filhote3.jpeg';
import filhote4 from '@/assets/gallery-filhote4.jpeg';
import cliente1 from '@/assets/gallery-cliente1.jpeg';
import cliente2 from '@/assets/gallery-cliente2.jpeg';
import cliente3 from '@/assets/gallery-cliente3.jpeg';

const Gallery = () => {
  const [filter, setFilter] = useState('Todos');
  const [showMore, setShowMore] = useState(false);

  const filters = ['Todos', 'Adultos', 'Filhotes', 'Clientes'];

  const gallery = [
    { url: adulto1, category: "Adultos" },
    { url: adulto2, category: "Adultos" },
    { url: adulto3, category: "Adultos" },
    { url: filhote1, category: "Filhotes" },
    { url: filhote2, category: "Filhotes" },
    { url: filhote3, category: "Filhotes" },
    { url: filhote4, category: "Filhotes" },
    { url: cliente1, category: "Clientes" },
    { url: cliente2, category: "Clientes" },
    { url: cliente3, category: "Clientes" },
  ];

  const filteredGallery = filter === 'Todos' 
    ? gallery 
    : gallery.filter(img => img.category === filter);

  const displayedImages = showMore ? filteredGallery : filteredGallery.slice(0, 12);


  return (
    <section id="galeria" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-4">
          Nossa Galeria
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12">
          Momentos especiais dos nossos Bengals
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === f 
                  ? 'bg-accent text-accent-foreground shadow-lg scale-105' 
                  : 'border-2 border-accent text-accent hover:scale-105 hover:shadow-md'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {displayedImages.map((img, i) => (
            <div 
              key={i} 
              className="break-inside-avoid mb-4 group"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={img.url} 
                  alt={`Bengal ${img.category} ${i + 1}`} 
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {!showMore && filteredGallery.length > 12 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowMore(true)}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-6 rounded-full font-semibold transition-all"
            >
              Carregar Mais Fotos
            </Button>
          </div>
        )}
      </div>
      
    </section>
  );
};

export default Gallery;
