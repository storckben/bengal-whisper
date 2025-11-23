import { Home, Info, Image, MessageCircle, Instagram } from 'lucide-react';

const BottomNavMenu = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/5535999716370?text=Olá! Gostaria de saber mais sobre os gatos Bengal';
  const instagramUrl = 'https://www.instagram.com/bengal_sulmg';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-t border-border shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around py-3">
          {/* Início */}
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-accent/20 hover:scale-110 group"
            aria-label="Ir para Início"
          >
            <Home className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
            <span className="text-xs text-primary-foreground group-hover:text-accent transition-colors font-medium">
              Início
            </span>
          </button>

          {/* Sobre a Raça */}
          <button
            onClick={() => scrollToSection('raca')}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-accent/20 hover:scale-110 group"
            aria-label="Ir para Sobre a Raça"
          >
            <Info className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
            <span className="text-xs text-primary-foreground group-hover:text-accent transition-colors font-medium">
              Sobre
            </span>
          </button>

          {/* Galeria */}
          <button
            onClick={() => scrollToSection('galeria')}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-accent/20 hover:scale-110 group"
            aria-label="Ir para Galeria"
          >
            <Image className="w-6 h-6 text-primary-foreground group-hover:text-accent transition-colors" />
            <span className="text-xs text-primary-foreground group-hover:text-accent transition-colors font-medium">
              Galeria
            </span>
          </button>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-accent/20 hover:scale-110 group"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle className="w-6 h-6 text-primary-foreground group-hover:text-green-500 transition-colors" />
            <span className="text-xs text-primary-foreground group-hover:text-green-500 transition-colors font-medium">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all hover:bg-accent/20 hover:scale-110 group"
            aria-label="Visite nosso Instagram"
          >
            <Instagram className="w-6 h-6 text-primary-foreground group-hover:text-pink-500 transition-colors" />
            <span className="text-xs text-primary-foreground group-hover:text-pink-500 transition-colors font-medium">
              Instagram
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavMenu;
