import { Award, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ADNYvarsProps {
  variant?: "cadeaux" | "evenements";
}

const ADNYvars = ({ variant = "cadeaux" }: ADNYvarsProps) => {
  const isCadeaux = variant === "cadeaux";
  
  const valeurs = [
    {
      icon: Award,
      title: "Excellence",
      description: "Un engagement qualité depuis plus de 40 ans"
    },
    {
      icon: Heart,
      title: "Personnalisation",
      description: "Chaque projet reflète votre identité unique"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Des solutions créatives et sur-mesure"
    }
  ];

  const primaryColor = isCadeaux 
    ? "hsl(var(--cadeaux-red))" 
    : "hsl(var(--evenements-gold))";
    
  const bgColor = isCadeaux 
    ? "bg-white" 
    : "bg-[hsl(var(--evenements-cream))]";

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        {/* Titre */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div 
              className="h-1 w-20 rounded-full mx-auto mb-6"
              style={{ background: primaryColor }}
            ></div>
          </div>
          <h2 
            className={`text-4xl md:text-5xl font-bold mb-6 ${isCadeaux ? 'font-montserrat' : 'font-playfair'}`}
            style={{ color: 'hsl(var(--foreground))' }}
          >
            L'ADN Yvars
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis 1980, la Maison Yvars accompagne les entreprises dans leurs moments d'exception. 
            Deux pôles d'expertise, une même exigence : créer des expériences qui marquent.
          </p>
        </div>

        {/* Valeurs */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {valeurs.map((valeur, index) => (
            <Card 
              key={index}
              className="p-8 text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ 
                  background: isCadeaux 
                    ? 'linear-gradient(135deg, hsl(var(--cadeaux-red)), hsl(var(--cadeaux-red-dark)))' 
                    : 'linear-gradient(135deg, hsl(var(--evenements-gold)), hsl(var(--evenements-gold-light)))',
                  boxShadow: isCadeaux 
                    ? 'var(--shadow-cadeaux)' 
                    : 'var(--shadow-gold)'
                }}
              >
                <valeur.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-semibold mb-3 ${isCadeaux ? 'font-montserrat' : 'font-playfair'}`}>
                {valeur.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {valeur.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/50 rounded-full">
            <span className="text-6xl font-bold" style={{ color: primaryColor }}>1980</span>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-left">
              <div className="font-semibold text-lg">Plus de 40 ans</div>
              <div className="text-sm text-muted-foreground">d'excellence et d'innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADNYvars;