import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import DocumentationContent from "@/components/pages/DocumentationContent";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Comprehensive guides and documentation for ByteNodes services. Learn how to set up and manage your servers, VPS, and more.",
  openGraph: {
    title: "Documentation | ByteNodes",
    description: "Comprehensive guides and documentation for ByteNodes services.",
  },
};

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DocumentationContent />
      <Footer />
    </div>
  );
}
