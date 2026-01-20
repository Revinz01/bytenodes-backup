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
import minecraftLogo from "@/assets/minecraft-logo.png";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

// Shared Packages (SG - Budget) - Rp 8.000/GB - CPU = RAM/2 (min 1 Core)
const sharedPackages = [
  {
    name: "Shared-1",
    price: 8000,
    ram: "1 GB",
    cpu: "1 Core",
    storage: "5 GB",
    backup: 1,
    database: 1,
    port: 1,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-2",
    price: 16000,
    ram: "2 GB",
    cpu: "1 Core",
    storage: "10 GB",
    backup: 1,
    database: 1,
    port: 2,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-3",
    price: 24000,
    ram: "3 GB",
    cpu: "1 Core",
    storage: "15 GB",
    backup: 1,
    database: 2,
    port: 2,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-4",
    price: 32000,
    ram: "4 GB",
    cpu: "2 Core",
    storage: "20 GB",
    backup: 2,
    database: 2,
    port: 2,
    note: "Fair Usage (50% - 100% per core)",
    popular: true,
  },
  {
    name: "Shared-5",
    price: 40000,
    ram: "5 GB",
    cpu: "2 Core",
    storage: "25 GB",
    backup: 2,
    database: 2,
    port: 3,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-6",
    price: 48000,
    ram: "6 GB",
    cpu: "3 Core",
    storage: "30 GB",
    backup: 2,
    database: 3,
    port: 3,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-8",
    price: 64000,
    ram: "8 GB",
    cpu: "4 Core",
    storage: "40 GB",
    backup: 3,
    database: 3,
    port: 3,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-10",
    price: 80000,
    ram: "10 GB",
    cpu: "5 Core",
    storage: "50 GB",
    backup: 3,
    database: 4,
    port: 4,
    note: "Fair Usage (50% - 100% per core)",
  },
  {
    name: "Shared-12",
    price: 96000,
    ram: "12 GB",
    cpu: "6 Core",
    storage: "60 GB",
    backup: 3,
    database: 4,
    port: 4,
    note: "Fair Usage (50% - 100% per core)",
  },
];

// EPYC-HEAVY-01 Packages (Premium Performance)
const premiumPackages = [
  {
    name: "Heavy-4GB",
    price: 60000,
    ram: "4 GB",
    cpu: "200%",
    storage: "40 GB",
    backup: 5,
    database: 5,
    port: 4,
    note: "EPYC-HEAVY-01 - Dedicated/Pinned Threads",
  },
  {
    name: "Heavy-8GB",
    price: 120000,
    ram: "8 GB",
    cpu: "400%",
    storage: "80 GB",
    backup: 10,
    database: 10,
    port: 5,
    note: "EPYC-HEAVY-01 - Dedicated/Pinned Threads",
    popular: true,
  },
  {
    name: "Heavy-12GB",
    price: 180000,
    ram: "12 GB",
    cpu: "600%",
    storage: "120 GB",
    backup: 10,
    database: 10,
    port: 5,
    note: "EPYC-HEAVY-01 - Dedicated/Pinned Threads",
  },
  {
    name: "Heavy-16GB",
    price: 240000,
    ram: "16 GB",
    cpu: "600%",
    storage: "160 GB",
    backup: 15,
    database: 15,
    port: 6,
    note: "EPYC-HEAVY-01 - Dedicated/Pinned Threads",
  },
];

// Dedicated Europa (Budget King) - Germany Location
const dedicatedEuropaPackages = [
  {
    name: "EU Dedic 1",
    price: 150000,
    ram: "8 GB",
    cpu: "4 Core",
    note: "Germany Location - Ping 200ms+ - Budget Friendly",
    popular: true,
  },
  {
    name: "EU Dedic 2",
    price: 280000,
    ram: "16 GB",
    cpu: "6 Core",
    note: "Germany Location - Ping 200ms+ - Budget Friendly",
  },
];

// Dedicated Asia (Performance King) - Singapore Location
const dedicatedAsiaPackages = [
  {
    name: "SG Dedic 1",
    price: 250000,
    ram: "8 GB",
    cpu: "4 Core",
    storage: "155 GB NVMe",
    note: "Singapore Location - Low Ping - Full Access",
    popular: true,
  },
  {
    name: "SG Dedic 2",
    price: 400000,
    ram: "16 GB",
    cpu: "6 Core",
    storage: "Up to 320 GB NVMe SSD",
    note: "Singapore Location - Low Ping - Full Access",
  },
];

type CategoryType =
  | "shared"
  | "premium"
  | "dedicated-eu"
  | "dedicated-sg"
  | "rdp";

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
    switch (selectedCategory) {
      case "shared":
        return sharedPackages;
      case "premium":
        return premiumPackages;
      case "dedicated-eu":
        return dedicatedEuropaPackages;
      case "dedicated-sg":
        return dedicatedAsiaPackages;
      case "rdp":
        return [];
    }
  };

  const getCategoryTitle = () => {
    switch (selectedCategory) {
      case "shared":
        return {
          title: "Shared Packages (SG - Budget)",
          desc: "Murah Meriah, Cocok buat Pemula - Rp 8.000/GB",
        };
      case "premium":
        return {
          title: "EPYC-HEAVY-01 Packages",
          desc: "AMD EPYC - Anti-Lag, Prioritas Tinggi, Dedicated Threads",
        };
      case "dedicated-eu":
        return {
          title: "Dedicated Europa (Budget King)",
          desc: "Germany Location - Harga Murah, RAM Besar - Cocok buat Server Besar / Bot Hosting",
        };
      case "dedicated-sg":
        return {
          title: "Dedicated Asia (Performance King)",
          desc: "Singapore Location - Ping Hijau, Full Access - Khusus Server Sultan / Server Publik Besar",
        };
      case "rdp":
        return {
          title: "RDP Windows Packages",
          desc: "Windows Server with Remote Desktop",
        };
    }
  };

  const isDedicatedCategory =
    selectedCategory === "dedicated-eu" || selectedCategory === "dedicated-sg";

  return (
    <div className="min-h-screen">
      <SEO
        title="Game Server Hosting - Minecraft, FiveM, Rust & More"
        description="Premium game server hosting from Rp 8.000/month. Minecraft, FiveM, Rust and more. DDoS protection, 24/7 uptime, Pterodactyl panel. Shared and Premium options available."
        keywords="game server hosting, Minecraft hosting, FiveM hosting, Rust hosting, game server Indonesia, cheap Minecraft server, Pterodactyl hosting"
        canonicalUrl="https://bytenodes.icu/pricing/servers"
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
          <div className="inline-flex flex-wrap items-center gap-2 bg-card rounded-lg p-1.5 shadow-lg border border-border/50">
            {(
              [
                "shared",
                "premium",
                "dedicated-eu",
                "dedicated-sg",
                "rdp",
              ] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-md text-sm font-semibold transition-all ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`}
              >
                {cat === "rdp"
                  ? "RDP Windows"
                  : cat === "dedicated-eu"
                    ? "Dedicated EU"
                    : cat === "dedicated-sg"
                      ? "Dedicated SG"
                      : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
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

          {selectedCategory === "rdp" ? (
            <motion.div
              initial="hidden"
              animate={packagesInView ? "visible" : "hidden"}
              variants={scrollVariants}
              className="max-w-2xl mx-auto"
            >
              <Card className="p-12 text-center border-primary/20 bg-gradient-to-b from-card to-primary/5">
                <Clock className="w-16 h-16 mx-auto mb-6 text-primary" />
                <h3 className="text-3xl font-bold mb-4">Coming Soon</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  RDP Windows packages are currently under development. Stay
                  tuned for updates!
                </p>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg">Join Discord for Updates</Button>
                </a>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={packagesInView ? "visible" : "hidden"}
              className={`grid ${isDedicatedCategory ? "md:grid-cols-2 max-w-4xl" : "md:grid-cols-2 lg:grid-cols-3 max-w-7xl"} gap-6 mx-auto`}
            >
              {getPackages().map((pkg, index) => (
                <motion.div key={index} variants={scrollVariants}>
                  <Card
                    className={`p-6 relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${pkg.popular ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card to-primary/5" : "border-border/50 hover:border-primary/50"} ${selectedCategory === "premium" ? "ring-1 ring-orange-500/20" : ""}`}
                  >
                    {pkg.popular && selectedCategory !== "premium" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        Best Seller
                      </div>
                    )}
                    {selectedCategory === "premium" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {pkg.popular && (
                          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                            Best Seller
                          </span>
                        )}
                        <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                          <Zap className="w-3 h-3" />
                          HIGH PERFORMANCE
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      {selectedCategory === "premium" ? (
                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                          <Cpu className="w-6 h-6 text-white" />
                        </div>
                      ) : (
                        <img
                          src={minecraftLogo}
                          alt="Minecraft"
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                        />
                      )}
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      {selectedCategory === "premium" && (
                        <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold bg-orange-500/10 text-orange-500 rounded border border-orange-500/20">
                          AMD EPYC™
                        </span>
                      )}
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
                            {!(pkg as any).storage.includes("NVMe")
                              ? " SSD"
                              : ""}
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
          )}
        </div>
      </section>
      <GameSupportLogos />
      <Footer />
    </div>
  );
};

export default PricingServer;
