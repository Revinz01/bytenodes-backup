import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/providers/QueryProvider";
import { PageTransition } from "@/components/PageTransition";
import { OrganizationSchema, WebsiteSchema } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bytenodes.com'),
  title: {
    default: "ByteNodes - Game Server Hosting, VPS, Discord Bot Indonesia",
    template: "%s | ByteNodes"
  },
  description: "ByteNodes menyediakan game server hosting (Minecraft, FiveM, Rust), VPS murah, Discord bot custom, dan web hosting di Indonesia. Performa tinggi, support 24/7, uptime 99.9%. Harga mulai Rp 8.000/GB.",
  keywords: [
    "game server hosting indonesia",
    "minecraft server hosting",
    "fivem hosting indonesia",
    "vps murah indonesia",
    "discord bot hosting",
    "web hosting indonesia",
    "dedicated server indonesia",
    "pterodactyl hosting",
    "rdp murah indonesia",
    "cloud hosting terpercaya",
    "rust server hosting",
    "ark server hosting",
    "bytenodes",
  ],
  authors: [{ name: "ByteNodes Indonesia", url: "https://bytenodes.com" }],
  creator: "ByteNodes Indonesia",
  publisher: "ByteNodes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://bytenodes.com",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://bytenodes.com",
    title: "ByteNodes - Game Server Hosting & VPS Murah Indonesia",
    description: "Hosting game server terbaik untuk Minecraft, FiveM, Rust. VPS murah, Discord bot custom, dan web hosting dengan support 24/7 dan uptime 99.9%.",
    siteName: "ByteNodes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteNodes - Premium Hosting Services Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteNodes - Game Server Hosting & VPS Murah Indonesia",
    description: "Hosting game server terbaik untuk Minecraft, FiveM, Rust. VPS murah dan Discord bot custom dengan support 24/7.",
    images: ["/og-image.png"],
    creator: "@bytenodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <QueryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <PageTransition>
                {children}
              </PageTransition>
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
