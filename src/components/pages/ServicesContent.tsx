"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Globe, Bot, Gamepad2, Code, Check, Clock } from "lucide-react";
import Link from "next/link";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

const servicesDetail = [
  {
    icon: Gamepad2,
    title: "Game Server Hosting",
    description: "Minecraft, FiveM, Rust, dan game lainnya dengan performa tinggi.",
    priceRp: "Mulai Rp 8.000",
    priceUsd: "~$0.50",
    link: "/pricing/servers",
    available: true,
    features: [
      "Opsi Shared & Premium",
      "Perlindungan DDoS",
      "Panel Pterodactyl",
      "Uptime 24/7",
      "Backup Otomatis",
      "Dukungan Multi Game",
      "Jaringan Low Latency",
      "Server Dedicated EU & SG"
    ],
  },
  {
    icon: Bot,
    title: "Discord Bot Hosting",
    description: "Hosting bot Discord dengan uptime 24/7 dan auto-restart.",
    priceRp: "Mulai Rp 10.000",
    priceUsd: "~$0.60",
    link: "/pricing/bot",
    available: true,
    features: [
      "Uptime 24/7",
      "Auto Restart",
      "Multiple Bot Instances",
      "Dukungan Database",
      "Deploy Mudah",
      "Priority Support",
      "Opsi Custom Domain",
      "SSL Gratis"
    ],
  },
  {
    icon: Globe,
    title: "Website Hosting",
    description: "Web Ptero (Container), Turbo Web (Cloudflare Tunnel), dan Jasa Coding.",
    priceRp: "Mulai Rp 5.000",
    priceUsd: "~$0.30",
    link: "/pricing/website",
    available: true,
    features: [
      "Web Ptero Container",
      "Turbo Web (Cloudflare)",
      "SSL Gratis (HTTPS)",
      "Backup Otomatis",
      "IP Teraliased",
      "Resource Terisolasi",
      "Jasa Coding Tersedia",
      "Priority Support"
    ],
  },
  {
    icon: Server,
    title: "Dedicated Server",
    description: "Dedicated server dengan performa tinggi dan NVMe storage.",
    priceRp: "Mulai Rp 65.000",
    priceUsd: "~$4.00",
    link: "/pricing/vps",
    available: true,
    features: [
      "Performa Anti-Lag",
      "Penyimpanan NVMe",
      "Akses Root Penuh",
      "Linux (Ubuntu/Debian)",
      "Uptime 24/7",
      "Perlindungan DDoS",
      "Support Premium",
      "Opsi IP Dedicated"
    ],
  },
  {
    icon: Server,
    title: "VPS KVM",
    description: "Virtual Private Server dengan teknologi KVM untuk web server, bot, dan tunneling.",
    priceRp: "Segera Hadir",
    priceUsd: "",
    link: "/pricing/vps",
    available: false,
    features: [
      "Virtualisasi KVM",
      "Akses Root Penuh",
      "Penyimpanan SSD",
      "Linux OS",
      "Perlindungan DDoS",
      "Uptime 24/7",
      "Lokasi Multiple",
      "Resource Scalable"
    ],
  },
  {
    icon: Code,
    title: "RDP Windows",
    description: "Windows Remote Desktop untuk browsing, botting, dan Android emulator.",
    priceRp: "Segera Hadir",
    priceUsd: "",
    link: "/pricing/vps",
    available: false,
    features: [
      "Windows Server",
      "Akses Admin",
      "Bandwidth Tinggi",
      "Penyimpanan SSD",
      "Perlindungan DDoS",
      "Lokasi Multiple",
      "Support 24/7",
      "Setup Instan"
    ],
  },
];

export default function ServicesContent() {
  return (
    <>
      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">🚀 Layanan Kami</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Layanan <span className="text-primary">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih dari berbagai layanan hosting dan infrastruktur yang kami sediakan
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetail.map((service, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  service.available
                    ? "border-border/50 hover:border-primary/50"
                    : "border-border/30 opacity-70"
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    {!service.available && (
                      <div className="inline-block mb-2 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-semibold rounded-full">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <div className="mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-1">{service.priceRp}</div>
                  {service.priceUsd && (
                    <div className="text-sm text-muted-foreground">{service.priceUsd}/bulan</div>
                  )}
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.available ? (
                  <Link href={service.link}>
                    <Button className="w-full" size="lg">
                      Lihat Detail Harga
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full" size="lg" variant="outline" disabled>
                    Segera Hadir
                  </Button>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Butuh Bantuan Memilih?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tim kami siap membantu Anda menemukan solusi hosting yang tepat untuk kebutuhan spesifik Anda.
              </p>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  Hubungi Support
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
