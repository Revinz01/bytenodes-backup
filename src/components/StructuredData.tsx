"use client";

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ByteNodes",
    "url": "https://bytenodes.com",
    "logo": "https://bytenodes.com/logo.png",
    "description": "Premium game server hosting, VPS, and custom development services in Indonesia",
    "sameAs": [
      "https://discord.gg/2PMmPp6Yx8",
      "https://instagram.com/bytenodes"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressRegion": "Indonesia"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const WebsiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ByteNodes",
    "url": "https://bytenodes.com",
    "description": "Premium game server hosting, VPS, Discord bot, and web hosting services in Indonesia",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bytenodes.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ProductSchema = ({ 
  name, 
  description, 
  price, 
  currency = "IDR",
  category 
}: {
  name: string;
  description: string;
  price: number;
  currency?: string;
  category: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "category": category,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "ByteNodes"
      }
    },
    "brand": {
      "@type": "Brand",
      "name": "ByteNodes"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema = ({ faqs }: { faqs: Array<{ q: string; a: string }> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const BreadcrumbSchema = ({ 
  items 
}: { 
  items: Array<{ name: string; url: string }> 
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
