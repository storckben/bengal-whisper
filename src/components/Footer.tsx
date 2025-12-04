import { Phone, MapPin, Instagram, Clock } from 'lucide-react';
import logoDixini from '@/assets/logo-dixini.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <img src={logoDixini} alt="Gatil Dixini Logo" className="h-24 w-auto mb-4" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Criadores registrados dedicados à excelência na raça Bengal. Paixão, ética e amor em cada ninhada.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/bengal_sulmg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com/bengalsulmg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-bold text-primary mb-4 text-lg">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#raca" className="hover:text-primary transition-colors">
                  Sobre a Raça
                </a>
              </li>
              <li>
                <a href="https://wa.me/5535999716370" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Filhotes Disponíveis
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary mb-4 text-lg">Fale Conosco</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (35) 99971-6370
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Três Pontas, MG
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Seg-Sex: 9h-18h
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/60 text-sm">
            <p>© 2025 Bengal gatil Dixini. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-6">
            <span className="text-primary text-xs font-semibold">🏆 Pedigree AMEE</span>
            <span className="text-primary text-xs font-semibold">🏆 American Cat Club</span>
            <span className="text-primary text-xs font-semibold">✅ Criação Ética</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
