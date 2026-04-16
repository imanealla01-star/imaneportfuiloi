import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function RecentInsights() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Dernières Réflexions"
            subtitle="Articles et analyses sur les enjeux contemporains du travail social et du développement communautaire."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 150}>
              <article
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                id={`blog-card-${post.id}`}
              >
                {/* Thumbnail */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-deep-ocean">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <time className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-lg font-heading font-semibold text-navy leading-snug group-hover:text-deep-ocean transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean group-hover:text-deep-ocean transition-colors duration-300">
                    Lire la suite
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                  </div>
                </div>

                {/* Full-card link overlay */}
                <Link
                  href={`#${post.slug}`}
                  className="absolute inset-0"
                  aria-label={`Lire : ${post.title}`}
                />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
