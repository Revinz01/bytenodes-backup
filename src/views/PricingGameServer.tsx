export { default } from "./PricingMinecraftServer";

/*

import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";

const DISCORD_URL = "https://discord.gg/2PMmPp6Yx8";

type GameType = "minecraft" | "fivem" | "samp";

type GamePlan = {
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

type GameSection = {
  title: string;
  description?: string;
  plans: GamePlan[];
};

const gameContent: Record<
  GameType,
  {
    title: string;
    description: string;
    canonical: string;
    highlights?: string[];
    plans?: GamePlan[];
    sections?: GameSection[];
  }
> = {
  minecraft: {
    title: "Minecraft Server Plans",
    description:
      "Paket Minecraft hosting dengan performa stabil, perlindungan DDoS, dan support 24/7.",
    canonical: "https://bytenodes.icu/pricing/server/minecraft",
    sections: [
      {
        title: "Minecraft Shared",
        description:
          "Pilihan hemat untuk server Minecraft kecil hingga menengah dengan resource shared yang tetap stabil.",
        plans: [
          {
            name: "BNS-01",
            ram: "2 GB",
            cpuPercent: "60%",
            storage: "15 GB SSD",
            backupSlots: 1,
            database: 1,
            port: 1,
            note: "Fair Usage (60% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 14000,
          },
          {
            name: "BNS-02",
            ram: "4 GB",
            cpuPercent: "100%",
            storage: "30 GB SSD",
            backupSlots: 1,
            database: 1,
            port: 2,
            note: "Fair Usage (100% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 26000,
          },
          {
            name: "BNP-01",
            ram: "6 GB",
            cpuPercent: "150%",
            storage: "45 GB SSD",
            backupSlots: 2,
            database: 2,
            port: 2,
            note: "Fair Usage (150% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 35000,
          },
          {
            name: "BNP-02",
            ram: "8 GB",
            cpuPercent: "200%",
            storage: "60 GB SSD",
            backupSlots: 2,
            database: 2,
            port: 2,
            note: "Fair Usage (200% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 45000,
            popular: true,
          },
          {
            name: "BNX-01",
            ram: "12 GB",
            cpuPercent: "250%",
            storage: "80 GB SSD",
            backupSlots: 3,
            database: 3,
            port: 3,
            note: "Fair Usage (250% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 65000,
          },
          {
            name: "BNX-02",
            ram: "16 GB",
            cpuPercent: "300%",
            storage: "100 GB SSD",
            backupSlots: 3,
            database: 4,
            port: 4,
            note: "Fair Usage (300% Shared CPU)",
            slots: "Minecraft Shared",
            priceRp: 88000,
          },
        ],
      },
      {
        title: "Minecraft Premium",
        description:
          "Plan premium untuk server yang butuh RAM lebih besar, CPU lebih tinggi, dan storage ekstra.",
        plans: [
          {
            name: "BNP-S1 Nano",
            ram: "1 GB",
            cpuPercent: "1 CPU",
            storage: "15 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 30000,
          },
          {
            name: "BNP-S2 Core",
            ram: "2 GB",
            cpuPercent: "2 CPU",
            storage: "30 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 52000,
          },
          {
            name: "BNP-S3 Pulse",
            ram: "4 GB",
            cpuPercent: "2 CPU",
            storage: "50 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 95000,
          },
          {
            name: "BNP-S4 Turbo",
            ram: "8 GB",
            cpuPercent: "4 CPU",
            storage: "80 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 175000,
          },
          {
            name: "BNP-S5 Quantum",
            ram: "12 GB",
            cpuPercent: "4 CPU",
            storage: "100 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 250000,
          },
          {
            name: "BNP-S6 Hyper",
            ram: "16 GB",
            cpuPercent: "6 CPU",
            storage: "120 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 315000,
          },
          {
            name: "BNP-S7 Nova",
            ram: "24 GB",
            cpuPercent: "6 CPU",
            storage: "160 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 455000,
          },
          {
            name: "BNP-S8 Titan",
            ram: "32 GB",
            cpuPercent: "8 CPU",
            storage: "200 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 590000,
          },
          {
            name: "BNP-S9 Apex",
            ram: "48 GB",
            cpuPercent: "10 CPU",
            storage: "250 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 810000,
          },
          {
            name: "BNP-S10 Infinity",
            ram: "64 GB",
            cpuPercent: "12 CPU",
            storage: "300 GB SSD",
            slots: "Minecraft Premium",
            priceRp: 1020000,
          },
        ],
      },
      {
        title: "Minecraft Private Server",
        description:
          "Private server untuk kebutuhan komunitas besar dengan modal dan harga jual yang jelas.",
        plans: [
          {
            name: "Adventurer",
            ram: "16 GB",
            cpuPercent: "4 CPU",
            storage: "100 GB SSD",
            slots: "Minecraft Private Server",
            priceRp: 630000,
            promoPriceRp: 600000,
          },
          {
            name: "Warrior",
            ram: "24 GB",
            cpuPercent: "8 CPU",
            storage: "250 GB SSD",
            slots: "Minecraft Private Server",
            priceRp: 840000,
            promoPriceRp: 800000,
*/
