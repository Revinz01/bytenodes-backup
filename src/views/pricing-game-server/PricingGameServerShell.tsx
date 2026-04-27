"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

import type { GameContent, GamePlan, GameType } from "./types";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

const gameLogoByType: Record<GameType, { src: string; alt: string }> = {
  minecraft: { src: "/minecraft-logo.png", alt: "Minecraft logo" },
  fivem: { src: "/fivem-logo.png", alt: "FiveM logo" },
  samp: { src: "/samp-logo.png", alt: "SA:MP logo" },
};

const formatPrice = (price: number) => `Rp ${price.toLocaleString("id-ID")}`;

type PricingGameServerShellProps = {
  game: GameType;
  content: GameContent;
};

export default function PricingGameServerShell({
  game,
  content,
}: PricingGameServerShellProps) {
  const gameLogo = gameLogoByType[game];
  const minecraftSections =
    game === "minecraft" ? (content.sections ?? []) : [];
  const [activeSectionTitle, setActiveSectionTitle] = useState<string>("");

  useEffect(() => {
    if (minecraftSections.length > 0) {
      setActiveSectionTitle(minecraftSections[0].title);
    }
  }, [minecraftSections]);

  const activeMinecraftSection = useMemo(
    () =>
      minecraftSections.find(
        (section) => section.title === activeSectionTitle,
      ) ?? minecraftSections[0],
    [minecraftSections, activeSectionTitle],
  );

  const getMinecraftSectionLabel = (title: string) =>
    title.replace(/^Minecraft\s+/i, "");

  const renderPlanCard = (plan: GamePlan) => (
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
          <div key={highlight} className="flex items-start gap-2 text-sm">
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
  );

  return (
    <div className="min-h-screen">
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

          {game === "minecraft" && minecraftSections.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 bg-card rounded-lg p-1.5 border border-border/50 max-w-max mx-auto">
              {minecraftSections.map((section) => (
                <Button
                  key={section.title}
                  type="button"
                  variant={
                    activeMinecraftSection?.title === section.title
                      ? "default"
                      : "ghost"
                  }
                  size="sm"
                  onClick={() => setActiveSectionTitle(section.title)}
                >
                  {getMinecraftSectionLabel(section.title)}
                </Button>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          {game === "minecraft" && activeMinecraftSection ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMinecraftSection.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="max-w-7xl mx-auto"
              >
                <div>
                  <div className="mb-6 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {activeMinecraftSection.title}
                    </h2>
                    {activeMinecraftSection.description && (
                      <p className="text-muted-foreground max-w-3xl">
                        {activeMinecraftSection.description}
                      </p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {activeMinecraftSection.plans.map(renderPlanCard)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : content.sections ? (
            <div className="space-y-14 max-w-7xl mx-auto">
              {content.sections.map((section) => (
                <div key={section.title}>
                  <div className="mb-6 text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="text-muted-foreground max-w-3xl">
                        {section.description}
                      </p>
                    )}
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {section.plans.map(renderPlanCard)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {content.plans?.map(renderPlanCard)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
