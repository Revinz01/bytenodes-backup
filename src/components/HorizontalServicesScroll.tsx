"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  Server,
  Globe,
  Bot,
  Gamepad2,
  HardDrive,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const getResponsiveValues = (viewportWidth: number | null) => {
  // Keep SSR and first client render deterministic to avoid hydration mismatch.
  if (viewportWidth === null) {
    return {
      isMobile: false,
      cardWidth: 340,
      gap: 24,
      trackPadding: 60,
      cardMinHeight: 520,
      navBottom: 40,
      centerOffset: 60,
    };
  }

  const isMobile = viewportWidth < 768;

  let cardWidth = 400;
  if (viewportWidth < 480) cardWidth = 260;
  else if (viewportWidth < 640) cardWidth = 280;
  else if (viewportWidth < 1024) cardWidth = 310;
  else cardWidth = 330;

  let gap = 32;
  if (viewportWidth < 640) gap = 16;
  else if (viewportWidth < 1024) gap = 24;

  return {
    isMobile,
    cardWidth,
    gap,
    trackPadding: isMobile ? 16 : 60,
    cardMinHeight: isMobile ? 400 : 450,
    navBottom: isMobile ? 10 : 18,
    centerOffset: isMobile ? 16 : 60,
  };
};

const services = [
  {
    id: "game",
    icon: Gamepad2,
    title: "Game Servers",
    tagline: "Lag-free. Always on.",
    startingPrice: "Rp 12.000",
    priceUsd: "$0.75",
    link: "/pricing/servers",
    color: "from-violet-600/20 via-violet-500/10 to-violet-900/5",
    accent: "hsl(270 70% 65%)",
    features: [
      "Minecraft, FiveM, Rust & more",
      "Pterodactyl Panel",
      "DDoS Protection",
      "Auto Backup",
      "Singapore Location",
    ],
  },
  {
    id: "vps",
    icon: Server,
    title: "VPS & Dedicated",
    tagline: "Full control. Full power.",
    startingPrice: "Rp 175.000",
    priceUsd: "$10.90",
    link: "/pricing/vps",
    color: "from-blue-600/20 via-blue-500/10 to-blue-900/5",
    accent: "hsl(217 91% 60%)",
    features: [
      "AMD EPYC Processors",
      "NVMe SSD Storage",
      "Full Root Access",
      "Custom Specs",
      "DDoS Protection",
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Hosting",
    tagline: "Fast. Secure. Affordable.",
    startingPrice: "Rp 5.000",
    priceUsd: "$0.30",
    link: "/pricing/website",
    color: "from-cyan-600/20 via-cyan-500/10 to-cyan-900/5",
    accent: "hsl(186 85% 52%)",
    features: [
      "NVMe SSD Storage",
      "Free SSL Certificate",
      "Cloudflare Tunnel",
      "PHP & Node.js Support",
      "Auto Backup",
    ],
  },
  {
    id: "bot",
    icon: Bot,
    title: "Discord Bot Hosting",
    tagline: "Always online. Zero effort.",
    startingPrice: "Rp 10.000",
    priceUsd: "$0.60",
    link: "/pricing/bot",
    color: "from-emerald-600/20 via-emerald-500/10 to-emerald-900/5",
    accent: "hsl(142 70% 50%)",
    features: [
      "24/7 Uptime",
      "Auto Restart",
      "Multiple Instances",
      "Database Support",
      "Free SSL",
    ],
  },
];

export const HorizontalServicesScroll = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const moveThresholdRef = useRef(1);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [viewportWidth, setViewportWidth] = useState<number | null>(null);
  const [isScrollReady, setIsScrollReady] = useState(false);
  const [isSectionActive, setIsSectionActive] = useState(false);

  const {
    isMobile,
    cardWidth,
    gap,
    trackPadding,
    cardMinHeight,
    navBottom,
    centerOffset,
  } = getResponsiveValues(viewportWidth);

  // Handle responsive detection
  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  // Navigate to specific card
  const navigateToCard = useCallback((index: number) => {
    if (!scrollTriggerRef.current || !containerRef.current) return;

    const clampedIndex = Math.max(0, Math.min(index, services.length - 1));
    const targetProgress =
      (clampedIndex / (services.length - 1)) * moveThresholdRef.current;

    const scrollStart = scrollTriggerRef.current.start;
    const scrollEnd = scrollTriggerRef.current.end;
    const targetScroll =
      scrollStart + (scrollEnd - scrollStart) * targetProgress;

    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: 0.8,
      ease: "power3.inOut",
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateToCard(activeIndex - 1);
      } else if (e.key === "ArrowRight") {
        navigateToCard(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, navigateToCard]);

  // Main GSAP scroll animation
  useEffect(() => {
    if (isMobile) {
      setIsScrollReady(false);
      setIsSectionActive(false);
      return;
    }
    if (!containerRef.current || !trackRef.current || !sectionRef.current)
      return;

    setIsScrollReady(false);

    const ctx = gsap.context(() => {
      const totalWidth =
        services.length * cardWidth + (services.length - 1) * gap;
      const viewportWidth = window.innerWidth;
      const padding = isMobile ? 32 : 120;

      // Calculate scroll amount - center cards properly
      const xAmount = Math.max(0, totalWidth - viewportWidth + padding);
      const transitionCount = services.length - 1;
      const extraEffortPerCard = viewportWidth * 0.22;
      const mainScrollDistance =
        xAmount + viewportWidth * 0.3 + transitionCount * extraEffortPerCard;
      const exitHoldDistance = Math.max(cardWidth, viewportWidth * 0.45);
      const totalScrollDistance = mainScrollDistance + exitHoldDistance;
      const moveThreshold = mainScrollDistance / totalScrollDistance;

      moveThresholdRef.current = moveThreshold;

      // Title entrance animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // Card entrance animations
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          opacity: 0.5,
          scale: 0.95,
          y: 20,
        });
      });

      // Main horizontal scroll with improved positioning
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalScrollDistance}`,
        scrub: 1.05,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          setIsSectionActive(self.isActive);
        },
        onUpdate: (self) => {
          const rawProgress = self.progress;
          const moveProgress = Math.min(rawProgress / moveThreshold, 1);
          setScrollProgress(rawProgress);

          // Calculate active index based on scroll position
          const newIndex = Math.round(moveProgress * (services.length - 1));
          setActiveIndex(Math.min(newIndex, services.length - 1));

          // Move track with centered offset
          gsap.set(trackRef.current, {
            x: -xAmount * moveProgress + centerOffset,
          });

          // Update card styles based on position
          cardRefs.current.forEach((card, i) => {
            if (!card) return;

            const cardProgress = i / (services.length - 1);
            const distance = Math.abs(moveProgress - cardProgress);
            const isActive = distance < 0.15;
            const isNearby = distance < 0.3;

            gsap.to(card, {
              opacity: isActive ? 1 : isNearby ? 0.75 : 0.5,
              scale: isActive ? 1 : isNearby ? 0.97 : 0.94,
              y: isActive ? 0 : 10,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
          });
        },
      });

      scrollTriggerRef.current = st;
      setIsScrollReady(true);
    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      setIsScrollReady(false);
      setIsSectionActive(false);
      moveThresholdRef.current = 1;
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, cardWidth, gap, centerOffset]);

  if (isMobile) {
    return (
      <section className="bg-background py-12 px-4">
        <div className="text-center">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">
            Solutions
          </p>
          <h2 className="text-2xl font-black text-foreground text-balance">
            Semua yang Anda Butuhkan,{" "}
            <span className="text-primary">Dalam Satu Platform</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto text-balance">
            Pilih layanan yang sesuai dengan kebutuhan Anda.
          </p>
        </div>

        <div className="container mx-auto mt-8 grid grid-cols-1 gap-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`relative rounded-2xl border border-border/60 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden group min-h-[390px]`}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: service.accent }}
              />

              <div
                className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm"
                style={{
                  color: service.accent,
                  borderColor: `${service.accent}50`,
                  background: `${service.accent}15`,
                }}
              >
                From {service.priceUsd}/mo
              </div>

              <div className="p-5 pb-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${service.accent}30, ${service.accent}10)`,
                    border: `1px solid ${service.accent}40`,
                  }}
                >
                  <service.icon
                    className="w-6 h-6"
                    style={{ color: service.accent }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-black text-foreground mt-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 mb-4">
                  {service.tagline}
                </p>
              </div>

              <div className="px-5">
                <div className="border-t border-border/40 pt-4 mb-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                    Mulai dari
                  </p>
                  <p
                    className="text-2xl font-black"
                    style={{ color: service.accent }}
                  >
                    {service.startingPrice}
                    <span className="text-xs font-normal text-muted-foreground">
                      /bulan
                    </span>
                  </p>
                </div>
              </div>

              <div className="px-5 flex-1">
                <ul className="space-y-1.5">
                  {service.features.slice(0, 4).map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <HardDrive
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: service.accent }}
                        aria-hidden="true"
                      />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 pt-4">
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full rounded-lg font-semibold h-10 text-sm"
                    style={{
                      borderColor: `${service.accent}60`,
                      color: service.accent,
                      background: "transparent",
                    }}
                  >
                    Lihat Paket
                    <ArrowRight
                      className="ml-2 w-3.5 h-3.5"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              </div>

              <div className="absolute bottom-3 right-3 text-5xl font-black opacity-[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="bg-background relative overflow-x-clip"
    >
      {/* Section header - stays at top */}
      <div ref={titleRef} className="text-center py-12 md:py-20 px-4">
        <p className="text-xs md:text-sm text-primary uppercase tracking-widest font-semibold mb-2 md:mb-3">
          Solutions
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground text-balance">
          Semua yang Anda Butuhkan,{" "}
          <span className="text-primary">Dalam Satu Platform</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-xl mx-auto text-balance">
          Jelajahi layanan hosting kami dengan scroll atau gunakan navigasi.
        </p>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="relative min-h-screen overflow-x-hidden"
      >
        {/* Fixed navigation controls - positioned at bottom */}
        <div
          ref={navRef}
          className="fixed left-0 right-0 z-50 px-4 md:px-8 transition-opacity duration-300"
          style={{
            bottom: `${navBottom}px`,
            opacity:
              viewportWidth !== null &&
              isScrollReady &&
              isSectionActive &&
              scrollProgress > 0
                ? 1
                : 0,
            pointerEvents:
              viewportWidth !== null &&
              isScrollReady &&
              isSectionActive &&
              scrollProgress > 0
                ? "auto"
                : "none",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between gap-2 md:gap-3 bg-card/70 backdrop-blur-lg border border-border rounded-xl md:rounded-2xl p-2 md:p-2.5 shadow-lg">
              {/* Service tabs */}
              <div className="flex items-center gap-1 md:gap-1.5 overflow-x-auto scrollbar-hide flex-1">
                {services.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => navigateToCard(i)}
                    className={`flex items-center gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-lg md:rounded-xl transition-all duration-300 flex-shrink-0 ${
                      activeIndex === i
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`Go to ${service.title}`}
                  >
                    <service.icon
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                      aria-hidden="true"
                    />
                    <span className="text-[11px] md:text-xs font-medium hidden md:inline">
                      {service.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrow navigation */}
              <div className="flex items-center gap-1.5 flex-shrink-0 border-l border-border pl-2 md:pl-3">
                <button
                  onClick={() => navigateToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl border border-border flex items-center justify-center transition-all hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] md:text-xs font-mono text-muted-foreground min-w-[34px] text-center">
                  {activeIndex + 1}/{services.length}
                </span>
                <button
                  onClick={() => navigateToCard(activeIndex + 1)}
                  disabled={activeIndex === services.length - 1}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-lg md:rounded-xl border border-border flex items-center justify-center transition-all hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-2 h-0.5 bg-border/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{
                  width: `${((activeIndex + 1) / services.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex min-h-screen items-center pb-16 md:pb-8"
          style={{
            gap: `${gap}px`,
            paddingLeft: `${trackPadding}px`,
            paddingRight: `${trackPadding}px`,
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={`relative rounded-2xl md:rounded-3xl border border-border/60 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden will-change-transform group cursor-pointer flex-shrink-0`}
              style={{
                width: `${cardWidth}px`,
                minHeight: `${cardMinHeight}px`,
              }}
              onMouseEnter={() => setIsHovering(i)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 60px ${service.accent}20, 0 0 40px ${service.accent}15`,
                }}
              />

              {/* Active indicator */}
              {activeIndex === i && (
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl md:rounded-t-3xl"
                  style={{ background: service.accent }}
                />
              )}

              {/* Price badge */}
              <div
                className="absolute top-4 md:top-5 right-4 md:right-5 text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border backdrop-blur-sm"
                style={{
                  color: service.accent,
                  borderColor: `${service.accent}50`,
                  background: `${service.accent}15`,
                }}
              >
                From {service.priceUsd}/mo
              </div>

              {/* Icon */}
              <div className="p-5 md:px-7 md:p-2 pb-0">
                <div className="relative">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent}30, ${service.accent}10)`,
                      border: `1px solid ${service.accent}40`,
                    }}
                  >
                    <service.icon
                      className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: service.accent }}
                      aria-hidden="true"
                    />
                  </div>
                  {isHovering === i && (
                    <div
                      className="absolute inset-0 rounded-xl md:rounded-2xl animate-ping opacity-50"
                      style={{ border: `2px solid ${service.accent}40` }}
                    />
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mt-4 md:mt-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 mb-4 md:mb-2">
                  {service.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="px-5 md:px-7">
                <div className="border-t border-border/40 pt-4 md:pt-1 mb-4 md:mb-5">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Mulai dari
                  </p>
                  <p
                    className="text-2xl md:text-3xl font-black transition-transform duration-300 group-hover:scale-105 origin-left"
                    style={{ color: service.accent }}
                  >
                    {service.startingPrice}
                    <span className="text-xs md:text-sm font-normal text-muted-foreground">
                      /bulan
                    </span>
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="px-5 md:px-7 flex-1">
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features
                    .slice(0, isMobile ? 4 : 5)
                    .map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground transition-all duration-300"
                        style={{
                          transform:
                            isHovering === i
                              ? "translateX(4px)"
                              : "translateX(0)",
                          transitionDelay: `${fi * 50}ms`,
                        }}
                      >
                        <HardDrive
                          className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 transition-colors duration-300"
                          style={{
                            color:
                              isHovering === i
                                ? service.accent
                                : "hsl(var(--muted-foreground))",
                          }}
                          aria-hidden="true"
                        />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-5 md:p-7 pt-4 md:pt-5">
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full rounded-lg md:rounded-xl font-semibold group/btn transition-all duration-300 h-10 md:h-12 text-sm"
                    style={{
                      borderColor: `${service.accent}60`,
                      color: service.accent,
                      background:
                        isHovering === i
                          ? `${service.accent}15`
                          : "transparent",
                    }}
                  >
                    Lihat Paket
                    <ArrowRight
                      className="ml-2 w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                      aria-hidden="true"
                    />
                  </Button>
                </Link>
              </div>

              {/* Card number watermark */}
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-5xl md:text-6xl font-black opacity-[0.03] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
