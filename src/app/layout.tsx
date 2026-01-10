import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/providers/QueryProvider";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "ByteNodes - Premium Game Server Hosting & Development Services",
    template: "%s | ByteNodes"
  },
  description: "ByteNodes offers premium game server hosting, VPS solutions, custom bot development, and professional website services. Experience high-performance hosting with 24/7 support.",
  keywords: [
    "game server hosting",
    "VPS hosting",
    "Discord bot development",
    "website development",
    "Minecraft server",
    "FiveM hosting",
    "server hosting",
    "cloud hosting",
    "dedicated servers"
  ],
  authors: [{ name: "ByteNodes" }],
  creator: "ByteNodes",
  publisher: "ByteNodes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: "ByteNodes - Premium Game Server Hosting & Development Services",
    description: "ByteNodes offers premium game server hosting, VPS solutions, custom bot development, and professional website services. Experience high-performance hosting with 24/7 support.",
    siteName: "ByteNodes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteNodes - Premium Hosting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteNodes - Premium Game Server Hosting & Development Services",
    description: "ByteNodes offers premium game server hosting, VPS solutions, custom bot development, and professional website services.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
