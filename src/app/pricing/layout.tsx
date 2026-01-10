import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: "Transparent and competitive pricing for all ByteNodes services. Choose from our flexible plans for game servers, VPS, bots, and websites.",
  openGraph: {
    title: "Pricing Plans | ByteNodes",
    description: "Transparent and competitive pricing for all ByteNodes services.",
  },
};

export default function PricingLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}