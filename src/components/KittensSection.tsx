const KittensSection = () => {
  const kittens = [
    { 
      name: "Thor", 
      color: "Brown Rosetted", 
      age: "10 semanas", 
      sex: "Macho", 
      status: "available" as const,
      image: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&q=80" 
    },
    { 
      name: "Luna", 
      color: "Snow Lynx", 
      age: "8 semanas", 
      sex: "Fêmea", 
      status: "available" as const,
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&q=80" 
    },
    { 
      name: "Zeus", 
      color: "Silver Rosetted", 
      age: "12 semanas", 
      sex: "Macho", 
      status: "available" as const,
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&q=80" 
    },
    { 
      name: "Bella", 
      color: "Brown Spotted", 
      age: "9 semanas", 
      sex: "Fêmea", 
      status: "reserved" as const,
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=80" 
    },
    { 
      name: "Apollo", 
      color: "Snow Mink", 
      age: "11 semanas", 
      sex: "Macho", 
      status: "available" as const,
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&q=80" 
    },
    { 
      name: "Nala", 
      color: "Charcoal", 
      age: "10 semanas", 
      sex: "Fêmea", 
      status: "available" as const,
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&q=80" 
    }
  ];

  const statusConfig = {
    available: { bg: "bg-green-100", text: "text-green-700", label: "Disponível" },
    reserved: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Reservado" },
    adopted: { bg: "bg-muted", text: "text-muted-foreground", label: "Lar Encontrado" }
  };

  const handleInterest = (kittenName: string) => {
    const message = `Olá! Tenho interesse no filhote ${kittenName}. Gostaria de saber mais informações.`;
    window.open(`https://wa.me/5535999716370?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-b from-muted to-background py-24" id="filhotes">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-secondary text-center mb-4">
          Filhotes Disponíveis
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Nossos pequenos tesouros procurando por um lar amoroso
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kittens.map((kitten, i) => (
            <div 
              key={i} 
              className="bg-card rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={kitten.image} 
                  alt={`Bengal kitten ${kitten.name}`} 
                  className="w-full h-64 object-cover" 
                />
                <span className={`absolute top-4 right-4 ${statusConfig[kitten.status].bg} ${statusConfig[kitten.status].text} px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {statusConfig[kitten.status].label}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-4">{kitten.name}</h3>
                <div className="space-y-2 text-muted-foreground mb-6">
                  <p>🎨 <strong>Cor:</strong> {kitten.color}</p>
                  <p>👶 <strong>Idade:</strong> {kitten.age}</p>
                  <p>⚧ <strong>Sexo:</strong> {kitten.sex}</p>
                  <p>💰 <strong>Valor:</strong> Consultar</p>
                </div>
                <button 
                  onClick={() => handleInterest(kitten.name)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-xl font-semibold transition-all hover:scale-105"
                  disabled={kitten.status !== 'available'}
                >
                  {kitten.status === 'available' ? 'Tenho Interesse' : 'Indisponível'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KittensSection;
