import type { Metadata } from "next";
import Script from "next/script";
import Services from "@/views/Services";
import {
  createServiceSchema,
  createBreadcrumbSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Hosting Services - Game Servers, Discord Bots, VPS | ByteNodes",
  description:
    "Comprehensive hosting services including Game Servers (Minecraft, FiveM, Rust), Discord Bots, VPS, and Website Hosting. Premium infrastructure with 24/7 support and 99.9% uptime guarantee.",
  keywords:
    "game server hosting, Discord bot hosting, VPS hosting, website hosting, Minecraft hosting, FiveM hosting, Rust hosting, cloud hosting services, dedicated servers",
  alternates: {
    canonical: "https://bytenodes.icu/services",
  },
  openGraph: {
    title: "Hosting Services - Game Servers, Discord Bots, VPS",
    description:
      "Comprehensive hosting services including Game Servers, Discord Bots, VPS, Website Hosting with 24/7 support.",
    url: "https://bytenodes.icu/services",
    type: "website",
    images: [
      {
        url: "https://bytenodes.icu/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "Services", url: "https://bytenodes.icu/services" },
  ]);

  const gameServerSchema = createServiceSchema(
    "Game Server Hosting",
    "Professional game server hosting for Minecraft, FiveM, Rust, Terraria, and SAMP",
    "IDR 10000-500000",
  );

  const discordBotSchema = createServiceSchema(
    "Discord Bot Hosting",
    "Reliable hosting for Discord bots with 99.9% uptime and premium support",
    "IDR 15000-250000",
  );

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="game-server-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gameServerSchema),
        }}
      />
      <Script
        id="discord-bot-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(discordBotSchema),
        }}
      />
      <Services />
    </>
  );
}
