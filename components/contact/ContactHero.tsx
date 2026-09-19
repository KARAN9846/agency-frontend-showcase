export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-[#F65011]/8 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#F65011]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          {/* Main content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F65011]/20 bg-white px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F65011]" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                Contact Us
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#101828] sm:text-5xl lg:text-6xl">
              Let&apos;s talk about what you&apos;re building.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
              Tell us about your idea, business challenge or digital goal.
              We&apos;ll help you explore the right way to move it forward.
            </p>
          </div>

          {/* Quick contact direction */}
          <div className="lg:justify-self-end">
            <div
              className="
                rounded-2xl
                border border-[#E4E7EC]
                bg-white
                p-5
                shadow-[0_15px_40px_rgba(16,24,40,0.05)]

                max-sm:border-white/10
                max-sm:bg-[#101828]
                max-sm:shadow-[0_18px_40px_rgba(16,24,40,0.12)]
              "
            >
              <p
                className="
                  text-xs font-semibold uppercase tracking-[0.14em]
                  text-[#98A2B3]
                "
              >
                We can help with
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Software", "Web", "Mobile", "Digital Marketing"].map(
                  (item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border border-[#E4E7EC]
                        bg-[#F8FAFC]
                        px-3 py-1.5
                        text-xs font-medium text-[#344054]

                        max-sm:border-white/10
                        max-sm:bg-white/[0.04]
                        max-sm:text-[#F2F4F7]
                      "
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>

              <div
                className="
                  mt-5
                  border-t border-[#E4E7EC]
                  pt-4

                  max-sm:border-white/10
                "
              >
                <p
                  className="
                    text-sm font-semibold text-[#101828]

                    max-sm:text-white
                  "
                >
                  Idea
                  <span aria-hidden="true" className="mx-2 text-[#F65011]">
                    →
                  </span>
                  Conversation
                  <span aria-hidden="true" className="mx-2 text-[#F65011]">
                    →
                  </span>
                  Solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
