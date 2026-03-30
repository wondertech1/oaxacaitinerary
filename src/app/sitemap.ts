import type { MetadataRoute } from "next";

const BASE_URL = "https://oaxacaitinerary.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/oaxaca-1-day-itinerary`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oaxaca-2-day-itinerary`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oaxaca-3-day-itinerary`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oaxaca-city-4-day-itinerary`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oaxaca-5-day-itinerary`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/oaxaca-7-day-itinerary`,
      lastModified: new Date("2026-03-30"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/where-to-stay-oaxaca`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-street-food-guide`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/monte-alban-day-trip`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-budget-guide`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/getting-around-oaxaca`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/mercado-20-de-noviembre-guide`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-mezcal-guide`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-day-trips`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-cultural-experiences`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/best-time-to-visit-oaxaca`,
      lastModified: new Date("2026-03-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-safety-tips`,
      lastModified: new Date("2026-03-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-nightlife-guide`,
      lastModified: new Date("2026-03-27"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/oaxaca-photography-spots`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
