import type { Metadata } from "next";
import PricingMinecraftServer from "@/views/PricingMinecraftServer";

export const metadata: Metadata = {
  title: "Minecraft Server Hosting Plans",
  description:
    "Paket Minecraft server hosting dari ByteNodes dengan performa stabil, DDoS protection, dan support 24/7.",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/server/minecraft",
  },
};

export default function PricingMinecraftPage() {
  return <PricingMinecraftServer />;
}
