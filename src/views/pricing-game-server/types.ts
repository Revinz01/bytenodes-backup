export type GameType = "minecraft" | "fivem" | "samp";

export type GamePlan = {
  name: string;
  ram: string;
  slots: string;
  cpuPercent?: string;
  storage?: string;
  backupSlots?: number;
  database?: number;
  port?: number;
  note?: string;
  priceRp: number;
  promoPriceRp?: number;
  cpuTag?: string;
  popular?: boolean;
};

export type GameSection = {
  title: string;
  description?: string;
  plans: GamePlan[];
};

export type GameContent = {
  title: string;
  description: string;
  canonical: string;
  highlights?: string[];
  plans?: GamePlan[];
  sections?: GameSection[];
};
