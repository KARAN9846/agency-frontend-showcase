import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Software Development", href: "/services#software-development" },
  { label: "Web Development", href: "/services#web-development" },
  { label: "Mobile Development", href: "/services#mobile-development" },
  { label: "Digital Marketing", href: "/services#digital-marketing" },
];

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr_0.9fr_1.1fr] lg:gap-14">
          {/* ===================================================
              BRAND
          ==================================================== */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Nexa Digital Agency home"
              className="inline-flex"
            >
              <Image
                src="/images/nexa-logo-light.svg"
                alt="Nexa Digital Agency"
                width={180}
                height={44}
                priority
                className="h-auto w-[170px]"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#98A2B3]">
              A fictional digital agency interface demonstrating modern web,
              software, mobile and digital service experiences.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span
                aria-label="LinkedIn profile not configured"
                aria-disabled="true"
                className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg bg-[#0A66C2] text-white opacity-70"
              >
                <FaLinkedinIn size={18} aria-hidden="true" />
              </span>

              <span
                aria-label="Instagram profile not configured"
                aria-disabled="true"
                className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg bg-[#E4405F] text-white opacity-70"
              >
                <FaInstagram size={18} aria-hidden="true" />
              </span>

              <span
                aria-label="WhatsApp contact not configured"
                aria-disabled="true"
                className="inline-flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-lg bg-[#25D366] text-white opacity-70"
              >
                <FaWhatsapp size={19} aria-hidden="true" />
              </span>
            </div>
          </div>

          {/* ===================================================
              EXPLORE
          ==================================================== */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Explore
            </p>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#98A2B3] transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ===================================================
              SERVICES
          ==================================================== */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Services
            </p>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-[#98A2B3] transition-colors duration-200 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================
              CONTACT
          ==================================================== */}
          <div className="lg:max-w-xs lg:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
              Get in touch
            </p>

            <h2 className="mt-4 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
              Let&apos;s build something useful.
            </h2>

            {/* Contact Information */}
            <div className="mt-5 space-y-3">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F65011]"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <p className="text-sm leading-5 text-[#98A2B3]">
                  Remote / Portfolio Demonstration
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 text-sm text-[#98A2B3]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0 text-[#F65011]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <span className="break-all">hello@example.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm text-[#98A2B3]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 shrink-0 text-[#F65011]"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>

                <span>+1 (555) 010-2026</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-10 items-center justify-center rounded-xl bg-[#F65011] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_10px_25px_rgba(246,80,17,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
            >
              Let&apos;s Talk
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[#667085] sm:text-sm">
              © 2026 Nexa Digital Agency. Portfolio demonstration project.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#667085]">Software</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Web</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Mobile</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs text-[#667085]">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
