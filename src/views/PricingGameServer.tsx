"use client";

import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

type GameType = "minecraft" | "fivem" | "samp";

type GamePlan = {
  name: string;
  ram: string;
  slots: string;
  cpuPercent?: string;
  storage?: string;
  backupSlots?: number;
  database?: number;
  port?: number;
  note?: string;
  priceRp: number;
  promoPriceRp?: number;
  cpuTag?: string;
  popular?: boolean;
};

const gameContent: Record<
  GameType,
  {
    title: string;
    description: string;
    canonical: string;
    highlights?: string[];
    plans: GamePlan[];
  }
> = {
  minecraft: {
    title: "Minecraft Server Plans",
    description:
      "Paket Minecraft hosting dengan performa stabil, perlindungan DDoS, dan support 24/7.",
    canonical: "https://bytenodes.icu/pricing/server/minecraft",
    plans: [
      {
        name: "BNS-01",
        ram: "2 GB",
        cpuPercent: "60%",
        storage: "15 GB SSD",
        backupSlots: 1,
        database: 1,
        port: 1,
        note: "Fair Usage (60% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 12000,
      },
      {
        name: "BNS-02",
        ram: "4 GB",
        cpuPercent: "100%",
        storage: "30 GB SSD",
        backupSlots: 1,
        database: 1,
        port: 2,
        note: "Fair Usage (100% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 22000,
      },
      {
        name: "BNP-01",
        ram: "6 GB",
        cpuPercent: "150%",
        storage: "45 GB SSD",
        backupSlots: 2,
        database: 2,
        port: 2,
        note: "Fair Usage (150% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 32000,
      },
      {
        name: "BNP-02",
        ram: "8 GB",
        cpuPercent: "200%",
        storage: "60 GB SSD",
        backupSlots: 2,
        database: 2,
        port: 2,
        note: "Fair Usage (200% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 42000,
        popular: true,
      },
      {
        name: "BNX-01",
        ram: "12 GB",
        cpuPercent: "250%",
        storage: "80 GB SSD",
        backupSlots: 3,
        database: 3,
        port: 3,
        note: "Fair Usage (250% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 62000,
      },
      {
        name: "BNX-02",
        ram: "16 GB",
        cpuPercent: "300%",
        storage: "100 GB SSD",
        backupSlots: 3,
        database: 4,
        port: 4,
        note: "Fair Usage (300% Shared CPU)",
        slots: "Standar DDoS Protection",
        priceRp: 82000,
      },
    ],
  },
  fivem: {
    title: "FiveM Server Plans",
    description:
      "Paket FiveM Elite hingga Ultra dengan performa tinggi untuk roleplay server skala besar.",
    canonical: "https://bytenodes.icu/pricing/server/fivem",
    highlights: [
      "Proteksi DDoS 24/7",
      "Latency rendah",
      "Support teknis khusus FiveM",
    ],
    plans: [
      {
        name: "FVM Elite #1",
        ram: "8 GB",
        slots: "32 Slot",
        priceRp: 450000,
        promoPriceRp: 325000,
      },
      {
        name: "FVM Elite #2",
        ram: "16 GB",
        slots: "64 Slot",
        priceRp: 750000,
        promoPriceRp: 575000,
        popular: true,
      },
      {
        name: "FVM Extreme #1",
        ram: "32 GB",
        slots: "128 Slot",
        cpuTag: "Genoa",
        priceRp: 1250000,
        promoPriceRp: 950000,
      },
      {
        name: "FVM Extreme #2",
        ram: "64 GB",
        slots: "250 Slot",
        cpuTag: "Genoa",
        priceRp: 2150000,
        promoPriceRp: 1650000,
      },
      {
        name: "FVM Ultra (RZ)",
        ram: "16 GB",
        slots: "150 Slot (Pro)",
        cpuTag: "Ryzen 9",
        priceRp: 1450000,
        promoPriceRp: 1150000,
      },
    ],
  },
  samp: {
    title: "SA:MP Server Plans",
    description:
      "Paket SA:MP dari komunitas kecil hingga Mega RP server dengan resource dedicated.",
    canonical: "https://bytenodes.icu/pricing/server/samp",
    highlights: [
      "Server dengan latensi rendah",
      "Optimasi resource untuk player banyak",
      "Monitoring dan support 24/7",
    ],
    plans: [
      {
        name: "SAM Pro #1",
        ram: "4 GB",
        slots: "Community",
        priceRp: 175000,
        promoPriceRp: 125000,
      },
      {
        name: "SAM Pro #2",
        ram: "8 GB",
        slots: "Medium Roleplay",
        priceRp: 350000,
        promoPriceRp: 245000,
        popular: true,
      },
      {
        name: "SAM Elite #1",
        ram: "16 GB",
        slots: "Big City RP",
        priceRp: 650000,
        promoPriceRp: 475000,
      },
      {
        name: "SAM Ultimate",
        ram: "32 GB",
        slots: "Mega Server (1k+)",
        cpuTag: "Genoa",
        priceRp: 1150000,
        promoPriceRp: 875000,
      },
    ],
  },
};

const formatPrice = (price: number) => `Rp ${price.toLocaleString("id-ID")}`;

const gameLogoByType: Record<GameType, { src: string; alt: string }> = {
  minecraft: {
    src: "/minecraft-logo.png",
    alt: "Minecraft logo",
  },
  fivem: {
    src: "/fivem-logo.png",
    alt: "FiveM logo",
  },
  samp: {
    src: "/samp-logo.png",
    alt: "SA:MP logo",
  },
};

export default function PricingGameServer({ game }: { game: GameType }) {
  const content = gameContent[game];
  const gameLogo = gameLogoByType[game];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${content.title} - ByteNodes`}
        description={content.description}
        keywords={`game server hosting, ${game} server, ${game} hosting indonesia`}
        canonicalUrl={content.canonical}
      />
      <AnnouncementBanner />
      <Navbar />

      <section className="relative pt-40 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">
              🎮 Game Server Hosting
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">
            {content.title.split(" ")[0]}{" "}
            <span className="text-primary">PLANS</span>
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            {content.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 bg-card rounded-lg p-1.5 border border-border/50 max-w-max mx-auto">
            <Link href="/pricing/server/minecraft">
              <Button
                variant={game === "minecraft" ? "default" : "ghost"}
                size="sm"
              >
                Minecraft
              </Button>
            </Link>
            <Link href="/pricing/server/fivem">
              <Button
                variant={game === "fivem" ? "default" : "ghost"}
                size="sm"
              >
                FiveM
              </Button>
            </Link>
            <Link href="/pricing/server/samp">
              <Button variant={game === "samp" ? "default" : "ghost"} size="sm">
                SA:MP
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {content.plans.map((plan) => (
              <Card
                key={plan.name}
                className={`p-6 relative transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
                  plan.popular
                    ? "border-primary border-2 bg-gradient-to-b from-card to-primary/5"
                    : "border-border/50 hover:border-primary/40"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Best Seller
                  </div>
                )}

                <div className="text-center mb-5">
                  <Image
                    src={gameLogo.src}
                    alt={gameLogo.alt}
                    width={40}
                    height={40}
                    className="w-10 h-10 mx-auto mb-2 object-contain"
                  />
                  <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                  {plan.promoPriceRp ? (
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground line-through">
                        {formatPrice(plan.priceRp)}
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        {formatPrice(plan.promoPriceRp)}
                      </p>
                    </div>
                  ) : (
                    <p className="text-3xl font-bold text-primary">
                      {formatPrice(plan.priceRp)}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">/month</p>
                </div>

                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>
                      {plan.ram} RAM
                      {plan.cpuPercent ? ` • ${plan.cpuPercent}` : ""}
                    </span>
                  </div>
                  {plan.storage && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{plan.storage}</span>
                    </div>
                  )}
                  {typeof plan.backupSlots === "number" && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{plan.backupSlots} Backup Slots</span>
                    </div>
                  )}
                  {typeof plan.database === "number" && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{plan.database} Database</span>
                    </div>
                  )}
                  {typeof plan.port === "number" && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{plan.port} Port</span>
                    </div>
                  )}
                  {plan.note && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{plan.note}</span>
                    </div>
                  )}
                  {game === "minecraft" && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>24/7 Support</span>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    <span>{plan.slots}</span>
                  </div>
                  {plan.cpuTag && (
                    <div className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>CPU {plan.cpuTag}</span>
                    </div>
                  )}
                  {content.highlights?.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Order Now
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
