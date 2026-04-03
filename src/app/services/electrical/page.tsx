import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ElectricalServices from "@/components/ElectricalServices";
import CTABanner from "@/components/CTABanner";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[3];
const PAGE_URL = "https://ssps.om/services/electrical";

export const metadata: Metadata = {
  title: "Electrical & Instrumentation — 11kV to 132kV Infrastructure",
  description:
    "SSPS delivers complete E&I solutions in Oman — overhead line construction, substation builds (11kV to 132kV), SCADA integration, transformer installation, and full commissioning for oilfield and industrial sites.",
  keywords: [
    "electrical instrumentation Oman",
    "substation construction Oman",
    "132kV substation",
    "11kV overhead line",
    "high voltage installation Oman",
    "SCADA oil gas",
    "E&I oilfield Oman",
    "transformer installation",
    "switchgear installation",
    "power infrastructure Oman",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Electrical & Instrumentation | SSPS",
    description: service.description,
    images: [{ url: "/img/electric.webp", width: 1200, height: 630, alt: "SSPS Electrical & Instrumentation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical & Instrumentation | SSPS",
    description: service.description,
    images: ["/img/electric.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical & Instrumentation",
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Seven Star Petroleum Services LLC",
    url: "https://ssps.om",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: "Electrical & Instrumentation Engineering",
  url: PAGE_URL,
};

export default function ElectricalPage() {
  return (
    <>
      <Script
        id="ld-electrical"
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
        <ElectricalServices />
        <CTABanner />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

