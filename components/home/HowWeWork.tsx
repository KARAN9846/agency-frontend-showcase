import { Code2, Map, Palette, Rocket, Search, TrendingUp } from "lucide-react";

export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We understand your business, goals, challenges and requirements before defining the right solution.",
      icon: Search,
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We turn requirements into a clear roadmap with the right technology, scope and direction.",
      icon: Map,
    },
    {
      number: "03",
      title: "Design",
      description:
        "We shape the experience and interface so the final product is clear, useful and engaging.",
      icon: Palette,
    },
    {
      number: "04",
      title: "Develop",
      description:
        "We build reliable technology with a strong focus on quality, performance and usability.",
      icon: Code2,
    },
    {
      number: "05",
      title: "Launch",
      description:
        "We test, refine and prepare the solution for a smooth launch and a confident start.",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Grow",
      description:
        "We continue improving the solution as your business evolves and new opportunities emerge.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#101828] text-white max-sm:bg-white max-sm:text-[#101828]">
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#F65011]/10 blur-3xl max-sm:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#F65011]/5 blur-3xl max-sm:hidden"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              How We Work
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              A clear path from idea to impact.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-[#98A2B3] sm:text-lg sm:leading-8 lg:justify-self-end">
            Great digital products are built through the right process. We
            combine business understanding, thoughtful design and reliable
            technology to move every project forward with purpose.
          </p>
        </div>

        {/* Process */}
        <ol className="relative mt-16 grid gap-4 sm:mt-20 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLightCard = index % 2 === 0;

            return (
              <li
                key={step.number}
                tabIndex={0}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white/[0.055] hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828] active:-translate-y-0.5 active:border-[#F65011]/40 active:bg-white/[0.055] sm:p-7 lg:p-8 ${
                  isLightCard
                    ? "max-sm:border-[#E4E7EC] max-sm:bg-[#F8FAFC] max-sm:text-[#101828]"
                    : "max-sm:border-[#101828] max-sm:bg-[#101828] max-sm:text-white"
                }`}
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10"
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between gap-4">
                  {/* Step Icon */}
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_25px_rgba(246,80,17,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(246,80,17,0.28)] group-focus-visible:scale-105 group-focus-visible:shadow-[0_10px_30px_rgba(246,80,17,0.28)] group-active:scale-105">
                    <Icon aria-hidden="true" size={25} strokeWidth={2} />
                  </span>

                  {/* Arrow */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[#F65011] transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white group-focus-visible:border-[#F65011] group-focus-visible:bg-[#F65011] group-focus-visible:text-white group-active:border-[#F65011] group-active:bg-[#F65011] group-active:text-white ${
                      isLightCard
                        ? "max-sm:border-[#E4E7EC]"
                        : "max-sm:border-white/10"
                    }`}
                  >
                    <span className="text-sm">↗</span>
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 text-2xl font-bold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1 ${
                      isLightCard
                        ? "max-sm:text-[#101828]"
                        : "max-sm:text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-3 max-w-md text-sm leading-6 ${
                      isLightCard
                        ? "max-sm:text-[#667085]"
                        : "max-sm:text-[#98A2B3]"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Bottom progress line */}
                <div
                  className={`relative mt-8 h-px overflow-hidden bg-white/10 ${
                    isLightCard ? "max-sm:bg-[#E4E7EC]" : "max-sm:bg-white/10"
                  }`}
                >
                  <div className="h-full w-0 bg-[#F65011] transition-all duration-500 ease-out group-hover:w-full group-focus-visible:w-full group-active:w-full" />
                </div>
              </li>
            );
          })}
        </ol>

        {/* Closing statement */}
        <div className="mt-12 border-t border-white/10 pt-6 max-sm:border-[#E4E7EC] sm:mt-14 sm:pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-[#98A2B3] max-sm:text-[#667085]">
              From the first conversation to the next stage of growth.
            </p>

            <p className="text-sm font-semibold text-white max-sm:text-[#101828]">
              Idea <span className="mx-2 text-[#F65011]">→</span> Product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
