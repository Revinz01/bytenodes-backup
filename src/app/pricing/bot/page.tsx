import type { Metadata } from "next";
import PricingBot from "@/views/PricingBot";

export const metadata: Metadata = {
  title: "Discord Bot Hosting Pricing - 24/7 Uptime",
  description:
    "Affordable Discord Bot Hosting starting from Rp 10.000/month. 24/7 uptime, auto-restart, multiple instances support. Perfect for Discord communities of all sizes.",
  keywords:
    "Discord bot hosting, Discord hosting, bot hosting Indonesia, cheap Discord bot hosting, 24/7 bot hosting, auto restart",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/bot",
  },
};

export default function PricingBotPage() {
  return <PricingBot />;
}
