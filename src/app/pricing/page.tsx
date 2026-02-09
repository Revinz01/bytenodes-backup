import type { Metadata } from "next";
import Script from "next/script";
import Pricing from "@/views/Pricing";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Pricing Plans - Affordable Hosting Solutions | ByteNodes",
  description:
    "Transparent pricing for all hosting services. Game Server hosting from Rp 8.000, Discord Bot hosting from Rp 10.000, VPS from Rp 50.000, Website hosting from Rp 25.000. No hidden fees, 24/7 support included.",
  keywords:
    "hosting pricing, cheap VPS, affordable game server, Discord bot pricing, website hosting price, ByteNodes pricing, Indonesia hosting costs",
  alternates: {
    canonical: "https://bytenodes.icu/pricing",
  },
  openGraph: {
    title: "Pricing Plans - Affordable Hosting Solutions",
    description:
      "Transparent pricing with no hidden fees. Game Servers, Discord Bots, VPS, Website Hosting - 24/7 support included.",
    url: "https://bytenodes.icu/pricing",
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

export default function PricingPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "Pricing", url: "https://bytenodes.icu/pricing" },
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
      <Pricing />
    </>
  );
}
