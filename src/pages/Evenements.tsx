import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Calendar, Wine, Gift } from "lucide-react";
import Footer from "@/components/shared/Footer";
import ADNYvars from "@/components/shared/ADNYvars";
import heroEvenements from "@/assets/hero-evenements.jpg";
import soireeEntreprise from "@/assets/soiree-entreprise.jpg";
import logoEvenements from "@/assets/logo-evenements-transparent.png";
import logoButterfly from "@/assets/papillon-or.png";
import logoCadeauxSimple from "@/assets/logo-yvars-simple.png";
import jessicaYvars from "@/assets/jessica-yvars.jpg";

const Evenements = () => {
  const prestations = [
    {
      icon: Wine,
      title: "Soirées d'entreprise",
      description: "Galas, dîners de prestige et cocktails raffinés"
    },
    {
      icon: Users,
      title: "Séminaires",
      description: "Expériences sur mesure pour vos équipes"
    },
    {
      icon: Calendar,
      title: "Inaugurations",
      description: "Événements marquants pour vos lancements"
    },
    {
      icon: Sparkles,
      title: "Expériences uniques",
      description: "Moments d'exception personnalisés"
    }
  ];

  const temoignages = [
    {
      quote: "Un accompagnement irréprochable.",
      author: "Direction Générale, CAC 40"
    },
    {
      quote: "Une attention au détail rare.",
      author: "Responsable Communication"
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--evenements-cream))] font-lato">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-4 bg-gradient-to-b from-[hsl(var(--evenements-black))]/80 to-transparent">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src={logoEvenements} 
              alt="Yvars Événements" 
              className="h-20 md:h-28 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
            />
            {/* Petit logo cadeau pour rappeler l'autre univers */}
            <div className="hidden md:flex items-center gap-2 text-white/60 text-xs">
              <div className="h-6 w-px bg-white/20"></div>
              <img 
                src={logoCadeauxSimple} 
                alt="Yvars Cadeaux" 
                className="h-6 opacity-40 hover:opacity-70 transition-opacity"
              />
            </div>
          </div>
          <Link to="/cadeaux">
            <Button variant="outline" className="gap-2 border-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold))] hover:text-[hsl(var(--evenements-black))] backdrop-blur-sm bg-[hsl(var(--evenements-black))]/30">
              <Gift className="w-4 h-4" />
              <span className="hidden md:inline">Découvrir Yvars Cadeaux</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroEvenements})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--evenements-black))]/80 via-[hsl(var(--evenements-black))]/60 to-[hsl(var(--evenements-black))]/85" />
          {/* Overlay gold shimmer */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[hsl(var(--evenements-gold))]/5 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-block mb-8 animate-float">
            <img src={logoButterfly} alt="Papillon Yvars" className="w-20 h-20 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
          </div>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white mb-8 tracking-tight">
            L'émotion sur mesure<br />
            <span className="text-[hsl(var(--evenements-gold))] drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">pour vos moments d'exception</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Événements haut de gamme depuis 1980
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:brightness-110 text-[hsl(var(--evenements-black))] shadow-gold text-lg px-10 py-7 font-semibold transition-all hover:scale-105"
            asChild
          >
            <a href="#contact">Organiser mon événement</a>
          </Button>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24 bg-gradient-to-b from-[hsl(var(--evenements-black))] via-[hsl(var(--evenements-black))] to-[hsl(210_20%_10%)] text-white relative overflow-hidden">
        {/* Subtle gold pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--evenements-gold)) 1px, transparent 1px), radial-gradient(circle at 80% 80%, hsl(var(--evenements-gold)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <div className="inline-block w-16 h-1 bg-gradient-gold mb-6 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-center mb-6">
            Nos prestations
          </h2>
          <p className="text-center text-lg text-white/80 mb-20 max-w-2xl mx-auto font-light">
            Chaque événement est une œuvre d'art unique
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prestations.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center bg-white/5 backdrop-blur border-[hsl(var(--evenements-gold))]/30 hover:border-[hsl(var(--evenements-gold))] hover:shadow-gold hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-9 h-9 text-[hsl(var(--evenements-black))]" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4 text-white group-hover:text-[hsl(var(--evenements-gold))] transition-colors">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-24 bg-[hsl(var(--evenements-cream))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-[hsl(var(--evenements-text))]">
            Réalisations
          </h2>
          <p className="text-center text-lg text-[hsl(var(--evenements-text))]/70 mb-12 max-w-2xl mx-auto">
            Chaque événement raconte une histoire. Voici quelques-unes des nôtres.
          </p>
          
          <div className="mb-16">
            <div className="relative rounded-2xl overflow-hidden shadow-evenements max-w-5xl mx-auto group">
              {/* Petit logo cadeau en coin supérieur droit */}
              <div className="absolute top-6 right-6 z-10 opacity-30 group-hover:opacity-50 transition-opacity">
                <img 
                  src={logoCadeauxSimple} 
                  alt="Maison Yvars" 
                  className="h-8 brightness-0 invert"
                />
              </div>
              
              <img 
                src={soireeEntreprise} 
                alt="Soirée d'entreprise de prestige" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--evenements-black))]/90 to-transparent flex items-end">
                <div className="p-12 text-white">
                  <h3 className="text-4xl font-playfair font-bold mb-3">Gala d'entreprise</h3>
                  <p className="text-lg opacity-90">Décor doré, arrangements floraux blancs, traiteur gastronomique</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {temoignages.map((item, index) => (
              <Card key={index} className="p-10 border-[hsl(var(--evenements-gold))]/30 bg-white hover:shadow-gold transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="text-[hsl(var(--evenements-gold))] text-6xl mb-6 font-playfair leading-none">"</div>
                <p className="text-2xl font-playfair italic text-[hsl(var(--evenements-text))] mb-6 relative z-10">
                  {item.quote}
                </p>
                <div className="h-1 w-16 bg-gradient-gold mb-4 rounded-full"></div>
                <p className="text-sm text-[hsl(var(--evenements-text))]/60 font-medium">— {item.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* À propos Jessica */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-gold">
                <img 
                  src={jessicaYvars} 
                  alt="Jessica Yvars" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[hsl(var(--evenements-text))]">
                À propos de Jessica Yvars
              </h2>
              <div className="text-2xl font-playfair italic text-[hsl(var(--evenements-gold))] mb-6 border-l-4 border-[hsl(var(--evenements-gold))] pl-6">
                "Chaque événement raconte une histoire. Mon rôle est de la sublimer."
              </div>
              <p className="text-lg text-[hsl(var(--evenements-text))]/80 mb-6 leading-relaxed">
                Forte de l'héritage de la Maison Yvars, Jessica Yvars incarne aujourd'hui une approche moderne et sensible de l'événementiel.
              </p>
              <p className="text-lg text-[hsl(var(--evenements-text))]/80 leading-relaxed">
                Avec son réseau de partenaires d'excellence, elle accompagne entreprises et marques dans la création d'expériences mémorables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADN Yvars */}
      <ADNYvars variant="evenements" />

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-gradient-to-br from-[hsl(var(--evenements-black))] via-[hsl(210_20%_8%)] to-[hsl(var(--evenements-black))] text-white relative overflow-hidden">
        {/* Decorative gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--evenements-gold))]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block w-20 h-1 bg-gradient-gold mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-8">
            Créons ensemble votre<br />événement d'exception
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Partagez-nous votre vision, nous la transformerons en réalité
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold hover:brightness-110 text-[hsl(var(--evenements-black))] shadow-gold text-lg px-12 py-8 font-semibold transition-all hover:scale-105"
          >
            Demander un devis pour votre événement
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Evenements;