import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Harga & Paket - Game Server, VPS, Web Hosting Murah | ByteNodes",
  description: "Daftar harga lengkap ByteNodes: Game server Minecraft/FiveM mulai Rp 8.000/GB, VPS dedicated mulai Rp 65.000, Discord bot custom, dan web hosting. Harga transparan, tanpa biaya tersembunyi.",
  keywords: [
    "harga game server indonesia",
    "harga vps murah",
    "paket minecraft hosting",
    "harga discord bot",
    "web hosting murah",
    "pricing hosting indonesia",
    "paket vps dedicated",
    "harga fivem hosting"
  ],
  alternates: {
    canonical: "https://bytenodes.com/pricing",
  },
  openGraph: {
    title: "Harga & Paket Hosting ByteNodes - Transparan & Terjangkau",
    description: "Lihat daftar harga lengkap game server, VPS, Discord bot, dan web hosting dengan harga terjangkau dan transparan.",
    url: "https://bytenodes.com/pricing",
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}