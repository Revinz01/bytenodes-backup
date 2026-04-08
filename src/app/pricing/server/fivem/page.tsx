import type { Metadata } from "next";
import PricingGameServer from "@/views/PricingGameServer";

export const metadata: Metadata = {
  title: "FiveM Server Hosting Plans",
  description:
    "Paket FiveM Elite, Extreme, dan Ultra untuk roleplay server skala besar dengan resource tinggi.",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/server/fivem",
  },
};

export default function PricingFiveMPage() {
  return <PricingGameServer game="fivem" />;
}
