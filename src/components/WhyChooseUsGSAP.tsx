"use client";

import { useEffect, useRef } from "react";
import { Cpu, Shield, Wifi, Headphones, Zap, Server } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Cpu,
    title: "Lightning Fast CPUs",
    description: "AMD EPYC dan Intel Xeon generasi terbaru memastikan performa komputasi tertinggi untuk workload apapun.",
    stat: "3x",
    statLabel: "Lebih Cepat",
  },
  {
    icon: Wifi,
    title: "1 Gbps Network",
    description: "Koneksi jaringan hingga 1 Gbps di semua lokasi kami, jauh melampaui standar industri untuk latensi rendah.",
    stat: "1Gbps",
    statLabel: "Uplink",
  },
  {
    icon: Server,
    title: "NVMe Storage",
    description: "Enterprise-grade NVMe SSD memberikan kecepatan baca/tulis yang luar biasa dan reliabilitas maksimal.",
    stat: "7x",
    statLabel: "Lebih Cepat vs HDD",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Mitigasi DDoS canggih hingga 1 Tbps menjaga layanan Anda tetap online meski di bawah serangan.",
    stat: "1Tbps",
    statLabel: "Kapasitas Mitigasi",
  },
  {
    icon: Zap,
    title: "99.9% Uptime SLA",
    description: "Infrastruktur redundan dan monitoring proaktif memastikan SLA 99.9% yang kami janjikan.",
    stat: "99.9%",
    statLabel: "SLA Guarantee",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Tim support teknis kami selalu siap membantu lewat Discord dan tiket, rata-rata respons di bawah 5 menit.",
    stat: "<5m",
    statLabel: "Waktu Respons",
  },
];

export const WhyChooseUsGSAP = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Section title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      // Cards staggered entry
      gsap.from(cardRefs.current.filter(Boolean), {
        opacity: 0,
        y: 60,
        scale: 0.94,
        duration: 0.65,
        ease: "power3.out",
        stagger: {
          each: 0.1,
          from: "start",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Stats count-up effect on enter
      statRefs.current.forEach((el) => {
        if (!el) return;
        const target = el.dataset.value || "";
        const isNumeric = /^[\d.]+$/.test(target.replace(/[x%<ms]/g, ""));
        if (!isNumeric) return;

        const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
        const suffix = target.replace(/[0-9.]/g, "");

        const obj = { val: 0 };
        gsap.to(obj, {
          val: numericTarget,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            const v = obj.val;
            el.textContent =
              suffix === "%" || suffix === "x"
                ? `${v % 1 === 0 ? v : v.toFixed(1)}${suffix}`
                : suffix.startsWith("<")
                ? `<${Math.round(v)}m`
                : suffix === "Tbps" || suffix === "Gbps"
                ? `${v}${suffix}`
                : `${Math.round(v)}${suffix}`;
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            once: true,
          },
        });
      });

      // Hover tilt on cards
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const handleMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
          gsap.to(card, { rotateX: y, rotateY: x, duration: 0.4, ease: "power2.out" });
        };
        const handleLeave = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
        };
        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseleave", handleLeave);
        return () => {
          card.removeEventListener("mousemove", handleMove);
          card.removeEventListener("mouseleave", handleLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-widest font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance">
            Built for <span className="text-primary">Performance</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-balance">
            Infrastruktur enterprise kami dirancang untuk memberikan performa, keamanan, dan reliabilitas terbaik.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ perspective: "1000px" }}
        >
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300 cursor-default"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  {/* Animated stat */}
                  <div className="text-right">
                    <span
                      ref={(el) => { statRefs.current[i] = el; }}
                      data-value={benefit.stat}
                      className="text-2xl font-black text-primary tabular-nums"
                    >
                      {benefit.stat}
                    </span>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{benefit.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
