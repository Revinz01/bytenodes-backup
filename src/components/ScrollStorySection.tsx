"use client";

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  Zap,
  HeadphonesIcon,
  TrendingUp,
  Lock,
  Cpu,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    index: "01",
    icon: Shield,
    title: "Keamanan Enterprise",
    description:
      "Perlindungan DDoS canggih hingga 1 Tbps secara otomatis memblokir serangan sebelum menyentuh server Anda. SSL gratis disertakan di setiap paket.",
    accent: "hsl(217 91% 60%)",
    visual: {
      primary: "from-blue-500/30 to-blue-900/10",
      shapes: [
        "top-8 left-8 w-20 md:w-24 h-20 md:h-24",
        "bottom-8 right-8 w-14 md:w-16 h-14 md:h-16",
      ],
    },
  },
  {
    index: "02",
    icon: Cpu,
    title: "Performa Ekstrem",
    description:
      "Prosesor AMD EPYC generasi terbaru dengan NVMe SSD enterprise. Dapatkan performa maksimal untuk game server, website, dan aplikasi Anda.",
    accent: "hsl(180 70% 50%)",
    visual: {
      primary: "from-cyan-500/30 to-cyan-900/10",
      shapes: [
        "top-4 right-4 w-24 md:w-28 h-24 md:h-28",
        "bottom-12 left-6 w-16 md:w-20 h-16 md:h-20",
      ],
    },
  },
  {
    index: "03",
    icon: HeadphonesIcon,
    title: "Support 24/7",
    description:
      "Tim teknisi kami siap membantu kapan saja via Discord dan tiket. Rata-rata waktu respons di bawah 5 menit untuk setiap pertanyaan Anda.",
    accent: "hsl(142 70% 50%)",
    visual: {
      primary: "from-emerald-500/30 to-emerald-900/10",
      shapes: [
        "top-6 left-12 w-16 md:w-20 h-16 md:h-20",
        "bottom-4 right-10 w-20 md:w-24 h-20 md:h-24",
      ],
    },
  },
  {
    index: "04",
    icon: TrendingUp,
    title: "Skalabilitas Instan",
    description:
      "Upgrade resource CPU, RAM, dan storage kapan saja tanpa downtime. Infrastruktur cloud yang tumbuh seiring kebutuhan bisnis Anda.",
    accent: "hsl(280 70% 65%)",
    visual: {
      primary: "from-purple-500/30 to-purple-900/10",
      shapes: [
        "top-10 right-6 w-16 md:w-20 h-16 md:h-20",
        "bottom-6 left-8 w-12 md:w-16 h-12 md:h-16",
      ],
    },
  },
  {
    index: "05",
    icon: Lock,
    title: "Backup Otomatis",
    description:
      "Data Anda dilindungi dengan backup harian otomatis. Restore dengan satu klik kapan saja, pastikan bisnis Anda tidak pernah kehilangan data.",
    accent: "hsl(30 90% 60%)",
    visual: {
      primary: "from-orange-500/30 to-orange-900/10",
      shapes: [
        "top-4 left-4 w-20 md:w-24 h-20 md:h-24",
        "bottom-8 right-8 w-14 md:w-18 h-14 md:h-18",
      ],
    },
  },
];

export const ScrollStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    if (isMobile) return;
    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const totalSteps = STEPS.length;

      // Set initial states - ensure clean state
      stepRefs.current.forEach((step, i) => {
        if (step) {
          gsap.set(step, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 40,
            filter: i === 0 ? "blur(0px)" : "blur(4px)",
            visibility: "visible",
            immediateRender: true,
          });
        }
      });

      visualRefs.current.forEach((visual, i) => {
        if (visual) {
          gsap.set(visual, {
            opacity: i === 0 ? 1 : 0,
            scale: i === 0 ? 1 : 0.88,
            rotateY: i === 0 ? 0 : -12,
            visibility: "visible",
            immediateRender: true,
          });
        }
      });

      // Master scroll trigger for progress and index tracking
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          // Update progress bar
          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: self.progress });
          }
          // Calculate active step
          const newIndex = Math.min(
            Math.floor(self.progress * totalSteps),
            totalSteps - 1,
          );
          setActiveIndex((prev) => (prev === newIndex ? prev : newIndex));
        },
      });

      // Create individual step transitions
      STEPS.forEach((_, i) => {
        const step = stepRefs.current[i];
        const visual = visualRefs.current[i];
        const prevStep = i > 0 ? stepRefs.current[i - 1] : null;
        const prevVisual = i > 0 ? visualRefs.current[i - 1] : null;

        if (!step || !visual) return;

        // Entry trigger for each step (skip first - already visible)
        if (i > 0) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: `${(i / totalSteps) * 100}% top`,
            end: `${((i + 0.3) / totalSteps) * 100}% top`,
            scrub: 0.6,
            onUpdate: (self) => {
              const progress = self.progress;

              // Fade in current
              gsap.set(step, {
                opacity: progress,
                y: 40 * (1 - progress),
                filter: `blur(${4 * (1 - progress)}px)`,
              });

              gsap.set(visual, {
                opacity: progress,
                scale: 0.88 + 0.12 * progress,
                rotateY: -12 * (1 - progress),
              });

              // Fade out previous
              if (prevStep && prevVisual) {
                gsap.set(prevStep, {
                  opacity: 1 - progress,
                  y: -30 * progress,
                  filter: `blur(${4 * progress}px)`,
                });
                gsap.set(prevVisual, {
                  opacity: 1 - progress,
                  scale: 1 - 0.1 * progress,
                  rotateY: 12 * progress,
                });
              }
            },
          });
        }
      });

      // Title animations
      gsap.from(".story-section-title", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="relative bg-background py-12 px-4 overflow-x-clip">
        <div className="text-center mb-8">
          <p className="text-xs text-primary uppercase tracking-widest font-semibold mb-2">
            Mengapa ByteNodes
          </p>
          <h2 className="text-3xl font-black text-foreground text-balance">
            Infrastruktur yang{" "}
            <span className="text-primary">Bicara Sendiri</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto text-balance">
            Ringkasan keunggulan layanan kami.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className={`rounded-2xl border border-primary/20 bg-gradient-to-br ${step.visual.primary} backdrop-blur-sm p-5`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${step.accent}22` }}
                >
                  <step.icon
                    className="w-5 h-5"
                    style={{ color: step.accent }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-mono"
                    style={{ color: `${step.accent}` }}
                  >
                    {step.index}
                  </p>
                  <h3 className="text-xl font-black text-foreground">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="relative h-24 rounded-xl border border-primary/20 overflow-hidden">
                {step.visual.shapes.map((cls, si) => (
                  <div
                    key={si}
                    className={`absolute ${cls} rounded-xl border border-primary/20`}
                    style={{ background: `${step.accent}15` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-background overflow-x-clip">
      {/* Section header */}
      <div className="py-16 md:py-24 text-center px-4">
        <p className="story-section-title text-xs md:text-sm text-primary uppercase tracking-widest font-semibold mb-2 md:mb-3">
          Mengapa ByteNodes
        </p>
        <h2 className="story-section-title text-3xl sm:text-4xl md:text-5xl font-black text-foreground text-balance">
          Infrastruktur yang{" "}
          <span className="text-primary">Bicara Sendiri</span>
        </h2>
        <p className="story-section-title text-sm md:text-base text-muted-foreground mt-3 md:mt-4 max-w-xl mx-auto text-balance">
          Scroll ke bawah untuk menjelajahi keunggulan kami satu per satu.
        </p>
      </div>

      {/* Scroll container - responsive height */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${STEPS.length * (isMobile ? 80 : 100)}vh` }}
      >
        {/* Sticky viewport */}
        <div
          ref={stickyRef}
          className="sticky top-0 h-screen flex items-center overflow-hidden"
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-border z-20">
            <div
              ref={progressRef}
              className="h-full bg-primary origin-left will-change-transform"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* Step counter - uses React state */}
          <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20 flex items-baseline gap-1 font-mono">
            <span
              className="text-2xl md:text-3xl font-black transition-all duration-300"
              style={{ color: STEPS[activeIndex]?.accent }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground text-xs md:text-sm">
              / {String(STEPS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Main content grid */}
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: text steps */}
            <div className="relative h-64 md:h-80 order-2 md:order-1">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center will-change-transform"
                  style={{ visibility: "hidden" }}
                >
                  {/* Large background number - smaller on mobile */}
                  <span
                    className="font-mono text-5xl md:text-8xl font-black leading-none mb-2 md:mb-4 select-none transition-colors duration-300"
                    style={{
                      color:
                        activeIndex === i
                          ? `${step.accent}40`
                          : "hsl(var(--muted-foreground) / 0.15)",
                    }}
                  >
                    {step.index}
                  </span>
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ background: `${step.accent}22` }}
                    >
                      <step.icon
                        className="w-5 h-5 md:w-6 md:h-6"
                        style={{ color: step.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: visual panels - shown only on tablet+ */}
            <div
              className="relative h-48 md:h-96 order-1 md:order-2 overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    visualRefs.current[i] = el;
                  }}
                  className={`absolute inset-0 rounded-2xl md:rounded-3xl border border-primary/20 bg-gradient-to-br ${step.visual.primary} backdrop-blur-sm flex items-center justify-center will-change-transform`}
                  style={{
                    transformStyle: "preserve-3d",
                    visibility: "hidden",
                  }}
                >
                  {/* Decorative shapes */}
                  {step.visual.shapes.map((cls, si) => (
                    <div
                      key={si}
                      className={`absolute ${cls} rounded-xl md:rounded-2xl border border-primary/20 transition-transform duration-700`}
                      style={{
                        background: `${step.accent}15`,
                        transform:
                          activeIndex === i ? "scale(1)" : "scale(0.8)",
                      }}
                    />
                  ))}
                  {/* Center icon */}
                  <div
                    className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl transition-transform duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`,
                      border: `2px solid ${step.accent}50`,
                      transform:
                        activeIndex === i
                          ? "scale(1) rotate(0deg)"
                          : "scale(0.9) rotate(-5deg)",
                    }}
                  >
                    <step.icon
                      className="w-10 h-10 md:w-14 md:h-14"
                      style={{ color: step.accent }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Floating particles */}
                  <div
                    className="absolute top-1/4 left-1/4 w-1.5 md:w-2 h-1.5 md:h-2 rounded-full animate-pulse"
                    style={{ background: step.accent, opacity: 0.6 }}
                  />
                  <div
                    className="absolute bottom-1/3 right-1/4 w-2 md:w-3 h-2 md:h-3 rounded-full animate-pulse"
                    style={{
                      background: step.accent,
                      opacity: 0.4,
                      animationDelay: "300ms",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Side step indicator dots - hidden on mobile, shown on right side on desktop */}
          <div className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-20">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{
                  background:
                    activeIndex === i
                      ? step.accent
                      : "hsl(var(--muted-foreground) / 0.3)",
                  transform: activeIndex === i ? "scale(1.3)" : "scale(1)",
                }}
              >
                {activeIndex === i && (
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ background: step.accent, opacity: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile step dots - bottom center on mobile */}
          <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="relative w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background:
                    activeIndex === i
                      ? step.accent
                      : "hsl(var(--muted-foreground) / 0.3)",
                  transform: activeIndex === i ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>

          {/* Scroll hint at bottom */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-2 text-muted-foreground/50">
            <span className="text-[10px] md:text-xs uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-4 md:w-5 h-6 md:h-8 rounded-full border-2 border-current flex items-start justify-center p-0.5 md:p-1">
              <div className="w-0.5 md:w-1 h-1.5 md:h-2 rounded-full bg-current animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
