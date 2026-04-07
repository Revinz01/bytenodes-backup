"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Zap, HeadphonesIcon, TrendingUp, Lock, Cpu } from "lucide-react";
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
      shapes: ["top-8 left-8 w-24 h-24", "bottom-8 right-8 w-16 h-16"],
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
      shapes: ["top-4 right-4 w-28 h-28", "bottom-12 left-6 w-20 h-20"],
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
      shapes: ["top-6 left-12 w-20 h-20", "bottom-4 right-10 w-24 h-24"],
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
      shapes: ["top-10 right-6 w-20 h-20", "bottom-6 left-8 w-16 h-16"],
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
      shapes: ["top-4 left-4 w-24 h-24", "bottom-8 right-8 w-18 h-18"],
    },
  },
];

export const ScrollStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const totalSteps = STEPS.length;

      // Set initial states explicitly to prevent shadow artifacts
      stepRefs.current.forEach((step, i) => {
        if (step) {
          gsap.set(step, {
            opacity: i === 0 ? 1 : 0,
            y: i === 0 ? 0 : 40,
            filter: i === 0 ? "blur(0px)" : "blur(4px)",
            visibility: "visible",
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
          });
        }
      });

      // Master timeline for progress bar
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        onUpdate: (self) => {
          if (progressRef.current) {
            gsap.set(progressRef.current, { scaleX: self.progress });
          }
          // Calculate which step we're on
          const newIndex = Math.min(
            Math.floor(self.progress * totalSteps),
            totalSteps - 1
          );
          setActiveIndex(newIndex);
        },
      });

      // Create individual step triggers
      STEPS.forEach((_, i) => {
        const step = stepRefs.current[i];
        const visual = visualRefs.current[i];
        const prevStep = i > 0 ? stepRefs.current[i - 1] : null;
        const prevVisual = i > 0 ? visualRefs.current[i - 1] : null;
        const nextStep = i < totalSteps - 1 ? stepRefs.current[i + 1] : null;
        const nextVisual = i < totalSteps - 1 ? visualRefs.current[i + 1] : null;

        if (!step || !visual) return;

        // Entry animation for each step (except first which starts visible)
        if (i > 0) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: `${(i / totalSteps) * 100}% top`,
            end: `${((i + 0.3) / totalSteps) * 100}% top`,
            scrub: 0.6,
            onUpdate: (self) => {
              const progress = self.progress;
              
              // Fade in current step
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

              // Fade out previous step completely
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

        // Exit animation for last step (when scrolling past)
        if (i === totalSteps - 1) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: `${((i + 0.7) / totalSteps) * 100}% top`,
            end: `${100}% top`,
            scrub: 0.6,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.set(step, {
                opacity: 1 - progress * 0.5,
              });
              gsap.set(visual, {
                opacity: 1 - progress * 0.5,
              });
            },
          });
        }
      });

      // Section title reveal
      gsap.from(".story-section-title", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-background">
      {/* Section header */}
      <div className="py-24 text-center px-4">
        <p className="story-section-title text-sm text-primary uppercase tracking-widest font-semibold mb-3">
          Mengapa ByteNodes
        </p>
        <h2 className="story-section-title text-4xl md:text-5xl font-black text-foreground text-balance">
          Infrastruktur yang{" "}
          <span className="text-primary">Bicara Sendiri</span>
        </h2>
        <p className="story-section-title text-muted-foreground mt-4 max-w-xl mx-auto text-balance">
          Scroll ke bawah untuk menjelajahi keunggulan kami satu per satu.
        </p>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="relative"
        style={{ height: `${STEPS.length * 100}vh` }}
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

          {/* Step counter - uses React state for clean updates */}
          <div className="absolute top-6 right-6 z-20 flex items-baseline gap-1 font-mono">
            <span 
              className="text-3xl font-black transition-all duration-300"
              style={{ color: STEPS[activeIndex]?.accent }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground text-sm">
              / {String(STEPS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: text steps */}
            <div className="relative h-80">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="absolute inset-0 flex flex-col justify-center will-change-transform"
                  style={{ visibility: "hidden" }}
                >
                  {/* Large background number */}
                  <span
                    className="font-mono text-8xl font-black leading-none mb-4 select-none transition-colors duration-300"
                    style={{ 
                      color: activeIndex === i ? `${step.accent}40` : "hsl(var(--muted-foreground) / 0.15)",
                    }}
                  >
                    {step.index}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ background: `${step.accent}22` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.accent }} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base max-w-md">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: visual panels */}
            <div className="relative h-96 hidden md:block" style={{ perspective: "1000px" }}>
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { visualRefs.current[i] = el; }}
                  className={`absolute inset-0 rounded-3xl border border-primary/20 bg-gradient-to-br ${step.visual.primary} backdrop-blur-sm flex items-center justify-center will-change-transform`}
                  style={{ 
                    transformStyle: "preserve-3d",
                    visibility: "hidden",
                  }}
                >
                  {/* Decorative shapes */}
                  {step.visual.shapes.map((cls, si) => (
                    <div
                      key={si}
                      className={`absolute ${cls} rounded-2xl border border-primary/20 transition-transform duration-700`}
                      style={{ 
                        background: `${step.accent}15`,
                        transform: activeIndex === i ? "scale(1)" : "scale(0.8)",
                      }}
                    />
                  ))}
                  {/* Center icon */}
                  <div
                    className="w-28 h-28 rounded-3xl flex items-center justify-center shadow-2xl transition-transform duration-500"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.accent}30, ${step.accent}10)`, 
                      border: `2px solid ${step.accent}50`,
                      transform: activeIndex === i ? "scale(1) rotate(0deg)" : "scale(0.9) rotate(-5deg)",
                    }}
                  >
                    <step.icon className="w-14 h-14" style={{ color: step.accent }} aria-hidden="true" />
                  </div>

                  {/* Floating particles */}
                  <div 
                    className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full animate-pulse"
                    style={{ background: step.accent, opacity: 0.6 }}
                  />
                  <div 
                    className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full animate-pulse delay-300"
                    style={{ background: step.accent, opacity: 0.4 }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Side step indicator dots */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            {STEPS.map((step, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                className="relative w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                style={{ 
                  background: activeIndex === i ? step.accent : "hsl(var(--muted-foreground) / 0.3)",
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

          {/* Scroll hint at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
