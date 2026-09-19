"use client";

import {
  BriefcaseBusiness,
  Compass,
  Handshake,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export default function WhyNexa() {
  return (
    <section className="border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
            Why Nexa
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-[#101828] sm:text-4xl lg:text-5xl">
            Technology that works for your business.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg sm:leading-8">
            This concept brings strategy, design and development together to
            demonstrate how useful digital products can support clear goals.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-12">
          {/* Card 1 — Business-first thinking */}
          <div className="rounded-3xl bg-[#101828] p-7 text-white transition-colors duration-300 max-sm:bg-[#F8FAFC] max-sm:text-[#101828] sm:p-9 lg:col-span-5 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F65011] text-white">
              <BriefcaseBusiness aria-hidden="true" size={20} strokeWidth={2} />
            </div>

            <h3 className="mt-8 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
              Business-first thinking
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#98A2B3] max-sm:text-[#667085] sm:text-base">
              Before choosing technology, we understand what your business is
              trying to achieve. Every solution starts with the problem it needs
              to solve.
            </p>

            <div className="mt-10 border-t border-white/10 pt-5 max-sm:border-[#E4E7EC]">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#98A2B3]">
                From requirement
              </p>

              <p className="mt-2 text-base font-semibold text-white max-sm:text-[#101828]">
                → to practical solution
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {/* Card 2 — Strategy */}
            <div
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-7 text-[#101828] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,24,40,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:-translate-y-0.5 active:border-[#F65011]/30 active:bg-white active:shadow-[0_12px_30px_rgba(16,24,40,0.08)] max-sm:border-[#101828] max-sm:bg-[#101828] max-sm:text-white sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F65011]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10" />

              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)]"
                >
                  <Compass size={18} strokeWidth={2} />
                </span>

                <span className="text-sm font-medium text-[#98A2B3] transition-colors duration-300 group-hover:text-[#F65011] group-focus-visible:text-[#F65011] group-active:text-[#F65011]">
                  Strategy
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#101828] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1 max-sm:text-white">
                Clear direction
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085] max-sm:text-[#98A2B3]">
                We turn ideas and business requirements into a clear technical
                direction before development begins.
              </p>
            </div>

            {/* Card 3 — Quality */}
            <div
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,24,40,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:-translate-y-0.5 active:border-[#F65011]/30 active:bg-white active:shadow-[0_12px_30px_rgba(16,24,40,0.08)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F65011]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10" />

              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)]"
                >
                  <ShieldCheck size={18} strokeWidth={2} />
                </span>

                <span className="text-sm font-medium text-[#98A2B3] transition-colors duration-300 group-hover:text-[#F65011] group-focus-visible:text-[#F65011] group-active:text-[#F65011]">
                  Quality
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#101828] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1">
                Built to perform
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                We focus on clean interfaces, reliable technology, strong
                performance and experiences people can actually use.
              </p>
            </div>

            {/* Card 4 — Flexibility */}
            <div
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-7 text-[#101828] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,24,40,0.08)] focus-visible:outline-none focus-visible:ring-2px focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:-translate-y-0.5 active:border-[#F65011]/30 active:bg-white active:shadow-[0_12px_30px_rgba(16,24,40,0.08)] max-sm:border-[#101828] max-sm:bg-[#101828] max-sm:text-white sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F65011]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10" />

              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)]"
                >
                  <RefreshCw size={18} strokeWidth={2} />
                </span>

                <span className="text-sm font-medium text-[#98A2B3] transition-colors duration-300 group-hover:text-[#F65011] group-focus-visible:text-[#F65011] group-active:text-[#F65011]">
                  Flexibility
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#101828] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1 max-sm:text-white">
                Ready to evolve
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085] max-sm:text-[#98A2B3]">
                Your business will change. We build solutions that can adapt,
                expand and support your next stage of growth.
              </p>
            </div>

            {/* Card 5 — Partnership */}
            <div
              tabIndex={0}
              className="group relative overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC] p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F65011]/30 hover:bg-white hover:shadow-[0_18px_40px_rgba(16,24,40,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:-translate-y-0.5 active:border-[#F65011]/30 active:bg-white active:shadow-[0_12px_30px_rgba(16,24,40,0.08)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#F65011]/0 blur-2xl transition-all duration-500 group-hover:bg-[#F65011]/10 group-focus-visible:bg-[#F65011]/10 group-active:bg-[#F65011]/10" />

              <div className="flex items-center justify-between">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_18px_rgba(246,80,17,0.16)]"
                >
                  <Handshake size={18} strokeWidth={2} />
                </span>

                <span className="text-sm font-medium text-[#98A2B3] transition-colors duration-300 group-hover:text-[#F65011] group-focus-visible:text-[#F65011] group-active:text-[#F65011]">
                  Partnership
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-[#101828] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-active:translate-x-1">
                Connected capabilities
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Software, web, mobile and digital disciplines are presented as
                connected parts of one thoughtful product journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
