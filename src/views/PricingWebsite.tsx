"use client";

import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  scrollVariants,
  staggerContainer,
} from "@/hooks/useScrollAnimation";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

// Website Hosting Packages with cPanel
const websitePackages = [
  {
    name: "Paket Basic",
    priceRp: 50000,
    priceUsd: 3.1,
    storage: "1 GB SSD",
    domains: "1 Add Domain",
    subdomains: "2 Add Sub-Domain",
    databases: "3 Mysql Database",
    features: [
      "Unlimited Bandwidth",
      "Gratis cPanel",
      "Gratis SSL",
      "Gratis Imunify360",
      "Support 24/7",
    ],
    popular: false,
  },
  {
    name: "Paket Premium",
    priceRp: 100000,
    priceUsd: 6.2,
    storage: "5 GB SSD",
    domains: "2 Add Domain",
    subdomains: "Unlimited Sub-Domain",
    databases: "Unlimited Mysql Database",
    features: [
      "Unlimited Bandwidth",
      "Gratis cPanel",
      "Gratis SSL",
      "Gratis Imunify360",
      "Support 24/7",
      "Gratis Instalasi Aplikasi RDM di VPS",
    ],
    popular: true,
  },
  {
    name: "Paket Platinum",
    priceRp: 120000,
    priceUsd: 7.5,
    storage: "15 GB SSD",
    domains: "5 Add Domain",
    subdomains: "Unlimited Sub-Domain",
    databases: "Unlimited Mysql Database",
    features: [
      "Unlimited Bandwidth",
      "Gratis cPanel",
      "Gratis SSL",
      "Gratis Imunify360",
      "Support 24/7",
      "Gratis Instalasi Aplikasi RDM di VPS",
    ],
    popular: false,
  },
];

const PricingWebsite = () => {
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: packagesRef, isInView: packagesInView } = useScrollAnimation();

  const formatPrice = (priceRp: number, priceUsd: number) => ({
    rp: `Rp ${priceRp.toLocaleString("id-ID")}`,
    usd: `~$${priceUsd.toFixed(2)}`,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Website Hosting",
    description:
      "Professional website hosting with free SSL, auto backup, and various performance tiers starting from Rp 50.000",
    brand: { "@type": "Brand", name: "ByteNodes" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "50000",
      highPrice: "120000",
      offerCount: "3",
    },
  };

  const getTitle = () => {
    return "Website Hosting dengan cPanel";
  };

  const getDescription = () => {
    return "Hosting website profesional dengan cPanel, SSL gratis, dan dukungan 24/7 untuk semua paket.";
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Website Hosting dengan cPanel - Fast, Secure & Reliable"
        description="Professional website hosting dengan cPanel dari Rp 50.000/month. Free SSL, auto backup, multiple tiers available. Perfect for portfolios, applications, and business websites."
        keywords="website hosting, web hosting, cPanel hosting, SSL hosting, managed hosting, Node.js hosting, PHP hosting, website hosting murah"
        canonicalUrl="https://bytenodes.icu/pricing/website"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />

      {/* Hero Section */}
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
              🌐 Website Hosting Indonesia
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-foreground">
            WEBSITE <span className="text-primary">HOSTING</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Reliable and affordable hosting for your websites. Fast performance
            with free SSL and automatic backups.
          </p>
        </div>
      </motion.div>

      {/* Packages */}
      <section ref={packagesRef} className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            variants={scrollVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {getTitle()}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {getDescription()}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={packagesInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {websitePackages.map((pkg, index) => {
              const price = formatPrice(pkg.priceRp, pkg.priceUsd);
              return (
                <motion.div key={index} variants={scrollVariants}>
                  <Card
                    className={`p-6 relative hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 ${
                      pkg.popular
                        ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card via-card to-primary/5"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-bold rounded-full shadow-md">
                        POPULAR
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <Globe className="w-10 h-10 text-primary mx-auto mb-3" />
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

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{pkg.storage}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{pkg.domains}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{pkg.subdomains}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{pkg.databases}</span>
                      </div>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Website Hosting?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Free SSL</h3>
              <p className="text-sm text-muted-foreground">
                Secure your website with free SSL certificates for all domains
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Auto Backup</h3>
              <p className="text-sm text-muted-foreground">
                Automatic daily backups to protect your website data
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Fast Performance</h3>
              <p className="text-sm text-muted-foreground">
                NVMe SSD storage for blazing fast website loading speeds
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingWebsite;
