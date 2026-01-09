import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingContent from "@/components/pages/PricingContent";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Transparent and competitive pricing for all ByteNodes services. Choose from our flexible plans for game servers, VPS, bots, and websites.",
  openGraph: {
    title: "Pricing Plans | ByteNodes",
    description: "Transparent and competitive pricing for all ByteNodes services.",
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingContent />
      <Footer />
    </div>
  );
}
