import type { Metadata } from "next";

export const SITE_URL = "https://oaxacaitinerary.com";
export const SITE_NAME = "Oaxaca Itinerary";

export function generateGuideMetadata({
  title,
  description,
  slug,
  keywords = [],
  publishedTime,
  modifiedTime,
}: {
  title: string;
  description: string;
  slug: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const url = `${SITE_URL}/${slug}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "article",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
