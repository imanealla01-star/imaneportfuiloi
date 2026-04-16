import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Conditions d'Utilisation",
  description:
    "Conditions générales d'utilisation du site web d'Imane Alla, doctorante en sociologie.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="relative py-16 gradient-hero overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Conditions d'Utilisation"
              subtitle="Dernière mise à jour : Avril 2026"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal>
          <div className="prose prose-gray max-w-none">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-8">
              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  1. Objet
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Les présentes conditions générales d&apos;utilisation régissent
                  l&apos;accès et l&apos;utilisation du site web imanealla.com. En
                  naviguant sur ce site, vous acceptez ces conditions dans leur
                  intégralité.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  2. Propriété intellectuelle
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  L&apos;ensemble du contenu de ce site (textes, images, logo,
                  mise en page) est protégé par le droit d&apos;auteur. Toute
                  reproduction partielle ou totale est interdite sans
                  autorisation préalable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  3. Responsabilité
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Les informations présentées sur ce site sont fournies à titre
                  indicatif. Imane Alla ne saurait être tenue responsable
                  de toute utilisation faite de ces informations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  4. Liens externes
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ce site peut contenir des liens vers des sites tiers. Imane
                  Alla n&apos;est pas responsable du contenu de ces sites
                  externes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  5. Droit applicable
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Les présentes conditions sont régies par le droit français.
                  Tout litige sera soumis à la compétence exclusive des
                  tribunaux français.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
