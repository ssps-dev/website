import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import DrillingServices from "@/components/DrillingServices";
import CTABanner from "@/components/CTABanner";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[0];
const PAGE_URL = "https://ssps.om/services/drilling";

export const metadata: Metadata = {
  title: "Drilling Services — Oil, Water & Mining Well Drilling",
  description:
    "SSPS provides end-to-end drilling solutions in Oman — oil well, water well, and mining well drilling with a 550–2000HP rig fleet, wireline, slickline, coil tubing, cementing, and more.",
  keywords: [
    "drilling services Oman",
    "oil well drilling Oman",
    "water well drilling",
    "mining well drilling",
    "workover rig Oman",
    "wireline services",
    "slickline services",
    "coil tubing",
    "cementing services",
    "mud logging",
    "well completion Oman",
    "hydraulic workover unit",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Drilling Services | SSPS — Seven Star Petroleum Services",
    description: service.description,
    images: [{ url: "/img/drilling.webp", width: 1200, height: 630, alt: "SSPS Drilling Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drilling Services | SSPS",
    description: service.description,
    images: ["/img/drilling.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Drilling Services",
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Seven Star Petroleum Services LLC",
    url: "https://ssps.om",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: "Oilfield Drilling Services",
  url: PAGE_URL,
};

export default function DrillingPage() {
  return (
    <>
      <Script
        id="ld-drilling"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="relative z-[1]">
        <ServiceHero
          number={service.number}
          subtitle={service.subtitle}
          titleLine1={service.titleLine1}
          titleAccent={service.titleAccent}
          description={service.description}
          stats={service.stats}
          iconName={service.iconName}
        />
        <DrillingServices />
        <CTABanner />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

