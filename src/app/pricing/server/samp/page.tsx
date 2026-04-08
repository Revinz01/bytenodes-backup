import type { Metadata } from "next";
import PricingGameServer from "@/views/PricingGameServer";

export const metadata: Metadata = {
  title: "SA:MP Server Hosting Plans",
  description:
    "Paket SA:MP Pro hingga Ultimate untuk komunitas hingga Mega Server roleplay.",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/server/samp",
  },
};

export default function PricingSampPage() {
  return <PricingGameServer game="samp" />;
}
