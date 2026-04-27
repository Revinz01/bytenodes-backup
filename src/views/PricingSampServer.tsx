import type { GameContent } from "./pricing-game-server/types";
import PricingGameServerShell from "./pricing-game-server/PricingGameServerShell";

const sampContent: GameContent = {
  title: "SA:MP Server Plans",
  description:
    "Paket SA:MP dari komunitas kecil hingga Mega RP server dengan resource dedicated.",
  canonical: "https://bytenodes.icu/pricing/server/samp",
  highlights: [
    "Server dengan latensi rendah",
    "Optimasi resource untuk player banyak",
    "Monitoring dan support 24/7",
  ],
  plans: [
    {
      name: "SAM Pro #1",
      ram: "4 GB",
      slots: "Community",
      priceRp: 175000,
      promoPriceRp: 125000,
    },
    {
      name: "SAM Pro #2",
      ram: "8 GB",
      slots: "Medium Roleplay",
      priceRp: 350000,
      promoPriceRp: 245000,
      popular: true,
    },
    {
      name: "SAM Elite #1",
      ram: "16 GB",
      slots: "Big City RP",
      priceRp: 650000,
      promoPriceRp: 475000,
    },
    {
      name: "SAM Ultimate",
      ram: "32 GB",
      slots: "Mega Server (1k+)",
      cpuTag: "Genoa",
      priceRp: 1150000,
      promoPriceRp: 875000,
    },
  ],
};

export default function PricingSampServer() {
  return <PricingGameServerShell game="samp" content={sampContent} />;
}
