export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Nexa Digital Agency Portfolio Website",
    description:
      "A fictional digital agency website created as a frontend portfolio demonstration.",
    genre: "Frontend development portfolio",
    url: "https://agency-frontend-showcase.vercel.app",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
