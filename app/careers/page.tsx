import type { Metadata } from "next";

import CareersShowcase from "@/components/careers/CareersShowcase";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Careers Demo | Nexa Digital Agency",
  description:
    "A demonstration careers interface included in the Nexa Digital Agency portfolio project. No roles are currently being advertised.",
};

export default function CareersPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section aria-label="Nexa Digital Agency careers interface demonstration">
        <Container>
          <div className="py-14 sm:py-20 lg:py-24">
            <CareersShowcase />
          </div>
        </Container>
      </section>
    </main>
  );
}
