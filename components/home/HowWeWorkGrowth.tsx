"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const growthSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, goals and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Turn requirements into a clear roadmap and direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Shape the experience, interface and solution.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build reliable technology with quality and performance.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Test, refine and prepare the solution for launch.",
  },
  {
    number: "06",
    title: "Grow",
    description: "Continuously improve and create new opportunities.",
  },
];

/*
 * Percentage-based positions.
 * These stay consistent across desktop and mobile.
 */
const graphPositions = [
  { x: 4, y: 78 },
  { x: 21, y: 66 },
  { x: 39, y: 53 },
  { x: 57, y: 40 },
  { x: 75, y: 25 },
  { x: 92, y: 10 },
];

export function HowWeGrow() {
  const [activeStep, setActiveStep] = useState(0);

  /*
   * Automatically move through the six stages.
   * 900ms keeps the animation quick and noticeable.
   */
  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % growthSteps.length);
    }, 900);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F8FAFC] px-3 py-8 sm:px-5 sm:py-12 lg:px-6 lg:py-16">
      <Container>
        {/* =====================================================
            GROWTH SECTION
        ====================================================== */}
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            overflow-hidden
            rounded-[22px]
            bg-[#101828]
            text-white
            shadow-[0_24px_70px_rgba(16,24,40,0.12)]
            sm:rounded-[26px]
            lg:rounded-[28px]
          "
        >
          <div
            className="
              px-5
              py-7
              sm:px-8
              sm:py-9
              lg:px-10
              lg:py-10
            "
          >
            {/* =================================================
                HEADER
            ================================================== */}
            <div
              className="
                flex
                flex-col
                gap-4
                sm:gap-5
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              <div className="max-w-[650px]">
                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#F65011]
                    sm:text-xs
                  "
                >
                  How We Grow
                </p>

                <h2
                  className="
                    mt-2.5
                    text-[30px]
                    font-extrabold
                    leading-[1.04]
                    tracking-[-0.035em]
                    sm:mt-3
                    sm:text-4xl
                    lg:text-[44px]
                  "
                >
                  From idea to{" "}
                  <span className="text-[#F65011]">lasting growth.</span>
                </h2>
              </div>

              <p
                className="
                  max-w-[350px]
                  text-xs
                  leading-5
                  text-white/50
                  sm:text-sm
                  sm:leading-6
                  md:pb-1
                "
              >
                A focused process that continuously moves your business forward.
              </p>
            </div>

            {/* =================================================
                GRAPH PANEL
            ================================================== */}
            <div
              className="
                mt-6
                rounded-[18px]
                border
                border-white/[0.08]
                bg-[#111C30]
                px-3.5
                py-4
                sm:mt-7
                sm:rounded-[22px]
                sm:px-6
                sm:py-6
              "
            >
              {/* =================================================
                  GRAPH
              ================================================== */}
              <div
                className="
                  relative
                  h-[235px]
                  w-full
                  sm:h-[250px]
                  lg:h-[260px]
                "
              >
                {/* ---------------------------------------------
                    SUBTLE HORIZONTAL GRID
                ---------------------------------------------- */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-2
                    bottom-[54px]
                  "
                >
                  <div className="absolute inset-x-0 top-0 border-t border-white/[0.035]" />

                  <div className="absolute inset-x-0 top-1/3 border-t border-white/[0.035]" />

                  <div className="absolute inset-x-0 top-2/3 border-t border-white/[0.035]" />

                  <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.045]" />
                </div>

                {/* ---------------------------------------------
                    VERTICAL GUIDES
                ---------------------------------------------- */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-2
                    bottom-[54px]
                    flex
                    justify-between
                    px-[5%]
                  "
                >
                  {growthSteps.map((step, index) => (
                    <div
                      key={step.number}
                      className={`
                        h-full
                        border-l
                        transition-colors
                        duration-300
                        ${
                          index <= activeStep
                            ? "border-[#F65011]/10"
                            : "border-white/[0.025]"
                        }
                      `}
                    />
                  ))}
                </div>

                {/* ---------------------------------------------
                    GROWTH SVG
                ---------------------------------------------- */}
                <svg
                  viewBox="0 0 1000 300"
                  preserveAspectRatio="none"
                  className="
                    pointer-events-none
                    absolute
                    inset-x-[3%]
                    top-2
                    h-[158px]
                    w-[94%]
                    sm:h-[178px]
                    lg:h-[185px]
                  "
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="growthGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#F65011"
                        stopOpacity="0.16"
                      />

                      <stop offset="100%" stopColor="#F65011" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area under curve */}
                  <path
                    d="
                      M 40 245
                      C 135 238, 185 228, 210 220
                      C 285 207, 345 192, 390 178
                      C 465 161, 525 147, 570 130
                      C 645 112, 705 94, 750 76
                      C 820 57, 875 40, 920 25
                      L 920 245
                      L 40 245
                      Z
                    "
                    fill="url(#growthGradient)"
                    opacity="0.3"
                  />

                  {/* Main growth curve */}
                  <path
                    d="
                      M 40 245
                      C 135 238, 185 228, 210 220
                      C 285 207, 345 192, 390 178
                      C 465 161, 525 147, 570 130
                      C 645 112, 705 94, 750 76
                      C 820 57, 875 40, 920 25
                    "
                    fill="none"
                    stroke="#F65011"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_7px_rgba(246,80,17,0.42)]"
                  />
                </svg>

                {/* ---------------------------------------------
                    GRAPH POINTS
                ---------------------------------------------- */}
                <div
                  className="
                    absolute
                    inset-x-[3%]
                    top-2
                    bottom-[54px]
                  "
                >
                  {growthSteps.map((step, index) => {
                    const position = graphPositions[index];

                    const isActive = index === activeStep;
                    const isPast = index < activeStep;

                    return (
                      <div
                        key={step.number}
                        className="
                          absolute
                          -translate-x-1/2
                          -translate-y-1/2
                        "
                        style={{
                          left: `${position.x}%`,
                          top: `${position.y}%`,
                        }}
                      >
                        {/* Active glow */}
                        <div
                          className={`
                            pointer-events-none
                            absolute
                            inset-[-12px]
                            rounded-full
                            bg-[#F65011]/25
                            blur-xl
                            transition-all
                            duration-300
                            ${
                              isActive
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0"
                            }
                          `}
                        />

                        {/* Point */}
                        <div
                          className={`
                            relative
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-300
                            sm:h-9
                            sm:w-9
                            ${
                              isActive
                                ? `
                                  scale-110
                                  border-[#F65011]
                                  bg-[#F65011]
                                  shadow-[0_0_24px_rgba(246,80,17,0.55)]
                                `
                                : isPast
                                  ? `
                                    border-[#F65011]/70
                                    bg-[#101828]
                                  `
                                  : `
                                    border-[#F65011]/45
                                    bg-[#101828]
                                  `
                            }
                          `}
                        >
                          <div
                            className={`
                              h-1.5
                              w-1.5
                              rounded-full
                              transition-all
                              duration-300
                              sm:h-2
                              sm:w-2
                              ${isActive ? "bg-white" : "bg-[#F65011]"}
                            `}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ---------------------------------------------
                    GROWTH LABEL
                ---------------------------------------------- */}
                {/* ---------------------------------------------
    GROWTH LABEL
---------------------------------------------- */}
                <div
                  className="
    pointer-events-none
    absolute
    left-[68%]
    top-0
    z-30
    text-left
    sm:left-[72%]
    lg:left-[76%]
  "
                >
                  <span
                    className="
      block
      text-[7px]
      font-bold
      uppercase
      leading-none
      tracking-[0.16em]
      text-white/35
      sm:text-[9px]
    "
                  >
                    Growth
                  </span>

                  <span
                    className="
      mt-1
      inline-flex
      items-center
      gap-0.5
      text-[8px]
      font-bold
      leading-none
      text-[#F65011]
      sm:text-[10px]
    "
                  >
                    Forward
                    <ArrowUpRight
                      size={10}
                      className="sm:h-[11px] sm:w-[11px]"
                    />
                  </span>
                </div>
                {/* ---------------------------------------------
                    STEP NUMBERS / LABELS
                    No descriptions / no progress bars
                ---------------------------------------------- */}
                <div
                  className="
                    absolute
                    inset-x-[2%]
                    bottom-0
                    grid
                    grid-cols-6
                    items-start
                  "
                >
                  {growthSteps.map((step, index) => {
                    const isActive = index === activeStep;

                    return (
                      <div
                        key={step.number}
                        className="
                          flex
                          min-w-0
                          flex-col
                          items-center
                          text-center
                        "
                      >
                        {/* Number */}
                        <span
                          className={`
                            text-[9px]
                            font-bold
                            tracking-[0.05em]
                            transition-colors
                            duration-300
                            sm:text-[11px]
                            ${isActive ? "text-[#F65011]" : "text-white/30"}
                          `}
                        >
                          {step.number}
                        </span>

                        {/* Stage title */}
                        <span
                          className={`
                            mt-1
                            max-w-full
                            whitespace-nowrap
                            text-[8px]
                            font-bold
                            leading-none
                            transition-colors
                            duration-300
                            sm:text-[11px]
                            ${isActive ? "text-white" : "text-white/40"}
                          `}
                        >
                          {step.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
