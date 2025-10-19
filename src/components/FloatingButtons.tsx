import { useState, useEffect } from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = 'https://wa.me/5535999716370?text=Olá! Gostaria de saber mais sobre os gatos Bengal';

  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-pulse hover:animate-none transition-all hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-secondary text-primary-foreground px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco!
        </span>
      </a>
      
      {/* Scroll to Top Button */}
      {showScroll && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center text-accent-foreground shadow-xl transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
