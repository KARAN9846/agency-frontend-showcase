"use client";

import { ArrowUpRight, Building2, Lightbulb } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="border-t border-[#E4E7EC] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* =========================
              Section Intro
          ========================== */}
          <div className="max-w-md rounded-3xl max-sm:bg-[#101828] max-sm:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-[#101828] max-sm:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Technology should solve something.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#667085] max-sm:text-[#98A2B3] sm:text-lg sm:leading-8">
              We believe digital solutions create the most value when they are
              built around the business, not the other way around.
            </p>

            {/* Small Brand Row */}
            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_20px_rgba(246,80,17,0.18)]">
                <Building2 size={18} strokeWidth={2} />
              </span>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#98A2B3]">
                  Idea to Product
                </p>

                <p className="text-sm font-medium text-[#344054] max-sm:text-white">
                  Business-first digital solutions.
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              Story Content
          ========================== */}
          <div>
            <p className="text-xl font-medium leading-8 tracking-[-0.02em] text-[#344054] sm:text-2xl sm:leading-9">
              Every business has its own goals, processes, challenges and
              opportunities. The right technology should fit those realities and
              help the business move forward.
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-[#667085]">
                Nexa Digital Agency brings software, web, mobile and digital
                disciplines together as a fictional portfolio concept focused
                on thoughtful, maintainable digital experiences.
              </p>

              <p className="text-base leading-7 text-[#667085]">
                We combine business understanding, thoughtful design and
                practical technology to turn complex requirements into solutions
                that are clear, useful and ready to evolve.
              </p>
            </div>

            {/* =========================
                Philosophy Block
            ========================== */}
            <div className="mt-10 overflow-hidden rounded-3xl border border-[#E4E7EC] bg-[#F8FAFC]">
              <div className="grid sm:grid-cols-[auto_1fr]">
                {/* Icon Block */}
                <div className="flex items-center justify-center bg-[#101828] px-6 py-8 sm:px-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_10px_24px_rgba(246,80,17,0.22)]">
                    <Lightbulb size={24} strokeWidth={2.1} />
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F65011]">
                      Our Philosophy
                    </span>

                    <ArrowUpRight size={14} className="text-[#F65011]" />
                  </div>

                  <h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#101828] sm:text-2xl">
                    Understand the problem. Build the right solution.
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                    Good technology starts with clear thinking. We focus on
                    understanding what matters first, then choosing the right
                    way to turn that understanding into something useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
