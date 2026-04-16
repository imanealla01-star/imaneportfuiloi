import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez mes projets en développement social, formation professionnelle et recherche-action. Inclusion sociale, protection de l'enfance, accompagnement des aidants.",
};

export default function ProjectsPage() {
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
              title="Mes Projets"
              subtitle="Chaque projet est une aventure humaine. Découvrez mes interventions en développement social, formation et recherche-action."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
    </div>
  );
}
