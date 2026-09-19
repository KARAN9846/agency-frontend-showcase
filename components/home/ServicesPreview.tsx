"use client";

import Image from "next/image";
import Link from "next/link";
import type { TouchEvent } from "react";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export function ServicesPreview() {
  const [activeService, setActiveService] = useState(0);

  const active = services[activeService];

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    event.currentTarget.dataset.touchStartX = String(touch.clientX);
    event.currentTarget.dataset.touchStartY = String(touch.clientY);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const startX = Number(event.currentTarget.dataset.touchStartX);
    const startY = Number(event.currentTarget.dataset.touchStartY);

    if (!Number.isFinite(startX) || !Number.isFinite(startY)) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // Ignore vertical swipes so normal page scrolling remains untouched.
    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  const goToPrevious = () => {
    setActiveService((current) =>
      current === 0 ? services.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveService((current) =>
      current === services.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="border-t border-[#E4E7EC] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F65011] sm:text-sm">
            What We Build
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] text-[#101828] sm:text-5xl">
            Technology that moves
            <br />
            <span className="text-[#F65011]">businesses forward.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#667085] sm:text-base lg:mx-0">
            From business software to digital experiences and growth strategies,
            we help turn business requirements into practical digital solutions.
          </p>
        </div>

        {/* =========================================================
            DESKTOP SERVICES LAYOUT
            Hover changes the preview, click opens the service page.
        ========================================================== */}
        <div className="mt-10 hidden gap-6 lg:mt-14 lg:grid lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
          {/* Service Selector */}
          <div className="space-y-2">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <Link
                  key={service.number}
                  href={service.href}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  aria-label={`View ${service.title}`}
                  className={`group relative flex min-h-[72px] w-full items-center rounded-2xl border px-5 py-3.5 pr-12 text-left transition-[border-color,background-color,box-shadow] duration-200 ${
                    isActive
                      ? "border-[#F65011]/20 bg-white shadow-[0_12px_35px_rgba(16,24,40,0.06)]"
                      : "border-transparent bg-transparent hover:border-[#E4E7EC] hover:bg-white"
                  }`}
                >
                  <span
                    className={`mr-4 shrink-0 text-xs font-bold ${
                      isActive ? "text-[#F65011]" : "text-[#98A2B3]"
                    }`}
                  >
                    {service.number}
                  </span>

                  <span
                    className={`min-w-0 flex-1 text-lg font-bold leading-5 ${
                      isActive ? "text-[#101828]" : "text-[#667085]"
                    }`}
                  >
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
                      isActive
                        ? "text-[#F65011]"
                        : "text-[#D0D5DD] group-hover:translate-x-0.5 group-hover:-translate-y-[3px] group-hover:text-[#F65011]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Image + Information Card */}
          <div className="overflow-hidden rounded-[28px] border border-[#E4E7EC] bg-[#101828] text-white shadow-[0_24px_70px_rgba(16,24,40,0.10)]">
            <div className="group relative h-[260px] overflow-hidden rounded-t-[28px] bg-gradient-to-br from-white via-[#F9FAFB] to-[#F3F4F6]">
              {active.image ? (
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={active.image}
                    alt={active.imageAlt ?? active.title}
                    width={800}
                    height={450}
                    priority={activeService === 0}
                    sizes="(min-width: 1024px) 700px, 100vw"
                    className="h-[86%] w-[86%] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full items-center justify-center bg-[#172033]"
                >
                  <span className="text-sm font-medium text-white/40">
                    Service image coming soon
                  </span>
                </div>
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101828]/20 via-transparent to-transparent"
              />
            </div>

            <div className="relative p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F65011]/10 blur-3xl"
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-[#F65011]">
                    {active.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                    <ArrowUpRight size={17} className="text-[#F65011]" />
                  </div>
                </div>

                <h3 className="mt-3 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight">
                  {active.title}
                </h3>

                <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/60">
                  {active.description}
                </p>

                <div className="mt-4 border-t border-white/10 pt-3.5">
                  <Link
                    href={active.href}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-white transition-colors duration-200 hover:text-[#F65011]"
                  >
                    Explore {active.title}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            TABLET + MOBILE
            One service card at a time. Arrow controls change cards.
            Tapping the card opens the service page.
        ========================================================== */}
        <div className="mt-10 lg:hidden">
          <div
            className="touch-pan-y overflow-hidden rounded-[24px] border border-[#E4E7EC] bg-[#101828] text-white shadow-[0_20px_60px_rgba(16,24,40,0.10)] sm:rounded-[28px]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Link
              href={active.href}
              aria-label={`View ${active.title}`}
              className="group block"
            >
              {/* Service Image */}
              <div className="relative h-[210px] overflow-hidden bg-gradient-to-br from-white via-[#F9FAFB] to-[#F3F4F6] sm:h-[300px]">
                {active.image ? (
                  <div className="flex h-full w-full items-center justify-center">
                    <Image
                      src={active.image}
                      alt={active.imageAlt ?? active.title}
                      width={800}
                      height={450}
                      priority={activeService === 0}
                      sizes="(min-width: 640px) 90vw, 100vw"
                      className="h-[86%] w-[86%] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full items-center justify-center bg-[#172033]"
                  >
                    <span className="text-sm font-medium text-white/40">
                      Service image coming soon
                    </span>
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101828]/15 via-transparent to-transparent"
                />
              </div>

              {/* Service Title */}
              <div className="relative p-5 sm:p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#F65011]/10 blur-3xl"
                />

                <div className="relative flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#F65011] sm:text-sm">
                      {active.number}
                    </span>

                    <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
                      {active.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5"
                  >
                    <ArrowUpRight size={18} className="text-[#F65011]" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous service"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-200 hover:border-[#F65011]/50 hover:text-[#F65011] disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowLeft size={18} />
              </button>

              <div
                className="flex items-center gap-2"
                aria-label="Service position"
              >
                {services.map((service, index) => (
                  <button
                    key={service.number}
                    type="button"
                    onClick={() => setActiveService(index)}
                    aria-label={`Show ${service.title}`}
                    aria-current={activeService === index ? "true" : undefined}
                    className={`h-1.5 rounded-full transition-all duration-200 ${
                      activeService === index
                        ? "w-6 bg-[#F65011]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Next service"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-200 hover:border-[#F65011]/50 hover:text-[#F65011] disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
