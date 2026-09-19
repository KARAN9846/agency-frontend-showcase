import {
  ArrowUpRight,
  BarChart3,
  FileText,
  MousePointerClick,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";

export default function DigitalMarketing() {
  const capabilities: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "SEO",
      description:
        "Improve organic visibility and help the right people discover your business.",
      icon: Search,
    },
    {
      title: "Social Media",
      description:
        "Build presence, engagement and meaningful conversations around your brand.",
      icon: Share2,
    },
    {
      title: "Performance Marketing",
      description:
        "Turn targeted reach into measurable traffic, enquiries and opportunities.",
      icon: MousePointerClick,
    },
    {
      title: "Content Marketing",
      description:
        "Create useful content that builds trust and supports the customer journey.",
      icon: FileText,
    },
    {
      title: "Analytics",
      description:
        "Use data and insights to understand what works and where growth can improve.",
      icon: BarChart3,
    },
  ];

  const metrics = [
    { label: "Reach", value: "+42%", width: "70%" },
    { label: "Engagement", value: "+31%", width: "55%" },
    { label: "Enquiries", value: "+54%", width: "82%" },
    { label: "Conversions", value: "+38%", width: "66%" },
  ];

  const growthStages = ["Reach", "Engage", "Convert", "Grow"];

  return (
    <section
      id="digital-marketing"
      className="scroll-mt-24 relative overflow-hidden border-t border-[#E4E7EC] bg-[#F8FAFC] text-[#101828]"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#F65011]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-28 h-72 w-72 rounded-full bg-[#F65011]/5 blur-3xl"
      />

      <style>{`
        @keyframes growthFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes growthPulse {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .digital-growth-motion {
            animation: none !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#F65011] px-2 text-[11px] font-bold text-white">
                04
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Digital Marketing
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.045em] text-[#101828] sm:text-4xl lg:text-5xl max-[399px]:mt-3 max-[399px]:text-[2rem] max-[399px]:leading-[1.08] max-[399px]:tracking-[-0.04em]">
              Turn digital attention into{" "}
              <span className="text-[#F65011]">measurable growth.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 max-[399px]:max-w-full max-[399px]:text-[13px] max-[399px]:leading-6">
            We combine visibility, content, performance and analytics to help
            businesses reach the right audience and turn attention into action.
          </p>
        </div>

        {/* Main dashboard */}
        {/* Main dashboard */}
        <div className="group relative mt-8 overflow-hidden rounded-[1.75rem] border border-[#E4E7EC] bg-[#101828] shadow-[0_22px_60px_rgba(16,24,40,0.10)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_28px_70px_rgba(16,24,40,0.14)] sm:mt-10 max-[399px]:mt-6 max-[399px]:rounded-[1.5rem]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Growth overview */}
            <div className="relative p-5 sm:p-7 lg:p-8 max-[399px]:p-4">
              <div className="flex items-start justify-between gap-5 max-[399px]:flex-col max-[399px]:gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#667085] max-[399px]:text-[9px]">
                    Growth overview
                  </p>

                  <div className="mt-2 flex items-end gap-3 max-[399px]:gap-2">
                    <span className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl max-[399px]:text-[2rem]">
                      +47.8%
                    </span>

                    <span className="mb-1 text-xs font-semibold text-[#F65011] max-[399px]:text-[10px]">
                      ↗ positive movement
                    </span>
                  </div>
                </div>

                <div
                  className="digital-growth-motion shrink-0 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 max-[399px]:self-start max-[399px]:px-3 max-[399px]:py-1.5"
                  style={{
                    animation: "growthFloat 4s ease-in-out infinite",
                  }}
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F65011]">
                    Growth
                  </p>

                  <p className="mt-0.5 text-[11px] font-medium text-white max-[399px]:text-[10px]">
                    Moving forward
                  </p>
                </div>
              </div>

              {/* Chart */}
              <div className="relative mt-6 h-[200px] overflow-hidden rounded-2xl border border-white/10 bg-[#08111E] p-3 sm:h-[220px] sm:p-4 max-[399px]:mt-4 max-[399px]:h-[180px] max-[399px]:rounded-xl max-[399px]:p-2.5">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 top-1/4 h-px bg-white/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 top-1/2 h-px bg-white/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-4 top-3/4 h-px bg-white/5"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-1/4 top-4 w-px bg-white/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-1/2 top-4 w-px bg-white/5"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-4 left-3/4 top-4 w-px bg-white/5"
                />

                <svg
                  viewBox="0 0 800 250"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="growthStroke"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#F65011"
                        stopOpacity="0.35"
                      />
                      <stop offset="50%" stopColor="#F65011" stopOpacity="1" />
                      <stop
                        offset="100%"
                        stopColor="#F65011"
                        stopOpacity="0.7"
                      />
                    </linearGradient>

                    <linearGradient
                      id="growthArea"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#F65011"
                        stopOpacity="0.16"
                      />
                      <stop offset="100%" stopColor="#F65011" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 210 C90 200 125 185 190 170 C250 155 285 168 350 135 C415 102 450 120 510 92 C580 60 620 78 680 50 C730 30 760 25 800 15 L800 250 L0 250 Z"
                    fill="url(#growthArea)"
                  />

                  <path
                    d="M0 210 C90 200 125 185 190 170 C250 155 285 168 350 135 C415 102 450 120 510 92 C580 60 620 78 680 50 C730 30 760 25 800 15"
                    fill="none"
                    stroke="url(#growthStroke)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Highlight point */}
                <div
                  className="digital-growth-motion absolute"
                  style={{
                    left: "78%",
                    top: "15%",
                    animation: "growthFloat 3.5s ease-in-out infinite",
                  }}
                >
                  <span
                    className="digital-growth-motion absolute -inset-2 rounded-full bg-[#F65011]/20"
                    style={{
                      animation: "growthPulse 2.5s ease-in-out infinite",
                    }}
                  />

                  <span className="relative block h-2.5 w-2.5 rounded-full bg-[#F65011] shadow-[0_0_16px_rgba(246,80,17,0.45)]" />
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] text-[#667085]">
                  <span>Awareness</span>
                  <span>Engagement</span>
                  <span>Demand</span>
                  <span>Growth</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-white/[0.025] p-3 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#F65011]/20 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] text-[#667085]">
                        {metric.label}
                      </span>

                      <span className="text-[9px] font-bold text-[#F65011]">
                        {metric.value}
                      </span>
                    </div>

                    <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-[#F65011] transition-transform duration-700 origin-left"
                        style={{ width: metric.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Growth focus */}
            <div className="border-t border-white/10 p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                Growth focus
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                Reach the right people. Create the right response.
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#98A2B3]">
                Digital growth works best when visibility, content, performance
                and measurement work together.
              </p>

              <ul className="mt-6 space-y-2">
                {[
                  "Search visibility",
                  "Audience engagement",
                  "Performance campaigns",
                  "Content strategy",
                  "Conversion optimisation",
                  "Analytics & insights",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="group/item flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-2.5 transition-all duration-500 hover:-translate-y-0.5 hover:border-[#F65011]/25 hover:bg-white/[0.04]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65011]/10 text-[9px] font-bold text-[#F65011] transition-all duration-500 group-hover/item:bg-[#F65011] group-hover/item:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-xs font-medium text-[#D0D5DD] sm:text-sm">
                        {item}
                      </span>
                    </div>

                    <span className="text-xs text-[#667085] transition-all duration-500 group-hover/item:translate-x-1 group-hover/item:text-[#F65011]">
                      ↗
                    </span>
                  </li>
                ))}
              </ul>

              {/* AI capability */}
              <div className="mt-5 rounded-2xl border border-[#F65011]/15 bg-[#F65011]/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F65011] text-[9px] font-bold text-white">
                    AI
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Intelligent marketing
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-[#98A2B3]">
                      AI capabilities can support analysis, personalisation and
                      smarter workflows where useful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Journey */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#667085]">
                  Growth journey
                </p>

                <div className="mt-3 flex items-center gap-2">
                  {growthStages.map((stage, index) => (
                    <div
                      key={stage}
                      className="flex min-w-0 items-center gap-2"
                    >
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold text-white">
                          {stage}
                        </span>

                        <span className="mt-1 block h-1 w-5 rounded-full bg-[#F65011]" />
                      </div>

                      {index < growthStages.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-[10px] text-[#667085]"
                        >
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact capability strip */}
        {/* Compact capability strip */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-[#E4E7EC] bg-white shadow-[0_12px_30px_rgba(16,24,40,0.04)]">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <li
                  key={capability.title}
                  className={[
                    "group relative overflow-hidden border-[#E4E7EC] px-4 py-4 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:bg-[#F8FAFC] hover:shadow-[0_12px_28px_rgba(16,24,40,0.07)]",
                    index < capabilities.length - 1
                      ? "border-b sm:nth-[odd]:border-r lg:border-b-0 lg:border-r"
                      : "",
                    index === 4 ? "sm:border-b-0" : "",
                  ].join(" ")}
                >
                  {/* Soft Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#F65011]/0 blur-2xl transition-all duration-700 group-hover:bg-[#F65011]/10"
                  />

                  <div className="relative flex items-center justify-between gap-3">
                    {/* Icon + Title */}
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F65011] text-white shadow-[0_7px_16px_rgba(246,80,17,0.15)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_9px_20px_rgba(246,80,17,0.22)]"
                      >
                        <Icon size={19} strokeWidth={1.9} />
                      </span>

                      <h4 className="min-w-0 truncate text-sm font-semibold text-[#101828] transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:text-[#F65011]">
                        {capability.title}
                      </h4>
                    </div>

                    {/* Arrow */}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] text-[#98A2B3] transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
        {/* Closing statement */}
        <div className="mt-5 flex flex-col gap-2 border-t border-[#E4E7EC] pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-[#667085] sm:text-sm">
            Digital marketing should create movement, not just attention.
          </p>

          <p className="text-sm font-semibold text-[#101828]">
            Attention
            <span aria-hidden="true" className="mx-2 text-[#F65011]">
              →
            </span>
            Action
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
