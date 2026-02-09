import type { Metadata } from "next";
import PricingWebsite from "@/views/PricingWebsite";

export const metadata: Metadata = {
  title: "Website Hosting - Fast, Secure & Reliable",
  description:
    "Professional website hosting from Rp 5.000/month. Free SSL, auto backup, multiple tiers available. Perfect for portfolios, applications, and business websites.",
  keywords:
    "website hosting, web hosting, SSL hosting, managed hosting, Node.js hosting, PHP hosting, cheap website hosting",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/website",
  },
};

export default function PricingWebsitePage() {
  return <PricingWebsite />;
}
