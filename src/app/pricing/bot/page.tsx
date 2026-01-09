import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingBotContent from "@/components/pages/PricingBotContent";

export const metadata: Metadata = {
  title: "Custom Bot Development Pricing",
  description: "Professional Discord bot development services. Custom features, moderation tools, and 24/7 uptime. Get a bot tailored to your community needs.",
  openGraph: {
    title: "Custom Bot Development Pricing | ByteNodes",
    description: "Professional Discord bot development services.",
  },
};

export default function PricingBotPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingBotContent />
      <Footer />
    </div>
  );
}
