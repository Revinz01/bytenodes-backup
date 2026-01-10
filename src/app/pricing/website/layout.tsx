import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Website Development Pricing",
  description: "Professional website development services. From landing pages to full-stack applications. Modern, responsive, and SEO-optimized websites.",
  openGraph: {
    title: "Website Development Pricing | ByteNodes",
    description: "Professional website development services.",
  },
};

export default function PricingWebsiteLayout({ children }: { children: ReactNode }) {
    return (
        <>{children}</>
    );
}