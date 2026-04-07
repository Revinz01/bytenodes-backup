"use client";

import { useEffect, useRef } from "react";
import { Server, Globe, Bot, Gamepad2, HardDrive, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "game",
    icon: Gamepad2,
    title: "Game Servers",
    tagline: "Lag-free. Always on.",
    startingPrice: "Rp 12.000",
    priceUsd: "$0.75",
    link: "/pricing/servers",
    color: "from-violet-600/20 to-violet-900/10",
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
    color: "from-blue-600/20 to-blue-900/10",
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
    color: "from-cyan-600/20 to-cyan-900/10",
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
    color: "from-emerald-600/20 to-emerald-900/10",
    accent: "hsl(142 70% 50%)",
    features: ["24/7 Uptime", "Auto Restart", "Multiple Instances", "Database Support", "Free SSL"],
  },
];

export const HorizontalServicesScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean);
      const cardWidth = 380;
      const gap = 24;
      const totalWidth = cards.length * (cardWidth + gap) - gap;
      const viewportWidth = window.innerWidth;
      const xAmount = -(totalWidth - viewportWidth + 80);

      // Title entrance
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Horizontal scroll track
      gsap.to(trackRef.current, {
        x: xAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Each card: stagger reveal as they scroll into "viewport"
      cards.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0.3, scale: 0.92, rotateY: 8 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: `${i * 20}% top`,
              end: `${i * 20 + 15}% top`,
              scrub: 0.6,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background overflow-hidden">
      {/* Section label */}
      <div ref={titleRef} className="text-center py-24 px-4">
        <p className="text-sm text-primary uppercase tracking-widest font-semibold mb-3">Solutions</p>
        <h2 className="text-4xl md:text-5xl font-black text-foreground text-balance">
          Semua yang Anda Butuhkan,{" "}
          <span className="text-primary">Dalam Satu Platform</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-balance">
          Scroll horizontal untuk menjelajahi semua layanan hosting kami.
        </p>
      </div>

      {/* Horizontal scroll container */}
      <div ref={containerRef} className="relative">
        <div
          ref={trackRef}
          className="flex items-center gap-6 px-20 pb-24"
          style={{ width: "max-content", perspective: "800px" }}
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`relative rounded-3xl border border-border/50 bg-gradient-to-br ${service.color} backdrop-blur-sm flex flex-col overflow-hidden`}
              style={{ width: 380, minHeight: 480, transformStyle: "preserve-3d" }}
            >
              {/* Top badge */}
              <div
                className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full border"
                style={{ color: service.accent, borderColor: `${service.accent}40`, background: `${service.accent}10` }}
              >
                Starting {service.priceUsd}/mo
              </div>

              {/* Icon */}
              <div className="p-8 pb-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${service.accent}20`, border: `1px solid ${service.accent}30` }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.accent }} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-black text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-5">{service.tagline}</p>
              </div>

              {/* Price */}
              <div className="px-8">
                <div className="border-t border-border/30 pt-5 mb-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Mulai dari</p>
                  <p className="text-3xl font-black" style={{ color: service.accent }}>
                    {service.startingPrice}
                    <span className="text-sm font-normal text-muted-foreground">/bulan</span>
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="px-8 flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HardDrive className="w-3.5 h-3.5 flex-shrink-0" style={{ color: service.accent }} aria-hidden="true" />
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
                    className="w-full rounded-xl font-semibold group hover:text-background transition-all duration-300"
                    style={{
                      borderColor: `${service.accent}50`,
                      color: service.accent,
                    }}
                  >
                    Lihat Paket
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
