import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import CookiePolicyContent from "@/components/pages/legal/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ByteNodes Cookie Policy. Understand how we use cookies to improve your experience on our website.",
  openGraph: {
    title: "Cookie Policy | ByteNodes",
    description: "ByteNodes Cookie Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <CookiePolicyContent />
      <Footer />
    </div>
  );
}
