import { MessageCircle } from "lucide-react";
export default function ServicesCTA() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div
          className="
            relative overflow-hidden rounded-[2rem]
            bg-[#101828]
            px-7 py-10
            transition-all duration-300
            sm:px-10 sm:py-12
            lg:px-14 lg:py-14

            max-sm:bg-white
            max-sm:px-6
            max-sm:py-8
            max-sm:shadow-[0_18px_45px_rgba(16,24,40,0.08)]
          "
        >
          {/* Subtle glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -right-24 -top-24
              h-60 w-60 rounded-full
              bg-[#F65011]/10 blur-3xl

              max-sm:bg-[#F65011]/6
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute -bottom-28 -left-20
              h-56 w-56 rounded-full
              bg-[#F65011]/5 blur-3xl

              max-sm:bg-[#F65011]/4
            "
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            {/* Content */}
            <div className="max-w-3xl">
              <p
                className="
                  text-xs font-semibold uppercase tracking-[0.18em]
                  text-[#F65011]
                  sm:text-sm
                "
              >
                Ready to move forward?
              </p>

              <h2
                className="
                  mt-3 text-3xl font-bold tracking-[-0.04em]
                  text-white
                  sm:text-4xl
                  lg:text-5xl

                  max-sm:text-[#101828]
                  max-sm:text-[2rem]
                  max-sm:leading-[1.1]
                  max-sm:tracking-[-0.035em]
                "
              >
                Let&apos;s build something that moves your business forward.
              </h2>

              <p
                className="
                  mt-4 max-w-2xl
                  text-sm leading-6
                  text-[#98A2B3]
                  sm:text-base sm:leading-7

                  max-sm:text-[13px]
                  max-sm:leading-6
                  max-sm:text-[#667085]
                "
              >
                Tell us what you want to build, improve or grow. We&apos;ll help
                you explore the right digital approach for your business.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {/* Start Your Project */}
              <a
                href="/contact"
                className="
                  inline-flex min-h-12 items-center justify-center
                  rounded-xl bg-[#F65011]
                  px-6 text-sm font-semibold !text-white
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
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>

              {/* Contact form */}
              <a
                href="/contact"
                className="
                  inline-flex
                  w-full
                  max-w-[320px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#25D366]
                  bg-[#25D366]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  !text-white
                  transition-colors
                  duration-300
                  hover:border-[#20BD5A]
                  hover:bg-[#20BD5A]
                  sm:w-auto
                  sm:max-w-none
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

          {/* Bottom strip */}
          <div
            className="
              relative mt-8
              flex flex-col gap-3
              border-t border-white/10
              pt-4
              sm:flex-row
              sm:items-center
              sm:justify-between

              max-sm:mt-7
              max-sm:border-[#E4E7EC]
              max-sm:pt-4
            "
          >
            <p
              className="
                text-xs text-[#667085]
                sm:text-sm
              "
            >
              Software · Web · Mobile · Digital Marketing
            </p>

            <p
              className="
                text-sm font-semibold
                text-white

                max-sm:text-[#101828]
              "
            >
              Idea
              <span aria-hidden="true" className="mx-2 text-[#F65011]">
                →
              </span>
              Product
              <span aria-hidden="true" className="mx-2 text-[#F65011]">
                →
              </span>
              Growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
