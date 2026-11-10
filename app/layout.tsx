import type { Metadata, Viewport } from "next";
import { DEVELOPER, DEVELOPER_SITE, GAME } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `Privacy Policy – ${GAME}`,
  description: `Privacy policy of the mobile game ${GAME} by ${DEVELOPER}.`,
  icons: "/icon.png",
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="" width={40} height={40} />
          <span className="brand">{GAME.toUpperCase()}</span>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()} {DEVELOPER} · {GAME} · <a href={DEVELOPER_SITE}>More games</a>
        </footer>
      </body>
    </html>
  );
}
