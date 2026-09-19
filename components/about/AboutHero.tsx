export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Decorative elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F65011]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#F65011]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              About Nexa
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#101828] sm:text-5xl lg:text-6xl">
              Building technology around the way your business works.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Nexa Digital Agency is a portfolio concept that turns ideas
              and growth opportunities into practical digital solutions. From
              software and websites to mobile applications and digital
              marketing, we bring technology, design and business thinking
              together to move ideas forward.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
                href="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#D0D5DD] bg-white px-6 text-sm font-semibold text-[#101828] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F65011]/40 hover:text-[#F65011] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC]"
              >
                Explore Our Services
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E4E7EC] bg-white p-6 shadow-[0_24px_70px_rgba(16,24,40,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/20 hover:shadow-[0_28px_75px_rgba(16,24,40,0.11)] sm:p-8">
              {/* Top label */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                  Our Perspective
                </span>

                <span className="flex items-center gap-2 text-xs font-medium text-[#667085]">
                  <span className="h-2 w-2 rounded-full bg-[#F65011]" />
                  Business + Technology
                </span>
              </div>

              {/* Main message */}
              <div className="mt-14">
                <p className="text-sm font-medium text-[#98A2B3]">
                  We believe every good digital solution starts with
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#101828] sm:text-4xl">
                  understanding the <span className="text-[#F65011]">why.</span>
                </h2>
              </div>

              {/* Journey */}
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute left-4 right-4 top-4 h-px bg-[#E4E7EC]" />

                  <div className="relative grid grid-cols-3 gap-4">
                    <div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F65011] text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_20px_rgba(246,80,17,0.2)]">
                        01
                      </div>

                      <p className="mt-4 text-sm font-semibold text-[#101828]">
                        Understand
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#98A2B3]">
                        Business goals
                      </p>
                    </div>

                    <div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D0D5DD] bg-white text-xs font-bold text-[#667085] transition-all duration-300 hover:border-[#F65011] hover:bg-[#F65011] hover:text-white hover:shadow-[0_8px_20px_rgba(246,80,17,0.15)]">
                        02
                      </div>

                      <p className="mt-4 text-sm font-semibold text-[#101828]">
                        Build
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#98A2B3]">
                        Right solution
                      </p>
                    </div>

                    <div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D0D5DD] bg-white text-xs font-bold text-[#667085] transition-all duration-300 hover:border-[#F65011] hover:bg-[#F65011] hover:text-white hover:shadow-[0_8px_20px_rgba(246,80,17,0.15)]">
                        03
                      </div>

                      <p className="mt-4 text-sm font-semibold text-[#101828]">
                        Grow
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#98A2B3]">
                        Long-term value
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom statement */}
              <div className="mt-12 border-t border-[#E4E7EC] pt-5">
                <p className="text-sm font-semibold text-[#101828]">
                  Idea{" "}
                  <span className="mx-2 text-[#F65011]" aria-hidden="true">
                    →
                  </span>{" "}
                  Product
                </p>

                <p className="mt-2 text-xs leading-5 text-[#98A2B3]">
                  Turning clear thinking into practical digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
