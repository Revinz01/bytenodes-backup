import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PricingWebsiteContent from "@/components/pages/PricingWebsiteContent";

export const metadata: Metadata = {
  title: "Website Development Pricing",
  description: "Professional website development services. From landing pages to full-stack applications. Modern, responsive, and SEO-optimized websites.",
  openGraph: {
    title: "Website Development Pricing | ByteNodes",
    description: "Professional website development services.",
  },
};

export default function PricingWebsitePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PricingWebsiteContent />
      <Footer />
    </div>
  );
}
