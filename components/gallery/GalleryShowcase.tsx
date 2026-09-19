"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

const lifeImages: GalleryImage[] = [
  {
    src: "/images/gallery/life-01.jpg",
    alt: "Stock workspace image showing people collaborating",
  },
  {
    src: "/images/gallery/life-02.jpg",
    alt: "Stock image of colleagues discussing ideas",
  },
  {
    src: "/images/gallery/life-03.jpg",
    alt: "Stock image of a creative group workshop",
  },
  {
    src: "/images/gallery/life-04.jpg",
    alt: "Stock image of a project discussion",
  },
  {
    src: "/images/gallery/life-05.jpg",
    alt: "Stock image of a modern shared workspace",
  },
];

const workImages: GalleryImage[] = [
  {
    src: "/images/gallery/work-01.jpg",
    alt: "Stock image of people working with laptops",
  },
  {
    src: "/images/gallery/work-02.jpg",
    alt: "Stock image of a technology workspace",
  },
  {
    src: "/images/gallery/work-03.jpg",
    alt: "Stock image of laptop-based work",
  },
  {
    src: "/images/gallery/work-04.jpg",
    alt: "Stock image of a collaborative project session",
  },
  {
    src: "/images/gallery/work-05.jpg",
    alt: "Stock image of a modern professional workspace",
  },
];

function GalleryRow({
  images,
  label,
}: {
  images: GalleryImage[];
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const loopImages = [...images, ...images, ...images];

  const getStep = () => {
    const track = trackRef.current;

    if (!track) return 0;

    const card = track.querySelector<HTMLElement>("[data-gallery-card]");

    if (!card) return 0;

    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    return card.offsetWidth + gap;
  };

  const getLoopWidth = () => {
    return getStep() * images.length;
  };

  const moveRight = () => {
    const track = trackRef.current;

    if (!track) return;

    const step = getStep();

    if (!step) return;

    track.scrollBy({
      left: step,
      behavior: "smooth",
    });
  };

  const moveLeft = () => {
    const track = trackRef.current;

    if (!track) return;

    const step = getStep();

    if (!step) return;

    track.scrollBy({
      left: -step,
      behavior: "smooth",
    });
  };

  /*
   * Restart automatic scrolling after the user
   * has stopped using the arrow controls.
   */
  const restartAutoScrollAfterDelay = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    /*
     * Stop automatic movement while the user
     * is manually controlling the gallery.
     */
    setIsAutoScrolling(false);

    if (direction === "left") {
      moveLeft();
    } else {
      moveRight();
    }

    /*
     * If the user stops clicking the arrows,
     * automatically resume after 4 seconds.
     */
    restartAutoScrollAfterDelay();
  };

  /*
   * Put the gallery in the middle copy.
   * This gives us content available in both directions.
   */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const loopWidth = getLoopWidth();

    if (loopWidth > 0) {
      track.scrollLeft = loopWidth;
    }
  }, [images.length]);

  /*
   * Desktop automatic scrolling.
   *
   * The media query prevents this animation
   * from running on mobile devices.
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const handleResponsiveChange = () => {
      const mobile = mediaQuery.matches;

      setIsMobile(mobile);

      /*
       * Mobile:
       * Never allow automatic scrolling.
       */
      if (mobile) {
        setIsAutoScrolling(false);
      } else {
        /*
         * Desktop:
         * Automatically restart scrolling when returning
         * from mobile/responsive mode.
         */
        setIsAutoScrolling(true);
      }

      /*
       * Reset animation timing whenever the viewport changes.
       * This prevents a jump caused by an old animation timestamp.
       */
      lastTimeRef.current = null;
    };

    handleResponsiveChange();

    mediaQuery.addEventListener("change", handleResponsiveChange);

    return () => {
      mediaQuery.removeEventListener("change", handleResponsiveChange);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track || isMobile || !isAutoScrolling) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = null;
      lastTimeRef.current = null;

      return;
    }

    const speed = 0.08;

    const animate = (time: number) => {
      const currentTrack = trackRef.current;

      if (!currentTrack) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      currentTrack.scrollLeft += speed * delta;

      const loopWidth = getLoopWidth();

      if (loopWidth > 0 && currentTrack.scrollLeft >= loopWidth * 2) {
        currentTrack.scrollLeft -= loopWidth;
      }

      if (loopWidth > 0 && currentTrack.scrollLeft <= 0) {
        currentTrack.scrollLeft += loopWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      animationRef.current = null;
      lastTimeRef.current = null;
    };
  }, [isAutoScrolling, isMobile, images.length]);

  /*
   * Keep the infinite loop working when the user
   * manually swipes or uses browser scrolling.
   */
  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const handleScroll = () => {
      const loopWidth = getLoopWidth();

      if (!loopWidth) return;

      if (track.scrollLeft >= loopWidth * 2) {
        track.scrollLeft -= loopWidth;
      }

      if (track.scrollLeft <= 0) {
        track.scrollLeft += loopWidth;
      }
    };

    track.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      track.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        type="button"
        onClick={() => handleArrowClick("left")}
        aria-label={`Previous ${label.toLowerCase()} photos`}
        className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#101828] shadow-[0_8px_25px_rgba(16,24,40,0.16)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#F65011] hover:bg-[#F65011] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 active:scale-95 sm:left-3 sm:h-12 sm:w-12"
      >
        <ArrowLeft size={19} strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Right arrow */}
      <button
        type="button"
        onClick={() => handleArrowClick("right")}
        aria-label={`Next ${label.toLowerCase()} photos`}
        className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#101828]/95 text-white shadow-[0_8px_25px_rgba(16,24,40,0.18)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#F65011] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F65011] focus-visible:ring-offset-2 active:scale-95 sm:right-3 sm:h-12 sm:w-12"
      >
        <ArrowRight size={19} strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Gallery track */}
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-sm:gap-4"
        aria-label={`${label} photo gallery`}
      >
        {loopImages.map((image, index) => (
          <article
            key={`${image.src}-${index}`}
            data-gallery-card
            className="group relative min-w-[calc(50%-12px)] overflow-hidden rounded-[26px] bg-white shadow-[0_12px_35px_rgba(16,24,40,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(16,24,40,0.16)] max-sm:min-w-[calc(100vw-44px)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) calc(100vw - 44px), 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101828]/20 via-transparent to-white/10 opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="pointer-events-none absolute left-0 top-0 h-1 w-20 bg-[#F65011] transition-all duration-500 group-hover:w-32" />

              <div className="pointer-events-none absolute inset-3 rounded-[20px] border border-white/0 transition-all duration-500 group-hover:border-white/25" />
            </div>
          </article>
        ))}
      </div>

      {/* Mobile swipe hint */}
      <div className="mt-4 flex items-center justify-between sm:hidden">
        <p className="text-xs text-[#98A2B3]">Swipe to explore</p>

        <div className="flex items-center gap-1">
          <span className="h-1.5 w-5 rounded-full bg-[#F65011]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D0D5DD]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#D0D5DD]" />
        </div>
      </div>
    </div>
  );
}

export default function GalleryShowcase() {
  return (
    <div className="space-y-24 sm:space-y-28">
      {/* Concept culture gallery */}
      <section aria-labelledby="concept-culture-gallery">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#F65011]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              People & Culture
            </span>
          </div>

          <h1
            id="concept-culture-gallery"
            className="font-[var(--font-manrope)] text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl lg:text-[42px]"
          >
            Agency Concept Gallery
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            Illustrative stock imagery used to present the visual direction of
            this fictional agency portfolio.
          </p>
        </div>

        <GalleryRow images={lifeImages} label="Agency concept" />
      </section>

      {/* Our Work Environment */}
      <section aria-labelledby="our-work-environment">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#F65011]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F65011]">
              Inside Our Work
            </span>
          </div>

          <h2
            id="our-work-environment"
            className="font-[var(--font-manrope)] text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl lg:text-[42px]"
          >
            Our Work Environment
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            Additional illustrative imagery showing the kind of collaborative
            workspace this interface was designed to represent.
          </p>
        </div>

        <GalleryRow images={workImages} label="Our Work Environment" />
      </section>
    </div>
  );
}
