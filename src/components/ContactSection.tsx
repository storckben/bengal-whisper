import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bengalContact from '@/assets/bengal-contact.jpg';

const ContactSection = () => {
  const whatsappNumber = '35 99971-6370';
  const whatsappMessage = 'Olá! Gostaria de saber mais sobre os gatos Bengal';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative py-24 overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/5 z-0"></div>
      <img
        src={bengalContact}
        alt="Bengal cat background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Entre em Contato
          </h2>
          <p className="text-xl mb-12 text-white/90 drop-shadow">
            Estamos prontos para responder todas as suas dúvidas sobre nossos Bengals
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <div className="mb-8">
              <Phone className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-2xl font-semibold text-white mb-2">(35) 99971-6370</p>
              <p className="text-white/90">Atendimento: Segunda a Sexta, 9h às 18h</p>
            </div>

            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5535999716370", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold transition-all hover:scale-110 shadow-xl w-full md:w-auto"
            >
              <MessageCircle className="w-5 h-5 md:w-7 md:h-7 mr-2 md:mr-3 flex-shrink-0" />
              <span className="whitespace-nowrap">Chamar no WhatsApp</span>
            </Button>

            <div className="mt-12 pt-8 border-t border-white/30">
              <h4 className="font-bold text-white mb-4 text-lg">Outras formas de contato:</h4>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center justify-center gap-3">
                  <Instagram className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm md:text-base">@bengal_sulmg</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm md:text-base">Três Pontas, Minas Gerais, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
