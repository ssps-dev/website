import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import DrillingServices from "@/components/DrillingServices";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[0];

export const metadata: Metadata = {
  title: "Drilling & Upstream Well Services",
  description: service.description,
};

export default function DrillingPage() {
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
        <DrillingServices />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
