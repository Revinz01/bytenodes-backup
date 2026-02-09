import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { organizationSchema } from "@/lib/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "ByteNodes - Professional Hosting Solutions Indonesia",
    template: "%s | ByteNodes",
  },
  description:
    "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bot Hosting, and Website Hosting services from ByteNodes Indonesia.",
  keywords:
    "hosting, VPS, dedicated server, Discord bot hosting, website hosting, cloud hosting, game server hosting, Indonesia, ByteNodes, professional hosting",
  authors: [{ name: "ByteNodes" }],
  metadataBase: new URL("https://bytenodes.icu"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ByteNodes - Professional Hosting Solutions",
    description:
      "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bot Hosting, Website Hosting.",
    type: "website",
    url: "https://bytenodes.icu/",
    siteName: "ByteNodes",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ByteNodes - Professional Hosting Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ByteNodes",
    creator: "@ByteNodes",
    title: "ByteNodes - Professional Hosting Solutions",
    description:
      "Enterprise-grade hosting solutions with 99.9% uptime guarantee",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "theme-color": "#0EA5E9",
    "google-site-verification": "add your verification code here",
  },
  alternates: {
    canonical: "https://bytenodes.icu/",
    languages: {
      "en-US": "https://bytenodes.icu/",
      "id-ID": "https://bytenodes.icu/",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Google Analytics (add your GA ID) */}
        <meta name="google-site-verification" content="" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
