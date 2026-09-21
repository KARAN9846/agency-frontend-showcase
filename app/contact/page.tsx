import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact | Nexa Digital Agency",
  description:
    "Use the portfolio contact form to explore a web, software, mobile or digital project concept.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const showcaseMode =
    process.env.NEXT_PUBLIC_UPWORK_SHOWCASE === "true" &&
    process.env.UPWORK_SHOWCASE === "true";

  return (
    <main>
      <ContactHero />
      <ContactForm showcaseMode={showcaseMode} />
      <ContactDetails showcaseMode={showcaseMode} />
    </main>
  );
}
