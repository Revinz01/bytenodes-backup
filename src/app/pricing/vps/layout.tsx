import type { Metadata } from "next";
import { ReactNode } from "react";
import { PageTransition } from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Harga VPS Murah Indonesia - Dedicated KVM & Premium | ByteNodes",
  description: "VPS murah Indonesia mulai Rp 65.000/bulan: VPS Dedicated KVM dengan Xeon processor dan VPS Premium Intel Gen 12 NVMe. Full root access, IPv4 dedicated, DDoS protection, uptime 99.9%. Ideal untuk website, game server, dan aplikasi.",
  keywords: [
    "vps murah indonesia",
    "vps kvm indonesia",
    "vps dedicated murah",
    "vps ssd nvme",
    "vps root access",
    "vps gaming indonesia",
    "cheap vps indonesia",
    "linux vps murah",
    "windows vps indonesia"
  ],
  alternates: {
    canonical: "https://bytenodes.com/pricing/vps",
  },
  openGraph: {
    title: "VPS Murah Indonesia - Mulai Rp 65.000/bulan | ByteNodes",
    description: "VPS Dedicated & Premium dengan performa tinggi, full root access, dan DDoS protection. Ideal untuk semua kebutuhan.",
    url: "https://bytenodes.com/pricing/vps",
  },
};

export default function PricingVpsLayout({ children }: { children: ReactNode }) {
    return (
        <PageTransition>{children}</PageTransition>
    );
}