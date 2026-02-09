import type { Metadata } from "next";
import Script from "next/script";
import FAQ from "@/views/FAQ";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ - Common Questions About ByteNodes Hosting",
  description:
    "Find answers to frequently asked questions about ByteNodes hosting services. Learn about setup, billing, support, and features.",
  keywords:
    "FAQ hosting, ByteNodes FAQ, hosting questions, game server FAQ, Discord bot FAQ, VPS FAQ, website hosting FAQ",
  alternates: {
    canonical: "https://bytenodes.icu/faq",
  },
  openGraph: {
    title: "FAQ - Common Questions About ByteNodes Hosting",
    description:
      "Get answers to commonly asked questions about our hosting services.",
    url: "https://bytenodes.icu/faq",
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

export default function FAQPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "FAQ", url: "https://bytenodes.icu/faq" },
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
      <FAQ />
    </>
  );
}
