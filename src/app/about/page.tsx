import type { Metadata } from "next";
import About from "@/views/About";

export const metadata: Metadata = {
  title: "About Us - Our Story",
  description:
    "Learn about ByteNodes, founded by Salman and Davin from SMK Negeri 13 Bandung. From a student passion project to a trusted hosting provider serving clients across Indonesia.",
  keywords:
    "ByteNodes about, hosting company, Indonesia hosting, SMK Negeri 13 Bandung, web hosting company",
  alternates: {
    canonical: "https://bytenodes.icu/about",
  },
};

export default function AboutPage() {
  return <About />;
}
