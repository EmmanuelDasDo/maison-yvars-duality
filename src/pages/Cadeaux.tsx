import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, Package, Truck, Users, Sparkles, PenTool } from "lucide-react";
import Footer from "@/components/shared/Footer";
import logoCadeaux from "@/assets/logo-yvars-cadeaux.png";
import heroCadeaux from "@/assets/hero-cadeaux.jpg";
import objetsPublicitaires from "@/assets/objets-publicitaires.jpg";

const Cadeaux = () => {
  const univers = [
    {
      icon: Users,
      title: "Comités CSE",
      description: "Solutions personnalisées pour vos collaborateurs"
    },
    {
      icon: Package,
      title: "Coffrets sur mesure",
      description: "Créations uniques pour vos partenaires"
    },
    {
      icon: PenTool,
      title: "Objets personnalisés",
      description: "Stylos, sacs, gourdes et bien plus encore"
    }
  ];

  const services = [
    {
      icon: Gift,
      title: "Personnalisation",
      description: "Logo, message, couleurs à votre image"
    },
    {
      icon: Package,
      title: "Sourcing",
      description: "Sélection rigoureuse de produits premium"
    },
    {
      icon: Truck,
      title: "Logistique",
      description: "Livraison clé en main partout en France"
    }
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--cadeaux-white))] font-montserrat">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img src={logoCadeaux} alt="Yvars Cadeaux" className="h-12 md:h-16" />
          <Link to="/evenements">
            <Button variant="outline" className="gap-2 border-[hsl(var(--cadeaux-red))] text-[hsl(var(--cadeaux-red))] hover:bg-[hsl(var(--cadeaux-red))] hover:text-white">
              <Sparkles className="w-4 h-4" />
              Découvrir Yvars Événements
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCadeaux})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-white/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-[hsl(var(--cadeaux-text))] mb-6">
            Offrir autrement,<br />
            <span className="text-[hsl(var(--cadeaux-red))]">marquer durablement</span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--cadeaux-text))]/80 mb-8 max-w-2xl mx-auto">
            Cadeaux d'entreprise personnalisés depuis 1980
          </p>
          <Button 
            size="lg" 
            className="bg-[hsl(var(--cadeaux-red))] hover:bg-[hsl(var(--cadeaux-red-dark))] text-white shadow-cadeaux text-lg px-8 py-6"
            asChild
          >
            <a href="#contact">Demander un devis</a>
          </Button>
        </div>
      </section>

      {/* Nos Univers */}
      <section className="py-20 bg-[hsl(var(--cadeaux-gray))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--cadeaux-text))]">
            Nos univers cadeaux
          </h2>
          <p className="text-center text-lg text-[hsl(var(--cadeaux-text))]/70 mb-12 max-w-2xl mx-auto">
            Des solutions adaptées à chaque besoin d'entreprise
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {univers.map((item, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-cadeaux transition-all duration-300 hover:-translate-y-2 bg-white border-none"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[hsl(var(--cadeaux-red))]/10 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[hsl(var(--cadeaux-red))]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--cadeaux-text))]">{item.title}</h3>
                <p className="text-[hsl(var(--cadeaux-text))]/70">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Product Showcase */}
          <div className="relative rounded-2xl overflow-hidden shadow-cadeaux">
            <img 
              src={objetsPublicitaires} 
              alt="Objets publicitaires personnalisés" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--cadeaux-red))]/90 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Objets publicitaires durables</h3>
                <p className="text-lg opacity-90">Stylos, carnets, gourdes, sacs personnalisés avec votre logo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-[hsl(var(--cadeaux-text))]">
            Nos services
          </h2>
          <p className="text-center text-lg text-[hsl(var(--cadeaux-text))]/70 mb-12 max-w-2xl mx-auto">
            Un accompagnement complet de A à Z
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="text-center p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-cadeaux rounded-full flex items-center justify-center shadow-cadeaux">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-[hsl(var(--cadeaux-text))]">{service.title}</h3>
                <p className="text-[hsl(var(--cadeaux-text))]/70 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[hsl(var(--cadeaux-red))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à créer vos cadeaux d'exception ?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nos experts sont à votre écoute pour concevoir des solutions sur mesure
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[hsl(var(--cadeaux-red))] hover:bg-[hsl(var(--cadeaux-gray))] text-lg px-8 py-6"
          >
            Demander un devis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cadeaux;