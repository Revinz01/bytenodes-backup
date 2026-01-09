import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingVPSContent from "@/components/pages/PricingVPSContent";

export const metadata: Metadata = {
  title: "VPS Hosting Pricing",
  description: "High-performance VPS hosting with full root access. Scalable resources, SSD storage, and reliable infrastructure for your projects.",
  openGraph: {
    title: "VPS Hosting Pricing | ByteNodes",
    description: "High-performance VPS hosting with full root access.",
  },
};

export default function PricingVPSPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingVPSContent />
      <Footer />
    </div>
  );
}
