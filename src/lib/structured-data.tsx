import Script from "next/script";

export interface StructuredDataProps {
  type: "Organization" | "WebPage" | "BreadcrumbList" | "LocalBusiness";
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };

  const schemaData = {
    ...baseData,
    ...data,
  };

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}

// Organization schema for footer/contact
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ByteNodes",
  url: "https://bytenodes.icu",
  logo: "https://bytenodes.icu/logo.png",
  description:
    "Professional hosting solutions including VPS, Dedicated Servers, Discord Bot Hosting, and Website Hosting services",
  sameAs: ["https://twitter.com/ByteNodes", "https://discord.gg/bytenodes"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-8xx-xxxx-xxxx",
    contactType: "Customer Support",
    areaServed: "ID,SG,MY,TH,VN",
    availableLanguage: ["id", "en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "ByteNodes Headquarters",
    addressCountry: "ID",
  },
};

// Local Business schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ByteNodes",
  image: "https://bytenodes.icu/logo.png",
  description: "Leading hosting provider in Indonesia with global data centers",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
  },
  areaServed: ["ID", "SG", "MY", "TH", "VN"],
  priceRange: "IDR 50000 - IDR 2000000",
};

// Service schema
export const createServiceSchema = (
  name: string,
  description: string,
  priceRange: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "ByteNodes",
    url: "https://bytenodes.icu",
  },
  areaServed: ["ID", "SG", "MY", "TH", "VN"],
  priceRange,
});

// BreadcrumbList schema generator
export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
