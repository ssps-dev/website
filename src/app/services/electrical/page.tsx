import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/ServiceHero";
import ElectricalServices from "@/components/ElectricalServices";
import OtherServices from "@/components/OtherServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

const service = services[3];

export const metadata: Metadata = {
  title: "Electrical & Instrumentation",
  description: service.description,
};

export default function ElectricalPage() {
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
        <ElectricalServices />
        <OtherServices currentServiceId={service.id} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
