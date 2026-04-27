import type { GameContent } from "./pricing-game-server/types";
import PricingGameServerShell from "./pricing-game-server/PricingGameServerShell";

const fivemContent: GameContent = {
  title: "FiveM Server Plans",
  description:
    "Paket FiveM Elite hingga Ultra dengan performa tinggi untuk roleplay server skala besar.",
  canonical: "https://bytenodes.icu/pricing/server/fivem",
  highlights: [
    "Proteksi DDoS 24/7",
    "Latency rendah",
    "Support teknis khusus FiveM",
  ],
  plans: [
    {
      name: "FVM Elite #1",
      ram: "8 GB",
      slots: "32 Slot",
      priceRp: 450000,
      promoPriceRp: 325000,
    },
    {
      name: "FVM Elite #2",
      ram: "16 GB",
      slots: "64 Slot",
      priceRp: 750000,
      promoPriceRp: 575000,
      popular: true,
    },
    {
      name: "FVM Extreme #1",
      ram: "32 GB",
      slots: "128 Slot",
      cpuTag: "Genoa",
      priceRp: 1250000,
      promoPriceRp: 950000,
    },
    {
      name: "FVM Extreme #2",
      ram: "64 GB",
      slots: "250 Slot",
      cpuTag: "Genoa",
      priceRp: 2150000,
      promoPriceRp: 1650000,
    },
    {
      name: "FVM Ultra (RZ)",
      ram: "16 GB",
      slots: "150 Slot (Pro)",
      cpuTag: "Ryzen 9",
      priceRp: 1450000,
      promoPriceRp: 1150000,
    },
  ],
};

export default function PricingFiveMServer() {
  return <PricingGameServerShell game="fivem" content={fivemContent} />;
}
