import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import PipelineConstruction from "@/components/PipelineConstruction";
import CTABanner from "@/components/CTABanner";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[4];
const PAGE_URL = "https://ssps.om/services/pipeline-construction";

export const metadata: Metadata = {
  title: "Pipeline Construction — Oil, Gas & Water Pipelines in Oman",
  description:
    "SSPS constructs oil, gas, water, and multi-phase pipelines across Oman — from route survey and welding (API 5L/1104) to hydrostatic testing, cathodic protection, pigging, and full commissioning.",
  keywords: [
    "pipeline construction Oman",
    "oil gas pipeline Oman",
    "water pipeline construction",
    "API 5L pipeline",
    "cathodic protection pipeline",
    "hydrostatic testing",
    "pipeline NDT inspection",
    "pipeline commissioning Oman",
    "pipeline welding Oman",
    "pipeline contractor Oman",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Pipeline Construction | SSPS",
    description: service.description,
    images: [{ url: "/img/pipeline.webp", width: 1200, height: 630, alt: "SSPS Pipeline Construction" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pipeline Construction | SSPS",
    description: service.description,
    images: ["/img/pipeline.webp"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pipeline Construction",
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Seven Star Petroleum Services LLC",
    url: "https://ssps.om",
  },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: "Pipeline Engineering & Construction",
  url: PAGE_URL,
};

export default function PipelineConstructionPage() {
  return (
    <>
      <Script
        id="ld-pipeline"
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
        <PipelineConstruction />
        <CTABanner />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

