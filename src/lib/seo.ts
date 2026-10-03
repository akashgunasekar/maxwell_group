export const siteConfig = {
  name: "Maxwell Group",
  shortName: "Maxwell Group",
  tagline: "Integrated Engineering & Food Equipment Solutions",
  description:
    "Maxwell Group brings together specialized brands providing commercial kitchen equipment, induction technology and engineered food-processing solutions.",
  url: "https://maxwellgroup.example",
  ogImage: "https://maxwellgroup.example/images/maxwell-group-logo.png",
  brandNames: [
    "Vector Food Equipments",
    "Maxwell Induction",
    "SK Power Cook Machinery",
  ],
  keywords: [
    "Maxwell Group",
    "Commercial Kitchen Equipment",
    "Commercial Induction Cooking",
    "Food Processing Machinery",
    "Vector Food Equipments",
    "Maxwell Induction",
    "SK Power Cook Machinery",
    "Commercial Kitchen Solutions India",
    "Industrial Kitchen Engineering",
    "Chennai Commercial Kitchen Equipment",
  ],
  contact: {
    telephone: "+91-89258-57821",
    email: "contact@maxwellgroup.example",
    address: {
      streetAddress: "PKM Industrial Complex, School Road, Mel Ayanambakkam",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600095",
      addressCountry: "IN",
    },
  },
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maxwell Group",
    alternateName: "Maxwell Engineering Group",
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/maxwell-group-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.telephone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Tamil", "Hindi"],
      },
    ],
    subOrganization: [
      {
        "@type": "Organization",
        name: "Vector Food Equipments",
        description: "Complete commercial kitchen equipment and kitchen solutions.",
        url: "https://www.vectorfoodequipments.com/",
      },
      {
        "@type": "Organization",
        name: "Maxwell Induction",
        description:
          "Commercial induction technology and professional induction equipment.",
        url: "https://www.maxwellinduction.com/",
      },
      {
        "@type": "Organization",
        name: "SK Power Cook Machinery",
        description:
          "Engineered solutions for commercial food processing and industrial cooking machinery.",
        url: "https://www.skpcm.com/",
      },
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
