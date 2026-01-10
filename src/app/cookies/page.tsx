import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import legalData from "@/data/legal.json";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "ByteNodes Cookie Policy. Understand how we use cookies to improve your experience on our website.",
  openGraph: {
    title: "Cookie Policy | ByteNodes",
    description: "ByteNodes Cookie Policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  const { cookiePolicy } = legalData;
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{cookiePolicy.title}</h1>
          <p className="text-muted-foreground">Terakhir diperbarui: {cookiePolicy.lastUpdated}</p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {cookiePolicy.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
