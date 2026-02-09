import type { Metadata } from "next";
import PricingVPS from "@/views/PricingVPS";

export const metadata: Metadata = {
  title: "VPS Hosting - Dedicated Resources & Full Control",
  description:
    "Premium VPS hosting from Rp 65.000/month. Dedicated resources, full root access, NVMe storage. Perfect for applications requiring high performance and control.",
  keywords:
    "VPS hosting, virtual private server, dedicated VPS, Linux VPS, Ubuntu VPS, cheap VPS Indonesia, NVMe VPS",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/vps",
  },
};

export default function PricingVPSPage() {
  return <PricingVPS />;
}
