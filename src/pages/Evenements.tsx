import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Users, Calendar, Wine, Gift } from "lucide-react";
import Footer from "@/components/shared/Footer";
import heroEvenements from "@/assets/hero-evenements.jpg";
import soireeEntreprise from "@/assets/soiree-entreprise.jpg";

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
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[hsl(var(--evenements-gold))]" />
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-[hsl(var(--evenements-text))]">YVARS</div>
              <div className="text-sm text-[hsl(var(--evenements-gold))] uppercase tracking-wide">Événements</div>
            </div>
          </div>
          <Link to="/cadeaux">
            <Button variant="outline" className="gap-2 border-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold))] hover:text-[hsl(var(--evenements-black))]">
              <Gift className="w-4 h-4" />
              Découvrir Yvars Cadeaux
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
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--evenements-black))]/70 via-[hsl(var(--evenements-black))]/50 to-[hsl(var(--evenements-black))]/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <div className="inline-block mb-6">
            <Sparkles className="w-16 h-16 text-[hsl(var(--evenements-gold))] animate-float" />
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            L'émotion sur mesure pour vos<br />
            <span className="text-[hsl(var(--evenements-gold))]">moments d'entreprise</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Événements haut de gamme depuis 1980
          </p>
          <Button 
            size="lg" 
            className="bg-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold-light))] text-[hsl(var(--evenements-black))] shadow-gold text-lg px-8 py-6 font-semibold"
            asChild
          >
            <a href="#contact">Organiser mon événement</a>
          </Button>
        </div>
      </section>

      {/* Prestations */}
      <section className="py-24 bg-[hsl(var(--evenements-black))] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4">
            Nos prestations
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto">
            Chaque événement est une œuvre d'art unique
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prestations.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center bg-white/5 backdrop-blur border-[hsl(var(--evenements-gold))]/20 hover:border-[hsl(var(--evenements-gold))] hover:shadow-gold transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
                  <item.icon className="w-8 h-8 text-[hsl(var(--evenements-black))]" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
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
            <div className="relative rounded-2xl overflow-hidden shadow-evenements max-w-5xl mx-auto">
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
              <Card key={index} className="p-8 border-[hsl(var(--evenements-gold))]/20 bg-white">
                <div className="text-[hsl(var(--evenements-gold))] text-5xl mb-4 font-playfair">"</div>
                <p className="text-xl font-playfair italic text-[hsl(var(--evenements-text))] mb-4">
                  {item.quote}
                </p>
                <p className="text-sm text-[hsl(var(--evenements-text))]/60">— {item.author}</p>
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
              <div className="aspect-[3/4] bg-[hsl(var(--evenements-gold))]/10 rounded-2xl overflow-hidden shadow-gold">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Sparkles className="w-24 h-24 text-[hsl(var(--evenements-gold))] mx-auto mb-4" />
                    <p className="text-[hsl(var(--evenements-text))]/60">Jessica Yvars</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[hsl(var(--evenements-text))]">
                À propos de Jessica Yvars
              </h2>
              <div className="text-2xl font-playfair italic text-[hsl(var(--evenements-gold))] mb-6 border-l-4 border-[hsl(var(--evenements-gold))] pl-6">
                "Chaque événement raconte une histoire. Mon rôle est de la sublimer."
              </div>
              <p className="text-lg text-[hsl(var(--evenements-text))]/80 mb-6">
                Forte de l'héritage de la Maison Yvars, Jessica Yvars incarne aujourd'hui une approche moderne et sensible de l'événementiel.
              </p>
              <p className="text-lg text-[hsl(var(--evenements-text))]/80">
                Avec son réseau de partenaires d'excellence, elle accompagne entreprises et marques dans la création d'expériences mémorables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-evenements text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Créons ensemble votre événement d'exception
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Partagez-nous votre vision, nous la transformerons en réalité
          </p>
          <Button 
            size="lg" 
            className="bg-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold-light))] text-[hsl(var(--evenements-black))] shadow-gold text-lg px-10 py-7 font-semibold"
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