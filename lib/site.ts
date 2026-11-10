// Everything you may want to change lives here: developer name, contact email and the games.

export const DEVELOPER = "Nemanja Maslakovic";
export const CONTACT_EMAIL = "neca2609@gmail.com";

export type Game = {
  slug: string; // URL: /<slug>/ and /<slug>/privacy/
  name: string;
  tagline: string;
  description: string;
  icon: string; // file in public/
  googlePlay?: string; // store links, added after release
  appStore?: string;
  policyDate: string; // effective date of the privacy policy
};

export const GAMES: Game[] = [
  {
    slug: "gigapop",
    name: "Gigapop",
    tagline: "Pop every shape at once",
    description:
      "A relaxing, oddly satisfying idle arcade game. A ball bounces around the arena on its own and pops every shape it touches. Upgrade it until it is so huge and so fast that it clears the whole arena in one single moment.",
    icon: "/gigapop/icon.png",
    googlePlay: undefined,
    appStore: undefined,
    policyDate: "November 10, 2026",
  },
];

export function game(slug: string): Game {
  const g = GAMES.find((x) => x.slug === slug);
  if (!g) throw new Error(`Unknown game: ${slug}`);
  return g;
}
