import type { Metadata } from "next";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
import WebDevelopment from "@/components/services/WebDevelopment";
import MobileDevelopment from "@/components/services/MobileDevelopment";
import DigitalMarketing from "@/components/services/DigitalMarketing";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata: Metadata = {
  title: "Services | Nexa Digital Agency",
  description:
    "Explore the software, web, mobile and digital marketing capabilities presented in this portfolio demonstration.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesOverview />
      <SoftwareDevelopment />
      <WebDevelopment />
      <MobileDevelopment />
      <DigitalMarketing />
      <ServicesCTA />
    </main>
  );
}
