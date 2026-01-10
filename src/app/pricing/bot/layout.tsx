import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Custom Bot Development Pricing",
  description:
    "Professional Discord bot development services. Custom features, moderation tools, and 24/7 uptime. Get a bot tailored to your community needs.",
  openGraph: {
    title: "Custom Bot Development Pricing | ByteNodes",
    description: "Professional Discord bot development services.",
  },
};

export default function PricingBotLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}