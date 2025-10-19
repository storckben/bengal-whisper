import { useEffect } from 'react';
import { ChevronDown, Sparkles, Zap, Brain, Droplets, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RosetteTypes from '@/components/RosetteTypes';
import ColorSlider from '@/components/ColorSlider';
import Gallery from '@/components/Gallery';
import AdoptionProcess from '@/components/AdoptionProcess';
import Inclusions from '@/components/Inclusions';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import heroImage from '@/assets/bengal-hero.jpg';
import sobreRacaBengal from '@/assets/sobre-raca-bengal.jpeg';
import nossaHistoria from '@/assets/nossa-historia.png';
import logoDixini from '@/assets/logo-dixini.png';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.observe').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const characteristics = [
    { 
      icon: <Sparkles className="w-8 h-8" />, 
      title: "Aparência Exótica", 
      text: "Pelagem única com padrões de rosetas ou mármore, reminiscente de leopardos selvagens. Cores variadas desde marrom dourado até prata e snow." 
    },
    { 
      icon: <Zap className="w-8 h-8" />, 
      title: "Energia Vibrante", 
      text: "Extremamente ativos e brincalhões, adoram escalar, pular e explorar. Precisam de estímulo mental e físico constante." 
    },
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: "Inteligência Superior", 
      text: "Altamente inteligentes e treináveis, podem aprender truques, comandos e até usar focinheira. Curiosos por natureza." 
    },
    { 
      icon: <Droplets className="w-8 h-8" />, 
      title: "Amor pela Água", 
      text: "Diferente da maioria dos gatos, Bengals adoram água! Podem brincar com torneiras, fontes e até acompanhar você no banho." 
    },
    { 
      icon: <Heart className="w-8 h-8" />, 
      title: "Temperamento Afetuoso", 
      text: "Apesar da aparência selvagem, são extremamente carinhosos e leais. Criam laços fortes com suas famílias humanas." 
    },
    { 
      icon: <MessageCircle className="w-8 h-8" />, 
      title: "Comunicativos", 
      text: "Vocais e expressivos, adoram 'conversar' com seus tutores através de miados melodiosos e variados." 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Majestic Bengal Cat" 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-primary/50 z-10"></div>
        
        <div className="relative z-20 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-2xl mb-4">
            Criação Especializada de Gatos Bengal
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground font-light italic mb-6 drop-shadow-lg">
            Elegância Selvagem, Temperamento Dócil
          </p>
          <p className="text-base md:text-lg text-primary-foreground leading-relaxed mb-12 drop-shadow-lg">
            Paixão, ética e excelência em cada filhote
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 rounded-full text-lg font-semibold transition-all hover:scale-110 hover:shadow-2xl"
          >
            Conheça Nossos Bengals
          </Button>
        </div>
        
        <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 h-10 text-primary-foreground animate-bounce z-20" />
      </section>

      {/* Sobre a Raça */}
      <section id="raca" className="container mx-auto px-6 py-24">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img src={logoDixini} alt="Gatil Dixini Logo" className="h-32 w-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="observe opacity-0">
            <h2 className="text-5xl font-bold text-secondary mb-6">
              Sobre a Raça Bengal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Os gatos Bengal são uma raça única que combina a beleza exótica de felinos selvagens com o temperamento afetuoso dos gatos domésticos. Originados do cruzamento entre gatos domésticos e o leopardo asiático, os Bengals são conhecidos por sua pelagem deslumbrante com padrões de rosetas únicos, personalidade ativa e inteligência excepcional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              São gatos extremamente sociais, que adoram interagir com suas famílias, brincar na água e aprender truques. Sua energia contagiante e curiosidade infinita os tornam companheiros fascinantes para quem busca um felino verdadeiramente especial.
            </p>
          </div>
          <div className="observe opacity-0">
            <img 
              src={sobreRacaBengal} 
              alt="Bengal cat close-up showing rosette patterns" 
              className="rounded-3xl shadow-2xl hover:rotate-2 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-secondary text-center mb-16">
            Conheça a Raça Bengal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characteristics.map((char, index) => (
              <div 
                key={index} 
                className="observe opacity-0 glass-card rounded-2xl p-8 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/90 transition-all duration-300"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-primary mb-4">{char.icon}</div>
                <h3 className="text-2xl font-bold text-secondary mb-3">{char.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{char.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="contato" className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="observe opacity-0">
            <img 
              src={nossaHistoria} 
              alt="Breeder with Bengal cat" 
              className="rounded-3xl" 
            />
          </div>
          <div className="observe opacity-0">
            <h2 className="text-5xl font-bold text-secondary mb-6">
              Nossa História
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cresci cercado de animais - cavalos, coelhos, galinhas d&apos;angola, cachorros. Na fazenda dos meus pais e avós aprendi que cuidar de um animal é muito mais que alimentá-lo: é respeito, dedicação e amor genuíno.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Depois de me formar em Direito e trabalhar por anos na CEMIG, a aposentadoria trouxe uma oportunidade única: transformar minha paixão em vocação. Foi assim que nasceu o Gatil Dixini MG, especializado na raça Bengal.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hoje, somos criadores registrados que seguem os mais altos padrões de bem-estar animal. Trabalhamos com linhagens importadas de renome internacional, focando em temperamento excepcional, saúde impecável e conformação ao padrão da raça.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Cada filhote nasce em ambiente familiar, socializado desde cedo para se tornar um companheiro confiante e carinhoso. Nosso compromisso é com a excelência em cada detalhe - porque criar Bengals não é apenas um negócio, é nossa paixão.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-6 rounded-full font-semibold transition-all"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </section>

      {/* Rosette Types Section */}
      <RosetteTypes />

      {/* Color Variations Slider */}
      <ColorSlider />

      {/* Gallery Section */}
      <Gallery />

      {/* Adoption Process */}
      <AdoptionProcess />

      {/* Inclusions */}
      <Inclusions />

      {/* Contact Section */}
      <ContactSection />

      {/* FAQ */}
      <FAQ />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
};

export default Index;
