import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { Server, Shield, Users, Award, Globe, Zap } from "lucide-react";
import SEO from "@/components/SEO";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "ByteNodes",
      url: "https://bytenodes.icu",
      logo: "https://bytenodes.icu/favicon.png",
      foundingDate: "2024",
      founders: [
        {
          "@type": "Person",
          name: "Salman",
        },
        {
          "@type": "Person",
          name: "Davin",
        },
      ],
      description:
        "ByteNodes started as a passion project between two students from SMK Negeri 13 Bandung and has grown into a trusted hosting provider serving clients across Indonesia.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - Our Story"
        description="Learn about ByteNodes, founded by Salman and Davin from SMK Negeri 13 Bandung. From a student passion project to a trusted hosting provider serving clients across Indonesia."
        keywords="ByteNodes about, hosting company, Indonesia hosting, SMK Negeri 13 Bandung, web hosting company"
        canonicalUrl="https://bytenodes.icu/about"
        structuredData={structuredData}
      />
      <AnnouncementBanner />
      <Navbar />

      <div className="pt-32 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tim di Balik ByteNodes
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Orang-orang yang bekerja setiap hari untuk memastikan layanan
            hosting Anda tetap cepat, aman, dan dapat diandalkan.
          </p>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Davin Maritza",
                role: "Chief Executive Officer",
                image: "https://davinn.net/assets/davin-photo-DW-sg1Ch.jpg",
                link: "https://davinn.net",
              },
              {
                name: "Rez",
                role: "Chief Technology Officer",
                image: "https://www.vstn.cloud/assets/portrait-Dv29Ad6U.jpg",
                link: "https://www.vstn.cloud",
              },
              {
                name: "Fauzaro01",
                role: "Operations Manager",
                image: "https://avatars.githubusercontent.com/u/71895143?v=4",
                link: "https://fauzaro.web.id",
              },
            ].map((member) => (
              <Link
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                key={member.name}
              >
                <div
                  key={member.name}
                  className="bg-card border rounded-xl p-6 text-center hover:border-cyan transition-all"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                  />

                  <h3 className="text-xl font-bold">{member.name}</h3>

                  <p className="text-cyan font-medium">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
