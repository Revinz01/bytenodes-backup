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

  // Navigate to specific card
  const navigateToCard = useCallback((index: number) => {
    if (!scrollTriggerRef.current || !containerRef.current) return;
    
    const clampedIndex = Math.max(0, Math.min(index, services.length - 1));
    const targetProgress = clampedIndex / (services.length - 1);
    
    // Calculate the scroll position
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

    // Dynamic card sizing
    const getCardWidth = () => {
      if (typeof window === "undefined") return 380;
      if (window.innerWidth < 640) return 300;
      if (window.innerWidth < 1024) return 340;
      return 400;
    };

    const getGap = () => {
      if (typeof window === "undefined") return 24;
      if (window.innerWidth < 640) return 16;
      return 32;
    };

    const ctx = gsap.context(() => {
      const cardWidth = getCardWidth();
      const gap = getGap();
      const totalWidth = services.length * (cardWidth + gap) - gap;
      const viewportWidth = window.innerWidth;
      const padding = window.innerWidth < 640 ? 20 : 80;
      const xAmount = Math.min(0, -(totalWidth - viewportWidth + padding * 2));

      // Title entrance with split text effect
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Main horizontal scroll trigger
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${Math.abs(xAmount) + viewportWidth}`,
        scrub: 0.8,
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

          // Animate track position
          gsap.set(trackRef.current, { x: xAmount * self.progress });
        },
      });

      scrollTriggerRef.current = st;

      // Individual card animations based on scroll progress
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Set initial state
        gsap.set(card, {
          opacity: 0.4,
          scale: 0.92,
          rotateY: 6,
          filter: "blur(2px)",
        });
      });

    }, containerRef);

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update card styles based on scroll progress
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      
      const cardProgress = i / (services.length - 1);
      const distanceFromActive = Math.abs(scrollProgress - cardProgress);
      const isActive = distanceFromActive < 0.15;
      const isNearby = distanceFromActive < 0.3;
      
      gsap.to(card, {
        opacity: isActive ? 1 : isNearby ? 0.7 : 0.4,
        scale: isActive ? 1 : isNearby ? 0.96 : 0.92,
        rotateY: isActive ? 0 : (scrollProgress > cardProgress ? 6 : -6),
        filter: isActive ? "blur(0px)" : isNearby ? "blur(1px)" : "blur(2px)",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [scrollProgress]);

  return (
    <section className="bg-background overflow-hidden relative">
      {/* Section label */}
      <div ref={titleRef} className="text-center py-20 md:py-24 px-4">
        <p className="text-sm text-primary uppercase tracking-widest font-semibold mb-3">Solutions</p>
        <h2 className="text-3xl md:text-5xl font-black text-foreground text-balance">
          Semua yang Anda Butuhkan,{" "}
          <span className="text-primary">Dalam Satu Platform</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-balance">
          Jelajahi layanan hosting kami dengan scroll atau gunakan navigasi di bawah.
        </p>
      </div>

      {/* Navigation controls */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center justify-between">
          {/* Progress indicator */}
          <div className="flex items-center gap-3">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => navigateToCard(i)}
                className="group relative"
                aria-label={`Go to ${service.title}`}
              >
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 border"
                  style={{ 
                    background: activeIndex === i ? `${service.accent}20` : "transparent",
                    borderColor: activeIndex === i ? service.accent : "hsl(var(--border))",
                    transform: activeIndex === i ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <service.icon 
                    className="w-5 h-5 transition-colors duration-300" 
                    style={{ color: activeIndex === i ? service.accent : "hsl(var(--muted-foreground))" }}
                    aria-hidden="true"
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Arrow navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateToCard(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateToCard(activeIndex + 1)}
              disabled={activeIndex === services.length - 1}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 h-1 bg-border rounded-full overflow-hidden">
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
          className="flex items-stretch gap-4 md:gap-8 px-5 md:px-20 pb-24 pt-8"
          style={{ width: "max-content", perspective: "1200px" }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`relative rounded-3xl border border-border/50 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden will-change-transform group cursor-pointer`}
              style={{ 
                width: "clamp(300px, 30vw, 400px)", 
                minHeight: 520,
                transformStyle: "preserve-3d",
              }}
              onMouseEnter={() => setIsHovering(i)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ 
                  boxShadow: `inset 0 0 60px ${service.accent}15, 0 0 40px ${service.accent}10`,
                }}
              />

              {/* Top badge */}
              <div
                className="absolute top-5 right-5 text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm"
                style={{ 
                  color: service.accent, 
                  borderColor: `${service.accent}40`, 
                  background: `${service.accent}15`,
                }}
              >
                Starting {service.priceUsd}/mo
              </div>

              {/* Icon with animated background */}
              <div className="p-8 pb-0">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.accent}25, ${service.accent}10)`, 
                      border: `1px solid ${service.accent}35`,
                    }}
                  >
                    <service.icon 
                      className="w-8 h-8 transition-transform duration-500 group-hover:scale-110" 
                      style={{ color: service.accent }} 
                      aria-hidden="true" 
                    />
                  </div>
                  {/* Animated ring on hover */}
                  {isHovering === i && (
                    <div 
                      className="absolute inset-0 rounded-2xl animate-ping"
                      style={{ border: `2px solid ${service.accent}30` }}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-black text-foreground mt-5">{service.title}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-5">{service.tagline}</p>
              </div>

              {/* Price section */}
              <div className="px-8">
                <div className="border-t border-border/30 pt-5 mb-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mulai dari</p>
                  <p className="text-3xl font-black transition-transform duration-300 group-hover:scale-105 origin-left" style={{ color: service.accent }}>
                    {service.startingPrice}
                    <span className="text-sm font-normal text-muted-foreground">/bulan</span>
                  </p>
                </div>
              </div>

              {/* Features with stagger animation on hover */}
              <div className="px-8 flex-1">
                <ul className="space-y-2.5">
                  {service.features.map((feature, fi) => (
                    <li 
                      key={fi} 
                      className="flex items-center gap-2.5 text-sm text-muted-foreground transition-all duration-300"
                      style={{
                        transform: isHovering === i ? "translateX(4px)" : "translateX(0)",
                        transitionDelay: `${fi * 50}ms`,
                      }}
                    >
                      <HardDrive 
                        className="w-4 h-4 flex-shrink-0 transition-colors duration-300" 
                        style={{ color: isHovering === i ? service.accent : "hsl(var(--muted-foreground))" }} 
                        aria-hidden="true" 
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="p-8 pt-6">
                <Link href={service.link}>
                  <Button
                    variant="outline"
                    className="w-full rounded-xl font-semibold group/btn transition-all duration-300 h-12"
                    style={{
                      borderColor: `${service.accent}50`,
                      color: service.accent,
                      background: isHovering === i ? `${service.accent}10` : "transparent",
                    }}
                  >
                    Lihat Paket
                    <ArrowRight 
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" 
                      aria-hidden="true" 
                    />
                  </Button>
                </Link>
              </div>

              {/* Bottom accent line with animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
                <div
                  className="h-full transition-transform duration-500"
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
                    transform: isHovering === i ? "scaleX(1)" : "scaleX(0.5)",
                  }}
                />
              </div>

              {/* Card number indicator */}
              <div className="absolute bottom-4 right-4 text-6xl font-black opacity-5 select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-muted-foreground/50 text-sm">
          <ChevronLeft className="w-4 h-4 animate-pulse" />
          <span>Scroll untuk menjelajahi</span>
          <ChevronRight className="w-4 h-4 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
