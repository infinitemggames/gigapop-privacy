/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files in out/: works on Vercel, Netlify, GitHub Pages or any web host.
  output: "export",
  // /gigapop/privacy/ → gigapop/privacy/index.html, so every page also works on simple static hosts.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
