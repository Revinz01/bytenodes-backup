"use client";

import { useEffect, useRef } from "react";
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
    accent: "hsl(var(--primary))",
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
    accent: "hsl(270 70% 65%)",
    visual: {
      primary: "from-violet-500/30 to-violet-900/10",
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
  const indexRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stickyRef.current) return;

    const ctx = gsap.context(() => {
      const totalSteps = STEPS.length;

      STEPS.forEach((_, i) => {
        const step = stepRefs.current[i];
        const visual = visualRefs.current[i];
        const indexEl = indexRefs.current[i];
        if (!step || !visual) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `${(i / totalSteps) * 100}% top`,
            end: `${((i + 1) / totalSteps) * 100}% top`,
            scrub: 0.8,
            onUpdate: (self) => {
              if (progressRef.current) {
                const overall = (i + self.progress) / totalSteps;
                gsap.set(progressRef.current, { scaleX: overall });
              }
              if (counterRef.current) {
                counterRef.current.textContent = String(i + 1).padStart(2, "0");
              }
            },
          },
        });

        // Activate step: fade in & lift
        tl.fromTo(
          step,
          { opacity: 0, y: 40, filter: "blur(4px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.4, ease: "power3.out" },
          0
        );

        // Visual panel swap
        tl.fromTo(
          visual,
          { opacity: 0, scale: 0.88, rotateY: -12 },
          { opacity: 1, scale: 1, rotateY: 0, duration: 0.4, ease: "back.out(1.4)" },
          0
        );

        // Exit: fade out
        tl.to(step, { opacity: 0, y: -30, filter: "blur(4px)", duration: 0.3, ease: "power2.in" }, 0.65);
        tl.to(visual, { opacity: 0, scale: 0.9, rotateY: 12, duration: 0.3, ease: "power2.in" }, 0.65);

        // Index number highlight
        if (indexEl) {
          tl.to(indexEl, { color: STEPS[i].accent, duration: 0.2 }, 0);
          tl.to(indexEl, { color: "hsl(var(--muted-foreground))", duration: 0.2 }, 0.65);
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-background">
      {/* Section header — visible ABOVE the sticky zone */}
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
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-border z-20">
            <div
              ref={progressRef}
              className="h-full bg-primary origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          {/* Step counter */}
          <div className="absolute top-6 right-6 z-20 flex items-baseline gap-1 text-muted-foreground text-xs font-mono">
            <span ref={counterRef} className="text-2xl font-black text-foreground">
              01
            </span>
            <span>/ {String(STEPS.length).padStart(2, "0")}</span>
          </div>

          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            {/* Left: text steps (layered absolutely, animated in/out) */}
            <div className="relative h-72">
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="absolute inset-0 flex flex-col justify-center opacity-0"
                >
                  <span
                    ref={(el) => { indexRefs.current[i] = el; }}
                    className="font-mono text-7xl font-black text-muted-foreground/20 leading-none mb-4 select-none"
                  >
                    {step.index}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${step.accent}22` }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.accent }} aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base max-w-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: visual panels */}
            <div className="relative h-80 hidden md:block" style={{ perspective: "800px" }}>
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  ref={(el) => { visualRefs.current[i] = el; }}
                  className={`absolute inset-0 rounded-3xl border border-primary/15 bg-gradient-to-br ${step.visual.primary} opacity-0 flex items-center justify-center`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Decorative shapes */}
                  {step.visual.shapes.map((cls, si) => (
                    <div
                      key={si}
                      className={`absolute ${cls} rounded-2xl border border-primary/20`}
                      style={{ background: `${step.accent}15` }}
                    />
                  ))}
                  {/* Center icon */}
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{ background: `${step.accent}20`, border: `1px solid ${step.accent}40` }}
                  >
                    <step.icon className="w-12 h-12" style={{ color: step.accent }} aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side step dots */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
