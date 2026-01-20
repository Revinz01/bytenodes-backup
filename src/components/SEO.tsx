import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  canonicalUrl?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SEO = ({
  title = "ByteNodes - Professional Hosting Solutions",
  description = "Enterprise-grade hosting solutions with 99.9% uptime guarantee. VPS, Dedicated Servers, Discord Bots, and Website Hosting services.",
  keywords = "hosting, VPS, dedicated server, Discord bot hosting, website hosting, cloud hosting, ByteNodes",
  ogImage = "https://bytenodes.icu/og-image.png",
  ogType = "website",
  ogUrl,
  twitterCard = "summary_large_image",
  canonicalUrl,
  author = "ByteNodes",
  publishedTime,
  modifiedTime,
  noindex = false,
  structuredData,
}: SEOProps) => {
  const siteUrl = "https://bytenodes.icu";
  const fullTitle = title.includes("ByteNodes")
    ? title
    : `${title} | ByteNodes`;
  const currentUrl =
    ogUrl || canonicalUrl || `${siteUrl}${window.location.pathname}`;

  // Default structured data for Organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ByteNodes",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    description: description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "support@bytenodes.icu",
    },
    sameAs: [
      "https://www.instagram.com/bytenodeshost",
      "https://discord.gg/wNAPWz6CVV",
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="ByteNodes" />
      <meta property="og:locale" content="en_US" />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ByteNodes" />
      <meta name="twitter:creator" content="@ByteNodes" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#0EA5E9" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Structured Data */}
      {structuredData ? (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify(defaultStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
