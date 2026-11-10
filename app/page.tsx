import Link from "next/link";
import { DEVELOPER, GAMES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <h1>{DEVELOPER}</h1>
      <p className="lead">Mobile games for Android and iPhone.</p>
      {GAMES.map((g) => (
        <section className="card" key={g.slug}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={g.icon} alt={`${g.name} icon`} />
          <div>
            <h3>{g.name}</h3>
            <p>{g.tagline}</p>
            <div className="links">
              <Link className="button" href={`/${g.slug}/`}>
                About
              </Link>
              <Link className="button" href={`/${g.slug}/privacy/`}>
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
