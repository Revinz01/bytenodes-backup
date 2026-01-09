import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SLAContent from "@/components/pages/legal/SLAContent";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA)",
  description: "ByteNodes Service Level Agreement. Our commitment to uptime, performance, and reliability.",
  openGraph: {
    title: "Service Level Agreement | ByteNodes",
    description: "ByteNodes SLA and uptime guarantee.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SLAPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <SLAContent />
      <Footer />
    </div>
  );
}
