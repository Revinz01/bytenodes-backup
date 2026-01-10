import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Harga Game Server Minecraft, FiveM, Rust Murah | ByteNodes",
  description: "Game server hosting Indonesia mulai Rp 8.000/GB: Minecraft (Java & Bedrock), FiveM, Rust, ARK, Valheim. Pterodactyl panel, DDoS protection, support 24/7, instant setup. Paket Shared & Premium dengan lokasi Singapore & USA.",
  keywords: [
    "minecraft server hosting murah",
    "fivem hosting indonesia",
    "rust server hosting",
    "game server murah",
    "pterodactyl hosting",
    "ark server hosting",
    "valheim server hosting",
    "terraria server hosting",
    "minecraft bedrock hosting",
    "game server singapore"
  ],
  alternates: {
    canonical: "https://bytenodes.com/pricing/servers",
  },
  openGraph: {
    title: "Game Server Hosting Murah - Minecraft, FiveM, Rust | ByteNodes",
    description: "Hosting game server terbaik mulai Rp 8.000/GB. Support semua game populer dengan DDoS protection dan instant setup.",
    url: "https://bytenodes.com/pricing/servers",
  },
};

export default function PricingServersLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}