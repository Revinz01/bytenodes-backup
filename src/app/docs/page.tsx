import type { Metadata } from "next";
import Script from "next/script";
import Documentation from "@/views/Documentation";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Documentation - ByteNodes Hosting Guides & Tutorials",
  description:
    "Complete guides and tutorials for ByteNodes hosting services. Learn about setup, panel management, security, API integration, and troubleshooting.",
  keywords:
    "hosting documentation, ByteNodes docs, game server docs, Discord bot docs, VPS guide, website hosting guide, setup tutorial",
  alternates: {
    canonical: "https://bytenodes.icu/docs",
  },
  openGraph: {
    title: "Documentation - ByteNodes Hosting Guides",
    description:
      "Complete guides for ByteNodes hosting services. Setup, management, security, and troubleshooting.",
    url: "https://bytenodes.icu/docs",
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

export default function DocsPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "Documentation", url: "https://bytenodes.icu/docs" },
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
      <Documentation />
    </>
  );
}
