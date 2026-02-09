import type { Metadata } from "next";
import Pricing from "@/views/Pricing";

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable Hosting Solutions",
  description:
    "Transparent pricing for all hosting services. Game Server hosting from Rp 8.000, Discord Bot hosting from Rp 10.000. No hidden fees, 24/7 support included.",
  keywords:
    "hosting pricing, cheap VPS, affordable game server, Discord bot pricing, website hosting price, ByteNodes pricing",
  alternates: {
    canonical: "https://bytenodes.icu/pricing",
  },
};

export default function PricingPage() {
  return <Pricing />;
}
