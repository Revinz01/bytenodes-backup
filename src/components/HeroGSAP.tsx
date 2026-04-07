"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Server, Zap, Shield, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

const ORBS = [
  { size: 520, top: "-10%", left: "-8%", delay: 0, speed: 0.4, opacity: 0.15 },
  { size: 380, top: "20%", right: "-5%", delay: 0.3, speed: -0.25, opacity: 0.12 },
  { size: 260, top: "55%", left: "15%", delay: 0.6, speed: 0.3, opacity: 0.1 },
  { size: 180, top: "10%", left: "45%", delay: 0.9, speed: -0.2, opacity: 0.08 },
];

const GRID_LINES = Array.from({ length: 8 });

export const HeroGSAP = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const floatCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(badgeRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.1,
      });

      // Headline word-by-word reveal
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        gsap.from(words, {
          opacity: 0,
          y: 60,
          rotateX: -40,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.08,
          delay: 0.3,
        });
      }

      gsap.from(subRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 1.1,
      });

      // Float cards entrance
      gsap.from(floatCardsRef.current, {
        opacity: 0,
        scale: 0.7,
        duration: 0.7,
        ease: "back.out(1.6)",
        stagger: 0.12,
        delay: 1.2,
      });

      // Parallax orbs on scroll
      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        gsap.to(orb, {
          yPercent: ORBS[i].speed * 200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Grid parallax
      gsap.to(gridRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      // Headline parallax exit
      gsap.to(headlineRef.current, {
        yPercent: -20,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "40% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Float cards stagger on scroll
      floatCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          yPercent: -12 * (i + 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = ["Reliable", "&", "Affordable", "Hosting", "Solutions"];
  const floatCards = [
    { icon: Server, label: "VPS & Dedicated", value: "NVMe SSD", color: "from-blue-500/20 to-blue-600/10" },
    { icon: Shield, label: "DDoS Protected", value: "Always On", color: "from-cyan-500/20 to-cyan-600/10" },
    { icon: Zap, label: "99.9% Uptime", value: "SLA Guarantee", color: "from-emerald-500/20 to-emerald-600/10" },
    { icon: Globe, label: "Low Latency", value: "Singapore Node", color: "from-violet-500/20 to-violet-600/10" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      style={{ perspective: "1000px" }}
    >
      {/* Animated grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Parallax orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          ref={(el) => { orbsRef.current[i] = el; }}
          className="absolute rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: "left" in orb ? (orb as { left: string }).left : undefined,
            right: "right" in orb ? (orb as { right: string }).right : undefined,
            background: `radial-gradient(circle, hsl(var(--primary) / ${orb.opacity}) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      ))}

      {/* Vertical grid lines */}
      <div className="absolute inset-0 flex justify-between pointer-events-none" aria-hidden="true">
        {GRID_LINES.map((_, i) => (
          <div
            key={i}
            className="w-px bg-primary/5"
            style={{ opacity: i === 0 || i === GRID_LINES.length - 1 ? 0 : 1 }}
          />
        ))}
      </div>

      {/* Center content */}
      <div className="container mx-auto px-4 relative z-10 py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            All systems operational &mdash; Singapore Node
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-foreground"
            style={{ transformStyle: "preserve-3d" }}
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="word inline-block mr-[0.2em] last:mr-0">
                {word === "Hosting" || word === "Solutions" ? (
                  <span className="text-primary">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            ref={subRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Solusi hosting profesional dengan performa tinggi. Game server, VPS,
            Discord bot, dan website hosting dengan uptime 99.9%.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-base px-8 py-6 font-semibold rounded-xl">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 py-6 font-semibold rounded-xl">
                Contact Sales
              </Button>
            </Link>
          </div>

          {/* Floating stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 max-w-3xl mx-auto">
            {floatCards.map((card, i) => (
              <div
                key={i}
                ref={(el) => { floatCardsRef.current[i] = el; }}
                className={`rounded-2xl border border-primary/20 bg-gradient-to-br ${card.color} backdrop-blur-sm p-4 text-left`}
              >
                <card.icon className="w-5 h-5 text-primary mb-2" aria-hidden="true" />
                <p className="text-[11px] text-muted-foreground font-medium">{card.label}</p>
                <p className="text-sm font-bold text-foreground">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
