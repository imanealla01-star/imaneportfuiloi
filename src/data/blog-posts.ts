export interface BlogPost {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
  category: string;
  excerpt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Le rôle du travail social dans les politiques publiques au Maroc",
    date: "2026-03-15",
    thumbnail: "/images/blog-1.jpg",
    category: "Politiques Publiques",
    excerpt:
      "Comment le travail social peut-il contribuer à la conception et à la mise en œuvre de politiques publiques plus inclusives et adaptées aux réalités sociales marocaines ?",
    slug: "travail-social-politiques-publiques-maroc",
  },
  {
    id: "2",
    title: "Leadership féminin et engagement communautaire : enjeux et perspectives",
    date: "2026-02-28",
    thumbnail: "/images/blog-2.jpg",
    category: "Leadership",
    excerpt:
      "Réflexion sur le leadership féminin dans le secteur social au Maroc et dans le monde arabe, à travers l'expérience de terrain et l'engagement associatif.",
    slug: "leadership-feminin-engagement-communautaire",
  },
  {
    id: "3",
    title: "Prise en charge des violences faites aux femmes : retour d'expérience",
    date: "2026-01-20",
    thumbnail: "/images/blog-3.jpg",
    category: "Travail Social",
    excerpt:
      "Retour d'expérience sur l'accompagnement des femmes et enfants victimes de violences en milieu hospitalier, entre défis institutionnels et résilience humaine.",
    slug: "prise-en-charge-violences-femmes",
  },
];
