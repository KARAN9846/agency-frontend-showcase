"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "../ui/Container";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const highlightedPath = hoveredPath ?? pathname;

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC]/80 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Nexa Digital Agency home"
          >
            <Image
              src="/images/nexa-logo.svg"
              alt="Nexa Digital Agency"
              width={162}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navigation.map((item) => {
              const isHighlighted = highlightedPath === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredPath(item.href)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    isHighlighted ? "text-[#F65011]" : "text-[#344054]"
                  }`}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-[#F65011] transition-all duration-200 ${
                      isHighlighted ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="
              hidden
              items-center
              rounded-xl
              bg-[#F65011]
              px-5
              py-3
              text-sm
              font-semibold
              !text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#D9430B]
              md:inline-flex
            "
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex rounded-lg p-2 text-[#101828] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-[#E4E7EC] py-5 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg border-l-2 px-3 py-3 text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "border-[#F65011] bg-[#FFF4EF] text-[#F65011]"
                      : "border-transparent text-[#344054] hover:border-[#F65011] hover:bg-[#F8FAFC] hover:text-[#F65011]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="
                  mt-2
                  rounded-xl
                  bg-[#F65011]
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  !text-white
                  hover:bg-[#D9430B]
                "
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
