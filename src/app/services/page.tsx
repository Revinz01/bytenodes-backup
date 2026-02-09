import type { Metadata } from "next";
import Services from "@/views/Services";

export const metadata: Metadata = {
  title: "Our Services - Hosting Solutions",
  description:
    "Comprehensive hosting services including Game Servers, Discord Bots, VPS, and Website Hosting. Premium infrastructure with 24/7 support and 99.9% uptime guarantee.",
  keywords:
    "game server hosting, Discord bot hosting, VPS hosting, website hosting, Minecraft hosting, FiveM hosting, cloud hosting services",
  alternates: {
    canonical: "https://bytenodes.icu/services",
  },
};

export default function ServicesPage() {
  return <Services />;
}
