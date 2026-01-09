import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore ByteNodes comprehensive range of services including game server hosting, VPS solutions, custom bot development, and professional website services.",
  openGraph: {
    title: "Our Services | ByteNodes",
    description: "Explore ByteNodes comprehensive range of services including game server hosting, VPS solutions, custom bot development, and professional website services.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesContent />
      <Footer />
    </div>
  );
}
