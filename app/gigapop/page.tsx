import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, game } from "@/lib/site";

const g = game("gigapop");

export const metadata: Metadata = {
  title: g.name,
  description: g.description,
};

export default function GigapopPage() {
  return (
    <section className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={g.icon} alt={`${g.name} icon`} />
      <h1>{g.name.toUpperCase()}</h1>
      <p className="tag">{g.tagline.toUpperCase()}</p>
      <p>{g.description}</p>
      <div className="links">
        {g.googlePlay ? (
          <a className="button" href={g.googlePlay}>
            Google Play
          </a>
        ) : (
          <span className="button disabled">Google Play · coming soon</span>
        )}
        {g.appStore ? (
          <a className="button" href={g.appStore}>
            App Store
          </a>
        ) : (
          <span className="button disabled">App Store · coming soon</span>
        )}
        <Link className="button" href={`/${g.slug}/privacy/`}>
          Privacy Policy
        </Link>
        <a className="button" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(g.name)}`}>
          Support
        </a>
      </div>
    </section>
  );
}
