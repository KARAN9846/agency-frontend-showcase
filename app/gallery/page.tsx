import type { Metadata } from "next";

import GalleryShowcase from "@/components/gallery/GalleryShowcase";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Concept Gallery | Nexa Digital Agency",
  description:
    "A gallery of illustrative workspace imagery used in the Nexa Digital Agency portfolio demonstration.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[#F8FAFC]">
      <section aria-label="Nexa Digital Agency concept gallery">
        <Container>
          <div className="py-14 sm:py-20 lg:py-24">
            <GalleryShowcase />
          </div>
        </Container>
      </section>
    </main>
  );
}
