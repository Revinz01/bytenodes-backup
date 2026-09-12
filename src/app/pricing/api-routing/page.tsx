import type { Metadata } from "next";
import PricingApiRouting from "@/views/PricingApiRouting";

export const metadata: Metadata = {
  title: "API Endpoint & Advanced Routing - Gemini Flash, Opus, Hermes & 9router",
  description:
    "Akses API AI premium (Gemini Flash & Anthropic Opus) tanpa kartu kredit dan Hermes & 9router environment siap pakai. Kuota stabil, latency rendah, slot terbatas.",
  keywords:
    "API endpoint Indonesia, Gemini Flash API, Anthropic Opus API, Hermes environment, 9router hosting, AI proxy server, high performance routing node",
  alternates: {
    canonical: "https://bytenodes.icu/pricing/api-routing",
  },
};

export default function PricingApiRoutingPage() {
  return <PricingApiRouting />;
}
