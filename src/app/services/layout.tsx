import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore ByteNodes comprehensive range of services including game server hosting, VPS solutions, custom bot development, and professional website services.",
  openGraph: {
    title: "Our Services | ByteNodes",
    description: "Explore ByteNodes comprehensive range of services including game server hosting, VPS solutions, custom bot development, and professional website services.",
  },
};

export default function ServicesLayout({
  children,
}: { children: ReactNode }) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}