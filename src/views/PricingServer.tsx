"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Clock, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  scrollVariants,
  staggerContainer,
} from "@/hooks/useScrollAnimation";
import { GameSupportLogos } from "@/components/GameSupportLogos";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

// Shared Packages (SG - Budget) - Rp 8.000/GB - CPU = RAM/2 (min 1 Core)
const sharedPackages = [
  {
    name: "BNS-01",
    price: 12000,
    ram: "2 GB",
    cpu: "60%",
    storage: "15 GB",
    backup: 1,
    database: 1,
    port: 1,
    note: "Fair Usage (60% Shared CPU)",
  },
  {
    name: "BNS-02",
    price: 22000,
    ram: "4 GB",
    cpu: "100%",
    storage: "30 GB",
    backup: 1,
    database: 1,
    port: 2,
    note: "Fair Usage (100% Shared CPU)",
  },
  {
    name: "BNP-01",
    price: 32000,
    ram: "6 GB",
    cpu: "150%",
    storage: "45 GB",
    backup: 2,
    database: 2,
    port: 2,
    note: "Fair Usage (150% Shared CPU)",
  },
  {
    name: "BNP-02",
    price: 42000,
    ram: "8 GB",
    cpu: "200%",
    storage: "60 GB",
    backup: 2,
    database: 2,
    port: 2,
    note: "Fair Usage (200% Shared CPU)",
    popular: true,
  },
  {
    name: "BNX-01",
    price: 62000,
    ram: "12 GB",
    cpu: "250%",
    storage: "80 GB",
    backup: 3,
    database: 3,
    port: 3,
    note: "Fair Usage (250% Shared CPU)",
  },
  {
    name: "BNX-02",
    price: 82000,
    ram: "16 GB",
    cpu: "300%",
    storage: "100 GB",
    backup: 3,
    database: 4,
    port: 4,
    note: "Fair Usage (300% Shared CPU)",
  },
];

type CategoryType = "shared";

const PricingServer = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("shared");
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: packagesRef, isInView: packagesInView } = useScrollAnimation();

  const formatPrice = (price: number) => `Rp ${price.toLocaleString("id-ID")}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Game Server Hosting",
    description:
      "High-performance game server hosting for Minecraft, FiveM, Rust and more starting from Rp 8.000",
    brand: { "@type": "Brand", name: "ByteNodes" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "8000",
      highPrice: "200000",
      offerCount: "15",
    },
  };

  const getPackages = () => {
    return sharedPackages;
  };

  const getCategoryTitle = () => {
    return {
      title: "Shared Packages (SG - Budget)",
      desc: "Shared CPU dengan harga terjangkau - Sempurna untuk server kecil hingga menengah",
    };
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Game Server Hosting - Minecraft, FiveM, Rust & More"
        description="Premium game server hosting from Rp 8.000/month. Minecraft, FiveM, Rust and more. DDoS protection, 24/7 uptime, Pterodactyl panel. Shared and Premium options available."
        keywords="game server hosting, Minecraft hosting, FiveM hosting, Rust hosting, game server Indonesia, cheap Minecraft server, Pterodactyl hosting"
        canonicalUrl="https://bytenodes.icu/pricing/server/minecraft"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={scrollVariants}
        className="relative pt-40 pb-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">
              🎮 Game Server Hosting
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            GAME <span className="text-primary">SERVER</span> PACKAGES
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            High-quality game server hosting with the best hardware.
          </p>
        </div>
      </motion.div>

      <section ref={packagesRef} className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            variants={scrollVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getCategoryTitle().title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getCategoryTitle().desc}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {getPackages().map((pkg, index) => (
              <motion.div key={index} variants={scrollVariants}>
                <Card
                  className={`p-6 relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${pkg.popular ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card to-primary/5" : "border-border/50 hover:border-primary/50"}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                      Best Seller
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <img
                      src="/minecraft-logo.png"
                      alt="Minecraft"
                      className="w-12 h-12 mx-auto mb-3 object-contain"
                    />
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <span className="text-3xl font-bold text-primary block">
                      {formatPrice(pkg.price)}
                    </span>
                    <p className="text-xs text-muted-foreground">/month</p>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        {pkg.ram} RAM • {pkg.cpu}
                      </span>
                    </div>
                    {"storage" in pkg && (
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {(pkg as any).storage}
                          {!(pkg as any).storage.includes("NVMe") ? " SSD" : ""}
                        </span>
                      </div>
                    )}
                    {"backup" in pkg && (
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {(pkg as any).backup} Backup Slots
                        </span>
                      </div>
                    )}
                    {"database" in pkg && (
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {(pkg as any).database} Database
                        </span>
                      </div>
                    )}
                    {"port" in pkg && (
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">
                          {(pkg as any).port} Port
                        </span>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">24/7 Support</span>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-xs text-muted-foreground italic">
                        {pkg.note}
                      </p>
                    </div>
                  </div>
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className={`w-full ${pkg.popular ? "shadow-md" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Order Now
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <GameSupportLogos />
      <Footer />
    </div>
  );
};

export default PricingServer;
