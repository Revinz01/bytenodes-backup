import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import AcceptableUseContent from "@/components/pages/legal/AcceptableUseContent";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description: "ByteNodes Acceptable Use Policy. Guidelines for appropriate use of our hosting and development services.",
  openGraph: {
    title: "Acceptable Use Policy | ByteNodes",
    description: "ByteNodes Acceptable Use Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AcceptableUsePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AcceptableUseContent />
      <Footer />
    </div>
  );
}
