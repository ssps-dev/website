import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import EquipmentTrading from "@/components/EquipmentTrading";
import CTABanner from "@/components/CTABanner";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[1];
const PAGE_URL = "https://ssps.om/services/equipment-trading";

export const metadata: Metadata = {
  title: "Rig Components & Equipment Trading — Drilling Machinery Supply",
  description:
    "SSPS supplies drilling rig components, mud pumps, draw-works, BOP stacks, and specialized oilfield accessories from global OEM and certified aftermarket suppliers to operations across Oman.",
  keywords: [
    "rig components Oman",
    "drilling equipment trading",
    "mud pumps Oman",
    "BOP stack supply",
    "draw-works supply",
    "drilling accessories",
    "oilfield equipment Oman",
    "drill string supply",
    "solids control equipment",
    "API certified equipment",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Rig Components & Equipment Trading | SSPS",
    description: service.description,
    images: [{ url: "/img/equipments.webp", width: 1200, height: 630, alt: "SSPS Equipment Trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rig Components & Equipment Trading | SSPS",
    description: service.description,
    images: ["/img/equipments.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rig Components & Equipment Trading",
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Seven Star Petroleum Services LLC",
    url: "https://ssps.om",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: "Oilfield Equipment Supply",
  url: PAGE_URL,
};

export default function EquipmentTradingPage() {
  return (
    <>
      <Script
        id="ld-equipment"
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
          image={service.image}
        />
        <EquipmentTrading />
        <CTABanner />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

