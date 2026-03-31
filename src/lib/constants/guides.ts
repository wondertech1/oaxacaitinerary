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
    image: "/images/1-day-itinerary.jpg",
    imageAlt: "A man walking down a sunlit Oaxaca street lined with colonial buildings",
  },
  {
    label: "2-Day Itinerary",
    href: "/oaxaca-2-day-itinerary",
    description: "A perfect weekend with food, museums, and the Jalatlaco neighborhood.",
    category: "planning",
    accentColor: "anil",
    image: "/images/2-day-itinerary.jpg",
    imageAlt: "Colorful paper streamers decorating a street light in Oaxaca",
  },
  {
    label: "3-Day Itinerary",
    href: "/oaxaca-3-day-itinerary",
    description: "The long weekend sweet spot — add Monte Albán and the real local market.",
    category: "planning",
    accentColor: "nopal",
    image: "/images/3-day-itinerary.jpg",
    imageAlt: "Red and white painted wall in the streets of Oaxaca de Juárez",
  },
  {
    label: "4-Day Itinerary",
    href: "/oaxaca-city-4-day-itinerary",
    kicker: "Start Here",
    description: "Day-by-day plan with the right markets, the right mole, and ruins without crowds.",
    category: "planning",
    accentColor: "barro",
    image: "/images/4-day-itinerary.jpg",
    imageAlt: "Panoramic view of Oaxaca City with mountains in the distance",
  },
  {
    label: "5-Day Itinerary",
    href: "/oaxaca-5-day-itinerary",
    kicker: "Recommended",
    description: "The ideal trip — city + Valles Centrales loop with Mitla and Hierve el Agua.",
    category: "planning",
    accentColor: "mezcal",
    image: "/images/5-day-itinerary.jpg",
    imageAlt: "Natural mineral formations at Hierve el Agua overlooking the Oaxaca Valley",
  },
  {
    label: "7-Day Itinerary",
    href: "/oaxaca-7-day-itinerary",
    description: "Full immersion — Sierra Norte hiking, artisan villages, and a cooking class.",
    category: "planning",
    accentColor: "barro",
    image: "/images/7-day-itinerary.jpg",
    imageAlt: "Mountain range with clouds rolling over the peaks",
  },
  {
    label: "Where to Stay",
    href: "/where-to-stay-oaxaca",
    description: "Four neighborhoods compared with real prices, walkability scores, and honest vibes.",
    category: "planning",
    accentColor: "anil",
    image: "/images/where-to-stay.jpg",
    imageAlt: "A large colonial building with a clock tower in Oaxaca",
  },
  {
    label: "Street Food Guide",
    href: "/oaxaca-street-food-guide",
    description: "12 things to eat and exactly where to find them, with prices in MXN.",
    category: "food",
    accentColor: "barro",
    image: "/images/street-food.jpg",
    imageAlt: "Mexican street tacos with fresh ingredients on a wooden board",
  },
  {
    label: "Monte Albán Day Trip",
    href: "/monte-alban-day-trip",
    description: "Is it actually worth a half-day? An honest verdict with transport costs.",
    category: "day-trips",
    accentColor: "nopal",
    image: "/images/monte-alban.jpg",
    imageAlt: "Ancient stone structure under a bright blue sky",
  },
  {
    label: "Budget Guide",
    href: "/oaxaca-budget-guide",
    description: "Realistic daily costs for 2026 across three budget tiers.",
    category: "planning",
    accentColor: "mezcal",
    image: "/images/budget-guide.jpg",
    imageAlt: "A pile of silver Mexican peso coins",
  },
  {
    label: "Getting Around",
    href: "/getting-around-oaxaca",
    description: "Walking, taxis, DiDi, colectivos — how to move without a car.",
    category: "planning",
    accentColor: "anil",
    image: "/images/getting-around.jpg",
    imageAlt: "People walking on a sunny street under a clear blue sky",
  },
  {
    label: "Mercado Guide",
    href: "/mercado-20-de-noviembre-guide",
    description: "Stall-by-stall guide to Oaxaca's legendary smoke-filled market.",
    category: "food",
    accentColor: "nopal",
    image: "/images/mercado-guide.jpg",
    imageAlt: "Bustling scene at an Oaxacan market with vendors and colorful goods",
  },
  {
    label: "Mezcal Guide",
    href: "/oaxaca-mezcal-guide",
    description: "Mezcal 101: what to drink, where to drink it, and which distilleries to visit.",
    category: "food",
    accentColor: "mezcal",
    image: "/images/mezcal-guide.jpg",
    imageAlt: "A bottle of artisanal mezcal sitting on a bed of gravel",
  },
  {
    label: "Day Trips",
    href: "/oaxaca-day-trips",
    description: "Hierve el Agua, Mitla, El Tule, and textile villages — with honest verdicts.",
    category: "day-trips",
    accentColor: "nopal",
    image: "/images/day-trips.jpg",
    imageAlt: "Tall petrified rock formation against the sky near Hierve el Agua",
  },
  {
    label: "Cultural Experiences",
    href: "/oaxaca-cultural-experiences",
    description: "Cooking classes, artisan workshops, and festivals worth planning around.",
    category: "culture",
    accentColor: "anil",
    image: "/images/cultural-experiences.jpg",
    imageAlt: "Multicolored handwoven textiles displayed in an Oaxacan market",
  },
  {
    label: "Best Time to Visit",
    href: "/best-time-to-visit-oaxaca",
    description: "Month-by-month breakdown of weather, crowds, prices, and festivals.",
    category: "planning",
    accentColor: "barro",
    image: "/images/best-time-to-visit.jpg",
    imageAlt: "Baroque church with twin towers and dome against a clear sky",
  },
  {
    label: "Safety Tips",
    href: "/oaxaca-safety-tips",
    description: "Neighborhood safety, scams to avoid, health tips, and emergency essentials.",
    category: "planning",
    accentColor: "nopal",
    image: "/images/safety-tips.jpg",
    imageAlt: "A large colonial building with a dome in Oaxaca",
  },
  {
    label: "Nightlife Guide",
    href: "/oaxaca-nightlife-guide",
    description: "Mezcalerías, live music, rooftop bars, and where locals go after dark.",
    category: "culture",
    accentColor: "anil",
    image: "/images/nightlife-guide.jpg",
    imageAlt: "Dimly lit bar interior with shelves of bottles and warm neon lighting",
  },
  {
    label: "Photography Spots",
    href: "/oaxaca-photography-spots",
    description: "12 best photo locations with optimal times, directions, and lighting tips.",
    category: "culture",
    accentColor: "mezcal",
    image: "/images/photography-spots.jpg",
    imageAlt: "A white and blue church with a vivid blue roof in Oaxaca",
  },
];

export function getGuideImage(href: string): { image: string; imageAlt: string } | null {
  const guide = guideLinks.find((g) => g.href === href);
  return guide ? { image: guide.image, imageAlt: guide.imageAlt } : null;
}

export const BASE_URL = "https://oaxacaitinerary.com";
