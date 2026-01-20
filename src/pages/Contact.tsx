import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Instagram as InstagramIcon } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import SEO from "@/components/SEO";

const Contact = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'ByteNodes',
      url: 'https://bytenodes.icu',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+62-851-2608-0236',
          contactType: 'Customer Service',
          availableLanguage: ['Indonesian', 'English'],
          areaServed: 'ID'
        },
        {
          '@type': 'ContactPoint',
          email: 'support@bytenodes.id',
          contactType: 'Customer Support'
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Get in Touch"
        description="Contact ByteNodes for hosting support and inquiries. Available via WhatsApp, Email, Discord, and Instagram. 24/7 customer support for all hosting services."
        keywords="ByteNodes contact, hosting support, customer service, technical support, WhatsApp support"
        canonicalUrl="https://bytenodes.icu/contact"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />
      
      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hubungi <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hubungi kami melalui channel yang Anda preferensikan
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <a 
                href="https://wa.me/6285126080236" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-cyan transition-colors">WhatsApp</h3>
                  <p className="text-muted-foreground">+62 851-2608-0236</p>
                  <p className="text-sm text-cyan mt-1">Chat langsung dengan kami</p>
                </div>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <a 
                href="mailto:support@bytenodes.id"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                  <Mail className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-cyan transition-colors">Email</h3>
                  <p className="text-muted-foreground">support@bytenodes.id</p>
                  <p className="text-sm text-cyan mt-1">Kirim email kepada kami</p>
                </div>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <a 
                href="tel:+6285126080236"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                  <Phone className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-cyan transition-colors">Telepon</h3>
                  <p className="text-muted-foreground">+62 851-2608-0236</p>
                  <p className="text-sm text-cyan mt-1">Hubungi kami kapan saja</p>
                </div>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <a 
                href="https://www.instagram.com/bytenodeshost"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                  <InstagramIcon className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-cyan transition-colors">Instagram</h3>
                  <p className="text-muted-foreground">@bytenodeshost</p>
                  <p className="text-sm text-cyan mt-1">Ikuti kami di Instagram</p>
                </div>
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow md:col-span-2">
              <a 
                href="https://discord.gg/2PMmPp6Yx8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                  <FaDiscord className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="font-bold mb-1 group-hover:text-cyan transition-colors">Discord</h3>
                  <p className="text-muted-foreground">Bergabung ke server Discord kami</p>
                  <p className="text-sm text-cyan mt-1">Dukungan komunitas dan pengumuman</p>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
