import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-teal/10 blur-3xl animate-float" />
        <div
          className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-ocean/10 blur-3xl animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full bg-mint/20 blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #006593 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-mint/30 text-sm text-deep-ocean font-medium">
                <span className="w-2 h-2 rounded-full bg-ocean animate-pulse" />
                Doctorante en Sociologie &amp; Développement Social
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                <span className="text-navy">Imane</span>
                <br />
                <span className="gradient-text">Alla</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Doctorante en sociologie, titulaire d&apos;un Master en{" "}
                <strong className="text-deep-ocean">travail social et développement</strong>,
                je m&apos;engage dans la{" "}
                <strong className="text-deep-ocean">gestion de projets sociaux</strong>,{" "}
                le <strong className="text-deep-ocean">leadership communautaire</strong>{" "}
                et les <strong className="text-deep-ocean">politiques publiques</strong>{" "}
                pour un impact social durable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/projects"
                  id="hero-cta-projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold gradient-cta shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Découvrir mes projets
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  id="hero-cta-contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border-2 border-ocean/30 text-deep-ocean hover:bg-ocean/10 transition-all duration-300 hover:-translate-y-1"
                >
                  Me contacter
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-6 border-t border-mint/30 mt-6">
                {[
                  { value: "4", label: "Langues maîtrisées" },
                  { value: "6+", label: "Projets & engagements" },
                  { value: "2", label: "Stages terrain" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold gradient-text font-heading">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Portrait */}
          <ScrollReveal className="order-1 lg:order-2" delay={200}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 via-ocean/10 to-deep-ocean/20 blur-sm" />
                <div className="absolute -inset-2 rounded-3xl border-2 border-teal/20" />

                {/* Image container */}
                <div className="relative w-72 h-96 sm:w-80 sm:h-[440px] lg:w-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/portrait-imane.jpg"
                    alt="Imane Alla — Doctorante en sociologie et développement social"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass-card px-4 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ocean to-deep-ocean flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">
                        Doctorante
                      </div>
                      <div className="text-xs text-gray-500">
                        Master Travail Social &amp; Dév.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
