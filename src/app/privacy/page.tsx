import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité du site web d'Imane Alla, doctorante en sociologie.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="relative py-16 gradient-hero overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Politique de Confidentialité"
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
                  1. Collecte des données
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ce site web collecte des informations personnelles uniquement
                  lorsque vous les soumettez volontairement via le formulaire de
                  contact (nom, adresse e-mail, message). Ces données sont
                  utilisées exclusivement pour répondre à vos demandes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  2. Cookies et technologies de suivi
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ce site utilise des cookies et technologies similaires à des
                  fins d&apos;analyse et de publicité (Google Analytics, Meta
                  Pixel, TikTok Pixel). Vous pouvez gérer vos préférences de
                  cookies à tout moment via les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  3. Utilisation des données
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Vos données personnelles ne sont jamais vendues ni partagées
                  avec des tiers, sauf obligation légale. Elles sont utilisées
                  uniquement pour répondre à votre demande et améliorer
                  l&apos;expérience utilisateur du site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  4. Vos droits
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
                  rectification, de suppression et de portabilité de vos
                  données. Pour exercer ces droits, contactez-moi à
                  l&apos;adresse : imanealla01@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-xl font-heading font-bold text-navy mb-3">
                  5. Contact
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Pour toute question relative à cette politique de
                  confidentialité, veuillez me contacter par email à
                  imanealla01@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
