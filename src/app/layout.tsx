import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ssps.om";
const SITE_NAME = "SSPS";
const SITE_DESCRIPTION =
  "Seven Star Petroleum Services LLC — Full-spectrum oilfield services provider in Oman. Drilling & well services, equipment trading, rig maintenance, electrical & instrumentation, and pipeline construction.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "SSPS — Seven Star Petroleum Services | Oilfield Services in Oman",
    template: "%s | SSPS",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "SSPS",
    "Seven Star Petroleum Services",
    "oilfield services Oman",
    "drilling services Oman",
    "well drilling Oman",
    "workover rigs",
    "pipeline construction",
    "electrical instrumentation oil gas",
    "rig maintenance",
    "petroleum services Muscat",
    "oil well drilling",
    "water well drilling",
    "mining well drilling",
    "mud pumps",
    "drilling rig components",
    "high voltage installations",
    "substation construction",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SSPS — Seven Star Petroleum Services | Oilfield Services in Oman",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "SSPS — Seven Star Petroleum Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSPS — Seven Star Petroleum Services | Oilfield Services in Oman",
    description: SITE_DESCRIPTION,
    images: ["/img/og-image.webp"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Seven Star Petroleum Services LLC",
  alternateName: "SSPS",
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.webp`,
  description: SITE_DESCRIPTION,
  foundingDate: "1998",
  foundingLocation: {
    "@type": "Place",
    name: "Muscat, Sultanate of Oman",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Muscat",
    addressCountry: "OM",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@ssps.om",
    contactType: "customer service",
    availableLanguage: ["English", "Arabic"],
  },
  areaServed: {
    "@type": "Country",
    name: "Oman",
  },
  knowsAbout: [
    "Oil Well Drilling",
    "Water Well Drilling",
    "Rig Maintenance",
    "Pipeline Construction",
    "Electrical & Instrumentation",
    "Equipment Trading",
    "Well Intervention",
    "Oilfield Services",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Oilfield Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drilling Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rig Components & Equipment Trading" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rig & Component Maintenance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical & Instrumentation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pipeline Construction" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

