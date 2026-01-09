import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PrivacyPolicyContent from "@/components/pages/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ByteNodes Privacy Policy. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | ByteNodes",
    description: "ByteNodes Privacy Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </div>
  );
}
