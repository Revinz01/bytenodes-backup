import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Harga Discord Bot Custom - Development Bot Premium | ByteNodes",
  description: "Paket Discord bot custom mulai Rp 15.000: Bot Starter, Basic, Premium, hingga Enterprise. Fitur moderation, music, economy, custom commands, dan hosting gratis. Desain profesional dengan TypeScript.",
  keywords: [
    "discord bot murah",
    "bot discord custom indonesia",
    "jasa bikin bot discord",
    "discord bot development",
    "bot moderation discord",
    "bot music discord",
    "discord bot typescript",
    "hosting bot discord gratis"
  ],
  alternates: {
    canonical: "https://bytenodes.com/pricing/bot",
  },
  openGraph: {
    title: "Harga Discord Bot Custom - Mulai Rp 15.000 | ByteNodes",
    description: "Discord bot custom dengan fitur lengkap: moderation, music, economy, dan hosting gratis. Clean code TypeScript.",
    url: "https://bytenodes.com/pricing/bot",
  },
};

export default function PricingBotLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}