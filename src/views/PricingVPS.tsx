"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Server, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { GameSupportLogos } from "@/components/GameSupportLogos";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

// VPS KVM Packages - AMD EPYC Milan Series
const vpsKvmPackages = [
  {
    name: "VML-01",
    priceRp: 269000,
    priceUsd: 16.8,
    ram: "8 GB",
    cores: "4 Core",
    storage: "50 GB NVMe",
    cpu: "AMD EPYC Milan Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "24/7 Support",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VML-02",
    priceRp: 499000,
    priceUsd: 31.1,
    ram: "16 GB",
    cores: "8 Core",
    storage: "100 GB NVMe",
    cpu: "AMD EPYC Milan Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: true,
  },
  {
    name: "VML-03",
    priceRp: 699000,
    priceUsd: 43.6,
    ram: "32 GB",
    cores: "12 Core",
    storage: "200 GB NVMe",
    cpu: "AMD EPYC Milan Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
      "Dedicated IP",
    ],
    popular: false,
  },
  {
    name: "VML-04",
    priceRp: 925000,
    priceUsd: 57.8,
    ram: "64 GB",
    cores: "16 Core",
    storage: "300 GB NVMe",
    cpu: "AMD EPYC Milan Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Premium Support",
      "DDoS Protection",
      "Dedicated IP",
    ],
    popular: false,
  },
];

// VPS Packages - AMD Ryzen 9 7900
const vpsRyzenPackages = [
  {
    name: "VRZ-LT",
    priceRp: 375000,
    priceUsd: 23.4,
    ram: "4 GB",
    cores: "2 vCore",
    storage: "60 GB NVMe",
    cpu: "AMD Ryzen 9 7900",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "24/7 Support",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VRZ-MD",
    priceRp: 479000,
    priceUsd: 29.9,
    ram: "8 GB",
    cores: "4 vCore",
    storage: "120 GB NVMe",
    cpu: "AMD Ryzen 9 7900",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: true,
  },
  {
    name: "VRZ-HG",
    priceRp: 629000,
    priceUsd: 39.3,
    ram: "10 GB",
    cores: "4 vCore",
    storage: "150 GB NVMe",
    cpu: "AMD Ryzen 9 7900",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VRZ-EX",
    priceRp: 985000,
    priceUsd: 61.6,
    ram: "16 GB",
    cores: "6 vCore",
    storage: "220 GB NVMe",
    cpu: "AMD Ryzen 9 7900",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Premium Support",
      "DDoS Protection",
      "Dedicated IP",
    ],
    popular: false,
  },
];

// VPS Packages - AMD EPYC Genoa Series
const vpsGenoaPackages = [
  {
    name: "VGN-01",
    priceRp: 175000,
    priceUsd: 10.9,
    ram: "4 GB",
    cores: "2 vCore",
    storage: "50 GB NVMe",
    cpu: "AMD EPYC Genoa Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "24/7 Support",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VGN-02",
    priceRp: 285000,
    priceUsd: 17.8,
    ram: "8 GB",
    cores: "4 vCore",
    storage: "100 GB NVMe",
    cpu: "AMD EPYC Genoa Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: true,
  },
  {
    name: "VGN-03",
    priceRp: 479000,
    priceUsd: 29.9,
    ram: "16 GB",
    cores: "8 vCore",
    storage: "256 GB NVMe",
    cpu: "AMD EPYC Genoa Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Priority Support",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VGN-04",
    priceRp: 899000,
    priceUsd: 56.2,
    ram: "32 GB",
    cores: "10 vCore",
    storage: "512 GB NVMe",
    cpu: "AMD EPYC Genoa Series",
    features: [
      "SSD NVMe Storage",
      "Full Root Access",
      "Premium Support",
      "DDoS Protection",
      "Dedicated IP",
    ],
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

type CategoryType = "vps-kvm-milan" | "vps-ryzen" | "vps-genoa" | "custom-vps";

const PricingVPS = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>("vps-kvm-milan");
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [selectedCategory]);

  const formatPrice = (priceRp: number, priceUsd: number) => {
    return {
      rp: `Rp ${priceRp.toLocaleString("id-ID")}`,
      usd: `~$${priceUsd.toFixed(2)}`,
    };
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VPS Hosting",
    description:
      "High-performance VPS hosting with dedicated resources, full root access, and flexible configurations",
    brand: { "@type": "Brand", name: "ByteNodes" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "65000",
      highPrice: "500000",
      offerCount: "10",
    },
  };

  const getTitle = () => {
    switch (selectedCategory) {
      case "vps-kvm-milan":
        return "VPS KVM - AMD EPYC Milan Series";
      case "vps-ryzen":
        return "VPS - AMD Ryzen 9 7900";
      case "vps-genoa":
        return "VPS - AMD EPYC Genoa Series";
      case "custom-vps":
        return "Custom VPS";
      default:
        return "VPS Packages";
    }
  };

  const getDescription = () => {
    switch (selectedCategory) {
      case "vps-kvm-milan":
        return "High-performance VPS with AMD EPYC Milan processors, perfect for demanding applications and workloads";
      case "vps-ryzen":
        return "Powerful VPS with AMD Ryzen 9 7900 processors for excellent gaming and web application performance";
      case "vps-genoa":
        return "Latest generation VPS with AMD EPYC Genoa processors, optimized for maximum performance and efficiency";
      case "custom-vps":
        return "Build your own VPS with custom specifications tailored to your exact needs and budget";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="VPS Hosting - Dedicated Resources & Full Control"
        description="Premium VPS hosting from Rp 65.000/month. Dedicated resources, full root access, NVMe storage. Perfect for applications requiring high performance and control."
        keywords="VPS hosting, virtual private server, dedicated VPS, Linux VPS, Ubuntu VPS, cheap VPS Indonesia, NVMe VPS"
        canonicalUrl="https://bytenodes.icu/pricing/vps"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative pt-40 pb-20 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
            <span className="text-primary text-sm font-semibold">
              🚀 VPS & RDP Hosting
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            VPS & <span className="text-primary">RDP</span> PACKAGES
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            VPS KVM for Linux, Dedicated servers with high performance, and RDP
            Windows for various needs.
          </p>

          {/* Category Toggle */}
          <div className="flex flex-wrap justify-center gap-2 bg-card rounded-lg p-1.5 shadow-lg border border-border/50 backdrop-blur-sm">
            <button
              onClick={() => setSelectedCategory("vps-kvm-milan")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "vps-kvm-milan"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              VPS Milan
            </button>
            <button
              onClick={() => setSelectedCategory("vps-ryzen")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "vps-ryzen"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              VPS Ryzen
            </button>
            <button
              onClick={() => setSelectedCategory("vps-genoa")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "vps-genoa"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              VPS Genoa
            </button>
            <button
              onClick={() => setSelectedCategory("custom-vps")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "custom-vps"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Custom VPS
            </button>
          </div>
        </div>
      </motion.div>

      {/* Packages Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            key={`title-${animationKey}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getTitle()}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getDescription()}
            </p>
          </motion.div>

          {selectedCategory === "custom-vps" ? (
            <motion.div
              key={`custom-vps-${animationKey}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="p-8 md:p-12 border-primary/30 bg-gradient-to-b from-card to-primary/5">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Build Your Own VPS
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      You are no longer limited to our fixed plans. You now have
                      the freedom to request custom specifications perfectly
                      tailored to your project or server needs.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Custom RAM</p>
                          <p className="text-sm text-muted-foreground">
                            Choose the amount you need
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Custom CPU / Cores</p>
                          <p className="text-sm text-muted-foreground">
                            Scale your processing power
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Custom Storage (NVMe)</p>
                          <p className="text-sm text-muted-foreground">
                            Expand your storage capacity
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-card border border-primary/20 rounded-lg p-6 mb-6">
                      <h4 className="font-bold mb-4">Starting Configuration</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-3 border-b border-border/50">
                          <span className="text-muted-foreground">RAM:</span>
                          <span className="font-semibold">4 GB</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/50">
                          <span className="text-muted-foreground">CPU:</span>
                          <span className="font-semibold">2 Cores</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/50">
                          <span className="text-muted-foreground">
                            Storage:
                          </span>
                          <span className="font-semibold">100 GB NVMe</span>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                          <span className="font-semibold">Starting Price:</span>
                          <span className="text-2xl font-bold text-primary">
                            Rp 95.000
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">
                          /month
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                      <p className="text-sm">
                        <span className="font-semibold">
                          Need higher specs?
                        </span>{" "}
                        Want to add more RAM or extra Storage? Everything can be
                        adjusted to fit your requirements and budget!
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">How to Order:</h4>
                      <ol className="text-sm space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="font-bold text-primary min-w-6">
                            1.
                          </span>
                          <span>Open a Ticket in our support channel</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-primary min-w-6">
                            2.
                          </span>
                          <span>
                            Tell our admin the exact specifications (RAM, Cores,
                            Storage)
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-primary min-w-6">
                            3.
                          </span>
                          <span>We will deploy the server for you!</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full md:w-auto">
                      Open Support Ticket
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key={`packages-${animationKey}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              {(selectedCategory === "vps-kvm-milan"
                ? vpsKvmPackages
                : selectedCategory === "vps-ryzen"
                  ? vpsRyzenPackages
                  : vpsGenoaPackages
              ).map((pkg, index) => {
                const price = formatPrice(pkg.priceRp, pkg.priceUsd);

                return (
                  <motion.div
                    key={`${selectedCategory}-${index}`}
                    variants={itemVariants}
                  >
                    <Card
                      className={`p-6 relative hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${
                        pkg.popular
                          ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card via-card to-primary/5"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold rounded-full shadow-md">
                          Best Value
                        </div>
                      )}

                      <div className="text-center mb-6">
                        <Server className="w-10 h-10 text-primary mx-auto mb-3" />
                        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                        <div className="flex items-baseline justify-center gap-1 mb-1">
                          <span className="text-3xl font-bold text-primary">
                            {price.rp}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {price.usd}/month
                        </p>
                      </div>

                      <div className="space-y-3 mb-6 flex-grow">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pkg.ram} RAM</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pkg.cores}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{pkg.storage}</span>
                        </div>

                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}

                        <div className="pt-2 border-t border-border/50">
                          <p className="text-xs text-muted-foreground">
                            <span className="font-semibold">CPU:</span>{" "}
                            {pkg.cpu}
                          </p>
                        </div>
                      </div>

                      <a
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={`w-full ${
                            pkg.popular ? "shadow-md hover:shadow-lg" : ""
                          }`}
                          variant={pkg.popular ? "default" : "outline"}
                        >
                          Order Now
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>

      <GameSupportLogos />

      <Footer />
    </div>
  );
};

export default PricingVPS;
