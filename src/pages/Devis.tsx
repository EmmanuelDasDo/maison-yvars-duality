import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, Calendar, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/shared/Footer";
import logoEvenements from "@/assets/logo-evenements-transparent.png";

const Devis = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  // Form data state
  const [formData, setFormData] = useState({
    // Étape 1
    typeClient: "",
    nomEntreprise: "",
    secteurActivite: "",
    nombreCollaborateurs: "",
    ville: "",
    siteWeb: "",
    // Étape 2
    typeEvenement: [] as string[],
    autreEvenement: "",
    dateSouhaitee: "",
    horaire: "",
    lieuReserve: "",
    lieuNom: "",
    besoinLieu: false,
    nombreParticipants: "",
    budget: "",
    services: [] as string[],
    // Étape 3
    objectifs: "",
    ambiance: "",
    besoinsParticuliers: "",
    commentConnaissance: "",
    // Étape 4
    civilite: "",
    prenom: "",
    nom: "",
    fonction: "",
    email: "",
    telephone: "",
    accepteContact: false,
    accepteNewsletter: false,
  });

  const steps = [
    { number: 1, title: "Votre entreprise" },
    { number: 2, title: "Votre événement" },
    { number: 3, title: "Détails & objectifs" },
    { number: 4, title: "Coordonnées & validation" },
  ];

  const typeClientOptions = [
    "Entreprise / CSE",
    "Agence / Intermédiaire",
    "Association",
    "Particulier",
  ];

  const secteurActiviteOptions = [
    "Agriculture",
    "Automobile",
    "Banque / Assurance",
    "BTP / Construction",
    "Commerce / Distribution",
    "Éducation / Formation",
    "Énergie",
    "Hôtellerie / Restauration",
    "Immobilier",
    "Industrie",
    "Informatique / Technologie",
    "Santé / Pharmaceutique",
    "Services aux entreprises",
    "Télécommunications",
    "Transport / Logistique",
    "Autre",
  ];

  const nombreCollaborateursOptions = [
    "Moins de 10",
    "10 à 50",
    "50 à 200",
    "Plus de 200",
  ];

  const typeEvenementOptions = [
    "Soirée d'entreprise",
    "Séminaire / Convention",
    "Team building",
    "Inauguration / Lancement de produit",
    "Arbre de Noël / Événement festif",
    "Autre",
  ];

  const budgetOptions = [
    "Moins de 5 000 €",
    "5 000 € - 10 000 €",
    "10 000 € - 30 000 €",
    "Plus de 30 000 €",
  ];

  const servicesOptions = [
    "Organisation globale de l'événement",
    "Traiteur & boissons",
    "Recherche et location de lieu",
    "Scénographie / décoration",
    "DJ / Musique live",
    "Animations (artistiques, ludiques, team building…)",
    "Photo / vidéo",
    "Gestion technique (son, lumière, régie)",
  ];

  const connaissanceOptions = [
    "Bouche-à-oreille",
    "Google",
    "Réseaux sociaux",
    "Recommandation",
    "Autre",
  ];

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (field: "typeEvenement" | "services", value: string) => {
    setFormData((prev) => {
      const currentArray = prev[field];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.typeClient || !formData.nomEntreprise || !formData.ville) {
          toast({
            title: "Champs obligatoires manquants",
            description: "Veuillez remplir tous les champs obligatoires.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 2:
        if (
          formData.typeEvenement.length === 0 ||
          !formData.dateSouhaitee ||
          !formData.nombreParticipants ||
          !formData.budget
        ) {
          toast({
            title: "Champs obligatoires manquants",
            description: "Veuillez remplir tous les champs obligatoires.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      case 3:
        return true;
      case 4:
        if (
          !formData.civilite ||
          !formData.prenom ||
          !formData.nom ||
          !formData.fonction ||
          !formData.email ||
          !formData.telephone ||
          !formData.accepteContact
        ) {
          toast({
            title: "Champs obligatoires manquants",
            description: "Veuillez remplir tous les champs obligatoires et accepter les conditions.",
            variant: "destructive",
          });
          return false;
        }
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast({
            title: "Email invalide",
            description: "Veuillez saisir une adresse email valide.",
            variant: "destructive",
          });
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    // Simulate email sending
    console.log("Formulaire envoyé:", formData);

    // Show success
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    toast({
      title: "Demande envoyée !",
      description: "Nous avons bien reçu votre demande de devis.",
    });
  };

  const progressPercentage = (currentStep / 4) * 100;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[hsl(var(--evenements-black))] font-lato text-white">
        <header className="py-6 bg-[hsl(var(--evenements-black))]">
          <div className="container mx-auto px-4">
            <Link to="/evenements">
              <img
                src={logoEvenements}
                alt="Yvars Événements"
                className="h-16 md:h-20 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
              />
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(var(--evenements-gold))] mb-8 animate-fade-in-up">
              <Check className="w-12 h-12 text-[hsl(var(--evenements-black))]" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Merci, votre demande de devis a bien été envoyée 💫
            </h1>
            
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Notre équipe Yvars Événements va analyser votre projet et revenir vers vous rapidement avec un devis personnalisé. 
              Pour aller plus loin et affiner ensemble votre événement, vous pouvez dès maintenant réserver un créneau d'échange.
            </p>

            <Card className="bg-white/5 border-[hsl(var(--evenements-gold))]/30 p-8 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-playfair font-bold text-[hsl(var(--evenements-gold))] mb-4">
                Prochaine étape
              </h2>
              <p className="text-white/70 mb-6">
                Réservez dès maintenant un rendez-vous avec notre équipe pour discuter de votre projet en détail.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-black))] hover:bg-[hsl(var(--evenements-gold-light))] shadow-gold"
              >
                <a
                  href="https://calendly.com/yvars-evenements/appel-decouverte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver un rendez-vous avec Yvars Événements
                </a>
              </Button>
            </Card>

            <Card className="bg-white/5 border-white/10 p-6 text-left animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-lg font-semibold text-[hsl(var(--evenements-gold))] mb-4">
                Récapitulatif de votre demande
              </h3>
              <div className="space-y-3 text-sm text-white/70">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="font-medium">Type d'événement :</span>
                  <span>{formData.typeEvenement.join(", ")}</span>
                </div>
                {formData.dateSouhaitee && (
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-medium">Date souhaitée :</span>
                    <span>{formData.dateSouhaitee}</span>
                  </div>
                )}
                {formData.nombreParticipants && (
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-medium">Participants :</span>
                    <span>{formData.nombreParticipants}</span>
                  </div>
                )}
                {formData.budget && (
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-medium">Budget :</span>
                    <span>{formData.budget}</span>
                  </div>
                )}
                {formData.lieuNom && (
                  <div className="flex justify-between">
                    <span className="font-medium">Lieu :</span>
                    <span>{formData.lieuNom}</span>
                  </div>
                )}
              </div>
            </Card>

            <div className="mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Link to="/evenements">
                <Button variant="outline" className="border-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold))]/10">
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--evenements-black))] to-[hsl(var(--evenements-black))]/95 font-lato">
      {/* Header */}
      <header className="py-4 bg-[hsl(var(--evenements-black))]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/evenements">
            <img
              src={logoEvenements}
              alt="Yvars Événements"
              className="h-16 md:h-20 drop-shadow-[0_2px_15px_rgba(212,175,55,0.4)]"
            />
          </Link>
          <Link to="/cadeaux">
            <Button variant="outline" className="gap-2 border-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-gold))] hover:bg-[hsl(var(--evenements-gold))] hover:text-[hsl(var(--evenements-black))]">
              <Gift className="w-4 h-4" />
              <span className="hidden md:inline">Yvars Cadeaux</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-[hsl(var(--evenements-black))]/50 backdrop-blur-sm sticky top-0 z-40 border-b border-[hsl(var(--evenements-gold))]/20">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between mb-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center flex-1 ${
                    step.number <= currentStep ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold mb-2 transition-all ${
                      step.number === currentStep
                        ? "bg-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-black))] scale-110"
                        : step.number < currentStep
                        ? "bg-[hsl(var(--evenements-gold))]/30 text-[hsl(var(--evenements-gold))]"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {step.number < currentStep ? <Check className="w-5 h-5" /> : step.number}
                  </div>
                  <span className={`text-xs md:text-sm text-center ${
                    step.number === currentStep ? "text-[hsl(var(--evenements-gold))] font-semibold" : "text-white/60"
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <Progress value={progressPercentage} className="h-2 bg-white/10" />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-[hsl(var(--evenements-cream))] border-[hsl(var(--evenements-gold))]/20 shadow-evenements p-8 md:p-12 animate-fade-in-up">
            {/* Étape 1 - Votre entreprise */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-[hsl(var(--evenements-text))] mb-2">
                    Votre entreprise
                  </h2>
                  <p className="text-[hsl(var(--evenements-text))]/70">
                    Parlez-nous de votre organisation
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-[hsl(var(--evenements-text))] mb-3 block">
                      Type de client <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <div className="grid grid-cols-2 gap-3">
                      {typeClientOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateField("typeClient", option)}
                          className={`p-4 rounded-lg border-2 transition-all text-sm font-medium ${
                            formData.typeClient === option
                              ? "border-[hsl(var(--evenements-gold))] bg-[hsl(var(--evenements-gold))]/10 text-[hsl(var(--evenements-text))]"
                              : "border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]/70 hover:border-[hsl(var(--evenements-gold))]/50"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nomEntreprise" className="text-[hsl(var(--evenements-text))]">
                      Nom de l'entreprise / organisation <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="nomEntreprise"
                      value={formData.nomEntreprise}
                      onChange={(e) => updateField("nomEntreprise", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: Entreprise ABC"
                    />
                  </div>

                  <div>
                    <Label htmlFor="secteurActivite" className="text-[hsl(var(--evenements-text))]">
                      Secteur d'activité
                    </Label>
                    <select
                      id="secteurActivite"
                      value={formData.secteurActivite}
                      onChange={(e) => updateField("secteurActivite", e.target.value)}
                      className="mt-2 w-full h-10 rounded-md border border-[hsl(var(--evenements-text))]/20 bg-white px-3 py-2 text-sm text-[hsl(var(--evenements-text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--evenements-gold))]"
                    >
                      <option value="">Sélectionnez un secteur</option>
                      {secteurActiviteOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="nombreCollaborateurs" className="text-[hsl(var(--evenements-text))]">
                      Nombre de collaborateurs
                    </Label>
                    <select
                      id="nombreCollaborateurs"
                      value={formData.nombreCollaborateurs}
                      onChange={(e) => updateField("nombreCollaborateurs", e.target.value)}
                      className="mt-2 w-full h-10 rounded-md border border-[hsl(var(--evenements-text))]/20 bg-white px-3 py-2 text-sm text-[hsl(var(--evenements-text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--evenements-gold))]"
                    >
                      <option value="">Sélectionnez une taille</option>
                      {nombreCollaborateursOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="ville" className="text-[hsl(var(--evenements-text))]">
                      Ville <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="ville"
                      value={formData.ville}
                      onChange={(e) => updateField("ville", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: Paris"
                    />
                  </div>

                  <div>
                    <Label htmlFor="siteWeb" className="text-[hsl(var(--evenements-text))]">
                      Site web (optionnel)
                    </Label>
                    <Input
                      id="siteWeb"
                      value={formData.siteWeb}
                      onChange={(e) => updateField("siteWeb", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="https://www.exemple.com"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Étape 2 - Votre événement */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-[hsl(var(--evenements-text))] mb-2">
                    Votre événement
                  </h2>
                  <p className="text-[hsl(var(--evenements-text))]/70">
                    Détaillez votre projet
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-[hsl(var(--evenements-text))] mb-3 block">
                      Type d'événement <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <div className="space-y-2">
                      {typeEvenementOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <Checkbox
                            id={`evenement-${option}`}
                            checked={formData.typeEvenement.includes(option)}
                            onCheckedChange={() => toggleArrayField("typeEvenement", option)}
                          />
                          <label
                            htmlFor={`evenement-${option}`}
                            className="text-sm text-[hsl(var(--evenements-text))] cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                    {formData.typeEvenement.includes("Autre") && (
                      <Input
                        value={formData.autreEvenement}
                        onChange={(e) => updateField("autreEvenement", e.target.value)}
                        className="mt-3 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                        placeholder="Précisez le type d'événement"
                      />
                    )}
                  </div>

                  <div>
                    <Label htmlFor="dateSouhaitee" className="text-[hsl(var(--evenements-text))]">
                      Date souhaitée <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="dateSouhaitee"
                      type="date"
                      value={formData.dateSouhaitee}
                      onChange={(e) => updateField("dateSouhaitee", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="horaire" className="text-[hsl(var(--evenements-text))]">
                      Horaire approximatif
                    </Label>
                    <Input
                      id="horaire"
                      value={formData.horaire}
                      onChange={(e) => updateField("horaire", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: 19h - 1h"
                    />
                  </div>

                  <div>
                    <Label className="text-[hsl(var(--evenements-text))] mb-3 block">
                      Lieu
                    </Label>
                    <div className="space-y-3">
                      <select
                        value={formData.lieuReserve}
                        onChange={(e) => updateField("lieuReserve", e.target.value)}
                        className="w-full h-10 rounded-md border border-[hsl(var(--evenements-text))]/20 bg-white px-3 py-2 text-sm text-[hsl(var(--evenements-text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--evenements-gold))]"
                      >
                        <option value="">Avez-vous déjà un lieu ?</option>
                        <option value="oui">Oui, lieu déjà réservé</option>
                        <option value="non">Non, besoin d'aide</option>
                      </select>

                      {formData.lieuReserve === "oui" && (
                        <Input
                          value={formData.lieuNom}
                          onChange={(e) => updateField("lieuNom", e.target.value)}
                          className="bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                          placeholder="Nom / adresse du lieu"
                        />
                      )}

                      {formData.lieuReserve === "non" && (
                        <div className="flex items-center space-x-3 p-4 bg-[hsl(var(--evenements-gold))]/10 rounded-lg">
                          <Checkbox
                            id="besoinLieu"
                            checked={formData.besoinLieu}
                            onCheckedChange={(checked) => updateField("besoinLieu", checked)}
                          />
                          <label
                            htmlFor="besoinLieu"
                            className="text-sm text-[hsl(var(--evenements-text))] cursor-pointer"
                          >
                            J'ai besoin que Yvars Événements me propose un lieu
                          </label>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nombreParticipants" className="text-[hsl(var(--evenements-text))]">
                      Nombre estimé de participants <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="nombreParticipants"
                      type="number"
                      value={formData.nombreParticipants}
                      onChange={(e) => updateField("nombreParticipants", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: 50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-[hsl(var(--evenements-text))]">
                      Budget global estimé <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="mt-2 w-full h-10 rounded-md border border-[hsl(var(--evenements-text))]/20 bg-white px-3 py-2 text-sm text-[hsl(var(--evenements-text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--evenements-gold))]"
                    >
                      <option value="">Sélectionnez un budget</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label className="text-[hsl(var(--evenements-text))] mb-3 block">
                      Services souhaités
                    </Label>
                    <div className="space-y-2">
                      {servicesOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <Checkbox
                            id={`service-${option}`}
                            checked={formData.services.includes(option)}
                            onCheckedChange={() => toggleArrayField("services", option)}
                          />
                          <label
                            htmlFor={`service-${option}`}
                            className="text-sm text-[hsl(var(--evenements-text))] cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 3 - Détails & objectifs */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-[hsl(var(--evenements-text))] mb-2">
                    Détails & objectifs
                  </h2>
                  <p className="text-[hsl(var(--evenements-text))]/70">
                    Aidez-nous à comprendre vos attentes
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="objectifs" className="text-[hsl(var(--evenements-text))]">
                      Objectifs de votre événement
                    </Label>
                    <Textarea
                      id="objectifs"
                      value={formData.objectifs}
                      onChange={(e) => updateField("objectifs", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))] min-h-32"
                      placeholder="Fidéliser vos équipes, remercier vos clients, marquer un lancement, etc."
                    />
                  </div>

                  <div>
                    <Label htmlFor="ambiance" className="text-[hsl(var(--evenements-text))]">
                      Ambiance / style souhaité
                    </Label>
                    <Input
                      id="ambiance"
                      value={formData.ambiance}
                      onChange={(e) => updateField("ambiance", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: chic, festif, décontracté, thématique..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="besoinsParticuliers" className="text-[hsl(var(--evenements-text))]">
                      Messages / besoins particuliers
                    </Label>
                    <Textarea
                      id="besoinsParticuliers"
                      value={formData.besoinsParticuliers}
                      onChange={(e) => updateField("besoinsParticuliers", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))] min-h-32"
                      placeholder="Contraintes, impératifs, animations souhaitées, accessibilité..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="commentConnaissance" className="text-[hsl(var(--evenements-text))]">
                      Comment avez-vous connu Yvars Événements ?
                    </Label>
                    <select
                      id="commentConnaissance"
                      value={formData.commentConnaissance}
                      onChange={(e) => updateField("commentConnaissance", e.target.value)}
                      className="mt-2 w-full h-10 rounded-md border border-[hsl(var(--evenements-text))]/20 bg-white px-3 py-2 text-sm text-[hsl(var(--evenements-text))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--evenements-gold))]"
                    >
                      <option value="">Sélectionnez une option</option>
                      {connaissanceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Étape 4 - Coordonnées & validation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-[hsl(var(--evenements-text))] mb-2">
                    Coordonnées & validation
                  </h2>
                  <p className="text-[hsl(var(--evenements-text))]/70">
                    Dernière étape pour finaliser votre demande
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="text-[hsl(var(--evenements-text))] mb-3 block">
                      Civilité <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => updateField("civilite", "Mme")}
                        className={`flex-1 p-3 rounded-lg border-2 transition-all font-medium ${
                          formData.civilite === "Mme"
                            ? "border-[hsl(var(--evenements-gold))] bg-[hsl(var(--evenements-gold))]/10 text-[hsl(var(--evenements-text))]"
                            : "border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]/70 hover:border-[hsl(var(--evenements-gold))]/50"
                        }`}
                      >
                        Mme
                      </button>
                      <button
                        type="button"
                        onClick={() => updateField("civilite", "M.")}
                        className={`flex-1 p-3 rounded-lg border-2 transition-all font-medium ${
                          formData.civilite === "M."
                            ? "border-[hsl(var(--evenements-gold))] bg-[hsl(var(--evenements-gold))]/10 text-[hsl(var(--evenements-text))]"
                            : "border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]/70 hover:border-[hsl(var(--evenements-gold))]/50"
                        }`}
                      >
                        M.
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="prenom" className="text-[hsl(var(--evenements-text))]">
                        Prénom <span className="text-[hsl(var(--evenements-gold))]">*</span>
                      </Label>
                      <Input
                        id="prenom"
                        value={formData.prenom}
                        onChange={(e) => updateField("prenom", e.target.value)}
                        className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="nom" className="text-[hsl(var(--evenements-text))]">
                        Nom <span className="text-[hsl(var(--evenements-gold))]">*</span>
                      </Label>
                      <Input
                        id="nom"
                        value={formData.nom}
                        onChange={(e) => updateField("nom", e.target.value)}
                        className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="fonction" className="text-[hsl(var(--evenements-text))]">
                      Fonction / poste <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="fonction"
                      value={formData.fonction}
                      onChange={(e) => updateField("fonction", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="Ex: Directeur Marketing"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-[hsl(var(--evenements-text))]">
                      Email professionnel <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="prenom.nom@entreprise.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone" className="text-[hsl(var(--evenements-text))]">
                      Téléphone <span className="text-[hsl(var(--evenements-gold))]">*</span>
                    </Label>
                    <Input
                      id="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => updateField("telephone", e.target.value)}
                      className="mt-2 bg-white border-[hsl(var(--evenements-text))]/20 text-[hsl(var(--evenements-text))]"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-[hsl(var(--evenements-text))]/20">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="accepteContact"
                        checked={formData.accepteContact}
                        onCheckedChange={(checked) => updateField("accepteContact", checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="accepteContact"
                        className="text-sm text-[hsl(var(--evenements-text))] cursor-pointer leading-relaxed"
                      >
                        J'accepte que Yvars Événements utilise ces informations pour me recontacter dans le cadre de ma demande de devis. <span className="text-[hsl(var(--evenements-gold))]">*</span>
                      </label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="accepteNewsletter"
                        checked={formData.accepteNewsletter}
                        onCheckedChange={(checked) => updateField("accepteNewsletter", checked)}
                        className="mt-1"
                      />
                      <label
                        htmlFor="accepteNewsletter"
                        className="text-sm text-[hsl(var(--evenements-text))] cursor-pointer leading-relaxed"
                      >
                        Je souhaite recevoir ponctuellement des informations et offres sur les services Yvars Événements.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-[hsl(var(--evenements-text))]/20">
              {currentStep > 1 ? (
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="gap-2 border-[hsl(var(--evenements-text))]/30 text-[hsl(var(--evenements-text))] hover:bg-[hsl(var(--evenements-text))]/5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="gap-2 bg-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-black))] hover:bg-[hsl(var(--evenements-gold-light))] shadow-gold ml-auto"
                >
                  Étape suivante
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="gap-2 bg-[hsl(var(--evenements-gold))] text-[hsl(var(--evenements-black))] hover:bg-[hsl(var(--evenements-gold-light))] shadow-gold ml-auto"
                >
                  Envoyer ma demande de devis
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Devis;
