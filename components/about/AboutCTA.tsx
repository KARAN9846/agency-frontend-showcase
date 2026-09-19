export default function AboutCTA() {
  return (
    <section className="bg-[#F8FAFC] max-sm:bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-2 sm:px-8 sm:pb-14 sm:pt-4 lg:px-10 lg:pb-18 lg:pt-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#101828] px-7 py-12 max-sm:border max-sm:border-[#E4E7EC] max-sm:bg-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/15 blur-3xl max-sm:hidden"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#F65011]/8 blur-3xl max-sm:hidden"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
                Let&apos;s Build Together
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white max-sm:text-[#101828] sm:text-4xl lg:text-5xl">
                Have an idea worth building?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#98A2B3] max-sm:text-[#667085] sm:text-base sm:leading-8">
                Tell us what you are trying to achieve. We&apos;ll start with
                the business problem, explore the right approach and work toward
                a practical digital solution.
              </p>
            </div>

            {/* Action */}
            <div>
              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#F65011] px-6 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9430B] hover:shadow-[0_12px_30px_rgba(246,80,17,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101828]"
              >
                Start Your Project
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Closing statement */}
          <div className="relative mt-10 border-t border-white/10 pt-5 max-sm:border-[#E4E7EC] sm:mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#667085] sm:text-sm">
                Business understanding · Design · Technology · Growth
              </p>

              <p className="text-sm font-semibold text-white max-sm:text-[#101828]">
                Idea{" "}
                <span aria-hidden="true" className="mx-2 text-[#F65011]">
                  →
                </span>{" "}
                Product
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
