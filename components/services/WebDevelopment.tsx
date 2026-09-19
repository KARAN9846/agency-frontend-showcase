import {
  ArrowUpRight,
  Globe2,
  PanelsTopLeft,
  ShoppingCart,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export default function WebDevelopment() {
  const capabilities: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Corporate Websites",
      description:
        "Professional websites that communicate your brand clearly, build trust and turn visitors into opportunities.",
      icon: Globe2,
    },
    {
      title: "Web Applications",
      description:
        "Interactive digital products built around real workflows, customer needs and business processes.",
      icon: PanelsTopLeft,
    },
    {
      title: "E-commerce",
      description:
        "Smooth online shopping experiences designed to make products easier to discover and purchase.",
      icon: ShoppingCart,
    },
    {
      title: "Portals",
      description:
        "Connected digital spaces for customers, teams, partners and other users who need easy access to information.",
      icon: LayoutDashboard,
    },
  ];

  const highlights = [
    "Responsive across devices",
    "Performance-focused",
    "Search-friendly structure",
    "Accessible experiences",
    "Scalable foundations",
    "AI-enhanced where useful",
  ];

  return (
    <section
      id="web-development"
      className="scroll-mt-24 border-t border-[#E4E7EC] bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#101828] px-2 text-[11px] font-bold text-white">
                02
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Web Development
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl max-[399px]:text-[2rem] max-[399px]:leading-[1.1]">
              Digital experiences that{" "}
              <span className="text-[#F65011]">
                make your business stand out.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:pb-1 max-[399px]:max-w-full max-[399px]:text-[13px] max-[399px]:leading-6">
            We create websites and web experiences that are fast, responsive,
            clear and designed around the people who use them.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="group/showcase relative mt-8 overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-[#F8FAFC] shadow-[0_18px_55px_rgba(16,24,40,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_28px_70px_rgba(16,24,40,0.09)] sm:mt-10 max-[399px]:mt-7 max-[399px]:rounded-[1.5rem]">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-700 group-hover/showcase:bg-[#F65011]/10"
          />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Browser preview */}
            <div className="p-4 sm:p-6 lg:p-7 max-[399px]:p-3">
              <div className="group/browser relative overflow-hidden rounded-[1.5rem] border border-[#E4E7EC] bg-white shadow-[0_15px_40px_rgba(16,24,40,0.06)] transition-all duration-500 ease-out group-hover/showcase:shadow-[0_20px_45px_rgba(16,24,40,0.09)] max-[399px]:rounded-[1.15rem]">
                {/* Browser bar */}
                <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F8FAFC] px-4 py-3 max-[399px]:px-3 max-[399px]:py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />

                  <div className="ml-2 flex h-7 min-w-0 flex-1 items-center rounded-md border border-[#E4E7EC] bg-white px-3 max-[399px]:h-6 max-[399px]:px-2">
                    <span className="truncate text-[10px] text-[#98A2B3]">
                      yourbusiness.com
                    </span>
                  </div>
                </div>

                {/* Browser content */}
                <div className="p-5 sm:p-7 max-[399px]:p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[-0.02em] text-[#101828] max-[399px]:text-[11px]">
                      YOUR BUSINESS
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="hidden text-[10px] text-[#98A2B3] sm:block">
                        Solutions
                      </span>

                      <span className="hidden text-[10px] text-[#98A2B3] sm:block">
                        About
                      </span>

                      <span className="rounded-lg bg-[#F65011] px-3 py-1.5 text-[10px] font-semibold text-white max-[399px]:px-2 max-[399px]:py-1">
                        Get Started
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-7 sm:grid-cols-[1fr_0.7fr] sm:items-center max-[399px]:mt-6 max-[399px]:gap-5">
                    <div className="min-w-0">
                      <div className="h-2 w-16 rounded-full bg-[#F65011]/20" />

                      <div className="mt-3 h-7 max-w-sm rounded-lg bg-[#101828] transition-transform duration-700 ease-out group-hover/browser:translate-x-1 max-[399px]:h-6" />

                      <div className="mt-2 h-7 max-w-xs rounded-lg bg-[#101828]/90 transition-transform duration-700 ease-out group-hover/browser:translate-x-2 max-[399px]:h-6" />

                      <p className="mt-4 max-w-sm text-[11px] leading-5 text-[#98A2B3] max-[399px]:mt-3 max-[399px]:text-[10px] max-[399px]:leading-5">
                        A digital experience built around your brand, customers
                        and business goals.
                      </p>

                      <div className="mt-4 flex gap-2 max-[399px]:mt-3">
                        <span className="rounded-lg bg-[#F65011] px-3 py-2 text-[10px] font-semibold text-white transition-transform duration-500 group-hover/browser:-translate-y-0.5 max-[399px]:px-2.5 max-[399px]:py-1.5">
                          Explore
                        </span>

                        <span className="rounded-lg border border-[#E4E7EC] px-3 py-2 text-[10px] font-semibold text-[#344054] max-[399px]:px-2.5 max-[399px]:py-1.5">
                          Learn More
                        </span>
                      </div>
                    </div>

                    {/* Floating visual */}
                    <div className="relative mx-auto w-full max-w-[190px] max-[399px]:max-w-[150px]">
                      {/* Floating card 1 */}
                      <div className="absolute -right-3 -top-4 z-20 rounded-xl border border-[#E4E7EC] bg-white px-3 py-2 shadow-[0_10px_25px_rgba(16,24,40,0.09)] transition-all duration-700 ease-out group-hover/browser:-translate-y-2 group-hover/browser:translate-x-1 max-[399px]:-right-2 max-[399px]:-top-3 max-[399px]:px-2 max-[399px]:py-1.5">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#F65011]" />
                          <span className="text-[9px] font-semibold text-[#344054]">
                            Fast
                          </span>
                        </div>
                      </div>

                      {/* Main visual */}
                      <div className="aspect-[4/3] rounded-2xl bg-[#101828] p-3 shadow-[0_18px_35px_rgba(16,24,40,0.13)] transition-transform duration-700 ease-out group-hover/browser:-translate-y-1 group-hover/browser:rotate-1 max-[399px]:rounded-xl max-[399px]:p-2">
                        <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-3 max-[399px]:rounded-lg max-[399px]:p-2">
                          <div className="h-2 w-12 rounded-full bg-[#F65011]" />

                          <div className="mt-4 space-y-2 max-[399px]:mt-3">
                            <span className="block h-2 w-full rounded-full bg-white/10" />
                            <span className="block h-2 w-4/5 rounded-full bg-white/10" />
                            <span className="block h-2 w-3/5 rounded-full bg-white/10" />
                          </div>

                          <div className="mt-5 grid grid-cols-2 gap-2 max-[399px]:mt-4">
                            <span className="h-11 rounded-lg bg-white/[0.05] max-[399px]:h-8" />
                            <span className="h-11 rounded-lg bg-[#F65011]/15 max-[399px]:h-8" />
                          </div>

                          <div className="mt-3 h-7 rounded-lg bg-white/[0.05] max-[399px]:h-5" />
                        </div>
                      </div>

                      {/* Floating card 2 */}
                      <div className="absolute -bottom-3 -left-4 z-20 rounded-xl border border-[#E4E7EC] bg-white px-3 py-2 shadow-[0_10px_25px_rgba(16,24,40,0.09)] transition-all duration-700 ease-out group-hover/browser:translate-y-1 group-hover/browser:-translate-x-1 max-[399px]:-bottom-2 max-[399px]:-left-3 max-[399px]:px-2 max-[399px]:py-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold text-[#F65011]">
                            SEO
                          </span>

                          <span className="text-[9px] text-[#98A2B3]">
                            Ready
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-7 grid grid-cols-3 gap-2 max-[399px]:mt-5">
                    <span className="h-1 rounded-full bg-[#F65011] transition-all duration-700 group-hover/browser:shadow-[0_0_12px_rgba(246,80,17,0.4)]" />
                    <span className="h-1 rounded-full bg-[#E4E7EC]" />
                    <span className="h-1 rounded-full bg-[#E4E7EC]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dark capability panel */}
            <div className="relative border-t border-white/10 bg-[#101828] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9 max-[399px]:p-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#F65011]/10 blur-3xl"
              />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                  Designed to perform
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl max-[399px]:text-xl">
                  More than a website.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#98A2B3] max-[399px]:text-[13px] max-[399px]:leading-6">
                  Every web project should support a business objective —
                  building trust, generating enquiries, serving customers or
                  creating a stronger digital product.
                </p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 max-[399px]:mt-5">
                  {highlights.map((item, index) => (
                    <li
                      key={item}
                      className="group/item flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-all duration-500 hover:border-[#F65011]/30 hover:bg-white/[0.05] max-[399px]:px-3 max-[399px]:py-2"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65011]/10 text-[9px] font-bold text-[#F65011] transition-all duration-500 group-hover/item:bg-[#F65011] group-hover/item:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-medium text-[#D0D5DD] max-[399px]:text-[11px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-[#667085]">Experience</span>

                    <span className="text-sm font-semibold text-white max-[399px]:text-xs">
                      Brand
                      <span className="mx-2 text-[#F65011]">+</span>
                      User
                      <span className="mx-2 text-[#F65011]">+</span>
                      Business
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        {/* Capabilities */}
        <div className="mt-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                Web capabilities
              </p>

              <p className="mt-1 text-sm text-[#667085]">
                From your first impression to your most important interaction.
              </p>
            </div>

            <span className="hidden text-xs font-medium text-[#98A2B3] sm:block">
              Websites · Applications · E-commerce · Portals
            </span>
          </div>

          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isDarkMobileCard = index % 2 === 1;

              return (
                <li
                  key={capability.title}
                  className={[
                    "group rounded-2xl border p-4.5 transition-all duration-500 ease-out",
                    "border-[#E4E7EC] bg-[#F8FAFC] text-[#101828]",
                    "hover:-translate-y-1 hover:border-[#F65011]/25 hover:bg-white hover:shadow-[0_15px_32px_rgba(16,24,40,0.07)]",

                    // Mobile only: alternating dark/light cards
                    isDarkMobileCard
                      ? "max-sm:border-white/10 max-sm:bg-[#101828] max-sm:text-white"
                      : "max-sm:border-[#E4E7EC] max-sm:bg-[#F8FAFC] max-sm:text-[#101828]",
                  ].join(" ")}
                >
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Service Icon */}
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_22px_rgba(246,80,17,0.22)]"
                    >
                      <Icon size={21} strokeWidth={1.9} />
                    </span>

                    {/* Arrow */}
                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[#98A2B3] transition-all duration-500",
                        "group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white",

                        isDarkMobileCard
                          ? "max-sm:border-white/10 max-sm:bg-white/[0.03] max-sm:text-[#98A2B3]"
                          : "max-sm:border-[#E4E7EC] max-sm:bg-white max-sm:text-[#667085]",
                      ].join(" ")}
                    >
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    className={[
                      "mt-5 text-base font-bold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 sm:text-lg",

                      // Desktop always dark
                      "text-[#101828]",

                      // Mobile only
                      isDarkMobileCard
                        ? "max-sm:text-white"
                        : "max-sm:text-[#101828]",
                    ].join(" ")}
                  >
                    {capability.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={[
                      "mt-1.5 text-xs leading-5 sm:text-sm sm:leading-6",

                      // Desktop always light-card text
                      "text-[#667085]",

                      // Mobile only
                      isDarkMobileCard
                        ? "max-sm:text-[#98A2B3]"
                        : "max-sm:text-[#667085]",
                    ].join(" ")}
                  >
                    {capability.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className={[
                      "mt-4 h-px overflow-hidden",

                      // Desktop
                      "bg-[#E4E7EC]",

                      // Mobile only
                      isDarkMobileCard
                        ? "max-sm:bg-white/10"
                        : "max-sm:bg-[#E4E7EC]",
                    ].join(" ")}
                  >
                    <div className="h-full w-0 bg-[#F65011] transition-all duration-700 ease-out group-hover:w-full" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
