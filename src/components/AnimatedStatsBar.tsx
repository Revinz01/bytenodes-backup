"use client";

import { useEffect, useRef } from "react";
import { Users, Server, Clock, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Active Users",
  },
  {
    icon: Server,
    value: 99.9,
    suffix: "%",
    decimals: 1,
    label: "Uptime SLA",
  },
  {
    icon: Clock,
    value: 5,
    prefix: "<",
    suffix: "min",
    label: "Avg Response",
  },
  {
    icon: Globe,
    value: 15,
    suffix: "+",
    label: "Server Locations",
  },
];

export const AnimatedStatsBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Container slide in
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      });

      // Staggered stats reveal
      gsap.from(statRefs.current.filter(Boolean), {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.4)",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Count-up animation for each stat
      stats.forEach((stat, i) => {
        const el = valueRefs.current[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            const prefix = stat.prefix || "";
            const suffix = stat.suffix || "";
            const formatted = stat.decimals
              ? obj.val.toFixed(stat.decimals)
              : Math.round(obj.val);
            el.textContent = `${prefix}${formatted}${suffix}`;
          },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-border/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                ref={(el) => {
                  statRefs.current[i] = el;
                }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon
                    className="w-6 h-6 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground tabular-nums">
                  <span
                    ref={(el) => {
                      valueRefs.current[i] = el;
                    }}
                  >
                    0
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
