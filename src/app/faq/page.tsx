import type { Metadata } from "next";
import FAQ from "@/views/FAQ";

export const metadata: Metadata = {
  title: "FAQ - Pertanyaan Yang Sering Diajukan",
  description:
    "Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan hosting ByteNodes.",
  alternates: {
    canonical: "https://bytenodes.icu/faq",
  },
};

export default function FAQPage() {
  return <FAQ />;
}
