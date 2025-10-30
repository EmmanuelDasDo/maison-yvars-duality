import { Link } from "react-router-dom";
import { Gift, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Maison Yvars */}
          <div>
            <h3 className="text-xl font-bold mb-4">Maison Yvars</h3>
            <p className="text-sm opacity-90 mb-4">
              Depuis 1980, la Maison Yvars accompagne les entreprises dans leurs moments d'exception.
            </p>
            <p className="text-xs opacity-75">
              Deux pôles d'expertise : Cadeaux & Événements
            </p>
          </div>

          {/* Yvars Cadeaux */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-[hsl(var(--cadeaux-red))]" />
              <h4 className="font-semibold">Yvars Cadeaux</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cadeaux" className="hover:text-[hsl(var(--cadeaux-red))] transition-colors">
                  Nos univers cadeaux
                </Link>
              </li>
              <li>
                <Link to="/cadeaux#services" className="hover:text-[hsl(var(--cadeaux-red))] transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/cadeaux#contact" className="hover:text-[hsl(var(--cadeaux-red))] transition-colors">
                  Demander un devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Yvars Événements */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[hsl(var(--evenements-gold))]" />
              <h4 className="font-semibold">Yvars Événements</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/evenements" className="hover:text-[hsl(var(--evenements-gold))] transition-colors">
                  Nos prestations
                </Link>
              </li>
              <li>
                <Link to="/evenements#realisations" className="hover:text-[hsl(var(--evenements-gold))] transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/evenements#contact" className="hover:text-[hsl(var(--evenements-gold))] transition-colors">
                  Organiser mon événement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Maison Yvars. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;