import type { Metadata } from "next";
import PricingServer from "@/views/PricingServer";

export const metadata: Metadata = {
  title: "Game Server Hosting - Minecraft, FiveM, Rust & More",
  description:
    "Premium game server hosting from Rp 8.000/month. Minecraft, FiveM, Rust and more. DDoS protection, 24/7 uptime, Pterodactyl panel.",
  keywords:
    "game server hosting, Minecraft hosting, FiveM hosting, Rust hosting, game server Indonesia, cheap Minecraft server, Pterodactyl hosting",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/servers",
  },
};

export default function PricingServerPage() {
  return <PricingServer />;
}
