import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import TermsOfServiceContent from "@/components/pages/legal/TermsOfServiceContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read ByteNodes Terms of Service. Understand your rights and responsibilities when using our hosting and development services.",
  openGraph: {
    title: "Terms of Service | ByteNodes",
    description: "ByteNodes Terms of Service.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TermsOfServiceContent />
      <Footer />
    </div>
  );
}
