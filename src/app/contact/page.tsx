import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, Instagram as InstagramIcon } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Hubungi Kami - Support 24/7 ByteNodes | Discord, Email, WhatsApp",
  description: "Hubungi tim support ByteNodes 24/7 melalui Discord, Email, WhatsApp, atau Instagram. Kami siap membantu Anda dengan pertanyaan tentang game server, VPS, web hosting, dan layanan lainnya.",
  keywords: [
    "kontak bytenodes",
    "support hosting 24/7",
    "customer service hosting",
    "discord support indonesia",
    "whatsapp hosting support",
    "bantuan teknis hosting"
  ],
  alternates: {
    canonical: "https://bytenodes.com/contact",
  },
  openGraph: {
    title: "Hubungi ByteNodes - Support 24/7 Siap Membantu",
    description: "Tim support ByteNodes tersedia 24/7 untuk membantu Anda. Hubungi kami via Discord, Email, atau WhatsApp.",
    url: "https://bytenodes.com/contact",
  },
  twitter: {
    card: "summary",
    title: "Hubungi ByteNodes - Support 24/7",
    description: "Hubungi tim support ByteNodes 24/7 melalui berbagai channel.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
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
}
