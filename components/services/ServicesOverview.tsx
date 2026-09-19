import {
  ArrowUpRight,
  Code2,
  Globe2,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export default function ServicesOverview() {
  const services: {
    number: string;
    title: string;
    description: string;
    points: string[];
    href: string;
    icon: LucideIcon;
  }[] = [
    {
      number: "01",
      title: "Software Development",
      description:
        "Custom digital systems that streamline operations, manage information and solve complex workflows.",
      points: [
        "Custom Software",
        "Enterprise Applications",
        "CRM & ERP",
        "Business Automation",
      ],
      href: "#software-development",
      icon: Code2,
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "High-quality digital experiences built to represent your business, serve customers and support growth.",
      points: [
        "Corporate Websites",
        "Web Applications",
        "E-commerce",
        "Portals",
      ],
      href: "#web-development",
      icon: Globe2,
    },
    {
      number: "03",
      title: "Mobile Development",
      description:
        "Mobile products that bring your services, workflows and customer experiences closer to your users.",
      points: ["Android", "iOS", "Cross-platform", "Connected Experiences"],
      href: "#mobile-development",
      icon: Smartphone,
    },
    {
      number: "04",
      title: "Digital Marketing",
      description:
        "Data-informed digital growth strategies that help businesses reach the right audience and create opportunity.",
      points: [
        "SEO",
        "Social Media",
        "Performance Marketing",
        "Content & Analytics",
      ],
      href: "#digital-marketing",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="services" className="border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                What We Do
              </p>
            </div>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
              Technology built around your business.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:pb-1">
            From software and digital experiences to mobile products and growth,
            our capabilities can work independently or together around one
            business goal.
          </p>
        </div>

        {/* Services Grid */}
        <ol className="mt-9 grid gap-4 sm:mt-10 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDarkMobileCard = index % 2 === 0;

            return (
              <li key={service.number}>
                <a
                  href={service.href}
                  className={[
                    "group relative block min-h-full overflow-hidden rounded-[1.75rem] border outline-none",
                    "transition-all duration-500 ease-out",
                    "focus-visible:ring-2 focus-visible:ring-[#F65011]/40 focus-visible:ring-offset-2",

                    /* Desktop / tablet — ORIGINAL DESIGN */
                    "border-[#E4E7EC] bg-[#F8FAFC] text-[#101828]",

                    "hover:-translate-y-1 hover:border-[#101828] hover:bg-[#101828] hover:text-white hover:shadow-[0_20px_45px_rgba(16,24,40,0.16)]",

                    "active:-translate-y-1 active:border-[#101828] active:bg-[#101828] active:text-white active:shadow-[0_20px_45px_rgba(16,24,40,0.16)]",

                    /* Mobile-only alternating cards */
                    isDarkMobileCard
                      ? "max-sm:border-white/10 max-sm:bg-[#101828] max-sm:text-white"
                      : "max-sm:border-[#E4E7EC] max-sm:bg-white max-sm:text-[#101828]",
                  ].join(" ")}
                >
                  {/* Decorative glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-700 group-hover:bg-[#F65011]/10 group-active:bg-[#F65011]/10"
                  />

                  <div className="relative p-5 sm:p-7 lg:p-8">
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-4">
                      {/* Service Icon */}
                      <span
                        aria-hidden="true"
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_10px_24px_rgba(246,80,17,0.18)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_12px_30px_rgba(246,80,17,0.28)] group-active:scale-105"
                      >
                        <Icon size={25} strokeWidth={2} />
                      </span>

                      {/* Arrow */}
                      <span
                        className={[
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-white text-[#667085] transition-all duration-500",
                          "group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white",
                          "group-active:border-[#F65011] group-active:bg-[#F65011] group-active:text-white",

                          isDarkMobileCard
                            ? "max-sm:border-white/10 max-sm:bg-white/5 max-sm:text-[#98A2B3]"
                            : "max-sm:border-[#D0D5DD] max-sm:bg-[#F8FAFC] max-sm:text-[#667085]",
                        ].join(" ")}
                      >
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.9}
                          className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:translate-x-0.5 group-active:-translate-y-0.5"
                        />
                      </span>
                    </div>

                    {/* Heading */}
                    <div className="mt-7 max-w-2xl">
                      <h3
                        className={[
                          "text-2xl font-bold tracking-[-0.035em] text-[#101828] transition-all duration-500",
                          "group-hover:translate-x-1 group-hover:text-white group-active:text-white sm:text-[1.75rem]",

                          isDarkMobileCard
                            ? "max-sm:text-white"
                            : "max-sm:text-[#101828]",
                        ].join(" ")}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={[
                          "mt-2 max-w-xl text-sm leading-6 transition-colors duration-500 sm:text-[15px] sm:leading-7",

                          isDarkMobileCard
                            ? "max-sm:text-[#98A2B3]"
                            : "max-sm:text-[#667085]",

                          "group-hover:text-[#98A2B3] group-active:text-[#98A2B3]",
                        ].join(" ")}
                      >
                        {service.description}
                      </p>
                    </div>

                    {/* Capabilities */}
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className={[
                            "rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all duration-500",

                            /* Original desktop/tablet */
                            "border-[#E4E7EC] bg-white text-[#667085]",

                            "group-hover:border-[#F65011]/30 group-hover:bg-white/[0.04] group-hover:text-white",
                            "group-active:border-[#F65011]/30 group-active:bg-white/[0.04] group-active:text-white",

                            /* Mobile */
                            isDarkMobileCard
                              ? "max-sm:border-white/10 max-sm:bg-white/[0.05] max-sm:text-[#D0D5DD]"
                              : "max-sm:border-[#E4E7EC] max-sm:bg-[#F8FAFC] max-sm:text-[#667085]",
                          ].join(" ")}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom */}
                    <div
                      className={[
                        "mt-7 flex items-center justify-between border-t pt-4 transition-colors duration-500",

                        "border-[#E4E7EC] group-hover:border-white/10 group-active:border-white/10",

                        isDarkMobileCard
                          ? "max-sm:border-white/10"
                          : "max-sm:border-[#E4E7EC]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500",

                          "text-[#98A2B3] group-hover:text-[#F65011] group-active:text-[#F65011]",

                          isDarkMobileCard
                            ? "max-sm:text-[#98A2B3]"
                            : "max-sm:text-[#98A2B3]",
                        ].join(" ")}
                      >
                        Explore service
                      </span>

                      <span
                        className={[
                          "h-1 w-10 overflow-hidden rounded-full transition-all duration-700",

                          "bg-[#E4E7EC] group-hover:w-16 group-hover:bg-white/10 group-active:w-16 group-active:bg-white/10",

                          isDarkMobileCard
                            ? "max-sm:bg-white/10"
                            : "max-sm:bg-[#E4E7EC]",
                        ].join(" ")}
                      >
                        <span className="block h-full w-full rounded-full bg-[#F65011]" />
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </ol>

        {/* Bottom message */}
        <div className="mt-7 flex flex-col gap-3 border-t border-[#E4E7EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs leading-5 text-[#98A2B3] sm:text-sm">
            Need more than one capability? We connect technology, automation,
            digital experiences and growth around the right business objective.
          </p>

          <p className="shrink-0 text-sm font-semibold text-[#101828]">
            Idea
            <span aria-hidden="true" className="mx-2 text-[#F65011]">
              →
            </span>
            Product
            <span aria-hidden="true" className="mx-2 text-[#F65011]">
              →
            </span>
            Growth
          </p>
        </div>
      </div>
    </section>
  );
}
