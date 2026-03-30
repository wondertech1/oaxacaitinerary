import type { Metadata } from "next";
import { Libre_Baskerville, Karla, Fira_Code } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oaxaca Itinerary 2026 — Local-Feeling Guides to Oaxaca City",
    template: "%s | Oaxaca Itinerary",
  },
  description:
    "Opinionated Oaxaca City guides with day-by-day itineraries, market recommendations, and actual prices in MXN. Skip the tourist traps.",
  metadataBase: new URL("https://oaxacaitinerary.com"),
  openGraph: {
    siteName: "Oaxaca Itinerary",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${karla.variable} ${firaCode.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6D9HW5S2H"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6D9HW5S2H');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-lana text-copal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
