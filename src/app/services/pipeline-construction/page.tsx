import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import PipelineConstruction from "@/components/PipelineConstruction";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[4];

export const metadata: Metadata = {
  title: "Pipeline Construction",
  description: service.description,
};

export default function PipelineConstructionPage() {
  return (
    <>
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
        <PipelineConstruction />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
