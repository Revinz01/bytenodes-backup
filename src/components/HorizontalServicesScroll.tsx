"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Server, Globe, Bot, Gamepad2, HardDrive, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
    features: ["Minecraft, FiveM, Rust & more", "Pterodactyl Panel", "DDoS Protection", "Auto Backup", "Singapore Location"],
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
    features: ["AMD EPYC Processors", "NVMe SSD Storage", "Full Root Access", "Custom Specs", "DDoS Protection"],
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
    features: ["NVMe SSD Storage", "Free SSL Certificate", "Cloudflare Tunnel", "PHP & Node.js Support", "Auto Backup"],
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
    features: ["24/7 Uptime", "Auto Restart", "Multiple Instances", "Database Support", "Free SSL"],
  },
];

export const HorizontalServicesScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navigate to specific card
  const navigateToCard = useCallback((index: number) => {
    if (!scrollTriggerRef.current || !containerRef.current) return;
    
    const clampedIndex = Math.max(0, Math.min(index, services.length - 1));
    const targetProgress = clampedIndex / (services.length - 1);
    
    const scrollStart = scrollTriggerRef.current.start;
    const scrollEnd = scrollTriggerRef.current.end;
    const targetScroll = scrollStart + (scrollEnd - scrollStart) * targetProgress;
    
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

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const getCardWidth = () => {
      if (typeof window === "undefined") return 340;
      if (window.innerWidth < 480) return 280;
      if (window.innerWidth < 640) return 300;
      if (window.innerWidth < 1024) return 340;
      return 380;
    };

    const getGap = () => {
      if (typeof window === "undefined") return 24;
      if (window.innerWidth < 640) return 12;
      if (window.innerWidth < 1024) return 20;
      return 28;
    };

    const ctx = gsap.context(() => {
      const cardWidth = getCardWidth();
      const gap = getGap();
      const totalWidth = services.length * (cardWidth + gap) - gap;
      const viewportWidth = window.innerWidth;
      const padding = window.innerWidth < 640 ? 16 : 60;
      const xAmount = Math.min(0, -(totalWidth - viewportWidth + padding * 2));

      // Title entrance
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Main horizontal scroll
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${Math.abs(xAmount) + viewportWidth * 0.5}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          const newIndex = Math.min(
            Math.round(self.progress * (services.length - 1)),
            services.length - 1
          );
          setActiveIndex(newIndex);
          gsap.set(trackRef.current, { x: xAmount * self.progress });
        },
      });

      scrollTriggerRef.current = st;

      // Initial card states
      cardRefs.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, {
          opacity: 0.4,
          scale: 0.94,
          rotateY: 4,
          filter: "blur(1px)",
        });
      });

    }, containerRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update card styles based on scroll
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      
      const cardProgress = i / (services.length - 1);
      const distanceFromActive = Math.abs(scrollProgress - cardProgress);
      const isActive = distanceFromActive < 0.15;
      const isNearby = distanceFromActive < 0.3;
      
      gsap.to(card, {
        opacity: isActive ? 1 : isNearby ? 0.7 : 0.45,
        scale: isActive ? 1 : isNearby ? 0.97 : 0.94,
        rotateY: isActive ? 0 : (scrollProgress > cardProgress ? 4 : -4),
        filter: isActive ? "blur(0px)" : isNearby ? "blur(0.5px)" : "blur(1px)",
        duration: 0.35,
        ease: "power2.out",
      });
    });
  }, [scrollProgress]);

  return (
    <section className="bg-background overflow-hidden relative">
      {/* Section header */}
      <div ref={titleRef} className="text-center py-12 md:py-20 px-4">
        <p className="text-xs md:text-sm text-primary uppercase tracking-widest font-semibold mb-2 md:mb-3">Solutions</p>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground text-balance">
          Semua yang Anda Butuhkan,{" "}
          <span className="text-primary">Dalam Satu Platform</span>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-xl mx-auto text-balance">
          Jelajahi layanan hosting kami dengan scroll atau gunakan navigasi di bawah.
        </p>
      </div>

      {/* Navigation controls */}
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <div className="flex items-center justify-between gap-4">
          {/* Service icons - scrollable on mobile */}
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => navigateToCard(i)}
                className="group relative flex-shrink-0"
                aria-label={`Go to ${service.title}`}
              >
                <div 
                  className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300 border"
                  style={{ 
                    background: activeIndex === i ? `${service.accent}20` : "transparent",
                    borderColor: activeIndex === i ? service.accent : "hsl(var(--border))",
                    transform: activeIndex === i ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <service.icon 
                    className="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300" 
                    style={{ color: activeIndex === i ? service.accent : "hsl(var(--muted-foreground))" }}
                    aria-hidden="true"
                  />
                </div>
                {/* Tooltip - hidden on mobile */}
                <span className="hidden md:block absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-1.5 md:gap-2 flex-shrink-0">
            <button
              onClick={() => navigateToCard(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={() => navigateToCard(activeIndex + 1)}
              disabled={activeIndex === services.length - 1}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 md:mt-6 h-1 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative min-h-screen">
        <div
          ref={trackRef}
          className="flex items-stretch gap-3 md:gap-7 px-4 md:px-16 pb-20 md:pb-24 pt-4 md:pt-8"
          style={{ width: "max-content", perspective: "1200px" }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`relative rounded-2xl md:rounded-3xl border border-border/50 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden will-change-transform group cursor-pointer`}
              style={{ 
                width: isMobile ? "280px" : "clamp(300px, 28vw, 380px)", 
                minHeight: isMobile ? 420 : 500,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setIsHovering(i)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Hover glow */}
              <div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 50px ${service.accent}15, 0 0 30px ${service.accent}10`,
                }}
              />

              {/* Price badge */}
              <div
                className="absolute top-4 md:top-5 right-4 md:right-5 text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full border backdrop-blur-sm"
                style={{ 
                  color: service.accent, 
                  borderColor: `${service.accent}40`, 
                  background: `${service.accent}15`,
                }}
              >
                From {service.priceUsd}/mo
              </div>

              {/* Icon */}
              <div className="p-5 md:p-7 pb-0">
                <div className="relative">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.accent}25, ${service.accent}10)`, 
                      border: `1px solid ${service.accent}35`,
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
                      className="absolute inset-0 rounded-xl md:rounded-2xl animate-ping"
                      style={{ border: `2px solid ${service.accent}30` }}
                    />
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-foreground mt-4 md:mt-5">{service.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 mb-4 md:mb-5">{service.tagline}</p>
              </div>

              {/* Price */}
              <div className="px-5 md:px-7">
                <div className="border-t border-border/30 pt-4 md:pt-5 mb-4 md:mb-5">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">Mulai dari</p>
                  <p className="text-2xl md:text-3xl font-black transition-transform duration-300 group-hover:scale-105 origin-left" style={{ color: service.accent }}>
                    {service.startingPrice}
                    <span className="text-xs md:text-sm font-normal text-muted-foreground">/bulan</span>
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="px-5 md:px-7 flex-1">
                <ul className="space-y-1.5 md:space-y-2">
                  {service.features.slice(0, isMobile ? 4 : 5).map((feature, fi) => (
                    <li 
                      key={fi} 
                      className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground transition-all duration-300"
                      style={{
                        transform: isHovering === i ? "translateX(4px)" : "translateX(0)",
                        transitionDelay: `${fi * 40}ms`,
                      }}
                    >
                      <HardDrive 
                        className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 transition-colors duration-300" 
                        style={{ color: isHovering === i ? service.accent : "hsl(var(--muted-foreground))" }} 
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
                    className="w-full rounded-lg md:rounded-xl font-semibold group/btn transition-all duration-300 h-10 md:h-11 text-sm"
                    style={{
                      borderColor: `${service.accent}50`,
                      color: service.accent,
                      background: isHovering === i ? `${service.accent}10` : "transparent",
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

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 md:h-1 overflow-hidden">
                <div
                  className="h-full transition-transform duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                    transform: isHovering === i ? "scaleX(1)" : "scaleX(0.5)",
                  }}
                />
              </div>

              {/* Card number */}
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-4xl md:text-5xl font-black opacity-5 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground/50 text-xs md:text-sm">
          <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
          <span>Scroll untuk menjelajahi</span>
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
