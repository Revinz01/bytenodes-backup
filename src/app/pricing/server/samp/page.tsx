import type { Metadata } from "next";
import PricingSampServer from "@/views/PricingSampServer";

export const metadata: Metadata = {
  title: "SA:MP Server Hosting Plans",
  description:
    "Paket SA:MP Pro hingga Ultimate untuk komunitas hingga Mega Server roleplay.",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/server/samp",
  },
};

export default function PricingSampPage() {
  return <PricingSampServer />;
}
