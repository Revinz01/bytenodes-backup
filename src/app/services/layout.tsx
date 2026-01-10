import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Layanan Kami - Game Server, VPS, Discord Bot, Web Hosting | ByteNodes",
  description: "Layanan hosting profesional ByteNodes: Game server (Minecraft, FiveM, Rust), VPS KVM & Premium, Discord bot custom, web hosting, dan RDP Windows. Infrastruktur modern, support 24/7, uptime 99.9%.",
  keywords: [
    "layanan hosting indonesia",
    "game server hosting",
    "vps kvm indonesia",
    "discord bot development",
    "web hosting profesional",
    "rdp windows murah",
    "dedicated server indonesia",
    "cloud hosting terpercaya"
  ],
  alternates: {
    canonical: "https://bytenodes.com/services",
  },
  openGraph: {
    title: "Layanan ByteNodes - Hosting Profesional untuk Semua Kebutuhan",
    description: "Eksplorasi layanan lengkap ByteNodes: game server, VPS, Discord bot, web hosting, dan RDP dengan performa tinggi.",
    url: "https://bytenodes.com/services",
  },
};

export default function ServicesLayout({
  children,
}: { children: ReactNode }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}