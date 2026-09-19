"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const processSteps = [
  {
    number: "01",
    title: "Idea",
    description:
      "We understand your vision, business goals and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the right digital direction, features and technology for your product.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create intuitive interfaces and experiences designed around your users.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We turn the approved design into a reliable and scalable digital product.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We prepare, test and launch your product into the real world.",
  },
  {
    number: "06",
    title: "Grow",
    description:
      "We continuously improve your digital presence and help your business grow.",
  },
];

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  const active = processSteps[activeStep];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[35%] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#F65011]/5 blur-3xl" />

        <div className="absolute -right-32 top-32 h-[420px] w-[420px] rounded-full border border-[#F65011]/10" />

        <div className="absolute -right-16 top-48 h-[280px] w-[280px] rounded-full border border-[#101828]/5" />
      </div>

      <Container>
        {/* Main hero grid */}
        <div
          className="
            relative
            grid
            grid-cols-1
            items-center
            gap-10
            py-10
            sm:gap-12
            sm:py-14
            lg:min-h-[calc(100vh-80px)]
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-12
            lg:py-20
          "
        >
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <span
              className="
                mx-auto
                inline-flex
                max-w-full
                rounded-full
                border
                border-[#F65011]/20
                bg-[#F65011]/5
                px-4
                py-2
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#F65011]
                sm:text-xs
                lg:mx-0
              "
            >
              Your Digital Growth & Tech Partner
            </span>

            <h1
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-5xl
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                text-[#101828]
                sm:text-6xl
                lg:mx-0
                lg:text-7xl
                xl:text-[5.25rem]
              "
            >
              From Idea
              <br />
              <span className="text-[#F65011]">to Product.</span>
            </h1>

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-base
                leading-7
                text-[#667085]
                sm:text-lg
                lg:mx-0
              "
            >
              We build websites, software, mobile applications and digital
              growth solutions that help businesses move forward.
            </p>

            {/* CTA buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center lg:items-start lg:justify-start">
              <a
                href="/contact"
                className="
                  group
                  inline-flex
                  w-full
                  max-w-[320px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F65011]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  !text-white
                  shadow-[0_10px_25px_rgba(246,80,17,0.18)]
                  transition-colors
                  duration-300
                  hover:bg-[#D9430B]
                  sm:w-auto
                  sm:max-w-none
                "
              >
                Start Your Project
                <ArrowRight
                  size={17}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

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
                  size={17}
                  className="shrink-0 text-white"
                  aria-hidden="true"
                />
                Contact Form
              </a>
            </div>

            {/* Service keywords */}
            <div
              className="
                mx-auto
                mt-10
                flex
                max-w-[360px]
                flex-wrap
                items-center
                justify-center
                gap-x-3
                gap-y-2
                text-center
                text-[11px]
                font-medium
                leading-5
                text-[#98A2B3]
                sm:max-w-xl
                sm:gap-x-4
                sm:text-xs
                lg:mx-0
                lg:max-w-none
                lg:justify-start
                lg:text-left
              "
            >
              <span>Software Development</span>

              <span className="h-1 w-1 rounded-full bg-[#F65011]" />

              <span>Web Development</span>

              <span className="h-1 w-1 rounded-full bg-[#F65011]" />

              <span>Mobile Development</span>

              <span className="h-1 w-1 rounded-full bg-[#F65011]" />

              <span>Digital Marketing</span>
            </div>
          </div>

          {/* RIGHT PROCESS CARD */}
          <div className="mx-auto w-full max-w-xl">
            <div
              className="
                h-[500px]
                overflow-hidden
                rounded-[28px]
                border
                border-[#E4E7EC]
                bg-white
                p-4
                shadow-[0_25px_80px_rgba(16,24,40,0.10)]
                sm:h-[620px]
                sm:p-6
                lg:h-[580px]
                lg:p-7
              "
            >
              <div className="relative flex h-full flex-col">
                {/* Card header */}
                <div className="flex shrink-0 items-start justify-between gap-3 sm:gap-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#667085] sm:text-xs">
                      Our Approach
                    </p>

                    <h2 className="mt-1 text-xl font-extrabold tracking-tight text-[#101828] sm:text-2xl">
                      Idea <span className="text-[#F65011]">→</span> Product
                    </h2>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F65011]/10 text-sm font-extrabold text-[#F65011] sm:h-11 sm:w-11">
                    {active.number}
                  </div>
                </div>

                {/* Active step */}
                <div className="mt-4 h-[104px] shrink-0 rounded-2xl bg-[#101828] p-4 text-white sm:mt-5 sm:h-[118px] sm:p-5">
                  <div className="flex h-full items-start gap-3 sm:gap-4">
                    <span className="mt-0.5 shrink-0 text-[11px] font-bold text-[#F65011] sm:text-xs">
                      {active.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-lg font-extrabold sm:text-xl">
                        {active.title}
                      </p>

                      <p className="mt-1.5 max-w-[250px] text-[12px] leading-5 text-white/60 sm:mt-2 sm:max-w-none sm:text-sm sm:leading-6">
                        {active.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Process steps */}
                <div className="mt-3 shrink-0 space-y-1 sm:mt-4">
                  {processSteps.map((step, index) => {
                    const isActive = activeStep === index;

                    return (
                      <button
                        key={step.number}
                        type="button"
                        onMouseEnter={() => setActiveStep(index)}
                        onFocus={() => setActiveStep(index)}
                        onClick={() => setActiveStep(index)}
                        aria-pressed={isActive}
                        className={`
                          group
                          flex
                          h-9
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          border
                          px-3
                          text-left
                          transition-colors
                          duration-200
                          sm:h-11
                          sm:gap-4
                          sm:px-4
                          ${
                            isActive
                              ? "border-transparent bg-[#F65011]/5"
                              : "border-transparent hover:bg-[#F8FAFC]"
                          }
                        `}
                      >
                        <span
                          className={`
                            w-7
                            shrink-0
                            text-[11px]
                            font-bold
                            sm:w-8
                            sm:text-xs
                            ${isActive ? "text-[#F65011]" : "text-[#98A2B3]"}
                          `}
                        >
                          {step.number}
                        </span>

                        <span
                          className={`
                            min-w-0
                            flex-1
                            truncate
                            text-[13px]
                            font-bold
                            sm:text-sm
                            ${isActive ? "text-[#101828]" : "text-[#667085]"}
                          `}
                        >
                          {step.title}
                        </span>

                        <ArrowRight
                          size={15}
                          className={`
                            shrink-0
                            transition-colors
                            duration-200
                            sm:h-4
                            sm:w-4
                            ${
                              isActive
                                ? "text-[#F65011]"
                                : "text-transparent group-hover:text-[#D0D5DD]"
                            }
                          `}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-auto shrink-0 border-t border-[#E4E7EC] pt-3 sm:pt-4">
                  <p className="max-w-xl text-[11px] leading-5 text-[#667085] sm:text-xs">
                    From an idea in your mind to a product in the hands of your
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
