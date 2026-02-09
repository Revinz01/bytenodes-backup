import type { Metadata } from "next";
import Script from "next/script";
import Contact from "@/views/Contact";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact Us - 24/7 Hosting Support | ByteNodes",
  description:
    "Contact ByteNodes for hosting support and inquiries. Available via WhatsApp, Email, Discord, and Instagram. 24/7 customer support for all hosting services.",
  keywords:
    "ByteNodes contact, hosting support, customer service, technical support, WhatsApp support, Indonesia hosting support",
  alternates: {
    canonical: "https://bytenodes.icu/contact",
  },
  openGraph: {
    title: "Contact Us - 24/7 Hosting Support",
    description:
      "Get in touch with ByteNodes support team. WhatsApp, Email, Discord, Instagram. 24/7 availability.",
    url: "https://bytenodes.icu/contact",
    type: "website",
    images: [
      {
        url: "https://bytenodes.icu/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "Contact", url: "https://bytenodes.icu/contact" },
  ]);

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Contact />
    </>
  );
}
