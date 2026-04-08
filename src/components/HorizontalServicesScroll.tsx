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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
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

  // Get responsive card dimensions
  const getCardWidth = useCallback(() => {
    if (typeof window === "undefined") return 340;
    const width = window.innerWidth;
    if (width < 480) return 280;
    if (width < 640) return 300;
    if (width < 1024) return 340;
    return 400;
  }, []);

  const getGap = useCallback(() => {
    if (typeof window === "undefined") return 24;
    const width = window.innerWidth;
    if (width < 640) return 16;
    if (width < 1024) return 24;
    return 32;
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

  // Main GSAP scroll animation
  useEffect(() => {
    if (!containerRef.current || !trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cardWidth = getCardWidth();
      const gap = getGap();
      const totalWidth = services.length * cardWidth + (services.length - 1) * gap;
      const viewportWidth = window.innerWidth;
      const padding = isMobile ? 32 : 120;
      
      // Calculate scroll amount - center cards properly
      const xAmount = Math.max(0, totalWidth - viewportWidth + padding);

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
        end: () => `+=${xAmount + viewportWidth * 0.3}`,
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          
          // Calculate active index based on scroll position
          const newIndex = Math.round(progress * (services.length - 1));
          setActiveIndex(Math.min(newIndex, services.length - 1));
          
          // Move track with centered offset
          const centerOffset = isMobile ? 16 : 60;
          gsap.set(trackRef.current, { 
            x: -xAmount * progress + centerOffset,
          });

          // Update card styles based on position
          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            
            const cardProgress = i / (services.length - 1);
            const distance = Math.abs(progress - cardProgress);
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

    }, sectionRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, getCardWidth, getGap]);

  const cardWidth = getCardWidth();
  const gap = getGap();

  return (
    <section ref={sectionRef} className="bg-background relative">
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
      <div ref={containerRef} className="relative min-h-screen">
        {/* Fixed navigation controls - positioned at bottom */}
        <div 
          ref={navRef}
          className="fixed left-0 right-0 z-50 px-4 md:px-8 transition-opacity duration-300"
          style={{ 
            bottom: isMobile ? "24px" : "40px",
            opacity: scrollProgress > 0 || true ? 1 : 0,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4 bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-3 md:p-4 shadow-xl">
              {/* Service tabs */}
              <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto scrollbar-hide flex-1">
                {services.map((service, i) => (
                  <button
                    key={service.id}
                    onClick={() => navigateToCard(i)}
                    className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl transition-all duration-300 flex-shrink-0 ${
                      activeIndex === i 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                    aria-label={`Go to ${service.title}`}
                  >
                    <service.icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    <span className="text-xs md:text-sm font-medium hidden sm:inline">
                      {service.title.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrow navigation */}
              <div className="flex items-center gap-2 flex-shrink-0 border-l border-border pl-3 md:pl-4">
                <button
                  onClick={() => navigateToCard(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-xl border border-border flex items-center justify-center transition-all hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs md:text-sm font-mono text-muted-foreground min-w-[40px] text-center">
                  {activeIndex + 1}/{services.length}
                </span>
                <button
                  onClick={() => navigateToCard(activeIndex + 1)}
                  disabled={activeIndex === services.length - 1}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-xl border border-border flex items-center justify-center transition-all hover:bg-secondary hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1 bg-border/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex items-stretch pt-8 pb-40 md:pb-48"
          style={{ 
            gap: `${gap}px`,
            paddingLeft: isMobile ? "16px" : "60px",
            paddingRight: isMobile ? "16px" : "60px",
          }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`relative rounded-2xl md:rounded-3xl border border-border/60 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden will-change-transform group cursor-pointer flex-shrink-0`}
              style={{ 
                width: `${cardWidth}px`,
                minHeight: isMobile ? "440px" : "520px",
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
              <div className="p-5 md:p-7 pb-0">
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
                <h3 className="text-xl md:text-2xl font-black text-foreground mt-4 md:mt-5">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1 mb-4 md:mb-5">
                  {service.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="px-5 md:px-7">
                <div className="border-t border-border/40 pt-4 md:pt-5 mb-4 md:mb-5">
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 md:mb-1">
                    Mulai dari
                  </p>
                  <p 
                    className="text-2xl md:text-3xl font-black transition-transform duration-300 group-hover:scale-105 origin-left" 
                    style={{ color: service.accent }}
                  >
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
                        transitionDelay: `${fi * 50}ms`,
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
                    className="w-full rounded-lg md:rounded-xl font-semibold group/btn transition-all duration-300 h-10 md:h-12 text-sm"
                    style={{
                      borderColor: `${service.accent}60`,
                      color: service.accent,
                      background: isHovering === i ? `${service.accent}15` : "transparent",
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
