import type { Metadata } from "next";
import Script from "next/script";
import About from "@/views/About";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Us - ByteNodes Story & Mission",
  description:
    "Learn about ByteNodes, founded by Salman and Davin from SMK Negeri 13 Bandung. From a student passion project to a trusted hosting provider serving thousands of clients across Indonesia and Southeast Asia.",
  keywords:
    "ByteNodes about, hosting company, Indonesia hosting, SMK Negeri 13 Bandung, web hosting company, hosting provider story",
  alternates: {
    canonical: "https://bytenodes.icu/about",
  },
  openGraph: {
    title: "About Us - ByteNodes Story & Mission",
    description:
      "Learn about ByteNodes journey from a student project to a trusted hosting provider across Indonesia.",
    url: "https://bytenodes.icu/about",
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

export default function AboutPage() {
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://bytenodes.icu/" },
    { name: "About", url: "https://bytenodes.icu/about" },
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
      <About />
    </>
  );
}
