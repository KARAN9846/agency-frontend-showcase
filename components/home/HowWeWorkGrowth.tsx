import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";

const growthSteps = [
  { number: "01", title: "Discover" },
  { number: "02", title: "Plan" },
  { number: "03", title: "Design" },
  { number: "04", title: "Develop" },
  { number: "05", title: "Launch" },
  { number: "06", title: "Grow" },
];

const graphPoints = [
  { x: 83, y: 208 },
  { x: 250, y: 184 },
  { x: 417, y: 153 },
  { x: 583, y: 117 },
  { x: 750, y: 76 },
  { x: 917, y: 30 },
];

export function HowWeGrow() {
  return (
    <section
      aria-labelledby="growth-heading"
      className="overflow-hidden bg-[#F8FAFC] py-14 sm:py-18 lg:py-22"
    >
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F65011]">
                How we grow
              </p>
              <h2
                id="growth-heading"
                className="mt-3 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#101828] sm:text-4xl lg:text-[44px]"
              >
                From an idea to
                <span className="text-[#F65011]"> lasting momentum.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#667085] sm:text-right">
              One clear process. Six connected stages.
            </p>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[24px] bg-[#101828] px-4 pb-5 pt-5 shadow-[0_24px_70px_rgba(16,24,40,0.14)] sm:mt-10 sm:rounded-[28px] sm:px-7 sm:pb-7 sm:pt-7 lg:px-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#F65011]/10 blur-3xl"
            />

            <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F65011] text-white">
                  <TrendingUp size={18} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Growth path</p>
                  <p className="text-[10px] text-white/40 sm:text-xs">
                    Idea to improvement
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#F65011] sm:text-xs">
                Forward
                <ArrowUpRight size={14} aria-hidden="true" />
              </div>
            </div>

            <div className="relative mt-4 h-[185px] sm:h-[225px] lg:h-[255px]">
              <svg
                viewBox="0 0 1000 240"
                preserveAspectRatio="none"
                className="h-full w-full"
                role="img"
                aria-label="Upward growth graph from discovery through growth"
              >
                <defs>
                  <linearGradient
                    id="growth-fill"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#F65011" stopOpacity="0.24" />
                    <stop offset="100%" stopColor="#F65011" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="growth-line"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#FF8A5C" />
                    <stop offset="100%" stopColor="#F65011" />
                  </linearGradient>
                </defs>

                {[52, 104, 156, 208].map((y) => (
                  <line
                    key={y}
                    x1="20"
                    y1={y}
                    x2="980"
                    y2={y}
                    stroke="rgba(255,255,255,0.055)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                  />
                ))}

                <path
                  d="M83 208 C145 204 197 193 250 184 C312 173 363 163 417 153 C480 141 530 129 583 117 C645 103 698 89 750 76 C812 61 864 45 917 30 L917 226 L83 226 Z"
                  fill="url(#growth-fill)"
                />
                <path
                  d="M83 208 C145 204 197 193 250 184 C312 173 363 163 417 153 C480 141 530 129 583 117 C645 103 698 89 750 76 C812 61 864 45 917 30"
                  fill="none"
                  stroke="url(#growth-line)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />

                {graphPoints.map((point, index) => (
                  <g key={growthSteps[index].number}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="14"
                      fill="#101828"
                      stroke="#F65011"
                      strokeWidth="5"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle cx={point.x} cy={point.y} r="4" fill="#FFFFFF" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-4 sm:grid-cols-6 sm:gap-0 sm:pt-5">
              {growthSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`min-w-0 px-2 py-2 sm:border-r sm:border-white/[0.08] sm:px-3 sm:py-0 sm:last:border-r-0 lg:px-5 ${
                    index >= 3 ? "border-t border-white/[0.08] pt-4 sm:border-t-0 sm:pt-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 sm:block">
                    <span className="text-[9px] font-bold tracking-[0.1em] text-[#F65011] sm:text-[10px]">
                      {step.number}
                    </span>
                    <h3 className="truncate text-xs font-bold text-white sm:mt-1.5 sm:text-sm lg:text-base">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
