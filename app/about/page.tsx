import type { Metadata } from "next";

import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutApproach from "@/components/about/AboutApproach";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About the Concept | Nexa Digital Agency",
  description:
    "Explore the thinking, capabilities and design principles behind this fictional digital agency portfolio concept.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutApproach />
      <AboutCTA />
    </main>
  );
}
