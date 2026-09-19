import type { Metadata } from "next";
import WelcomePopup from "@/components/home/WelcomePopup";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import WhyNexa from "@/components/home/WhyNexa";
import HowWeWork from "@/components/home/HowWeWork";
import FinalCTA from "@/components/home/FinalCTA";
import { HowWeGrow } from "@/components/home/HowWeWorkGrowth";

export const metadata: Metadata = {
  title: "Nexa Digital Agency | Digital Experiences & Web Solutions",
  description:
    "A portfolio demonstration of modern web, software, mobile and digital service experiences.",
};

export default function Home() {
  return (
    <main>
      <WelcomePopup />
      <Hero />
      <HowWeGrow />
      <ServicesPreview />
      <WhyNexa />
      <HowWeWork />
      <FinalCTA />
    </main>
  );
}
