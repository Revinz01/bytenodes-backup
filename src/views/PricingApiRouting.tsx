"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Zap,
  Flame,
  ShieldCheck,
  Server,
  Sparkles,
  Key,
  Network,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  scrollVariants,
  staggerContainer,
} from "@/hooks/useScrollAnimation";
import SEO from "@/components/SEO";
import {
  getApiEndpointProducts,
  getRoutingEnvironmentProducts,
  formatPrice,
} from "@/lib/dataService";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

export default function PricingApiRouting() {
  const [activeTab, setActiveTab] = useState<"api" | "routing">("api");
  const { ref: heroRef, isInView: heroInView } = useScrollAnimation();
  const { ref: packagesRef, isInView: packagesInView } = useScrollAnimation();

  const apiProducts = getApiEndpointProducts();
  const routingProducts = getRoutingEnvironmentProducts();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "ByteNodes API Endpoint & Advanced Routing",
    description:
      "Akses API AI premium (Gemini Flash & Anthropic Opus) tanpa kartu kredit serta Hermes & 9router environment siap pakai untuk automation dan routing server.",
    brand: { "@type": "Brand", name: "ByteNodes" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "25000",
      highPrice: "250000",
      offerCount: "7",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="API Endpoint & Advanced Routing - Gemini Flash, Opus, Hermes & 9router"
        description="Akses API AI Gemini Flash & Anthropic Opus tanpa ribet kartu kredit dan Hermes & 9router environment siap pakai. Slot terbatas, mulai dari Rp 25.000."
        keywords="API endpoint Indonesia, Gemini Flash API, Anthropic Opus API, Hermes environment, 9router hosting, AI proxy server, high performance routing node"
        canonicalUrl="https://bytenodes.icu/pricing/api-routing"
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
        className="relative pt-36 pb-16 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-primary/10 backdrop-blur-md rounded-full border border-primary/20 shadow-inner">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary text-xs md:text-sm font-semibold tracking-wide uppercase">
              New Catalog • High Performance
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-foreground leading-tight">
            API ENDPOINT & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              ADVANCED ROUTING
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Merespons kebutuhan developer, scripter, dan server owner: Akses AI premium tanpa kartu kredit & node siap pakai untuk automasi Hermes & 9router tanpa pusing setup dari nol!
          </p>

          {/* Limited slot banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 text-sm font-medium mb-8">
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Slot Terbatas:</strong> Dibuka bertahap untuk menjaga alokasi resource premium & latensi tetap optimal.
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-4">
            <div className="bg-muted/60 p-1.5 rounded-2xl border border-border/60 inline-flex shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("api")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "api"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Key className="w-4 h-4" />
                API Endpoints
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("routing")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === "routing"
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <Network className="w-4 h-4" />
                Hermes & 9router Node
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Product Catalog Section */}
      <section ref={packagesRef} className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {activeTab === "api" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-semibold uppercase mb-3">
                  Powered by Gemini Flash & Anthropic Opus
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Pilihan Paket API Endpoint</h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Akses API berkecepatan tinggi tanpa ribet langganan kartu kredit luar negeri. Kuota stabil dan terpantau.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apiProducts.map((pkg) => (
                  <motion.div key={pkg.id} variants={scrollVariants}>
                    <Card
                      className={`h-full flex flex-col p-6 relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                        pkg.popular
                          ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card via-card to-primary/5"
                          : "border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-primary to-emerald-500 text-primary-foreground text-xs font-bold rounded-full shadow-md">
                          Most Popular
                        </div>
                      )}

                      <div className="mb-4">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {pkg.type}
                          </span>
                          <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground font-mono">
                            Slot Terbuka
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[32px]">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="my-4 py-3 border-y border-border/50">
                        {pkg.price ? (
                          <div>
                            <div className="text-2xl font-extrabold text-foreground">
                              {formatPrice(pkg.price)}
                            </div>
                            <span className="text-xs text-muted-foreground">/ bulan</span>
                          </div>
                        ) : (
                          <div>
                            <div className="text-xs text-muted-foreground">Mulai dari</div>
                            <div className="text-2xl font-extrabold text-foreground">
                              {formatPrice(pkg.startingPrice || 25000)}
                            </div>
                            <span className="text-[11px] text-emerald-400 font-medium">
                              {pkg.options ? pkg.options.join(" • ") : "Top-up balance"}
                            </span>
                          </div>
                        )}
                        <div className="mt-2 text-[11px] text-muted-foreground bg-muted/40 p-1.5 rounded-lg">
                          🤖 {pkg.models}
                        </div>
                      </div>

                      <div className="space-y-2.5 mb-6 flex-1">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                      >
                        <Button
                          className={`w-full font-semibold ${
                            pkg.popular
                              ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                              : "hover:bg-primary hover:text-primary-foreground"
                          }`}
                          variant={pkg.popular ? "default" : "outline"}
                        >
                          Pesan via Ticket
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "routing" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-xs font-semibold uppercase mb-3">
                  Terima Beres • Full Resource Node
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Hermes & 9router Environment</h2>
                <p className="text-muted-foreground text-sm sm:text-base mt-2">
                  Node terdedikasi yang telah di-setup khusus untuk menjalankan Hermes & 9router dengan performa stabil dan anti limit OOM.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {routingProducts.map((pkg) => (
                  <motion.div key={pkg.id} variants={scrollVariants}>
                    <Card
                      className={`h-full flex flex-col p-6 relative rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 ${
                        pkg.popular
                          ? "border-primary shadow-lg border-2 bg-gradient-to-b from-card via-card to-primary/5"
                          : "border-border/60 bg-card/60 backdrop-blur-sm hover:border-primary/40"
                      }`}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground text-xs font-bold rounded-full shadow-md">
                          Recommended
                        </div>
                      )}

                      <div className="mb-4">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {pkg.environment}
                          </span>
                          <span className="text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded font-mono">
                            Limited Slot
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 min-h-[32px]">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="my-4 py-3 border-y border-border/50">
                        <div className="text-2xl font-extrabold text-foreground">
                          {formatPrice(pkg.price)}
                        </div>
                        <span className="text-xs text-muted-foreground">/ bulan</span>
                        <div className="mt-2 text-[11px] text-cyan-400 font-semibold bg-cyan-950/30 border border-cyan-800/40 p-1.5 rounded-lg flex items-center justify-between">
                          <span>Alokasi Memori:</span>
                          <span className="font-bold">{pkg.ram} RAM Dedicated</span>
                        </div>
                      </div>

                      <div className="space-y-2.5 mb-6 flex-1">
                        {pkg.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={DISCORD_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                      >
                        <Button
                          className={`w-full font-semibold ${
                            pkg.popular
                              ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
                              : "hover:bg-primary hover:text-primary-foreground"
                          }`}
                          variant={pkg.popular ? "default" : "outline"}
                        >
                          Klaim Slot Sekarang
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Feature Advantage Grid */}
      <section className="py-16 px-4 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Keunggulan ByteNodes Expansion Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Kombinasi fleksibilitas API dan infrastruktur routing siap tempur untuk kebutuhan otomatisasi Anda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card/60 border border-border/50 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ultra-Low Latency</h3>
              <p className="text-sm text-muted-foreground">
                Optimasi routing endpoint langsung ke upstream AI tanpa bottleneck kartu kredit atau rate limit agresif.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/60 border border-border/50 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Turnkey Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Node Hermes dan 9router sudah siap digunakan. Tidak perlu konfigurasi rumit dari nol, tinggal masukkan target routing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/60 border border-border/50 flex flex-col items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Dedicated Resource Isolation</h3>
              <p className="text-sm text-muted-foreground">
                Setiap node mendapatkan alokasi RAM murni (2GB - 8GB+) sehingga beban task berat tetap stabil tanpa crash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-primary/10 via-card to-cyan-500/10 border border-primary/30 text-center">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground mb-4">
              Butuh Konsultasi atau Custom Slot?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base">
              Tim support kami siap membantu menghitung kebutuhan token API atau spesifikasi node yang pas untuk arsitektur Anda.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-semibold shadow-lg shadow-primary/25">
                  Buka Tiket Pemesanan di Discord
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
