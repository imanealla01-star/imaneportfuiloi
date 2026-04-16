import Image from "next/image";
import type { Project } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <ScrollReveal delay={100}>
      <article
        className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
        id={`project-${project.id}`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${
            isReversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`relative h-72 lg:h-auto lg:min-h-[480px] overflow-hidden ${
              isReversed ? "lg:order-2" : ""
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-navy/5" />

            {/* Date overlay */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm shadow-sm">
              <time className="text-sm font-semibold text-deep-ocean">
                {new Date(project.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
            </div>
          </div>

          {/* Content */}
          <div
            className={`p-8 lg:p-12 flex flex-col justify-center ${
              isReversed ? "lg:order-1" : ""
            }`}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-ocean-light text-xs font-medium text-deep-ocean border border-ocean/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-navy leading-tight mb-4 group-hover:text-deep-ocean transition-colors duration-300">
              {project.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              {project.excerpt}
            </p>

            {/* Article body - rendered from content */}
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
              {project.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h3
                      key={i}
                      className="text-lg font-heading font-semibold text-navy mt-6 mb-3"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={i} className="space-y-1 my-3">
                      {paragraph.split("\n").map((line, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-ocean mt-1.5 shrink-0" />
                          <span>{line.replace(/^- /, "")}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (/^\d+\./.test(paragraph)) {
                  return (
                    <ol key={i} className="space-y-2 my-3 ml-4">
                      {paragraph.split("\n").map((line, j) => (
                        <li key={j} className="text-sm pl-1">
                          {line.replace(/^\d+\.\s*/, "").split("**").map((part, k) =>
                            k % 2 === 1 ? (
                              <strong key={k} className="text-navy font-semibold">
                                {part}
                              </strong>
                            ) : (
                              <span key={k}>{part}</span>
                            )
                          )}
                        </li>
                      ))}
                    </ol>
                  );
                }

                return (
                  <p key={i} className="text-sm mb-3">
                    {paragraph.split("**").map((part, k) =>
                      k % 2 === 1 ? (
                        <strong key={k} className="text-navy font-semibold">
                          {part}
                        </strong>
                      ) : (
                        <span key={k}>{part}</span>
                      )
                    )}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
