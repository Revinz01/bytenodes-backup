import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FAQContent from "@/components/pages/FAQContent";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about ByteNodes services, billing, support, and technical specifications.",
  openGraph: {
    title: "FAQ | ByteNodes",
    description: "Find answers to common questions about ByteNodes services.",
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FAQContent />
      <Footer />
    </div>
  );
}
