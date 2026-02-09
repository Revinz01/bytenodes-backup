import type { Metadata } from "next";
import Documentation from "@/views/Documentation";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Panduan lengkap untuk menggunakan semua layanan ByteNodes. Getting Started, Panel Management, Security, dan lainnya.",
  alternates: {
    canonical: "https://bytenodes.icu/docs",
  },
};

export default function DocsPage() {
  return <Documentation />;
}
