import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "VPS Hosting Pricing",
  description: "High-performance VPS hosting with full root access. Scalable resources, SSD storage, and reliable infrastructure for your projects.",
  openGraph: {
    title: "VPS Hosting Pricing | ByteNodes",
    description: "High-performance VPS hosting with full root access.",
  },
};

export default function PricingVpsLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}