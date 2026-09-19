export default function ServicesHero() {
  const capabilities = [
    {
      number: "01",
      title: "Digital Products",
      description: "Websites, applications and business platforms.",
    },
    {
      number: "02",
      title: "Business Automation",
      description: "Smarter workflows that reduce repetitive work.",
    },
    {
      number: "03",
      title: "AI & Intelligent Solutions",
      description: "AI capabilities integrated where they add real value.",
    },
    {
      number: "04",
      title: "Digital Growth",
      description: "Experiences and strategies designed to reach customers.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Static background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#F65011]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#F65011]/5 blur-3xl"
      />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,24,40,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          {/* Left */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F65011]/20 bg-white px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                Our Services
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.045em] text-[#101828] sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
              Digital solutions built for{" "}
              <span className="text-[#F65011]">what&apos;s next.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              From software and websites to mobile applications and digital
              marketing, we create practical solutions around your business
              goals.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#98A2B3] sm:text-base sm:leading-7">
              We combine modern technology, intelligent automation and AI
              capabilities with thoughtful design to help businesses build
              better experiences and work smarter.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F65011] px-6 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_12px_30px_rgba(246,80,17,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
              >
                Start Your Project
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>

              <a
                href="#services"
                className="group inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-6 text-sm font-semibold text-[#101828] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/40 hover:text-[#F65011] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC]"
              >
                Explore Services
                <span
                  aria-hidden="true"
                  className="ml-2 transition-transform duration-300 group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </div>

            {/* Service summary */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#E4E7EC] pt-5">
              <span className="text-xs font-medium text-[#667085]">
                Software
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs font-medium text-[#667085]">Web</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs font-medium text-[#667085]">Mobile</span>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[#F65011]"
              />

              <span className="text-xs font-medium text-[#667085]">
                Digital Marketing
              </span>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative lg:justify-self-end lg:w-full lg:max-w-xl">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-white p-5 shadow-[0_24px_70px_rgba(16,24,40,0.07)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_30px_80px_rgba(16,24,40,0.1)] max-sm:border-[#101828] max-sm:bg-[#101828] max-sm:shadow-[0_20px_50px_rgba(16,24,40,0.18)] sm:p-7">
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F65011]/0 blur-3xl transition-all duration-500 group-hover:bg-[#F65011]/10 max-sm:bg-[#F65011]/8"
              />

              {/* Header */}
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                    What We Enable
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#344054] max-sm:text-white">
                    Technology with purpose
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#E4E7EC] bg-[#F8FAFC] px-3 py-1.5 max-sm:border-white/10 max-sm:bg-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

                  <span className="text-[11px] font-medium text-[#667085]">
                    Business + Technology
                  </span>
                </div>
              </div>

              {/* Main statement */}
              <div className="relative mt-9">
                <p className="text-sm text-[#98A2B3]">
                  One partner. Multiple ways to move forward.
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.045em] text-[#101828] max-sm:text-white sm:text-4xl">
                  Build.
                  <br />
                  <span className="text-[#F65011]">Automate.</span>
                  <br />
                  Grow.
                </h2>
              </div>

              {/* Capability list */}
              <ol className="relative mt-8 space-y-2.5 max-sm:mt-7 max-sm:space-y-3">
                {capabilities.map((capability) => (
                  <li
                    key={capability.number}
                    className="group/item rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/25 hover:bg-white max-sm:border-white/10 max-sm:border-l-2 max-sm:border-l-[#F65011] max-sm:bg-[#182235] max-sm:p-4 max-sm:shadow-[0_8px_25px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex items-center gap-3">
                      {/* Number */}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[11px] font-bold text-[#F65011] transition-all duration-300 group-hover/item:bg-[#F65011] group-hover/item:text-white max-sm:bg-[#F65011]/10 max-sm:text-[#F65011] max-sm:ring-1 max-sm:ring-[#F65011]/20">
                        {capability.number}
                      </span>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#101828] max-sm:text-white">
                          {capability.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#98A2B3]">
                          {capability.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span
                        aria-hidden="true"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm text-[#98A2B3] transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-[#F65011] max-sm:bg-white/5 max-sm:text-[#F65011]"
                      >
                        →
                      </span>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Bottom statement */}
              <div className="relative mt-7 flex items-center justify-between border-t border-[#E4E7EC] pt-5 max-sm:mt-8 max-sm:border-white/10 max-sm:pt-5">
                <p className="text-xs font-medium text-[#98A2B3]">
                  From idea to measurable progress
                </p>

                <p className="text-sm font-bold text-[#101828] max-sm:text-white">
                  Idea
                  <span aria-hidden="true" className="mx-2 text-[#F65011]">
                    →
                  </span>
                  Product
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom capability strip */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="group rounded-2xl border border-[#E4E7EC] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/20 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F65011]">
              Smart
            </p>

            <p className="mt-1 text-sm font-medium text-[#344054]">
              AI &amp; intelligent automation
            </p>
          </div>

          <div className="group rounded-2xl border border-[#E4E7EC] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/20 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F65011]">
              Scalable
            </p>

            <p className="mt-1 text-sm font-medium text-[#344054]">
              Solutions ready to evolve
            </p>
          </div>

          <div className="group rounded-2xl border border-[#E4E7EC] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/20 hover:shadow-[0_12px_30px_rgba(16,24,40,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#F65011]">
              Connected
            </p>

            <p className="mt-1 text-sm font-medium text-[#344054]">
              Technology built around the business
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
