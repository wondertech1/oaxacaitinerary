interface BreadcrumbItem {
  name: string;
  href: string;
}

interface StructuredDataProps {
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    url: string;
  };
  faqs?: { question: string; answer: string }[];
}

export default function StructuredData({
  breadcrumbs,
  article,
  faqs,
}: StructuredDataProps) {
  const schemas = [];

  // Website schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Oaxaca Itinerary",
    url: "https://oaxacaitinerary.com",
  });

  // Breadcrumbs
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `https://oaxacaitinerary.com${item.href}`,
      })),
    });
  }

  // Article
  if (article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      url: article.url,
      publisher: {
        "@type": "Organization",
        name: "Oaxaca Itinerary",
        url: "https://oaxacaitinerary.com",
      },
      about: {
        "@type": "TouristDestination",
        name: "Oaxaca City",
        description: "Cultural capital of southern Mexico",
      },
    });
  }

  // FAQPage
  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
