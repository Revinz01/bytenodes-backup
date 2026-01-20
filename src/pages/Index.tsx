import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { TechnologyStack } from "@/components/TechnologyStack";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ByteNodes',
    url: 'https://bytenodes.icu',
    description: 'Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bytenodes.icu/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="ByteNodes - Professional Hosting Solutions"
        description="Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services with 24/7 support."
        keywords="hosting, VPS hosting, dedicated server, Discord bot hosting, website hosting, cloud hosting, game server hosting, ByteNodes, premium hosting"
        canonicalUrl="https://bytenodes.icu/"
        structuredData={structuredData}
      />
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
};

export default Index;
