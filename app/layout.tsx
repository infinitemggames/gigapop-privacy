import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, DEVELOPER } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: DEVELOPER, template: `%s · ${DEVELOPER}` },
  description: `Mobile games by ${DEVELOPER}.`,
};

export const viewport: Viewport = {
  themeColor: "#07080d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            {DEVELOPER.toUpperCase()}
          </Link>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()} {DEVELOPER} · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </footer>
      </body>
    </html>
  );
}
