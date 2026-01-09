import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingServerContent from "@/components/pages/PricingServerContent";

export const metadata: Metadata = {
  title: "Game Server Hosting Pricing",
  description: "Affordable and powerful game server hosting plans. Perfect for Minecraft, FiveM, and more. Starting from competitive rates with DDoS protection.",
  openGraph: {
    title: "Game Server Hosting Pricing | ByteNodes",
    description: "Affordable and powerful game server hosting plans.",
  },
};

export default function PricingServerPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingServerContent />
      <Footer />
    </div>
  );
}
