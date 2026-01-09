import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ByteNodes. Our support team is available 24/7 to assist you with any questions about our hosting and development services.",
  openGraph: {
    title: "Contact Us | ByteNodes",
    description: "Get in touch with ByteNodes support team.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </div>
  );
}
