import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Game Server Hosting Pricing",
  description: "Affordable and powerful game server hosting plans. Perfect for Minecraft, FiveM, and more. Starting from competitive rates with DDoS protection.",
  openGraph: {
    title: "Game Server Hosting Pricing | ByteNodes",
    description: "Affordable and powerful game server hosting plans.",
  },
};

export default function PricingServersLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}