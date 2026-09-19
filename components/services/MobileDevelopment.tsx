import {
  Apple,
  ArrowUpRight,
  Layers3,
  Link2,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export default function MobileDevelopment() {
  const capabilities: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Android Applications",
      description:
        "Mobile experiences designed to help customers, teams and users access the right functionality wherever they are.",
      icon: Smartphone,
    },
    {
      title: "iOS Applications",
      description:
        "Polished mobile products focused on usability, performance and a consistent experience across devices.",
      icon: Apple,
    },
    {
      title: "Cross-platform Products",
      description:
        "Efficient mobile solutions that can support multiple device ecosystems while keeping the experience consistent.",
      icon: Layers3,
    },
    {
      title: "Connected Mobile Experiences",
      description:
        "Mobile applications connected to business systems, services and workflows to keep experiences useful and up to date.",
      icon: Link2,
    },
  ];

  const highlights = [
    "Customer and business applications",
    "Secure user experiences",
    "Connected workflows",
    "Notifications and engagement",
    "Scalable foundations",
    "AI-enhanced features where useful",
  ];

  return (
    <section
      id="mobile-development"
      className="scroll-mt-24 border-t border-[#E4E7EC] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F65011] px-2 text-[11px] font-bold text-white">
                03
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Mobile Development
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl max-[399px]:text-[2rem] max-[399px]:leading-[1.1]">
              Products that move with your{" "}
              <span className="text-[#F65011]">customers.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:pb-1 max-[399px]:max-w-full max-[399px]:text-[13px] max-[399px]:leading-6">
            We create mobile experiences that make services, workflows and
            products easier to access — wherever people are.
          </p>
        </div>

        {/* Main showcase */}
        <div className="group/showcase relative mt-8 overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-white shadow-[0_18px_55px_rgba(16,24,40,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_28px_70px_rgba(16,24,40,0.09)] sm:mt-10 max-[399px]:mt-7 max-[399px]:rounded-[1.5rem]">
          {/* Soft glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-700 group-hover/showcase:bg-[#F65011]/10"
          />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Phones */}
            <div className="relative min-h-[420px] overflow-hidden bg-[#101828] px-6 py-10 sm:min-h-[480px] sm:px-10 sm:py-12 lg:min-h-[520px] lg:px-12 max-[399px]:min-h-[390px] max-[399px]:px-4 max-[399px]:py-8">
              {/* Decorative line */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-1/2 h-px w-full bg-white/5"
              />

              {/* Orange glow */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F65011]/10 blur-3xl max-[399px]:h-36 max-[399px]:w-36"
              />

              <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
                {/* Back phone */}
                <div className="absolute left-[12%] top-1/2 w-[160px] -translate-y-1/2 -rotate-[8deg] transition-transform duration-700 ease-out group-hover/showcase:-translate-x-3 group-hover/showcase:-rotate-[11deg] sm:w-[190px] lg:left-[14%] max-[399px]:left-[8%] max-[399px]:w-[120px]">
                  <div className="rounded-[2rem] border border-white/10 bg-[#182233] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.3)] max-[399px]:rounded-[1.5rem] max-[399px]:p-1.5">
                    <div className="overflow-hidden rounded-[1.6rem] bg-[#F8FAFC] max-[399px]:rounded-[1.2rem]">
                      <div className="flex items-center justify-between bg-white px-3 py-2 max-[399px]:px-2 max-[399px]:py-1.5">
                        <span className="text-[8px] font-bold text-[#101828]">
                          9:41
                        </span>

                        <span className="h-1.5 w-10 rounded-full bg-[#101828] max-[399px]:w-7" />
                      </div>

                      <div className="p-4 max-[399px]:p-2.5">
                        <div className="h-2 w-14 rounded-full bg-[#F65011]/20 max-[399px]:w-10" />

                        <div className="mt-4 h-16 rounded-2xl bg-[#101828] max-[399px]:mt-3 max-[399px]:h-12 max-[399px]:rounded-xl" />

                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <span className="h-14 rounded-xl bg-[#E4E7EC] max-[399px]:h-10" />
                          <span className="h-14 rounded-xl bg-[#F65011]/10 max-[399px]:h-10" />
                        </div>

                        <div className="mt-3 space-y-2">
                          <span className="block h-2 w-full rounded-full bg-[#E4E7EC]" />
                          <span className="block h-2 w-4/5 rounded-full bg-[#E4E7EC]" />
                        </div>
                      </div>

                      <div className="border-t border-[#E4E7EC] bg-white px-3 py-3 max-[399px]:px-2 max-[399px]:py-2">
                        <div className="grid grid-cols-4 gap-2">
                          <span className="mx-auto h-4 w-4 rounded-md bg-[#F65011] max-[399px]:h-3 max-[399px]:w-3" />
                          <span className="mx-auto h-4 w-4 rounded-md bg-[#E4E7EC] max-[399px]:h-3 max-[399px]:w-3" />
                          <span className="mx-auto h-4 w-4 rounded-md bg-[#E4E7EC] max-[399px]:h-3 max-[399px]:w-3" />
                          <span className="mx-auto h-4 w-4 rounded-md bg-[#E4E7EC] max-[399px]:h-3 max-[399px]:w-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Front phone */}
                <div className="relative z-10 w-[180px] transition-transform duration-700 ease-out group-hover/showcase:translate-y-[-6px] group-hover/showcase:rotate-[1deg] sm:w-[215px] lg:w-[230px] max-[399px]:w-[150px]">
                  <div className="rounded-[2.4rem] border border-white/10 bg-[#111A2A] p-2 shadow-[0_30px_65px_rgba(0,0,0,0.35)] max-[399px]:rounded-[1.8rem] max-[399px]:p-1.5">
                    <div className="overflow-hidden rounded-[2rem] bg-white max-[399px]:rounded-[1.5rem]">
                      {/* Notch */}
                      <div className="relative bg-[#F8FAFC] px-4 pb-3 pt-4 max-[399px]:px-3 max-[399px]:pb-2 max-[399px]:pt-3">
                        <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-[#101828] max-[399px]:h-3 max-[399px]:w-14" />

                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-bold text-[#101828]">
                            9:41
                          </span>

                          <span className="h-1.5 w-8 rounded-full bg-[#101828] max-[399px]:w-6" />
                        </div>
                      </div>

                      {/* App content */}
                      <div className="px-4 pb-4 max-[399px]:px-3 max-[399px]:pb-3">
                        <div className="mt-4 flex items-center justify-between max-[399px]:mt-3">
                          <div>
                            <div className="h-2 w-12 rounded-full bg-[#F65011]/20 max-[399px]:w-10" />

                            <div className="mt-2 h-3 w-24 rounded-full bg-[#101828] max-[399px]:w-20" />
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8FAFC] max-[399px]:h-6 max-[399px]:w-6">
                            <span className="h-2 w-2 rounded-full bg-[#F65011]" />
                          </div>
                        </div>

                        <div className="mt-5 rounded-2xl bg-[#101828] p-4 max-[399px]:mt-4 max-[399px]:rounded-xl max-[399px]:p-3">
                          <p className="text-[8px] font-medium text-[#98A2B3]">
                            Your progress
                          </p>

                          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                            <div className="h-full w-3/4 rounded-full bg-[#F65011]" />
                          </div>

                          <p className="mt-3 text-[9px] font-semibold text-white">
                            75% complete
                          </p>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="rounded-xl border border-[#E4E7EC] p-3 max-[399px]:rounded-lg max-[399px]:p-2">
                            <span className="block h-2 w-8 rounded-full bg-[#F65011]/20" />
                            <span className="mt-2 block h-2 w-12 rounded-full bg-[#E4E7EC]" />
                            <span className="mt-1 block h-2 w-10 rounded-full bg-[#E4E7EC]" />
                          </div>

                          <div className="rounded-xl bg-[#F65011]/10 p-3 max-[399px]:rounded-lg max-[399px]:p-2">
                            <span className="block h-2 w-8 rounded-full bg-[#F65011]" />
                            <span className="mt-2 block h-2 w-12 rounded-full bg-[#F65011]/20" />
                            <span className="mt-1 block h-2 w-10 rounded-full bg-[#F65011]/20" />
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between rounded-xl border border-[#E4E7EC] px-3 py-2.5 max-[399px]:mt-3 max-[399px]:rounded-lg max-[399px]:px-2 max-[399px]:py-2">
                          <span className="text-[9px] font-medium text-[#344054]">
                            Latest activity
                          </span>

                          <span className="text-[9px] font-semibold text-[#F65011]">
                            View →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating AI badge */}
                  <div className="absolute -right-10 top-1/3 rounded-xl border border-white/10 bg-[#1A2537] px-3 py-2 shadow-[0_12px_25px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover/showcase:translate-x-2 max-[399px]:-right-7 max-[399px]:px-2 max-[399px]:py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F65011] text-[8px] font-bold text-white max-[399px]:h-4 max-[399px]:w-4">
                        AI
                      </span>

                      <span className="text-[9px] font-medium text-[#D0D5DD] max-[399px]:text-[8px]">
                        Smarter
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-6 flex items-center gap-2 sm:left-10 lg:left-12 max-[399px]:bottom-3 max-[399px]:left-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#98A2B3] max-[399px]:text-[8px]">
                  Mobile experiences
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 max-[399px]:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                  Built for engagement
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-[#101828] sm:text-3xl max-[399px]:text-xl">
                  More than an app.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 max-[399px]:text-[13px] max-[399px]:leading-6">
                  A strong mobile product should make something easier —
                  accessing a service, completing a task, staying connected or
                  creating a better customer experience.
                </p>
              </div>

              {/* Highlights */}
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 max-[399px]:mt-5">
                {highlights.map((item, index) => (
                  <li
                    key={item}
                    className="group/item flex items-center gap-3 rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] px-3.5 py-2.5 transition-all duration-500 hover:border-[#F65011]/25 hover:bg-white max-[399px]:px-3 max-[399px]:py-2"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65011]/10 text-[9px] font-bold text-[#F65011] transition-all duration-500 group-hover/item:bg-[#F65011] group-hover/item:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-medium text-[#344054] sm:text-sm max-[399px]:text-[11px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Journey */}
              <div className="mt-7 rounded-2xl bg-[#101828] p-5 max-[399px]:mt-5 max-[399px]:rounded-xl max-[399px]:p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#98A2B3]">
                  Connected journey
                </p>

                <div className="mt-4 flex items-center justify-between gap-2 max-[399px]:mt-3 max-[399px]:gap-1">
                  {["Discover", "Build", "Connect", "Grow"].map(
                    (item, index, items) => (
                      <div
                        key={item}
                        className="flex min-w-0 flex-1 items-center gap-2 max-[399px]:gap-1"
                      >
                        <div className="min-w-0">
                          <span className="block text-[10px] font-semibold text-white max-[399px]:text-[8px]">
                            {item}
                          </span>

                          <span className="mt-1 block h-1 w-8 rounded-full bg-[#F65011] max-[399px]:w-5" />
                        </div>

                        {index < items.length - 1 && (
                          <span
                            aria-hidden="true"
                            className="text-xs text-[#667085] max-[399px]:text-[9px]"
                          >
                            →
                          </span>
                        )}
                      </div>
                    ),
                  )}
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
                Mobile capabilities
              </p>

              <p className="mt-1 text-sm text-[#667085]">
                Experiences designed for people on the move.
              </p>
            </div>

            <span className="hidden text-xs font-medium text-[#98A2B3] sm:block">
              Android · iOS · Cross-platform · Connected experiences
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
                    "group rounded-2xl border p-5 transition-all duration-500 ease-out",

                    // Desktop / tablet: ALL cards stay light
                    "border-[#E4E7EC] bg-white text-[#101828]",

                    // Keep existing hover behavior
                    "hover:-translate-y-1 hover:border-[#F65011]/25 hover:bg-white hover:shadow-[0_15px_32px_rgba(16,24,40,0.07)]",

                    // Mobile only: alternating light / dark
                    isDarkMobileCard
                      ? "max-sm:border-white/10 max-sm:bg-[#101828] max-sm:text-white"
                      : "max-sm:border-[#E4E7EC] max-sm:bg-white max-sm:text-[#101828]",
                  ].join(" ")}
                >
                  {/* Top Row */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Mobile Service Icon */}
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_22px_rgba(246,80,17,0.22)]"
                    >
                      <Icon size={21} strokeWidth={1.9} />
                    </span>

                    {/* Arrow */}
                    <span
                      className={[
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                        "group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white",

                        isDarkMobileCard
                          ? "border-[#E4E7EC] bg-white/[0.03] text-[#98A2B3] max-sm:border-white/10"
                          : "border-[#E4E7EC] bg-white text-[#98A2B3]",
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
                      "mt-5 text-lg font-bold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1",

                      // Desktop / tablet: dark text
                      "text-[#101828]",

                      // Mobile dark cards: white text
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
                      "mt-2 text-sm leading-6",

                      // Desktop / tablet
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
                      "mt-5 h-px overflow-hidden",

                      // Desktop / tablet
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
