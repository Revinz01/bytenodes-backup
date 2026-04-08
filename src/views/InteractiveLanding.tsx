import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { HeroGSAP } from "@/components/HeroGSAP";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { HorizontalServicesScroll } from "@/components/HorizontalServicesScroll";
import { WhyChooseUsGSAP } from "@/components/WhyChooseUsGSAP";
import { AnimatedStatsBar } from "@/components/AnimatedStatsBar";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { TechnologyStack } from "@/components/TechnologyStack";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

const InteractiveLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ByteNodes",
    url: "https://bytenodes.icu",
    description:
      "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bytenodes.icu/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="ByteNodes - Professional Hosting Solutions"
        description="Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services with 24/7 support."
        keywords="hosting, VPS hosting, dedicated server, Discord bot hosting, website hosting, cloud hosting, game server hosting, ByteNodes, premium hosting"
        canonicalUrl="https://bytenodes.icu/"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />
      
      {/* Hero with GSAP parallax orbs and word-by-word reveal */}
      <HeroGSAP />
      
      {/* Scroll-pinned storytelling section */}
      <ScrollStorySection />
      
      {/* Horizontal scroll services showcase */}
      <HorizontalServicesScroll />
      
      {/* Animated stats bar with count-up */}
      <AnimatedStatsBar />
      
      {/* Why Choose Us with 3D tilt cards and stat counters */}
      <WhyChooseUsGSAP />
      
      {/* Infinite marquee testimonials */}
      <TestimonialsMarquee />
      
      {/* Technology stack */}
      <TechnologyStack />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InteractiveLanding;
