import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ByteNodes - Professional Hosting Solutions",
    template: "%s | ByteNodes",
  },
  description:
    "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services.",
  keywords:
    "hosting, VPS, dedicated server, Discord bot hosting, website hosting, cloud hosting, ByteNodes",
  authors: [{ name: "ByteNodes" }],
  metadataBase: new URL("https://bytenodes.icu"),
  openGraph: {
    title: "ByteNodes - Professional Hosting Solutions",
    description:
      "Enterprise-grade hosting solutions with 99.9% uptime guarantee",
    type: "website",
    url: "https://bytenodes.icu/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "ByteNodes",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ByteNodes",
    creator: "@ByteNodes",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "theme-color": "#0EA5E9",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
