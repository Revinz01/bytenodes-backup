import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ByteNodes - our mission to provide premium hosting and development services with exceptional support and reliability.",
  openGraph: {
    title: "About Us | ByteNodes",
    description: "Learn about ByteNodes and our mission.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </div>
  );
}
