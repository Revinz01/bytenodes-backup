import type { Metadata } from "next";
import Contact from "@/views/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact ByteNodes for hosting support and inquiries. Available via WhatsApp, Email, Discord, and Instagram. 24/7 customer support for all hosting services.",
  keywords:
    "ByteNodes contact, hosting support, customer service, technical support, WhatsApp support",
  alternates: {
    canonical: "https://bytenodes.icu/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
