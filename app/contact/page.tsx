import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactDetails from "@/components/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact | Nexa Digital Agency",
  description:
    "Use the portfolio contact form to explore a web, software, mobile or digital project concept.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactDetails />
    </main>
  );
}
