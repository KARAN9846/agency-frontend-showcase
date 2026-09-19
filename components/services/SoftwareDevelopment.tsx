import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Code2,
  Database,
  GitBranch,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export default function SoftwareDevelopment() {
  const capabilities: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Custom Business Software",
      description:
        "Purpose-built software designed around the way your business actually works, rather than forcing your processes into a generic system.",
      icon: Code2,
    },
    {
      title: "Enterprise Applications",
      description:
        "Connected digital systems that help teams manage information, operations and complex business workflows more effectively.",
      icon: Building2,
    },
    {
      title: "CRM & ERP Solutions",
      description:
        "Centralised platforms that bring customers, operations, information and business processes together in one connected environment.",
      icon: Database,
    },
    {
      title: "Business Automation",
      description:
        "Reduce repetitive work and improve efficiency with intelligent workflows, integrations and automation designed around your processes.",
      icon: Workflow,
    },
    {
      title: "AI-Enabled Solutions",
      description:
        "Integrate practical AI capabilities where they can improve decision-making, automation, customer experiences or operational efficiency.",
      icon: BrainCircuit,
    },
    {
      title: "System Integration",
      description:
        "Connect important business systems and digital tools so information can move smoothly across your organisation.",
      icon: GitBranch,
    },
  ];

  const highlights = [
    "Business-focused workflows",
    "Centralised information",
    "Automation where useful",
    "Connected systems",
    "Scalable architecture",
    "AI-enabled capabilities",
  ];

  return (
    <section
      id="software-development"
      className="scroll-mt-24 border-t border-[#E4E7EC] bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F65011] px-2 text-[11px] font-bold text-white">
                01
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Software Development
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl">
              Digital systems built around{" "}
              <span className="text-[#F65011]">
                the way your business works.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 lg:pb-1">
            We build practical software that connects operations, information,
            teams and customers into systems that are easier to manage and ready
            to grow.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="group/showcase relative mt-8 overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-[#F8FAFC] shadow-[0_18px_55px_rgba(16,24,40,0.06)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_28px_70px_rgba(16,24,40,0.09)] sm:mt-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-700 group-hover/showcase:bg-[#F65011]/10"
          />

          <div className="relative grid min-w-0 lg:grid-cols-[1.15fr_0.85fr]">
            {" "}
            {/* Software application visualization */}
            <div className="min-w-0 p-4 sm:p-6 lg:p-7">
              {" "}
              <div className="group/software relative min-w-0 overflow-hidden rounded-[1.5rem] border border-[#D0D5DD] bg-white shadow-[0_15px_40px_rgba(16,24,40,0.06)] transition-all duration-500 group-hover/showcase:shadow-[0_20px_45px_rgba(16,24,40,0.09)]">
                {/* Application bar */}
                <div className="flex items-center gap-2 border-b border-[#E4E7EC] bg-[#F8FAFC] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D0D5DD]" />

                  <div className="ml-2 flex h-7 min-w-0 flex-1 items-center rounded-md border border-[#E4E7EC] bg-white px-3">
                    <span className="truncate text-[10px] text-[#98A2B3]">
                      business.workspace
                    </span>
                  </div>

                  <span className="hidden rounded-full bg-[#F65011]/10 px-2.5 py-1 text-[9px] font-semibold text-[#F65011] sm:block">
                    Demo
                  </span>
                </div>

                <div className="grid min-h-[330px] sm:min-h-[360px] sm:grid-cols-[125px_1fr]">
                  {/* Sidebar */}
                  <aside className="hidden border-r border-[#E4E7EC] bg-[#F8FAFC] p-4 sm:block">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#101828] text-[10px] font-bold text-white">
                        N
                      </span>
                      <span className="text-[10px] font-bold text-[#101828]">
                        WORKSPACE
                      </span>
                    </div>

                    <div className="mt-7 space-y-2">
                      <span className="flex h-8 items-center rounded-lg bg-[#F65011]/10 px-2.5 text-[9px] font-semibold text-[#F65011]">
                        Overview
                      </span>
                      <span className="flex h-8 items-center px-2.5 text-[9px] text-[#98A2B3]">
                        Customers
                      </span>
                      <span className="flex h-8 items-center px-2.5 text-[9px] text-[#98A2B3]">
                        Operations
                      </span>
                      <span className="flex h-8 items-center px-2.5 text-[9px] text-[#98A2B3]">
                        Reports
                      </span>
                    </div>

                    <div className="mt-8 border-t border-[#E4E7EC] pt-4">
                      <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                        System
                      </span>
                      <span className="mt-3 flex h-8 items-center px-2.5 text-[9px] text-[#98A2B3]">
                        Settings
                      </span>
                    </div>
                  </aside>

                  {/* Dashboard */}
                  <div className="relative overflow-hidden p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                          Business overview
                        </span>
                        <h4 className="mt-1 text-sm font-bold tracking-[-0.02em] text-[#101828] sm:text-base">
                          Operations dashboard
                        </h4>
                      </div>
                      <span className="rounded-lg border border-[#E4E7EC] bg-white px-2.5 py-1.5 text-[9px] font-semibold text-[#667085]">
                        Sample data
                      </span>
                    </div>

                    {/* KPI cards */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {[
                        ["Customers", "1,248", "+12%"],
                        ["Processes", "86", "Active"],
                        ["Efficiency", "94%", "+8%"],
                      ].map(([label, value, change], index) => (
                        <div
                          key={label}
                          className={`${index === 2 ? "hidden sm:block" : ""} rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] p-3 transition-transform duration-700 ease-out group-hover/software:-translate-y-1`}
                        >
                          <span className="text-[8px] text-[#98A2B3]">
                            {label}
                          </span>
                          <div className="mt-1 flex items-end justify-between gap-2">
                            <strong className="text-sm font-bold text-[#101828]">
                              {value}
                            </strong>
                            <span className="text-[8px] font-semibold text-[#F65011]">
                              {change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Workflow + automation */}
                    <div className="mt-3 grid gap-3 sm:grid-cols-[1.35fr_0.65fr]">
                      <div className="rounded-xl border border-[#E4E7EC] bg-white p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#98A2B3]">
                            Workflow performance
                          </span>
                          <span className="text-[8px] font-semibold text-[#F65011]">
                            +24.8%
                          </span>
                        </div>

                        <div className="relative mt-4 h-[115px] overflow-hidden rounded-lg bg-[#F8FAFC]">
                          <div className="absolute inset-x-0 top-1/4 h-px bg-[#E4E7EC]" />
                          <div className="absolute inset-x-0 top-1/2 h-px bg-[#E4E7EC]" />
                          <div className="absolute inset-x-0 top-3/4 h-px bg-[#E4E7EC]" />

                          <svg
                            viewBox="0 0 420 120"
                            className="absolute inset-0 h-full w-full"
                            aria-hidden="true"
                          >
                            <path
                              d="M10 96 C70 92,78 78,125 82 S190 62,225 66 S285 44,315 48 S365 22,410 26"
                              fill="none"
                              stroke="#F65011"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />
                            <circle cx="125" cy="82" r="4" fill="#F65011" />
                            <circle cx="225" cy="66" r="4" fill="#F65011" />
                            <circle cx="315" cy="48" r="4" fill="#F65011" />
                            <circle cx="410" cy="26" r="5" fill="#F65011" />
                          </svg>
                        </div>
                      </div>

                      <div className="rounded-xl bg-[#101828] p-3">
                        <span className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#98A2B3]">
                          Automation
                        </span>

                        <div className="mt-4 space-y-2.5">
                          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F65011]/15 text-[9px] font-bold text-[#F65011]">
                              01
                            </span>
                            <span className="text-[8px] font-medium text-[#D0D5DD]">
                              New enquiry
                            </span>
                          </div>

                          <div className="ml-3 h-3 border-l border-dashed border-[#F65011]/40" />

                          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#F65011]/15 text-[9px] font-bold text-[#F65011]">
                              02
                            </span>
                            <span className="text-[8px] font-medium text-[#D0D5DD]">
                              Workflow runs
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating status */}
                    <div className="absolute right-4 top-16 z-20 rounded-xl border border-[#E4E7EC] bg-white px-3 py-2 shadow-[0_10px_25px_rgba(16,24,40,0.09)] transition-all duration-700 ease-out group-hover/software:-translate-y-1 group-hover/software:translate-x-1 sm:right-6">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#F65011]" />
                        <span className="text-[9px] font-semibold text-[#344054]">
                          System running
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom indicator */}
                <div className="border-t border-[#E4E7EC] bg-[#F8FAFC] px-4 py-3 sm:px-5">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="h-1 rounded-full bg-[#F65011] transition-all duration-700 group-hover/software:shadow-[0_0_12px_rgba(246,80,17,0.4)]" />
                    <span className="h-1 rounded-full bg-[#E4E7EC]" />
                    <span className="h-1 rounded-full bg-[#E4E7EC]" />
                  </div>
                </div>
              </div>
            </div>
            {/* Dark capability panel */}
            {/* Dark capability panel */}
            <div className="relative min-w-0 border-t border-white/10 bg-[#101828] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#F65011]/10 blur-3xl"
              />

              <div className="relative min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                  Built to work
                </p>

                <h3 className="mt-3 max-w-full break-words text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                  More than an application.
                </h3>

                <p className="mt-3 max-w-full break-words text-sm leading-6 text-[#98A2B3]">
                  Good software should make work clearer, faster and more
                  connected — helping your teams spend less time managing
                  systems and more time moving the business forward.
                </p>

                <ul className="mt-6 grid min-w-0 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {highlights.map((item, index) => (
                    <li
                      key={item}
                      className="group/item flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 transition-all duration-500 hover:border-[#F65011]/30 hover:bg-white/[0.05]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65011]/10 text-[9px] font-bold text-[#F65011] transition-all duration-500 group-hover/item:bg-[#F65011] group-hover/item:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 break-words text-xs font-medium text-[#D0D5DD]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Foundation */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-xs text-[#667085]">Foundation</span>

                    <span className="flex flex-wrap items-center text-sm font-semibold text-white">
                      <span>Process</span>

                      <span className="mx-2 text-[#F65011]">+</span>

                      <span>Technology</span>

                      <span className="mx-2 text-[#F65011]">+</span>

                      <span>Growth</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                Software capabilities
              </p>
              <p className="mt-1 text-sm text-[#667085]">
                Built around real business needs.
              </p>
            </div>

            <span className="hidden text-xs font-medium text-[#98A2B3] sm:block">
              Business Software · Enterprise Apps · CRM · ERP · Automation ·
              Integration
            </span>
          </div>

          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              const isLightCard = index % 2 === 0;

              return (
                <li
                  key={capability.title}
                  className={`group rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/25 hover:shadow-[0_15px_32px_rgba(16,24,40,0.07)] ${
                    isLightCard
                      ? "max-sm:border-[#E4E7EC] max-sm:bg-white"
                      : "max-sm:border-white/10 max-sm:bg-[#101828]"
                  }`}
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
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white ${
                        isLightCard
                          ? "border-[#E4E7EC] text-[#98A2B3]"
                          : "border-white/10 text-[#98A2B3] max-sm:border-white/10 max-sm:text-[#D0D5DD]"
                      }`}
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
                    className={`mt-5 text-base font-bold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 sm:text-lg ${
                      isLightCard
                        ? "text-[#101828]"
                        : "text-[#101828] max-sm:text-white"
                    }`}
                  >
                    {capability.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`mt-1.5 text-xs leading-5 sm:text-sm sm:leading-6 ${
                      isLightCard
                        ? "text-[#667085]"
                        : "text-[#667085] max-sm:text-[#98A2B3]"
                    }`}
                  >
                    {capability.description}
                  </p>

                  {/* Bottom Accent */}
                  <div
                    className={`mt-4 h-px overflow-hidden ${
                      isLightCard
                        ? "bg-[#E4E7EC]"
                        : "bg-[#E4E7EC] max-sm:bg-white/10"
                    }`}
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
