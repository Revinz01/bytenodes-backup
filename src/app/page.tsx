import type { Metadata } from "next";
import Script from "next/script";
import Index from "@/views/Index";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "ByteNodes - Professional Hosting Solutions Indonesia",
  description:
    "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bot Hosting, and Website Hosting services. 24/7 customer support, affordable pricing from ByteNodes Indonesia.",
  keywords:
    "hosting, VPS hosting, dedicated server, Discord bot hosting, website hosting, cloud hosting, game server hosting, Indonesia hosting, ByteNodes, premium hosting, affordable hosting",
  alternates: {
    canonical: "https://bytenodes.icu/",
    languages: {
      "en-US": "https://bytenodes.icu/",
      "id-ID": "https://bytenodes.icu/",
    },
  },
  openGraph: {
    title: "ByteNodes - Professional Hosting Solutions Indonesia",
    description:
      "Enterprise-grade hosting with 99.9% uptime. VPS, Dedicated Servers, Discord Bots, Website Hosting. 24/7 Support.",
    url: "https://bytenodes.icu/",
    type: "website",
    siteName: "ByteNodes",
    images: [
      {
        url: "https://bytenodes.icu/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteNodes - Professional Hosting Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteNodes - Professional Hosting Solutions Indonesia",
    description:
      "Enterprise-grade hosting with 99.9% uptime. VPS, Dedicated Servers, Discord Bots, Website Hosting.",
    images: ["https://bytenodes.icu/og-image.png"],
  },
};

export default function HomePage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
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
      <Index />
    </>
  );
}
