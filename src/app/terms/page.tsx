import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import legalData from "@/data/legal.json";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Layanan - Terms of Service | ByteNodes",
  description: "Syarat dan ketentuan penggunaan layanan ByteNodes. Pahami hak dan tanggung jawab Anda sebagai pengguna layanan hosting, VPS, game server, dan layanan lainnya.",
  keywords: [
    "syarat ketentuan bytenodes",
    "terms of service hosting",
    "aturan penggunaan layanan",
    "kebijakan layanan hosting"
  ],
  alternates: {
    canonical: "https://bytenodes.com/terms",
  },
  openGraph: {
    title: "Syarat & Ketentuan Layanan ByteNodes",
    description: "Baca syarat dan ketentuan penggunaan layanan ByteNodes.",
    url: "https://bytenodes.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  const { termsOfService } = legalData;

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-32 pb-12 px-4 bg-gradient-to-b from-navy-dark to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {termsOfService.title}
          </h1>
          <p className="text-muted-foreground">
            Last Updated: {termsOfService.lastUpdated}
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {termsOfService.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
