"use client";

import { SearchCheck, Wrench, Users, TrendingUp } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      number: "01",
      title: "Understand Before Building",
      description:
        "Start with the business, the people and the outcome before choosing the technology.",
      icon: SearchCheck,
    },
    {
      number: "02",
      title: "Keep Technology Practical",
      description:
        "Build solutions that simplify work, improve experiences and create useful business value.",
      icon: Wrench,
    },
    {
      number: "03",
      title: "Design for People",
      description:
        "Create digital experiences that are clear, intuitive and easy for people to use.",
      icon: Users,
    },
    {
      number: "04",
      title: "Build for What Comes Next",
      description:
        "Create solutions that can adapt as the business grows and new opportunities appear.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
        {/* Header */}
        <div className="grid gap-6 rounded-3xl max-sm:bg-[#101828] max-sm:p-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
              What We Believe
            </p>

            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-[-0.04em] text-[#101828] max-sm:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              Principles behind the way we build.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-[#667085] max-sm:text-[#98A2B3] sm:text-base sm:leading-7 lg:justify-self-end">
            Good technology comes from clear thinking, empathy for users and a
            commitment to solving the right problem.
          </p>
        </div>

        {/* Values */}
        <ol className="mt-10 divide-y divide-[#E4E7EC] overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white sm:mt-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isLightCard = index % 2 === 0;

            return (
              <li
                key={value.number}
                className={`group relative grid gap-5 px-5 py-6 transition-all duration-300 ease-out hover:bg-[#FFFCFA] sm:grid-cols-[72px_1fr_auto] sm:items-center sm:gap-8 sm:px-7 sm:py-7 lg:px-8 ${
                  isLightCard
                    ? "max-sm:bg-white"
                    : "max-sm:border-[#101828] max-sm:bg-[#101828]"
                }`}
              >
                {/* Icon */}
                <div className="flex items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F65011] text-white shadow-[0_8px_20px_rgba(246,80,17,0.16)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(246,80,17,0.22)] sm:h-14 sm:w-14">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="sm:h-6 sm:w-6"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-lg font-bold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl ${
                      isLightCard
                        ? "text-[#101828]"
                        : "max-sm:text-white sm:text-[#101828]"
                    }`}
                  >
                    {value.title}
                  </h3>

                  <p
                    className={`mt-2 max-w-2xl text-sm leading-6 ${
                      isLightCard
                        ? "text-[#667085]"
                        : "max-sm:text-[#98A2B3] sm:text-[#667085]"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-all duration-300 group-hover:border-[#F65011] group-hover:bg-[#F65011] group-hover:text-white ${
                    isLightCard
                      ? "border-[#E4E7EC] text-[#667085]"
                      : "border-[#E4E7EC] text-[#667085] max-sm:border-white/10 max-sm:text-[#98A2B3]"
                  }`}
                >
                  <span aria-hidden="true">↗</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
