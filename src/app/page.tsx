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
  title: "Home",
  description: "ByteNodes - Your trusted partner for premium game server hosting, VPS solutions, and custom development services.",
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
