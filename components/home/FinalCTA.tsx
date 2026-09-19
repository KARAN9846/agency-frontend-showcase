import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div
          className="
            relative overflow-hidden rounded-[2rem] bg-[#101828]
            px-7 py-12
            sm:px-10 sm:py-14
            lg:px-16 lg:py-16

            max-sm:bg-white
            max-sm:px-6
            max-sm:py-10
            max-sm:shadow-[0_18px_45px_rgba(16,24,40,0.08)]
          "
        >
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-24 -top-24 h-64 w-64
              rounded-full bg-[#F65011]/15 blur-3xl

              max-sm:bg-[#F65011]/6
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -bottom-32 -left-20 h-72 w-72
              rounded-full bg-[#F65011]/10 blur-3xl

              max-sm:bg-[#F65011]/4
            "
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            {/* Content */}
            <div className="max-w-3xl">
              <p
                className="
                  text-sm font-semibold uppercase tracking-[0.18em]
                  text-[#F65011]
                "
              >
                Ready to move forward?
              </p>

              <h2
                className="
                  mt-4 text-3xl font-bold tracking-[-0.04em] text-white
                  sm:text-4xl
                  lg:text-5xl

                  max-sm:text-[#101828]
                "
              >
                Your next digital idea starts with a conversation.
              </h2>

              <p
                className="
                  mt-6 max-w-2xl text-base leading-7 text-[#98A2B3]
                  sm:text-lg sm:leading-8

                  max-sm:text-[#667085]
                "
              >
                Whether you need a website, software, mobile application or
                digital growth strategy, let&apos;s talk about what you want to
                build next.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[210px] lg:flex-col">
              <a
                href="/contact"
                className="
                  inline-flex min-h-12 items-center justify-center rounded-xl
                  bg-[#F65011] px-6 text-sm font-semibold !text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D9430B]
                  hover:shadow-[0_12px_30px_rgba(246,80,17,0.25)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#F65011]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#101828]
                "
              >
                Start Your Project
              </a>

              <a
                href="/contact"
                className="
    inline-flex min-h-12 items-center justify-center gap-2 rounded-xl
    border border-[#25D366]
    bg-[#25D366]
    px-6 text-sm font-semibold !text-white
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-[#20BD5A]
    hover:bg-[#20BD5A]
    hover:!text-white
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#25D366]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#101828]
  "
              >
                <MessageCircle
                  size={18}
                  className="shrink-0 text-white"
                  aria-hidden="true"
                />
                Contact Form
              </a>
            </div>
          </div>

          {/* Bottom statement */}
          <div
            className="
              relative mt-10 border-t border-white/10 pt-5
              sm:mt-12

              max-sm:border-[#E4E7EC]
              max-sm:pt-5
            "
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#667085] sm:text-sm">
                Software · Web · Mobile · Digital Marketing
              </p>

              <p
                className="
                  text-sm font-semibold text-white

                  max-sm:text-[#101828]
                "
              >
                Idea{" "}
                <span className="mx-2 text-[#F65011]" aria-hidden="true">
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
