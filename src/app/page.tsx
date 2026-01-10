import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TechnologyStack } from "@/components/TechnologyStack";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ByteNodes - Premium Game Server Hosting & VPS Indonesia | Minecraft, FiveM, Discord Bot",
  description: "ByteNodes menyediakan game server hosting terbaik di Indonesia untuk Minecraft, FiveM, dan game lainnya. VPS murah, Discord bot custom, dan web hosting dengan performa tinggi, uptime 99.9%, dan support 24/7.",
  keywords: [
    "game server hosting indonesia",
    "minecraft server hosting murah",
    "fivem hosting indonesia",
    "vps murah indonesia",
    "discord bot hosting",
    "web hosting indonesia",
    "dedicated server indonesia",
    "pterodactyl hosting",
    "rdp murah indonesia",
    "cloud hosting indonesia"
  ],
  authors: [{ name: "ByteNodes", url: "https://bytenodes.com" }],
  creator: "ByteNodes Indonesia",
  publisher: "ByteNodes",
  alternates: {
    canonical: "https://bytenodes.com",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bytenodes.com",
    title: "ByteNodes - Premium Game Server Hosting & VPS Indonesia",
    description: "Hosting game server terbaik untuk Minecraft, FiveM, dan lainnya. VPS murah, Discord bot, web hosting dengan support 24/7 dan uptime 99.9%.",
    siteName: "ByteNodes",
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteNodes - Premium Game Server Hosting & VPS Indonesia",
    description: "Hosting game server terbaik untuk Minecraft, FiveM, VPS murah, Discord bot, dan web hosting.",
    creator: "@bytenodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Features />
      <Testimonials />
      <TechnologyStack />
      <Footer />
    </div>
  );
}
