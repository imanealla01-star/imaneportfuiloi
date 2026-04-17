import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const skills = [
  "Sociologie de la gestion et de l'organisation",
  "Santé mentale et accompagnement psychologique",
  "Gestion de projets sociaux et entrepreneuriat",
  "Leadership et organisation d'événements",
  "Communication stratégique",
];

export default function Skills() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Mes Compétences"
            subtitle="Expertises clés pour un impact social durable"
            centered={true}
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Skills List */}
          <ScrollReveal delay={100} className="order-2 lg:order-1">
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-mint/20 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-ocean/30"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal/10 to-ocean/10 text-ocean">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-navy">
                    {skill}
                  </h3>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills Image */}
          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square">
                {/* Decorative background */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal/20 via-ocean/10 to-deep-ocean/20 blur-sm" />
                <div className="absolute -inset-2 rounded-3xl border-2 border-teal/20" />
                
                <Image
                  src="/images/imane skills2.png"
                  alt="Mes Compétences"
                  fill
                  className="object-cover rounded-3xl shadow-xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
