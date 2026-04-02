import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import RigMaintenance from "@/components/RigMaintenance";
import CTABanner from "@/components/CTABanner";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[2];
const PAGE_URL = "https://ssps.om/services/rig-maintenance";

export const metadata: Metadata = {
  title: "Rig & Component Maintenance — 24/7 O&M Services",
  description:
    "SSPS provides round-the-clock operations and maintenance for drilling and workover rigs in Oman — including mud pump overhaul, draw-works servicing, preventive maintenance programs, and emergency breakdown response.",
  keywords: [
    "rig maintenance Oman",
    "workover rig servicing",
    "mud pump overhaul",
    "draw-works maintenance",
    "preventive maintenance oilfield",
    "drilling rig repair Oman",
    "component overhaul",
    "O&M oilfield Oman",
    "rig inspection",
    "24/7 rig support",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Rig & Component Maintenance | SSPS",
    description: service.description,
    images: [{ url: "/img/maintenance.webp", width: 1200, height: 630, alt: "SSPS Rig Maintenance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rig & Component Maintenance | SSPS",
    description: service.description,
    images: ["/img/maintenance.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rig & Component Maintenance",
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Seven Star Petroleum Services LLC",
    url: "https://ssps.om",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: "Oilfield Equipment Maintenance",
  url: PAGE_URL,
};

export default function RigMaintenancePage() {
  return (
    <>
      <Script
        id="ld-maintenance"
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
        <RigMaintenance />
        <CTABanner />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

