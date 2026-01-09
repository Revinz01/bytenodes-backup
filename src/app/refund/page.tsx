import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import RefundPolicyContent from "@/components/pages/legal/RefundPolicyContent";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "ByteNodes Refund Policy. Learn about our money-back guarantee and refund process.",
  openGraph: {
    title: "Refund Policy | ByteNodes",
    description: "ByteNodes Refund Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RefundPolicyContent />
      <Footer />
    </div>
  );
}
