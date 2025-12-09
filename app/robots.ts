export default function Robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://cilento.vercel.app/sitemap.xml",
  };
}
