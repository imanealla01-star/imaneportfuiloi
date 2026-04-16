import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Imane Alla pour vos projets de développement social, formations ou consultations en sociologie. Disponible par email, WhatsApp et LinkedIn.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "imanealla01@gmail.com",
    href: "mailto:imanealla01@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Téléphone / WhatsApp",
    value: "+212 6 09 15 44 51",
    href: "tel:+212609154451",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Adresse",
    value: "27 Rue Es-Saidia, Hay Attaddamoun, Berrechid, Maroc",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      {/* Page Header */}
      <section className="relative py-16 md:py-20 gradient-hero overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-ocean/10 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title="Me Contacter"
              subtitle="Vous avez un projet social, une formation à organiser ou simplement une question ? N'hésitez pas à me contacter."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-navy mb-2">
                Envoyez-moi un message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Je vous répondrai dans les 24 à 48 heures.
              </p>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Contact Info Sidebar */}
          <ScrollReveal className="lg:col-span-2" delay={200}>
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean-light flex items-center justify-center text-deep-ocean shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-navy font-semibold hover:text-deep-ocean transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-navy font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/212609154451?text=Bonjour%20Imane%2C%20je%20souhaiterais%20discuter%20d%27un%20projet."
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#128C7E] group-hover:text-[#075E54] transition-colors">
                    Contacter via WhatsApp
                  </p>
                  <p className="text-sm text-gray-500">
                    Réponse rapide garantie
                  </p>
                </div>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin"
                className="flex items-center gap-4 p-5 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/20 hover:bg-[#0077B5]/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#0077B5] group-hover:text-[#005885] transition-colors">
                    Profil LinkedIn
                  </p>
                  <p className="text-sm text-gray-500">
                    Consultez mon parcours professionnel
                  </p>
                </div>
              </a>

              {/* Availability note */}
              <div className="bg-mint-50 rounded-2xl p-5 border border-mint/20">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ocean/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-ocean"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Disponibilité
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Du lundi au vendredi, 9h — 18h. Je réponds généralement sous 24h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
