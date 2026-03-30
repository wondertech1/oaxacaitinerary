// All images sourced from Unsplash (https://unsplash.com)
// Free to use under the Unsplash License: https://unsplash.com/license

export interface GuideLink {
  label: string;
  href: string;
  kicker?: string;
  description?: string;
  category: "planning" | "food" | "culture" | "day-trips";
  accentColor: string;
  image: string;
  imageAlt: string;
}

export const guideLinks: GuideLink[] = [
  {
    label: "1-Day Itinerary",
    href: "/oaxaca-1-day-itinerary",
    description: "The essential sprint — markets, mezcal, and mole in a single day.",
    category: "planning",
    accentColor: "barro",
    image: "https://images.unsplash.com/photo-1562215589-b6d0ed3cfec8?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A man walking down a sunlit Oaxaca street lined with colonial buildings",
  },
  {
    label: "2-Day Itinerary",
    href: "/oaxaca-2-day-itinerary",
    description: "A perfect weekend with food, museums, and the Jalatlaco neighborhood.",
    category: "planning",
    accentColor: "anil",
    image: "https://images.unsplash.com/photo-1643584872305-9dffde0d7a0f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Colorful paper streamers decorating a street light in Oaxaca",
  },
  {
    label: "3-Day Itinerary",
    href: "/oaxaca-3-day-itinerary",
    description: "The long weekend sweet spot — add Monte Albán and the real local market.",
    category: "planning",
    accentColor: "nopal",
    image: "https://images.unsplash.com/photo-1572999490988-4bf6bc62da0d?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Red and white painted wall in the streets of Oaxaca de Juárez",
  },
  {
    label: "4-Day Itinerary",
    href: "/oaxaca-city-4-day-itinerary",
    kicker: "Start Here",
    description: "Day-by-day plan with the right markets, the right mole, and ruins without crowds.",
    category: "planning",
    accentColor: "barro",
    image: "https://images.unsplash.com/photo-1641511255914-a30e17ef2071?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Panoramic view of Oaxaca City with mountains in the distance",
  },
  {
    label: "5-Day Itinerary",
    href: "/oaxaca-5-day-itinerary",
    kicker: "Recommended",
    description: "The ideal trip — city + Valles Centrales loop with Mitla and Hierve el Agua.",
    category: "planning",
    accentColor: "mezcal",
    image: "https://images.unsplash.com/photo-1633666681329-e9fe8740c15c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Natural mineral formations at Hierve el Agua overlooking the Oaxaca Valley",
  },
  {
    label: "7-Day Itinerary",
    href: "/oaxaca-7-day-itinerary",
    description: "Full immersion — Sierra Norte hiking, artisan villages, and a cooking class.",
    category: "planning",
    accentColor: "barro",
    image: "https://images.unsplash.com/photo-1562869929-3435690bb969?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Mountain range with clouds rolling over the peaks",
  },
  {
    label: "Where to Stay",
    href: "/where-to-stay-oaxaca",
    description: "Four neighborhoods compared with real prices, walkability scores, and honest vibes.",
    category: "planning",
    accentColor: "anil",
    image: "https://images.unsplash.com/photo-1759255263134-dd8367a0a88c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A large colonial building with a clock tower in Oaxaca",
  },
  {
    label: "Street Food Guide",
    href: "/oaxaca-street-food-guide",
    description: "12 things to eat and exactly where to find them, with prices in MXN.",
    category: "food",
    accentColor: "barro",
    image: "https://images.unsplash.com/photo-1492760864391-753aaae87234?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Mexican street tacos with fresh ingredients on a wooden board",
  },
  {
    label: "Monte Albán Day Trip",
    href: "/monte-alban-day-trip",
    description: "Is it actually worth a half-day? An honest verdict with transport costs.",
    category: "day-trips",
    accentColor: "nopal",
    image: "https://images.unsplash.com/photo-1650158474392-4af97d0e148e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Ancient stone structure under a bright blue sky",
  },
  {
    label: "Budget Guide",
    href: "/oaxaca-budget-guide",
    description: "Realistic daily costs for 2026 across three budget tiers.",
    category: "planning",
    accentColor: "mezcal",
    image: "https://images.unsplash.com/photo-1627289110726-0f048ada5497?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A pile of silver Mexican peso coins",
  },
  {
    label: "Getting Around",
    href: "/getting-around-oaxaca",
    description: "Walking, taxis, DiDi, colectivos — how to move without a car.",
    category: "planning",
    accentColor: "anil",
    image: "https://images.unsplash.com/photo-1562657655-41d460951f7f?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "People walking on a sunny street under a clear blue sky",
  },
  {
    label: "Mercado Guide",
    href: "/mercado-20-de-noviembre-guide",
    description: "Stall-by-stall guide to Oaxaca's legendary smoke-filled market.",
    category: "food",
    accentColor: "nopal",
    image: "https://images.unsplash.com/photo-1496310646944-3203203f09bb?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Bustling scene at an Oaxacan market with vendors and colorful goods",
  },
  {
    label: "Mezcal Guide",
    href: "/oaxaca-mezcal-guide",
    description: "Mezcal 101: what to drink, where to drink it, and which distilleries to visit.",
    category: "food",
    accentColor: "mezcal",
    image: "https://images.unsplash.com/photo-1632225226406-f5f27f52aa6c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A bottle of artisanal mezcal sitting on a bed of gravel",
  },
  {
    label: "Day Trips",
    href: "/oaxaca-day-trips",
    description: "Hierve el Agua, Mitla, El Tule, and textile villages — with honest verdicts.",
    category: "day-trips",
    accentColor: "nopal",
    image: "https://images.unsplash.com/photo-1578940421555-2dcc68d56e50?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Tall petrified rock formation against the sky near Hierve el Agua",
  },
  {
    label: "Cultural Experiences",
    href: "/oaxaca-cultural-experiences",
    description: "Cooking classes, artisan workshops, and festivals worth planning around.",
    category: "culture",
    accentColor: "anil",
    image: "https://images.unsplash.com/photo-1566020589263-891b809ebf4b?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Multicolored handwoven textiles displayed in an Oaxacan market",
  },
  {
    label: "Best Time to Visit",
    href: "/best-time-to-visit-oaxaca",
    description: "Month-by-month breakdown of weather, crowds, prices, and festivals.",
    category: "planning",
    accentColor: "barro",
    image: "https://images.unsplash.com/photo-1641511256207-3e3ced99393e?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Baroque church with twin towers and dome against a clear sky",
  },
  {
    label: "Safety Tips",
    href: "/oaxaca-safety-tips",
    description: "Neighborhood safety, scams to avoid, health tips, and emergency essentials.",
    category: "planning",
    accentColor: "nopal",
    image: "https://images.unsplash.com/photo-1562869929-58a654dd235c?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A large colonial building with a dome in Oaxaca",
  },
  {
    label: "Nightlife Guide",
    href: "/oaxaca-nightlife-guide",
    description: "Mezcalerías, live music, rooftop bars, and where locals go after dark.",
    category: "culture",
    accentColor: "anil",
    image: "https://images.unsplash.com/photo-1732539408620-00e3d194ae5b?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "Dimly lit bar interior with shelves of bottles and warm neon lighting",
  },
  {
    label: "Photography Spots",
    href: "/oaxaca-photography-spots",
    description: "12 best photo locations with optimal times, directions, and lighting tips.",
    category: "culture",
    accentColor: "mezcal",
    image: "https://images.unsplash.com/photo-1754141897824-c2f437d87c36?w=1200&q=80&auto=format&fit=crop",
    imageAlt: "A white and blue church with a vivid blue roof in Oaxaca",
  },
];

export function getGuideImage(href: string): { image: string; imageAlt: string } | null {
  const guide = guideLinks.find((g) => g.href === href);
  return guide ? { image: guide.image, imageAlt: guide.imageAlt } : null;
}

export const BASE_URL = "https://oaxacaitinerary.com";
