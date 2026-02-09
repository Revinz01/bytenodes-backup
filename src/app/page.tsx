import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: "ByteNodes - Professional Hosting Solutions",
  description:
    "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services with 24/7 support.",
  keywords:
    "hosting, VPS hosting, dedicated server, Discord bot hosting, website hosting, cloud hosting, game server hosting, ByteNodes, premium hosting",
  alternates: {
    canonical: "https://bytenodes.icu/",
  },
};

export default function HomePage() {
  return <Index />;
}
